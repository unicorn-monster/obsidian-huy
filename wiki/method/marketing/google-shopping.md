---
sources: [ecomamin-google-ads-pet-store-1m, blvckledge-google-shopping-duplication, ecomamin-shopping-masterclass, grinder-avatar-bank, rudra-shopping-feed-attributes-signal, ecomamin-shopping-feed-tweet, vysta-48-laws-google-ads, ecomamin-winning-shopping-ad-copy-paste-formula, ecomamin-ai-shopping-ads-gemini-prompt, ecomamin-1m-google-shopping-ads-blueprint-a, ecomamin-google-shopping-feed-optimization-playbook, ecomamin-299k-google-ads-gmc-title-playbook, blvckledge-2.6m-to-7.1m-4-phase-rebuild, blvckledge-shopping-image-styles, ecomamin-48-laws-google-advertising, ecomamin-shopping-title-keyword-first, ecomamin-gmc-multi-title-feed]
updated: 2026-08-18
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
  - **Luật cứng "3 từ đầu KHÔNG được branded"** ([[ecomamin-299k-google-ads-gmc-title-playbook]], @eCom_Amin — case 97% ROAS lift, 9.63x→18.97x, cùng $32k/tháng, ĐỔI DUY NHẤT title) — dẫn brand ở 3 từ đầu khiến Google xếp title đó vào "branded" → **PMax cannibalize traffic branded-search 15-25x ROAS về nhét chung Shopping, blended ROAS báo cáo tụt còn ~4x** dù branded-search thật không đổi gì. Quy trình 4 bước: kéo search-terms 90 ngày (lọc branded, min 5 impression, sort theo CVR) → phân nhóm theo intent (benefit/type/quality/problem-focused), xếp CVR cao nhất lên ĐẦU title (Google trọng số nặng nhất 3 từ đầu, đây cũng là phần không bị cắt trên mobile) → build lại theo công thức `[benefit-keyword] - [differentiator] - [spec]` → **deploy qua supplemental feed** (Google Sheet product-id + title mới, upload Merchant Center làm supplemental, KHÔNG đụng feed gốc) để test/revert dễ, duyệt 24-48h, cho algorithm 2-4 tuần học lại trước khi đánh giá. Số thật: $308k→$607k doanh thu cùng spend, CVR 4.13%→9.31%, impression giảm 5% (lọc match rác) nhưng conversion tăng gấp đôi = hiệu ứng pre-qualify traffic, không phải hiệu ứng volume.

> [!tip] Xác nhận độc lập: keyword-first title doubled CVR + ROAS ([[ecomamin-shopping-title-keyword-first]])
> @eCom_Amin split test live: **cùng product, cùng bids, cùng budget** — đổi brand-first → keyword-first → **CVR doubled, ROAS nearly doubled**. Sai: *"BrandName Premium Collagen Peptides 500mg"*. Đúng: *"Collagen Supplement for Joint Pain + Skin | BrandName"*. Cơ chế cascade: CVR tăng → Google thưởng better placement → nhiều impression hơn → CPC thấp hơn → ROAS tốt hơn ở cùng spend. **Meta leak mechanism (cực quan trọng):** Meta ad tạo category interest → buyer mở Google gõ category query → listing brand-first không match → *competitor keyword-first listing thắng click*. **"You paid the CPM on Meta and they captured the conversion on Google — the only barrier was the first three words of a product title."** → 70-80% Google ecom revenue chạy qua Shopping; titles sai = mọi campaign fight với 1 tay sau lưng. Fix: vào Merchant Center, pull top-10 sản phẩm theo revenue, check 3 từ đầu — nếu brand-first, đang mất tiền ngay hôm nay.
- **Description field** (ít hiện ở standard result nhưng ăn vào relevance scoring + expanded format): nhồi **secondary keyword** ko vừa title + credibility (cert, material, sourcing, mechanism, compatibility). Viết như **ad copy**, ko như catalogue kho.
- **Custom labels = 5 field segment (đa số bỏ trống / dùng 1 cái):** (1) **margin tier** A/B/C → bid mạnh SKU margin cao, ko trợ giá low-margin · (2) **performance tier** bestseller / new / slow-mover → bid logic riêng · (3) **seasonality flag** → dời budget mùa peak ko cần restructure · (4) **promo status** → front-load exposure khi đang sale. *"Algorithm ngừng quyết theo ưu tiên của NÓ, bắt đầu thực thi ưu tiên của BẠN."* (Sâu hơn margin-bidding ở [[google-ads]] §optimization.)
- **Image = CTR lever ít dùng nhất.** Buyer quét grid, quyết <2s. Mọi listing white-bg → giống hệt nhau → CTR trung bình. **Contrast first:** search query top-volume của mình → screenshot SERP → xem palette/style nào áp đảo → ngồi vào **khoảng trống thị giác**. Category mà *outcome là desire* (fitness/skincare/sleep/wellness/home/pet) → **lifestyle shot bán transformation** > product shot. Category spec-driven (electronics/tools/size) → clean product shot tốt hơn. Merchant Center cho phép lifestyle (người/môi trường/context) nhưng **CẤM** text overlay / before-after / graphic che product. PMax: upload cả 2 kiểu làm asset, đọc asset report sau 2-3 tuần.
- **Social proof trong feed (trust layer free):** star + review count hiện ngay trên listing nếu eligible. **Review COUNT > star rating trên 1 ngưỡng:** *4.4 từ 1,200 review > 4.8 từ 23 review* (volume = "proven", 23 có thể bạn-của-brand). Ngưỡng tối thiểu hiển thị: **50 review + ≥3.5★**. Dưới 50 → gom review là **ưu tiên kinh doanh**, ko phải vanity. Lấy: Google Customer Reviews (post-purchase survey) hoặc 3rd-party feed approved. → khớp review-collection [[email-marketing]] (post-purchase flow / SMS / insert). **Số A/B thật** ([[ecomamin-1m-google-shopping-ads-blueprint-a]]): shopping ad CÓ review hiển thị convert **6.8%** vs KHÔNG có **2.3%** — **3x** chỉ từ 1 trust-signal.
- **Promotions + pricing (đòn tâm lý):** price luôn hiện ở Shopping → *price context* là tất cả. **Anchoring:** "was £65, now £45" qua Merchant Center promotions feed → £45 thành "deal" thay vì 1 con số so với đối thủ. **Free shipping = decision-forcing**: 2 listing cùng giá, cái "free shipping" thắng click ở tỉ lệ lớn gần như mọi split-test → set shipping £0 cho SKU eligible để text tự hiện. Amin xác nhận ([[ecomamin-shopping-feed-tweet]]): *"at a rate that should embarrass every brand not using it."* → MaxPro quick win: bật free shipping trên GMC nếu chưa có. **Công thức đặt ngưỡng free-shipping** (nếu dùng threshold thay vì free tuyệt đối): threshold = AOV hiện tại **+20-30%** (vd AOV $60 + ship trung bình $8 → ngưỡng $80) — ép khách thêm hàng để chạm ngưỡng, AOV tăng đồng thời ship-cost/order giảm theo %.
- **Local/location signal:** "ships from UK" cho buyer UK = ngụ ý giao nhanh + hợp pháp (ngược "Shenzhen shipping time"). Set Merchant Center reflect đúng origin.
- **Bid segmentation 3 tier** (sau khi feed chuẩn, structure phản chiếu custom labels): **Tier 1** bestseller/high-margin hero → campaign riêng, budget cao nhất, target ROAS thấp nhất (= bid cao nhất, có data validate) · **Tier 2** new product testing → budget riêng, maximize-clicks/manual-CPC gom data TRƯỚC smart bidding · **Tier 3** clearance/low-margin → promo giá + bid thấp, ko move thì **exclude khỏi Shopping**. *"Cấu trúc ÉP algorithm chạy trong profit-logic của bạn; ko có nó, PMax/Smart Shopping luôn dồn budget về path-of-least-resistance (volume cao bất kể margin)."*
- **Shopping search-terms report (ít ai mở):** (1) **mine title keyword** — query convert mà chưa có trong title → add (match chủ động + scale hơn) · (2) **negative** — query có spend, 0 conversion, ở volume → cắt · (3) **product split** — 1 variant (màu/size/material) liên tục hiện ở converting query → tách listing riêng + title riêng. Review hằng tháng = 1 trong các task ROI cao nhất account.

## Attribute completeness = matching signal (đừng dừng ở title) ([[rudra-shopping-feed-attributes-signal]])
Đa số upload MINIMUM required fields rồi thắc mắc ads không convert. Google dùng **MỌI attribute** để hiểu product là gì / ai nên thấy / show khi nào: gender · material · color · size · condition · style · hardware · year · brand… Mỗi field điền = 1 signal match product ↔ đúng query ↔ đúng buyer đúng lúc.
- Long-tail/high-ticket: attributes = khác biệt giữa hiện cho *"handbag"* (browser) vs *"vintage chanel caviar leather classic flap medium black"* (buyer cầm thẻ sẵn).
- **Map mọi Shopify metafield → valid identifier trong GMC feed.** *"Competitors không làm, đa số agency không biết làm"* → signal quality giữ vị trí auction không ai đụng được.
- Cùng triết lý "70% từ feed, làm TRƯỚC campaign" đầu trang — nhưng mở rộng từ title/desc/image ra **toàn bộ attribute schema**. MaxPro: điền đủ size/breed-compatibility (3-port cap S/M/L), material (diamond drum), noise level, pet type — mọi field GMC cho phép.

→ Impression-share headroom (winner ROAS cao nhưng IS thấp → tách campaign riêng) + 7-campaign + optimization + seasonal: [[google-ads]].

## Multi-title feed — 1 hero product × 6 buyer psychologies ([[ecomamin-gmc-multi-title-feed]])
eCom_Amin (2026-08-17): health niche, **$38.5k → $70k/4 tuần** — lever lớn nhất là GMC feed, không phải campaign type hay bid strategy.

**Tình trạng cũ:** 1 hero product, generic title, 1 shopping campaign, không segmentation, không angle testing. = Cách 99% brand chạy.

**Cách làm:** cùng 1 sản phẩm → **6 feed entry** qua supplemental feeds + `item_group_id` → mỗi entry có title khác, description khác → nhắm đúng 1 buyer psychology theo đúng search intent:

| Search query | Title feed entry |
|---|---|
| "natural supplement for joint pain" | "Joint Pain Relief Supplement Natural" |
| "best anti-inflammatory supplement" | "Anti-Inflammatory Supplement Clinically Tested" |
| "supplement for knee pain after running" | "Knee Support Supplement for Athletes" |

→ Buyer gõ query của họ → thấy listing viết như được làm riêng cho họ → CTR tăng vì listing "nói đúng ngôn ngữ" → buyer không biết đang nhìn cùng 1 sản phẩm.

**Technical:** dùng supplemental feeds (Google Sheet: product-id + title mới per row) + `item_group_id` để nhóm variants lại trong GMC policy. Không vi phạm policy khi set up đúng.

**Kết hợp full ecosystem:** trên feed multi-title, team còn build: BOF branded search 95%+ IS + branded shopping · MOF non-branded search pain-point cluster + PMax ICP-segmented per angle · TOF demand gen YT Shorts + image ads + advertorial cho problem-aware queries. → $38.5k → $70k.

**Insight cốt lõi:** *"99% of brands run one title per product. The brands printing run 3-6 titles per hero product, each targeting a different search intent."* — bổ sung §Feed duplication (blueprint kỹ thuật) + §Shopping masterclass (tại sao keyword-first + buyer psychology trong title). MaxPro: 1 nail grinder → 6 titles: "Dog Nail Grinder Quiet" / "Dog Nail Grinder No Bleeding" / "Nail Grinder for Anxious Dogs" / "Pet Nail Grinder for Large Dogs" / "Dog Grooming Nail File Electric" / "Dog Nail Dremel Safe".

## Priority-laddering + PMax coexistence + custom-labels schema (Vysta 48 Laws) ⭐ how-to
Nguồn: [[vysta-48-laws-google-ads]] (Vysta, checklist 48-law Google Ads ecom). Phần Shopping có **3 cơ chế net-new** không có ở masterclass trên:

**1. Campaign PRIORITY laddering — route intent bằng High/Med/Low (Law 24-25).** Standard Shopping priority quyết campaign nào vào auction TRƯỚC → "ladder" traffic theo intent:
- **High-priority Non-Brand** + brand negatives → bắt query generic/category (siết tROAS looser cho volume).
- **Med-priority Category** (optional) cho mid-intent term + competitor/low-intent negatives.
- **Low-priority Brand** + **KHÔNG** brand negatives → hứng brand query (tROAS chặt hơn vì conv-probability cao).
- **Tách Brand vs Non-Brand Standard Shopping** (tối thiểu 2 campaign): trộn brand demand vào non-brand **giấu CAC thật** + ép sai bid. Đây là cách làm rõ CAC mà §Shopping-masterclass chưa nói.

**2. PMax ↔ Standard coexistence + anti-cannibalization (Law 23/29/35).** PMax thường **thắng Shopping auction by design** → muốn Standard gánh SKU cụ thể thì phải chủ động:
- Chọn SKU nào sống ở Standard vs PMax bằng item filter (custom labels). Standard cho line mà **query-intent + margin control** quan trọng; PMax cho discovery/coverage.
- **2 cách chặn PMax nuốt Standard SKU:** (a) trong PMax dùng listing-group filter **exclude** Item ID/label đã giao Standard; hoặc (b) set PMax **tROAS cao hơn** + Standard **tROAS thấp hơn** → Standard thắng auction cho SKU của nó.
- **PMax Hero vs Tail** (Law 35): PMax-Hero (bestseller/high-margin) tROAS thấp / Max-Conv-Value; PMax-Tail tROAS cao gánh experiment. Exclude poor-performer khỏi Hero. (Bồi §7-campaign PMax feed-only + brand-EXCLUDED ở [[google-ads]].)

**3. Custom-labels 5-chiều (Law 15)** — bidding-to-the-mean giấu outlier; label để Smart Bidding thấy từng lớp:
`label0 = price_tier` (0-25 / 25-50 / 50-100 / 100+) · `label1 = margin` (low/med/high) · `label2 = role` (hero/evergreen/seasonal/clearance) · `label3 = lifecycle` (new/growth/mature/sunset) · `label4 = inventory_risk` (overstock/normal/low). Sâu hơn 3-tier bid ở §masterclass — cho phép cross-cut (vd high-margin × overstock → đẩy mạnh).

**Product-group granularity (Law 26):** break out **Item ID** cho hero/high-margin; nhóm phần còn lại theo custom label (margin/price-tier/role); exclude chronic loser xuống Tail-PMax/clearance với tROAS chặt. Đừng item-ID-hoá mọi thứ — chỉ SKU **swing** kết quả.

> [!tip] Standard Shopping Starter Blueprint (copy/paste)
> - `Shopping-Brand-Exact-LowPriority` — no brand negatives, tROAS chặt.
> - `Shopping-NonBrand-HighPriority` — brand negatives, tROAS looser cho volume.
> - (optional) `Shopping-Category-MedPriority` cho top 1-3 category.
> - Routing: High + brand-negatives → generic; Low + no-negatives → brand/SKU term.
> - Coexist PMax: exclude Standard-SKU khỏi PMax bằng listing-group filter, HOẶC PMax tROAS cao hơn.
> Áp MaxPro: khi feed đủ chuẩn ([[google-shopping]] đầu trang) → tách Brand-Low / NonBrand-High priority là đòn control CAC rẻ nhất; label margin/role để Smart Bidding không dồn budget về SKU low-margin.

> [!note] Vì sao custom label là điều kiện để scale, không phải "nice-to-have" ([[blvckledge-2.6m-to-7.1m-4-phase-rebuild]])
> Case CA$2.6M→7.1M nêu đúng cơ chế đằng sau schema trên: **budget chỉ control được ở cấp CAMPAIGN**. Nhồi nhiều product category vào 1 campaign = **Google tự quyết tiền đi đâu**, category đáng đầu tư không nhận đủ — và càng lệch khi **margin giữa category khác nhau** (margin khác → ROAS target chịu được cũng khác, xem `label1 = margin` ở trên). Trình tự trong case: **custom label để ĐỌC category nào thắng → tách campaign riêng cho category top → mới có full control để scale.** Cùng phase đó, rewrite **title + attribute theo cách khách search** khiến campaign hiện cho nhiều query liên quan hơn ở **cùng mức spend** (= §GMC feed 70% đầu trang + §attribute completeness). → 4 phase đầy đủ: [[google-ads]] §Fix TRƯỚC khi thêm.

## $1M/30 ngày qua 5 listing thật — pattern chung + campaign-structure theo tier (eCom_Amin) ⭐ swipe + how-to
Nguồn: [[ecomamin-winning-shopping-ad-copy-paste-formula]] (@eCom_Amin). 5 sản phẩm thật cộng lại ~$1M/30 ngày, **zero creative production**: Polar Dive cold-plunge $949 (~$285k, brand-first title + giá cao lọc tire-kicker) · VeeCleanse suppository $24.99 (~$187k, 4.9★/4k+ review category nhạy cảm) · Personalized Dog Harness $49.95 (~$224k, title dẫn pain-point "No Pull" + warranty) · The Plunge tub $4,990 (~$199k, 4.8★/435 review validate ticket khủng) · Furbo camera $34 từ $210/-84% (~$153k, SALE badge + 4.6★/769 review). **Pattern chung cả 5:** title front-load + ≥4.6★ và ≥400 review hiện rõ + free shipping bắt buộc + ảnh sạch chuyên nghiệp + keyword exact-match cao-intent.

**Campaign structure theo performance-tier (bổ sung cho priority-laddering Vysta ở trên — 2 lát cắt khác nhau, dùng cùng lúc được):** Best Sellers (top 10-20% doanh thu, budget cao nhất, bid aggressive) · New Products (mới launch, budget test, bid vừa) · Seasonal/Trending (aggressive lúc peak) · Liquidation (clearance, bid thấp, ưu tiên volume). Split gợi ý: 60/20/15/5%. Không có structure = best-seller cạnh tranh budget với hàng ế, không control được spend.

**Bidding progression:** Manual CPC mới ra mắt (gom data) → sau **30 ngày data** chuyển Target ROAS. **Luật scale: không tăng quá 30%/lần** (tăng đột ngột reset learning-phase) — nhịp week 1 +20% → week 2 +20% nếu ROAS giữ → week 3+ +25-30%. Điều kiện scale: ROAS>3x + ≥50 conversion + ổn định 7+ ngày.

**Negative-keyword baseline (áp ngay, không cần đợi data):** free / cheap / diy / used / repair / how to / tutorial / review. Review search-terms report hàng tuần, thêm negative liên tục — 1 trong các task ROI cao nhất account (khớp §Shopping search-terms report ở trên).

**Vì sao 91% brand miss:** feed generic (title/ảnh/category kém) → impression thấp · dồn hết vào 1 campaign → winner đói budget, loser ăn hết · set-and-forget, không thêm negative/sửa bid → performance rơi dần · bật Smart Bidding NGAY từ đầu khi chưa có data → Google "học" tốn tiền, kết quả tệ ban đầu, người ta bỏ cuộc trước khi nó chạy được.

## AI image-prompt cho Shopping/PMax — 5 concept theo đòn tâm lý (Gemini/Nano Banana) ⭐ swipe
Nguồn: [[ecomamin-ai-shopping-ads-gemini-prompt]] (@eCom_Amin). Template Gemini điền-vào-chỗ-trống tạo bộ ảnh Shopping/PMax **tuân thủ compliance GMC**: ảnh primary (1:1, ≥1200px) BẮT BUỘC nền trắng thuần #FFFFFF + **cấm tuyệt đối text/logo overlay**; ảnh secondary (1.91:1 cho PMax/Display, ≥1200×628) mới được phép overlay (tối đa 20% diện tích) + lifestyle context.

**5 concept, mỗi concept = 1 đòn tâm lý riêng, primary sạch + secondary có lớp thuyết phục:**
| Concept | Đòn tâm lý | Secondary asset |
|---|---|---|
| A. Aspirational Lifestyle | Aspiration — đồng nhất với kết quả | model dùng sản phẩm trong bối cảnh đáng mơ ước, DoF nông |
| B. Feature Deep-Dive | Rational value — biện minh giá bằng kỹ thuật | macro cực gần vào chi tiết khác biệt (đường may, chất liệu, cơ chế) |
| C. Social Proof | Bandwagon | badge rating+review-count nổi bật, nền tối trung tính |
| D. Price Anchoring | Loss aversion | giá cũ gạch ngang nhỏ + giá mới to đậm, badge accent-color |
| E. Problem/Solution | Pain avoidance | split-screen before(tối/mờ)/after(sáng/rõ), đường chia sắc |

Mỗi concept card kèm CTA khớp đòn tâm lý riêng (Shop Now / Learn More / Read Reviews / Claim Offer / Discover Comfort) — dùng trực tiếp làm brief cho Nano Banana/Midjourney khi build asset PMax mới, khớp workflow [[creative-brief]] §seed prompt nhưng dành riêng khung compliance Shopping.

**Biến thể khác: 5 ảnh làm 1 CHUỖI tâm lý trong CÙNG 1 listing** ([[ecomamin-1m-google-shopping-ads-blueprint-a]]) — khác với 5 concept A-E ở trên (5 phương án để TEST song song), đây là dùng **cả 5 cùng lúc, đúng thứ tự**, tận dụng Google Shopping cho phép tới 10 ảnh/listing mà đa số chỉ upload 1-2: (1) compliance trắng → qua được feed, (2) lifestyle → kết nối cảm xúc, (3) feature deep-dive → biện minh lý trí cho giá, (4) social-proof overlay → xoá nghi ngờ "tin được không", (5) problem/solution split → tạo urgency rời-bỏ-vấn-đề. Mỗi ảnh trả lời đúng câu hỏi tiếp theo trong đầu buyer khi họ lướt qua listing — cộng dồn tới quyết định mua. Áp dụng: KHÔNG chỉ chọn 1 trong 5 concept để chạy, mà upload đủ 5 vào cùng 1 SKU nếu platform cho phép multi-image.

## GTIN, Item Group ID, Product Studio + feed tooling — lớp kỹ thuật chưa ai note ([[ecomamin-google-shopping-feed-optimization-playbook]]) ⭐ how-to
Nguồn giọng SOP-kỹ-thuật, khác hẳn giọng hype các nguồn Amin khác — bồi phần **cơ chế** mà §feed ở trên chưa chạm tới.

**Giá vẫn là tín hiệu mạnh nhất, mạnh hơn mọi thứ trong trang này.** Title/ảnh/GTIN tốt tới đâu cũng không bù được gap giá trên sản phẩm gần-giống-hệt đối thủ — giá hiện NGAY trên listing trước khi click. Nếu giá bị khoá (MAP/wholesale-minimum) → phần còn lại của feed-optimization QUAN TRỌNG HƠN chứ không kém. **Ranh giới compliance:** hạ giá trong feed nhưng checkout thật cao hơn ("price baiting"), sale-price giả không có promotion thật, hoặc crawler-Google thấy giá khác khách thấy → detection ổn định 2026, KHÔNG đáng liều dù thi thoảng qua mắt được ngắn hạn.

**GTIN — attribute đòn bẩy cao nhất bị bỏ quên vì "nghe kỹ thuật":** GTIN valid → Google biết CHÍNH XÁC sản phẩm là gì (không suy từ title) → match search chuẩn hơn + auto-category đúng hơn + nhận diện được context cạnh tranh + mở khoá 1 số Shopping feature + tín hiệu tin cậy cho cả feed. Lấy GTIN: barcode vật lý (UPC 12-số US / EAN 13-số quốc tế) · hỏi thẳng nhà sản xuất (nhanh nhất cho reseller, lấy hàng loạt) · GS1 registry (gepir.gs1.org) · data đã có trên Amazon/marketplace khác. Sản phẩm THẬT SỰ không có GTIN (custom/handmade/private-label/bundle) → set **"Identifier Exists" = No** rõ ràng — khác hẳn để trống (trống = lỗi data-quality, "No" tường minh = đúng và được hiểu). Private-label muốn feed sạch hoàn toàn có thể MUA GTIN riêng qua gs1.org, giá rẻ.

**Item Group ID — bắt buộc nếu bán variant (màu/size):** gộp mọi biến thể cùng 1 sản phẩm gốc để Google KHÔNG coi chúng là listing rời cạnh tranh nhau trong auction (tự đấu giá với chính mình = phí ngân sách) + hiện được UI chọn variant cho khách + mở khoá 1 số Shopping feature. Thiếu cái này trên catalog có variant = fix ưu tiên cao.

**Product Studio — tool AI dựng lifestyle-image MIỄN PHÍ tích hợp sẵn trong Merchant Center** (khác hẳn workflow AI-prompt-ngoài ở §trên): Creative Content → Product Studio → chọn/tải ảnh sản phẩm → remove-background / tăng độ phân giải / hoặc generate scene mới (mô tả sản phẩm + mô tả bối cảnh, ngôn ngữ đơn giản không cần prompt engineering) → chọn variation tốt nhất → add thẳng vào listing. Sản phẩm to/rõ hình khối (nội thất, thảm, chăn ga) ra ảnh đẹp hơn phụ kiện nhỏ/phẳng/hình dạng phức tạp. **Check bắt buộc:** ảnh AI generate KHÔNG được đổi hình dạng/màu sắc thật của sản phẩm — ảnh sai lệch = return + CS issue thật. Ưu tiên top 20-30 sản phẩm bán chạy nhất trước, luôn ADD thêm chứ không thay ảnh compliance chính, chạy A/B non-formal (1 nhóm SP có lifestyle-image, nhóm kia không, cùng category) đọc CTR sau 4-6 tuần trước khi làm đại trà.

**Target ROAS cần ngưỡng data tối thiểu:** ≥30-50 conversion trong 30 ngày gần nhất CHO campaign đó mới đủ tín hiệu — dưới ngưỡng này performance thất thường. Set tROAS ban đầu BẰNG hoặc THẤP HƠN ROAS thực tế hiện tại (đặt cao ảo tưởng → Google chỉ giữ traffic siêu-an-toàn, volume sập), tăng dần khi algorithm chứng minh giữ được target ở volume ổn. **Learning-period kỷ luật:** đổi bid-strategy / nhảy tROAS-CPA lớn / đổi budget lớn / restructure product-group lớn đều reset learning — dồn thay đổi thành đợt có chủ đích, đợi 2-4 tuần ổn định mới đánh giá, đừng đổi liên tục.

**Feed tool — chỉ cần khi >~500 SKU:** Channable (mid-market, UI dễ, multi-channel tốt, hợp catalog vài trăm-vài chục nghìn SKU + agency) · DataFeedWatch (DIY hơn, rẻ hơn, rule-engine mạnh, hợp người kỹ thuật ngân sách hẹp) · enterprise managed service (catalog rất lớn, ngân sách ads lớn, có người quản feed hộ). KHÔNG cần tool để bắt đầu — mọi thứ trong 2 trang [[google-shopping]] làm được native trong Merchant Center; tool chỉ đáng khi thao tác tay thật sự là bottleneck.

> [!tip] Checklist thực thi 17 bước (thứ tự ưu tiên, rút gọn)
> Critical: diagnostics hàng tuần → audit giá vs đối thủ. High: rewrite title front-load top-seller → mine Search Terms report vào title → verify/thêm GTIN → lifestyle-image top 20-30 SKU → Item Group ID cho variant. Medium: description (SAU title+image) → category assignment → Product Type → Custom Labels → supplementary attributes → campaign structure → bidding strategy → test PMax song song Standard. Khi cần: đánh giá feed-tool lúc catalog vượt ~500 SKU.

## Ảnh Shopping: "lifestyle vs product shot" là câu hỏi SAI — một nửa ảnh thắng không show sản phẩm ([[blvckledge-shopping-image-styles]]) ⭐
Nguồn: @blvckledge (2026-07-27). §Image ở masterclass trên dừng ở *"lifestyle > white-bg, ngồi vào khoảng trống thị giác"*. Bài này đẩy xa hơn 1 bậc: **Google đã nới rất nhiều về ảnh Shopping** — *"lifestyle & product shots is NOT the only option there"* — và brand dám test giới hạn thường được thưởng.
- **Case Musely (skincare kê đơn), đọc từ ảnh:** cùng 1 brand chạy song song trong 1 carousel — model **nam**, model **nữ**, ảnh **cả khuôn mặt**, ảnh **zoom sát vùng da đang có vấn đề**, ảnh product trơn, ảnh product + hộp. **Khoảng một nửa không hề có sản phẩm trong khung.**
- **2 lợi ích (lợi ích 2 mới là cái lớn):** (1) *nổi bật* — cả grid là product-shot na ná nhau, cái khác biệt ăn click; (2) **mở khoá ANGLE** — khi ảnh xây quanh **một con người / một transformation / một outcome**, bạn có nhiều cách bán hơn hẳn. Musely tách hẳn creative nam vs nữ → **mỗi ảnh dẫn về landing page viết riêng cho avatar đó**; ảnh before/after dẫn về trang tập trung vào kết quả. = feed-duplication ([[google-shopping]] §trên) nhưng nhân theo **trục ảnh + landing page**, không chỉ trục title.
- **6 kiểu ảnh đáng test:** product + props · product + packaging · product + nguyên liệu/linh kiện chính · **before-and-after** (một số vertical) · **close-up lúc đang dùng** · **các avatar khác nhau đang dùng sản phẩm**.
- **Đọc thêm từ ảnh:** giá trong carousel Musely hiện dạng **`$30.00/mo`** — subscription framing ngay trên listing Shopping, không phải giá 1 lần (đòn hạ ngưỡng giá ở tầng SERP, trước cả click → [[subscription-retention]]); review-count hiện trên vài tile (3k+, 4k+) đúng luật §social-proof-in-feed. Đồng thời SERP branded `musely` của chính họ đang bị **Ro và Curology chen vào carousel** — minh hoạ sống của §control-narrative ([[google-ads]]).

> [!warning] ⚠️ Xung đột với luật ảnh đang ghi ở §masterclass — test có kiểm soát, ĐỪNG bulk-apply
> §masterclass + §AI image-prompt ghi: primary image **bắt buộc nền trắng #FFFFFF, CẤM text/logo overlay, CẤM before-after, CẤM graphic che product**; chỉ ảnh **secondary (1.91:1, PMax/Display)** mới được overlay ≤20%. Bài này lại nói before/after + ảnh không có sản phẩm chạy được. Ngay dưới post, 1 người trong ngành hỏi thẳng *"isn't this strictly forbidden? when did they change it"* — **tức chính người chạy ads cũng không chắc.**
> Cách đọc an toàn nhất (**giả định**, chưa có nguồn xác nhận): những ảnh Musely nhiều khả năng là **additional images** (Shopping cho tới 10 ảnh/listing) chứ không phải primary, và policy nới lỏng theo vertical/market. → Giữ **primary sạch đúng luật**, đẩy avatar/before-after/close-up vào **slot ảnh phụ**, theo dõi disapproval. Cần 1 nguồn thứ 2 trước khi coi đây là luật.

→ **MaxPro:** đây là cách rẻ nhất để nhân góc trong Shopping mà không cần thêm SKU — (a) close-up **móng đen dày** (không có grinder trong khung) · (b) tay người + chó nằm yên (outcome, không phải product) · (c) 2 avatar tách riêng: chủ nuôi sợ làm chảy máu vs groomer dùng hằng ngày ([[maxpro-avatars]]) · (d) product + 3-port cap làm props. Mỗi ảnh gắn đúng 1 landing page ([[maxpro-pages]]) thay vì tất cả về 1 PDP.

## 2 delta nhỏ từ 48-laws bản Amin ([[ecomamin-48-laws-google-advertising]])
- **Urgency STRUCTURAL, không phải COSMETIC (Law 32):** "limited time offer" + countdown trong ad copy = trang trí, buyer bỏ qua. Thứ thật sự đổi CPC/CTR là **promotion feed qua Merchant Center** → listing tự hiện **was/now + badge special offer** ngay trong grid. Bồi §Promotions + pricing ở trên: anchoring không chỉ là con số, nó là **badge do Google render** (tín hiệu bên thứ 3, không phải brand tự nói). ⏱ nhớ lead-time duyệt promo 2 tuần ([[google-ads]] §BFCM).
- **Feed title xoay theo mùa (Law 31):** nhét keyword mùa (`christmas gift for dad`, `summer …`) vào title Shopping **trong window rồi rút ra sau** — §Seasonal ở [[google-ads]] đã có budget/target/LP nhưng chưa có đòn feed-title này. Deploy qua **supplemental feed** để revert 1 nút (cùng cơ chế §3-từ-đầu-không-branded), đừng sửa feed gốc.
