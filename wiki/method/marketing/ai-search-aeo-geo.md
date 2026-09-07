---
sources: [microsoft-aeo-geo-guide, alexgroberman-microsoft-chatgpt-traffic, microsoft-merchant-center-feed-attributes]
updated: 2026-09-07
---

# AI search (AEO/GEO) — được CHỌN thay vì được TÌM THẤY

Trang mới, chưa có gì trong vault chạm tới trục này. Nguồn chính là tài liệu **chính thức của Microsoft Advertising** [[microsoft-aeo-geo-guide]] (16 trang, Jennifer Myers — PM Microsoft Shopping & Copilot), đọc kèm bản diễn giải của [[alexgroberman-microsoft-chatgpt-traffic]] và spec feed [[microsoft-merchant-center-feed-attributes]].

Luận điểm gốc: SEO tối ưu cho **ranking → click → visit**. Shopping qua AI thay bằng **answer → recommendation → agent tự quyết**. Visibility giờ kiếm được bằng: AI **hiểu** sản phẩm rõ tới đâu, **tin** brand tới đâu, và **hành động được** trên data của bạn tới đâu.

> [!warning] Đây là tài liệu của một AD PLATFORM, không phải nghiên cứu độc lập
> Microsoft bán Bing Ads + Microsoft Merchant Center, và kết luận của doc là "hãy đổ data vào feed của chúng tôi". Cơ chế mô tả (reasoning phase, 3 lớp data) đáng tin vì họ vận hành chính Copilot; còn tầm quan trọng tương đối của feed thì **có động cơ thổi phồng**. Không có một con số hiệu quả nào trong cả 16 trang — zero benchmark, zero case study. Đọc như bản mô tả cơ chế, không phải bằng chứng ROI.

## AEO vs GEO — hai việc khác nhau, cần cả hai

| | Là gì | Đòn bẩy |
|---|---|---|
| **AEO** (Answer/**Agentic** Engine Optimization) | Tối ưu để assistant/agent **tìm được, hiểu, tóm tắt, đề xuất, và HÀNH ĐỘNG** trên data của bạn | Machine-readability + độ rõ ràng |
| **GEO** (Generative Engine Optimization) | Tối ưu để generative search **tin** nội dung là authoritative / credible / citable | Uy tín + lý do biện minh |

Cùng một cái áo mưa, ba cách viết (p.6 — ví dụ gốc của Microsoft):

- **SEO** = khớp keyword — *"Waterproof rain jacket"*
- **AEO** = mô tả rõ — *"Lightweight, packable waterproof rain jacket with stuff pocket, ventilated seams and reflective piping"*
- **GEO** = biện minh + tin cậy — *"Best-rated by Outdoor magazine, no-hassle returns 180 days, three year warranty, 4.8 star rating"*

AEO tạo **hiểu**, GEO tạo **tin**. Thiếu một trong hai thì không được recommend. Microsoft nói thẳng SEO vẫn cần — nhưng giờ là **nền móng, không phải đích đến**.

## 3 lớp dữ liệu — phải có mặt ở cả ba

1. **Crawled data** — thứ AI học lúc train + tìm được qua real-time web search. Định hình *nhận thức nền* về brand: bạn thuộc category nào, uy tín ra sao, vị thế thị trường. → SEO truyền thống sống ở đây, và Microsoft nhấn: AI chạy web search **liên tục suốt hành trình**, không phải chỉ lúc sắp mua.
2. **Product feeds + API** — structured data bạn CHỦ ĐỘNG đẩy đi. Đây là chỗ **có quyền kiểm soát**: giá, tồn kho, variant, spec. Feed là thứ quyết định bạn có lọt top-3 comparison hay không. → [[google-shopping]], [[microsoft-merchant-center-feed-attributes]].
3. **Live website data** — thứ agent thấy khi nó **thật sự vào site**: review, media, giá động, và **khả năng checkout**. → [[funnel-and-landing]], [[presell-pages]].

> [!important] Luật quan trọng nhất của cả doc
> **"Without your live site working properly, the sale fails even if your feed and crawled data were perfect."** Agent thực hiện 5 bước trên site sống: add to cart → apply promo code → tính shipping chính xác tới địa chỉ → thanh toán bằng payment đã lưu → trả confirmation + tracking. Promo code **chỉ chạy được trên live site**, không có trong feed. Site hỏng ở bất kỳ khâu nào = ảnh hưởng dừng ở mức "được recommend", không thành đơn.

## Reasoning phase — AI thật sự quyết định thế nào (p.7–8)

Ba plane input chạy vào engine trước khi nó trả lời:

| Knowledge graph | Page level data | Use info |
|---|---|---|
| Pre-trained knowledge | Dynamic content (pricing) | Brand affinity |
| Real-time web search | On page structure data | Location |
| Product database | Rendered page content | Sizing |

Rồi **reasoning phase** cân 6 tín hiệu: natural language understanding · freshness · **break down and fan out queries** · text relevance · **commercial signals** · contextual relevance. Output có 4 thành phần: answer bằng natural language · **giải thích lý do** · **trusted sources + citation** · product recommendation.

Ba thứ rút từ chính cái diagram mà phần text của doc không nói ra:

- **Query fan-out là thật.** Một prompt "áo mưa cho hike 3 ngày" nở thành nhiều truy vấn con song song — diagram vẽ rõ 3 nhánh: *"Best rain jackets"*, *"Best hiking jackets"*, *"Rain jackets that I can pack in my bag"*. Nghĩa là tối ưu cho **một** keyword chính là sai bài: phải phủ cả chùm cách-hỏi quanh use-case. Nối thẳng vào [[market-awareness]] — mỗi nhánh fan-out là một mức awareness khác nhau.
- **Review xấu được đưa vào reasoning, không bị lọc.** Cột review trong diagram cố tình có một ★★ *"No longer waterproof — Only lasted me one season"* nằm cạnh hai review tốt. AI đọc **cả phân bố**, không chỉ điểm trung bình → review tiêu cực về độ bền là rủi ro trực tiếp lên khả năng được recommend, khác hẳn cách rating trung bình che nó trên marketplace.
- **Cái AI đọc là một "feed data card"**, không phải trang của bạn: Product Name / Price / Variants / Availability. Diagram p.9 cho thấy câu trả lời, nút "Track price", và block *"What people say"* tổng hợp review — tất cả **render ngoài site của bạn**, dựng từ data của bạn. Bạn mất quyền kiểm soát trình bày; chỉ còn quyền kiểm soát *data đầu vào*.

Ví dụ quyết định của Microsoft (áo mưa dưới $200): crawled data cho general knowledge ("Patagonia và North Face làm áo mưa tốt"), category understanding ("áo hiking phải nhẹ"), brand positioning ("Brand X nổi về đồ hiking); feed cho giá ($179 vs đối thủ $199), tồn kho (bạn còn hàng, đối thủ backordered), spec (waterproof >1500mm, sealed seams). **Lọt top-3 vì feed cho thấy giá cạnh tranh + còn hàng** — không phải vì trang viết hay.

## Pillar 1 — schema: làm catalog máy đọc được (p.12)

Schema type bắt buộc: `Product` · `Offer` · `AggregateRating` · `Review` · `Brand` · `ItemList` · `FAQ`.

- Field động phải có: price, availability, color, size, SKU, GTIN, **`dateModified`**.
- `ItemList` cho collection/category page → AI hiểu được **nhóm** sản phẩm, không chỉ từng SKU rời.
- Đa vùng: `inLanguage` + `priceCurrency`.
- Ship **JSON-LD** đúng type.
- Title ghép tên + điểm khác biệt: *"TrailMaster 30L Hiking Jacket — Waterproof 3-Season Gear"*.
- Sync giá/tồn **real-time giữa feed và schema on-site**; expose `dateModified` + availability; ghi start/end date rõ cho promotion.
- Giữ giá trị **nhất quán ở cả ba chỗ**: feed ↔ schema on-site ↔ thứ khách nhìn thấy.

> [!danger] "Never serve different HTML to bots than to users."
> Rendered DOM phải chứa đúng những fact khách thấy. Cùng họ với luật feed: *"description trong feed phải khớp description trên landing page"* ([[microsoft-merchant-center-feed-attributes]]). Đây là ranh giới compliance giống hệt price-baiting đã ghi ở [[google-shopping]] — cùng một loại phát hiện, cùng một loại án.

## Pillar 2 — content viết để TRÍCH XUẤT, không phải để đọc (p.13)

Đây là phần đổi cách làm trang nhiều nhất:

- **Front-load** description bằng benefit: *ai dùng · giải quyết vấn đề gì · hơn ở chỗ nào*. (Spec feed nói y hệt: "most important data at the front".)
- **Use-case context khớp query**: *"best for day hikes above 40 degrees"* — cụ thể tới mức máy match được vào câu hỏi thật.
- **Heading viết y như câu người ta hỏi**, không phải heading marketing.
- **Q&A block** để AI reason và **cite** được: *"Which size should I pick?"*, *"Is it energy efficient?"*
- **Spec dạng key/value pair** + feature list.
- **Comparison table** "Model A vs Model B" nêu khác biệt theo ngữ cảnh.
- **"Goes well with"** — quan hệ sản phẩm bổ trợ/bundle.
- **Multi-modal**: alt text chi tiết + `ImageObject` schema (*"green jacket with reinforced zipper and extended hood"*), **transcript video**, và mobile/voice phải expose **cùng** structured data chứ không chỉ desktop HTML.

Ghi chú riêng: cấu trúc này gần như trùng khít với **review/comparison funnel** đã dựng ở [[maxpro-top5-review-funnel]] — comparison table, Q&A, spec key/value đều đã có sẵn. Cái thiếu là **schema markup** trên chúng.

## Pillar 3 — trust signal (GEO) (p.14)

- **Verified social proof**: `Review` + `AggregateRating` schema · nêu **số lượng** review và **tỉ lệ verified purchase** · và quan trọng nhất: **surface review sentiment ở dạng câu** để AI trích thẳng — *"highly rated for comfort and fit"*. Đây là format AI copy nguyên vào câu trả lời.
- **Authoritative brand identity**: brand identifier + link social/retailer chính thức trong structured data · link tới expert review và bài báo có mặt sản phẩm · certification / sustainability badge / partnership để dưới dạng **entity fact** ("Certified B Corp", "Climate Neutral Certified").
- **Content integrity**: tránh claim phóng đại hoặc không kiểm chứng được · giữ **brand voice nhất quán mọi touchpoint** · FAQ có cấu trúc để ground câu trả lời hội thoại.

## UCP readiness — feed field cho agentic checkout

Từ [[microsoft-merchant-center-feed-attributes]], nhóm attribute mới nhất và ít người biết nhất — chính là lớp "agent mua được hàng":

| Field | Việc |
|---|---|
| `return_policy_labels` (tên field phải ĐÚNG chuỗi này) | Return policy **cấp store** — Microsoft ghi rõ **bắt buộc cho UCP**; hiện cho khách lúc checkout |
| `consumer_message_type` | Enum loại cảnh báo: `legal_disclaimer`, `safety_warning`, `prop_65`… |
| `consumer_message_content` | Text cảnh báo hiện trước khi mua, ≤1000 ký tự, chỉ `<b> <br> <i> <a href>` |

Cộng vài rule feed ăn thẳng vào AEO: `link` **không được redirect** (redirect thì dùng `ads_redirect`) · domain product URL phải khớp domain store · ảnh **không được có chữ/watermark/promotional text** · robots.txt phải cho crawler Microsoft vào, không thì ad không serve · đổi title/description/ảnh/URL → item về **pending review tới 3 ngày làm việc** (đừng sửa feed sát ngày launch).

## ⚠️ Mâu thuẫn với nhánh ugly-ads — phân tuyến, không phải phải chọn một

Microsoft: *"Avoid exaggerated or unverifiable claims — **AI systems penalize low-trust language**"* + *"maintain consistent brand voice across all touchpoints"*.

Câu này đụng thẳng vào [[ugly-ads-method]] và [[hooks]]: copy raw, hype, claim mạnh, giọng unhinged là thứ đang thắng ở tầng ad. Nhưng đây **không phải mâu thuẫn thật**, mà là hai độc giả khác nhau:

| Tầng | Độc giả | Register |
|---|---|---|
| Ad + advertorial + presell ([[ugly-ads-method]], [[presell-pages]]) | **Người**, đang scroll | Raw, hype, villain, claim mạnh — giữ nguyên |
| PDP + feed + schema + FAQ | **Máy**, đang trích để recommend | Verifiable, cụ thể, không phóng đại |

Chỗ cần cẩn thận là **giao điểm**: trang review/top-5 vừa là landing page cho traffic ad, vừa là thứ AI crawl. Ở đó claim phải **định lượng được** thay vì to tiếng ("giảm còn 6 tuần dùng 1 lần" > "tốt nhất thế giới") — cùng nguyên tắc pain-quantification vốn đã dùng trong copy, chỉ là giờ có thêm lý do thứ hai. Rule "consistent brand voice mọi touchpoint" thì **KHÔNG áp dụng nguyên xi** cho ta: đó là lời khuyên cho brand retail lớn, còn ta chạy nhiều angle/nhiều persona có chủ đích ([[personas]], [[angles]]).

## Claim của Alex Groberman — KHÔNG phải của Microsoft

[[alexgroberman-microsoft-chatgpt-traffic]] chồng diễn giải riêng lên doc. Tách bạch:

- ✅ **Có trong doc:** ba pillar, ba lớp data, reasoning phase, "AI ranking readiness", "never serve different HTML to bots".
- ⚠️ **Diễn giải của Alex, không có trong doc:** "feeds là moat cạnh tranh" · "trust là thuật toán" · "AI assistant là gatekeeper mới của demand". Hợp lý nhưng là suy luận.
- 🚩 **Claim thương mại, bỏ:** *"một hai trang không move needle, hệ thống sản xuất hàng chục bài structured mới thắng"* — lặp lại 3 lần kèm link bán gói content của chính anh ta. Doc Microsoft **không nói gì** về số lượng bài. Đây là pitch, không phải finding.
- Bản thân Alex cũng gắn cờ *"AI penalizes low-trust language — interesting, but obviously open to interpretation"*: Microsoft không đưa cơ chế lẫn bằng chứng cho câu này.

## Áp dụng cho Maxpro — ưu tiên theo công sức/lợi ích

*(Phần này là suy luận của tôi từ doc, KHÔNG có trong nguồn — đánh dấu giả định.)*

1. **Schema trên trang review/top-5 trước tiên** ([[maxpro-top5-review-funnel]]) — trang đã có comparison table + Q&A + spec, chỉ thiếu markup. Thêm `Product`/`Review`/`AggregateRating`/`FAQ`/`ItemList` là công ít nhất, gần đích nhất. (giả định)
2. **Review sentiment viết thành câu trích được** trên PDP — biến VOC ở [[maxpro-voc-insights]] thành dòng dạng *"highly rated for quiet operation on anxious dogs"* thay vì để review thô. (giả định)
3. **Feed:** GTIN + `item_group_id` đã ghi ở [[google-shopping]]; phần cần thêm là `return_policy_labels` và giữ description feed **khớp** description PDP. (giả định)
4. **Câu hỏi mở chưa trả lời được:** không có số liệu nào cho biết bao nhiêu % traffic pet-niche thực sự đến từ AI assistant. Đừng dời ngân sách khỏi [[media-buying]] vì trang này — coi đây là hạ tầng làm một lần, không phải kênh.
