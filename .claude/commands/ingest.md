---
description: Tiêu hoá inbox -> sources + cập nhật wiki
---
Bạn đang bảo trì Obsidian knowledge vault ở thư mục gốc hiện tại. Đọc `CLAUDE.md` trước.

**Output language: English** — báo cáo/tóm tắt cuối in bằng English. Wiki/sources giữ ngôn ngữ gốc của từng trang (đừng đổi VN↔EN giữa trang).

Nhiệm vụ: tiêu hoá MỌI file trong `inbox/`. (Bỏ qua `briefs/` và `wiki/`.)

Với mỗi file trong `inbox/`:
1. Đọc nội dung. Suy ra `type`: clip (article/thread/sale page) | swipe (ad/creative/hook đối thủ) | learning (kết quả test của tôi) | idea (suy nghĩ của tôi).
   (Hiện CHỈ 1 mảng marketing nên KHÔNG dùng `domain`. Tới khi mở mảng 2 — finance/fulfillment — mới thêm `domain`.)
2. Thêm/chuẩn hoá frontmatter (nếu clipper điền `created`, đổi thành `date`):
   ```
   ---
   type: <...>
   date: <ngày trong file, hoặc hôm nay>
   source: <url nếu có>
   ---
   ```
3. Đặt tên file gọn theo nội dung, **chuyển** file sang `sources/`. inbox phải rỗng sau khi xong.
4. Trích insight cốt lõi, BỒI vào trang `wiki/marketing/` liên quan:
   - Tạo trang mới nếu chủ đề chưa có (vd `wiki/marketing/hooks.md`, `angles.md`, `competitors.md`, `offers.md`, `what-converts.md`).
   - Dùng wikilink `[[...]]` cross-link giữa các trang và trỏ về source.
   - KHÔNG copy nguyên văn. Tổng hợp, dedup, xếp hạng khi có số liệu.
5. Cập nhật `wiki/index.md`: mọi trang wiki đều có trong index, nhóm theo chủ đề.
6. **Project-impact (PROPOSED — KHÔNG auto-apply):** đọc `projects/*/` (open question + status). Mỗi file vừa ingest → nếu giúp được project nào: 1 dòng *"giúp [project] ở [chỗ nào]"* + **≤3 action đề xuất** (đừng tự sửa project file, để user duyệt). Ko liên quan project nào → ghi "no current project impact."

Quy tắc:
- `sources/` BẤT BIẾN sau khi đặt vào: chỉ chuẩn hoá frontmatter + tên file, KHÔNG sửa nội dung gốc.
- `wiki/` bạn sở hữu hoàn toàn: viết, sửa, tái cấu trúc thoải mái.
- Theo kepano `obsidian-markdown` skill cho cú pháp.

End: print a short summary **in English** — files ingested + type, wiki pages created/updated, and the per-project impact + proposed actions (≤3 each).
