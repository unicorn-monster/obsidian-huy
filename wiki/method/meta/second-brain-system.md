---
sources: [cyrilxbt-kimi-obsidian-second-brain, engkhairallah-obsidian-ai-workflows, cyrilxbt-50-obsidian-workflows]
updated: 2026-06-26
---

# Second-brain system (meta)

> Cách *cái vault này* tự bồi đắp — không phải tactic marketing. Rút từ [[cyrilxbt-kimi-obsidian-second-brain]] (Kimi+Obsidian full course) và [[engkhairallah-obsidian-ai-workflows]] (30 Obsidian+Claude workflows).

## Thesis
Second brain thường **chết khi bạn ngừng gõ** — note nằm im trong folder, hệ thống chỉ thông minh bằng thứ cuối cùng bạn nhét vào. Phiên bản "chạy khi bạn ngủ" thì khác: đọc input hôm nay → file đúng chỗ → tìm liên kết bạn không nghĩ tới → ra brief trước khi bạn dậy → **tốt lên mỗi tuần vì memory nó đọc cứ lớn dần**. Đó là hiệu ứng compounding — không bao giờ thấy trong 1 screenshot hay demo 5 phút.

## Skill stack chuẩn (3 lõi + bảo trì)
Cả hai nguồn hội tụ về cùng 3-4 skill chạy theo lịch:

| Skill | Làm gì | Vault này đã có? |
|---|---|---|
| **Morning brief** (6AM) | đọc identity-file + project + signal 24h → 1 việc quan trọng nhất | ✅ `/brief` |
| **Capture processor** (8PM) | phân loại capture → idea / task / decision / reference, file vào đúng chỗ, KHÔNG để treo | ✅ `/ingest` (idea/clip/swipe/learning) |
| **Connection finder** (11PM) | quét note 48h gần → tìm liên kết *non-obvious* với note cũ (mâu thuẫn / tương đồng cấu trúc, KHÔNG phải trùng keyword) | ❌ **chưa có — gap rõ nhất** |
| **Vault health check / weekly review** | orphan note, info cũ, project đứng yém, tag lệch | ⏳ `/lint` (Phase 2) + ✅ `/synthesis` |

> [!warning] Gap đáng làm: connection-finder
> Đây là skill tạo "khoảnh khắc" của second brain — nối note viết cách nhau nhiều ngày mà lúc viết không ai nối. Tiêu chí: đọc CẢ HAI note cùng lúc lộ ra điều đọc riêng từng cái không thấy. **10 liên kết bất ngờ ăn đứt 50 liên kết hiển nhiên.** Trùng chủ đề ≠ liên kết. Map thẳng vào thứ Huy muốn ở [[index]]: "surface hook/angle lặp tôi chưa thấy" + "flag khi 1 learning mâu thuẫn niềm tin cũ".

## Identity-file = đòn bẩy lớn nhất
KIMI.md (≈ `CLAUDE.md` của vault này) là file quan trọng nhất, và là phần ai cũng vội. Mọi skill đọc nó TRƯỚC khi làm gì. **Chất lượng output cả năm = hàm số của độ cụ thể của file này hôm nay.** Vague input → vague automation bất kể model mạnh cỡ nào.

Cấu trúc cyrilXBT đề xuất mà `CLAUDE.md` hiện thiếu:
- **Current beliefs / working theories** — mỗi belief kèm `Evidence supporting · Evidence against · Confidence`. Đây là cơ chế hoá điều Huy muốn ("flag khi learning mâu thuẫn niềm tin cũ") — có sổ-niềm-tin thì máy mới đối chiếu được. Hiện CLAUDE.md có *goals* nhưng chưa có *beliefs ledger*.
- **Permission protocol** — phân tách rõ "được tự làm" (đọc mọi file, ghi vào sources/outputs, search ngoài) vs "phải xin phép" (ghi ngoài vùng output, nhắn người khác, khuyến nghị tài chính/chiến lược). Vault này đã ngầm theo (sources/ bất biến) nhưng chưa viết thành protocol.
- **Update protocol** — identity-file revise mỗi thứ Hai; focus areas mỗi tháng. CLAUDE.md đã ghi "update thứ 2 hằng tuần" ✓.

## Nguyên tắc vận hành
- **Plain-text local là nền** — sống lâu hơn roadmap của bất kỳ công ty nào; cho phép automation truy cập filesystem trực tiếp (đúng mô hình vault + scheduled `/ingest` này).
- **Chạy đủ 1 tuần rồi mới tinh chỉnh.** Cám dỗ là sửa identity-file ngay sau lần chạy đầu — nhưng cần 1 tuần output qua nhiều ngày/nhiều loại nội dung mới biết cái gì *thiếu hệ thống* vs chỉ là ngày bất thường.
- **Atomic note + ≥2 wikilink mỗi note** (Zettelkasten hợp AI hơn cả hợp người — agent lần theo chain link để suy luận). Khớp kepano minimalism vault này đã theo.
- **Feedback loop**: output AI tạo ra → lưu lại thành note → memory chứa cả tư duy gốc lẫn synthesis → compound. (Chính là `briefs/` + memory của vault này.)
- **Lớp người vận hành**: vault giải phóng chú ý nhưng phải có kỷ luật *hướng* nó vào 1 ưu tiên — xem [[focus-and-deep-work]] (make-then-manage map vào morning brief, tách thiết bị tiêu thụ/sản xuất).

## Dataview query cho `/lint` (cyrilXBT 50-workflows)
Nguồn: [[cyrilxbt-50-obsidian-workflows]]. Category "AI Integration" (setup 21-25) **trùng khớp 1:1** skill stack ở trên — Filesystem-MCP-pointed-at-vault · morning brief · capture processor · **connection finder (#24)** · **weekly synthesis (#25)** → củng cố cả gap connection-finder lẫn `/synthesis` đã có. Phần đáng lấy thêm: vài Dataview query thành **vũ khí cụ thể cho `/lint` (Phase 2)** thay vì quét tay:
- **Orphan finder** — note 0 incoming link (idea capture rồi bị quên). Chạy hằng tháng. = mục "trang mồ côi" của `/lint`.
- **Stale-projects alert** — `projects/` ko modified 14+ ngày → surface thứ đã âm thầm bỏ trước khi thành "embarrassment 6 tháng". Map "project đứng yên".
- **Content pipeline tracker** — query draft theo stage (idea/outline/draft/published) → thay content calendar; áp được cho `briefs/` + creative pack `projects/`.
- **Decision log** — gom note quyết-định + assumption + review-date thành 1 bảng auditable. Hợp "beliefs ledger" mà [[index]] (CLAUDE.md) còn thiếu.

> [!note] Phần lớn 50-list là generic/đã biết
> 10 category × 5 = 50 setup, đa số là Obsidian-101 (PARA, MOC #31, atomic note #34, literature-vs-permanent #35 — đã có ở "Nguyên tắc vận hành"). Giá trị thật của clip: (1) xác nhận skill-stack AI đang đi đúng hướng, (2) 4 Dataview query trên cho `/lint`. Ko cần ingest sâu hơn.

## Plugin nền (Obsidian, từ engkhairallah)
Smart Connections (RAG chat-with-vault) · Templater · Dataview (vault → DB query) · Tasks · **Obsidian Git** (auto-commit, đã bật ✓) · Periodic Notes · **Obsidian CLI 2026** (cầu nối Claude Code ↔ vault, có `obsidian-cli` skill). Steph Ango (CEO Obsidian) ra bộ Claude Skills chính chủ — đang dùng (`obsidian-markdown`, `json-canvas`, `obsidian-bases`).
