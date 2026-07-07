---
description: Dọn wiki — mâu thuẫn, claim cũ, trang mồ côi, orphan, broken-link
---
Quét toàn bộ `wiki/`. Báo cáo và đề xuất sửa:
- Mâu thuẫn giữa các trang.
- Claim cũ / đã bị learning mới phủ định.
- Trang mồ côi (không trang nào link tới, không có trong `index.md`).
- Thiếu cross-link nên có.
- **Trang kitchen-sink** = gom ≥4 sub-topic RỜI RẠC mà mỗi cái đủ đứng riêng 1 trang. KHÔNG dựa độ dài đơn thuần — vault này cố ý synthesize dày, trang dài-nhưng-mạch-lạc thì GIỮ (kepano: đừng over-segment). Chỉ flag khi thật sự nhồi nhiều khái niệm tách được → đề xuất TÁCH trang con, trang gốc giữ lõi + wikilink sang, cập nhật `index.md`.

## Cách quét (obsidian-cli trước, grep chỉ là fallback)

Dùng kepano `obsidian-cli` skill — đọc thẳng metadataCache của Obsidian nên chính xác tuyệt đối theo cách Obsidian resolve link, không phải đoán bằng grep. Điều kiện: app Obsidian đang mở. Lệnh lỗi / app không chạy → fallback grep thủ công.

- **Broken links** (wikilink trỏ trang không tồn tại), đã test chạy được:
  ```bash
  obsidian vault="brain" eval code='JSON.stringify(Object.entries(app.metadataCache.unresolvedLinks).filter(function(e){return e[0].startsWith("wiki/") && Object.keys(e[1]).length>0}))'
  ```
- **Orphan** (không file nào link tới, kể cả `index.md`) — lệnh native:
  ```bash
  obsidian vault="brain" orphans 2>/dev/null | grep '^wiki/'
  ```
  Vẫn check riêng "có trong `index.md` không" — orphan theo định nghĩa vault = thiếu CẢ link lẫn index.
- **Claim cũ theo tuổi trang** — query thẳng `wiki.base`:
  ```bash
  obsidian vault="brain" base:query path=wiki.base view="Stale nhất lên đầu" format=md
  ```
  Trang 🔴 (>45 ngày không update) là ứng viên rà claim, đối chiếu learning mới trong `sources/`. Flag có đuôi "(mtime)" = trang THIẾU frontmatter `updated` → cũng là 1 finding (quy ước ingest yêu cầu `sources:` + `updated:`).
  ⚠️ `base:query` trả 0 row ngay sau khi `.base` vừa bị sửa — recompute lag, chờ ~30s query lại.
- **Thiếu frontmatter** `updated` / `sources` trên trang wiki (vi phạm quy ước ingest) — thấy ngay qua flag "(mtime)" hoặc cột trống trong wiki.base.
- Mâu thuẫn / kitchen-sink / thiếu cross-link: không tự động được, đọc nội dung như cũ.

Hỏi tôi trước khi sửa lớn. Sửa nhỏ (link, cập nhật index) thì cứ làm.
