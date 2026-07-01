---
sources: [nkecom-meta-launch-playbook-2026, alexgoughcooper-static-ads-8-rules, low-budget-creative-testing-playbook, 0xroas-resilia-3300-ads-ai-volume, 0xroas-50-statics-20-mins-ai, 0xroas-drama-ads-ai-format-list, dtcmidas-meta-ai-animation-yapper-vsl, jforjacob-split-test-cpm-hidden-cost, jforjacob-meta-manual-beats-algorithm, jforjacob-meta-manual-override-algo, jforjacob-bootstrapped-creatives-landing-pages, dtcmidas-dont-copy-funded-brands, jforjacob-budget-timing-observation, dtcmidas-june-record-month-levers]
updated: 2026-07-01
---

# Media buying + testing (Meta 2026)

Nguồn: [[nkecom-meta-launch-playbook-2026]] (media buyer, $1m+/mo, launch gần nhất Jan 2026). Đây là mảng **buying-side**, bổ sung cho creative-side ([[ugly-ads-method]]). Thesis: **creative is the new targeting** — broad + flood AI ads + để algorithm chọn winner, đọc quyết định từ metrics ngày 1.

## Account structure (đảo "best practice" cũ)
- **Broad only, KHÔNG interest targeting.** Interest targeting chết từ lâu. "Help the pixel" là bullshit. Bán đồ nữ cũng không narrow gender — algorithm biết rõ hơn.
- **1 ad set duy nhất khi test.** Nhiều ad set = phân mảnh learning. Cần **50+ conversions/tuần** để thoát learning phase. Dồn hết ads vào 1 ad set để thoát nhanh nhất.
- **Chưa mở campaign mới tới $300/day.** Scale spend trên cái đang chạy trước, rồi mới thêm campaign.

## Volume: flood ads, Meta tự lọc
- Đưa máy **50+ ads**. Meta dự đoán + dồn spend vào best 1-5 (đúng ý đồ, KHÔNG phải "spread too thin").
- AI static ad rẻ → volume gần như free. Launch Jan 1: **toàn bộ static AI**, tung 50, chỉ ad thứ **48** ăn spend.
- Launch 5 ads = bị người launch 50 vượt mặt mỗi lần.
- **Tip: 10 ads / awareness stage** → [[market-awareness]].

## "Digital darwinism" — AI volume = bảng đấu mới (0xROAS, 3 confirm) ⭐
Cùng thesis "flood ads" ở trên, 3 post 0xROAS làm sắc + cho con số:
- **Volume bench thật ([[0xroas-resilia-3300-ads-ai-volume]]):** Resilia chạy **~3,300 active ads**. *"if you're not using AI to generate ads you're leaving money on the table — competitors out-test, out-scale, bury you with volume you can't compete with. This is digital darwinism."* → đối thủ scale đang chơi ở thang volume này; 50-ad flood của nkecom là **sàn**, không phải trần.
- **Throughput ([[0xroas-50-statics-20-mins-ai]]):** *"spin up 50 statics in <20 min with AI"* → cost-per-creative ~0 = volume gần free (đúng "AI static rẻ → volume free" ở trên). Bottleneck dịch từ *sản-xuất* sang *test-design + kill-speed* ([[creative-testing]]).
- ⚠️ **Cảnh báo slop:** cả 2 post bán "AI UGC guide" và đều nhấn video *"don't look like slop"* — volume KHÔNG cứu creative dở; vẫn cần hook/angle thắng ([[hooks]], [[angles]]) rồi mới nhân volume. Volume khuếch đại winner, không tạo winner.

## Format đang ăn spend 2026 — AI cho phép MỌI format
- **Drama ads + bất kỳ format ([[0xroas-drama-ads-ai-format-list]]):** *"new drama ADS are crushing on FB"* — AI làm được hết: **podcast · street-interview · drama · doctor/authority · whatever.** "Easiest + best time to create and scale content."
- **Top-spender formats ([[dtcmidas-meta-ai-animation-yapper-vsl]]):** DTC Midas — *"Meta is doing perfectly fine"*; phần lớn top-spender chạy **AI animation ads + "yapper"-style VSL** (KHÔNG cần AI-doctor/AI-UGC). → 2 format đáng thử bên cạnh static: **AI animation** (≈ cartoon-creative [[creative-brief]]) + **yapper VSL** (talking-head độc thoại; ⚠️ AI-people → NY disclosure [[compliance]]). Phản-chứng cho "Meta đang chết" — Meta vẫn fine cho người chịu test format mới.
> [!note] Đối trọng với [[google-ads]] / [[native-ads]]
> Mấy post này lạc-quan Meta + AI-volume; [[google-ads]] (eCom_Amin) + [[native-ads]] (Jan) lại đẩy *rời* Meta vì fatigue/platform-risk. Không phải mâu thuẫn để chọn 1 — Meta = test-bed rẻ tìm angle/format thắng (volume); rồi **diversify** sang search-intent + native để bớt lệ-thuộc. Giữ cả hai.

## Test budget
- **$150-200 để biết kết quả.** Min $50/day (beginner), tác giả thích $200/day. Set go-live lúc nửa đêm.

## Decision matrix ngày 1 (sau khi tiêu hết 1 ngày budget)
| Verdict | ATC rate | Tín hiệu khác | Hành động |
|---|---|---|---|
| **KILL** | < 5% (thiếu demand) | CPC > $2 (trừ AOV $100+) · CPM > $75 (copy quá aggressive / policy-risk → [[compliance]]) | Giết test |
| **CARRY** | 5-8% (offer/trust cần fix) | có conversion | Double down messaging ad ăn conversion, up thêm ads cùng angle |
| **SCALE** | > 8% (sẽ convert 2-3%) | ROAS 1.5+ · có subscriber ngày 1 | Up **20+ ads cùng angle** vào CÙNG ad set |

## Winner signal
Conversion trong **24h đầu** HOẶC **8.5%+ ATC** = winner. Tác giả chưa thấy brand thành công nào không có conversion ngay ngày đầu. Không conversion → mạnh offer hơn hoặc đổi product. (Brand Jan 1: ROAS 0.8 ngày đầu nhưng nhiều ATC + 2 sub → giờ 1.6+.)

## Nối với creative
"Double down angle thắng → up 20+ ads cùng angle" = nơi [[angles]] + [[hooks]] + [[creative-brief]] feed vào. Static ad volume để **test hook/angle rẻ + nhanh**; angle thắng rồi build long-form native ([[ugly-ads-method]]) + bridge page ([[funnel-and-landing]]) để scale. Disguise (persona/page) → [[personas]].

## Spy + persona-gap (chọn cái để clone) — [[alexgoughcooper-static-ads-8-rules]]
- **Meta ad library SORT BY IMPRESSIONS** = proxy mạnh cho ad đang ăn spend của đối thủ (mạnh hơn nhiều "longest running"). Top 6 impression ≈ top 10 account. Clone từ cái THẮNG, ko phải cái cũ.
- **Persona-gap:** soi review+comment+survey tìm persona bị bỏ quên (có demand, ít/0 ad target) → static đơn giản cho họ thường crush (1 case: 3/5 top ad). Volume AI bổ trợ, ko thay strategy. → [[personas]], [[maxpro-avatars]].

## Low-budget regime (đối trọng flood ở trên) — [[low-budget-creative-testing-playbook]]
Flood-50 ở trên giả định budget đủ ($150-200/day). Khi budget hẹp ($20-40/day) thì đảo cách TEST (chi tiết: [[creative-testing]]) nhưng GIỮ nguyên cấu trúc account:
- **Consolidate, đừng fragment.** 1 campaign, 1 (tối đa 2) ad set, nhét **3-5** test creative cho Meta distribute. Standard advice "ABO $100/day nhiều ad set" viết cho account giàu — fragment lúc budget thấp → ko ad set nào đạt **50 event/tuần** → kẹt learning phase mãi (= lý do thật của "feel random"). 1 ad set $20-40 > 5 ad set $10. (Cùng kết luận nkecom ở trên — 2 nguồn xác nhận con số 50.)
- **Hunting = lowest-cost (no bid cap).** Mất CPA control nhưng giai đoạn này cần data + winner, ko phải margin. Để spend, kill loser nhanh, push winner.
- **Cost cap CHỈ sau khi có winner đã prove** → rồi mới layer cost cap bảo vệ margin lúc scale, ko phải trước.

## Bid cap "ko spend" trên account mới — [[low-budget-creative-testing-playbook]]
Bid cap = trần cứng; Meta chỉ vào auction tới giá đó. Để spend dưới cap, algorithm phải TỰ TIN tìm được người convert ≤ cap — confidence đó đến TỪ account/pixel history.
- **Account cũ:** pixel seasoned, nhiều data → Meta predict "impression này convert rẻ" → bid tự tin dưới cap.
- **Account mới:** 0 history → ko predict value/impression → ko dám bid dưới cap → under-deliver. Cùng con số cap cũ giờ effectively "quá thấp" vì algorithm đang mù.
- **Bid cap ko hỏng** — nó là tool cho account đã calibrate, bạn đang xài trên account lạnh. = bắt algorithm hit CPA target trước khi nó biết CPA của bạn là bao nhiêu.
- **Fix account mới:** (1) start **lowest-cost** ép delivery + feed pixel → (2) season pixel **~50+ conversion** tới khi behave predictable → (3) rồi mới reintroduce bid/cost cap, set CAO hơn cap cũ một chút rồi siết dần — đừng set số cũ ngày 1. *Earn the right to use bid cap.*

## ⚠️ Algorithm trust decay — manual intervention signal (2026) ([[jforjacob-meta-manual-beats-algorithm]])

> [!warning] Mâu thuẫn với "flood ads, Meta tự lọc" ở trên
> jforjacob (DR/ecom, 2026-06-25): *"Meta is in a place where I trust it less than ever to spend on the right ads. Near 100% failure rate."* Surf scaled 2 ads Meta deprioritised → **top spenders in account at 50× the budget, CPA 4× lower than average**. Kết quả: càng manually intervene (tắt ads Meta ưu ái, push spend tay vào ads Meta không chọn) → kết quả càng tốt.

Đây là **counter-signal** trực tiếp với thesis "flood + let algorithm decide winner" của nkecom. Không có đủ data để kill thesis cũ, nhưng là tín hiệu quan trọng cần theo dõi:

- **Thesis cũ (nkecom):** feed 50+ ads, Meta dự đoán + dồn spend vào best 1-5 → đúng ý đồ.
- **Counter-signal (jforjacob):** Meta 2026 chọn sai gần như mọi lúc; ads Meta "bỏ đói" đang có CPA tốt hơn nhiều.

**Cách reconcile thực tế:**
1. **Không binary.** "Flood" vẫn đúng ở giai đoạn discovery (data gathering). Nhưng sau khi đủ data → ĐỪNG mù tin Meta allocation; audit tay xem ads đang bị bỏ đói có metric tốt không.
2. **Surf scaling = tactic cụ thể:** manually bump budget vào ads có CPA thấp mà Meta đang underdeliver → kiểm chứng signal tay thay vì chờ algorithm tự điều chỉnh.
3. **Đọc tín hiệu ngày 1 (decision matrix bên dưới)** vẫn đúng — nhưng winner tự nhiên của Meta có thể là false-positive. Cross-check với CPA thực tế của các ads bị bỏ qua.

→ Tie [[creative-testing]] (tự đọc signal, không delegating hoàn toàn cho machine).

## Split test trap — CPM shift ăn hết CVR win ⚠️
Nguồn: [[jforjacob-split-test-cpm-hidden-cost]] (jforjacob, DR/ecom). Lỗi ít người biết khi roll out page winner:

**Cơ chế:** Intelligems báo CVR+RPV tăng 10-20% cho variant → roll out → CVR thực không đổi hoặc tệ hơn. Nguyên nhân: thay đổi trên page **ảnh hưởng CPM của kênh ad**. CPM variant có thể tăng 40% vì targeting shift trên Meta → chi phí thật tăng nhưng split-test tool không track in-platform metrics → "winner" trong Intelligems là **loser thật** về contribution margin.

**Luật:** sau khi roll out bất kỳ page change nào, monitor **in-platform CPM/CPC trên Meta** ít nhất 1 tuần song song. Winner thật = CVR tăng **VÀ** CPM không tăng tương đương. Split-test tool (Intelligems, VWO…) chỉ thấy on-site; không thấy upstream cost.

> [!warning] Áp dụng MaxPro / pet store
> Mỗi lần A/B test PDP hay quiz funnel → sau khi roll out biến winner, pull CPM/CPC ở Ads Manager ngay tuần đó. Đừng chỉ nhìn Intelligems dashboard.

Bổ sung cho **Decision matrix ngày 1** ở trên: ATC rate chỉ đúng khi CPM ổn định. Liên kết [[funnel-and-landing]] (page change) + [[quiz-funnels]] (quiz variant test).

## Bootstrapped brand creative edge — phải thắng bằng craft ([[jforjacob-bootstrapped-creatives-landing-pages]])
*"Those who can afford to spend the most to acquire a customer win"* — đúng, nhưng bootstrap không có luxury đó. Hệ quả thực tế: **phải ăn hơn big brand về creative quality + landing page** nếu muốn compete. Counter-intuitive: category leaders như Gruns, IM8 đang chạy ads *"objectively mid"* — đây là gap thực. Budget không thể cân bằng; craft + angle + page quality thì có thể.

Tie [[creative-testing]] (đọc signal từ metric, không budget to) + [[funnel-and-landing]] (landing page = lever ngang với creative) + [[ugly-ads-method]] (quality ≠ production value — là hook/angle/structure). → MaxPro: "không đủ ngân sách Gruns" không phải excuse — đây chính xác là lý do cần craft tốt hơn họ.

## Don't model funded brands — wrong unit economics ([[dtcmidas-dont-copy-funded-brands]])
DTCMidas: most visible big DTC brands are funded → **completely different unit economics** from bootstrapped. They can sustain far higher CACs (investor capital, don't need near-term profitability), have celebrity endorsements, and accumulated brand trust over years. *"When you copy their funnels and ads, you're copying a strategy built on advantages you don't have."*

**Rule: model bootstrapped brands scaling quickly**, not funded names. A brand burning a raise at 0.5 ROAS is not proof their funnel works — it's proof they have runway you don't. Spy targets: $500k-$2M bootstrapped brands converting cold traffic profitably. → Spy tool: Meta Ad Library sorted by impressions on same-scale accounts (§Spy + persona-gap above).

Reinforces [[jforjacob-bootstrapped-creatives-landing-pages]] (must win on craft, not budget) — now extends: also win by *studying the right peers*. Funded brand funnel as reference = misleading data.

## Record-month validation — 6 levers DTC brand đang dùng ([[dtcmidas-june-record-month-levers]])
DTCMidas báo record June 2026. 6 lever đã move needle — không phải 1 thứ, là combination:
1. **New product launch** — mở thêm SKU = new hook + new audience segment
2. **More focus on Google Ads** — shift spend mix, đẩy search-intent. Tie [[google-ads]].
3. **VSL AI animation ads** — xác nhận format đang ăn Meta ([[dtcmidas-meta-ai-animation-yapper-vsl]]). Cùng signal với [[0xroas-ai-animation-tof-story-required]]: cần story mạnh, không overdo.
4. **Creator seeding** — đủ volume creators on board tạo social proof mass + content hữu cơ (UGC, testimonial raw)
5. **Surf scaling Meta** — manually bump spend vào winners. Xác nhận thesis jforjacob ([[jforjacob-meta-manual-beats-algorithm]]): không để algorithm auto-allocate mù.
6. **LP hero section tests** — page đang tested ngay level hero (first impression), không chỉ body/offer. Tie [[funnel-and-landing]] (congruency) + [[email-marketing]] hero-design.

→ MaxPro takeaway: lever 3 (VSL AI animation) + lever 5 (surf scaling) + lever 6 (hero LP test) là 3 cái actionable nhất ngay bây giờ mà không cần new product. Cần: 1 AI animation VSL test + weekly hero-section A/B trên presell/review domain.

## Off-peak budget push — exploratory tactic ([[jforjacob-budget-timing-observation]])
jforjacob: *"sometimes, for no reason whatsoever you just need to send the budgets at 7pm on a random Tuesday night and see wtf happens."* Thin observation (anecdotal, no CPA cited) but compatible with manual-intervention thesis ([[jforjacob-meta-manual-beats-algorithm]]): Meta delivery can lock into ruts; an off-peak budget push breaks the pattern and occasionally surfaces latent audience segments. Low cost: pick an off-peak hour on a slow day, monitor CPM + CPA vs 7-day baseline for 24h.

## Native = kênh song song (không phải Meta)
Bài này là Meta. **True-native (Taboola/Outbrain open web)** là kênh TOF song song, toán khác hẳn — CTR-first `CPC=CPM÷(CTR×10)`, gate $50-100k/mo. Native flood retargeting pool → làm Meta/Google rẻ đi. Chi tiết + setup: [[native-ads]].
