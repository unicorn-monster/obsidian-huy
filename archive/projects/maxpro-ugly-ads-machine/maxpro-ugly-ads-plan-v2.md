---
date: 2026-06-24
status: spec
product: maxpro
supersedes: maxpro-ugly-ads-plan
sources: [kittysupps-adlib-census-2026-06-23, kittysupps-adlib-raw-2026-06-23]
---

# MaxPro ugly-ads machine — plan v2 (structure-clone)

> [!abstract] Insight đổi plan (24/06)
> v1 nghiên cứu *cách* KittySupps làm nhưng **chưa bao giờ nhìn raw STRUCTURE** của primary text / headline / page nó → tự viết từ đầu → ra "ngu ngu". v2 = **clone đúng bộ xương thật**: reverse-engineer advertorial thật của KS thành **~72 skeleton tái sử dụng**, chỉ cắm thông tin Maxpro vào. Structure win rồi thì apply cho **bất kỳ sản phẩm nào** sau này.

## Cỗ máy KS thật — dựng lại 100% từ data (06-23, 1,401 ad)
Nguồn: [[kittysupps-adlib-census-2026-06-23]] + raw JSON 1,401 ad.

| Lớp | Số | Nhân | Cái gì biến thiên |
|---|--:|---|---|
| SKU / đích | **1** | — | 100% → 1 link taurine |
| Persona page | **17** | — | archetype (Peer/Expert/Institution/Cause) |
| **Core script** | **~72** | ~4 script/page | story + mechanism + headline. **Dính chặt 1 page** (1/72 ngoại lệ) |
| Primary-text variant | **313** | ~5 hook/script | **CHỈ ~50–190 từ đầu (HOOK)**. Phần còn lại **93–100% giống hệt**, cùng headline, cùng page |
| Image-ad | **1,401** | ~5 ảnh/variant | cái ảnh. `1 ad = 1 ảnh`. Ảnh 100% bespoke, không tái dùng |

Đọc dọc: **1 SKU → 17 page → 72 script → 313 text (đổi hook) → 1,401 ad (đổi ảnh)**. Khớp số: 72×4.3≈313, 313×4.5≈1,401.

## 3 niềm tin cũ phải sửa (data ép — flag mâu thuẫn)
1. ✅ **"5 ảnh" KHÔNG phải giả thiết — nó ĐÚNG.** Median = mode = 5 (153/313 text dùng đúng 5). Winner scale lên **10–14**. → Luật: *5 mặc định, 10–14 khi thắng*.
2. ❌ **"1 script × 6 persona = 6 Entity-ID" SAI.** Script dính 1 page (1/72 ngoại lệ kể cả khi strip tên/địa danh). KS **không** bê script đi vòng persona.
3. ✅ **Bộ nhân thật = đổi-hook (×5) + đổi-ảnh (×4).** Hook = 250 ký tự đầu = **ranh giới Entity-ID** → hook là đòn bẩy, ảnh là phụ.
4. 🔁 **Persona network = rải tải / chống ban cho volume**, KHÔNG phải nhân script. KS có 17 page để không page nào burst quá → sống fatigue/ban.

## Đơn vị gốc = STRUCTURE (72), không phải text (313)
```
1 structure = { core body skeleton (phần 93–100% lõi)
              + hook bank (~5 opening, đòn bẩy thật)
              + 1 headline
              + 1 persona-archetype
              + image slots (5 → 14) }
```
Index 72 structure (tính từ data): **Peer 32 · Institution 20 · Expert 15 · Cause 5**. **29 cái proven ≥60 ngày** (24 ≥90d) = **seed set** để launch trước.

## Artifact 1 — `maxpro-structure-library` (Phase A, asset 1 lần)
Mỗi structure = 1 row. Schema → xem [[maxpro-structure-library]] (đã seed S01 mẫu).

| Field | Nội dung |
|---|---|
| `id` | S01–S72 |
| `archetype` | Peer / Expert / Institution / Cause |
| `ks_headline` | headline KS đại diện |
| `skeleton` | beat-map phần lõi giống nhau, có `[SLOT]` |
| `hook_bank` | ~5 hook KS verbatim (pattern reference) |
| `ks_ref` | full body KS dài nhất = scaffold |
| `proven_days` | tuổi thọ (≥60d = seed) |
| `maxpro_persona` | Elle/May/Carol/DogGroomingTips/SecondChance |
| `verdict` | **PORT** / **RE-STAGE** / **KILL** |
| `note` | #hook, #ảnh, KS page |

\+ `maxpro-hook-bank` — gom ~313 hook KS theo *pattern* (scam-reversal / loss-cascade / wild-animal-logic / begging / financial / observe-now / forbidden-truth…), tag loại = kho mở bài.

> [!danger] Luật RE-STAGE (load-bearing) — KS winner mạnh nhất chạy bằng thứ Maxpro ĐÃ CẤM
> Top KS proven = **death / bệnh ẩn / stat bịa / "6-week window"** (stage 4-5). Maxpro = **stage 2-3** (nỗi đau đã cảm). → Port **bộ xương + pattern hook**, KHÔNG port cơ chế. Mỗi structure gắn verdict:
> - **PORT** — skeleton + hook + proof map sạch sang stage 2-3 (scam-reversal, groomer-confession, cost-vs-groomer, peer trial-error).
> - **RE-STAGE** — xương portable nhưng phải thay lõi death/disease → UMP Maxpro (clipper crush/splinter, quick mọc dài, chảy máu/limping).
> - **KILL** — cả structure LÀ death-clock/bệnh-ẩn bịa, không có analog stage 2-3 → bỏ.
> Guardrail [[compliance]] của v1 giữ nguyên: 0 death, 0 bệnh ẩn, 0 stat bịa, proof thật 18,587, humanizer (0 em-dash), deny-sale.

## Artifact 2 — combo generator (Phase B, hằng ngày)
Input = 1 structure id → output qua **QA gate** ([[ugly-ads-method]] §QA) + format gate (memory):
- **full body Maxpro** (viết 1 lần, line-break mỏng, raw register, stage 2-3)
- **5 hook** (đổi ~50–190 từ đầu, giữ nguyên thân)
- **headline** ([[maxpro-headline-system]])
- **page name** (persona map)
- **4 image prompt / hook** ([[maxpro-image-prompt-system]]) — 5→14 khi thắng
- note: structure id + hook nào

## Cadence (data-locked)
```
1 ngày = 1 core structure (từ 29 seed proven, đã RE-STAGE)
         × 5 hook (đổi đầu, giữ thân)
         × 4 ảnh/hook
         = 20 ad, dồn 1 persona-page
```
KS data đỡ lưng: 88% ad/structure lên trong ĐÚNG 1 ngày · ngày-đỉnh median **5 hook × 16 ảnh** · ads/page/day p75–p90 = **18–23**. → 20/page/day = đúng nhịp KS.
**Hook > ảnh:** 5 hook → ~5 Entity-ID; 5 ảnh cùng hook → gộp ~1. Cùng 20 imgs, **5×4 > 4×5** về số vé auction.
Month 1 = 29 seed proven, ~1 structure/day. Month 2 = 43 còn lại + scale winner (10–14 ảnh).

## Page / ban strategy
> [!warning] 5 persona hiện tại QUÁ ÍT cho 20/day
> Peer 32 structure trên 2 page (Elle/May), Institution 20 dồn 1 page (Dog Grooming Tips) = burst quá → ban. KS chia Institution ra **7 page**. → Cần **2–4 page/archetype** trước khi scale volume. Page mới **ramp 5 → 10 → 20** khi account già; nuôi organic vài ngày trước khi flood ([[maxpro-persona-network]]). Xoay archetype để page nghỉ giữa burst.

Persona map (asset sẵn có): Peer→[[Elle Zena]]/[[May Ebert]] · Expert→[[Carol the Honest Groomer]] · Institution→[[Dog Grooming Tips]] · Cause→[[Second Chance Dog Rescue]].

## Build sequencing
1. **Phase A** — reverse-engineer **29 seed proven** thành library row (fan-out agent, mỗi cluster độc lập). Mở 43 còn lại ở month 2.
2. **Phase B** — daily 1 structure/day từ seed → 20 ad. Launch [[media-buying]]: broad, go-live nửa đêm, đọc ATC ngày 1 (<5% kill · 5–8% carry · >8% scale).
3. **Scale** — winner: +hook, +ảnh (10–14), thêm page/archetype, [[offer-and-cta]] upsell.

## Build queue — 20 slot ưu tiên (chốt từ data KS win + portable)
72 skeleton → **41 KILL** (bệnh/behavior ko analog) · **31 portable** → gom **8 angle family**. 1 slot = 1 skeleton/ngày.

| Family | KS win | Verdict | Maxpro angle |
|---|--:|---|---|
| Authority "Speaks Truth" | 50+24+24 ad | PORT | groomer/vet-tech nói thẳng về nail tool |
| Scam-reversal "tested N" | 139d | PORT | S01 ✅ |
| Death-clock 2-con | 50+44 ad | RESTAGE→máu | làm chó chảy máu, con thứ 2 sợ theo |
| Cost/ER-bill regret | 25×3 ad | RESTAGE | $1,900 ER cho quick rách mà $40 ngừa |
| Discovery "tôi để ý..." | 44 ad | RESTAGE | móng quặp đâm đệm / chó đi cà nhắc |
| Bloody-towel confession | 25 ad | RESTAGE→máu | khăn dính máu → bỏ clipper (= winner ad) |
| Rant "tired of just-X" | proven | PORT | chán "cứ mang ra groomer" |
| Bond-strain | 25 ad | RESTAGE | nail day phá vỡ tin tưởng chó↔chủ |

Queue (thứ tự): **S01✅** scam · 1 Groomer-Speaks-Truth · 2 clipper-blood+con-2-sợ-theo · 3 bloody-towel · 4 cost-math · 5 ER-bill-$1900 · 6 discovery-móng-quặp · 7 rant · 8 vet-tech-confession · 9 promise-suýt-cắt-vein · 10 senior-mobility · 11 rescue-founder-anti-sedation · 12 wasted-$80-amazon · 13 black-nail-power · 14 fear-free-no-muzzle · 15 us-vs-them · 16 clicking-warning · 17 "15y-vứt-clipper" · 18 bond-strain · 19 quiet-2speed-reveal · 20 desensitization-roadmap.
Slot 1-9 = clone top KS; 10-20 = angle-mult quanh cùng mechanism.

## Open / next
- Pull KS **negative review** (corpus hiện toàn 5★ → mù 1-2★) → [[maxpro-voc-insights]].
- Image-archetype analysis: 5 ảnh/text của KS THẬT RA là gì (Us-vs-Them / big-quote / native-screenshot…)?
- Map verdict PORT/RE-STAGE/KILL cho cả 72.
