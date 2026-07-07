#!/usr/bin/env node
// Sinh .brain/brain-map.html — snapshot TĨNH của brain map 4 vòng.
// Live mode (tự refresh khi vault đổi): node .brain/server/serve.mjs
//
//   node .brain/scripts/build-graph-html.mjs   (cần Obsidian đang mở vault "brain")

import fs from 'node:fs';
import path from 'node:path';
import { VAULT } from './lib.mjs';
import { buildMapData, renderHtml } from './map-lib.mjs';

const data = buildMapData();
const out = path.join(VAULT, '.brain/brain-map.html');
fs.writeFileSync(out, renderHtml(data));
console.log(`brain-map: ${data.counts.memory} memories, ${data.links.length} links, ${data.counts.skills} skills, ${data.counts.routines} routines, ${data.counts.apps} apps → ${path.relative(VAULT, out)}`);
