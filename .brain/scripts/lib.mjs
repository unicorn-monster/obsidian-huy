// Shared helpers for the .brain deterministic retrieval layer.
// Pure code, zero LLM calls (PDF principle #3).

import fs from 'node:fs';
import path from 'node:path';

export const VAULT = path.resolve(new URL('.', import.meta.url).pathname, '../..');
export const CATALOGUE = path.join(VAULT, '.brain/catalogue.tsv');
export const TOPIC_MAP = path.join(VAULT, '.brain/topic-map.tsv');

// ---------- text normalization ----------

const DIACRITICS = /[̀-ͯ]/g;
export function fold(s) {
  return s
    .normalize('NFD')
    .replace(DIACRITICS, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase();
}

// VN phrase → EN concept. Applied on the FOLDED string, so keys are written
// without diacritics. Bridges Vietnamese questions to English wiki content
// at layer 1 without any embedding model.
const VN_EN_PHRASES = [
  ['quang cao', 'ads'],
  ['tieu de', 'headline'],
  ['trang dich', 'landing page'],
  ['trang ban hang', 'sale page'],
  ['pheu', 'funnel'],
  ['khach hang', 'customer'],
  ['chan dung', 'avatar'],
  ['doi thu', 'competitor'],
  ['uu dai', 'offer'],
  ['gia ban', 'price offer'],
  ['kenh', 'channel'],
  ['chien dich', 'campaign'],
  ['ngan sach', 'budget'],
  ['chuyen doi', 'conversion'],
  ['bai viet', 'copy post'],
  ['danh gia', 'review'],
  ['san pham', 'product'],
  ['thu nghiem', 'test'],
  ['kiem tra', 'test'],
  ['mo rong', 'scale'],
  ['tang truong', 'growth'],
  ['tin nhan', 'sms'],
  ['dang ky', 'subscription'],
  ['giu chan', 'retention'],
  ['cau chuyen', 'story'],
  ['noi dung', 'creative'],
  ['hinh anh', 'image creative'],
  ['cau truc', 'structure'],
  ['chien luoc', 'strategy'],
  ['goc do', 'angle'],
  ['goc', 'angle'],
  ['noi dau', 'pain'],
  ['niem tin', 'belief'],
  ['nhan thuc', 'awareness'],
  ['bang chung', 'proof'],
  ['phan dien', 'villain'],
  ['may mai mong', 'nail grinder'],
  ['mai mong', 'nail grinder'],
  ['mong', 'nail'],
  // NOTE: không map 'cho'→dog / bare 'meo'→cat — folding làm "cho"(for) và "chó"(dog)
  // thành cùng token, map sẽ nhiễm "dog" vào mọi câu hỏi.
  ['con cho', 'dog'],
  ['con meo', 'cat'],
  ['thu cung', 'pet'],
  ['thu dien tu', 'email'],
  ['gui thu', 'email'],
  ['xau', 'ugly'],
  ['tuan thu', 'compliance'],
  ['dai ly', 'agency'],
  ['mua quang cao', 'media buying'],
];

const STOPWORDS = new Set([
  // EN
  'the','a','an','of','to','for','in','on','at','by','is','are','was','were','be','been','do','does','did',
  'how','what','which','who','when','where','why','can','could','should','would','will','my','our','your',
  'i','we','you','it','this','that','these','those','and','or','not','no','with','as','about','from','into',
  'me','use','used','using','get','make','made','best','way','ways','have','has','had','if','than','then',
  // VN (folded)
  'la','cua','cai','cach','nao','gi','cho','va','voi','nhu','the','de','co','khong','em','anh','toi','minh',
  'duoc','thi','mot','cac','nhung','khi','nay','do','o','tu','den','ve','trong','ra','len','xuong','lai',
  'nen','phai','bi','se','da','dang','van','con','moi','nhat','hon','qua','rat','luon','vay','sao','bao',
  'nhieu','it','ban','chung','ta','ho','no','ai','dau','day','kia','ma','nua','roi','xin','hay','vui','long',
  'tren','duoi','tiep','sau','truoc','giua','ngoai','toan','phan','viec','dung','lam','xem','biet','can','muon',
]);

export function normalizeQuery(q) {
  let s = fold(q).replace(/[^a-z0-9\s-]/g, ' ');
  for (const [vn, en] of VN_EN_PHRASES) {
    s = s.replace(new RegExp(`\\b${vn}\\b`, 'g'), ` ${en} `);
  }
  return tokenize(s);
}

export function tokenize(s) {
  return fold(s)
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/[\s-]+/)
    .filter((t) => t.length > 1 && !STOPWORDS.has(t));
}

// ---------- frontmatter ----------

export function parseFrontmatter(raw) {
  const fm = {};
  if (!raw.startsWith('---')) return { fm, body: raw };
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return { fm, body: raw };
  const block = raw.slice(3, end);
  const body = raw.slice(end + 4).replace(/^\r?\n/, '');
  let lastKey = null;
  for (const line of block.split('\n')) {
    const m = line.match(/^(\w[\w-]*):\s*(.*)$/);
    if (m) {
      lastKey = m[1];
      let v = m[2].trim().replace(/^["']|["']$/g, '');
      if (v.startsWith('[') && v.endsWith(']')) {
        fm[lastKey] = v.slice(1, -1).split(',').map((x) => x.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
      } else {
        fm[lastKey] = v;
      }
    } else if (/^\s*-\s+/.test(line) && lastKey) {
      if (!Array.isArray(fm[lastKey])) fm[lastKey] = [];
      fm[lastKey].push(line.replace(/^\s*-\s+/, '').trim().replace(/^["']|["']$/g, ''));
    }
  }
  return { fm, body };
}

// ---------- catalogue I/O ----------

export function readTsv(file) {
  if (!fs.existsSync(file)) return [];
  return fs
    .readFileSync(file, 'utf8')
    .split('\n')
    .filter((l) => l.trim() && !l.startsWith('#'))
    .map((l) => l.split('\t'));
}

export function loadCatalogue() {
  return readTsv(CATALOGUE).map(([p, axis, title, date, desc, keywords]) => ({
    path: p,
    axis,
    title: title || '',
    date: date || '',
    desc: desc || '',
    keywords: (keywords || '').split(',').filter(Boolean),
  }));
}

export function loadTopicMap() {
  return readTsv(TOPIC_MAP).map(([phrase, p]) => ({ tokens: tokenize(phrase), path: p }));
}

export function ageDays(dateStr, filePath) {
  let d = dateStr ? new Date(dateStr) : null;
  if (!d || isNaN(d)) {
    try {
      d = fs.statSync(path.join(VAULT, filePath)).mtime;
    } catch {
      return null;
    }
  }
  return Math.floor((Date.now() - d.getTime()) / 86400000);
}
