---
sources: [native-statics-machine-guide]
updated: 2026-08-27
---

# Native copy prompt chain — model-don't-generate (7 prompt)

Nguồn: [[native-statics-machine-guide]]. Đây là bộ prompt sản xuất cho [[native-statics-machine]] — biến 1 ad đang thắng thành hàng chục bản copy long-form native trong vài phút mỗi bản. Giữ **nguyên văn tiếng Anh** vì đây là template chạy trực tiếp, không phải lý thuyết.

> [!important] 2 nguyên tắc nền — sai cái này thì cả chain vô dụng
> **1. Model, đừng generate.** Claude không nghĩ ra native thắng từ trang trắng. Việc nó làm được là **clone bộ xương của một ad đã thắng rồi mặc áo sản phẩm mình vào**.
> **2. Lấy ĐÚNG 1 ad mẫu.** Long-runner 30-60+ ngày active từ swipe board — auction đã bỏ phiếu rồi. **Một, không phải ba.** Feed nhiều ví dụ cùng lúc làm nhoè cấu trúc; 1 ví dụ giữ DNA sạch.

**Phân bổ công sức:** dồn **90% vào concept + hook. Viết là phần rẻ.** Hook mạnh + body trung bình vẫn in tiền. Hook yếu + body đẹp chết ở gate $5 ([[native-statics-machine]] §2 gate).

**Vì sao đáng làm native dài:** **primary text làm luôn việc của prelander.** Reader tới PDP đã được bán xong → chạy thẳng vào PDP, bỏ được 1 bước funnel ([[funnel-and-landing]]).

---

## Prompt 1 — Analysis (tháo ad ra lấy phụ tùng)
13 mục. Mục 10-13 (slippery slide, Schwartz awareness, sophistication, desire+conversation) là phần nâng cấp so với mọi teardown-prompt cũ trong vault → [[market-awareness]].

```
Analyze this long-form native Meta ad in complete detail. I'm going to use your analysis as a specification for writing a new ad for a different product, so be precise.

Break down:
1. THE STRUCTURE — every section in order, what each one does, and roughly how many words each gets. Label the beats: hook, narrator introduction, the problem, failed solutions, the mechanism explanation, product entry, proof, offer, and any P.S. blocks.
2. THE HOOK — quote the first 125 characters exactly. What loop does it open? Why can't you stop reading?
3. THE NARRATOR — who is telling this story? Age, job, town, life details. Which boring, specific details make them feel real?
4. THE VOICE — sentence length, paragraph rhythm, line-break style, formality level. Quote 3 lines that define the voice.
5. THE EMOTIONAL ARC — what the reader feels at each stage, in order — and name the ONE dominant emotion the whole ad keeps intensifying.
6. PRODUCT ENTRY — at what percentage of the ad does the product first appear, and through what device (a relative, an expert, a stranger, a discovery)?
7. THE PROOF — list every proof moment. Note whether the proof is numbers, or observed moments — things other people said and did.
8. THE CLOSE — how it asks for the sale, and how many times it closes.
9. WORD COUNT — total.
10. THE SLIPPERY SLIDE — quote 3 places where a sentence exists only to make you read the next one. That pull-forward is the engineering.
11. AWARENESS LEVEL (Schwartz) — which of the five levels does this ad ENTER at: unaware, problem-aware, solution-aware, product-aware, or most-aware? Quote the line that proves it.
12. MARKET SOPHISTICATION — which claim stage is this copy playing: a fresh claim, a bigger claim, a mechanism, an improved mechanism, or identity? And is the mechanism NAMED — a proprietary phrase that makes the "why it works" feel new? Quote it if so.
13. THE DESIRE + THE CONVERSATION — which existing mass desire is this ad channeling (desire is never created, only aimed), and what conversation already running in the reader's head does the first line step into?

Do not rewrite the ad. Do not improve it. Output the analysis as a spec I can hand back to you.

Here is the ad: [PASTE THE FULL AD COPY]
```

## Prompt 2 — Brief (điền ngoặc 1 lần, tái dùng mãi mãi)
Đây là phần **tách copy của mình khỏi copy AI của người khác**: mục REAL CUSTOMER LANGUAGE. Dán câu nguyên văn từ review / Reddit / comment ad đối thủ. *"The noise in my head finally shut up"* bán chạy hơn mọi câu model tự nghĩ, vì một con người đã nói nó.

```
Now I'm giving you a different product. Do not write anything yet — load this brief and confirm you understand the product and the rules.

PRODUCT: [name + what it is + format]
PRICE: [price and size]
MECHANISM IN ONE SENTENCE: [how it works, in plain language]
MECHANISM NAME: [give the "why it works" a proprietary name the reader has never heard — e.g. "the cellular anchor effect" — one phrase, ownable, concrete]
PROOF STACK: [stars, review count, customer count, lab reports, made in, guarantee]
WHO BUYS IT: [age, situation, what they've already tried]
READER AWARENESS LEVEL: [unaware / problem-aware / solution-aware / product-aware / most-aware — the ad must enter exactly there, never a level behind]
MARKET SOPHISTICATION: [early market: plain claims still land · crowded market: lead with the NAMED mechanism · exhausted market: lead with identity, the claim comes later]
THE ONE DOMINANT EMOTION: [pick ONE — fear, rage, hope, vindication, relief — every beat intensifies it]
THE CONVERSATION IN THEIR HEAD: [the sentence this reader has already said to themselves this week — the hook steps into THAT conversation mid-thought]
REAL CUSTOMER LANGUAGE — work these phrases in naturally: [paste 3-5 verbatim lines from your actual reviews]
THE ANGLE FOR THIS AD: [which grid cell]
THE HOOK DIRECTION: [1-2 sentences on how it should open]

RULES:
- The narrator discovers the product naturally through another character. They never pitch it.
- First person only. No claims about the reader.
- No disease names. No "cures," "reverses," or "treats." The story shows; the copy never overclaims.
- Proof is observed moments — what other people said and did — never lab numbers about the narrator.
- Channel the desire that already exists. The ad's job is to aim it at the product, never to manufacture it.
```

## Prompt 3 — Write
```
Write the ad now.

- Model the EXACT structure from your analysis: same beats, same order, same proportions.
- Match the voice: same sentence length, same paragraph rhythm, same line-break style.
- Match the emotional arc, stage by stage — and keep intensifying the ONE dominant emotion from the brief. Never dilute it with a second.
- Enter at the reader's awareness level from the brief. Never re-explain a problem to a problem-aware reader; never pitch a product to someone who hasn't met the mechanism yet.
- Reveal the mechanism using its NAME from the brief — that phrase is the moment the ad becomes new information instead of another claim.
- The slippery slide: every sentence's only job is to get the next sentence read. Any line that doesn't pull forward gets cut.
- The personal-mail test: it must read like a letter from one person, never a brochure. One whiff of "marketing voice" and the whole thing goes in the bin.
- Intensify with specifics: named amounts, named days, named places. "Three weeks" beats "quickly." "$47 at the pharmacy counter" beats "expensive." Specificity is believability.
- Introduce the product at the same point in the ad, through the same kind of device, as the original.
- Match the word count within about 10 percent. If the original was 1,400 words, do not hand me 400.
- The hook must work inside the first 125 characters, it must open a loop, not close one — and it must step into the conversation already running in the reader's head, mid-thought.
- Never close a loop early. The reader should be unable to stop halfway.
- End with the offer, then this exact line: "These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease."
- Output only the finished ad. No commentary, no options, no explanations.
```

**Kết quả:** draft launch được trong 1-2 phút + ~10 phút chỉnh tay. **Model draft. Mình edit. Không ai launch copy chưa đọc.**

---

## Prompt 4 — Skeleton mapper (đảo ngược NHIỀU ad → archetype của niche)
Dùng khi muốn **format kể chuyện mà cả thị trường đã bỏ phiếu**, thay vì DNA của 1 ad. Đây là ngoại lệ duy nhất của luật "chỉ 1 ad" ở trên.
Điểm vàng: **mục 7 (entry level trống) + mục 8 (mechanism name đã bị chiếm)** — đó là chỗ tìm lane trống.

```
I'm giving you 3-5 winning long-form native ads from the same niche, all 30+ days active. Instead of analyzing one, derive the SHARED skeleton — the storytelling format this niche has already voted for.

Across the set, extract:
1. THE COMMON BEAT ORDER — the sequence that appears in all of them, separating the beats every ad shares from the optional ones.
2. THE PROPORTIONS — averaged: what percent of the ad each beat gets, and the average total word count.
3. PRODUCT ENTRY — the average entry point (percent through the ad) and the devices used (a relative, an expert, a stranger, a discovery).
4. THE NARRATOR FORMULA — how these narrators are built: age ranges, jobs, the density of boring specific details, which kinds of details repeat across ads.
5. THE PROOF PATTERN — the ratio of observed moments to numbers, and the 3 most-used proof scenes.
6. THE HOOK FAMILY — which pattern dominates (confession / rage / double standard / witness), with every hook quoted.
7. THE AWARENESS ENTRY — which of the five levels (unaware / problem / solution / product / most-aware) these ads enter at, and whether the niche clusters on one entry point. An entry level nobody is using is an open lane.
8. THE SOPHISTICATION STAGE — where this niche sits on the claim ladder: fresh claims, bigger claims, mechanism, improved mechanism, or identity. List every mechanism NAME already taken in the set — your ad needs one nobody here is using.
9. THE DESIRE — the one existing mass desire every ad in the set is channeling, in five words.
10. Output THE TEMPLATE: a fill-in-the-blank story skeleton for this niche — beat by beat, with word budgets, the awareness level to enter at, the sophistication stage to play, and an empty slot for a fresh mechanism name — that I can hand back to you with any product brief.

Here are the ads: [PASTE 3-5 FULL ADS]
```

## Prompt 5 — Hook bank builder
Nền lý thuyết: **125 ký tự đầu CHÍNH LÀ ad** (Meta cắt ở "…See more"). Body chỉ tồn tại cho người mà dòng đầu đã bắt được. → bồi vào [[hooks]].

```
Build me a hook bank. Below are 10-20 winning native hooks from my niche — the first 125 characters of long-running ads.

1. CLASSIFY every hook: which pattern it uses (confession / rage / double standard / witness / other), what loop it opens, the concrete image or moment it leads with — and which awareness level it enters at (unaware / problem / solution / product / most-aware).
2. RANK the patterns by frequency — that ranking is the niche's revealed preference.
3. MAP THE ENTRY POINTS — which awareness levels the winners enter at, and which levels nobody is entering. An empty entry level is an open lane worth testing.
4. EXTRACT THE MECHANICS: what do the top hooks do in their first 8 words? First person or observed? Named specific detail or general statement? Question or declaration? Which conversation already in the reader's head does each one step into?
5. Then WRITE 20 NEW HOOKS for my product using the winning mechanics — 5 per pattern, each under 125 characters, each opening a loop it does not close, zero claims about the reader — spread across the awareness levels the winners use, plus 3 extra aimed at the empty lane from step 3.

My product + angle: [ONE SENTENCE]
The hooks: [PASTE]
```

## Prompt 6 — Multiplier (3 tầng nhân bản trong 1 prompt) ⭐
Đây là prompt biến 4 base draft thành 24-32 bản hoàn chỉnh trong <1 giờ. **Khối mechanism giữ y nguyên từng chữ ở mọi bản — đó là template. Mọi thứ khác xoay** (luật Ledisa ở [[native-statics-machine]]).

```
Take the winning ad below and multiply it. The mechanism section stays word-for-word identical in every version — that is the template. Everything else rotates.

Generate:

1. FOUR HOOK SWAPS — rewrite only the first 2-4 lines in each of these patterns, then continue with the exact same body. Label each new hook with the awareness level it enters at — different entry points reach different pockets of the market:
   - THE CONFESSION: the narrator admits the embarrassing thing first.
   - THE RAGE: the narrator says out loud what the reader has been yelling privately.
   - THE DOUBLE STANDARD: the contradiction the reader has always sensed but never named.
   - THE WITNESS: the narrator watched it happen to somebody else.

2. TWO AVATAR ROTATIONS — same story skeleton, new narrator. Change the name, age, city, former job, and the specific moment they noticed the problem. Rewrite the first 40 percent of the ad for the new narrator. The mechanism section and all rules from my brief stay word-for-word.

3. THREE LENGTHS of the strongest version — roughly 400 words, roughly 800, and the full original length. Cut scenes to shorten. Never cut the mechanism.

Label every output clearly (hook-confession, avatar-2, length-400, and so on). Same compliance rules as the brief. Output the ads only.

Here is the winning ad: [PASTE]
```

**Human pass bắt buộc sau đó:** đọc từng bản, giữ 60-80% tốt nhất, giết bất kỳ bản nào bốc mùi AI hoặc đóng loop quá sớm.

## Prompt 7 — Visual decoder (đảo ngược FORMAT của ảnh, không phải pixel)
```
[Attach the winning static's image]

Reverse-engineer this native static's visual so I can recreate the FORMAT with my product — not copy the image.

1. FORMAT: which native format is this — big-type text post, screenshot-style, review card, us-vs-them, candid photo, meme, editorial card, or story-post photo?
2. WHY IT READS NATIVE: the composition, lighting, camera quality, and imperfections — the specific choices that make it look like content instead of an ad.
3. THE SCROLL-STOPPER: the single element the eye hits first, and why it pairs with this hook.
4. Now write me an IMAGE GENERATION PROMPT that recreates this format for my product — same composition logic, same lighting character, same imperfection level, my product swapped in. Photorealistic phone-photo quality, no text on the image. End the prompt with what to avoid: studio lighting, brand-ad polish, text overlays.

My product: [WHAT IT IS — and attach your product photo]
```
→ Nối [[maxpro-image-prompt-system]] + [[creative-brief]] §native-static image archetypes.

## Bonus — Research prompt (ad library → 3 model ứng viên)
Guide chạy qua GetHookd MCP, nhưng **filter logic dùng được với bất kỳ ad library nào**. Filter đáng steal nhất: **chỉ model advertiser đang nuôi ≥150 ad active** — tức là họ đang thật sự bơm tiền vào creative đó.

```
Search [ad library] for "[your niche keyword]" — active ads only, running 30 or more days, sorted by days active. Keep only ads from brands that have 150 or more active ads — I only model advertisers who are funding a creative at real volume.

From that shortlist, pull the top 3 and give me for each one:
- the full primary text, word for word
- the word count
- how long it has been running and how many active ads the brand has
- the first 125 characters exactly as written
- every phrase the ad uses to describe the customer's problem, quoted

Then tell me which ONE of the three is the strongest model for a long-form story native, and why.
```

## Prompt 8 — Compliance rewriter (giữ cấu trúc, bỏ claim)
Dùng khi tìm được winner có cấu trúc muốn lấy nhưng claim thì không dám chạy. → [[compliance]].

```
Here's a winning native ad that carries claim language I will not run. Rewrite it to scale clean, keeping everything that makes it work.

KEEP: the structure, the beat order, the narrator, the emotional arc, the pacing, the length.
REPLACE, using these swaps:
- Any second-person attribute ("your belly fat") → the narrator's own first-person experience.
- Any outcome claim ("cures," "reverses," "drops 20 points") → an observed moment: something another character said or did that implies the change without measuring it.
- Any disease name or medical mechanism doing curative work → soft support language ("supports," "helps maintain") — or cut it entirely if the story carries the point without it.
- Any fabricated authority (an invented doctor, an uncited study) → a real, checkable form of proof, or a clearly personal opinion.
Then append the standard FDA disclaimer.

Flag every line you changed in a list at the end, original next to rewrite, so I can review exactly what risk was removed.

Here's the ad: [PASTE]
```

## Skeleton mà mọi long native đi qua
`Hook → Problem → Failed solutions → Mechanism → Solution → Proof → Offer`

**Beat mà nghiệp dư bỏ qua = Failed Solutions:** gọi tên đúng thứ reader đã thử và vì sao nó nhắm sai vấn đề — đó là cái cho phép họ mua **mà không phải thừa nhận mình đã thất bại**.

> [!warning] Cập nhật mechanism 2026 (mâu thuẫn với niềm tin cũ)
> **So sánh this-vs-that đơn giản giờ ăn đứt bài giảng sinh học 1,500 từ.** Long root-cause essay đã có thời của nó; auction chuyển rồi. → cross-check với skeleton 15-beat ở [[ugly-ads-method]] (beat mechanism ở đó vẫn đang dài) trước khi viết bản MaxPro tiếp theo.

## Khi grid cạn ý — 3 nguồn ý tưởng tái tạo
1. **Comment ad đối thủ** — lời phàn nàn chính là hook.
2. **Phỏng vấn khách** — câu của họ chính là dòng mở.
3. **Sai lầm người mua đang mắc ngay lúc này** — mở bài kiểu "ai cũng nghĩ X, đó là lý do họ mắc kẹt".

→ Bổ sung cho [[angles]] §Reddit JSON → Claude + [[creative-brief]] §VOC mining.
