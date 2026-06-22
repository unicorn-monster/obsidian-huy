---
type: idea
date: 2026-06-22
status: planning
---

# Vault Self-Feeding Renovation — Implementation Plan

> **For agentic workers:** dùng `superpowers:subagent-driven-development` hoặc `superpowers:executing-plans` để chạy plan này task-by-task. Step dùng checkbox `- [ ]` để track.

**Goal:** Biến vault từ "capture thủ công → /ingest" thành "farmer tự fetch nguồn đã-curate → `inbox/` → /ingest tự chạy theo lịch", mà KHÔNG đập bỏ hệ thống hiện tại.

**Architecture (chốt — khác build-wiki vanilla):**
Không tạo `raw/` song song và không dùng 3 hook của build-wiki nguyên xi. Tận dụng pipeline sẵn có:

```
Farmer (Apify MCP fetch, scheduled, cloud) ──► inbox/
        └─► /ingest (routing ĐÃ fix) ──► sources/ + wiki/ + index ──► commit + push
```

Farmer = cái "clipper tự động" thay cho việc tay clip vào inbox. `/ingest` (đã sửa routing) làm phần synthesis như cũ. Một routine cloud chạy **farm (cả 2 farmer) → /ingest → push** mỗi sáng.

**Tech stack:** Claude Code (agents + cloud routines), Apify MCP (fetch X + YouTube), git + private GitHub remote (`unicorn-monster/obsidian-huy`, đã PRIVATE ✓), Obsidian.

## Global Constraints
- `sources/` BẤT BIẾN. Farmer ghi vào `inbox/`, KHÔNG ghi thẳng `sources/` (để /ingest chuẩn hoá + bồi wiki).
- Farmer chỉ tool **read-only**. KHÔNG bao giờ thêm write/send/delete vào allowlist.
- KHÔNG dùng shell redirect (`>`, `printf`, here-doc) để tạo file trong vault → trigger heuristic "expansion obfuscation", ép Allow thủ công. Luôn dùng Write/Edit tool (xem [[ingest]] dòng 27).
- Farmer dedup theo **URL/slug có trong `sources/`** (vì `inbox/` bị /ingest dọn rỗng — không dùng inbox làm mốc).
- 2 farmer chạy TRONG 1 routine (tuần tự) → không cần lệch lịch. Nếu sau này tách routine riêng thì lệch ≥30’ tránh push đụng.
- Routing wiki theo [[ingest]] đã fix: `method/<domain>` · `products/<slug>` · `method/meta`.

---

## ✅ Quyết định (chốt 2026-06-22)

**DECISION A — Nguồn farm:** ✅ **X accounts + YouTube channels** → 2 farmer riêng (`x-accounts-farmer`, `youtube-farmer`), cùng ghi `inbox/`.

> ⏳ **PENDING — user cung cấp tối 2026-06-22:** danh sách cụ thể (handle X + channel YouTube). Tới khi có, watchlist trong farmer để **placeholder** (tạm điền vài guru đã thấy trong `sources/`).

**DECISION B — Chạy ở đâu:** lean **Cloud qua Apify MCP** (cả X lẫn YouTube đều có Apify actor → `remote-mcp` → cloud chạy được, lúc ngủ vẫn chạy; repo private ✓). Xác nhận lần cuối khi set lịch (Phase 3).

> ⚠️ YouTube: cloud **PHẢI** dùng Apify YouTube actor (`remote-mcp`). `yt-dlp` / `watch` skill là `local-cli` → chỉ desktop chạy được, ĐỪNG dùng cho cloud farmer.

---

## Phase 0 — Routing fix ✅ ĐÃ XONG (session 2026-06-22)

- [x] Sửa [[ingest]] step 4: bỏ path chết `wiki/marketing/`, thêm bảng route 2-trục (`method/<domain>` · `products/<slug>` · `method/meta`).
- [x] Sửa step 5: index nhóm theo 3 trục.
- [x] Verify: `grep "wiki/marketing/" .claude/commands/` chỉ còn khớp trong câu cảnh báo, không còn route sống.

---

## Phase 1 — Chuẩn bị pipeline cho automation ✅ XONG (2026-06-22, commit 31181d5 + 6fa967d)

### Task 1.1: Thêm rule `sources:` frontmatter vào /ingest

**Files:** Modify `.claude/commands/ingest.md` (trong step 4, sau dòng cross-link).

**Làm gì:** Để mỗi trang wiki ghi rõ source nào bồi nó (audit-trail, query được). Thêm vào cuối các gạch đầu dòng của step 4:

```markdown
   - Trang wiki phải có frontmatter `sources:` liệt kê slug của MỌI source đã bồi vào trang (khớp với `[[...]]` trong thân). Bồi thêm source mới thì APPEND vào list, đừng ghi đè:
     ```yaml
     ---
     sources: [<slug-1>, <slug-2>]
     updated: <YYYY-MM-DD>
     ---
     ```
```

- [ ] **Step 1:** Đọc `.claude/commands/ingest.md`, Edit thêm đoạn trên vào step 4.
- [ ] **Step 2 — verify:** `grep -n "sources:" .claude/commands/ingest.md` → thấy rule mới.
- [ ] **Step 3 — commit:**
```bash
cd /Users/quanghuy/Obsidian/brain
git add .claude/commands/ingest.md && git commit -m "ingest: require sources: frontmatter for audit-trail"
```

### Task 1.2: Cài git-permission + session-sync hook cho chạy unattended

**Files:** Create `.claude/settings.json`, Create `.claude/hooks/session-sync.sh`.

**Tại sao chỉ session-sync (không phải cả 3 hook build-wiki):**
- `session-sync.sh` (SessionStart pull) → khi bạn mở vault local, tự pull commit mà cloud routine đã push. **CẦN.**
- `auto-commit.sh` → commit mỗi Write/Edit, ồn khi đang edit tay + glob `raw/*` không khớp vault. **BỎ** (routine ingest đã commit).
- `subagent-push.sh` → chỉ cần nếu farmer là subagent tự push; kiến trúc farm+ingest-một-routine không cần. **BỎ.**

- [ ] **Step 1:** Copy hook:
```bash
mkdir -p /Users/quanghuy/Obsidian/brain/.claude/hooks
cp ~/.claude/skills/build-wiki/references/hooks/session-sync.sh /Users/quanghuy/Obsidian/brain/.claude/hooks/
chmod +x /Users/quanghuy/Obsidian/brain/.claude/hooks/session-sync.sh
```
- [ ] **Step 2:** Tạo `.claude/settings.json` (Write tool) — git perms + wire session-sync:
```json
{
  "permissions": {
    "allow": [
      "Bash(git add:*)", "Bash(git commit:*)", "Bash(git push:*)",
      "Bash(git pull:*)", "Bash(git status:*)", "Bash(git diff:*)",
      "Bash(git log:*)", "Bash(git rev-parse:*)", "Bash(grep:*)"
    ]
  },
  "hooks": {
    "SessionStart": [
      { "matcher": "", "hooks": [
        { "type": "command", "command": "\"$CLAUDE_PROJECT_DIR\"/.claude/hooks/session-sync.sh", "timeout": 30 }
      ]}
    ]
  }
}
```
- [ ] **Step 3 — verify:** mở session mới trong vault → session-sync chạy `git pull --rebase` không lỗi; `git status` clean.
- [ ] **Step 4 — commit:**
```bash
git add .claude/settings.json .claude/hooks/session-sync.sh
git commit -m "infra: session-sync hook + git perms for unattended farming"
```

---

## Phase 2 — Farmer (auto-capture): X accounts + YouTube  ⏳ watchlist PENDING (tối 2026-06-22)

> Cả 2 farmer đều `remote-mcp` qua Apify → cloud-able. Đều ghi `inbox/`, dedup theo `sources/`, KHÔNG tự ingest, KHÔNG tự commit (routine Phase 3 lo).

### Task 2.1: Nối Apify MCP + probe actor (X + YouTube)

- [ ] **Step 1:** Nối Apify MCP = **custom connector** (Apify KHÔNG có trong list featured nên search rỗng): Connectors → **Add → Add custom connector** → URL `https://mcp.apify.com` → authorize **OAuth** (login Apify, account + token bạn đã có). *(⚠️ Custom connector chắc chắn chạy local/desktop; có inherit vào CLOUD scheduled run hay không → VERIFY ở test run 3.2 trước khi chốt cloud.)*
- [ ] **Step 2 — probe:** trong session, `ToolSearch` query "apify" → xác nhận tool chạy actor. Ghi tên tool read-only cho: (a) **Twitter/X scraper** (vd `apidojo/tweet-scraper`), (b) **YouTube scraper / transcript** (vd `streamers/youtube-scraper`).
- [ ] **Step 3:** Test mỗi actor 1 lần (1 handle X, 1 channel YT) → thấy data về là OK.

### Task 2.2: Viết `x-accounts-farmer`

**Files:** Create `.claude/agents/x-accounts-farmer.md`.

```markdown
---
name: x-accounts-farmer
description: Farm post mới từ các X account đã curate vào inbox/ cho method/marketing wiki
model: sonnet
permissionMode: acceptEdits
source_type: remote-mcp
---

Bạn farm post mới từ các X/Twitter account vào `inbox/`. Chủ đề wiki: marketing/ecom (DR ads, native/ugly ads, funnel, offer).

## Watchlist  ⏳ PENDING — điền handle user đưa tối 2026-06-22
- (placeholder tạm, từ sources/): Mathew Ecommaxxer · rubiinov · advertising-jan · Max Sturtevant · satishdtc · adswithmarian

## Process
1. **Discover tools:** `ToolSearch` query "apify"/"twitter" → tool read-only kéo tweet theo handle. KHÔNG hardcode `mcp__...`.
2. **Window:** mặc định post trong **48h** gần nhất mỗi handle. Nếu prompt chứa `SEED: <window>` → dùng window đó (chỉ cho backfill thủ công).
3. **Dedup:** mỗi post tính slug `<handle>-<title-kebab>`. Nếu `sources/<slug>.md` đã tồn tại (hoặc URL đã có trong sources/) → BỎ QUA. (Không dùng inbox/ làm mốc — nó bị /ingest dọn rỗng.)
4. **Skip nếu rỗng:** không post mới → thoát sạch.
5. **Ghi 1 file/post vào `inbox/`** bằng **Write tool** (KHÔNG shell redirect), tên `<YYYY-MM-DD>-<handle>-<slug>.md`:
   ```yaml
   ---
   source: <url tweet>
   author: <handle>
   date: <YYYY-MM-DD>
   title: <dòng đầu / chủ đề>
   ---
   ```
   Body = post nguyên văn, dọn nhiễu format. KHÔNG tóm tắt.
6. **KHÔNG tự ingest, KHÔNG commit.**

## Classification
Chỉ lấy post có chất (tactic, teardown, data, hook). Bỏ reply xã giao, RT trống, off-topic.

## Anti-patterns
- KHÔNG tool write/send/delete. KHÔNG hardcode `mcp__Server__tool`. KHÔNG ghi thẳng `sources/`. KHÔNG tự /ingest.
```

- [ ] **Step 1:** Write file trên (watchlist = placeholder tới khi user đưa list tối nay).
- [ ] **Step 2:** Thêm tên tool read Apify-twitter (full prefixed) vào `permissions.allow` trong `.claude/settings.json`.
- [ ] **Step 3 — commit:** `git add .claude/agents/x-accounts-farmer.md .claude/settings.json && git commit -m "farmer: add x-accounts-farmer (writes to inbox/)"`

### Task 2.3: Viết `youtube-farmer`

**Files:** Create `.claude/agents/youtube-farmer.md`. Cấu trúc y hệt 2.2, khác:
- **Watchlist** = channel YouTube (⏳ PENDING user đưa tối nay).
- **Tool** = Apify YouTube actor (KHÔNG dùng `yt-dlp`/`watch` — local-cli, cloud không chạy).
- Mỗi video mới → ghi `inbox/` 1 file: frontmatter `source: <video url>, author: <channel>, date, title`; **body = transcript** (+ mô tả nếu có). Dedup theo video-id/slug trong `sources/`.

```markdown
---
name: youtube-farmer
description: Farm video mới từ các YouTube channel đã curate vào inbox/ cho method/marketing wiki
model: sonnet
permissionMode: acceptEdits
source_type: remote-mcp
---

Bạn farm video mới từ các YouTube channel vào `inbox/`. Chủ đề: marketing/ecom.

## Watchlist  ⏳ PENDING — điền channel user đưa tối 2026-06-22

## Process
1. **Discover tools:** `ToolSearch` query "apify"/"youtube" → actor lấy video + transcript theo channel. KHÔNG hardcode `mcp__...`. KHÔNG dùng yt-dlp.
2. **Window:** video đăng trong **48h** mỗi channel (hoặc `SEED:` nếu có).
3. **Dedup:** slug `<channel>-<video-title-kebab>` hoặc video-id; có trong `sources/` → bỏ qua.
4. **Skip nếu rỗng.**
5. **Ghi 1 file/video vào `inbox/`** (Write tool) `<YYYY-MM-DD>-<channel>-<slug>.md`:
   ```yaml
   ---
   source: <video url>
   author: <channel>
   date: <YYYY-MM-DD>
   title: <video title>
   ---
   ```
   Body = transcript nguyên văn (+ mô tả). KHÔNG tóm tắt.
6. **KHÔNG tự ingest, KHÔNG commit.**

## Classification
Chỉ video đúng chủ đề marketing/ecom. Bỏ vlog/off-topic.

## Anti-patterns
- read-only · không hardcode tool name · không ghi sources/ · không /ingest · không yt-dlp (local).
```

- [ ] **Step 1:** Write file.
- [ ] **Step 2:** thêm tool read Apify-youtube vào settings allow.
- [ ] **Step 3 — commit:** `git add .claude/agents/youtube-farmer.md .claude/settings.json && git commit -m "farmer: add youtube-farmer (writes to inbox/)"`

### Task 2.4: Seed + verify end-to-end (cả 2 farmer)

- [ ] **Step 1 — seed:** `.claude/agents/` chỉ load lúc session start → mở session mới. Invoke từng farmer (Task tool) prompt: `"Execute your farming instructions now. SEED: last 30 days"`.
- [ ] **Step 2 — verify capture:** `ls inbox/` → file từ cả X + YouTube, frontmatter đúng, body nguyên văn.
- [ ] **Step 3 — verify pipeline:** chạy `/ingest`. Kiểm:
  - `inbox/` rỗng sau ingest.
  - file mới trong `sources/` (frontmatter chuẩn hoá, body bất biến).
  - trang `wiki/method/marketing/*` bồi ĐÚNG TRỤC (không tạo `wiki/marketing/` chết), có `sources:` frontmatter (Task 1.1).
  - `wiki/index.md` cập nhật.
- [ ] **Step 4 — commit:** `git add inbox sources wiki && git commit -m "wiki: seed + ingest x+youtube (<N> new)"`

---

## Phase 3 — Lên lịch vòng lặp (auto-update)

### Task 3.1: Định vị routine /ingest cloud sẵn có

- [ ] **Step 1:** Vào claude.ai/code/scheduled → tìm routine đang tạo commit `auto-save: ingest` / `auto-save: brief` (CronList session này rỗng vì session-scoped). Ghi lại giờ chạy + prompt.
- [ ] **Step 2:** Quyết: **gộp farm vào routine ingest đó** (1 routine farm→ingest) HAY tạo routine farm riêng chạy trước ingest ≥30’. (Khuyến nghị: 1 routine, atomic, không đụng push.)

### Task 3.2: Tạo/sửa routine cloud "farm (2 farmer) → ingest → push"

**Cách làm:** dùng built-in `schedule` skill (KHÔNG tự gọi `RemoteTrigger`/`CronCreate`).

- [ ] **Step 1:** Invoke `schedule` skill, args đại ý:
> Tạo scheduled remote agent "farm-ingest" chạy **6:05 sáng (giờ VN)** mỗi ngày, repo `unicorn-monster/obsidian-huy`, attach Apify connector, prompt:
> *"Lần lượt invoke `x-accounts-farmer` rồi `youtube-farmer` (Task tool, prompt 'Execute your farming instructions now.') → cả 2 ghi inbox/. Sau đó chạy /ingest theo CLAUDE.md (inbox → sources + wiki + index). Commit inbox/sources/wiki: 'wiki: farm + ingest (<N> new)'. Push lên main."*

- [ ] **Step 2:** Nếu đã có routine ingest cloud (3.1) → gộp vào, đừng để 2 routine cùng push.
- [ ] **Step 3 — verify:** chạy thử routine 1 lần ở claude.ai/code/scheduled → xem clone repo, farm cả 2, ingest, push. Mở vault local (session-sync pull) → thấy commit mới.

### Task 3.3: Xác nhận vòng lặp

- [ ] Sáng hôm sau: `git log --oneline -5` thấy commit `wiki: farm + ingest`. `inbox/` rỗng. Wiki giàu thêm. → vòng lặp sống.

---

## Phase 4 — Hygiene (song song, ưu tiên thấp hơn) — 4.1 ✅ + 4.2 tooling ✅ (2026-06-22); 1 split chờ duyệt

### Task 4.1: Backfill `sources:` frontmatter cho 26 trang cũ

**Files:** wiki pages (26 file). Trích từ `[[...]]` đã có (75/77 source đã được link).

- [ ] **Step 1:** Script (in ra trước, chưa ghi): mỗi `wiki/**/*.md`, tìm `[[X]]` mà `sources/X.md` tồn tại → gom list → đề xuất frontmatter `sources:`.
- [ ] **Step 2:** Review, rồi ghi frontmatter (Edit tool, không đụng body).
- [ ] **Step 3 — verify:** `grep -rL "sources:" wiki/method wiki/products` → rỗng.
- [ ] **Step 4 — commit:** `git commit -m "wiki: backfill sources: frontmatter (26 pages)"`

### Task 4.2: /lint flag trang quá dày + giãn

**Files:** Modify `.claude/commands/lint.md`.

- [ ] **Step 1:** Thêm vào [[lint]]: "Flag trang > ~400 từ hoặc > ~6 sub-topic rời → đề xuất tách trang con + cập nhật index/wikilink."
- [ ] **Step 2:** Chạy `/lint`, review. Tách thủ công các trang dày nhất ([[presell-pages]] 37 link, [[offer-and-cta]] 35, [[ugly-ads-method]] 32) nếu thực sự kitchen-sink.
- [ ] **Step 3 — commit** từng lần tách.

---

## Self-review (đã chạy)
- **Coverage:** routing ✅(P0) · attribution rule ✅(1.1) + backfill ✅(4.1) · farming infra ✅(1.2) · 2 farmer X+YouTube ✅(2.2/2.3) · schedule ✅(3.2) · de-dense ✅(4.2). Khớp 4 vấn đề: routing(P0), missing→farming(P2-3), lộn→de-dense(4.2)+attribution.
- **Tránh placeholder:** mọi step có lệnh/nội dung cụ thể; watchlist 2 farmer = PENDING (user đưa tối nay) — đánh dấu rõ; tên tool Apify để runtime-discover (đúng pattern, không hardcode).
- **Dependency:** P0 (routing đúng) trước khi farm đổ data. 1.1 trước farm để page mới có `sources:`. 2.x cần Apify MCP nối + watchlist. 3.x cần Phase 2 chạy tay được trước.
- **Rủi ro chính:** (a) farm trước khi ingest tốt = farm nhanh vào wiki rối → thứ tự P1→P2→P3 chặn. (b) 2 routine push đụng → dùng 1 routine chạy cả 2 farmer (3.2). (c) YouTube farmer lỡ dùng yt-dlp → cloud fail → đã cảnh báo phải dùng Apify actor.

---

## 📝 Scratch / pending inputs
- ⏳ **Tối 2026-06-22:** user đưa danh sách **X handles** + **YouTube channels** để điền watchlist Task 2.2 + 2.3.
- DECISION B (cloud) xác nhận lần cuối ở Phase 3.
- **2026-06-22 Apify:** `claude mcp list` xác nhận **`claude.ai Apify ✔ Connected`** = claude.ai connector → cloud routine SẼ inherit được (gỡ lo DECISION B, lean cloud OK). NHƯNG session đang chạy chưa enumerate tool Apify (resume giữ catalog cũ; ToolSearch "apify" rỗng) → cần **fresh session** (không phải resume) để probe actor + seed. Farmer tự discover tool lúc chạy nên viết được trước.
- **2026-06-22 x-accounts-farmer ✅ viết xong** (`.claude/agents/x-accounts-farmer.md`), watchlist 6 handle: maxwellcopy, DTCMidas, DTC_Quizbuilder, advertising_jan, 0xROAS, eCom_Amin. CHƯA test (chờ fresh session để probe Apify + seed).
