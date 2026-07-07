// Vercel build: sinh dist/index.html từ chính nội dung repo (vault).
// Không có Obsidian trên Vercel → BRAIN_LINKS=files (parse [[wikilink]] trực tiếp).
import fs from 'node:fs';

process.env.BRAIN_LINKS = 'files';
const { buildMapData, renderHtml } = await import('../scripts/map-lib.mjs');

const data = buildMapData();
fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/index.html', renderHtml(data));
console.log('brain-map built:', JSON.stringify(data.counts));
