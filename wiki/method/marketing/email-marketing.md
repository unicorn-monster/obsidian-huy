---
sources: [maxsturtevant-5-email-marketing-hacks, maxwellcopy-email-3m-month-attribution, maxwellcopy-odd-send-times-email, maxwellcopy-founder-email-template-winback, maxwellcopy-12m-email-sms-30days, maxwellcopy-sms-welcome-flow-109k, maxwellcopy-email-headline-angle-framework, maxwellcopy-10-email-lessons-chase-dimond, maxwellcopy-prism-ai-popup-personalization, maxwellcopy-email-hero-section-framework, maxwellcopy-email-deliverability-pre-event, maxwellcopy-reach-beats-segmentation, maxwellcopy-3-text-email-formats, rubiinov-gruns-100m-funnel-teardown, maxwellcopy-email-welcome-flow, maxwellcopy-quiz-popup-welcome-flow, maxwellcopy-email-audit-300k-brand, maxwellcopy-ai-email-copy-briefing]
updated: 2026-07-12
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

## Quiz pop-up → welcome flow segmentation ([[maxwellcopy-quiz-popup-welcome-flow]])
Easy conversion lift most brands skip: brands run quiz pop-ups but do nothing with the answers. Fix in 3 steps:
1. Run a quiz pop-up (AliaPopups = recommended tool, high converting)
2. Tag subscribers by their answer in Klaviyo
3. Customize first 1-2 emails in the welcome flow to match what they chose

Cơ chế = relevance at the moment of highest intent (just subscribed). Ngay cả 1 biến thay đổi (quiz angle vs generic discount angle) trong email #1-2 đã tăng conversion. Tie [[quiz-funnels]] (quiz pop-up = quiz-style pop-up 15-20% opt-in §Gruns) + §Welcome flow 7-email structure (email #1-2 = chỗ can thiệp). → MaxPro: quiz Q1 = "size chó bạn?" hoặc "đã từng làm chảy máu?"; welcome #1 chia nhánh: large-breed → doorway power, "đã chảy máu" → safety/quick-guard angle.

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

## Entertain-first, skim-designed — Gruns ($100M/2yr, [[rubiinov-gruns-100m-funnel-teardown]])
Gruns gửi **3-4 campaign/tuần** (frequency không lạ ở tầm $100M) — khác biệt là **format**, built cho người **skim 8 giây** chứ không đọc 2 phút. *"Entertain first, sell second."*
- **Infographic > copy block:** 1 infographic 5 ingredient + icon + 1 dòng = truyền tải bằng 300 từ nhưng nhanh + nhớ hơn + perceived-production-value cao → value rút được trong 1 lượt lướt.
- **Nút to, trên fold:** CTA thấy được không cần scroll (đẩy xa §hero above-the-fold: đừng để nút đáy email — chỉ % người scroll tới đáy mới click được).
- **Bold/màu = skim-path:** in đậm/đổi màu vài cụm → mắt nhảy tới high-contrast, dựng gist chỉ từ đó.
- **Consistent offer anchor:** offer (52%) xuất hiện gần như mọi email — không phải message chính mà là **context nền quen thuộc** → giảm cognitive effort quyết định mua.
→ MaxPro: infographic "3 lý do chó sợ clipper" thay đoạn văn; nút "grind at home" trên fold; anchor 99-day return mọi send. Bổ sung §6-step hero ở tầng "cả email đọc trong 8 giây".

---
**Áp dụng MaxPro / pet store ($100k goal):** ưu tiên #1 (mystery discount abandonment) vì có data + dùng Klaviyo sẵn; **#6 founder winback** = easy-win tuần này trên list chưa-mua (chạy bằng skill `plain-text-email`); **SMS welcome +12%** → setup bên [[sms-flows]], mở khi list ~500+ subscriber; #3/#4 là format swipe cho broadcast; #2/#5 là free tweak (#2 giờ 2-nguồn). Subscription (onboarding / metrics / rebill) để DÀNH → [[subscription-retention]]. Tất cả thuộc lever **owned/retention** — bổ trợ, không thay paid creative của [[ugly-ads-method]].

## Welcome flow — setup + 7-email structure ([[maxwellcopy-email-welcome-flow]])

**Setup TRƯỚC khi động vào bất kỳ email nào** (nếu sai ở đây, email viết tốt đến đâu cũng vô dụng):
- Turn double opt-in **off**
- Fire email #1 **ngay lúc signup** (không delay)
- Time delay giữa các email: **1-2 ngày**
- Nhắc discount **trong mọi email** trong flow

**7 email, mỗi email 1 job:**

| Email | Job | Ghi chú |
|---|---|---|
| **#1 Welcome** | Giao discount + link ngay | Code + button ở top, 1 dòng về brand. Không hơn. |
| **#2–5 Trust builders** | Top of mind khi khách đang so sánh đối thủ | Pick 3-4: story · FAQ · how it works · ingredients · social proof · differentiation · bestsellers. Nhắc discount mỗi email. |
| **#6 Last chance** | Pure urgency — không gì khác | "Code sắp hết hạn" + button. Simple nhất thường ăn nhất. |
| **#7 Founder text** | Win back người còn do dự | Plain-text từ founder: "Saw you didn't use your code, extended 24h, reply nếu có câu hỏi." Đọc như tin nhắn người thật → consistently top converter trong flow. |

Email #7 cùng tư duy với §6 (founder winback plain-text) — raw/human beats designed. Tie [[offer-and-cta]] (FOMO ở #6) + [[personas]] (founder presence = trust anchor ở #7).

**Compounding tactic:** lấy campaign đang rips, thêm 1 dòng nhắc welcome discount, swap vào vị trí email yếu nhất trong flow → flow tự mạnh lên không viết email mới. Cùng tinh thần #5 (resend top performer) + Chase Dimond §10 lessons (swap campaign winner vào flow).

→ MaxPro: nếu chưa có welcome flow, đây là setup #1 trước mọi tactic khác. Email #1: giao code + "quiet grinder không làm chó đau"; #2-4: story + FAQ noise + testimonials; #6: "code hết 24h"; #7: founder note tay.

## AI trong email — 3 vai trò đúng ([[maxwellcopy-ai-email-copy-briefing]])
maxwellcopy (100+ email clients): đừng "fire team và giao cho AI." Họ thử → results giảm, clients churn. 3 chỗ AI thực sự work:

1. **Analysis** — dump số liệu flow/campaign vào AI, để nó flag broken + rank cơ hội theo dollar impact. "Catches leaks you'd never find scrolling through Klaviyo yourself." → chạy tối thiểu hàng tháng.
2. **Campaign calendar** — AI map cả tháng: send volume đúng, balance educational/social proof/sales, bắt cả holiday bỏ sót. **Từ khoá: TRAINED** — raw ChatGPT quá generic; phải feed actual past campaign data + real framework trước.
3. **Copy briefing (quan trọng nhất)** — không phải prompt "write me an email." Là context, context, context: knowledge + brief + brand voice nạp vào AI → output dùng được. Copywriter vẫn oversee vì AI chưa đủ để generate-and-ship. Maxwellcopy xây cả system thành Claude skill: không viết cho tới khi có đủ context → QA output vs brief → self-check for hallucination.

**Rule:** AI = analysis · calendar · briefing. Human = oversight, tone, final call. Đừng thay thế — augment.

→ MaxPro: bắt đầu bằng vai trò 1 (analysis) — dump Klaviyo campaign results + flow metrics hàng tháng vào Claude, yêu cầu rank top-3 cơ hội theo estimated revenue impact. Vai trò 3 (copy briefing) = framework [[lp-copy-prompts]] đang dùng, extend sang email brief.

## 3 gap audit phổ biến — brand 35% rev từ email vẫn rỉ tiền ([[maxwellcopy-email-audit-300k-brand]])
Brand $300k/tháng, 35% store rev từ email — "looks great on the surface" nhưng thực tế để lại tens of thousands of $$ mỗi tháng. 3 gap hay gặp:

1. **Pop-up offer chưa frame đúng** → xem §popup framing: loss-aversion ("bạn đã có X%") + quiz-first micro-commitment + specificity số lẻ (52%, không 50%). Cross-link [[quiz-funnels]] §quiz-style pop-up 15-20%.
2. **Abandonment flows chưa cập nhật tactics 2026** → xem §1 mystery discount (dữ liệu Klaviyo A/B, curiosity gap ~2× click), chia cart value nhỏ/lớn (Chase Dimond §10 lessons).
3. **Retention flows và campaigns thiếu chiều sâu** → xem §5 (resend top performer) + §8 headline angle framework (angle = lever lớn hơn copy) + §entertain-first Gruns (infographic, bold/màu skim-path, consistent offer anchor).

> [!note] Diagnostic nhanh: nếu email account "trông ổn" (open rate 30%+, click rate bình thường) nhưng rev/email thấp — check 3 gap này trước. Đa số fix không cần viết campaign mới: đổi frame pop-up + swap mystery discount vào abandonment + rotate format hero. Tie §Reach >> segmentation (đừng over-segment sớm trước khi fix nền).
