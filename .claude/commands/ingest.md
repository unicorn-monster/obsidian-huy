---
description: Tiêu hoá inbox -> sources + cập nhật wiki
---
Bạn đang bảo trì Obsidian knowledge vault ở thư mục gốc hiện tại. Đọc `CLAUDE.md` trước.

**Output language: English** — báo cáo/tóm tắt cuối in bằng English. Wiki/sources giữ ngôn ngữ gốc của từng trang (đừng đổi VN↔EN giữa trang).

Nhiệm vụ: tiêu hoá MỌI file trong `inbox/`. (Bỏ qua `briefs/` và `wiki/`.)

Với mỗi file trong `inbox/`:
1. Đọc nội dung. Suy ra `type`: clip (article/thread/sale page) | swipe (ad/creative/hook đối thủ) | learning (kết quả test của tôi) | idea (suy nghĩ của tôi).
   (Hiện CHỈ 1 mảng marketing nên KHÔNG dùng `domain`. Tới khi mở mảng 2 — finance/fulfillment — mới thêm `domain`.)
2. Thêm/chuẩn hoá frontmatter (clipper điền `created` → đổi thành `date`; giữ `author`/`title` nếu clipper có):
   ```
   ---
   type: <clip|swipe|learning|idea>
   date: <ngày trong file, hoặc hôm nay>
   source: <url nếu có>
   author: <nếu có>
   title: <nếu có>
   ---
   ```
3. Đặt tên file gọn (slug) theo nội dung, **chuyển** sang `sources/`. inbox phải rỗng sau khi xong.
   **Cách chuyển — BẮT BUỘC làm đúng đây (để chạy unattended KHÔNG bị bắt Allow):**
   a. `mv "<abs-path inbox file>" "<abs-path sources/<slug>.md>"` — body giữ NGUYÊN XI, chỉ đổi tên + chuyển chỗ.
   b. Read file vừa chuyển → dùng **Edit tool** thay ĐÚNG khối frontmatter (KHÔNG đụng body = bất biến).
   ⛔ KHÔNG BAO GIỜ tạo/ghi source file bằng `{ ... } > file`, `printf`/`cat`/`tail`/`echo` + redirect `>`, hay here-doc: các pattern này kích hoạt heuristic bảo mật **"expansion obfuscation"** → ép Allow thủ công NGAY CẢ khi unattended. Luôn dùng absolute path, KHÔNG `cd`.
4. Trích insight cốt lõi, BỒI vào trang wiki ĐÚNG TRỤC. **Route theo CLAUDE.md — KHÔNG còn `wiki/marketing/` phẳng:**

   | Loại insight | Đích |
   |---|---|
   | Cách làm lại được, dùng cho MỌI sản phẩm (rút từ clip/post chuyên gia) | `wiki/method/<domain>/` — domain đang mở: `marketing` → vd `wiki/method/marketing/hooks.md`, `angles.md`, `offer-and-cta.md` |
   | Sự thật của 1 SẢN PHẨM cụ thể (spec / avatar / competitor / VOC / page) | `wiki/products/<slug>/`, mỗi trang prefix `<slug>-` → vd `wiki/products/maxpro/maxpro-avatars.md` |
   | Cách vận hành CHÍNH cái vault / AI+Obsidian workflow (KHÔNG phải tactic business) | `wiki/method/meta/` |

   - Sản phẩm mới → tạo `wiki/products/<slug>/` + prefix trang bằng slug. Domain business mới (finance / fulfillment / sourcing) → `wiki/method/<domain>/`.
   - 1 khái niệm = 1 trang: đã có trang gần đúng thì BỒI vào, đừng tạo trùng.
   - Dùng wikilink `[[...]]` cross-link giữa các trang VÀ trỏ về source `[[<source-slug>]]`.
   - KHÔNG copy nguyên văn. Tổng hợp, dedup, xếp hạng khi có số liệu.
   - **Audit-trail:** trang wiki có frontmatter `sources:` liệt kê slug của MỌI source đã bồi vào trang (khớp `[[...]]` trong thân). Source mới → APPEND, đừng ghi đè:
     ```yaml
     ---
     sources: [<slug-1>, <slug-2>]
     updated: <YYYY-MM-DD>
     ---
     ```
5. Cập nhật `wiki/index.md`: mọi trang wiki đều có trong index, nhóm đúng 3 trục (`method/<domain>` · `products/<slug>` · `method/meta`).
6. **Project-impact (PROPOSED — KHÔNG auto-apply):** đọc `projects/*/` (open question + status). Mỗi file vừa ingest → nếu giúp được project nào: 1 dòng *"giúp [project] ở [chỗ nào]"* + **≤3 action đề xuất** (đừng tự sửa project file, để user duyệt). Ko liên quan project nào → ghi "no current project impact."

Quy tắc:
- `sources/` BẤT BIẾN sau khi đặt vào: chỉ chuẩn hoá frontmatter + tên file, KHÔNG sửa nội dung gốc.
- `wiki/` bạn sở hữu hoàn toàn: viết, sửa, tái cấu trúc thoải mái.
- Theo kepano `obsidian-markdown` skill cho cú pháp.

End: print a short summary **in English** — files ingested + type, wiki pages created/updated, and the per-project impact + proposed actions (≤3 each).
