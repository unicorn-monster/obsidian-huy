#!/usr/bin/env node
// Deterministic retrieval — the ladder from the PDF, principle #3:
//   keywords → score catalogue WITHOUT opening files → open the single best
//   file → cut only the answering section → follow one pointer → print evidence.
// Zero LLM calls. The model sees the evidence exactly once, at the end.
//
//   node .brain/scripts/recall.mjs "câu hỏi"            evidence mode
//   node .brain/scripts/recall.mjs --list "câu hỏi"     top-10 scores, no file opened (debug)
//
// Pair mode: question mentions a product slug AND a method page scores →
// returns BOTH product evidence + method evidence (use case "ghép sản phẩm vào method").

import fs from 'node:fs';
import path from 'node:path';
import {
  VAULT, normalizeQuery, tokenize, fold, parseFrontmatter,
  loadCatalogue, loadTopicMap, ageDays,
} from './lib.mjs';

const args = process.argv.slice(2);
const listMode = args[0] === '--list';
let pinnedFile = null;
if (args[0] === '--file') {
  pinnedFile = args[1];
  args.splice(0, 2);
}
const question = (listMode ? args.slice(1) : args).join(' ').trim();
if (!question) {
  console.error('usage: recall.mjs [--list] [--file <vault-rel-path>] "question"');
  process.exit(1);
}

const qTokens = [...new Set(normalizeQuery(question))];
const catalogue = loadCatalogue();
const topicMap = loadTopicMap();

// product slugs = subfolders of wiki/products/
const productSlugs = catalogue
  .filter((e) => e.axis === 'wiki-product')
  .map((e) => e.path.split('/')[2])
  .filter((v, i, a) => a.indexOf(v) === i);
const qFold = fold(question);
const productInQ = productSlugs.find((s) => qFold.includes(s));

// ---------- scoring (never opens a file) ----------

const topicScore = {};
for (const t of topicMap) {
  const overlap = t.tokens.filter((tok) => qTokens.includes(tok)).length;
  if (overlap >= 2 || (overlap === 1 && t.tokens.length === 1)) {
    topicScore[t.path] = Math.max(topicScore[t.path] || 0, 4 + (overlap - 1));
  }
}

function scoreEntry(e) {
  let s = 0;
  const fileTokens = tokenize(path.basename(e.path, '.md'));
  const titleTokens = tokenize(e.title);
  const descTokens = tokenize(e.desc);
  for (const t of qTokens) {
    if (fileTokens.includes(t)) s += 4;
    if (titleTokens.includes(t)) s += 3;
    if (e.keywords.includes(t)) s += 2;
    if (descTokens.includes(t)) s += 1;
  }
  s += topicScore[e.path] || 0;
  if (productInQ && e.path.includes(productInQ)) s += 3;
  // wiki = SOURCE OF TRUTH đã chưng cất (CLAUDE.md) — ưu tiên hơn raw source khi điểm sát nhau
  if (s > 0 && e.axis.startsWith('wiki')) s += 3;
  return s;
}

let scored = catalogue
  .map((e) => ({ ...e, score: scoreEntry(e) }))
  .filter((e) => e.score > 0)
  .sort((a, b) => b.score - a.score);

// --file: pin 1 file (vd top hit từ qmd) — chỉ cắt section của file đó
if (pinnedFile) {
  const entry = catalogue.find((e) => e.path === pinnedFile);
  if (!entry) { console.error(`--file không có trong catalogue: ${pinnedFile}`); process.exit(1); }
  scored = [{ ...entry, score: scoreEntry(entry) || 1 }];
}

if (listMode) {
  for (const e of scored.slice(0, 10)) {
    console.log(`${String(e.score).padStart(3)}  ${e.axis.padEnd(14)} ${e.path}`);
  }
  process.exit(0);
}

if (!scored.length) {
  console.log('NO_MATCH — lớp 1 không tìm thấy. Chuyển lớp 2: qmd query.');
  process.exit(2);
}

// ---------- section cutter ----------

function bestSection(file, tokens) {
  const raw = fs.readFileSync(path.join(VAULT, file), 'utf8');
  const { body } = parseFrontmatter(raw);
  const lines = body.split('\n');
  if (lines.length <= 80) return { heading: '(toàn trang)', text: body.trim() };

  // split into sections at ##/### headings
  const sections = [];
  let cur = { heading: '(mở đầu)', start: 0 };
  lines.forEach((line, i) => {
    const m = line.match(/^#{2,3}\s+(.+)$/);
    if (m) {
      cur.end = i;
      sections.push(cur);
      cur = { heading: m[1].trim(), start: i };
    }
  });
  cur.end = lines.length;
  sections.push(cur);

  // đếm tần suất mỗi query token trong CẢ FILE — token phổ biến khắp file
  // (vd tên tác giả) gần như vô giá trị để chọn section; token hiếm mới định vị
  const allTokens = tokenize(body);
  const fileCount = {};
  for (const t of tokens) fileCount[t] = allTokens.filter((b) => b === t).length;

  let best = null;
  for (const sec of sections) {
    const headTokens = tokenize(sec.heading);
    const headOverlap = headTokens.filter((t) => tokens.includes(t)).length;
    const bodyText = lines.slice(sec.start, sec.end).join('\n');
    const bodyTokens = tokenize(bodyText);
    let share = 0;
    for (const t of tokens) {
      if (!fileCount[t]) continue;
      const inSec = bodyTokens.filter((b) => b === t).length;
      share += (inSec / fileCount[t]) * 8; // section gom trọn 1 token hiếm ≈ +8
    }
    const score = headOverlap * 4 + share;
    if (!best || score > best.score) best = { ...sec, score, text: bodyText };
  }
  const capped = best.text.split('\n').slice(0, 120).join('\n').trim();
  return { heading: best.heading, text: capped };
}

function followPointer(sectionText) {
  // "pointer section" = mỏng thật sự (ít dòng VÀ ít chữ) và có wikilink
  const nonEmpty = sectionText.split('\n').filter((l) => l.trim()).length;
  if (nonEmpty > 6 || sectionText.length > 400) return null;
  const m = sectionText.match(/\[\[([^\]|#]+)/);
  if (!m) return null;
  const slug = m[1].trim();
  const target = catalogue.find((e) => path.basename(e.path, '.md') === slug);
  return target ? target.path : null;
}

function printEvidence(n, entry) {
  const age = ageDays(entry.date, entry.path);
  const staleMark = age != null && age > 45 ? ` ⚠️ STALE ${age}d chưa update` : age != null ? ` · ${age}d` : '';
  const sec = bestSection(entry.path, qTokens);
  console.log(`=== EVIDENCE ${n} (score ${entry.score}) ${entry.path}${staleMark}`);
  if (!sec.text.startsWith('#')) console.log(`## ${sec.heading}`);
  console.log(sec.text);
  const ptr = followPointer(sec.text);
  if (ptr && ptr !== entry.path) {
    const tsec = bestSection(ptr, qTokens);
    console.log(`--- pointer → ${ptr}`);
    if (!tsec.text.startsWith('#')) console.log(`## ${tsec.heading}`);
    console.log(tsec.text);
  }
  console.log('');
}

// ---------- evidence selection: pair mode or single best ----------

const picks = [];
const topMethod = scored.find((e) => e.axis === 'wiki-method');
const topProduct = scored.find((e) => e.axis === 'wiki-product' || (productInQ && e.path.includes(productInQ)));

if (productInQ && topMethod && topProduct && topMethod.path !== topProduct.path && topMethod.score >= 5) {
  picks.push(topProduct, topMethod); // ghép sản phẩm × method
} else {
  picks.push(scored[0]);
  // second evidence only if clearly relevant and a different file
  if (scored[1] && scored[1].score >= scored[0].score * 0.6 && scored[1].score >= 6) picks.push(scored[1]);
}

console.log(`Q: ${question}`);
console.log(`keywords: ${qTokens.join(' ')}\n`);
picks.forEach((e, i) => printEvidence(i + 1, e));

const low = picks[0].score < 6;
if (low) console.log('LOW_CONFIDENCE — điểm thấp; nên chạy thêm lớp 2: qmd query.');
