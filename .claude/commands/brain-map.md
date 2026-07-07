---
description: Mở visual brain map 4 vòng (live server hoặc snapshot tĩnh)
---
Brain map 4 vòng: APPLICATIONS → ROUTINES → MEMORY (6 khu: MARKETING/PRODUCT/BUSINESS/PERSONAL/META/BRIEFS) → SKILLS → CLAUDE.md ở tâm. Edge = wikilink thật; sources tự phân khu theo trang wiki link tới nó nhiều nhất.

**Mặc định — live mode** (real-time, vault đổi là map đổi <1s):
- Dùng preview tool: `preview_start` với config `brain-map-live` (.claude/launch.json, port 4321), rồi `open http://localhost:4321`.
- Hoặc chạy tay: `node /Users/quanghuy/Obsidian/brain/.brain/server/serve.mjs`

**Snapshot tĩnh** (user nói "static" / không cần server):
```bash
node /Users/quanghuy/Obsidian/brain/.brain/scripts/build-graph-html.mjs && open /Users/quanghuy/Obsidian/brain/.brain/brain-map.html
```

- Cần **Obsidian đang mở vault `brain`** (đọc metadataCache qua CLI). Lỗi "Không đọc được metadataCache" → bảo user mở Obsidian; đôi khi transient sau khi move nhiều file — retry 1 lần trước khi hỏi.
- Sau khi mở: báo số memories/skills/routines/apps từ output.
