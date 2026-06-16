# Presell pages — build guide (4 format)

Nguồn: [[vysta-presell-build-guide]] (agency 150+ brand, 50+ page/tuần). Đây là phần **BUILD chi tiết** của pre-sell layer — khái niệm tổng ở [[funnel-and-landing]]. Method thuần, dùng mọi sản phẩm.

## Math (vì sao đáng làm)
Cold thẳng PDP = **1-3% CVR**. Cold → presell → PDP = presell **CTR 8-12%**, end **CVR 4-7%**. Subdomain advertorial giảm **CPA 30-40%**. *"Không phải media problem, là landing page problem."* PDP (nhất là Shopify) build cho repeat shopper, không convert cold → khớp [[funnel-and-landing]] (cold bỏ PDP).

## 4 format + benchmark CTR→PDP
| format | hợp | traffic | CTR→PDP |
|---|---|---|---|
| advertorial | single-product, pain-point story | cold (YouTube/DG/native) | 8-15% |
| listicle | category/comparison shopper | cold→warm (DG image, Shopping) | 10-18% |
| quiz | product phức tạp, bundle, personalize | cold (YouTube/social) | 15-25% (tới result) |
| **comparison** | conquesting đối thủ, "brand alternative" | warm (Search, competitor kw) | 12-20% |

- advertorial → register/skeleton ở [[native-ads]] (editorial) + [[ugly-ads-method]] (unhinged)
- listicle → [[carlweische-presell-listicle-7reasons]] (build bằng `/listical`)
- quiz → [[quiz-funnels]]
- **comparison = format MỚI** (xem dưới)

→ Google Ads mở rộng thành **9 funnel-type × search-intent** (thêm VSL · application · homepage · PDP-direct, mỗi cái 1 layer intent): [[google-ads]].

## Advertorial — 10-section wireframe (layout-level)
Chi tiết hơn 6-piece của [[native-ads]] / 15-beat của [[ugly-ads-method]] — cùng DNA, đây là bố cục trang:
1. **Headline** — lặp lời hứa ad, congruence 1:1, font serif editorial (khác brand store). Formula swap-noun: *"a simple [habit] that helps with [pain] (backed by [authority])"* · *"we tested [product] for 30 days — here's what surprised us"* · *"i stopped using [common solution]. here's what happened"*.
2. **Sub-headline** — mở rộng promise + preview proof.
3. **Credibility block** — giọng EDITORIAL không phải brand (author + headshot / "reviewed by" / founder story). → [[personas]].
4. **Problem + NEW insight** — thêm cơ chế reader chưa nghe, repeatable cho bạn bè. (khớp UMP [[market-awareness]] — nhớ match sophistication, nail = stage 2-3).
5. **Mechanism** — `[feature] + [cách hoạt động] + [vì sao quan trọng]`. 2-col old-way(❌) vs product-way(✓).
6. **Proof** — pick 3-4: before/after (nếu compliant), review screenshot, star+count, side-by-side, UGC. Banner "4.8/5 từ 2,847 review".
7. **Micro-CTA** (xem dưới) + sticky mobile.
8. **Offer block** — lifestyle image, giá+discount, bundle, guarantee, shipping, payment icons.
9. **FAQ** — top 3-5 objection THẬT (CS ticket, ad comment, 3-star review, Reddit). FAQ cuối = objection mua → guarantee.
10. **Compliance footer** — advertorial disclosure + policy links.

## Comparison page (intent cao nhất) — MaxPro ăn liền
Người search "[brand] vs [competitor]" = sẵn sàng mua, chỉ cần cú đẩy cuối. Cấu trúc: headline *"[product] vs [competitor]: honest breakdown after testing both"* · TL;DR verdict 1 câu · spec table side-by-side · **3 pros MỖI bên** (khen điểm mạnh đối thủ = build trust mạnh) · "who should choose which" theo use-case · 3 citation ngoài · CTA. URL `/compare/x-vs-y`.

> [!tip] MaxPro có sẵn đạn
> [[maxpro-competitors]] đã có bảng **MaxPro vs Heusom / Casfuy / LuckyTail**. *"MaxPro vs Heusom"* (cùng OEM, wedge = ship Denver + 99-day company-paid return) = comparison page gần như viết được ngay, ăn warm/search traffic. Khen thẳng power của Casfuy (3 pros mỗi bên) = trust, rồi segment "ai nên mua cái nào" → đẩy large-breed sang Casfuy (đúng qualify-out [[maxpro-avatars]]).

## CTA system (gấp đôi CTR)
Đừng để 1 CTA ở đáy (đa số không cuộn tới). Placement: **~40%** (sau mechanism) · **~65%** (sau proof) · **~85%** (sau offer) · **sticky mobile** (sau 30% scroll).
**Copy — KHÔNG bao giờ** "buy now / add to cart / shop now / order today" (quá aggressive cho cold). **Luôn dùng** *"see if it's right for you →"*, *"check current availability →"*, *"view pricing and options →"*. CTA = **bước nghiên cứu tiếp, không phải commit mua** — cùng tinh thần deny-the-sale của [[offer-and-cta]].

## Congruence rule (chỗ đa số fail)
ad → presell → PDP = **1 câu chuyện liền mạch**. Headline presell khớp 1:1 lời hứa ad; PDP show đúng giá đã hứa. Lệch = bounce. Đây chính là congruency + proof-evaporation của [[funnel-and-landing]]. **Advanced — dynamic congruence:** swap H1 + hero theo `utm_content` bằng JS → mỗi angle 1 trang ảo, +15-25% CTR. 1 presell / 1 ad angle, URL `/presell/[angle]`.

## Metrics + cadence tuần
Target: presell CTR **8-12%** · scroll 50%+ **>60%** · time **>45s** · bounce **<55%**. Heatmap (Microsoft Clarity / Hotjar) bắt buộc — bắt scroll-death + rage click. UTM + GA4 event (presell_outbound_click = metric chính). Cross-domain Funnelish→Shopify: GTM linker hoặc wetracked/Trackbee.
Cadence 50+ page/tuần: **mon** kill page <5% CTR · **tue-wed** build (rule: *new angle = new presell page*) · **thu** optimize winner (A/B 1 element) · **fri** launch + pair từng presell với ad creature. Khớp [[media-buying]] "double down angle thắng".

## Speed (cold = zero patience)
LCP **<2s** · page **<500KB** · WebP · mỗi image <100KB · hero <150KB preload · lazy-load below-fold · font 1-2 weight. >2s trên phone = đốt ad spend.

## Compliance — landmine MỚI
Mandatory advertorial disclosure mọi trang. NEVER: **ảnh AI (ChatGPT/DALL-E/Sora) — Google đang flag**, fake news logo, before/after health (Google policy), fake scarcity, mạo danh bác sĩ/journalist, countdown giả. Chi tiết → [[compliance]].

## Tech stack
**Funnelish** (cold presell, quiz native logic, page speed) vs **Shopify + Replo/Liquid** (khi cần SEO organic). Editorial subdomain `reviews.brand.com` cho brand $30k+/day: tách tracking + cô lập policy-risk khỏi store chính.
