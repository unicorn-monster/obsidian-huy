---
type: swipe
date: 2026-06-28
source: "https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=US&q=therapetmd"
product: therapetmd-diffuser
note: "Đối thủ pet anxiety. Calming pheromone diffuser cho chó + mèo, scale ~$1M+/tháng. Cùng buyer là phụ nữ nuôi pet như [[linafahizul-pet-buyer-is-a-woman]]. So sánh được với [[kittysupps-machine]] (cùng kiểu Ad Library census quy mô lớn, nhưng KittySupps là mèo/1 SKU)."
---

# TheRapetMD — Dog funnel teardown + Ad Library census (2026-06-28)

> Cào active ads (Apify curious_coder, US, scrapeAdDetails). **323 active creative**, gom từ 6 FB page khác nhau, **100% đổ về therapetmd.com**. Số liệu thô BẤT BIẾN. Trọng tâm bản này: **mảng CHÓ** (sau khi xác định dog là cỗ máy chính). Sản phẩm: Advanced Calming Diffuser, mechanism = pheromone chó mẹ (DAP "you are safe").

## 1) Census: tỷ lệ Chó vs Mèo (data cứng)

Phân loại 323 ad active theo **landing page đích** (tín hiệu sạch nhất — mỗi ad route thẳng về 1 LDP chó/mèo riêng):

| Nhóm | Creative active | % |
|---|---|---|
| 🐕 Chó | **222** | **68.7%** |
| 🐈 Mèo | **101** | **31.3%** |
| Tổng | 323 | 100% |

→ **~7 chó : 3 mèo.** 3 góc đo độc lập hội tụ: ad spend 69/31 · catalog Shopify 11 SP chó/6 mèo (~65/35) · thị trường pet-calming chung ~62% chó (Mordor 2025).

**Landing page đích (đếm chi tiết):**
- DOG `lpv2-dogs-v2` (anxiety/peeing chung) — 162 *(gồm 6 qua /discount/SHIPNOW, 1 v1)*
- DOG `lp-v3-dog-puppy` (cún tách mẹ) — 39
- DOG `lp-v3-dog-trauma` (rescue trauma) — 21
- CAT `lpv2-c-v1` — 100
- CAT `lpv2-cats-fighting-v1` — 1

**FB pages dùng (spread tactic):** Vet approved products (170) · TheraPet (123) · Vet Life Magazine (24) · Guardian Pets (3) · Therapet MD (2) · The Calm Pet (1). Tất cả → therapetmd.com.

**CTA mix (dog ads):** Learn more **183** · Shop now 30 · See details 9. → **advertorial-first**, KHÔNG bán bằng product ad. Ad là story dài đọc như bài organic → click sang LDP.

## 2) Insight lõi: 1 avatar, 1 cơ chế, NHIỀU cánh cửa

3 LDP chó nhìn như 3 thứ khác nhau nhưng **cùng 1 offer, cùng 1 mechanism, cùng 1 avatar lõi = chủ của con chó rescue/anxious.** Ngay cả ad "indoor peeing" (tưởng về triệu chứng) vẫn lấy **chó rescue + shelter** làm nhân vật trung tâm.

**Con chó rescue/shelter làm 3 việc cùng lúc (lý do nó là winner):**
1. **Định danh avatar** — chủ chó rescue tự nhận ra mình.
2. **Borrowed authority** — "thứ SHELTER dùng" > "sản phẩm của tôi tốt". Shelter = chuyên gia trung lập.
3. **Bằng chứng quy mô** — "50 con chó stress trong 1 toà nhà mà sàn sạch, không mùi" = social proof không bịa được, đập tan hoài nghi.

**Spine cảm xúc dùng chung (giữ nguyên khi clone):**
> "Chó bạn không HƯ, nó đang STRESS / thấy không an toàn → phản ứng sinh tồn, không phải lỗi huấn luyện → shelter đã giải bằng pheromone chó mẹ ('con an toàn rồi') → bỏ stress thì hành vi tự hết."

Thắng vì **gỡ tội cho chủ** (guilt removal) rồi đổ lỗi cho 1 nguyên nhân sinh học mà sản phẩm độc quyền giải được.

**3 cửa = 3 mức awareness (Schwartz):**

| Cửa | Hook vào | Awareness | Ad winner (số lần chạy) |
|---|---|---|---|
| Triệu chứng | Đái bậy / sủa / cắn phá | Problem-aware (volume to nhất) | "Stop Indoor Peeing" (37) |
| Câu chuyện | Rescue trauma / cún tách mẹ | Solution-aware | "Heartbroken" (14), trauma LDP |
| Reframe | "Bad dog là lời nói dối lớn nhất" | Unaware → khơi nhu cầu | "Bad dog is a lie" |

## 3) Dog ad titles (đếm từ active set)

| Lần chạy | Title |
|---|---|
| 106 | Help your anxious dog feel safe and calm *(short trust-badge, prospecting/retargeting)* |
| 37 | How To Stop Dog Indoor Peeing Fast |
| 14 | Your Puppy Isn't Bad. He's Heartbroken. |
| 9 | Help your anxious puppy feel safe and calm |
| 7 | One diffuser wasn't enough. So we made 3 affordable. |
| 6 | My Dog Didn't Need Discipline — He Needed This |
| 4 | What Really Happens After You Plug in TheraPet… |
| 4 | We stopped charging for shipping. One email is why. |
| 3 | I Thought This Diffuser Was a Placebo... |
| 2 | Returned 3 Times For Peeing...Until I Tried This |
| 1 ea | She Has 15 Dogs… And Her House Doesn't Smell · "Bad dog" is the biggest lie · How To Stop Dog Barking/Aggression Fast |

## 4) Offer (giống nhau cả 3 LDP)
- 1 / 2 / 3-pack: **$49 / $54.99 / $74.99**, neo "1 cái mỗi phòng"
- Framing **"$1/ngày cho sàn sạch + chó yên + sự tỉnh táo của tôi"**
- Free shipping ở gói 3-pack (đẩy AOV)
- Refill = **doanh thu lặp lại** (LTV thật ở đây)
- 30-day money-back, "results or refund"
- Urgency: 50% off, stock countdown ("17 Orders Remain"), "59% off" subscription
- Social proof: "300,000+ / 1M+ Pet Parents Served", "4,000+ 5-star Trustpilot", 700,000+ dog parents

## 5) LDP structure (3 trang chó)
- **lpv2-dogs-v2**: HL "Stop Indoor Peeing And Anxiety In Dogs With This Science-Driven Solution" · sub "Your dog isn't being bad—they're silently struggling with stress" · stat "25-45% dogs urinate due to stress" · timeline Week 1-2 Early Calm → Month 3-6 Fully Balanced · 700 sq ft/unit.
- **lp-v3-dog-trauma**: HL "Help Your Dog Settle & Finally Feel Safe" · sub "Your dog isn't broken, they're silently struggling with fear… treat the real cause: their trauma" · "68% of rescue dogs show fear/anxiety" · testimonials: "She Finally Came Out of Hiding", "He Finally Trusts Us".
- **lp-v3-dog-puppy**: HL "Help Your Puppy Finally Feel Safe" · "nervous system overwhelmed" · DAP tách mẹ 6-8 tuần · "I cried watching her".

## 6) VERBATIM SWIPE — 3 template-defining winners

### A. First-person shelter discovery story (winner #1 — ad "Indoor Peeing" / "Didn't Need Discipline")
```
I was mopping up dog pee three times a day until I found what rescue shelters use to stop it 💧
And honestly, it sounds ridiculous. But just hear me out because this changed everything.
My dog Max is a rescue. Got him two years ago from a shelter. Sweetest face you've ever seen.
But this dog peed on everything. The rug. The couch. The bed. The kitchen floor five minutes after coming inside.
I tried pee pads — he shredded them. I tried training classes — $800 and he still marked inside.
I tried CBD chews — did absolutely nothing. I tried enzyme cleaners — my house just smelled like lavender and pee mixed together.
I tried belly bands. Crating. Extra walks before bed. Nothing worked. Two years of this.
[...] Then one day I went back to the shelter where I adopted Max. [...]
50+ dogs in this building. Rescues. Strays. Surrenders. Dogs pulled from hoarding situations. And it didn't smell. At all.
[volunteer] "When a new dog comes in, they're terrified. They pee on everything. They shake. They pace. We used to scrub floors all day long. Then we started using these."
[...] They release the same natural calming signal a mother dog produces for her puppies. It tells the dog's nervous system "this place is safe. No need to mark." She said it's not training. It's not medication. It's biology.
[...] even their worst cases — dogs returned three times — calm down within 48 hours.
[...] The brand is called TheraPet. I plugged one in the living room. One in the bedroom. One in the kitchen.
First 24 hours — not much. Then on day two something shifted. [...] By the end of the week I hadn't mopped once.
[...] This costs about a dollar a day. A dollar a day for clean floors, a calm dog, and my sanity back.
[...] if a plug-in diffuser can calm down 50 traumatized rescue dogs in a shelter — it can calm down your one dog at home who already loves you.
[...] Over 700,000 dog parents have already figured this out. I just wish someone had told me two years and a lot of ruined rugs ago.
```
**Cấu trúc:** Hook "thứ shelter dùng" → tried-everything list (pee pad/$800 class/CBD/enzyme) → shelter revelation (50 dogs, no smell) → mechanism qua miệng volunteer → skeptic-to-believer → timeline day2/week1 → $1/ngày → "shelter calm 50 dogs → calm your 1" → proof số.

### B. Authority advertorial (ad "Your Puppy Isn't Bad. He's Heartbroken.")
```
The Silent Crisis Nobody Is Talking About In American Pet Ownership
The United States is the largest pet owning nation on earth. Over 90 million households own a dog. Since 2020 puppy adoption rates have surged by over 30%.
[...] What Happens To A Puppy Brain At Separation: Mother dogs produce Dog Appeasing Pheromones. DAP for short. [...] DAP tells the puppy nervous system one thing. You are safe. You are home. You can rest.
[...] The average American puppy is removed from his mother between 6 and 8 weeks. The DAP signal disappears overnight. [...] Cortisol spikes. Emergency mode activates.
The Parallel We Refuse To Make: Developmental psychology has shown infants separated from mothers show elevated cortisol [...] We call this attachment trauma. [...] We just do not call it trauma when it happens to a dog. We call it a training problem.
The Behaviors We Are Misreading: Peeing in corners → not a housetraining failure, he is trying to create something familiar. Crying for hours → a distress call. Biting → never completed bite inhibition. Refusing to eat → cortisol suppresses appetite. Clinging → his nervous system needs an anchor.
What Vets Are Actually Seeing: Dr. Rachel Torres, veterinary behaviorist Austin TX [...] "a generation of chronically stressed young dogs being misdiagnosed as behaviorally difficult."
What The Science Says: 2001 study Journal of Veterinary Behavior [...] over 30 peer reviewed studies [...] synthetic DAP reduces anxiety-driven elimination [...] does not sedate. does not medicate.
Your puppy is not bad. Your puppy is not untrainable. [...] They are distress signals.
[...] Click the link below. [...] Last time I checked they were running 59% off on it.
```
**Cấu trúc:** macro stat → khoa học DAP → parallel "attachment trauma ở người" → "behaviors we are misreading" (re-frame từng triệu chứng) → vet trích dẫn tên riêng → study citations → "your puppy is not bad" → CTA mềm 59% off.

### C. Reframe / "regret getting a dog" story (ad "Bad dog is the biggest lie")
```
"Do You Regret Getting a Dog?" That's what I typed into Google at 11 PM on a Tuesday.
[...] The Internet Almost Talked Me Out of It... "My dog is potty trained and STILL pees inside." "The barking. At nothing." [...] "It put so much strain on our relationship."
[...] "Let's go to the shelter. We don't have to do anything. Just look." [...] Then we saw her. Young husky mix. Blue eyes. [...] Luna.
[...] [Shelter manager Diane] pointed to a little white plug-in. "That's a canine pheromone diffuser. Same calming signals a mother dog gives her puppies." [...] "Two days after we plugged those in? Different dog."
[...] "Most scary behavior people warn about? It's not the dog being bad. It's the dog being stressed."
[...] Four Months In... Luna is not perfect. I want to be real. [She barks sometimes, chewed ONE slipper, sheds a lot.] But that's just a dog being a dog. Not the nightmare I was afraid of.
[...] Your dog isn't bad. Your dog is stressed. A stressed dog barks. A stressed dog has accidents. A stressed dog destroys things. It's not behavior. It's survival mode.
[...] 👉 https://therapetmd.com/pages/lpv2-dogs-v2 [...] ✅ 30-day money-back ✅ full refund ✅ Zero risk
```
**Cấu trúc:** hook nỗi sợ tiềm ẩn ("regret getting a dog") → objection dump từ internet → "just look" shelter scene → mechanism qua shelter manager → **honest/balanced review** ("not perfect, sheds, chewed 1 slipper" = tăng tin) → reframe "stressed not bad" → CTA hard với risk-reversal.

## 7) Strategy notes (cho tôi, khi quay lại)

- **Avatar lõi:** người vừa nhận nuôi / đang nuôi chó lo âu, đã thử mọi cách (pee pad, lớp huấn luyện, CBD), mệt tới mức nghĩ tới trả chó, mang mặc cảm "chủ tồi". Pain order: đái bậy (mùi + nhục khi có khách) > sủa đêm > xa cách > cắn phá.
- **Mechanism giữ nguyên:** pheromone chó mẹ / DAP "you are safe". Đây là unique mechanism, đừng đổi.
- **Format-first = advertorial dài, CTA Learn more.** Không bán product ad.
- **Mở CỬA mới vào CÙNG avatar (chỗ họ chưa phủ → mình thắng được):**
  - 🔥 **Sợ pháo hoa / sấm sét** — timely (4/7 Quốc khánh Mỹ), spike khổng lồ, mùa vụ. Ưu tiên cao nhất nếu vào hè.
  - Chó già lú lẫn / lo âu tuổi già.
  - Lo âu xa cách hậu return-to-office (chó nuôi mùa dịch).
  - Sợ đi vét / cắt tỉa lông.
  - Nhà có em bé mới / chuyển nhà.
  - Nguyên tắc: KHÔNG tạo SP mới, chỉ tạo cửa hook mới đổ về cùng funnel + offer.
- **Ma trận creative:** Cửa × Format (shelter story / authority advertorial / reframe / short trust-badge). Test 3 cửa × 2 format = 6 concept để vào.
- **Offer:** clone 3-pack neo "1 mỗi phòng" + $1/ngày + free ship + 30-day MBG. Lợi nhuận thật ở **refill subscription** — auto-ship từ đơn đầu.

## Cross-links
- Buyer = phụ nữ: [[linafahizul-pet-buyer-is-a-woman]]
- Cùng kiểu census quy mô lớn (mèo, 1 SKU): [[kittysupps-machine]] · [[kittysupps-adlib-census-2026-06-23]]
- Offer mechanics: [[Everything you need to know about offers (this has made us over $500M)]]
