# Native ads (kênh open-web)

Nguồn: [[advertising-jan-native-ads-guide-2026]] (agency build native funnel cho DTC). Đây là **kênh riêng**, KHÔNG phải Meta — bổ sung buying-side cho [[media-buying]].

## True native ≠ native-style FB (đọc trước)
Hai thứ hay bị lẫn vì cùng tên:
- **True native (bài này):** placement trên open web — widget "recommended article" cuối CNN / Fox / Daily Mail / Forbes. Serve bởi **Taboola, Outbrain, RevContent, MGID, Yahoo DSP**. Hàng chục tỉ impression/ngày. Target theo **site / widget / device / country / signal**, KHÔNG theo persona.
- **Native-style FB (cái tôi đang làm):** advertorial chạy TRÊN Meta feed, nguỵ trang persona page → [[kittysupps-machine]], [[ugly-ads-method]]. Cùng DNA funnel (advertorial→PDP) nhưng khác kênh, khác creative job, khác register.

→ Tôi đang ở vế dưới. Bài này là vế trên — kênh scale tôi **chưa** tới.

> [!warning] Readiness gate — chưa phải kênh của tôi (2026)
> Native không phải starter channel. Floor: **$50-100k/THÁNG** revenue + Meta/Google đã profit at scale + commit **$400/ngày × 4-6 tuần**. Mục tiêu của tôi là $100k/NĂM → còn xa. **Nhưng** triết lý funnel + advertorial 6-piece + CTR-first transfer ngay cho native-style FB. Đọc để lấy nguyên lý, đừng mở Taboola tuần này.

## Audience state: Schwartz L1-2 (ngược grinder)
Cold native = **Unaware / Problem-aware** — đang đọc bài không liên quan, calm, focused, "article-reading mindset". Meta/Google kéo được gần Solution/Product-aware vì targeting sắc; native thì không. → **Funnel phải làm việc qualify mà targeting không làm được.** Ngược hẳn grinder buyer (L3-4 → [[market-awareness]]).

## Toán chạy kênh
`CPC = CPM ÷ (CTR × 10)`

| CPM | CTR | CPC |
|---|---|---|
| $5 | 1% | $0.50 |
| $5 | 2% | $0.25 |
| $5 | 0.5% | $1.00 |

CPM do auction set (không phải mình). **CTR là biến duy nhất mình control.** → việc duy nhất của creative ở TOF = **đẩy CTR**. Không bán, không giải thích, không tả sản phẩm — chỉ kiếm click. Người crack native là người **test giỏi nhất**, không phải copywriter giỏi nhất (20 combo headline×image trên cùng advertorial, CTR 0.3%→0.8% = CPC giảm hơn nửa, cùng budget gấp đôi volume).

## Funnel 3 mảnh — mỗi mảnh đúng 1 việc
1. **Creative (image + headline)** — curiosity + **pre-filter**. Headline không nói sản phẩm là gì, chỉ hé "nếu bạn là X, có thứ bạn cần biết". Vd *"Android users: there's a security setting most people never change."* → iPhone scroll qua, Android click. Pattern → [[hooks]].
2. **Advertorial (~600-900 từ)** — bridge Problem-aware → Product-aware. Trông + đọc như **editorial**, KHÔNG như sale page. Inform / frame / position, không bán. (Jan: 1,400 từ nửa-pitch CVR 0.4% → viết lại 650 từ informational, product ở 1/3 cuối, CVR 2.1%.) Gánh **~70% conversion lift**.
3. **PDP** — chốt. Reader đã warm, PDP không educate lại, chỉ close. **Phải khớp angle + framing + visual của advertorial.** Continuity advertorial→PDP = **lỗ rò lớn nhất Jan thấy khi audit** (= proof-evaporation → [[funnel-and-landing]]).

## Advertorial 6-piece (editorial register)
1. **Hook** — 100 từ đầu trả nợ curiosity của headline (story, không product).
2. **Problem block** — tả vấn đề bằng ngôn ngữ "feel seen", specific ("over 40 wake up with stiff knees, forming a pattern that gets worse" > "joint pain is common").
3. **Mechanism** — nguyên nhân MỚI với reader (problem→solution aware). *"Most joint creams target inflammation. New research points at synovial fluid breakdown."*
4. **Pivot to solution category** — chưa phải product, là **loại** giải pháp.
5. **Product** — giờ mới gọi tên + position như best example của category vừa educate. Brand / founder story / ingredient xuất hiện ở đây.
6. **CTA + social proof** — review, before/after, số cụ thể, nút xuống PDP.

Rules: byline + publication frame thật, 2-3 ảnh "stock editorial" (không product shot), lead bằng problem không brand, product chỉ ở **back half**.

> [!note] Hai trường phái advertorial (ngược register)
> Jan (true native) = **editorial-informational** ~600-900 từ, byline/publication, calm, mechanism-education. KittySupps native-style FB ([[ugly-ads-method]]) = **unhinged-personal-confession** ~3,110 từ, persona page, raw/chửi, emotional story. Cùng tên "advertorial" nhưng **ngược register** — vì khác audience state: article-reader calm vs feed-scroller emotional. Chọn register theo kênh. (Lưu ý: Jan tự mâu thuẫn số từ — "600-900" ở 2 chỗ, "1000-1800" ở 1 chỗ; native vẫn ngắn hơn FB long-form nhiều.)

## TOF engine — làm kênh khác rẻ đi
Native không chỉ standalone. Nó (1) mở upper-funnel reach Meta không chạm nổi at scale, (2) **flood retargeting pool bằng warm traffic** → convert trên Meta/Google ở CPA thấp hơn. *"Native isn't just a channel — it's a top-of-funnel engine that makes every other channel cheaper."* Đây là phần đa số operator bỏ lỡ.

## Setup Taboola (khi đủ điều kiện)
1. **Platform:** start **Taboola** (inventory lớn nhất, nhiều US traffic, nhiều data học).
2. **Research:** spy tool native — **AdBeat / Anstrex / PowerAdSpy** — pull mọi campaign active trong vertical, map pattern (mechanism / angle / product lặp), đừng copy. Hoặc cuộn cuối news site xem ai đang chạy (free).
3. **Angle:** 1 angle/campaign, 3 tiêu chí — **specific** đủ để thấy mới · **broad** đủ cho mass · **defensible** đủ để product giao được → [[angles]].
4. **Creatives:** 15-20 combo. Editorial > polished, **faces > product shot**, ugly thường win. Headline: số cụ thể ("73 year old" > "elderly person"), pre-filter audience/condition, curiosity gap không hype. Test **3 headline × 3 image**, cắt mạnh khi đủ data.
5. **Advertorial:** 6-piece ở trên, block 2-3 ngày viết. PDP khớp angle.
6. **Budget:** min **$400/ngày** (dưới đó CPM phồng vì giành residual inventory + thiếu data). $400-800/ngày → signal trong 7-10 ngày. CPM giảm **20-40%** khi scale $400→$2,000 (auction thưởng scaled spender). Không bỏ nổi $400/ngày × 2-4 tuần = chưa sẵn sàng.

## Verticals native ăn nhất
Joint pain · sleep · weight · skin · hair · digestive · menopause · hormonal · energy · focus · finance · eye health — **mass pain/desire**. Niche / B2B / hyper-targeted = không hợp (native là kênh mass-market).
