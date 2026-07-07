#!/usr/bin/env node
// Benchmark brain-path vs default-path (PDF principle #5), rerunnable anytime:
//   node .brain/bench/run-bench.mjs
//
// Brain path  = recall.mjs evidence (những gì model PHẢI đọc để trả lời).
// Default path = mô phỏng Claude không có brain: grep keyword → Read TRỌN 3 file
//                match nhiều nhất (đây là hành vi thật: grep rồi đọc nguyên file).
// Đo: bytes vào context (≈ token = bytes/4), wall time, evidence có chứa đáp án không.

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { VAULT, normalizeQuery } from '../scripts/lib.mjs';

const RECALL = path.join(VAULT, '.brain/scripts/recall.mjs');
const questions = fs
  .readFileSync(path.join(VAULT, '.brain/bench/questions.tsv'), 'utf8')
  .split('\n')
  .filter((l) => l.trim() && !l.startsWith('#'))
  .map((l) => l.split('\t'));

function* walkMd(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.') || e.name.startsWith('_')) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walkMd(p);
    else if (e.name.endsWith('.md')) yield p;
  }
}
const allFiles = ['wiki', 'sources', 'projects', 'briefs'].flatMap((d) => {
  const abs = path.join(VAULT, d);
  return fs.existsSync(abs) ? [...walkMd(abs)] : [];
});

function defaultPath(q) {
  // grep từng keyword trên toàn vault, xếp file theo tổng lần match, đọc trọn top-3
  const tokens = normalizeQuery(q);
  const hits = {};
  const t0 = performance.now();
  for (const f of allFiles) {
    const body = fs.readFileSync(f, 'utf8').toLowerCase();
    let n = 0;
    for (const t of tokens) {
      let i = -1;
      while ((i = body.indexOf(t, i + 1)) !== -1) n++;
    }
    if (n > 0) hits[f] = n;
  }
  const top = Object.entries(hits).sort((a, b) => b[1] - a[1]).slice(0, 3);
  const bytes = top.reduce((s, [f]) => s + fs.statSync(f).size, 0);
  const text = top.map(([f]) => fs.readFileSync(f, 'utf8')).join('\n');
  return { ms: performance.now() - t0, bytes, text, files: top.map(([f]) => path.relative(VAULT, f)) };
}

function brainPath(q, expectRe) {
  const t0 = performance.now();
  let out = '';
  try {
    out = execFileSync('node', [RECALL, q], { encoding: 'utf8' });
  } catch (e) {
    out = (e.stdout || '') + (e.stderr || '');
  }
  let layer = 'L1';
  // ladder = flow /ask thật, 3 nấc leo dần khi chưa thấy đáp án:
  //   L2a: qmd query → snippets semantic
  //   L2b: recall --file <top hit> → cắt section deterministic
  //   L2c: qmd get <top hit> → đọc trọn file (nấc cuối, vẫn chỉ 1 file ĐÚNG)
  if (!expectRe.test(out)) {
    try {
      const qjson = execFileSync('qmd', ['query', q, '-n', '3', '--json'], {
        encoding: 'utf8', timeout: 180000, stdio: ['ignore', 'pipe', 'ignore'],
      });
      const hits = JSON.parse(qjson);
      out += '\n' + hits.map((h) => `${h.file}:${h.line} (${h.score})\n${h.snippet || ''}`).join('\n');
      layer = 'L1→L2a';
      const rel = hits[0]?.file?.replace('qmd://', '');
      if (rel && !expectRe.test(out)) {
        out += '\n' + execFileSync('node', [RECALL, '--file', rel, q], { encoding: 'utf8' });
        layer = 'L1→L2b';
      }
      if (rel && !expectRe.test(out)) {
        out += '\n' + execFileSync('qmd', ['get', rel, '--no-line-numbers'], {
          encoding: 'utf8', timeout: 60000, stdio: ['ignore', 'pipe', 'ignore'],
        });
        layer = 'L1→L2c';
      }
    } catch { layer = 'L1 (L2 lỗi)'; }
  }
  return { ms: performance.now() - t0, bytes: Buffer.byteLength(out), text: out, layer };
}

const rows = [];
for (const [id, q, expect] of questions) {
  const re = new RegExp(expect, 'i');
  const brain = brainPath(q, re);
  const dflt = defaultPath(q);
  rows.push({
    id, q,
    layer: brain.layer,
    brainTok: Math.round(brain.bytes / 4),
    dfltTok: Math.round(dflt.bytes / 4),
    brainMs: Math.round(brain.ms),
    dfltMs: Math.round(dflt.ms),
    brainHit: re.test(brain.text) ? '✅' : '❌',
    dfltHit: re.test(dflt.text) ? '✅' : '❌',
    saving: (100 * (1 - brain.bytes / Math.max(dflt.bytes, 1))).toFixed(0) + '%',
  });
}

const pad = (s, n) => String(s).padEnd(n);
console.log(pad('id', 4) + pad('lớp', 10) + pad('brain tok', 11) + pad('default tok', 13) + pad('saving', 8) + pad('brain ms', 10) + pad('đúng (brain/default)', 22) + 'câu hỏi');
for (const r of rows) {
  console.log(pad(r.id, 4) + pad(r.layer, 10) + pad(r.brainTok, 11) + pad(r.dfltTok, 13) + pad(r.saving, 8) + pad(r.brainMs, 10) + pad(`${r.brainHit} / ${r.dfltHit}`, 22) + r.q);
}
const tb = rows.reduce((s, r) => s + r.brainTok, 0);
const td = rows.reduce((s, r) => s + r.dfltTok, 0);
const hit = rows.filter((r) => r.brainHit === '✅').length;
console.log(`\nTỔNG: brain ${tb} tok vs default ${td} tok → tiết kiệm ${(100 * (1 - tb / td)).toFixed(0)}% · brain chứa đáp án ${hit}/${rows.length} câu`);
console.log('(token ≈ bytes/4; default = grep → đọc trọn top-3 file match — hành vi Claude không có brain)');
