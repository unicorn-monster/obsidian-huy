// Data + layout + renderer cho brain map 4 vòng (kiểu Rubric / RoboNuggets):
// APPLICATIONS (ngoài) → ROUTINES → MEMORY (5 khu + sources) → SKILLS → CLAUDE.md (tâm).
// Dùng chung cho build tĩnh (build-graph-html.mjs) và live server (.brain/server/serve.mjs).

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { VAULT, loadCatalogue } from './lib.mjs';

// ---------- vòng hạ tầng ----------

// Applications = MỌI thứ hệ thống chạm vào: MCP connector + CLI + service.
// Ring khá tĩnh — thêm connector mới thì thêm dòng ở đây.
const APPLICATIONS = [
  // MCP connectors
  'Klaviyo', 'Apify', 'Shopify', 'Chrome', 'Chrome DevTools', 'Google Drive', 'Computer Use', 'Context7',
  // CLI tools
  'Obsidian', 'qmd', 'Cloudflare', 'GitHub', 'Vercel', 'defuddle', 'yt-dlp / ffmpeg', 'Playwright', 'Node / npm',
  // Services hệ thống đọc/scrape
  'X / Twitter', 'YouTube', 'Meta Ad Library', 'Amazon / Chewy', 'Whisper (Groq)',
];

// Routines = CHỈ scheduled task chạy tự động (định nghĩa của Huy — lệnh chạy tay
// không tính, chúng nằm ở vòng SKILLS). Thêm routine mới = thêm dòng.
const ROUTINES = [
  { name: 'x-farm-ingest', cadence: 'Daily' },
  { name: 'Meta Ads daily Telegram report', cadence: 'Daily' },
];

export function collectInfra() {
  const infraCache = path.join(VAULT, '.brain/infra.json');
  const skills = [];
  const homeSkills = path.join(os.homedir(), '.claude/skills');
  for (const dir of [homeSkills, path.join(VAULT, '.claude/skills')]) {
    if (!fs.existsSync(dir)) continue;
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      if (e.isDirectory() && !e.name.endsWith('-workspace')) skills.push(e.name);
    }
  }
  // slash-commands + agents + hooks = capability được invoke → vòng SKILLS
  const cmdDir = path.join(VAULT, '.claude/commands');
  if (fs.existsSync(cmdDir)) {
    for (const f of fs.readdirSync(cmdDir)) if (f.endsWith('.md')) skills.push('/' + f.replace('.md', ''));
  }
  const agentDir = path.join(VAULT, '.claude/agents');
  if (fs.existsSync(agentDir)) {
    for (const f of fs.readdirSync(agentDir)) if (f.endsWith('.md')) skills.push('⟳ ' + f.replace('.md', ''));
  }
  skills.push('⟳ session-sync');
  const infra = { applications: APPLICATIONS, skills: [...new Set(skills)].sort(), routines: ROUTINES };

  if (fs.existsSync(homeSkills)) {
    // máy local: cache lại để build trên Vercel (không có ~/.claude) dùng đủ list
    fs.writeFileSync(infraCache, JSON.stringify(infra, null, 1));
  } else if (fs.existsSync(infraCache)) {
    const cached = JSON.parse(fs.readFileSync(infraCache, 'utf8'));
    infra.skills = [...new Set([...cached.skills, ...infra.skills])].sort();
  }
  return infra;
}

// ---------- link graph từ Obsidian ----------

export function readResolvedLinks() {
  // Ưu tiên metadataCache của Obsidian (chuẩn nhất); không có Obsidian
  // (Vercel build, Obsidian đóng, BRAIN_LINKS=files) → parse [[wikilink]] từ file.
  if (process.env.BRAIN_LINKS !== 'files') {
    try {
      const raw = execFileSync(
        '/Applications/Obsidian.app/Contents/MacOS/obsidian',
        ['vault=brain', 'eval', 'code=JSON.stringify(app.metadataCache.resolvedLinks)'],
        // stderr phải 'pipe' — 'ignore' làm Electron không flush "=>" ra stdout
        { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 64 * 1024 * 1024 }
      );
      const m = raw.match(/=> (.+)/s);
      if (m) return JSON.parse(m[1]);
    } catch { /* rơi xuống file-based */ }
  }
  return readLinksFromFiles();
}

export function readLinksFromFiles() {
  const catalogue = loadCatalogue();
  const byBasename = {};
  for (const e of catalogue) {
    byBasename[path.basename(e.path, '.md')] = e.path;
    // hỗ trợ wikilink dạng path ([[kittysupps-adlib-images/index]]) khi basename trùng
    byBasename[e.path.replace(/\.md$/, '')] = e.path;
    byBasename[e.path.replace(/^sources\//, '').replace(/\.md$/, '')] = e.path;
  }
  byBasename['CLAUDE'] = 'CLAUDE.md';
  const resolved = {};
  const scan = [...catalogue.map((e) => e.path), 'CLAUDE.md'];
  for (const rel of scan) {
    const abs = path.join(VAULT, rel);
    if (!fs.existsSync(abs)) continue;
    const body = fs.readFileSync(abs, 'utf8');
    for (const m of body.matchAll(/\[\[([^\]|#\n]+)/g)) {
      const target = byBasename[m[1].trim()];
      if (!target || target === rel) continue;
      (resolved[rel] = resolved[rel] || {})[target] = (resolved[rel][target] || 0) + 1;
    }
  }
  return resolved;
}

// ---------- memory zones ----------

// 5 khu Memory (META đã gộp vào PERSONAL — sơ đồ gốc không có khu vận hành
// hệ thống trong Memory: cách vận hành sống ở CLAUDE.md/SKILLS/ROUTINES).
// Thứ tự trong object = thứ tự sector quanh đĩa (bắt đầu từ hướng trên, theo chiều kim đồng hồ).
const ZONES = {
  product:   { label: 'PRODUCT',   color: '#4dd6e8' },
  personal:  { label: 'PERSONAL',  color: '#ffd84d' },
  business:  { label: 'BUSINESS',  color: '#b48cff' },
  marketing: { label: 'MARKETING', color: '#ff7bd0' },
  // CHƯA NỐI = sources mồ côi (chưa trang wiki nào link tới) — signal hành động,
  // khu này càng rỗng càng tốt. Briefs KHÔNG lên map (output phái sinh, không phải memory).
  unfiled:   { label: 'CHƯA NỐI',  color: '#8b93a5' },
};

function zoneOfAxis(axis, p) {
  if (axis === 'wiki-method') return 'marketing';
  if (axis === 'wiki-business') return 'business';
  if (axis === 'wiki-personal' || axis === 'wiki-meta') return 'personal';
  if (axis === 'wiki-product') return 'product';
  if (axis === 'brief') return null; // briefs = output, không vẽ vào Memory
  if (axis === 'wiki') return null; // index.md = hạ tầng (bản đồ), không vẽ vào Memory
  return null; // sources → gán theo backlink
}

// ---------- build toàn bộ map data (nodes đã có toạ độ) ----------

export function buildMapData() {
  const infra = collectInfra();
  const catalogue = loadCatalogue();
  const resolved = readResolvedLinks();

  const nodes = [];
  const links = [];
  const idx = {};
  const add = (n) => { idx[n.id] = nodes.length; nodes.push(n); return n; };

  // tâm
  add({ id: 'CLAUDE.md', kind: 'center', label: 'CLAUDE.MD', x: 0, y: 0, s: 20, color: '#f59e0b' });

  // SKILLS ring r=185
  infra.skills.forEach((s, i) => {
    const a = (i / infra.skills.length) * Math.PI * 2 - Math.PI / 2;
    add({ id: `skill:${s}`, kind: 'skill', label: s, x: Math.cos(a) * 185, y: Math.sin(a) * 185, s: 5, color: '#ff7b3d' });
  });

  // memory: wiki + briefs vào zone cứng; sources gán zone theo wiki page link tới nó nhiều nhất
  const zoneMembers = Object.fromEntries(Object.keys(ZONES).map((z) => [z, []]));
  const pathZone = {};
  for (const e of catalogue) {
    const z = zoneOfAxis(e.axis, e.path);
    if (z) { zoneMembers[z].push(e); pathZone[e.path] = z; }
  }
  const sourceEntries = catalogue.filter((e) => e.axis.startsWith('source-'));
  const inbound = {}; // source path -> {zone: count}
  for (const [src, targets] of Object.entries(resolved)) {
    const zSrc = pathZone[src];
    if (!zSrc) continue;
    for (const t of Object.keys(targets)) {
      if (!t.startsWith('sources/')) continue;
      (inbound[t] = inbound[t] || {})[zSrc] = (inbound[t][zSrc] || 0) + targets[t];
    }
  }
  for (const e of sourceEntries) {
    const counts = inbound[e.path];
    const z = counts ? Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0] : 'unfiled';
    zoneMembers[z].push(e);
    pathZone[e.path] = z;
  }

  // in-degree cho size
  const indeg = {};
  for (const targets of Object.values(resolved))
    for (const [t, c] of Object.entries(targets)) indeg[t] = (indeg[t] || 0) + 1;

  // ---- layout SECTOR VÒNG CUNG (như sơ đồ gốc): mỗi zone = 1 sector góc,
  // member xếp thành các hàng cung đồng tâm toả từ trong ra; wiki pages
  // (to, quan trọng) hàng trong cùng → sources nhỏ dần ra ngoài.
  const R0 = 250, ROW_GAP = 17, DOT_SPACE = 15, SECTOR_GAP = 0.10, MIN_SPAN = 0.45;
  const zoneKeys = Object.keys(ZONES);
  // span ∝ sqrt(count): khu to vẫn to nhưng không nuốt cả vòng (marketing ~200 item)
  const weights = zoneKeys.map((z) => Math.sqrt(zoneMembers[z].length || 0.5));
  const totalW = weights.reduce((a, b) => a + b, 0);
  const usable = Math.PI * 2 - SECTOR_GAP * zoneKeys.length;
  let spans = weights.map((w) => Math.max(MIN_SPAN, usable * w / totalW));
  const norm = usable / spans.reduce((a, b) => a + b, 0);
  spans = spans.map((s) => s * norm);

  let a0 = -Math.PI / 2; // sector đầu bắt đầu từ đỉnh
  zoneKeys.forEach((z, zi) => {
    const zc = ZONES[z];
    const span = spans[zi];
    const mid = a0 + span / 2;
    add({ id: `zone:${z}`, kind: 'zone', label: zc.label, x: Math.cos(mid) * (R0 - 26), y: Math.sin(mid) * (R0 - 26), s: 7, color: zc.color });

    const members = zoneMembers[z].sort((a, b) => {
      const sa = a.axis.startsWith('source-') ? 1 : 0, sb = b.axis.startsWith('source-') ? 1 : 0;
      if (sa !== sb) return sa - sb; // pages trước
      return (indeg[b.path] || 0) - (indeg[a.path] || 0); // rồi theo backlink giảm dần
    });

    let placed = 0, row = 0;
    while (placed < members.length) {
      const rk = R0 + row * ROW_GAP;
      const cap = Math.max(3, Math.floor(((span - 0.05) * rk) / DOT_SPACE));
      const n = Math.min(cap, members.length - placed);
      for (let j = 0; j < n; j++) {
        const e = members[placed + j];
        const th = a0 + 0.025 + (span - 0.05) * ((j + 0.5) / n);
        add({
          id: e.path, kind: e.axis.startsWith('source-') ? 'source' : 'page',
          label: path.basename(e.path, '.md'),
          x: Math.cos(th) * rk, y: Math.sin(th) * rk,
          s: e.axis.startsWith('source-') ? 2.2 + Math.min(Math.sqrt(indeg[e.path] || 0) * 1.6, 6) : 4 + Math.min(Math.sqrt(indeg[e.path] || 0) * 2, 9),
          color: zc.color, zone: z, axis: e.axis, in: indeg[e.path] || 0,
        });
      }
      placed += n;
      row++;
    }
    a0 += span + SECTOR_GAP;
  });

  // ROUTINES ring r=575 — chỉ scheduled task thật, kèm cadence
  infra.routines.forEach((r, i) => {
    const a = (i / infra.routines.length) * Math.PI * 2 - Math.PI / 2 + 0.4;
    add({ id: `routine:${r.name}`, kind: 'routine', label: r.name, cad: r.cadence, x: Math.cos(a) * 575, y: Math.sin(a) * 575, s: 8, color: '#facc15' });
  });

  // APPLICATIONS ring r=655
  infra.applications.forEach((ap, i) => {
    const a = (i / infra.applications.length) * Math.PI * 2 - Math.PI / 2 - 0.12;
    add({ id: `app:${ap}`, kind: 'app', label: ap, x: Math.cos(a) * 655, y: Math.sin(a) * 655, s: 10, color: '#7da7ff' });
  });

  // edges = wikilink thật giữa memory nodes (+ CLAUDE.md)
  for (const [src, targets] of Object.entries(resolved)) {
    if (!(src in idx)) continue;
    for (const t of Object.keys(targets)) {
      if (!(t in idx) || t === src) continue;
      links.push([idx[src], idx[t]]);
    }
  }

  return {
    nodes, links,
    rings: [
      { r: 185, label: 'SKILLS', color: '#ff7b3d' },
      { r: 500, label: 'MEMORY', color: '#b48cff' },
      { r: 575, label: 'ROUTINES', color: '#facc15' },
      { r: 655, label: 'APPLICATIONS', color: '#7da7ff' },
    ],
    built: new Date().toISOString().slice(0, 16).replace('T', ' '),
    counts: { skills: infra.skills.length, routines: infra.routines.length, apps: infra.applications.length, memory: nodes.filter((n) => n.kind === 'page' || n.kind === 'source').length },
  };
}

// ---------- renderer (self-contained HTML) ----------

export function renderHtml(data, { live = false } = {}) {
  return `<!doctype html>
<meta charset="utf-8">
<title>🧠 brain — ${data.counts.memory} memories</title>
<style>
  html,body{margin:0;height:100%;background:#050508;overflow:hidden;font:12px/1.4 -apple-system,Inter,sans-serif}
  canvas{display:block;cursor:grab}
  #tip{position:fixed;pointer-events:none;background:#14141fee;color:#e0e0e0;padding:6px 10px;border-radius:6px;border:1px solid #1e1e2e;display:none;max-width:360px;z-index:3}
  #hud{position:fixed;top:14px;left:14px;color:#888;background:#0a0a0fcc;padding:10px 14px;border-radius:8px;border:1px solid #1e1e2e;z-index:2}
  #hud b{color:#e0e0e0;font-size:13px}
  #hint{position:fixed;bottom:12px;left:14px;color:#555;z-index:2}
  #live{color:#22c55e;display:none}
</style>
<div id="hud"><b>🧠 second brain</b> · ${data.counts.memory} memories · ${data.counts.skills} skills · ${data.counts.routines} routines · ${data.counts.apps} apps <span id="live">● live</span><div style="margin-top:2px;color:#666">built ${data.built}</div>
<input id="find" placeholder="tìm file… (Enter = nhảy tới)" style="margin-top:8px;width:100%;background:#0a0a0f;border:1px solid #1e1e2e;color:#e0e0e0;padding:5px 8px;border-radius:5px;font:12px sans-serif;outline:none"></div>
<div id="tip"></div>
<div id="hint">scroll = zoom · kéo = pan · hover = tên · click = soi neighbor · <b>double-click = mở file trong Obsidian</b> · Esc = bỏ chọn · / = tìm</div>
<canvas id="c"></canvas>
<script>
let D=${JSON.stringify(data)};
const cv=document.getElementById('c'),ctx=cv.getContext('2d'),tip=document.getElementById('tip');
let W,H,dpr=devicePixelRatio||1,scale=0.62,ox=0,oy=0,hover=-1,picked=-1,nb=[];
let scaleInit=false;
function rebuildNb(){nb=D.nodes.map(()=>new Set());D.links.forEach(([a,b])=>{nb[a].add(b);nb[b].add(a)})}
rebuildNb();
function resize(){W=innerWidth;H=innerHeight;cv.width=W*dpr;cv.height=H*dpr;cv.style.width=W+'px';cv.style.height=H+'px';
  if(!scaleInit&&W>100&&H>100){scale=Math.max(0.2,Math.min(W,H)/(2*720));scaleInit=true} // auto-fit 4 vòng (guard: lần resize đầu viewport có thể =0)
  draw()}
addEventListener('resize',resize);
function hexPath(x,y,r){ctx.beginPath();for(let i=0;i<6;i++){const a=Math.PI/6+i*Math.PI/3;i?ctx.lineTo(x+r*Math.cos(a),y+r*Math.sin(a)):ctx.moveTo(x+r*Math.cos(a),y+r*Math.sin(a))}ctx.closePath()}
function diamondPath(x,y,r){ctx.beginPath();ctx.moveTo(x,y-r);ctx.lineTo(x+r,y);ctx.lineTo(x,y+r);ctx.lineTo(x-r,y);ctx.closePath()}
function draw(){
  ctx.setTransform(dpr,0,0,dpr,0,0);ctx.fillStyle='#050508';ctx.fillRect(0,0,W,H);
  ctx.translate(W/2+ox,H/2+oy);ctx.scale(scale,scale);
  // vòng trang trí + nhãn dọc trục trên (như video)
  for(const ring of D.rings){
    ctx.strokeStyle=ring.color+'2e';ctx.lineWidth=1/scale;
    ctx.beginPath();ctx.arc(0,0,ring.r,0,7);ctx.stroke();
    ctx.fillStyle=ring.color+'cc';ctx.font='bold '+(15/Math.sqrt(scale))+'px sans-serif';ctx.textAlign='center';
    ctx.fillText(ring.label,0,-ring.r+(ring.label==='MEMORY'?26:-8));
  }
  const focus=picked>=0?picked:hover;
  // edges
  ctx.lineWidth=0.5/scale;
  for(const[a,b]of D.links){
    const on=focus>=0&&(a===focus||b===focus);
    if(focus>=0&&!on)continue;
    ctx.strokeStyle=on?'#ffffff66':'#ffffff10';
    ctx.beginPath();ctx.moveTo(D.nodes[a].x,D.nodes[a].y);ctx.lineTo(D.nodes[b].x,D.nodes[b].y);ctx.stroke();
  }
  // nodes
  for(let i=0;i<D.nodes.length;i++){
    const n=D.nodes[i];
    const dim=focus>=0&&i!==focus&&!nb[focus].has(i);
    ctx.globalAlpha=dim?0.13:1;
    ctx.fillStyle=n.color;ctx.shadowColor=n.color;ctx.shadowBlur=dim?0:n.s*1.5;
    if(n.kind==='app'){hexPath(n.x,n.y,n.s);ctx.fill()}
    else if(n.kind==='skill'){diamondPath(n.x,n.y,n.s+1);ctx.fill()}
    else if(n.kind==='routine'){ctx.beginPath();ctx.arc(n.x,n.y,n.s,0,7);ctx.fill();ctx.shadowBlur=0;ctx.strokeStyle=n.color+'88';ctx.lineWidth=1.2/scale;ctx.beginPath();ctx.arc(n.x,n.y,n.s+3.5,0,7);ctx.stroke()}
    else if(n.kind==='center'){ctx.shadowBlur=26;ctx.fillStyle='#0a0a0f';ctx.strokeStyle='#f59e0b';ctx.lineWidth=2.4/Math.sqrt(scale);const r=26;ctx.beginPath();ctx.roundRect(n.x-r,n.y-r*0.72,r*2,r*1.44,6);ctx.fill();ctx.stroke()}
    else{ctx.beginPath();ctx.arc(n.x,n.y,n.s,0,7);ctx.fill()}
    ctx.shadowBlur=0;
  }
  ctx.globalAlpha=1;
  // labels: tâm + zone + routine/app luôn hiện; page hub; node đang soi
  ctx.textAlign='center';
  for(let i=0;i<D.nodes.length;i++){
    const n=D.nodes[i];
    const always=n.kind==='center'||n.kind==='zone'||n.kind==='routine'||n.kind==='app';
    // label trang wiki chỉ hiện khi zoom vào (tránh chồng chữ ở default view)
    if(!(always||i===focus||(n.kind==='page'&&n.in>=10&&scale>1.15)))continue;
    if(focus>=0&&i!==focus&&!nb[focus].has(i)&&!always)continue;
    ctx.fillStyle=n.kind==='zone'?n.color:'#d5d5e0';
    ctx.font=(n.kind==='center'?'bold 13':n.kind==='zone'?'bold 12':'10')+'px sans-serif';
    if(n.kind==='center'){ctx.fillStyle='#f59e0b';ctx.fillText('CLAUDE.MD',n.x,n.y+4)}
    else ctx.fillText(n.label,n.x,n.y-n.s-5);
    if(n.cad){ctx.fillStyle='#8a8a55';ctx.font='9px sans-serif';ctx.fillText(n.cad,n.x,n.y+n.s+11)}
  }
}
function pick(mx,my){
  const x=(mx-W/2-ox)/scale,y=(my-H/2-oy)/scale;
  let best=-1,bd=1e9;
  for(let i=0;i<D.nodes.length;i++){
    const n=D.nodes[i],d=(n.x-x)**2+(n.y-y)**2;
    if(d<Math.max(n.s*n.s*4,70)&&d<bd){bd=d;best=i}
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
  if(p>=0){const n=D.nodes[p];tip.style.display='block';tip.style.left=e.clientX+14+'px';tip.style.top=e.clientY+14+'px';
    tip.innerHTML='<b>'+(n.id.includes(':')?n.label:n.id)+'</b><br>'+n.kind+(n.zone?' · '+n.zone:'')+(n.in!=null?' · '+n.in+' backlink':'')}
  else tip.style.display='none';
});
// double-click = mở file thật trong Obsidian (map thay thế Finder)
cv.ondblclick=e=>{
  const p=pick(e.clientX,e.clientY);
  if(p<0)return;
  const n=D.nodes[p];
  if(n.id.endsWith('.md')&&!n.id.includes(':'))
    location.href='obsidian://open?vault=brain&file='+encodeURIComponent(n.id.replace(/\\.md$/,''));
};
addEventListener('keydown',e=>{
  if(e.key==='Escape'){picked=-1;draw()}
  else if(e.key==='/'&&document.activeElement!==find){e.preventDefault();find.focus()}
});
// search: gõ tên → Enter nhảy tới node (Enter tiếp = match kế)
const find=document.getElementById('find');
let fIdx=0;
find.onkeydown=e=>{
  if(e.key!=='Enter')return;
  const q=find.value.trim().toLowerCase();
  if(!q)return;
  const matches=D.nodes.map((n,i)=>({n,i})).filter(({n})=>n.id.toLowerCase().includes(q)||n.label.toLowerCase().includes(q));
  if(!matches.length){find.style.borderColor='#ef4444';return}
  find.style.borderColor='#22c55e';
  const {n,i}=matches[fIdx++%matches.length];
  picked=i;
  ox=-n.x*scale;oy=-n.y*scale; // căn node vào giữa màn hình
  draw();
};
find.oninput=()=>{fIdx=0;find.style.borderColor='#1e1e2e'};
cv.onwheel=e=>{e.preventDefault();const f=Math.exp(-e.deltaY*0.0015);
  const mx=e.clientX-W/2,my=e.clientY-H/2;
  ox=mx-(mx-ox)*f;oy=my-(my-oy)*f;scale*=f;draw()};
resize();
${live ? `
// live mode: SSE — vault đổi là fetch data mới, giữ nguyên viewport
document.getElementById('live').style.display='inline';
new EventSource('/events').onmessage=async()=>{
  try{D=await(await fetch('/data.json')).json();rebuildNb();draw();
    document.querySelector('#hud b').nextSibling.textContent=' · '+D.counts.memory+' memories · '+D.counts.skills+' skills · '+D.counts.routines+' routines · '+D.counts.apps+' apps ';
    document.querySelector('#hud div').textContent='updated '+new Date().toTimeString().slice(0,8)}catch(e){}
};` : ''}
</script>`;
}
