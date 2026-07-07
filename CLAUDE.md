# Vault Schema & Về tôi

> File này Claude đọc đầu mỗi session. Giữ nó tươi = brief không generic.

## Tôi là ai
Tên: Huy. Brand owner (ecom). Hiện focus: **marketing**.
Mảng đang active: `marketing`. Sẽ mở sau: `finance`, `fulfillment`.

Goals 2026:
- $100k revenue pet store in 2026 

## Dự án đang chạy
Active: Product: Maxpro Grinder, 
Stuck on: Quá nhiều idea, kiến thức cần nơi để sắp xếp logic, trau dồn hằng ngày, ko bị mất
Next milestone: 

## Vault hoạt động sao
- `inbox/` = capture thô, chưa xử lý. Rỗng sau /ingest.
- `sources/` = raw BẤT BIẾN (đọc, không sửa nội dung). property: `type` (domain hoãn tới khi mở mảng 2).
- `wiki/` = BẠN (Claude) sở hữu + bảo trì. `index.md` là bản đồ. **2 trục:**
  - `wiki/method/<domain>/` = cách làm, **SOURCE OF TRUTH**, dùng cho mọi sản phẩm (rút từ post X chuyên gia). Domain đang mở (= các khu Memory trên brain-map): **`marketing`** (ads, funnel, creative — khu đậm nhất) · **`business`** (finance, customer support, fulfillment, ops) · **`personal`** (mindset, focus, vận hành bản thân + học về second-brain/AI-workflow). Mở sau: `sourcing`.
  - `wiki/products/<slug>/` = sự thật từng sản phẩm (cross-domain), mỗi trang prefix `<slug>-`. Sản phẩm #1: `maxpro` (nail grinder). = khu PRODUCT trên map.
  - **Routing khi /ingest:** cách-làm-lại-được → `method/<domain>/` (marketing / business / personal); fact 1 sản phẩm cụ thể → `products/<slug>/`. **Tri thức vận hành HỆ THỐNG (kiến trúc 4 vòng, học từ video):** learning/lý thuyết về second-brain → `method/personal/`; còn thay đổi ACTIONABLE cho vault → sửa thẳng CLAUDE.md / `.claude/commands/` / skills — hệ vận hành sống ở hạ tầng, KHÔNG phải Memory. Sản phẩm mới = tạo folder + prefix page bằng slug.
- `briefs/` = output của bạn (brief + synthesis), có ngày. KHÔNG ingest.
- `archive/` = execution cũ (plans, creative packs, daily logs). KHÔNG index vào brain, KHÔNG ingest. Projects mới = folder code riêng NGOÀI vault — brain thuần lưu trữ + query.
- `.brain/` = lớp retrieval deterministic (ẩn khỏi Obsidian): `catalogue.tsv` (1 dòng/file toàn vault) + `topic-map.tsv` (heading→trang chủ quản) + scripts. **Brain-first rule: câu hỏi tri thức về vault → chạy `node .brain/scripts/recall.mjs "<câu hỏi>"` TRƯỚC, mở file SAU. KHÔNG grep/đọc lan man.** Semantic fallback (Việt↔Anh): `qmd query`. Ladder đầy đủ: `/ask`.

## Quy ước (chốt 1 lần)
- `domain`: encode bằng FOLDER (`method/<domain>/`), KHÔNG tag frontmatter. Business domain đang mở: marketing. Trục đặc biệt `method/meta/` = vận hành vault (ko phải business).
- `type`: clip (article/thread/sale page) | swipe (ad/hook đối thủ) | learning (kết quả test của tôi) | idea (suy nghĩ của tôi)
- `/ask`    : hỏi brain — ladder 2 lớp: recall.mjs (deterministic, 0 token) → qmd query (semantic). Trả lời cite [[wikilink]] + "Brain chưa biết" + stale warning.
- `remember`: lưu fact 1 phát, 0 model — `.brain/scripts/remember.sh "fact"` (ghi sources/note-* + append catalogue).
- `/ingest` : inbox -> sources + cập nhật wiki + index + rebuild catalogue + qmd update/embed
- `/brief`  : đọc wiki -> 3 mục sáng, lưu briefs/
- `/synthesis` : tổng hợp tuần, lưu briefs/
- `/lint`   : dọn wiki — mâu thuẫn / claim cũ / orphan / broken-link (ACTIVE). Broken-link/orphan đọc metadataCache qua `obsidian-cli` skill (chính xác hơn grep), lệnh sẵn trong lint.md.
- Dashboard `.base` (mở trong Obsidian): `sources.base` (source theo type, swipe, mồ côi) · `wiki.base` (trang stale >45d 🔴, mồ côi, số nguồn/trang).
- URL thô trong inbox → `/ingest` dùng `defuddle` skill kéo bản markdown sạch làm body source.

## Tôi muốn gì ở bạn
- Surface hook / angle lặp trong swipe mà tôi chưa thấy.
- Flag khi 1 learning mâu thuẫn niềm tin cũ của tôi.
- Hỏi "test gì tiếp" -> trả lời TỪ wiki, cụ thể, không generic.
  Mỗi claim PHẢI kèm [[wikilink]] tới trang nguồn; không link được = ghi rõ "(giả định)".
- Cấu trúc = wikilink + wiki, đừng over-segment (kepano minimalism). Để structure mọc từ link.
- Dùng kepano obsidian-markdown skill cho cú pháp (wikilink, properties, callout).

## Đang đọc & nghĩ (update thứ 2 hằng tuần)
- Obsession: native ads + "ugly"/static creative cho Maxpro — xem [[maxpro-ugly-ads-plan]].
- Câu hỏi mở: angle Maxpro nào convert nhất? Static "ugly" ad có hợp quiz funnel không?

## Tôi KHÔNG muốn gì (negative constraints)
- [ĐIỀN: góc đã chán / claim mình không tin / format cần tránh]
