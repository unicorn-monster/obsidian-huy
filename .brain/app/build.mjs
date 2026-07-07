// Vercel build: sinh .brain/app/dist/index.html từ chính nội dung repo (vault).
// Không có Obsidian trên Vercel → BRAIN_LINKS=files (parse [[wikilink]] trực tiếp).
// dist resolve theo vị trí file này — chạy được từ bất kỳ cwd nào (Vercel build ở repo root).
import fs from 'node:fs';
import path from 'node:path';

process.env.BRAIN_LINKS = 'files';
const { buildMapData, renderHtml } = await import('../scripts/map-lib.mjs');

const dist = path.join(path.dirname(new URL(import.meta.url).pathname), 'dist');
const data = buildMapData();
fs.mkdirSync(dist, { recursive: true });
fs.writeFileSync(path.join(dist, 'index.html'), renderHtml(data));
console.log('brain-map built:', JSON.stringify(data.counts));
