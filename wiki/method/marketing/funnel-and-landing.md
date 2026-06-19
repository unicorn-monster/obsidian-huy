# Funnel + landing congruency

Nguồn: [[kittysupps-funnel-analysis]].

## Nguyên tắc: ad bán, PDP chỉ chốt
Division of labor đúng DR: ad làm hết emotion + mechanism + villain; PDP chỉ price/guarantee/scarcity/Add-to-cart. Click chính là transition. Kể lại story trên page = làm chậm buy.

> [!note] Jan đẩy xa hơn: cold KHÔNG dùng PDP
> [[advertising-jan-5-stage-funnel]]: PDP (nhất là Shopify) build cho *repeat shopper*, không convert cold. Cold traffic → advertorial → presell → **thẳng checkout**, bỏ qua PDP. "Ad bán" vẫn đúng; chỉ là trang chốt = presell + checkout, không phải PDP.

## 5-stage funnel skeleton (Jan)
Nguồn: [[advertising-jan-5-stage-funnel]]. Khung gộp toàn bộ buying-side:
1. **Creative** — lever cao nhất, job = CTR. CTR 0.3%→0.6% = gấp đôi prospect ([[native-ads]] math, [[media-buying]]).
2. **Advertorial** — đưa prospect qua MỌI awareness stage + position offer là giải pháp TỐT NHẤT (Schwartz, [[market-awareness]]).
3. **Presell page** — KHÔNG kéo dài advertorial (advertorial đã lo awareness); presell chỉ "cú đẩy cuối" → CTA. *advertorial ≠ presell* = 2 stage khác nhau (listicle Carl = presell; quiz = gộp cả 2 → [[quiz-funnels]]).
4. **Checkout** — cold đi THẲNG checkout, bỏ PDP (note trên).
5. **Upsells** — job duy nhất = tăng AOV → outspend đối thủ ở CPA ([[offer-and-cta]]).

*"Most brands give up on stage 2"* = phần lớn dừng ở advertorial, bỏ presell + upsell = tiền để lại trên bàn.

## Carry gì (message match)
Headline page khớp frame ad (KS: "Stop the Silent Deficiency Before You See the Signs" ↔ "silent, too late"). Mechanism + villain-lite giữ ở FAQ.

Chad Janis ($1.2B exit, [[kasperdolk-pdp-per-angle-congruence]]): *"match creative ↔ LP/funnel = #1 cách scale."* Beginner version (ko cần funnel phức tạp): **duplicate PDP cho mỗi avatar/angle** — đổi title, imagery slider, **review theo ICP** (ko generic), copy theo ICP. VD orthopedic slipper: 30 PDP template (diabetic / elder / mom đi nhẹ trong nhà...). Mỗi winning angle = 1 thế giới riêng quanh nó.

## Lỗ rò lớn nhất: proof bốc hơi
Clicker tới với niềm tin RẤT cụ thể (independent lab, 503mg, named expert, "Amazon là fake"). Page substantiate gần như zero (không COA, không bioavailability number, không named expert). -> skeptic LTV cao (đúng người ad lab-number nhắm tới) rò ra. Cộng social proof tự mâu thuẫn chéo trang ([[kittysupps-brand-offer]]).

Xác nhận độc lập: Jan ([[native-ads]]) gọi **continuity advertorial→PDP** là lỗ rò #1 khi audit funnel — PDP phải lead cùng angle/framing/visual mà advertorial dựng, strip mọi thứ không phục vụ sale (no nav, no cross-sell). Cùng một bệnh proof-evaporation.

## Fix (upgrade lớn nhất so brand clone)
**Bridge page per-angle** giữa ad và PDP:
1. Tiếp câu chuyện named mà reader vừa click.
2. Giữ proof cứng ad đã hứa: COA thật, bảng so bioavailability/power, named-expert device, before/after.
3. Mới button xuống PDP cho scarcity/checkout.
-> recapture skeptic, claim defensible, PDP vẫn nhanh cho người đã convinced. Liên quan compliance: [[compliance]].

## Build page nhanh: clone template thắng
Nguồn: [[dtcquizbuilder-native-ads-workflow]]. Landing page = **việc quan trọng nhất** (làm trước cả ad). Đừng vẽ lại từ đầu:
1. Tìm 1 template LP đã chứng minh mà bạn thích (đối thủ / brand cùng ngành).
2. Full-page screenshot + copy HTML → đưa vào Claude Code.
3. Bảo build lại full HTML, đổi sang brand color + font của mình.
4. → có khung sạch, chỉ việc cắm copy (advertorial) vào.
Đây là production shortcut; congruency + bridge-page vẫn áp như trên. Advertorial copy vào khung này theo [[ugly-ads-method]].

**Mở rộng** ([[dtcquizbuilder-clone-landing-pages-ai]]): build hẳn 1 **Claude Skill** từ HTML (inspect → copy body → dán, chính xác hơn để nó scrape); ask render **live trong browser** để iterate + đính screenshot reference; **1 page / 1 winning ad** (upload ad/VSL thắng → Opus viết copy riêng cho page đó); ship Shopify = thêm page → `</>` code block (vỡ thì xin custom Liquid section). Ranh giới: AI **copy/HTML OK**, AI **ảnh bị Google flag** ([[compliance]]). 80/20 của LP vẫn là **copy** — quantity vô nghĩa nếu thiếu intent.

## Pre-sell layer: họ hàng trang warmup cho cold traffic
Schwartz: cold/less-aware KHÔNG đi thẳng PDP được ([[market-awareness]]). Cần 1 trang warmup giữa ad và offer. Carl Weische: *"pre-sell page là lever lớn nhất để scale"* (đưa 1 brand $387k→$1.36M/tháng bằng 1 listicle) — vì warm audience nhỏ + cap nhanh, muốn scale buộc phải đánh cold. Cùng 1 job (educate problem→solution, carry proof, match awareness), khác hình thức:

| Format | Register | Hợp khi |
|---|---|---|
| Long-form advertorial | confession (FB) / editorial (native) | [[ugly-ads-method]], [[native-ads]] |
| Listicle "X reasons" | editorial, scan nhanh | sản phẩm so sánh được (grinder) — dưới |
| Quiz funnel | interactive diagnostic | health/symptom, cần data → [[quiz-funnels]] |
| Bridge page | proof-recapture per-angle | khi proof bốc hơi (trên) |

→ **Build chi tiết 4 format** (wireframe section-by-section, CTA placement system, speed, cadence, benchmark CTR 8-18%): [[presell-pages]].

## Listicle pre-sell (7 reasons) — cấu trúc Carl
Nguồn: [[carlweische-presell-listicle-7reasons]].
1. **Headline:** *"7 reasons over [X] [audience] choose [product] [to achieve result]"* = social proof + promise gộp.
2. **Comparison table** ngay dưới headline: product vs đối thủ → set frame "mình thắng side-by-side" trước khi đọc tiếp (educate nhanh vì sao đối thủ không viable).
3. **7 reasons** (mỗi cái 1 ảnh hỗ trợ), thứ tự cố định: (1) **Money/resource đang phí** → mechanism fix → upside · (2) **Ease of use** (giết "phức tạp") · (3) **Versatility** · (4) **Identity + Quality** (justify giá) · (5) **Speed** (cụ thể: "trong dưới [time]") · (6) **Social proof** · (7) **Guarantee**.
4. **CTA:** bridge headline (*"the smarter way to [promise]"*) → nhắc lại unique mechanism lần cuối → nút sang offer page.

Adapt theo awareness: problem-aware ≠ product-aware ([[market-awareness]]).

**Cấu trúc thay thế (liam, [[liamecom-listicle-structure]]) — viết listicle như VIDEO AD:** hook open-loop (cho lý do đọc tiếp) → reason 1-3 đào problem (call out, cảm xúc, hệ luỵ lớn hơn) → reason 4-6 educate problem+product, dựng authority → reason 7-9 product = easiest/smartest/fastest + de-position alternative → de-risk (guarantee) + urgency. Áp cho MỌI LP, ko chỉ listicle.

> [!tip] MaxPro map sẵn — gần như viết được ngay (build bằng skill /listical)
> Headline *"7 reasons 18,000+ dog owners switched to MaxPro"* ([[maxpro-product-truth]] 18,587 review) · table MaxPro vs clipper / Dremel / Casfuy ([[maxpro-competitors]]) · (1) groomer $45/lần dồn năm ([[villains]], [[offer-and-cta]]) · (2) 3-port cap + "see-the-dot" · (3) mọi cỡ móng: nhỏ → dày/đen/large ~150lb (3-port cap S/M/L, [[maxpro-product-truth]]) · (4) fear-free identity + diamond drum quality · (5) quiet → chó ngủ gật, xong trong vài phút · (6) 18,587 review 5★ + charity · (7) 99-day company-paid return. Mechanism nhắc lại ở CTA = UMP crush/splinter ([[market-awareness]]).
