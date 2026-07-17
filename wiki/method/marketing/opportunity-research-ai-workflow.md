---
sources: [ecomamin-untapped-opportunity-cowork-prompts]
updated: 2026-07-17
---

# Tìm cơ hội untapped bằng AI research (Claude Cowork/browsing)

Nguồn: [[ecomamin-untapped-opportunity-cowork-prompts]] (@eCom_Amin). Quy trình 5 bước dùng AI có web-browsing (Claude Cowork, tương đương Claude với web search/vision) để tìm cơ hội sản phẩm/thị trường TRƯỚC khi nó bão hoà, thay vì copy 1 brand đang thắng rõ ràng (= vào market đã 200 đối thủ cạnh tranh giá).

## Vì sao KHÔNG copy brand đang thắng
Copy brand thắng rõ ràng = vào thị trường đã race-to-bottom về giá. Hệ này tìm **giao điểm 5 yếu tố**: xu hướng vĩ mô đang lên (tailwind) + 1 micro-segment trong đó chưa ai phục vụ (ít cạnh tranh) + vấn đề thật chưa giải (demand có thật) + pattern góc-thắng đã proven từ category liền kề (message đã chứng minh hiệu quả) + thứ THỰC SỰ dựng/sourcing được.

## 5 bước + cấu trúc prompt
1. **Tìm ngành đang lên** — prompt research bài về "ngành tăng trưởng nhanh nhất", xu hướng đầu tư VC, chatter Reddit/social, thay đổi luật tạo demand mới, dịch chuyển demographic (dân số già, thói quen Gen Z, WFH). Lọc: tăng trưởng ≥20%/năm nhưng market-size còn dưới $5B (đủ sớm để vào, đủ lớn để đáng làm).
2. **Tìm pain-point trong ngành đó** — mine Reddit (top post 3 tháng gần nhất trong sub liên quan), review 1-2★ trên Amazon của brand đầu ngành, thread forum "problems with X", comment YouTube review. Output: pain-point xếp hạng THEO ĐÚNG NGÔN NGỮ khách hàng dùng, vì sao giải pháp hiện tại fail, mức sẵn sàng trả.
3. **Tìm segment chưa ai phục vụ** — scrape top-10 brand site trong ngành xem họ target AI (demo/ngôn ngữ/testimonial họ show), rồi tìm ai VẮNG MẶT (demographic không được nhắc, price-tier bỏ trống, vùng địa lý bị bỏ qua) + góc giao thoa (`[ngành đang lên] + [demographic cụ thể]`, vd "adaptogen cho ĐÀN ÔNG" khi cả ngành target phụ nữ) + lifestyle-segment mà giải pháp hiện tại không hợp (phụ huynh bận rộn, ca-đêm, người thuê nhà).
4. **Rút ra ý tưởng sản phẩm cụ thể** — research sản phẩm ở segment liền kề có thể adapt, mine ngôn ngữ "ước gì có ai làm ra X" trên forum, check Kickstarter/Indiegogo đã gọi vốn thành công trong category liên quan (feature nào khiến người backer), soi thị trường Nhật/Hàn/Âu đã bình thường hoá nhưng chưa qua Mỹ. Output mỗi ý tưởng: mô tả + khác biệt vs giải pháp hiện tại + COGS ước tính + giá bán thực tế + **BẰNG CHỨNG demand thật** (số lần nhắc trên forum, search volume, số backer) — không chỉ cảm tính.
5. **Reverse-engineer góc-thắng từ brand liền kề đã thành công** — scrape 3-5 brand thành công: headline chính, unique-mechanism claim, loại social-proof, cấu trúc guarantee, cách xử lý objection, ngôn ngữ khách dùng tự nhiên trong review tích cực. Output: công thức góc + pattern chung giữa các brand thắng + gap (góc CHƯA AI dùng trong ngành đó).

## Bước tiếp theo sau khi có ý tưởng sản phẩm
- **Competitive gap analysis** — map giá/feature/positioning đối thủ trực tiếp + liền kề để tìm gap THẬT (không tưởng tượng): 1 price-tier chưa ai phục vụ, 1 feature chưa ai có, 1 claim positioning chưa ai nói.
- **Chọn loại funnel** — khớp theo mức education/trust/consideration cần cho đúng customer+price (direct-PDP cho high-intent-ít-cân-nhắc, advertorial cho cần-giáo-dục, quiz cho multi-SKU-choice-paralysis, comparison page cho đã-biết-đang-chọn-giữa-brand, VSL cho high-ticket/story-driven). → [[funnel-and-landing]], [[presell-pages]].
- **Sinh 10 ad-angle** — kết hợp hook-category (problem/benefit/story/contrarian/question) + credibility-element (social-proof-count/authority/science-citation/founder-story) + urgency-mechanic (discount/scarcity/bonus/guarantee), validate ngược lại với Meta Ad Library/Google Ads preview đang chạy thật trong category đó. → [[angles]], [[hooks]].

## 5 ví dụ output minh hoạ (chỉ để hiểu HÌNH DẠNG output, không phải số liệu đã kiểm chứng)
Chăm sóc răng miệng pet cao cấp (nước súc miệng enzyme + bàn chải ngón tay, định vị chống lại lịch cạo vôi $800+ có gây mê thú y, $47/tháng). Hệ phục hồi dân văn phòng (dụng cụ massage + chương trình giãn cơ + chỉnh tư thế cho remote worker, $127 + $29/tháng app). Hệ giấc ngủ tiền mãn kinh (topper mattress làm mát + adaptogen + tracker, $297 + $67/tháng). Bộ tối ưu dinh dưỡng trẻ kén ăn (bột dinh dưỡng không mùi vị + sách công thức, $89/tháng). Bộ an toàn du lịch 1 mình cho nữ (chặn cửa + báo động + tracker + app, $147 1 lần).

> [!warning] Cảnh báo tự kiểm chứng
> Mọi số market-size/growth-rate/search-volume trong nguồn gốc là output minh hoạ CỦA CHÍNH AI research, KHÔNG phải số liệu ngành độc lập đã kiểm chứng — coi là ví dụ về HÌNH DẠNG kết quả quy trình cho ra, phải tự verify lại (Google Trends thật, keyword tool thật) trước khi đặt cược quyết định sản phẩm thật.

> [!tip] Áp cho "quá nhiều idea, cần nơi sắp xếp"
> Đây là quy trình NGƯỢC lại brainstorm tự do — bắt đầu từ research có cấu trúc (5 bước, mỗi bước có prompt cụ thể) thay vì từ ý tưởng cá nhân. Có thể dùng để mở rộng ngoài MaxPro (nail grinder) khi cần tìm sản phẩm #2 cho pet store, hoặc để kiểm chứng 1 ý tưởng đã có sẵn bằng bước 2+3+4 (pain-point → segment → competitive-gap) thay vì đoán.
