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

## Native = kênh song song (không phải Meta)
Bài này là Meta. **True-native (Taboola/Outbrain open web)** là kênh TOF song song, toán khác hẳn — CTR-first `CPC=CPM÷(CTR×10)`, gate $50-100k/mo. Native flood retargeting pool → làm Meta/Google rẻ đi. Chi tiết + setup: [[native-ads]].
