---
sources: [nkecom-meta-launch-playbook-2026, alexgoughcooper-static-ads-8-rules, low-budget-creative-testing-playbook, 0xroas-resilia-3300-ads-ai-volume, 0xroas-50-statics-20-mins-ai, 0xroas-drama-ads-ai-format-list, dtcmidas-meta-ai-animation-yapper-vsl, jforjacob-split-test-cpm-hidden-cost]
updated: 2026-06-23
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

## Split test trap — CPM shift ăn hết CVR win ⚠️
Nguồn: [[jforjacob-split-test-cpm-hidden-cost]] (jforjacob, DR/ecom). Lỗi ít người biết khi roll out page winner:

**Cơ chế:** Intelligems báo CVR+RPV tăng 10-20% cho variant → roll out → CVR thực không đổi hoặc tệ hơn. Nguyên nhân: thay đổi trên page **ảnh hưởng CPM của kênh ad**. CPM variant có thể tăng 40% vì targeting shift trên Meta → chi phí thật tăng nhưng split-test tool không track in-platform metrics → "winner" trong Intelligems là **loser thật** về contribution margin.

**Luật:** sau khi roll out bất kỳ page change nào, monitor **in-platform CPM/CPC trên Meta** ít nhất 1 tuần song song. Winner thật = CVR tăng **VÀ** CPM không tăng tương đương. Split-test tool (Intelligems, VWO…) chỉ thấy on-site; không thấy upstream cost.

> [!warning] Áp dụng MaxPro / pet store
> Mỗi lần A/B test PDP hay quiz funnel → sau khi roll out biến winner, pull CPM/CPC ở Ads Manager ngay tuần đó. Đừng chỉ nhìn Intelligems dashboard.

Bổ sung cho **Decision matrix ngày 1** ở trên: ATC rate chỉ đúng khi CPM ổn định. Liên kết [[funnel-and-landing]] (page change) + [[quiz-funnels]] (quiz variant test).

## Native = kênh song song (không phải Meta)
Bài này là Meta. **True-native (Taboola/Outbrain open web)** là kênh TOF song song, toán khác hẳn — CTR-first `CPC=CPM÷(CTR×10)`, gate $50-100k/mo. Native flood retargeting pool → làm Meta/Google rẻ đi. Chi tiết + setup: [[native-ads]].
