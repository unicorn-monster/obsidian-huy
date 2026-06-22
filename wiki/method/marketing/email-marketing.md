---
sources: [maxsturtevant-5-email-marketing-hacks, maxwellcopy-email-3m-month-attribution, maxwellcopy-odd-send-times-email, maxwellcopy-sms-4-templates-ecom, maxwellcopy-founder-email-template-winback, maxwellcopy-billing-email-ab-test-cancel, maxwellcopy-subscription-4-metrics-track, maxwellcopy-agency-red-flags-list]
---

# Email marketing — owned-channel / retention tactics

Kênh **owned** (Klaviyo), khác máu với paid-acquisition ([[media-buying]], [[native-ads]]): không trả CPM, đánh vào list đã có. Trang này gom tactic retention/flow.

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
"Người ta lười đọc" → email **plain-text ngắn như SMS** nổi bật hơn email thiết kế. Ví dụ swipe: **Breatheeze** subject "Try Risk Free", body 1 dòng *"Max, by the way, we offer a full money-back guarantee… Try risk free >> — Manny, Founder."* Giống mail cá nhân từ founder → cảm giác 1-1, không "blast". Cùng tinh thần raw/under-designed của [[ugly-ads-method]] + founder-template ở §SUB-3 dưới.

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

## Subscription retention — 4 metric + 2 lever giảm churn (FOR SUBS ONLY)
> [!warning] Chỉ áp khi MaxPro có dòng subscription
> MaxPro = tool vật-lý 1 lần mua, **chưa** phải sub brand → mục này để DÀNH cho consumable pet (bit mài thay, balm, supplement) hoặc khi mở sub. Đừng ép sub lên 1 món one-time.

**SUB-1 — 4 metric track ([[maxwellcopy-subscription-4-metrics-track]]):**
1. **First-order subscription take-rate** — daily-use (AG1) target **70-80%**, not-everyday **~50%**. Sub-first-order LTV **gấp 2** one-time → metric chính để tối ưu (sub-first offer + PDP). NHƯNG track CAC + contribution-margin LTV để chắc payback (first purchase đắt hơn).
2. **Order-2/4/6 retention** (đo theo *order* không theo subscriber — chỉ tiền thật vào túi): O2 (rebill đầu) **60-70%** · O4 **50%+** · O6 **30-40%**. Drop lớn nhất ở đâu = chỗ focus.
3. **Billing-reminder cancellations** → §SUB-2.
4. **Cancellation-flow recovery** target **15-20%+** — đừng để cancel trơn; hỏi lý do + winback timely. **Founder message/video lúc cancel convert hơn mọi automated winback** (cùng tinh thần #6).

**SUB-2 — billing-reminder A/B = −33% cancel ([[maxwellcopy-billing-email-ab-test-cancel]]):** email "bạn sắp bị charge, cancel ở đây" = **driver churn lớn nhất**. AB-test giảm cancel **−33%**. Luật: customize email **trong Klaviyo** (không trong subscription platform) · KHÔNG transactional — **reaffirm benefit** · **đừng đặt nút cancel cao** trong email. (Cùng cơ chế psych-of-framing với mystery-discount #1 — cách *nói* đổi outcome, không phải cái offer.)

## SMS — testimonial text land mạnh hơn email ([[maxwellcopy-sms-4-templates-ecom]])
maxwellcopy gửi SMS cho hàng chục triệu người: **testimonial qua SMS** thắng vì hiện **ngay cạnh tin nhắn bạn bè/gia đình** → đọc như recommendation, không như ad — context tự thuyết phục hộ. (Post chỉ tiết lộ SMS #4/4; #1-3 không công khai.) Tie [[personas]] social-proof + #4 email-SMS-style ở trên. → kênh SMS đáng mở song song email cho MaxPro.

## Agency red-flags (ops-discipline khi thuê ngoài) — 21 điểm
[[maxwellcopy-agency-red-flags-list]]: không phải email-tactic mà là checklist **chọn/giám sát agency** (email/ads) — hữu ích cho Huy nếu sau này thuê. Cờ đỏ đáng nhớ nhất: **không bao giờ báo tin xấu** (luôn có vấn đề; chỉ tin tốt = không để ý hoặc giấu) · người liên hệ ≠ người làm strategy · đồng ý mọi thứ bạn nói · chỉ nhìn metric in-platform (Klaviyo rev) thay vì KPI store · báo cáo số nhưng **0 insight** · không quick-win tuần đầu · khoá hợp đồng 6-12 tháng · guarantee to lúc sale · dùng attribution-setting riêng của họ. → dùng làm bộ lọc ngược khi nghe agency pitch.

---
**Áp dụng MaxPro / pet store ($100k goal):** ưu tiên #1 (mystery discount abandonment) vì có data + dùng Klaviyo sẵn; **#6 founder winback** = easy-win tuần này trên list chưa-mua (chạy bằng skill `plain-text-email`); #3/#4 + SMS-testimonial là format swipe cho broadcast; #2/#5 là free tweak (#2 giờ 2-nguồn). Subscription metrics (SUB-1/2) để DÀNH tới khi có dòng consumable. Tất cả thuộc lever **owned/retention** — bổ trợ, không thay paid creative của [[ugly-ads-method]].
