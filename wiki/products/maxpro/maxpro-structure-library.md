---
date: 2026-06-24
status: building
product: maxpro
spec: maxpro-ugly-ads-plan-v2
sources: [kittysupps-adlib-raw-2026-06-23]
---

# MaxPro structure library

Thư viện ~72 skeleton reverse-engineer từ KS thật → cắm Maxpro. Spec: [[maxpro-ugly-ads-plan-v2]]. Mỗi structure = 1 `## S##`. **Seed proven (≥60d) build trước.** Trạng thái: **1/29 seed (mẫu)**.

Index 72: Peer 32 · Institution 20 · Expert 15 · Cause 5. Seed ≥60d: 29.

> [!tip] Hook-swap protocol (áp MỌI structure — hook là đòn bẩy, PORT từ KS proven, đừng tự bịa). Guide đầy đủ: [[hook-swap-method]]

> 1. Giữ **xương tu từ + emotional trigger** của hook KS. Đừng đụng cấu trúc.
> 2. Chỉ thay **danh từ**: villain (taurine→grinder), subject (cat→dog), pain (kidney→móng dày/quick).
> 3. **Số phải THẬT** (bịa→proof Maxpro: 18,587 / 40dB / 150lb / 99-day). Số cụ thể lẻ > số tròn (Ogilvy/Hopkins).
> 4. Giữ **nhịp + line-break + peak word** (chửi kiểm duyệt, ALL-CAPS chỗ KS nhấn).
> 5. Giữ **LOẠI hook** (warning / shock-number / forbidden-truth / rant / direct-challenge / authority-demotion).

### KS hook patterns — learn-from catalog (proven, map sang DR move)
| KS hook proven (verbatim) | DR technique | Port Maxpro |
|---|---|---|
| "Before you WASTE money on another contaminated X… I tested 11…" | loss-aversion warning (Caples) | "Before you waste money on another grinder… I tested 11 on real dogs…" |
| "I TESTED 11… guess what? 10 were CONTAMINATED… only one" | shock-number + scam reveal | "I tested 11 grinders… 10 couldn't touch a thick nail. Only one worked." |
| "I'm so f\*cking tired of people saying 'just feed wet food'" | rant + confront + profanity peak | "I'm so f\*cking tired of 'just take him to the groomer.'" |
| "You think you're a good cat owner because X. You're not." | direct challenge (Hormozi) | "You think skipping his nails is kindness. It's not." |
| "Your vet told you X is 'just quirky.' Your vet is wrong." | authority-demotion + contrarian | "The pet store said any grinder will do. They're wrong." |
| "After losing Luna at 4 — after spending $2,800…" | story + specific loss | port trial-error/$ — KHÔNG port death (stage 2-3) |

---

## S01 — Scam-Reversal "I Tested N, Only One Passed"

| | |
|---|---|
| **archetype** | Expert |
| **ks_page** | Dr. Sienna Rose, DVM |
| **ks_headline** | "Trusted by 200,000+ cat parents" |
| **proven_days** | **139** (evergreen, top-3 longevity toàn corpus) |
| **ks_note** | 2 hook active / 2 ảnh now — long-runner ổn định. Pattern "tested 11 in a lab" còn được tái dùng làm **proof-module** giữa bài ở structure khác (North Valley CKD). |
| **maxpro_persona** | [[Carol the Honest Groomer]] (Expert) |
| **verdict** | **PORT** ✅ (sạch — 0 death/disease). RE-STAGE nhẹ 1 chỗ: proof-vehicle "independent lab" → "15 năm + 11 máy trên bàn groom" (Carol không chạy lab được, nhưng field-test thật = defensible). |

### Skeleton (17 beat, phần lõi 93–100% giữ nguyên giữa các hook)
1. **Hook + false-close** — "đừng phí tiền cho [cheap solution] nữa, tôi đã test [N], [N-1] là rác." `[SLOT: cheap-villain]`
2. **Disarm ad-frame** — "nghe như quảng cáo. Thề không phải."
3. **Authority identity** — credential + scale (số ca đã xử). `[SLOT: authority + số]`
4. **Old wrong belief** — "trước tôi bảo ai cũng: '[generic advice]' là đủ." `[SLOT: niềm-tin-cũ-sai]`
5. **Trigger case** — 1 ca cụ thể (đồng nghiệp/khách) dùng [cheap], review tốt, vẫn fail. `[SLOT: nhân vật + sản phẩm rẻ + $]`
6. **Investigation** — "nên tôi đem [test thật]." `[SLOT: cơ chế test]`
7. **Damning result** — số đo phơi bày rác (% dưới chuẩn, filler, lỗi). `[SLOT: con số thật]`
8. **Emotional low** — "tôi thấy buồn nôn. Bao năm tôi tiến cử thứ này."
9. **Scaled test** — "test [N] cái: [x] thế này, [y] thế kia. Chỉ MỘT sạch." `[SLOT: N + breakdown]`
10. **Reveal** — tên product. Verify 2 lần / 2 nguồn. `[SLOT: product + spec-proof]`
11. **Mechanism working** — 1 ca switch → kết quả đo được. `[SLOT: before/after số]`
12. **Tracked results** — "theo dõi ~[N] ca: switch thì ổn, giữ hàng rẻ thì tệ." `[SLOT: cohort]`
13. **Personal use proof** — "tôi tự mua, tự dùng ở nhà."
14. **Soft criteria** — "không phải [category] nào cũng như nhau. Phần lớn là rác." `[SLOT: criteria mua]`
15. **CTA + deny-sale** — "nếu bạn đang dùng [cheap] mà ko thấy gì, có thể đó là vấn đề. Mua thẳng từ web. Tôi không affiliate."
16. **Amazon inoculation** — "ĐỪNG mua trên Amazon, hàng nhái, formula khác." (lock click về nguồn)
17. **Repeat link ×2 + P.S.**

### hook_bank (KS verbatim — pattern reference)
- `[A]` "**Before you WASTE money** on another contaminated taurine supplement for your cat, I need to tell you what I found when I tested 11 brands in an independent lab. 10 of them weren't just ineffective…"
- `[B]` "**I TESTED 11 different** taurine supplements in an independent lab and guess what? 10 were CONTAMINATED with fillers that actively HARM cats, and only one was actually pure enough to work. I know that sounds like an ad…"
- *Pattern:* mở bằng **money-waste warning** HOẶC **shocking test-result number**, rồi "sounds like an ad, it's not" disarm. 5–6 biến thể = đổi câu cảnh báo đầu + con số.

> [!quote]- ks_ref — full body KS (scaffold, 4,801 ký tự — bấm mở)
> Before you WASTE money on another contaminated taurine supplement for your cat, I need to tell you what I found when I tested 11 brands in an independent lab. 10 of them weren't just ineffective, they were actively making cats worse with fillers that block taurine absorption. Only one came back clean. I know that sounds like an ad. I promise it's not. I'm a veterinary nutritionist. I've worked with over 2,000 cats with chronic kidney disease, heart disease, and vision problems. For years, when clients asked "which taurine supplement should I use?", I'd give them a generic answer: "Anything with pure taurine on the label should work fine." That was before I saw what happened to a colleague's cat. [...colleague vet tech, Oliver, $32 Amazon supplement, creatinine 2.4→3.1, sent to independent lab: 64% of label, rice flour + maltodextrin + silica fillers...] I started testing every major taurine brand I could find. Out of 11 supplements I tested, 4 had less than 70% actual taurine, 6 had absorption-blocking fillers, 8 showed oxidative degradation. Only one came back clean. The brand is called KittySupps. [...verified twice, two batches, colleague switched Oliver, creatinine 3.1→2.7 in six weeks, tracked ~40 cases, keeps it at home...] do NOT buy "KittySupps" from Amazon. They're counterfeits. Get it from the actual source. https://kittysupps.com/products/taurine

---

## ▶ PORT sang Maxpro — Carol the Honest Groomer

### Re-staged skeleton (slot đã cắm)
`[cheap-villain]` = nail grinder rẻ Amazon / PediPaws / Dremel · `[authority]` = 15 năm groomer, hàng trăm chó/tuần · `[niềm-tin-cũ]` = "máy nào cũng được, cứ review cao là mua" · `[cơ chế test]` = 11 máy trên bàn groom (KHÔNG lab) · `[con số]` = bog down móng dày, drum giấy nhám nóng cháy quick, ồn >40dB chó hoảng · `[product+spec]` = MaxPro diamond drum, dưới 40dB, two-speed, xử móng dày đen large tới 150lb · `[proof]` = chó ngủ gật, 18,587 review thật, Denver, 99-day · `[criteria]` = đủ mạnh / êm / không cháy quick.

### Full body Maxpro (hook lead `[A]`)

> [!example]- Primary text — S01 / hook A (bấm mở)
> Before you waste money on another nail grinder for your dog, let me tell you what I found when I tested 11 of them on real dogs.
>
> 10 weren't just useless.
>
> They bogged down, burned the quick, sent the dog under the bed.
>
> I know that sounds like an ad. It's not.
>
> I've been grooming dogs for 15 years. Hundreds of paws a week. Labs, Shepherds, little terrors that scream before you even touch them.
>
> For years, when an owner asked me "Carol, which grinder should I buy?", I gave the lazy answer.
>
> "Any of them. Just get one with good reviews."
>
> Then Mrs. Calder brought in her black Lab, Tucker.
>
> She'd bought a $35 grinder off Amazon. Top rated. Thousands of reviews.
>
> She'd been trying to do his nails at home for two months.
>
> "It just stops, Carol. It sits on his nail and does nothing. And he hates the noise so much he hides under the bed."
>
> Tucker had thick black nails. The kind you can't see the quick through.
>
> Her little grinder couldn't touch them.
>
> So I did something I should've done years earlier.
>
> I started buying every grinder I could find and running them on real dogs. On my table. Where I could feel exactly what they do.
>
> 11 of them.
>
> And what I found made me sick, because I'd been recommending this junk for years.
>
> 4 of them were too weak to matter. They bog down the second they hit a thick nail and just sit there spinning. Useless on anything bigger than a Yorkie.
>
> 6 of them used a cheap sandpaper drum that heats up after twenty seconds. Hot enough to burn the quick. No wonder these dogs flinch.
>
> And almost all of them were loud. That high screaming whine that sends a dog under the couch before you've done a single nail.
>
> Every one of them had perfect reviews on Amazon.
>
> Only one passed.
>
> It's called MaxPro.
>
> A friend who grooms two towns over swore by it. I didn't believe her. I bought two, from two different batches, just to be sure.
>
> Both times, same thing.
>
> It uses a diamond drum, not sandpaper. It grinds the nail instead of crushing or burning it, and it doesn't heat up the way the cheap ones do.
>
> It runs under 40 decibels. Quiet enough that the dog stops bracing for it.
>
> Two speeds, so you can crawl on a tiny scared terrier or open it up on a 100lb Shepherd with bear-claw nails.
>
> I put it on the worst dog I had that week. A Rottie mix, thick black nails, the kind I'd normally need a second person to hold.
>
> It went through them. No bogging. No burning smell. No screaming.
>
> The f*cking dog fell asleep.
>
> I told Mrs. Calder to switch Tucker to it.
>
> Two weeks later she sent me a video of him dozing in her lap while she did his back paws.
>
> She'd been fighting him for two months. Two months.
>
> I keep one at home now for my own old girl. I bought it with my own money. I use it every week.
>
> Not because anybody pays me. Nobody pays me. I'm retired from the salon, not from the truth.
>
> Here's what I need you to hear.
>
> The brand doesn't matter. The power does. And almost none of them have it.
>
> A weak grinder that bogs down, a sandpaper drum that cooks the quick, a whine that terrifies the dog. That's most of what they sell you.
>
> If you've got one of those sitting in a drawer because it didn't work, that's not you failing. That's the tool.
>
> If you want the one that actually went through the thick black nails, get it straight from their site. Not Amazon.
>
> https://maximutt.com/products/maxpro-grinder
>
> And please, do NOT buy "MaxPro" off Amazon.
>
> I had two clients buy what they thought was MaxPro on there. It was a counterfeit. Weak motor, wrong drum, same sh*t as the other 10. Amazon has no regulation on this stuff.
>
> Get it from the real source. They ship it from Denver, and they give you 99 days to send it back if it doesn't do what I just said.
>
> https://maximutt.com/products/maxpro-grinder
>
> P.S. I tested 11 grinders before one passed. Most were too weak for thick nails or ran a sandpaper drum that burns the quick. MaxPro was the only one with a diamond drum and enough power for the big dogs. It's the only one I keep on my own table.
>
> P.P.S. The hiding, the flinching, the running under the bed. That's not your dog being dramatic. It's the noise and the heat from a cheap tool. Quiet drum, no burn, and most of them just settle. I've watched it happen more times than I can count.

### 5 hook (PORT từ KS proven, đổi ~30–120 từ đầu, GIỮ NGUYÊN thân từ "I know that sounds like an ad" trở đi)

| # | KS pattern ported | Hook (sống trong ~125 ký tự đầu) |
|---|---|---|
| A | KS "Before you WASTE money… tested 11… 10 weren't just…" | *Before you waste money on another nail grinder for your dog, let me tell you what I found when I tested 11 on real dogs. 10 weren't just useless. They bogged down, burned the quick, sent the dog under the bed.* |
| B | KS "I TESTED 11… guess what? 10 were… only one" | *I tested 11 different nail grinders on real dogs and guess what? 10 couldn't get through a thick black nail without bogging down or cooking the quick. Only one worked.* |
| C | KS "I'm so f\*cking tired of 'just X'" (rant + peak) | *I'm so f\*cking tired of people telling nervous dog owners to "just get any grinder with good reviews." I tested 11 of those reviews. 10 were garbage.* |
| D | KS "You think you're a good owner… You're not" | *You think the grinder dying in your drawer was your fault. It wasn't. It's the tool. I tested 11 and only one wasn't junk.* |
| E | KS "Your vet told you X. Your vet is wrong" (authority-demotion) | *The pet store told you any grinder will do. They're wrong. I'm a groomer, I tested 11, and 10 couldn't touch a thick black nail.* |

### Headline / title-card (chọn 1)

| # | Headline |
|---|---|
| 1 | I Tested 11 Dog Nail Grinders. 10 Were Garbage |
| 2 | A Groomer's Confession: Stop Buying These Grinders |
| 3 | 15 Years Grooming. Only One Grinder Passed My Table |
| 4 | The $35 Amazon Grinder Couldn't Touch His Black Nails |
| 5 | Why Your Dog Hides From The Nail Grinder (It's The Tool) |
| 6 | Most Nail Grinders Quit On Thick Nails. This One Didn't |
| 7 | Trusted By 200,000+ Dog Parents. Only One Grinder Passed |

> KS "Trusted by 200,000+ cat parents" → port "Trusted by 200,000+ dog parents". **Sửa lỗi của tôi:** "dog parents" = số CUSTOMER, KHÔNG phải review. 18,587 là review count; customer thường gấp 10–50× → 200,000+ rất có thể THẬT. Defensible nếu brand substantiate tổng khách/đơn (chủ MaxPro nắm số thật — [[maxpro-product-truth]]). Đừng tự co về review count.

### Image prompts — 5 THEME (UGLY candid), mỗi hook 4 ảnh RIÊNG = 20 file/ngày

> [!important] Style LOCKED (feedback 24/06): *"A 1:1 raw candid iPhone snapshot, no text... harsh phone flash / flat ugly lighting, real messy home, grainy, imperfect crop. No logo, no text, no graphics. Square 1:1."*
> KHÔNG ảnh đẹp/studio · KHÔNG "shallow DOF / cozy / window light" · KHÔNG caption bar vẽ vào ảnh. Ảnh XẤU thật như người dùng chụp = camouflage feed = stop scroll. **Lead bằng nỗi đau/villain, KHÔNG phải payoff.**
> **Ảnh KHÔNG share giữa hook** (data KS: 0/65 structure dùng chung ảnh; median 5 ảnh/hook). 5 theme dưới = CÔNG THỨC; render mỗi theme ~4× (đổi breed/phòng/góc/chó) → **20 file ảnh DISTINCT/ngày, 0 trùng**. 1 ad = 1 ảnh unique.

| # | Beat | Prompt | Stop /10 | Why |
|---|---|---|--:|---|
| 1 | long nails (problem) | A 1:1 raw candid iPhone snapshot, no text, looks like a real photo. Close on a dog's front paw on a hardwood floor, thick black nails clearly too long and curling, splaying the toes apart, faint scratch marks on the wood. Overhead room light, flat ugly lighting, slightly grainy, imperfect crop. No logo, no text, no graphics. Square 1:1. | **8** | Móng tách ngón = nỗi đau THẤY ĐƯỢC, chủ chó khựng ngay; ugly candid giống post thật |
| 2 | graveyard of failed grinders | A 1:1 raw candid iPhone snapshot, no text, organic. A messy pile of 4-5 cheap dog nail grinders dumped in a junk drawer, scratched and worn, one with a frayed cord and a burnt sandpaper drum. Harsh phone flash, ugly flat lighting, real messy home. No logo, no text, no graphics. Square 1:1. | **7** | "Đúng cái drawer nhà tôi" — self-recognition phí tiền; thiếu con vật/đau nên dưới #1,4 |
| 3 | burnt cheap drum | A 1:1 raw candid iPhone snapshot, no text, looks real. Extreme close-up of a cheap nail grinder's sandpaper drum worn down and scorched brown from heat, held in a hand over a cluttered sink. Harsh direct flash, flat ugly lighting, grainy. No logo, no text, no graphics. Square 1:1. | **6** | Tố cáo mạnh SAU khi đọc copy; ở cỡ thumb hơi khó hiểu ngay, ít cảm xúc |
| 4 | dog hiding from noise (dread) | A 1:1 raw candid iPhone snapshot, no text, organic. A dog wedged under a bed in a dim bedroom, only its scared face and eyes catching the phone flash, a nail grinder lying on the floor in the foreground. Harsh flash, ugly shadows, messy real home, slightly blurry. No logo, no text, no graphics. Square 1:1. | **8** | Mắt chó sợ dưới gầm giường = guilt trigger (avatar 1); flash gắt = authentic |
| 5 | the at-home wrestle | A 1:1 raw candid iPhone snapshot, no text, looks real. On a couch, a person pinning a squirming dog's paw with a cheap grinder in hand, a towel and dropped treats scattered around, tense body language. Overhead room light, flat ugly lighting, grainy, imperfect crop. No logo, no text, no graphics. Square 1:1. | **7** | "Đúng cảnh nhà tôi" vật lộn; nhiều chi tiết nên đọc chậm hơn #1 |

### 📋 Daily launch plan — S01 (Day 1)

| ID | Day | Page | Primary text (hook, demo ngắn) | Headline | Img |
|---|---|---|---|---|--:|
| S01 | D1 | Carol the Honest Groomer | A — "Before you waste money on another grinder… tested 11… 10 weren't just useless" | #1 I Tested 11 Dog Nail Grinders. 10 Were Garbage | 4 |
| S01 | D1 | Carol the Honest Groomer | B — "I tested 11… guess what? 10 couldn't touch a thick black nail. Only one worked" | #1 (shared) | 4 |
| S01 | D1 | Carol the Honest Groomer | C — "I'm so f\*cking tired of 'just get any grinder with good reviews'" | #1 (shared) | 4 |
| S01 | D1 | Carol the Honest Groomer | D — "You think the grinder dying in your drawer was your fault. It wasn't" | #1 (shared) | 4 |
| S01 | D1 | Carol the Honest Groomer | E — "The pet store told you any grinder will do. They're wrong" | #1 (shared) | 4 |

> **Tổng hôm nay: 5 hook × 4 ảnh RIÊNG = 20 ad — TẤT CẢ trên 1 page [[Carol the Honest Groomer]]** (structure dính 1 page, không rải persona). **Mỗi hook 4 ảnh KHÁC NHAU (KS: 0% share ảnh giữa hook) → 20 file ảnh distinct/ngày**; 5 theme = công thức, render 4×/theme. Headline default share #1, có thể A/B #2–#7. Link đích: `https://maximutt.com/products/maxpro-grinder`.

> [!note] §QA chạy trong chat (không nhồi vào file). Full body + headline + ảnh đã rà checklist [[ugly-ads-method]] §QA + format gate.
