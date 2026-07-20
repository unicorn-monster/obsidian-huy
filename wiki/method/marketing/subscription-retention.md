---
sources: [maxwellcopy-subscription-brand-teardown, maxwellcopy-subscription-4-metrics-track, maxwellcopy-subscription-onboarding-churn, maxwellcopy-subscriber-onboarding-21days, maxwellcopy-day30-rebill-klaviyo-reframe, maxwellcopy-billing-email-ab-test-cancel, maxwellcopy-retention-10-drivers-ltv, scalabilityschool-50-angle-strategy, maxwellcopy-founder-video-cancel-flow, maxwellcopy-ai-shifts-retention-value, maxwellcopy-creatine-survey-ltv-unlock, maxwellcopy-subscription-11-rules, maxwellcopy-billing-reminder-ab-test, maxwellcopy-subscription-streak-tracker, maxwellcopy-agency-stats-june-2026, maxwellcopy-welltv-ltv-retention-analytics, maxwellcopy-zaymo-in-email-subscription-churn, maxwellcopy-billing-reminder-good-bad]
updated: 2026-07-20
---

# Subscription retention — onboarding / churn / rebill (FOR SUBS)

Tách từ [[email-marketing]] (2026-07-03) — cụm subscription đủ đứng riêng 1 trang. Nguồn chính: maxwellcopy (250+ sub brands audited). Kênh thực thi vẫn là email/SMS ([[email-marketing]], [[sms-flows]]); trang này = lớp **retention cho mô hình subscription**.

> [!warning] MaxPro CHƯA phải sub brand
> Grinder = tool vật-lý 1 lần mua. Trang này để DÀNH cho consumable pet (bit mài thay, balm, supplement) hoặc khi mở sub. Đừng ép sub lên món one-time. Ngoại lệ dùng được ngay cả khi chưa có sub: driver **3 / 4 / 9** trong bảng 10-driver cuối trang.

## Operational reality — đọc TRƯỚC khi mở sub ([[maxwellcopy-subscription-brand-teardown]])
Subscription brand "trông cute cho đến khi bạn nhìn inside." Pain points hay gặp nhất khi audit: unprofitable cho đến lần mua thứ 3+, gọi ROAS 0.9x là win, không thể lấy clean cohort data trong 6+ tháng đầu, customer service nightmare từ rebill complaints, temptation grey-hat/black-hat mỗi ngày, 20+ softwares cùng lúc, talent cực khó tìm. *"Most of these brands are LARPing success."* → Onboarding + billing hygiene (dưới) phải vào từ ngày 1, không phải sau.

## 4 metric track (SUB-1) ([[maxwellcopy-subscription-4-metrics-track]])
1. **First-order subscription take-rate** — daily-use (AG1) target **70-80%**, not-everyday **~50%**. Sub-first-order LTV **gấp 2** one-time → metric chính để tối ưu (sub-first offer + PDP). NHƯNG track CAC + contribution-margin LTV để chắc payback (first purchase đắt hơn).
2. **Order-2/4/6 retention** (đo theo *order* không theo subscriber — chỉ tiền thật vào túi): O2 (rebill đầu) **60-70%** · O4 **50%+** · O6 **30-40%**. Drop lớn nhất ở đâu = chỗ focus.
3. **Billing-reminder cancellations** → §Day-30 rebill dưới.
4. **Cancellation-flow recovery** target **15-20%+** — đừng để cancel trơn; hỏi lý do + winback timely. **Founder message/video lúc cancel convert hơn mọi automated winback** (cùng tinh thần founder plain-text [[email-marketing]] §6). Case cụ thể ([[maxwellcopy-founder-video-cancel-flow]]): thêm 1 founder video vào cancel splash page → **churn recovery rate TĂNG 3×** (3× target thông thường 15-20%) — chỉ bằng cách "put a face to the name when someone went to cancel." Cơ chế: người đang cancel đang cancel "brand" vô hình; video founder làm họ cancel 1 người thật → threshold tăng vọt.

## Onboarding sequence — đòn chống churn trước khi xảy ra ([[maxwellcopy-subscription-onboarding-churn]])
**#1 driver churn:** khách có quá nhiều sản phẩm tồn kho **hoặc** ngừng dùng. **#1 lever giảm churn:** onboarding email/SMS sequence đúng cách. Hầu hết brand đốt 30 ngày đầu push upsell → retention tệ.

**5 nguyên tắc (từ best-in-class brands):**
1. **7 ngày đầu = tất cả.** Hầu hết quyết định churn xảy ra trước ngày 7. Mỗi email trong D1-7 đẩy **1 việc: consumption habit** — không upsell, không educate về benefit dài hạn, chỉ dùng hàng ngày.
2. **Hit "why bother" head-on.** Khách tự hỏi "mình có mua đúng không?" → reassure bằng: social proof từ người có cùng nghi ngờ + founder story thật + science back product.
3. **Set expectation trước.** Consumable thường 30-60+ ngày mới thấy kết quả. Không set frame ngay → cancel trước khi thấy gì. Nói thẳng "ngày bao nhiêu bạn sẽ thấy gì".
4. **Không upsell trong onboarding.** Mistake #2 phổ biến nhất: push upgrade/bundle/referral trong 30 ngày đầu. Build habit first → revenue follows retention.
5. **Cadence timeline:** go hard D1-7 → educate D8-30 → ease off sau đó.

## 21-day subscriber onboarding — 2-phase framework ([[maxwellcopy-subscriber-onboarding-21days]]) ⭐
*"This is the first subscription I actually didn't cancel."* — customer maxwellcopy client. Framework 21 ngày, 2 phase, chi tiết hoá 5 nguyên tắc trên (cùng nguồn maxwellcopy, khác post):

**Phase 1 — TRƯỚC khi hàng tới (4-10 ngày, daily/every other day email):**
Khách đã mua nhưng chưa có sản phẩm → còn hoài nghi nhẹ + excited. Job: làm họ cảm thấy đúng khi mua.
- Confirm họ ra quyết định đúng (không nghi ngờ)
- Kill skepticism bằng testimonials, social proof, founder credibility
- **Pre-frame timeline:** ép cam kết 90 ngày+ TRƯỚC khi trải nghiệm — không frame này → cancel vì "chưa thấy gì" sau 2 tuần

**Phase 2 — SAU khi nhận hàng (4-10 ngày, daily/every other day email):**
Job đảo chiều: không còn là convince nữa — là build habit + belonging.
- Dạy cách dùng đúng (đừng assume họ tự biết)
- Gắn vào thói quen sẵn có (morning coffee, brushing teeth) — habit-stacking
- Nhắc họ là cộng đồng: "you're now part of the people who..."

**SMS layer — 3 moment cao-impact** (setup flow → [[sms-flows]]):
1. **Delivery day** — education (cách dùng, kỳ vọng đúng)
2. **Day 3 check-in** — are they using it?
3. **Day 7 nudge** — recommit TRƯỚC khi rebill đầu hit

Tie [[offer-and-cta]] churn-as-value-gap.

## Daily usage streak tracker — gamified habit + churn defense ([[maxwellcopy-subscription-streak-tracker]])
Root cause: *"Customers having too much product is what kills most subscriptions. People forget to take it, so it piles up, and they cancel."* — maxwellcopy (2026-07-12). Cùng driver #1 churn trong §onboarding (quá nhiều hàng tồn + không dùng).

**Cơ chế:** build custom tracker — khách log in hàng ngày, check off "tôi đã dùng hôm nay." Streak reset nếu bỏ 1 ngày. Reach milestone → reward unlock.

**Tier structure mẫu:**

| Milestone | Reward |
|---|---|
| 50% of days | Small free gift in next order |
| 75% | Bigger offer |
| 90% | Even bigger offer |
| 100% | Premium reward |

**Tại sao hoạt động:** không phải ai cũng log in hàng ngày — nhưng cơ chế này drill vào nhận thức **1 việc duy nhất giữ sub: dùng sản phẩm mỗi ngày.** Streak reset + tiered reward tạo loss-aversion + milestone-pull song song.

**Pair với:** daily reminder email → recovery email (khi streak sắp reset) → celebration email (khi đạt milestone) = retention engine toàn diện. Tie [[sms-flows]] D3/D7 nudge (§21-day onboarding SMS layer).

→ MaxPro: chưa phải sub brand — dùng được khi mở consumable (bits/balm). **Trước tracker:** build habit-survey 3 câu trước (§survey → habit → LTV). Tie driver #3 trong §10 driver LTV (education + habit building).

## Day-30 rebill = highest churn day — Klaviyo reframe fix ([[maxwellcopy-day30-rebill-klaviyo-reframe]]) ⭐
*"The HIGHEST CHURN day for almost any subscription brand is day 30."* Đây là ngày rebill đầu tiên — khách thấy charge, stomach drops, cancel ngay. Trigger: **default Shopify order confirmation email** — bare, no framing, no value.

**Fix (Shopify Plus brands):**
1. Tắt default Shopify order confirmation email
2. Rebuild trong **Klaviyo** với framing khác: vẫn confirm order → nhưng **reaffirm product benefits + remind what subscription includes** + trông như email brand thật (không phải transactional)
3. Khách vẫn bị charge — nhưng **không rage-cancel** vì context đã đổi

**Billing-reminder A/B = −33% cancel (SUB-2, [[maxwellcopy-billing-email-ab-test-cancel]], confirmed [[maxwellcopy-billing-reminder-ab-test]]):** email "bạn sắp bị charge, cancel ở đây" = **driver churn lớn nhất**. AB-test giảm cancel **−33%** — xác nhận thêm bởi source mới (2026-07-09): *"Every brand we come into, we're able to significantly decrease Day 27 cancellations just by optimizing this one message."* Luật: customize email **trong Klaviyo** (không trong subscription platform) · KHÔNG transactional — **reaffirm benefit** · **đừng đặt nút cancel cao** trong email. Cơ chế = psych-of-framing (cùng họ mystery-discount [[email-marketing]] §1 — cách *nói* đổi outcome, không phải cái offer). → Khi có subscription: đây là tuần-1 quick win trước khi build bất kỳ retention tactic nào khác.

**Good vs Bad billing reminder — framework cụ thể ([[maxwellcopy-billing-reminder-good-bad]]):**

| | Bad | Good |
|---|---|---|
| **Mở đầu** | "Bạn sắp bị charge $XX" | Frame đơn hàng như phần thói quen của họ, làm họ excited |
| **Nội dung** | Không nhắc lại lý do họ subscribe | Reinforces perks của subscriber |
| **CTA** | Nút Cancel nổi | **Skip / Delay** buttons — họ lùi lại thay vì cancel |
| **Format** | Email giống nhau cho mọi sản phẩm + mọi order | Cá nhân hoá theo sản phẩm + order cụ thể |

Insight thực thi: **thay nút Cancel thành Skip + Delay** là thay đổi đơn giản nhất, không cần đổi copy. Người muốn lùi lại (chưa hết hàng) sẽ dùng Delay — không phải Cancel. Gộp với §Day-30 reframe: cùng logic "đừng để nút cancel cao" nhưng đây là giải pháp alternative rõ ràng hơn.

## Quarterly/90-day sub — audit margin TRƯỚC khi defer revenue; seed ở PDP không phải lander ([[scalabilityschool-50-angle-strategy]])
Zach/Hollow, 2 nuance thực chiến:
- **Đừng mặc định làm quarterly/90-day sub.** Trước khi show gói 90-ngày, **audit contribution-margin theo THÁNG + payback period + khả năng scale nhanh hơn nếu KHÔNG defer revenue.** Prepay quý khoá LTV nhưng defer cash → chậm tái đầu tư ad. Với Hollow "just doesn't make sense"; vài brand justify được — quyết bằng SỐ, không "ai cũng làm". → sharpen driver #6 (offer align consumption pattern).
- **90-day seeding = PDP element, KHÔNG phải lander.** Gieo mầm "day 3 cảm nhận X, nhưng month 3-6-12 mới là impact thật" hợp trên PDP/onboarding (§Phase-1 pre-frame timeline trên), NHƯNG bắt cold commit 90 ngày *trước khi thấy giá* trên lander = phản tác dụng ("not as ideal"). Ngoại lệ: funnel **one-shot homepage all-in-one** (Gruns cũ đổ hết về gruns.co: content→learn→shop; Primal Queen) — khi education+offer+seeding sống chung 1 trải nghiệm thì seed 90-ngày mới hợp; tách lander riêng thì **bỏ content đó ra** (Hollow test, no impact). Kiến trúc one-shot-vs-lander: [[funnel-and-landing]].

## 10 driver thực sự tăng 6-month LTV — khung tổng ([[maxwellcopy-retention-10-drivers-ltv]])
> "That doesn't happen from AB testing."

10 lever thực sự dịch chuyển retention — xếp từ brand-level xuống list-hygiene:

| # | Driver | Ghi chú |
|---|---|---|
| 1 | **New product drops / flavors / variants** | "Something to look forward to" — expectation tương lai giữ sub |
| 2 | **Offers sáng tạo** (không phải % flat) | Tie [[offer-and-cta]] — perceived value > discount depth |
| 3 | **Onboarding + education đúng cách** | Cực kỳ quan trọng; khách dùng sai → không thấy kết quả → churn. Xem §Onboarding trên |
| 4 | **Identity-fit branding** (AG1-style) | Brand trở thành một phần *con người họ* → không cancel vì xấu hổ. Tie [[personas]] voice-signature |
| 5 | **Billing/order comms tối ưu cancel** | "Unsexy stuff most brands ignore." Tie §Day-30/SUB-2 |
| 6 | **Offer align consumption pattern** | Đừng push gói 90 ngày cho người rebill 30 ngày. Tie §SUB-1 |
| 7 | **Replenishment reminder theo data thật** | "Timing > messaging." Chase Dimond ([[email-marketing]] §10 lessons): theo rebuy cycle thật, không "day 30" round |
| 8 | **Free gift / incentive mỗi lần mua thêm** | Phần thưởng phải *thực sự tốt* — fake gift = đốt trust |
| 9 | **Unboxing experience** (Apple-level) | First impression vật lý tạo identity-anchor → tie driver #4 |
| 10 | **Clean, active email + SMS list** | Hygiene bảo vệ deliverability; tie [[sms-flows]] scale proof |

**Điểm cốt:** A/B testing tối ưu margin trên nền đã tốt — nhưng nếu sản phẩm dùng sai, offer không align, onboarding thiếu, list dơ → A/B test chỉ polish cái đang cháy. 10 driver này = nền. → MaxPro: driver 3 (education "cách dùng đúng để không đau") + driver 4 (identity "pet parent chuyên nghiệp") + driver 9 (unboxing video/photo) là quick-win ngay cả khi CHƯA có subscription.

## Founder video placement — 4 điểm trong lifecycle ([[maxwellcopy-founder-video-cancel-flow]])
*"Everyone's leaning hard into founder-led content on the front end, but almost NOBODY is using it anywhere else."*

Founder video không chỉ cho ads. 4 điểm high-impact trong post-purchase lifecycle:
1. **Post-purchase upsell** — ngay sau checkout, trước khi khách về trang confirm
2. **Onboarding thank-you** — email hoặc page sau D1 (tie [[maxwellcopy-subscriber-onboarding-21days]] Phase 1)
3. **New product launch hype page** — founder explain why this product, build anticipation
4. **Cancel splash page** ⭐ — quan trọng nhất. Ngay khi click cancel, founder video xuất hiện TRƯỚC form cancel. **Cơ chế 3× recovery:** khách cancel "brand" dễ; khách cancel "người" (founder thật trên camera) khó hơn nhiều — threshold tâm lý tăng vọt.

→ MaxPro (khi mở sub): build founder video 60-90s 1 lần → deploy ở tất cả 4 điểm. ROI cao nhất của cùng 1 asset. Tie [[funnel-and-landing]] §trust-recession (founder presence = trust-builder mạnh nhất) + [[email-marketing]] §6 (founder plain-text cùng tư duy).

## Survey → habit discovery → LTV unlock ([[maxwellcopy-creatine-survey-ltv-unlock]]) ⭐
maxwellcopy: *"The biggest LTV unlocks come from literally ASKING YOUR CUSTOMERS instead of guessing what they want."*

**Case creatine brand:** churn cao vì khách không dùng hàng ngày → không thấy kết quả → hủy sub. Không đoán nguyên nhân — **chạy 3-câu survey:**
1. What results are you seeing?
2. How long did it take and how happy are you?
3. **How do you actually take the product every day?**

Kết quả khi plug vào customer data: khách uống creatine **cùng cà phê sáng** có LTV **50%+ cao hơn** phần còn lại. Logic rõ ràng: coffee = daily habit đã có → creatine bám vào habit đó → dùng đều → thấy kết quả → không cancel.

**Toàn bộ front-end message đổi thành 1 câu: *"Put creatine in your coffee."*** Từ survey → insight → messaging change, dùng Claude để parse data.

**Framework tổng quát (transfer về bất kỳ sản phẩm nào):**
1. **Survey 3 câu:** results seen · time to results · **HOW they actually use it** (câu 3 quan trọng nhất — câu 1-2 là satisfaction, câu 3 là habit signal).
2. **Correlate habit với LTV/retention** trong cohort data — tìm *"users who do X have LTV Y% higher"*.
3. **Make X = front-end message** — không sell product features, sell the habit that drives retention.

> [!note] Cho MaxPro (non-sub, nhưng nguyên lý vẫn dùng)
> MaxPro = tool vật lý, không sub. Nhưng câu 3 ("how do you actually use it?") áp thẳng: khách nào dùng grinder khi nào? Sau bath? Xem TV? Trước vet visit? Nếu correlate với review 5★ / repurchase → đó là habit để làm front-end message. "Grind while they dry off." "Sunday afternoon routine." Không cần sub mới dùng methodology này — chỉ cần post-purchase survey + review mining.

Tie driver #3 (onboarding + education đúng cách = habit building) trong §10 driver LTV ở trên. Survey là công cụ đơn giản nhất để **tìm habit nào cần build vào onboarding** — không đoán.

## In-email subscription management — giữ khách xa portal cancel ([[maxwellcopy-zaymo-in-email-subscription-churn]])
maxwellcopy (2026-07-17): trend lớn nhất trong 8-9 figure sub brands — email cho phép **swap sản phẩm, delay subscription, upsell NGAY TRONG EMAIL** mà không cần rời email để vào portal.

**Kết quả:** giảm **33% billing-reminder churn** cho brand 8-figure — cùng con số với §Day-30/SUB-2 billing A/B ở trên nhưng mechanism khác. **Cơ chế:** portal = chỗ có nút Cancel nổi bật, khách vào để "chỉ delay 1 tháng" rồi thấy Cancel → churn. In-email management = khách không bao giờ thấy cancel button vì không cần vào portal.

**Tool:** Zaymo (tên tool embed subscription management vào email). Không phải tool duy nhất làm được — điểm cốt là **embed actionable buttons ngay trong email** (Klaviyo + Zaymo hoặc equivalent).

**Tie §Day-30:** billing-reminder A/B giảm 33% cancel bằng cách ĐỔI FRAME email (không đặt cancel button cao). In-email subscription management giảm thêm 33% churn bằng cách **loại bỏ hẳn lý do vào portal**. 2 lever cùng hướng, khác điểm can thiệp — ghép lại = churn giảm mạnh hơn nhiều từng cái riêng lẻ.

→ Khi mở sub consumable: setup in-email subscription management là tuần-1 priority, ngay sau billing reframe. Nếu Klaviyo thuần (không Zaymo) → tối thiểu deep-link thẳng tới delay/swap page trong subscription platform, KHÔNG vào portal tổng.

## Agency benchmarks — what healthy retention looks like at scale ([[maxwellcopy-agency-stats-june-2026]])
Maxwell (Well Copy, June 2026 update — 118 brands on retainer):
- **Agency churn rate: 1.89%/month** — mức tốt cho retention agency (≈77% giữ agency sau 12 tháng). Benchmark: nếu bạn đang thuê agency email/retention, ≥1.89% là dấu hiệu agency đang giữ được client vì performance thật.
- **WellTV** — Maxwell vừa launch platform retention analytics độc quyền cho client (sau nhiều tháng build). Tín hiệu: agency tier cao 2026 đang **build proprietary data layer** thay vì chỉ dựa Klaviyo dashboard. Tie back §2026-market-shift: đây là ví dụ cụ thể về "data + expertise không-ai-có" như differentiator.
- **Subscription specialization đang tăng:** "Lots of subscription brands coming in, that's been a real focus." → Với brand DTC, email agency chuyên sub đang có backlog; không phải chỉ generalist agency nữa.

## WellTV — analytics layer bên dưới Klaviyo, dữ liệu brand bỏ sót ([[maxwellcopy-welltv-ltv-retention-analytics]])
maxwellcopy (2026-07-17): sau khi deploy WellTV trên nhiều account, những gì lộ ra là dữ liệu mà Klaviyo + Shopify dashboard bình thường không thấy:

- **Reorder window theo từng sản phẩm:** biết CHÍNH XÁC ngày nào khách có nhiều khả năng mua lại, phân tách theo SKU — không phải "khoảng 30 ngày" mà là window cụ thể theo mỗi sản phẩm.
- **LTV delta theo sản phẩm đầu tiên:** "Product A buyer is worth double a Product B buyer over 12 months" — biết SKU nào acquire khách có LTV cao nhất → feed lại acquisition team để tập trung đúng sản phẩm.
- **Campaign attribution thật vs Klaviyo attribution mặc định:** Klaviyo cho thấy revenue, nhưng KHÔNG phân biệt được campaign nào thật sự TẠO RA repeat customer (LTV) vs chỉ tạo first-time revenue. WellTV tách được 2 loại này.
- **Funnel-to-LTV mapping:** ad funnel nào (angle nào, sản phẩm landing page nào) produce khách có LTV cao nhất → acquisition team biết nên scale cái gì, không chỉ nhìn ROAS.

**Hàm ý khi chưa có WellTV (proxy thủ công cho MaxPro):**
1. **Reorder window:** chạy report Shopify "days between orders" theo sản phẩm → tìm modal (ngày phổ biến nhất) → set replenishment email + SMS đúng ngày đó, không gửi theo "30 ngày tròn".
2. **LTV delta by first product:** cohort analysis Shopify (tạo manually hoặc dùng Lifetimely/Triple Whale) — nhóm khách theo sản phẩm đầu tiên mua → so sánh 12-month LTV. Kết quả: biết hero SKU nào tốt nhất về LTV, không phải về volume.
3. **Campaign attribution thật:** [[email-marketing]] §RPR (revenue per recipient theo từng campaign) là proxy tốt nhất khi không có analytics layer riêng — flat RPR = không phân biệt được campaign nào build retention thật.

Tie §agency benchmarks ở trên (WellTV = differentiator agency tại 2026) + [[email-marketing]] §RPR diagnostic + driver #7 trong §10 driver LTV (replenishment theo rebuy cycle thật).

> [!note] Cho MaxPro (non-sub)
> Grinder chưa cần đội retention agency. Nhưng khi scale sub/consumable: benchmark này cho biết agency nào là tốt → hỏi thẳng churn rate của agency đó (nên <3%/mo với portfolio $1M+/mo).

## 2026 market shift: AI commoditizes execution → depth wins ([[maxwellcopy-ai-shifts-retention-value]])
maxwellcopy (Well Copy, 70+ người, một trong những retention agency lớn nhất 2025): *"AI made pure execution way less valuable."*

**Hệ quả cho agency landscape:**
- Email/SMS execution (viết, gửi, setup flow) → AI làm được → không còn là differentiator đủ mạnh.
- Agency sống được 2026: expanded depth vào **"true retention management"** — không chỉ Klaviyo email/SMS mà phủ toàn bộ Shopify + subscription platform (Recharge, Skio, Stay…).
- Differentiator thật: **data độc quyền + expertise không-ai-có** ("providing a data and service that no one else can provide").

**Hàm ý khi thuê agency (tie [[agency-ops]]):**
Red flag mới 2026: agency chỉ pitch execution volume (số email, số flow, số A/B test) mà không nói gì về retention strategy, subscription health, hoặc Shopify-level insight. Pure execution agencies đang bị AI ép margin → pressure chuyển sang khách hàng qua volume-pricing mà không thêm value thật.

**Hàm ý khi scale brand:**
Cùng nguyên lý với bootstrap-vs-funded ([[media-buying]] §bootstrapped edge): lúc execution rẻ hóa, **craft + depth + insight = moat thật** — đây là chỗ bạn compete không cần budget to.

> [!note] Cho MaxPro hiện tại
> Grinder chưa phải sub brand. Nhưng tín hiệu này đúng ngay bây giờ: **đừng thuê agency pitch "we handle your email flows"** — cái đó AI làm được rẻ hơn. Khi đủ revenue mở sub/consumable: tìm agency hiểu retention health + biết đọc Shopify cohort data, không chỉ Klaviyo dashboard.

## 11 unspoken rules — 9-figure sub brands ([[maxwellcopy-subscription-11-rules]])

Bổ sung + xác nhận các framework trên. **Rule 8** là insight MỚI chưa có chỗ nào trong trang này.

| # | Rule | Link trang này |
|---|---|---|
| 1 | Không quá **3 email/tháng** cho active subscribers | — |
| 2 | **Aggressively test billing reminders** — transactional-looking → push cancel | §Day-30 + billing A/B −33% |
| 3 | **Không dùng Klaviyo placed order revenue** — gồm rebills. Custom metric exclude chúng | §4 metric (SUB-1) |
| 4 | **Cadence = product usage** — quá nhiều product = #1 lý do cancel | §5 nguyên tắc onboarding |
| 5 | **Sub-maxx PDP:** auto-select sub · 30+90 day option · aggressive discount | §take-rate (SUB-1) |
| 6 | **Onboarding = habit + educate + community** — không push upsell sớm | §21-day framework |
| 7 | **Không hứa kết quả nhanh** — sell 90+ day commitment trước khi thấy gì | §Phase-1 pre-frame |
| 8 | **Không cho pause — chỉ delay hoặc cancel** ⭐ MỚI | — |
| 9 | **Cancel incentives theo lý do:** too-much-product → skip/delay · price-worry → discount | §recovery 15-20% |
| 10 | **Take rate ≠ win** nếu cancel trước Order 3 — track O-series | §4 metric O2/O4/O6 |

**Rule 8 — no-pause policy (insight mới):** không ai bao giờ un-pause subscription; pause chỉ delay churn trong khi làm hỏng metric cohort. Thay bằng 2 lựa chọn: "delay X tuần" (giữ sub active) hoặc "cancel với incentive phân nhánh" (rule 9). → khi mở sub: remove pause từ đầu, không phải sửa sau.

Rule 3 xác nhận §4 metric (SUB-1) về custom Klaviyo metric. Rule 7 confirm §Phase-1 pre-frame 90 ngày. Rule 2 confirm §billing A/B. Rules 1-10 cùng nhau tạo operating checklist cho sub brand mới.
