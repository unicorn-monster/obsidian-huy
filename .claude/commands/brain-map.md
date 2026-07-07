---
description: Regenerate + mở visual brain map (orbit graph từ wikilink thật)
---
Regenerate bản đồ não rồi mở trong browser:

```bash
node /Users/quanghuy/Obsidian/brain/.brain/scripts/build-graph-html.mjs && open /Users/quanghuy/Obsidian/brain/.brain/brain-map.html
```

- Cần **Obsidian đang mở vault `brain`** (script đọc `app.metadataCache.resolvedLinks` qua CLI). Lỗi "Không đọc được metadataCache" → bảo user mở Obsidian rồi chạy lại.
- Map là snapshot tĩnh: CLAUDE.md ở tâm, cluster màu theo trục (wiki·method cam, wiki·products tím, sources theo type, projects vàng, briefs xám), size node = backlink, edge = wikilink thật.
- Sau khi mở: báo user số nodes/links + node hub lớn nhất (in-degree cao nhất, đọc từ output script nếu cần thì thêm log).

KHÔNG cần chạy lại khi vault đổi lặt vặt — chỉ regenerate khi user gọi /brain-map.
