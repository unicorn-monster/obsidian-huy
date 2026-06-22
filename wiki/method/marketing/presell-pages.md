---
sources: [vysta-presell-build-guide, carlweische-presell-listicle-7reasons, advertising-jan-derila-ergo-native-funnel, advertising-jan-hearing-aid-advertorial-evergreen, fotw-listicle-reason-why-1904, fotw-bencivenga-listicle-collagen, dtcquizbuilder-primalvikings-listicle-10reasons, reviewscout-3rd-party-review-domain-teardown, dtcmidas-3rd-party-pages-strategy, top5choices-seamoss-review-funnel-teardown]
---

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

> [!note] 2 lớp advertorial: layout (trên) vs emotional arc
> Wireframe trên = bố cục. Story-advertorial native ([[advertising-jan-derila-ergo-native-funnel]] · [[advertising-jan-hearing-aid-advertorial-evergreen]]) thêm **arc cảm xúc**: Hook (nhân vật siêu cụ thể "Arthur, 72, kiến trúc sư") → Emotional breaking point → Failed solutions → **Mechanism / belief-shift** (ear→brain, pillow→neck) → Payoff → Emotional bookend (mở-đóng cùng 1 vết thương) → CTA "fork in the road" (quyết định đời, không bán). Sales page sau = **confirm, không re-sell** + trust-stack media→clinical→peer→video → [[offer-and-cta]].

## Comparison page (intent cao nhất) — MaxPro ăn liền
Người search "[brand] vs [competitor]" = sẵn sàng mua, chỉ cần cú đẩy cuối. Cấu trúc: headline *"[product] vs [competitor]: honest breakdown after testing both"* · TL;DR verdict 1 câu · spec table side-by-side · **3 pros MỖI bên** (khen điểm mạnh đối thủ = build trust mạnh) · "who should choose which" theo use-case · 3 citation ngoài · CTA. URL `/compare/x-vs-y`.

> [!tip] MaxPro có sẵn đạn
> [[maxpro-competitors]] đã có bảng **MaxPro vs Heusom / Casfuy / LuckyTail**. *"MaxPro vs Heusom"* (cùng OEM, wedge = ship Denver + 99-day company-paid return) = comparison page gần như viết được ngay, ăn warm/search traffic. Khen thẳng power của Casfuy (3 pros mỗi bên) = trust, rồi segment "ai nên mua cái nào": MaxPro **giữ** large-breed (xử ~150lb, [[maxpro-product-truth]]) bằng quiet + grind-and-release; chỉ nhường Casfuy ca cực-nặng / ai đòi 6-speed + lifetime-warranty. (❌ KHÔNG còn blanket qualify-out large-breed như note cũ.)

## Listicle — vì sao convert + build mechanics
**Vì sao convert** ([[fotw-listicle-reason-why-1904]] + [[fotw-bencivenga-listicle-collagen]]): listicle = "Reason-Why advertising" (Kennedy 1904 → Reeves USP → Schwartz mechanism), mỗi reason = `name reason → explain mechanism → prove → lặp tới hết objection`. Nền persuasion = **Bencivenga**: `Urgent Problem + Unique Promise + Unquestionable Proof + User-Friendly Proposition`, đóng **5 Exit of Escape** (no time/interest/difference/belief/decision) trước khi reader dùng được. **CrackerJack Secret:** ad phải đáng đọc như content ("7 Reasons Everyone Over 50 Should Be Taking This Protein", KHÔNG "Buy our collagen"). Stat: bài dạng article pull **+81% response** vs cùng copy dạng ad (Ogilvy +500% readership) → format editorial > polished. Headline template: `[N] Reasons Everyone Over [age] Should [X]`.
**Build mechanics** ([[dtcquizbuilder-primalvikings-listicle-10reasons]], 10-reasons supplement):
- **Comparison table = anchor đầu trang:** không bán "X tốt" (đã tin sẵn), chỉ redirect belief sang mechanism mới — *"bạn chọn sai loại"* (concentration: frame trước khi argue).
- **10-reasons pattern:** mỗi reason = "thứ bạn tưởng [đối thủ] làm tốt → [mình] làm tốt hơn, đây là vì sao."
- **Awareness progression trên 1 trang:** Problem-aware → Mechanism-aware → Solution-aware → Product-aware (product page chỉ CHỐT, không educate lại).
- **Launch sequence:** 1 broad page → ads nhiều angle → angle hứa hẹn nhất → build 1 page tailored riêng (= "new angle = new page").
- **Segmented variants, same USP:** Jones Road 4 biến thể (general/mature/minimalist/busy-mom) · HollowSocks gendered — cùng USP, đổi reason nào nhấn theo persona → [[angles]], [[market-awareness]].

## 3rd-party review DOMAIN (nơi listicle SỐNG — tầng hay bị bỏ quên)
Nguồn: [[reviewscout-3rd-party-review-domain-teardown]]. Có **2 tầng "3rd party"**, đừng lẫn:
1. **FB Page** (sender ad chạy TỪ) — authority / creator / community / magazine page → [[personas]], [[dtcmidas-3rd-party-pages-strategy]].
2. **Domain** (website chứa listicle) — site có brand = **ấn phẩm review độc lập** (`reviewscout.org`, `top5-choices.com`), KHÔNG phải store. Halo = *"một bên thứ ba khách quan đã test và xếp mình #1"* > *"brand tự nói mình nhất"*. Mạnh nhất = **chồng cả 2** (magazine page → review domain), không chỗ nào lộ là brand.

**Bộ xương** (teardown reviewscout): site chrome ấn phẩm (logo + nav `Latest Articles`/`Buying Guides`) → Guide → How it works → Benefits → **What to Avoid** → **What to Look For** → **The Best [N]** (ranking #1–#5). 2 cú lừa quyết định:
- **Criteria-funnel** (mục "What to Look For"): viết tiêu chí mua mà #1 *tình cờ* khớp → reader tự qualify TRƯỚC khi thấy ranking. Verbatim: *"we recommend looking for [spec X]… at least [Y] per serving."* = **set thước đo để mình thắng**, không cãi "mình tốt". (= bản landing-page của beat *criteria-setting* trong [[ugly-ads-method]].)
- **Borrowed authority**: citation số mũ trỏ "studies" → giọng khoa học trung lập, ngôi-3 editorial ([[personas]] Institution) ở tầng website.
- **Format-war strawman + decoy ranking** ([[top5choices-seamoss-review-funnel-teardown]], case LIVE 332K visit/mo): trước ranking, hạ **nguyên 1 category** đối thủ ("Gel vs Capsules" + "Negatives of Gel") để ép về format của mình. Ranking dùng **letter grade A+→C-** (vách đá) + #1 **fake-cons** ("sells out" / "only on our site" = scarcity trá hình); **nêu giá đối thủ** (anchor) nhưng **giấu giá mình** tới offer page; đối thủ **không nêu tên thật** (pháp lý + dồn spotlight).

**Phổ trust↔risk:** synthetic review site (top5-choices/reviewscout — rẻ, full control, risk cao) ←→ real magazine affiliate (travelandleisure "best luggage" — đắt, halo thật, risk thấp). Mạnh hơn `reviews.brand.com` ở Tech stack dưới (subdomain vẫn lộ brand; domain riêng thì không).
**Landmine (cao nhất trong các presell):** FTC soi fake-review-site + endorsement không disclose; Google flag *(giả định — chưa có trang [[compliance]] riêng review-domain)*. Bản defensible = analog domain-level của "đừng bịa doctor giả, partner thật" ([[personas]]): **disclosure affiliate rõ + criteria/citation defensible, KHÔNG bịa study** → [[compliance]].
> [!tip] MaxPro ăn liền
> "Top 5 Best Dog Nail Grinders (2026)" trên 1 review-domain riêng, MaxPro #1; ranking 4 đối thủ từ [[maxpro-competitors]]; criteria-funnel set đúng spec MaxPro (3-port cap S/M/L · low-dB · diamond drum · 99-day return) để 4 đối thủ rớt 1-2 tiêu chí. Khen thật 3 pros mỗi bên (luật comparison trên).

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

**Review-DOMAIN builder** ([[top5choices-seamoss-review-funnel-teardown]], verified): top5-choices chạy review page trên **GoHighLevel** (CDN `leadconnectorhq` + `filesafe.space`), offer trên **Shopify + GemPages** (long-form sale page, không PDP trơ), reviews Judge.me, cả 2 sau Cloudflare. Attribution = params `?refdomain=…&funnelid=…&cmc_vid=…` → 1 offer nhận nhiều review-domain, đo cái nào đẻ đơn = **mô hình media-buy/affiliate**. Domain **rời hẳn** rẻ + disposable + giấu brand tốt hơn `reviews.brand.com` (subdomain vẫn lộ brand).
