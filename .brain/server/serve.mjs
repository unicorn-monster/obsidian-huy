#!/usr/bin/env node
// Live brain map — real-time thật trên máy local:
//   node .brain/server/serve.mjs   → http://localhost:4321
// Watch vault (fs.watch native, không cần dep), vault đổi → rebuild data → SSE
// đẩy xuống browser, map tự refresh giữ nguyên viewport. Cần Obsidian đang mở.

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { VAULT } from '../scripts/lib.mjs';
import { buildMapData, renderHtml } from '../scripts/map-lib.mjs';

const PORT = process.env.PORT || 4321;
const WATCH_DIRS = ['wiki', 'sources', 'briefs', '.claude/commands', '.claude/agents'];

let data = buildMapData();
let clients = [];
let rebuildTimer = null;

function rebuild() {
  try {
    // catalogue trước (map đọc axis từ đó), rồi map data
    // dùng execSync tránh cache import; build-catalogue nhanh (<1s)
    import('node:child_process').then(({ execFileSync }) => {
      execFileSync('node', [path.join(VAULT, '.brain/scripts/build-catalogue.mjs')], { stdio: 'ignore' });
      data = buildMapData();
      for (const res of clients) res.write('data: reload\n\n');
      console.log(`[${new Date().toTimeString().slice(0, 8)}] rebuilt — ${data.counts.memory} memories, đẩy ${clients.length} client`);
    });
  } catch (e) {
    console.error('rebuild lỗi:', e.message);
  }
}

for (const d of WATCH_DIRS) {
  const abs = path.join(VAULT, d);
  if (!fs.existsSync(abs)) continue;
  fs.watch(abs, { recursive: true }, (_ev, fname) => {
    if (!fname || !fname.endsWith('.md')) return;
    clearTimeout(rebuildTimer);
    rebuildTimer = setTimeout(rebuild, 800); // debounce — 1 lần /ingest ghi nhiều file
  });
}

http.createServer((req, res) => {
  if (req.url === '/events') {
    res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', Connection: 'keep-alive' });
    res.write('retry: 2000\n\n');
    clients.push(res);
    req.on('close', () => { clients = clients.filter((c) => c !== res); });
    return;
  }
  if (req.url === '/data.json') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(renderHtml(data, { live: true }));
}).listen(PORT, () => console.log(`🧠 live brain map → http://localhost:${PORT} (watch: ${WATCH_DIRS.join(', ')})`));
