#!/usr/bin/env node
// Sinh .brain/brain-map.html — visual map kiểu Rubric (video RoboNuggets):
// CLAUDE.md ở tâm, cluster màu theo trục vault, edge = wikilink thật từ
// metadataCache của Obsidian. Layout tính sẵn lúc build (deterministic force
// sim) → HTML tĩnh self-contained, load tức thì, pan/zoom/hover/click.
//
//   node .brain/scripts/build-graph-html.mjs   (cần Obsidian đang mở vault "brain")

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { VAULT, loadCatalogue } from './lib.mjs';

// ---------- 1. lấy link graph từ Obsidian ----------
const raw = execFileSync(
  '/Applications/Obsidian.app/Contents/MacOS/obsidian',
  ['vault=brain', 'eval', 'code=JSON.stringify(app.metadataCache.resolvedLinks)'],
  // stderr phải 'pipe' — để 'ignore' thì Electron không flush kết quả "=>" ra stdout
  { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 64 * 1024 * 1024 }
);
const m = raw.match(/=> (.+)/s);
if (!m) { console.error('Không đọc được metadataCache — Obsidian có đang mở vault "brain"?'); process.exit(1); }
const resolved = JSON.parse(m[1]);

// ---------- 2. nodes: group + màu theo trục ----------
const catalogue = loadCatalogue();
const axisByPath = Object.fromEntries(catalogue.map((e) => [e.path, e.axis]));

const GROUPS = {
  center:          { color: '#f59e0b', label: 'CLAUDE.md',        angle: 0,    r: 0 },
  'wiki-method':   { color: '#ff7b3d', label: 'wiki · method',    angle: -2.0, r: 260 },
  'wiki-product':  { color: '#b48cff', label: 'wiki · products',  angle: -0.6, r: 280 },
  'wiki-meta':     { color: '#2dd4bf', label: 'wiki · meta',      angle: -2.9, r: 300 },
  wiki:            { color: '#ffb03d', label: 'wiki · index',     angle: -2.5, r: 200 },
  'source-clip':   { color: '#7dd3fc', label: 'sources · clip',   angle: 0.9,  r: 520 },
  'source-swipe':  { color: '#f472b6', label: 'sources · swipe',  angle: 2.0,  r: 520 },
  'source-learning': { color: '#4ade80', label: 'sources · learning', angle: 2.7, r: 420 },
  'source-idea':   { color: '#fde047', label: 'sources · idea',   angle: 3.1,  r: 380 },
  project:         { color: '#facc15', label: 'projects',         angle: -1.3, r: 420 },
  brief:           { color: '#94a3b8', label: 'briefs',           angle: 3.6,  r: 460 },
  other:           { color: '#64748b', label: 'khác',             angle: 4.0,  r: 520 },
};

function groupOf(p) {
  if (p === 'CLAUDE.md') return 'center';
  return axisByPath[p] || (p.startsWith('wiki/') ? 'wiki' : p.startsWith('sources/') ? 'source-clip' : 'other');
}

const paths = new Set(Object.keys(resolved).filter((p) => p.endsWith('.md')));
for (const src of Object.keys(resolved))
  for (const t of Object.keys(resolved[src])) if (t.endsWith('.md')) paths.add(t);

const nodes = [...paths].map((p) => ({ id: p, group: groupOf(p), in: 0, out: 0 }));
const idx = Object.fromEntries(nodes.map((n, i) => [n.id, i]));
const links = [];
for (const [src, targets] of Object.entries(resolved)) {
  if (!(src in idx)) continue;
  for (const t of Object.keys(targets)) {
    if (!(t in idx) || src === t) continue;
    links.push([idx[src], idx[t]]);
    nodes[idx[src]].out++;
    nodes[idx[t]].in++;
  }
}

// ---------- 3. deterministic force layout (seeded, chạy lúc build) ----------
let seed = 42;
const rand = () => (seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648;

for (const n of nodes) {
  const g = GROUPS[n.group];
  const a = g.angle + (rand() - 0.5) * 1.2;
  const r = g.r === 0 ? 0 : g.r + (rand() - 0.5) * 160;
  n.x = Math.cos(a) * r;
  n.y = Math.sin(a) * r;
  n.size = 2.5 + Math.min(Math.sqrt(n.in) * 2.2, 14);
}

const K_SPRING = 0.012, K_ANCHOR = 0.035, K_REPEL = 900;
for (let iter = 0; iter < 220; iter++) {
  const fx = new Float64Array(nodes.length), fy = new Float64Array(nodes.length);
  // repulsion (grid-bucketed để nhanh)
  const cell = 90, buckets = new Map();
  nodes.forEach((n, i) => {
    const k = `${Math.round(n.x / cell)},${Math.round(n.y / cell)}`;
    (buckets.get(k) || buckets.set(k, []).get(k)).push(i);
  });
  nodes.forEach((n, i) => {
    const cx = Math.round(n.x / cell), cy = Math.round(n.y / cell);
    for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) {
      for (const j of buckets.get(`${cx + dx},${cy + dy}`) || []) {
        if (j <= i) continue;
        const o = nodes[j];
        let ddx = n.x - o.x, ddy = n.y - o.y;
        let d2 = ddx * ddx + ddy * ddy;
        if (d2 < 1) { ddx = rand() - 0.5; ddy = rand() - 0.5; d2 = 1; }
        if (d2 > cell * cell * 4) continue;
        const f = K_REPEL / d2;
        const d = Math.sqrt(d2);
        fx[i] += (ddx / d) * f; fy[i] += (ddy / d) * f;
        fx[j] -= (ddx / d) * f; fy[j] -= (ddy / d) * f;
      }
    }
  });
  // springs theo wikilink
  for (const [a, b] of links) {
    const dx = nodes[b].x - nodes[a].x, dy = nodes[b].y - nodes[a].y;
    fx[a] += dx * K_SPRING; fy[a] += dy * K_SPRING;
    fx[b] -= dx * K_SPRING; fy[b] -= dy * K_SPRING;
  }
  // gravity về anchor của group (giữ cluster tách nhau kiểu galaxy)
  nodes.forEach((n, i) => {
    const g = GROUPS[n.group];
    const ax = Math.cos(g.angle) * g.r, ay = Math.sin(g.angle) * g.r;
    fx[i] += (ax - n.x) * K_ANCHOR; fy[i] += (ay - n.y) * K_ANCHOR;
  });
  const damp = 1 - iter / 240;
  nodes.forEach((n, i) => {
    n.x += Math.max(-14, Math.min(14, fx[i])) * damp;
    n.y += Math.max(-14, Math.min(14, fy[i])) * damp;
  });
}
// CLAUDE.md ghim tâm
if ('CLAUDE.md' in idx) { nodes[idx['CLAUDE.md']].x = 0; nodes[idx['CLAUDE.md']].y = 0; nodes[idx['CLAUDE.md']].size = 16; }

// ---------- 4. emit HTML ----------
const data = {
  nodes: nodes.map((n) => ({
    id: n.id, g: n.group,
    x: +n.x.toFixed(1), y: +n.y.toFixed(1), s: +n.size.toFixed(1), in: n.in,
  })),
  links,
  groups: GROUPS,
  built: new Date().toISOString().slice(0, 16).replace('T', ' '),
};

const html = `<!doctype html>
<meta charset="utf-8">
<title>brain map — ${nodes.length} notes</title>
<style>
  html,body{margin:0;height:100%;background:#050508;overflow:hidden;font:12px/1.4 -apple-system,Inter,sans-serif}
  canvas{display:block;cursor:grab}
  #tip{position:fixed;pointer-events:none;background:#14141fee;color:#e0e0e0;padding:6px 10px;border-radius:6px;border:1px solid #1e1e2e;display:none;max-width:340px}
  #legend{position:fixed;top:14px;left:14px;color:#888;background:#0a0a0fcc;padding:10px 14px;border-radius:8px;border:1px solid #1e1e2e}
  #legend b{color:#e0e0e0;font-size:13px}
  #legend .row{margin-top:4px}
  #legend .dot{display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:6px}
  #hint{position:fixed;bottom:12px;left:14px;color:#555}
</style>
<div id="legend"><b>🧠 brain map</b> · ${nodes.length} notes · ${links.length} links<div id="rows"></div></div>
<div id="tip"></div>
<div id="hint">scroll = zoom · kéo = pan · hover = tên · click = soi neighbor · built ${data.built}</div>
<canvas id="c"></canvas>
<script>
const D=${JSON.stringify(data)};
const cv=document.getElementById('c'),ctx=cv.getContext('2d'),tip=document.getElementById('tip');
let W,H,dpr=devicePixelRatio||1,scale=0.8,ox=0,oy=0,hover=-1,picked=-1;
function resize(){W=innerWidth;H=innerHeight;cv.width=W*dpr;cv.height=H*dpr;cv.style.width=W+'px';cv.style.height=H+'px';draw()}
addEventListener('resize',resize);
const rows=document.getElementById('rows');
const counts={};D.nodes.forEach(n=>counts[n.g]=(counts[n.g]||0)+1);
for(const[g,gc]of Object.entries(D.groups)){if(!counts[g])continue;
  rows.insertAdjacentHTML('beforeend','<div class="row"><span class="dot" style="background:'+gc.color+'"></span>'+gc.label+' · '+counts[g]+'</div>')}
const nb=D.nodes.map(()=>new Set());
D.links.forEach(([a,b])=>{nb[a].add(b);nb[b].add(a)});
function draw(){
  ctx.setTransform(dpr,0,0,dpr,0,0);ctx.fillStyle='#050508';ctx.fillRect(0,0,W,H);
  ctx.translate(W/2+ox,H/2+oy);ctx.scale(scale,scale);
  const focus=picked>=0?picked:hover;
  ctx.lineWidth=0.5/scale;
  for(const[a,b]of D.links){
    const on=focus>=0&&(a===focus||b===focus);
    if(focus>=0&&!on)continue;
    ctx.strokeStyle=on?'#ffffff55':'#ffffff12';
    ctx.beginPath();ctx.moveTo(D.nodes[a].x,D.nodes[a].y);ctx.lineTo(D.nodes[b].x,D.nodes[b].y);ctx.stroke();
  }
  for(let i=0;i<D.nodes.length;i++){
    const n=D.nodes[i],c=D.groups[n.g].color;
    const dim=focus>=0&&i!==focus&&!nb[focus].has(i);
    ctx.globalAlpha=dim?0.15:1;
    ctx.fillStyle=c;
    ctx.shadowColor=c;ctx.shadowBlur=dim?0:n.s*1.6;
    ctx.beginPath();ctx.arc(n.x,n.y,n.s,0,7);ctx.fill();
    ctx.shadowBlur=0;
  }
  ctx.globalAlpha=1;
  // label các hub + node đang soi
  ctx.fillStyle='#e0e0e0';ctx.font=(11/scale)+'px sans-serif';ctx.textAlign='center';
  for(let i=0;i<D.nodes.length;i++){
    const n=D.nodes[i];
    if(i===focus||n.in>=10||n.id==='CLAUDE.md'){
      const name=n.id.split('/').pop().replace('.md','');
      ctx.fillText(name,n.x,n.y-n.s-4/scale);
    }
  }
}
function pick(mx,my){
  const x=(mx-W/2-ox)/scale,y=(my-H/2-oy)/scale;
  let best=-1,bd=100;
  for(let i=0;i<D.nodes.length;i++){
    const n=D.nodes[i],d=(n.x-x)**2+(n.y-y)**2;
    if(d<Math.max(n.s*n.s*4,64)&&d<bd){bd=d;best=i}
  }
  return best;
}
let drag=null;
cv.onmousedown=e=>{drag={x:e.clientX,y:e.clientY,ox,oy,moved:false};cv.style.cursor='grabbing'};
addEventListener('mouseup',e=>{if(drag&&!drag.moved){const p=pick(e.clientX,e.clientY);picked=p===picked?-1:p;draw()}drag=null;cv.style.cursor='grab'});
addEventListener('mousemove',e=>{
  if(drag){ox=drag.ox+e.clientX-drag.x;oy=drag.oy+e.clientY-drag.y;if(Math.abs(e.clientX-drag.x)+Math.abs(e.clientY-drag.y)>3)drag.moved=true;draw();return}
  const p=pick(e.clientX,e.clientY);
  if(p!==hover){hover=p;draw()}
  if(p>=0){tip.style.display='block';tip.style.left=e.clientX+14+'px';tip.style.top=e.clientY+14+'px';
    tip.innerHTML='<b>'+D.nodes[p].id+'</b><br>'+D.groups[D.nodes[p].g].label+' · '+D.nodes[p].in+' backlink'}
  else tip.style.display='none';
});
cv.onwheel=e=>{e.preventDefault();const f=Math.exp(-e.deltaY*0.0015);
  const mx=e.clientX-W/2,my=e.clientY-H/2;
  ox=mx-(mx-ox)*f;oy=my-(my-oy)*f;scale*=f;draw()};
resize();
</script>`;

const out = path.join(VAULT, '.brain/brain-map.html');
fs.writeFileSync(out, html);
console.log(`brain-map: ${nodes.length} nodes, ${links.length} links → ${path.relative(VAULT, out)}`);
