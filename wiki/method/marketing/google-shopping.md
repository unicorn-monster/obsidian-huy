---
sources: [ecomamin-google-ads-pet-store-1m, blvckledge-google-shopping-duplication, ecomamin-shopping-masterclass, grinder-avatar-bank, rudra-shopping-feed-attributes-signal]
updated: 2026-07-03
---

# Google Shopping — feed / listing / bid depth

Lớp **feed/listing** sâu của [[google-ads]] (kênh search-intent). Tách khỏi trang gốc vì đủ đứng riêng: dựng GMC feed, nhân bản listing, và Shopping strategy (title/image/proof/bid). Account-strategy, 7-campaign, funnel-type, seasonal, optimization → vẫn ở [[google-ads]].

> [!tip] Feed = đòn bẩy lớn nhất, làm TRƯỚC campaign
> Amin: **70% lift từ fix feed, 30% từ campaign** — đa số làm ngược. *"Mọi brand có Shopping CAMPAIGN; gần như ko ai có Shopping STRATEGY."* Feed sạch trước khi scale spend.

## GMC feed = 70% kết quả (làm TRƯỚC campaign)
Amin: 70% lift từ fix feed, 30% từ campaign — đa số làm ngược.
- **Title:** `leading keyword + what-it's-for + angle + brand`. 1 title khớp nhiều search term. Vd *"no pull dog harness for large dogs that pull - stops pulling without choking"*.
- **Description:** outcome + risk-reversal + proof (*"fixes your back pain in 14 days or full refund. clinically proven... 60-day guarantee"*), KHÔNG feature.
- **Image:** lifestyle (đang dùng / before-after) > white-bg → +30% click, +15% CVR chỉ từ feed. (User có skill GMC title — dùng nó.)

## Feed duplication (1 sản phẩm → nhiều listing)
Nguồn: [[blvckledge-google-shopping-duplication]] ($10k→$300k+/mo Shopping qua 5 năm). Tạo NHIỀU biến thể feed của CÙNG 1 sản phẩm, mỗi cái nhắm 1 search-intent/persona → Google coi là listing riêng → 2-3 cái cùng hiện 1 carousel → **own 2/5 vị trí thay vì 1/5, ~2x traffic cùng budget**.
- **Front-load** target query vào **5 từ đầu** title (Google nặng đầu title nhất).
- **Bỏ GTIN** ở mọi feed nhân bản (chỉ feed gốc giữ) → né GTIN-misuse + gộp review chéo.
- Ăn nhất với sản phẩm **nhiều use-case / persona / vấn đề / cách khách gọi tên** — MaxPro nguyên con ([[maxpro-avatars]], [[angles]], [[grinder-avatar-bank]]).
- **= engine [[kittysupps-machine]] đổi đường ray:** *"vô hạn cửa ngõ → 1 sản phẩm"*. KittySupps chạy trong creative Meta (240 family); tactic này trong feed Shopping. Bộ symptom-doorway/avatar bạn cày cho Meta = đúng nguyên liệu feed-duplication cần.

## Shopping masterclass — feed / image / proof / bid depth (Amin) ⭐
Nguồn: [[ecomamin-shopping-masterclass]]. *"Mọi brand có Shopping CAMPAIGN; gần như ko ai có Shopping STRATEGY."* Restructure feed+bid → **double Shopping ROAS trong 90 ngày**, ko tăng spend, ko product mới. Bổ sung cho GMC-feed + feed-duplication ở trên:
- **Title — keyword cho ĐƯỢC THẤY, benefit cho ĐƯỢC CLICK.** 60 ký tự đầu index nặng nhất → nhồi non-branded keyword + benefit, đẩy brand ra sau. Sai: *"Brand Name Magnesium Complex 500mg 120 Caps"* (brand chiếm 30-40% đầu). Đúng: *"Magnesium Glycinate Sleep Supplement 500mg 120 Caps | Brand"*. Với product mà *mechanism là điểm khác biệt* (supps/skincare/fitness) → **lead bằng outcome, ko phải ingredient**: *"Hyaluronic Acid Firming Serum for Visible Results in 14 Days"* > *"Hyaluronic Acid Serum 30ml"*. (User có skill GMC title — áp luật này.)
- **Description field** (ít hiện ở standard result nhưng ăn vào relevance scoring + expanded format): nhồi **secondary keyword** ko vừa title + credibility (cert, material, sourcing, mechanism, compatibility). Viết như **ad copy**, ko như catalogue kho.
- **Custom labels = 5 field segment (đa số bỏ trống / dùng 1 cái):** (1) **margin tier** A/B/C → bid mạnh SKU margin cao, ko trợ giá low-margin · (2) **performance tier** bestseller / new / slow-mover → bid logic riêng · (3) **seasonality flag** → dời budget mùa peak ko cần restructure · (4) **promo status** → front-load exposure khi đang sale. *"Algorithm ngừng quyết theo ưu tiên của NÓ, bắt đầu thực thi ưu tiên của BẠN."* (Sâu hơn margin-bidding ở [[google-ads]] §optimization.)
- **Image = CTR lever ít dùng nhất.** Buyer quét grid, quyết <2s. Mọi listing white-bg → giống hệt nhau → CTR trung bình. **Contrast first:** search query top-volume của mình → screenshot SERP → xem palette/style nào áp đảo → ngồi vào **khoảng trống thị giác**. Category mà *outcome là desire* (fitness/skincare/sleep/wellness/home/pet) → **lifestyle shot bán transformation** > product shot. Category spec-driven (electronics/tools/size) → clean product shot tốt hơn. Merchant Center cho phép lifestyle (người/môi trường/context) nhưng **CẤM** text overlay / before-after / graphic che product. PMax: upload cả 2 kiểu làm asset, đọc asset report sau 2-3 tuần.
- **Social proof trong feed (trust layer free):** star + review count hiện ngay trên listing nếu eligible. **Review COUNT > star rating trên 1 ngưỡng:** *4.4 từ 1,200 review > 4.8 từ 23 review* (volume = "proven", 23 có thể bạn-của-brand). Ngưỡng tối thiểu hiển thị: **50 review + ≥3.5★**. Dưới 50 → gom review là **ưu tiên kinh doanh**, ko phải vanity. Lấy: Google Customer Reviews (post-purchase survey) hoặc 3rd-party feed approved. → khớp review-collection [[email-marketing]] (post-purchase flow / SMS / insert).
- **Promotions + pricing (đòn tâm lý):** price luôn hiện ở Shopping → *price context* là tất cả. **Anchoring:** "was £65, now £45" qua Merchant Center promotions feed → £45 thành "deal" thay vì 1 con số so với đối thủ. **Free shipping = decision-forcing**: 2 listing cùng giá, cái "free shipping" thắng click ở tỉ lệ lớn gần như mọi split-test → set shipping £0 cho SKU eligible để text tự hiện.
- **Local/location signal:** "ships from UK" cho buyer UK = ngụ ý giao nhanh + hợp pháp (ngược "Shenzhen shipping time"). Set Merchant Center reflect đúng origin.
- **Bid segmentation 3 tier** (sau khi feed chuẩn, structure phản chiếu custom labels): **Tier 1** bestseller/high-margin hero → campaign riêng, budget cao nhất, target ROAS thấp nhất (= bid cao nhất, có data validate) · **Tier 2** new product testing → budget riêng, maximize-clicks/manual-CPC gom data TRƯỚC smart bidding · **Tier 3** clearance/low-margin → promo giá + bid thấp, ko move thì **exclude khỏi Shopping**. *"Cấu trúc ÉP algorithm chạy trong profit-logic của bạn; ko có nó, PMax/Smart Shopping luôn dồn budget về path-of-least-resistance (volume cao bất kể margin)."*
- **Shopping search-terms report (ít ai mở):** (1) **mine title keyword** — query convert mà chưa có trong title → add (match chủ động + scale hơn) · (2) **negative** — query có spend, 0 conversion, ở volume → cắt · (3) **product split** — 1 variant (màu/size/material) liên tục hiện ở converting query → tách listing riêng + title riêng. Review hằng tháng = 1 trong các task ROI cao nhất account.

## Attribute completeness = matching signal (đừng dừng ở title) ([[rudra-shopping-feed-attributes-signal]])
Đa số upload MINIMUM required fields rồi thắc mắc ads không convert. Google dùng **MỌI attribute** để hiểu product là gì / ai nên thấy / show khi nào: gender · material · color · size · condition · style · hardware · year · brand… Mỗi field điền = 1 signal match product ↔ đúng query ↔ đúng buyer đúng lúc.
- Long-tail/high-ticket: attributes = khác biệt giữa hiện cho *"handbag"* (browser) vs *"vintage chanel caviar leather classic flap medium black"* (buyer cầm thẻ sẵn).
- **Map mọi Shopify metafield → valid identifier trong GMC feed.** *"Competitors không làm, đa số agency không biết làm"* → signal quality giữ vị trí auction không ai đụng được.
- Cùng triết lý "70% từ feed, làm TRƯỚC campaign" đầu trang — nhưng mở rộng từ title/desc/image ra **toàn bộ attribute schema**. MaxPro: điền đủ size/breed-compatibility (3-port cap S/M/L), material (diamond drum), noise level, pet type — mọi field GMC cho phép.

→ Impression-share headroom (winner ROAS cao nhưng IS thấp → tách campaign riêng) + 7-campaign + optimization + seasonal: [[google-ads]].
