---
type: swipe
date: 2026-06-15
source: "https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=US&q=https%3A%2F%2Fkittysupps.com%2F"
---

# KittySupps Ad Library — full census (2026-06-15)

> Cào toàn bộ active ads (Playwright, chặn-bắt GraphQL → full body không cắt). Số liệu thô, BẤT BIẾN. Phân tích/method ở [[kittysupps-machine]]. Verbatim: [[kittysupps-adlib-verbatim-vomiting]] · [[kittysupps-adlib-verbatim-skin]] · [[kittysupps-adlib-verbatim-litter]]. Bảng đầy đủ: [[kittysupps-adlib-families-index]]. Raw JSON 1,119 ad (cả body, để re-analyze bằng node): `sources/kittysupps-adlib-raw-2026-06.json` (gitignored, local — không commit).

## Quy mô
- **1,119 active ads** → dedup còn **240 creative families** (cùng opening 250 ký tự). Phần còn lại = re-upload + persona-swap (đúng như nghi vấn 13/06, giờ có số).
- **100% → `kittysupps.com/products/taurine`.** Dental destination của bản 13/06 đã **biến mất** — giờ chỉ 1 SKU.
- Format: **IMAGE 1,099 (98.2%)** · VIDEO 20. Long-form gần như toàn static.
- CTA: **Shop now 827** · Order now 292.
- Active date range: **2026-02-02 → 2026-06-14** (filter = active, nên ad chạy từ đầu Feb = winner sống sót nhiều tháng).
- Word count (full primary text): min 727 · p25 **2,432** · median **3,110** · p75 3,377 · p90 **4,292** · max 5,179.

## Persona — archetype (theo số ad)
| Archetype | Ads | Pages |
|---|--:|---|
| **Peer (tên người thật)** | 581 | Anna Rodriguez (335!), Margaret Rose (157), Susan Davis (53), Martha Bennett (36) |
| **Expert / Vet** | 244 | Vet Talks (99), Vet Advice (74), Dr. Sienna Rose DVM (56), Animal Care Veterinary Clinic (15) |
| **Institution / Editorial** | 207 | Healthy Cat Blog (66), The Cattery Network (54), The Feline Health Study (41), Cat Nutrition Advice (25), Feline Health Institute (21) |
| **Cause / Rescue** | 87 | Riverside Animal Rescue (65), North Valley Animal Rescue (22) |

→ **Delta vs 13/06:** Expert/Vet bùng nổ. "Vet Talks/Vet Advice" (173 ad) + nhiều clinic mới — title **"Veterinarian Speaks The Truth.."** giờ là headline thống trị (170 ad). Anna Rodriguez vẫn là workhorse số 1.

## Symptom-doorway taxonomy (mọi cửa ngõ → cùng 1 taurine)
Đây là phát hiện lớn nhất: họ không chạy 1 angle mà **nhân bản hàng chục triệu chứng-cửa-ngõ**, tất cả reframe về **taurine deficiency → bile**. (Số gần đúng — keyword khớp trên hook.)
- **vomit / pate / hairball** — "perfect meat tube", bile không tiêu mỡ
- **litter-clump / kidney** — cục vón to = thận đang chết (winner #1)
- **acne / chin** — "black specks on the chin"
- **skin / over-licking / scratching** — taurine-bile = "chemical detergent" diệt ký sinh trùng ruột
- **cough / heart** — "The Taurine Blockade", early heart failure
- **eye discharge** — "Spent $140 On Eye Drops. Wrong Problem"
- **dull/ugly coat** — "Your Cat's Ugly Coat Is A Warning"
- **IBD / digestive · FIP** — Vet personas
- **false-solution** — "That Water Fountain Isn't Proof You're A Good Cat Mom"

## Top title-card hooks (link headline, theo số ad)
| Ads | Title-card |
|--:|---|
| 170 | Veterinarian Speaks The Truth.. |
| 50 | My Cat's Food Was Slowly Killing Her Heart and I'm Devastated. |
| 50 | I couldn't stop mochi from licking. She DIED… |
| 44 | Loki Died At 6. Simba Started Doing The Same Thing😢 |
| 44 | I spotted something on my Lily's Chin😢 |
| 34 | Shelter Vet Speaks The Truth.. |
| 30 | Goodbye Mochi. You were all I had… |
| 29 | That Water Fountain Isn't Proof You're A Good Cat Mom😢 |
| 27 | I Had Three Cats. Now I Have Two. Don't You Dare Scroll😢 |
| 25× | I Almost Lost My Boyfriend Because Of My Cats / Hershey died and I paid $3,400 / My Cat Nearly Died From IBD / I Could See My Cat's Heart Failing / Is A Street Cat Healthier Than Yours / Your Cat's Ugly Coat Is A Warning |

## Longevity champions (proven evergreen — chạy từ Feb 2026)
| Days | Persona | Title-card |
|--:|---|---|
| 133 | Dr. Sienna Rose, DVM | Trusted by 200,000+ cat parents |
| 123 | Healthy Cat Blog | I Fed Wet Food For 7 Years. Max Still Died😢 |
| 119 | Margaret Rose | Luna Ate Litter For 2 Years. Everyone Laughed😢 |
| 118 | Animal Care Veterinary Clinic | Veterinarian Speaks The Truth About FIP.. |
| 117 | Dr. Sienna Rose, DVM | 75% of Your Cat's Kidneys Are Destroyed Before Bloodwork Shows It |
| 112 | Margaret Rose | Your cat has a 6-week window before the damage becomes permanent |
| 111 | Healthy Cat Blog | Gave Her Taurine For 7 Months. She Died Anyway😢 |

## Signature-phrase frequency (số ad chứa, /1,119) — swipe bank
| Count | Phrase | Vai trò trong skeleton |
|--:|---|---|
| 869 | **bioavailab**(ility) | cơ chế lõi — chữ then chốt (78% ad) |
| 593 | counterfeit | inoculate Amazon |
| 449 | retired (vet/expert) | authority character |
| 444 | **503mg** | reason-why number |
| 396 | Royal Canin · 336 Hill('s) | villain brand |
| 336 | from Amazon · 129 "do NOT buy" | lock-the-click |
| 193 | shelter vet · 192 "Read this entire" | slippery-slide command |
| 168 | Fancy Feast · 95 Tiki Cat | failed-solutions montage |
| 125 | Atopica | villain drug (angle skin/allergy) |
| 117 | $68 (Hill's case) | price anchor |
| 107 | meat tube | sensory signature |
| 52 | credit card debt | identity/cost anchor |
| 44 | Mrs. Williams · 44 best in show | named character / story device |
| 42 | "I don't give a f*k" · 32 "nobody who owns a cat" | flagship hook (giờ chỉ ~3-4% → đã đa dạng hoá) |
| 4 | "I killed him" | hook headline cũ — gần như đã nghỉ |

## Reason-why number bank (lặp gần như verbatim mọi ad)
- KittySupps: **503mg/scoop, 95-98% bioavailability, pharma-grade 99.8%, over-deliver**.
- Đối thủ Amazon/Chewy: 142-194mg thật vs 500mg nhãn (**61-72% underdosed**), bioavailability **20-30%** → mèo nhận ~30-54mg, không phải 500.
- Villain food: nấu **180-200°C phá 60-80% taurine**; grain-free legumes/phytates chặn hấp thu; "taurine added" = legal fiction.
- Market-widener: "**99% of indoor cats** thiếu taurine"; "không thể oversupplement, water-soluble, vô hại".
