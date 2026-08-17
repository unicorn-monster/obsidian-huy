---
sources: [ecomamin-untapped-opportunity-cowork-prompts, ecomamin-ai-audit-battle-plan-workflow, ecomamin-claude-mcp-competitor-conquest]
updated: 2026-08-17
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

## Biến thể 2: audit → KIẾN TRÚC account, chạy TRƯỚC khi tiêu đồng đầu tiên ([[ecomamin-ai-audit-battle-plan-workflow]]) ⭐
Quy trình 5 bước ở trên tìm **cơ hội sản phẩm/thị trường**; bản này cùng tư duy nhưng áp cho **kiến trúc kênh**: nạp 4 input về business hiện có → xuất ra battle plan Google Ads (funnel nào, ICP nào trước, campaign nào theo mức budget, dựng theo thứ tự nào). Tác giả nêu gap đúng chỗ đau: audit agency thường dừng ở **chẩn đoán** ("feed title cần sửa", "tách branded khỏi non-branded") — đúng nhưng hiển nhiên; nó **không nói phải XÂY gì** cho đúng sản phẩm/margin/thị trường của bạn.

**4 input:** (1) **product + offer** — mechanism, USP, giá, **margin/đơn**, AOV, consumable hay mua-1-lần (quyết định funnel type: hàng $30 consumable margin 70% khác hẳn gadget $300 margin 40%); (2) **AOV + margin tier** — quyết định thứ tự ưu tiên campaign + bid strategy: margin cao → TOF mạnh tay; margin thấp → chỉ high-intent, mỗi click phải đáng; (3) **niche + competitive landscape** — ai đang chạy Shopping trong category, title họ ra sao, landing page họ làm gì, khoảng trống ở đâu; (4) **channel mix hiện tại** — và đây là input quyết định "làm gì TRƯỚC".

**Luật "làm gì trước" theo channel mix (net-new, dùng được ngay không cần AI):**
| Đang ở đâu | Ưu tiên #1 |
|---|---|
| 100% Meta | **branded search protection** (bảo vệ demand Meta vừa sinh ra) |
| Đã chạy Google nhưng chững | **funnel + YouTube demand gen** (mở cold, hết trần capture) |
| Chưa từng chạy Bing | **mirror nguyên structure Google** sang → doanh thu incremental gần như tức thì |
→ Khớp 1:1 §demand-CAPTURE + §5-traffic-leaks ở [[google-ads]] — đây là bản rút gọn thành 1 bảng quyết định.

**Prompt 5 block (dùng lại được cho MỌI account):** ① context injection (product/margin/landscape/channel-mix) → ② **funnel type** → ③ **ICP cluster** 3-5 cụm, xếp hạng theo search volume × mức cạnh tranh × buyer intent × độ khớp USP → ④ **campaign architecture theo bậc budget** → ⑤ timeline 90 ngày: campaign nào launch trước, khi nào chuyển manual → smart bidding, KPI phải chạm trước khi scale tầng kế.

**2 quy tắc cứng rút ra từ block ② và ④:**
- **Funnel type theo GIÁ:** advertorial cho sản phẩm **dưới ~£100** · **quiz** cho trên £100 · **product-matcher quiz** khi có **3+ SKU**. (Khớp bar "quiz > advertorial khi AOV >£100" đã có ở [[google-ads]] + [[quiz-funnels]] — giờ có thêm nhánh 3+ SKU.)
- **Bậc budget → campaign được phép có:** `<£5k/tháng` = branded search + non-branded Shopping + **1** search campaign · `£5-15k` = thêm PMax + non-branded search tách theo **ICP angle** + DSA · `£15k+` = thêm YouTube Shorts demand gen + Bing mirror + remarketing. → xác nhận độc lập cho §Day-0 starter system (2 campaign, đừng đẻ 40) ở [[google-ads]]; **MaxPro nằm bậc 1** — mọi thứ ở bậc 2-3 là bẫy phân tán.

> [!warning] Đọc trừ hao phần claim
> Đây là bài **lead-gen cho dịch vụ audit DFY** ("DM me AUDIT"), câu mở *"20 phút thay cho audit $5,000/2 tuần"* là copy bán hàng. Phần dùng được là **khung 4-input + 5-block + 2 bảng quyết định ở trên**; phần "AI tự tìm ra gap đối thủ" vẫn dính đúng cảnh báo tự-kiểm-chứng ở §trên (output AI ≠ số liệu đã verify). 2/3 ảnh trong bài chỉ là screenshot minh hoạ "agency khác bị đối thủ đứng trên chính tên họ" — không mang cơ chế.

> [!tip] Áp cho "quá nhiều idea, cần nơi sắp xếp"
> Đây là quy trình NGƯỢC lại brainstorm tự do — bắt đầu từ research có cấu trúc (5 bước, mỗi bước có prompt cụ thể) thay vì từ ý tưởng cá nhân. Có thể dùng để mở rộng ngoài MaxPro (nail grinder) khi cần tìm sản phẩm #2 cho pet store, hoặc để kiểm chứng 1 ý tưởng đã có sẵn bằng bước 2+3+4 (pain-point → segment → competitive-gap) thay vì đoán.

## Competitor weakness teardown: Claude + Google Ads MCP → 1-star review mining → attack angle ([[ecomamin-claude-mcp-competitor-conquest]]) ⭐
eCom_Amin (2026-08-17): dùng Claude với Google Ads MCP kết nối thẳng vào live account data để **reverse-engineer toàn bộ competitor weakness profile**, rồi biến weaknesses đó thành ad copy + comparison page + conquesting campaign.

**Prompt mẫu (1 lần, toàn bộ research):**
> *"Pull my auction insights data for the last 30 days. Identify the top 5 competitors by impression share in my non-branded campaigns. Then for each of the top 3, research: their homepage positioning and primary offer, their active Google ads from the transparency center, and their review sentiment on Amazon and Trustpilot. Identify the gap between their product promise and actual delivery. Compile into a conquest weakness file with specific attack angles."*

**Output:** conquest weakness file — danh sách competitor + homepage claim của họ + ad copy của họ + **gap giữa promise và actual delivery** + attack angle cụ thể.

**Cơ chế surgical (phần quan trọng nhất):** mọi competitor đều có 1-star reviews tiết lộ unmet buyer expectations. Prompt tìm pattern trong reviews đó:
- Case supplement brand: competitor 4.2★/Amazon nhưng **73% 1-star reviews đề cập capsule quá lớn** — trang sản phẩm của họ không giải quyết vấn đề kích thước, ads không nhắc tới.
- Attack angle rút ra: *"smallest capsule in the category"*
- Ad copy: *"if you have ever gagged on a horse pill supplement, you understand why capsule size matters more than dosage"*
- Comparison page: capsule size trở thành 1 trong 3 evaluation criteria

**Nguyên lý Genghis Khan:** ông không chinh phục bằng quân đội lớn nhất — ông nghiên cứu điểm yếu kẻ thù **trước** khi bắt đầu chiến. Conquest weakness file = reconnaissance. Ad copy = battle plan. Angle không đến từ brainstorm — đến từ chính dữ liệu review của competitor.

**Speed gain (so với cách cũ):**
| Cách cũ | Cách mới |
|---|---|
| 3-4 tiếng/competitor, đọc hàng trăm review thủ công | 1 prompt, 30 phút |
| Không cross-reference được pattern xuyên suốt | Model đọc hàng trăm review đồng thời, bắt pattern người không thấy |

**Thực thi 3 bước:** ① kết nối Google Ads MCP → Claude ② chạy prompt trên → nhận conquest weakness file ③ biến top weakness thành: ad hook + advertorial angle + comparison page criterion + conquesting campaign target (bid trên branded term đối thủ).

> [!tip] Áp MaxPro
> Nail grinder: pull auction insights → tìm competitor có impression share cao nhất → mine 1-star reviews của họ trên Amazon/Chewy (chú ý kích thước bit / tiếng ồn / rung / con chó không chịu / gây đau). Đó là góc attack. Đừng brainstorm angle — để competitor's customers tự nói.
