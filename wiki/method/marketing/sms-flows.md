---
sources: [klaviyo-sms-flows-setup-guide, maxwellcopy-sms-4-templates-ecom, maxwellcopy-sms-welcome-flow-109k, maxwellcopy-12m-email-sms-30days, rubiinov-gruns-100m-funnel-teardown]
updated: 2026-07-07
---

# SMS flows — Klaviyo setup playbook (6 core flows)

Owned-channel, lane song song với email ([[email-marketing]]). Setup gốc từng-flow: [[klaviyo-sms-flows-setup-guide]]. SMS đắt + dễ lạm dụng → chỉ dùng cho **launch, sale lớn, automated flows**. Scale proof: SMS có thể chiếm tới **77%** tổng email+SMS revenue ([[maxwellcopy-12m-email-sms-30days]]) và welcome-SMS song song = **+12% incremental** ([[maxwellcopy-sms-welcome-flow-109k]]).

## Format & proof (dồn từ [[email-marketing]] về đây 2026-07-03)
- **Testimonial-SMS** ([[maxwellcopy-sms-4-templates-ecom]]): SMS hiện **ngay cạnh tin nhắn bạn bè/gia đình** → testimonial đọc như recommendation cá nhân, không như ad — context tự thuyết phục hộ. (Post chỉ lộ template #4/4; #1-3 không công khai.) Tie [[personas]] social-proof.
- **Scale proof chi tiết:** $12.1M email+SMS/30 ngày → **$9.4M từ SMS (77%)** ([[maxwellcopy-12m-email-sms-30days]]; grain of salt: last-click over-attribute, nhưng hướng rõ). Welcome flow email-only $887K → thêm SMS series song song = **+$109K (+12%) incremental** vì SMS reach đúng người KHÔNG mở email — khác kênh, khác moment ([[maxwellcopy-sms-welcome-flow-109k]]). *"One of the simplest and easiest lifts you can make to your core flows."*
- **Channel-purpose (Gruns, [[rubiinov-gruns-100m-funnel-teardown]]):** phân vai rõ **email = education, SMS = conversion thuần**. Gruns chạy welcome-SMS high-frequency trong **72h đầu** sau opt-in (cửa sổ intent cao nhất), message tối giản: offer · code · CTA — không gì khác. Lý do SMS ≠ email: **98% open, không spam folder, chạm trong vài phút** → window hành động tức thì. Củng cố luật "SMS chỉ cho launch/sale/flow" ở trên — **đừng nhồi education vào SMS**.

## 5 nguyên tắc nền (mọi flow)
1. **Exclusion filter đặt ở TRIGGER, không giữa flow** — kéo người đã convert ra khỏi phần còn lại của flow.
2. **1 message / flow**, trừ Welcome Series. US giới hạn pháp lý ~1 SMS / abandonment flow; thêm = spammy.
3. **UTM tracking ON** mọi message → attribute được revenue.
4. **Quiet hours** (default tắt-gửi 8PM–11AM) **ON** cho hầu hết msg. **OFF** chỉ khi tốc độ quan trọng (welcome #1, cart/checkout giá cao).
5. **A/B test time-delay** cho brand của mình — số dưới là điểm khởi đầu.

## Bảng tra nhanh
| Flow | Trigger | Delay | #Msg | Quiet hours | Filter then chốt |
|---|---|---|---|---|---|
| Welcome Series | Subscribed to SMS | 0 / 3d / 3d | 3 | Off · On · On | Exclude order/checkout/cart |
| Site Abandonment | Active on Site | 2–4h | 1 | Off | Exclude order/checkout/cart/**viewed** |
| Browse Abandonment | Viewed Product | 2h (test 1–3) | 1 | On | Add "added to cart = 0" |
| Checkout Abandonment | Checkout Started | 30–60m | 1 | Off | 14-day re-entry buffer, **smart sending OFF** |
| Cart Abandonment | Added to Cart | 30–60m | 1 | Off | Exclude checkout-started, link tới **cart** |
| Win-Back | Placed Order | 60–90d | 1 | On | Exclude order = 0 trong cửa sổ |

## 1. Welcome Series (3 msg — flow đa-message DUY NHẤT)
Template mặc định Klaviyo. Trigger **Subscribed to SMS marketing**. Exclusion ở trigger: Placed Order = 0, Checkout Started = 0, Added to Cart = 0 (ai bắt đầu mua → thuộc abandonment flow, kéo ra).
- **#1** ngay khi opt-in · quiet hours **OFF** (họ muốn code ngay): *"Welcome to [Brand]! Here's 10% off your first order with code [CODE]. Shop now: [link]"*
- **#2** sau 3–5 ngày · ON: *"Quick reminder, you still have 10% off waiting with code [CODE] at checkout. Shop now: [link]"*
- **#3** sau 3–5 ngày nữa · ON: *"Last chance! Your 10% off ends in 24 hours. Shop now: [link]"*
- Cleanup: template để 1 conditional split (placed order = 0) trước #3 — vì đã exclude ở trigger, **xoá split**, kéo #3 lên cho gọn.

## 2. Site Abandonment (1 msg — build from scratch)
Người ghé site nhưng chưa tới product page (giai đoạn sớm nhất). Trigger **Active on Site** (All triggers → Metric). Exclude cả 4: Placed Order / Checkout Started / Added to Cart / **Viewed Product** = 0 (ai sâu hơn → flow riêng). Delay 2–4h (đừng spam người vừa landing) · quiet hours **OFF** · UTM ON.
- Copy: *"Looking for something new? Check out our top-selling [category], you'll love these. Shop here: [link]"* → trỏ bestseller collection.

## 3. Browse Abandonment (1 msg — template)
Người xem 1 product cụ thể nhưng chưa add-to-cart. Mạnh cho high-consideration (← grinder MaxPro hợp). Trigger **Viewed Product**. Template sẵn có Checkout=0, Placed Order=0, "not in flow last 30 days"; **thêm Added to Cart = 0**. Delay default 2h (test 1 vs 3) · quiet hours ON · skip recently-messaged ON · UTM ON.
- Copy (dynamic tag): *"Hey! We noticed you checking out the [event name]. Continue browsing now: [event URL]"* — `event name`/`event URL` tự fill đúng product đã xem.

## 4. Cart + Checkout Abandonment (2 flow, cùng 1 message — highest-converting)
> [!warning] Gotcha Klaviyo
> Template tên **"Abandoned Cart Reminder"** thật ra trigger bằng **Checkout Started** → nó là checkout-abandonment. **Build checkout flow TRƯỚC, rồi clone sang cart.**

- **4a. Checkout Abandonment** (build trước): mở template "Abandoned Cart Reminder" (trigger Checkout Started). Filter default Placed Order=0 + "can receive SMS"; thêm **re-entry buffer: not in flow last 14 days**. Delay đổi 4h → **30–60 phút** (4h quá lâu cho checkout recovery). UTM ON · **smart sending OFF** (quá quan trọng để suppress) · quiet hours OFF nếu hợp pháp.
  Copy: *"Oh no! You left [product name] behind in your cart. Finish your purchase now: [checkout link]"*
- **4b. Cart Abandonment** (clone của 4a): đổi trigger Checkout Started → **Added to Cart**. Thêm filter **Checkout Started = 0** (ai tiến tới checkout → nhận flow checkout thay vì cái này). Delay giống checkout. Copy y hệt nhưng đổi link checkout → **cart page** (vd `/cart`), giữ product-name tag.

## 5. Customer Win-Back (1 msg — build from scratch)
Khách cũ đã im. Trigger **Placed Order**, filter **Placed Order = 0 since starting flow** (mua lại trong cửa sổ chờ → rớt khỏi flow). Delay **60–90 ngày** inactivity (sweet spot; ~30d cho brand vòng nhanh, dài hơn cho vòng chậm). Smart sending ON · UTM ON · quiet hours ON.
- Copy (discount): *"Hey [name], we miss you at [Brand]. X% off with code [CODE] for the next 48 hours only. Shop now: [link]"*
- Angle thay thế (giữ margin): nudge **new arrivals / bestsellers** thay discount → **A/B test discount vs new-arrivals**.

## Áp cho MaxPro / pet store
- **Browse Abandonment** = ưu tiên: grinder là high-consideration, người xem PDP mà chưa add rất đáng nudge về đúng product.
- **Welcome SMS song song email** = +12% incremental ([[maxwellcopy-sms-welcome-flow-109k]]) — bật khi list ~500+ subscriber.
- Cart/Checkout SMS = highest-converting, đừng bỏ; ghép với **mystery-discount** abandonment đang chạy bên email ([[email-marketing]] §1) — test mystery-discount trong copy SMS.
- Win-back grinder = vòng mua dài (tool 1 lần) → nghiêng **new-arrivals/consumable (bit mài thay)** hơn discount.
- SMS-testimonial ([[maxwellcopy-sms-4-templates-ecom]]) đọc như tin nhắn bạn bè → format bổ trợ cho broadcast.
