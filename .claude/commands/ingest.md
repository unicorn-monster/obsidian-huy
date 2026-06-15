---
description: Tiêu hoá inbox -> sources + cập nhật wiki
---
Bạn đang bảo trì Obsidian knowledge vault ở thư mục gốc hiện tại. Đọc `CLAUDE.md` trước.

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

Quy tắc:
- `sources/` BẤT BIẾN sau khi đặt vào: chỉ chuẩn hoá frontmatter + tên file, KHÔNG sửa nội dung gốc.
- `wiki/` bạn sở hữu hoàn toàn: viết, sửa, tái cấu trúc thoải mái.
- Theo kepano `obsidian-markdown` skill cho cú pháp.

Cuối: in tóm tắt ngắn — ingest mấy file, gắn type gì, wiki page nào tạo/cập nhật.
