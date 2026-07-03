---
sources: [maxsturtevant-5-email-marketing-hacks, maxwellcopy-email-3m-month-attribution, maxwellcopy-odd-send-times-email, maxwellcopy-founder-email-template-winback, maxwellcopy-12m-email-sms-30days, maxwellcopy-sms-welcome-flow-109k, maxwellcopy-email-headline-angle-framework, maxwellcopy-10-email-lessons-chase-dimond, maxwellcopy-prism-ai-popup-personalization, maxwellcopy-email-hero-section-framework, maxwellcopy-email-deliverability-pre-event, maxwellcopy-reach-beats-segmentation, maxwellcopy-3-text-email-formats]
updated: 2026-07-03
---

# Email marketing — owned-channel / retention tactics

Kênh **owned** (Klaviyo), khác máu với paid-acquisition ([[media-buying]], [[native-ads]]): không trả CPM, đánh vào list đã có. Trang này gom tactic retention/flow.

> [!info] Trang này còn THUẦN email tactic — 3 cụm đã tách (2026-07-03)
> **SMS** (setup 6 flow + testimonial format + scale proof 77%/+12%) → [[sms-flows]] · **Subscription** (onboarding 21-day / churn / Day-30 rebill / 4 metric / 10 driver LTV) → [[subscription-retention]] · **Thuê & giám sát agency** (red-flags 21 điểm + comms cadence) → [[agency-ops]].

Nguồn #1: [[maxsturtevant-5-email-marketing-hacks]] — Max Sturtevant (claim $57M/tháng từ email = flex uy tín, **chưa verify**). 5 hack đang chạy, xếp theo độ mạnh bằng chứng.

## 1. Mystery discount > flat discount (abandonment flow) ⭐ có data
Trong cart/checkout abandonment, thay vì lộ "−10%", nói: *"bạn có 1 **mystery discount** trong giỏ — click để xem."* Khách "1 click away khỏi thấy offer" → tò mò → vào giỏ → mua. A/B verbatim (screenshot Klaviyo, flow "order ready to ship"):

| Metric | Flat discount | Mystery | Δ |
|---|---|---|---|
| Open | 41.7% | 49.1% | +7.4pt |
| Click | 3.2% | **6.7%** | **~2×** |
| Placed order | 2.4% ($2.36K) | **3.5% ($2.98K)** | **~+46%** |

Cơ chế = **curiosity gap**, cùng họ với [[offer-and-cta]] (deny-the-sale, *"just go look at the price"*). Discount phẳng = không lý do click; mystery = phải click mới biết. → **test được ngay trên MaxPro abandonment flow** (Klaviyo).

## 2. Gửi giờ "lẻ" (odd send times) ✓✓ 2 nguồn xác nhận
Đừng gửi 11:00 — mọi brand hẹn giờ tròn → email bị chôn cùng lúc. Gửi **11:17 / 1:09am / 5:08pm** (giờ lẻ) để email nổi **một mình** trong inbox thay vì giành chú ý với 4 brand khác cùng phút. Chi phí 0, chỉ đổi schedule. *(giả định: hiệu lực giảm khi nhiều người bắt chước; lẻ-hoá là arbitrage tạm thời.)* **Confirm độc lập** bởi [[maxwellcopy-odd-send-times-email]] (maxwellcopy, $1M+/mo brands) — pull trong Hiro analytics, odd-times **consistently outperform** flat hours. 2 chuyên gia khác nhau cùng chốt = tin cậy cao, **test ngay**.

## 3. Pattern interrupt "1 banner" — email không-giống-email
Email siêu tối giản, **1 banner duy nhất, không trông giống email**. Best performer khi resend. Ví dụ swipe: brand **Willie's Remedy** dựng email giả **màn hình cuộc gọi đến iPhone** ("Weekend is calling… / Slide to answer" + ảnh sản phẩm). Liên hệ [[hooks]] — pattern-interrupt visual là scroll-stop trong inbox y như trong feed.

## 4. SMS-style email — text trơn như tin nhắn
"Người ta lười đọc" → email **plain-text ngắn như SMS** nổi bật hơn email thiết kế. Ví dụ swipe: **Breatheeze** subject "Try Risk Free", body 1 dòng *"Max, by the way, we offer a full money-back guarantee… Try risk free >> — Manny, Founder."* Giống mail cá nhân từ founder → cảm giác 1-1, không "blast". Cùng tinh thần raw/under-designed của [[ugly-ads-method]] + founder-template ở §6 dưới.

## 5. Copy-paste top performer (resend)
Lấy nguyên email đã "crush" 2 tháng trước, **resend lại** — "worked once → work again, người ta quên rồi". Resend nhiều lần liên tiếp vẫn ăn. Lazy nhưng hiệu quả; là cách tái dùng winner thay vì luôn đẻ mới (đối trọng với áp lực "flood ad mới" bên [[creative-testing]]).

---

# Nguồn #2: maxwellcopy ($3M/mo attributed, $1M+/mo brands)

[[maxwellcopy-email-3m-month-attribution]] — Max (maxwellcopy) chạy email cho brand attribute **>$3M/tháng** (lấy với grain of salt — last-click email over-attribute). Operating cadence đằng sau con số: **AB-test campaign điên cuồng · 5x campaign/tuần · update flow hàng tháng · 5+ phần mềm partner chạy song song**. Bài học khung: kết quả email = **operational intensity**, không phải 1 "hack" — số hack dưới là tactic, cadence này là cái biến chúng thành tiền.

## 6. Founder plain-text winback — template copy-paste ⭐ easy win
[[maxwellcopy-founder-email-template-winback]]: list ai cũng có **hàng nghìn người** đăng ký, nhận welcome-offer, **chưa mua bao giờ**. Gửi 1 email **plain-text từ founder** (không thiết kế) — vì không trông giống marketing nên được mở + đọc khác hẳn campaign designed. Cùng họ với #4 SMS-style (raw, 1-1). Cấu trúc template (chạy được ở welcome / abandoned-cart / winback / campaign):
- Sender `[Founder] | [Brand]` · Subject *"Hey, quick thought..."*
- Lời chào người-thật → cảm ơn đã ghé → **origin story 1-2 câu** (*vì sao tôi lập brand* — đánh đúng "[specific problem]") → "no pressure" → **3 USP** (3 bullet) → **store credit $XX, code, hết hạn 24h** → link bestsellers → P.S. *"hit reply, tôi tự đọc"*.
- Cơ chế = đảo "looks like an ad" của [[personas]]/[[ugly-ads-method]] sang email: under-designed = trust. → MaxPro: founder kể vì sao ghét cảnh chó chảy máu vì clipper, 3 lý do khách yêu MaxPro (quiet / no-cut-quick / 99-day company-paid return [[compliance]]), store credit 24h. Dùng skill `plain-text-email` để viết.

## Subscription retention → trang riêng
Cụm FOR-SUBS (21-day onboarding 2-phase với SMS D0/D3/D7 · 5 nguyên tắc onboarding · 4 metric SUB-1 · Day-30 rebill fix + billing-A/B −33% cancel · brand teardown 13 điểm · 10 driver LTV) đã tách sang **[[subscription-retention]]** (2026-07-03). Chỉ áp khi MaxPro mở dòng consumable/sub; 3 driver dùng được ngay (education / identity / unboxing) — xem bảng cuối trang đó.

## Headline angle > copy — 4-step framework ([[maxwellcopy-email-headline-angle-framework]])
**Unwritten rule:** đổi headline angle, giữ nguyên body → double/triple revenue. Người không đọc copy — nhưng angle đúng tạo buying intent. Framework tìm "banger angle":
1. **Boring benefit** → *"Helps with sleep."*
2. **Emotional pain behind it** → *"Waking up at 3am every night exhausted."*
3. **Tension** → *"Wrong supplementation may be why you wake up at 3am."*
4. **Special sauce** → *"The source of your exhaustion lies in your medicine cabinet."*

Banger angle *"pokes you in the chest"*; weak angle = fact without intent. MaxPro ví dụ: "Grinder êm cho chó" (boring) → "Hôm qua lại bỏ cuộc giữa chừng vì nó giãy" (pain) → "Công cụ cắt móng bạn dùng có thể là vấn đề" (tension) → "Có 1 grinder chó không sợ tiếng — và nó chưa ở nhà bạn" (special sauce). Tie [[angles]] (emotional pain layer) + #4 SMS-style email (đọc như người nói, không như brand).

## 10 lesson từ $250M email — Chase Dimond ([[maxwellcopy-10-email-lessons-chase-dimond]])
Insight cao độ nghịch-lý (từ $250M+ ecom email marketing):
- **Welcome flow: 4-6 email, không 12.** Quá 12 = vô nghĩa; mở bằng core points, không "welcome to the family."
- **Đừng rewrite hoàn toàn flow yếu.** Lấy campaign đang crush, add welcome code, slot vào — ăn hơn viết mới.
- **Highest lever = offer, không copy.** Test percent-off vs dollar-off vs free gift → có thể double conversion; copy tweak thì không.
- **RPR > open rate.** Apple inflates open rate → revenue per recipient là số duy nhất chứng minh campaign work thật. Tie [[maxwellcopy-12m-email-sms-30days]] (attribution discipline).
- **Abandonment flow: split by cart value.** Cart nhỏ = reminder; cart lớn có thể cần discount (bảo vệ margin theo threshold).
- **Replenishment email: theo rebuy cycle thật, không "day 30" round.** Gửi khi người ta thực sự rebuy — đa số brand đang đoán. (Sub context → [[subscription-retention]] driver 7.)
- **AI tốt nhất trong retention = VOC mining.** Đào review + support ticket lấy exact language khách dùng, không phải "viết email". Tie [[creative-brief]] (VOC-mining prompt).

## Popup personalization at scale — Prism AI ([[maxwellcopy-prism-ai-popup-personalization]])
Popup đọc context visitor (first-visit / returning / gender / segment) → rebuild nội dung tương ứng → machine học cái nào convert → serve nhiều hơn. Sofa Club (ecom): **+21% email signups, +15% SMS, +17% attributed orders** từ cùng 1 popup vị trí. Cơ chế tương tự quiz funnel ([[quiz-funnels]]) — personalization tăng relevance → conversion. → MaxPro trigger: khi list ~1k+ subscriber, test 2 variant popup (first-visit vs returning customer) trước khi đầu tư AI. Khởi đầu bằng Klaviyo conditional block hoặc Privy segment-based display.

## Agency (thuê / giám sát) → trang riêng
Red-flags 21 điểm + communication cadence chuẩn → **[[agency-ops]]** (2026-07-03) — ops-discipline khi thuê ngoài, không phải email tactic.

## Email hero design — 6-step framework ([[maxwellcopy-email-hero-section-framework]])
75% của design effort nên nằm ở hero section — thứ duy nhất reader thấy trước khi scroll quyết định click hay không.

1. **Above-the-fold first** — headline rõ + 1-2 dòng support + nút hiển thị + graphic mạnh, tất cả trước scroll. Goal: không cần scroll để hiểu offer.
2. **Image sells, không phải minh hoạ** — image drive performance hơn mọi thứ khác trong hero. Đừng drop product shot thẳng — match image vào thứ *actually sells the product* (outcome, không object).
3. **Background sau text phải sạch** — busy image sau copy = friction đọc. Dùng AI image extender để thêm không gian sạch phía trên, hoặc add contrast đằng sau text. Không đặt mặt người sau copy.
4. **Shape the text** — không để orphan word lẻ loi dòng cuối. Căn như reverse-triangle dẫn mắt xuống nút. Đáng chỉnh word-wrap.
5. **Text phải POP** — mix font size, weight, màu để tạo visual hierarchy. Hero phẳng đồng đều = skimmed past.
6. **Xoay format hero** — cùng layout headline/body/button mỗi email = feel templated = open rate giảm dần. Variant: image trước → headline phía dưới · testimonial stack phía trên headline · infographic mở đầu · full-bleed image với text overlay. Xoay ít nhất mỗi 3-4 sends.

→ MaxPro: hero = ảnh raw paw hoặc "couch grind" + benefit headline reverse-triangle + nút ngay dưới. Rotate: cứ 3 send thứ nhất dùng review stack phía trên headline.

## Pre-event deliverability warmup ([[maxwellcopy-email-deliverability-pre-event]])
maxwellcopy tips (2026-06-30): before a big promotional send (BFCM, product launch, sale), send a **deliberate "smart" email** to prime deliverability first — primes ISP signals (opens, clicks) in the days before → inbox placement improves for the main event. Concept only (tweet teases, no mechanics shared). Standard interpretation: send a high-value, easy-to-engage email 2-3 days before to warm the list → algorithms treat your next send as trusted sender.

→ MaxPro: before BFCM or a major creative push, run a re-engagement send (founder note, unboxing video clip, free grooming tip) to prime the list. No cost, upside = better placement on the big day.

## Reach >> segmentation — 9-figure data ([[maxwellcopy-reach-beats-segmentation]]) ⭐ contrarian
maxwellcopy hot take sau khi audit brand $10M/mo (9-figure): *"most email/sms segmentation is bullshit."*

**Data point:** brand 2M wide-engaged list, gửi 3x/tuần → **50-100% more revenue** trên campaign wide so với campaign segmented (list nhỏ hơn gửi 4 ngày còn lại). Không có sense nào để over-segment khi data nói ngược.

**Rule:** *"As long as your list growth is beating your unsubscribes 3:1, keep sending wide and hit your big engaged list often."* Chỉ sau khi đã đạt **benchmark daily sends** mới layer thêm segmented/personalized campaign (không thay thế — bổ sung).

**Diagnosis:** over-segmentation often = sophistication theater, không phải revenue optimization. Data không quan tâm setup trông clever đến đâu. *"Sometimes the simple, 'retarded' shit is the one that makes them most money."*

**Hàm ý MaxPro:** đừng chia nhỏ list sớm. Ưu tiên list growth (list growth 3:1 > unsub trước) + gửi wide với cadence đều. Segment sau khi nền đã vững — không phải lúc mới có 200 subscriber. Tie [[maxwellcopy-sms-welcome-flow-109k]] (SMS welcome = reach người không mở email, không phải segment sâu hơn).

## Text email 3-format rotation — $1.9M từ $7.3M brand ([[maxwellcopy-3-text-email-formats]])
Brand apparel $7.3M/tháng, $1.9M từ email — phần lớn là **plain text email**, nhưng KHÔNG chỉ 1 format. Lỗi phổ biến: chọn 1 kiểu text email rồi lặp mãi → fatigue. Luân phiên 3 format:

| Format | Độ dài | Cấu trúc | Dùng cho |
|---|---|---|---|
| **Short / SMS-style** | <30 từ, 2 câu + link | — | Restock, flash sale, urgency thuần túy |
| **Medium** | Trung bình | Short personal intro → tight body (story/case) → 1 CTA | Founder message, personal rec, education intimate |
| **Long-form DR** | Dài | Story → tension → mỗi dòng kéo vào dòng tiếp | High-AOV product, case phải build the case trước khi ask |

**Nguyên tắc hoạt động (và vì sao khác §4 SMS-style ở trên):** §4 là "email trông như SMS" = *format* visual. 3-format này là về *độ dài + cấu trúc* — đều là plain text, nhưng short/medium/long mang feeling khác nhau trong inbox và phục vụ mục tiêu khác nhau. Không phải 3 cách viết khác; là 3 tình huống khác nhau → chọn đúng format theo job.

→ MaxPro: rotate ngay trên list hiện tại. Short = restock notification / flash sale; Medium = founder "why I built this" + dog story; Long = DR storytelling cho cold-list nurture hoặc win-back. Tie §6 (founder plain-text = dạng "Medium" hoặc "Long").

---
**Áp dụng MaxPro / pet store ($100k goal):** ưu tiên #1 (mystery discount abandonment) vì có data + dùng Klaviyo sẵn; **#6 founder winback** = easy-win tuần này trên list chưa-mua (chạy bằng skill `plain-text-email`); **SMS welcome +12%** → setup bên [[sms-flows]], mở khi list ~500+ subscriber; #3/#4 là format swipe cho broadcast; #2/#5 là free tweak (#2 giờ 2-nguồn). Subscription (onboarding / metrics / rebill) để DÀNH → [[subscription-retention]]. Tất cả thuộc lever **owned/retention** — bổ trợ, không thay paid creative của [[ugly-ads-method]].
