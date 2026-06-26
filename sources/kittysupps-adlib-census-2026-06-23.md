---
type: swipe
date: 2026-06-23
source: "https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=US&q=https%3A%2F%2Fkittysupps.com%2F"
---

# KittySupps Ad Library — census + cadence (2026-06-23)

> Cào lại toàn bộ active ads (Playwright, chặn-bắt GraphQL → full body không cắt). Số liệu thô, BẤT BIẾN. Bản này tập trung **quy mô + tốc độ lên ad** (câu hỏi: 1 ngày nó lên bao nhiêu ad). Teardown angle/persona/villain đầy đủ ở bản trước [[kittysupps-adlib-census-2026-06]] (15/06) — không lặp lại. Phân tích/method: [[kittysupps-machine]]. Raw JSON 1,401 ad: `/tmp/adlib-kitty/ads-raw.json` (local, không commit).

## Quy mô (snapshot)
- **1,401 active ads** → dedup còn **310 creative families** (cùng opening 250 ký tự). Còn lại = re-upload + persona-swap.
- UI Meta tự đếm: **~1,400 results** · sum collation (gộp placement) = **1,638**.
- **100% → `kittysupps.com/products/taurine`.** Vẫn 1 SKU duy nhất, không đổi.
- Format: **IMAGE 1,381 (98.6%)** · VIDEO 20. Gần như toàn static.
- CTA: **Shop now 1,109** · Order now 292. (15/06: Shop now 827 → giờ thống trị mạnh hơn.)
- Word count (full primary text): min 610 · p25 **2,245** · median **2,842** · p75 3,276 · p90 **4,265** · max 5,179.

## Tốc độ lên ad — BURST, không đều
Đếm theo `start_date` của ad **còn sống**. Đây là **số sàn**: ad đã tung-rồi-tắt (loser) không nằm trong active set, nên ngày càng cũ càng undercount. Ngày mới nhất (1-3d) gần đúng nhất.

| Cửa sổ | Tổng (còn active) | TB/ngày |
|---|--:|--:|
| 3 ngày gần nhất | 105 | **35** |
| 7 ngày | 204 | **29** |
| 14 ngày | 431 | **31** |
| 30 ngày | 589 | ~20* |

\* undercount nặng — loser cũ đã cắt.

Phân bố 14 ngày (batch drop rõ rệt):
```
06-22  83 ████████████████████  ← batch
06-21  22 █████
06-20   9 ██
06-19  44 ███████████
06-18   6 █
06-17  40 ██████████
06-16  79 ████████████████████  ← batch
06-15   1 ▏
06-14   1 ▏
06-13  25 ██████
06-10  99 ████████████████████  ← batch (đỉnh)
06-09  81 ████████████████████  ← batch
```
> [!note] Đọc đúng
> Không phải "X ad đều mỗi ngày". Nó dump **80–100 ad/ngày theo batch ~mỗi tuần**, xen ngày 1–2 ad. Dấu hiệu **bulk upload / Advantage+ / dynamic creative** đẻ hàng loạt biến thể cùng lúc, không phải lên tay từng cái. Số gross thật/ngày cao hơn 30.

## Longevity distribution (active set, theo `start_date`)
| Tuổi ad | Số | % | Ý nghĩa |
|---|--:|--:|---|
| **90d+** | 238 | 17% | evergreen winner sống từ Feb |
| 60–90d | 102 | 7% | proven scaler |
| 30–60d | 472 | 34% | bucket lớn nhất — đang nuôi |
| 14–30d | 158 | 11% | đang chứng minh |
| **<14d** | 431 | 31% | test tươi |

→ **~24% ad chạy >60 ngày** = nền winner vững; **31% tươi <14d** = vẫn test máy móc. Active range: **2026-02-02 → 2026-06-22**.

## Persona network — 17 FB page (theo số ad)
| Page | Ads | Archetype |
|---|--:|---|
| Anna Rodriguez | 385 | Peer (workhorse #1) |
| Margaret Rose | 190 | Peer |
| Vet Talks | 166 | Expert/Vet |
| The Cattery Network | 105 | Institution |
| Susan Davis | 78 | Peer |
| Vet Advice | 74 | Expert/Vet |
| Healthy Cat Blog | 66 | Institution |
| Riverside Animal Rescue | 65 | Cause |
| Dr. Sienna Rose, DVM | 56 | Expert/Vet |
| The Feline Health Study | 41 | Institution |
| The Cat Magazine | 40 | Institution |
| Martha Bennett | 36 | Peer |
| Cat Nutrition Advice | 25 | Institution |
| North Valley Animal Rescue | 22 | Cause |
| Feline Health Institute | 21 | Institution |
| Life With Cats | 16 | Institution |
| Animal Care Veterinary Clinic | 15 | Expert/Vet |

Gộp: **Peer 689 · Expert/Vet 311 · Institution 314 · Cause 87.** Anna Rodriguez vẫn là con ngựa kéo (335→385).

## Longevity champions (winner nó không dám tắt — top theo ngày chạy)
| Days | Persona | Hook (90 ký tự đầu) |
|--:|---|---|
| 141 | Dr. Sienna Rose, DVM | "Before you WASTE money on another contaminated taurine supplement…" |
| 140 | Dr. Sienna Rose, DVM | "I TESTED 11 different taurine supplements in an independent lab… 10 were CONTAMINATED" |
| 140 | The Feline Health Study | "After 15 years as a veterinarian specializing in feline kidney disease, I've diagnosed…" |
| 135 | Animal Care Veterinary Clinic | "I've had to euthanize 6 cats in the past 18 months. Not because they were old…" |
| 131 | Healthy Cat Blog | "I'm so f*cking tired of people saying 'just feed wet food' like it's magic…" |
| 131 | Healthy Cat Blog | "If one more person tells me 'wet food is better than dry food'…" |

→ 3 angle trụ vẫn sống >4 tháng: **(1) taurine contamination + lab-test authority** · **(2) vet euthanasia confession** · **(3) wet-vs-dry rant (giữ profanity `f*cking`)**.

## Delta vs 2026-06-15 (8 ngày)
| | 15/06 | 23/06 | Δ |
|---|--:|--:|--:|
| Active ads | 1,119 | **1,401** | **+282 (+25%)** |
| Creative families | 240 | 310 | +70 |
| % static IMAGE | 98.2% | 98.6% | ≈ |
| Median word count | 3,110 | 2,842 | −268 (ngắn lại chút) |
| Shop now CTA | 827 | 1,109 | +282 |

**Đọc:** trong 8 ngày nó bơm thêm ~280 ad (+25%) và ~70 family creative mới, vẫn 1 SKU / 1 destination, vẫn ~99% static. Đây là **persona-network advertorial machine đang scale aggressive**, không phải account chạy cầm chừng.
