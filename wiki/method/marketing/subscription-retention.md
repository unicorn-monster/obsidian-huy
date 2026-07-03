---
sources: [maxwellcopy-subscription-brand-teardown, maxwellcopy-subscription-4-metrics-track, maxwellcopy-subscription-onboarding-churn, maxwellcopy-subscriber-onboarding-21days, maxwellcopy-day30-rebill-klaviyo-reframe, maxwellcopy-billing-email-ab-test-cancel, maxwellcopy-retention-10-drivers-ltv, scalabilityschool-50-angle-strategy, maxwellcopy-founder-video-cancel-flow]
updated: 2026-07-03
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

## Day-30 rebill = highest churn day — Klaviyo reframe fix ([[maxwellcopy-day30-rebill-klaviyo-reframe]]) ⭐
*"The HIGHEST CHURN day for almost any subscription brand is day 30."* Đây là ngày rebill đầu tiên — khách thấy charge, stomach drops, cancel ngay. Trigger: **default Shopify order confirmation email** — bare, no framing, no value.

**Fix (Shopify Plus brands):**
1. Tắt default Shopify order confirmation email
2. Rebuild trong **Klaviyo** với framing khác: vẫn confirm order → nhưng **reaffirm product benefits + remind what subscription includes** + trông như email brand thật (không phải transactional)
3. Khách vẫn bị charge — nhưng **không rage-cancel** vì context đã đổi

**Billing-reminder A/B = −33% cancel (SUB-2, [[maxwellcopy-billing-email-ab-test-cancel]]):** email "bạn sắp bị charge, cancel ở đây" = **driver churn lớn nhất**. AB-test giảm cancel **−33%**. Luật: customize email **trong Klaviyo** (không trong subscription platform) · KHÔNG transactional — **reaffirm benefit** · **đừng đặt nút cancel cao** trong email. Cơ chế = psych-of-framing (cùng họ mystery-discount [[email-marketing]] §1 — cách *nói* đổi outcome, không phải cái offer). → Khi có subscription: đây là tuần-1 quick win trước khi build bất kỳ retention tactic nào khác.

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
