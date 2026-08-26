---
sources: [galba-ai-video-model-pricing-matrix, 0xroas-veo-ai-cost-breakdown, 0xroas-ai-ad-formats-tof-bof, ecomamin-seedance-google-ads-creative, 0xroas-seedance-ugc-workflow, 0xroas-seedance25-ad-formats, 0xroas-ai-native-statics-blog-video, ecomamin-seedance-opus5-yt-workflow, 0xROAS-canvas-ugc-ai-workflow, 0xroas-ai-video-formats-under-2-dollars, 0xroas-seedance-25-capabilities, 0xroas-ai-singing-ads-automation, ecomchasedimond-ai-video-pattern-blindness, ecomamin-ai-prompts-google-ads-creative, jforjacob-ai-podcast-ad-clipping-strategy, jforjacob-fix-ai-image-gen-label-spelling, jforjacob-chatgpt-style-prompt-from-reference-photo, jforjacob-chatgpt-product-photography-prompt, jforjacob-ai-video-ads-just-use-google-flow, jforjacob-veo-3-consistent-characters-frame-to-video, jforjacob-ai-ugc-is-not-faster-than-real-ugc, jforjacob-ai-ugc-arcads-bubble, jforjacob-does-icon-live-up-to-hype]
updated: 2026-08-26
---

# AI video production — chọn model theo giá & theo shot

Nguồn: [[galba-ai-video-model-pricing-matrix]] (per-second math cho mọi model gen video hiện tại). Đây là **kinh tế học của việc dựng video ad bằng AI** — bổ sung cho phần AI-video/UGC production ở [[creative-brief]]. Method thuần, dùng mọi sản phẩm.

## Luận điểm gốc
*"Model wars là content cho khán giả. Billing table là content cho operator."* Không có model thắng tuyệt đối — **1 production nên chạm 4 model khác nhau**. Ai đẩy mọi thứ qua 1 model thì hoặc **overpay 60% số giây**, hoặc **under-deliver 5% giây gánh niềm tin** (proof/talking-head).

## Bảng giá chuẩn-hoá per-second (đọc từ screenshot — đầy đủ hơn text)
Giá sẽ trôi; **logic thì không**. Chuẩn: normalize về per-second → route theo shot → đừng trả tiền audio sẽ thay → để per-video model gánh b-roll.

| Model | Billing | 720p | 1080p | Max clip | Audio / lipsync | Multi-scene |
|---|---|---|---|---|---|---|
| **Kling 3.0** | per second | $0.07 silent / $0.10 audio | $0.09 / $0.135 (4K $0.335) | 15s | native audio toggle; **lipsync yếu ~22%** | multi-shot storytelling trong 1 clip |
| Kling 3.0 Turbo | per second | $0.09 | $0.1125 | ~15s | cùng family | gen nhanh hơn — **speed premium, KHÔNG phải tier rẻ** |
| **Seedance 2.0** | per second | $0.100 w/ video input / $0.165 cold | 480p $0.045/$0.0775 | 12s | native audio, **lipsync thật** | connects scenes, fills missing actions |
| **Seedance 2.0 Mini** | per second | $0.0625 w/input / $0.1025 cold | 480p **$0.030**/$0.0475 | ~12s | family audio | consistent-character — **cost king** |
| **Seedance 2.5** | per second | pricing tương tự 2.0 family | — | ~12s | native audio + UGC-style | upgrade từ 2.0 — improved quality, chuyên YT Shorts/LF ads + UGC-style với native audio ([[ecomamin-seedance-google-ads-creative]]) |
| **Veo 3.1 Lite** | **per video** | $0.15 / 8s clip (~$0.019/s) | **$0.175** (Fast $0.325, Quality $1.275) | 8s | native voice+visual; **KHÔNG nhận external VO** | reference-to-video, multi-image ref |
| Hailuo 2.3 | **per video** | 768p 6s $0.15 (~$0.025/s), 10s $0.26 | 6s $0.26 (không có 10s ở 1080p) | 10s | — | Fast tier rẻ ~50%, pitch cho **batch pipeline** |
| Wan 2.7 | per second | $0.08 | $0.12 | 10s | không lộ audio | — |
| HappyHorse-1.1 | per second | $0.1125 | $0.145 | 3–15s | — | T2V / I2V / R2V (reference-to-video) |
| Gemini Omni | **per clip** | 10s $0.63 (~$0.063/s) | 4K 10s $1.05; **$0.84/gen với video input** | 10s | — | **editor** — storyboard + sửa video có sẵn |
| **Sora 2 Pro** | per second | **$0.045** | $0.13 | **25s** | native audio, **lipsync tốt nhất** | take liền dài nhất |

## 3 phát hiện đáng tiền
1. **Per-video billing = arbitrage.** Per-second phạt clip dài; per-video thưởng khi max clip length. Nếu b-roll beat được author đúng **8 giây** → **Veo Lite** ($0.175/clip 1080p = **$0.022/s**) là quality-per-second rẻ nhất thị trường, ẩn vì bill theo clip. Cấu trúc shot list theo **billing unit**, đừng ngược lại. (Hailuo $0.15/6s = ~$0.025/s = trick tương tự, rẻ nhì.)
2. **Audio surcharge = thuế trả cho cái không dùng.** Native audio +tới **40%/giây**. Nếu dù sao cũng lay **1 VO liên tục** đè lên footage (nên làm vậy) → **render SILENT**, chỉ trả surcharge đúng beat mà **âm thanh CHÍNH LÀ ad** (SFX/foley bán sản phẩm).
3. **Không có winner — route theo shot:**
   - **Proof shot** (physics/demo sản phẩm) → **Kling** (physics king)
   - **Talking head** → **Sora 2 Pro** / Seedance (lipsync thật; Kling lipsync ~22% = fail cho mặt-nói)
   - **Wallpaper / background** → **Seedance Mini** (cost floor, $0.030/s)
   - **B-roll 8s** → **Veo Lite** (per-video subsidize)
   - **Revision** → **Gemini Omni** — nó là **editor không phải generator**: feed clip đã xong, đổi 1 element bằng 1 câu, thay vì re-render cả scene.

## Veo — consumer subscription vs API pricing ([[0xroas-veo-ai-cost-breakdown]])
Bảng ở trên là **API pricing**. Nếu đã trả Google Ultra $200/tháng, billing model khác:

| Plan | Cost | Credits | Per 10s clip | Per 6 clips (60s) |
|---|---|---|---|---|
| Google Ultra | $200/tháng | 25,000 credits | 20 credits = **$0.16** | 120 credits = **$0.96** |
| Veo 3.1 Lite API | per clip | — | **$0.175** (1080p) | $1.05 |

→ Nếu đã là Google Ultra subscriber: Veo qua consumer plan **rẻ hơn API ~9%** cho 1080p. Quan trọng hơn: không phải trả API key riêng, không overhead integration. Dùng consumer UI trực tiếp cho iteration nhanh → khi pipeline đã ổn định mới shift sang API để automate.

**Rule nhỏ:** 1 Google Ultra plan = 25k credits = ~1,250 clip 10s/tháng nếu xài hết — tương đương ~$200 API cost. Không có cost advantage lớn; lợi thế là **friction thấp hơn** (UI Gemini, không cần key).

## AI ad format types — TOF + BOF ([[0xroas-ai-ad-formats-tof-bof]])
Beyond model selection và cost: **4 format types** đang chạy tốt với AI production, "dirt cheap" ([[0xroas-ai-ad-formats-tof-bof]]):

- **AI yappers** — talking-head style (1 voice/face nói thẳng vào camera). High-engagement TOF; ties §Yapper Ads trong [[copywriting]] §10 + §3 format story đang chạy tốt nhất 2026-07.
- **AI podcast ads** — 2-người nói chuyện (host + guest format), perceived organic. Trust-building TOF.
- **AI mini VSLs** — condensed video sales letter, 60-120s. TOF-to-mid-funnel bridge (educate + belief-seed).
- **Ted-talk style** — single authoritative speaker, educational frame. TOF brand-credibility.

Signal từ @0xROAS: cả 4 format giờ sản xuất được với AI với chi phí **dưới $2/video** ([[0xroas-ai-video-formats-under-2-dollars]]) — barrier format đã gần bằng 0, creative strategy (angle, hook, copy) là thứ còn differentiator. **Reminder quan trọng:** BOF cũng là "game changer" — cùng AI toolset phải extend sang retargeting, không chỉ dùng cho prospecting.

Route by funnel stage: yappers + podcast ads = TOF (cold traffic, organic-looking) · mini VSLs + ted-talk = TOF/mid (educate + belief-seed) · short testimonial/demo = BOF (retargeting, already aware). Tie §3 phát hiện đáng tiền ở trên (production economics → route theo shot) + [[creative-brief]] (UGC/broll production) + [[copywriting]] §10 (story formats).

## Caveat khi tính chi phí thật (reply @routerbase)
Per-second chỉ là baseline. Chi phí thật còn cộng: **resolution/duration multiplier** (bảng trên: 1080p/4K đắt gấp bội 720p), **retry/failure rate**, **queue latency**. Một attempt "rẻ" thành đắt nhanh sau **2 lần gen hỏng** → tính CPM-per-usable-clip, đừng tính giá list.

## AI UGC hyper-realistic — 4-step formula ([[0xroas-seedance-ugc-workflow]])
@0xROAS xác nhận công thức này cho "UGC looks hyper realistic" chỉ với 2 prompts tổng, <15 phút/video:
1. **Gemini deconstruct** — feed video tham khảo vào Gemini, để nó phân tích toàn bộ (angles, pacing, dialogue, props, environment).
2. **GPT Image 2.0 generate** — generate characters + props từ Gemini's breakdown → visual references chuẩn.
3. **Seedance 2.5 upload references** — upload tất cả references vào Seedance 2.5 để giữ character consistency xuyên suốt.
4. **Seedance 2.5 upload prompt** — dán đúng prompt Gemini đã tạo → render.

Kết quả: video UGC "street interview" style cực kỳ realistic, cost thấp, không cần quay thật. Tie §Seedance 2.5 trong bảng trên (native audio + UGC-style) + [[ecomamin-seedance-google-ads-creative]] (Seedance cho YT Shorts + native audio). Complement cho 4 format types ở §AI ad format types — workflow này đặc biệt phù hợp "AI yappers" và "AI podcast ads" (talking-head / 2-người format) mà cần UGC feeling.

## Seedance 2.5 — format list Q4 2026 ([[0xroas-seedance25-ad-formats]])
@0xROAS xác nhận Seedance 2.5 mở ra toàn bộ spectrum format AI ad với độ realism cao nhất hiện tại (đắt hơn nhưng đáng ở Q4):
- **AI podcast** — 2 người nói, format interview quen thuộc
- **AI street interviews** — UGC-style, "người trên phố" nói về sản phẩm
- **AI yappers** — talking head 1 người, favorite format của @0xROAS (high-engagement TOF)
- **AI Netflix documentaries** — cinematic, build credibility + authority
- **AI animation ads** — differentiated creative cho category đã saturation UGC

→ Toàn bộ 5 format này dùng 1 production pipeline (Seedance 2.5 + references), tie §AI UGC hyper-realistic ở trên. Với Q4: nếu chỉ 1 model → **Seedance 2.5** là default. Pricing bảng trên (2.5 ~= 2.0 family per-second).

**Seedance 2.5 — capability update ([[0xroas-seedance-25-capabilities]]):** @0xROAS (2026-08-23) xác nhận cải tiến kỹ thuật: credit cost giảm **30-40%** (không cần yearly plan) · **better audio reference mode** · **better lipsync** · **better physics**. Format đang thêm vào module: drama ads (cũng dùng được với 2.0 method cũ) · animation drama ads · automatic b-rolls. Drama ads + automatic b-rolls là net-new so với 5 format Q4 ở trên — expand Seedance 2.5 từ UGC/realistic sang full storytelling spectrum + production-assist tự động.

## Native statics → blog video format ([[0xroas-ai-native-statics-blog-video]])
Format mới từ @hookrate_ (chia sẻ trong cộng đồng AI ads của @0xROAS): **upgrade native statics thành blog video** — tức là chuyển 1 ảnh tĩnh native-style thành video ngắn dạng bài blog/editorial. Input: 1 image + 1 prompt → output: video native FB/Meta cracking-style. Chi phí gần như 0 nếu đã có native static. Hợp nhất [[native-ads]] (editorial frame) + [[ai-video-production]] (AI generation) trong 1 workflow siêu ngắn.

> Q4 note (@0xROAS): *"you are preparing for everything except your creative diversification strategy"* — nếu chỉ chạy 1 format creative thì Q4 CPM tăng nhưng ROAS không tăng vì creative fatigue không được counter.

## Seedance 2.5 + Opus 5 YT workflow — 40 phút/video ([[ecomamin-seedance-opus5-yt-workflow]])
@eCom_Amin: pipeline hoàn chỉnh làm YouTube ad + static shopping companion trong 40 phút, end-to-end trong 1 chat session (Opus 5 + Higgsfield MCP):

**Step 1 — Buyer research (20 min):** prompt Opus 5 tìm top 5 pain-point cluster theo buyer language (frustration, failed solutions, phrases từ Reddit/Amazon, emotional state, trigger event). Thay 4-6 giờ crawl forum thủ công.

**Step 2 — Script (10 min):** 4-part structure (15s video):
- Hook (0-3s): name the pain từ research
- Agitation (3-8s): 3 failed solutions
- Mechanism (8-12s): explain the root cause
- Reveal (12-15s): product + soft CTA, conversational tone

**Step 3 — Video (5 min):** Seedance 2.5 qua Higgsfield MCP → 15s vertical 9:16, phone-camera quality, UGC-style. Không tab-switch, không export/import.

**Step 4 — Static companion (3 min):** GPT Images 2.0 qua cùng MCP → lifestyle product image 1:1 cho Shopping.

**Kinh tế học:** 40 phút vs 2-3 tuần/$5-15k/team 3-5 người. YT ad fatigue = CTR decay sau 3-4 tuần → AI production làm refresh cycle viable. Build 5 ads/chiều, test, spin 4 fresh variations/2-3 tuần khi đã có winning hook. → Áp thẳng cho MaxPro YT Shorts: hook = "mấy lần bạn bỏ cuộc giữa chừng vì nó giãy?"

> [!tip] Liên kết
> Script 4-part này khớp hoàn toàn với §4-step advertorial psychology ở [[presell-pages]] (validation → education → mechanism → product). Cùng 1 sequence, khác format (video vs text).

## Áp cho tôi (Maxpro / ecom video ad)
1 video ad Maxpro nên route: demo mài móng (**proof**) → Kling · testimonial mặt-nói → Sora/Seedance · cutaway b-roll → Veo Lite 8s · nền → Seedance Mini. **Render silent + lay 1 VO** (giữ SFX chỉ ở beat tiếng grinder = bán "ultra-quiet"). Sửa 1 chi tiết → Gemini Omni thay vì re-render. → tactic UGC/broll ở [[creative-brief]].

## Canvas UGC distribution — phone-poster model ([[0xROAS-canvas-ugc-ai-workflow]])
@0xROAS: sau khi production AI video xong, distribution model tiết kiệm nhất:

- Thuê **young people** (18-25) đăng AI video từ điện thoại cá nhân của họ
- Trả **$50-100/tháng** để họ đăng hằng ngày — bạn gửi toàn bộ content đã render
- Kết quả: **infinite character, infinite content ideas** với chi phí biến đổi gần 0
- So sánh: influencer entitlement cost $5,000+/tháng → mô hình này save ~$5k/tháng

**Cơ chế sức mạnh:** AI tạo content → người thật đăng từ tài khoản thật → platform coi là UGC organic, không phải branded content → organic reach cao hơn paid distribution. Không phải "fake influencer" — người đăng thật, chỉ là content do AI tạo.

**Tie [[ai-video-production]]:** model này là bước CUỐI của pipeline (production → distribution). Dùng bất kỳ format nào đã build (yapper, podcast ad, street interview) → ship sang phone-poster để distribute. MaxPro: 2-3 người đăng clip "grooming at home" mỗi ngày = content moat mà không cần quay.

## AI singing ads — image-to-video beats direct clip generation ([[0xroas-ai-singing-ads-automation]])
@0xROAS (2026-08-25): lessons từ quá trình automate AI singing ads. Key takeaways:

- **Image-to-video beats direct clip generation** — tạo ảnh (frame) trước → rồi animate từ ảnh đó, output consistent hơn nhiều so với gen thẳng từ text prompt.
- **Phải nói với AI cái gì là good visual** — AI không tự biết; mô tả rõ aesthetic/style/composition mong muốn trong prompt, đừng assume model hiểu ý.
- **Chorus confuses AI** — phần chorus bài hát (melody thay đổi nhanh, nhiều word/beat) là chỗ lipsync + timing dễ vỡ nhất. Approach: giữ visual đơn giản hơn ở chorus, hoặc cut sang b-roll.
- **<1 giờ production time** cho 5-6 phút video sau khi đã thành thạo workflow — bao gồm cả post editing.

**Hàm ý workflow:** singing ad = dạng đặc biệt của talking-head format (§AI UGC hyper-realistic) nhưng cần extra step: storyboard theo beat trước, gen ảnh reference từng frame, animate. Tie §3 phát hiện đáng tiền (audio surcharge — render silent nếu dùng external VO đè; chỉ bật native audio khi âm nhạc CHÍNH LÀ product).

## AI video pattern blindness — real human = moat không clone được ([[ecomchasedimond-ai-video-pattern-blindness]])
ecomchasedimond (2026-08-25): cảnh báo hệ thống về AI video ads.

**Vấn đề:** mọi brand đang dùng cùng AI video tools → cùng avatars, cùng rooms, cùng style → feed algorithm **học skip pattern đó nhanh hơn bất kỳ ai có thể refresh creative**.

**The moat:** *"The one input a competitor cannot copy = a real person who actually used the product."* — người thật dùng sản phẩm thật là thứ duy nhất AI không thể replicate 1:1.

**Hàm ý chiến lược:** AI production (§§ trên) = cost/speed advantage, nhưng nếu TOÀN BỘ creative library là AI-generated → vulnerable to pattern blindness. Mix bắt buộc: AI cho b-roll/wallpaper/formats phổ thông (cost floor) + real UGC/testimonial từ người dùng thật cho hero creatives. Tie [[creative-brief]] §AI pattern blindness (cùng bài, routing từ creative brief perspective) + [[ugly-ads-method]] §real-person-raw (candid footage của người thật là loại ugly ad khó copy nhất).

→ MaxPro: AI cho Seedance b-roll + yapper format test → nhưng ưu tiên get real customer clip (chó + grinder, candid) cho hero creative. 1 video chủ nuôi thật dùng MaxPro = nhiều lần leverage hơn 10 AI avatar video cùng style.

## AI podcast ad → clipping thành hàng chục biến thể test ([[jforjacob-ai-podcast-ad-clipping-strategy]])
Workflow: tạo 1 AI podcast ad dài 3-5 phút → đưa vào CapCut → dùng tính năng AI clipping, cắt thành clip 15-30s → chạy bản gốc trong ad account + đăng các clip lên MỌI nền tảng short-form (organic) → xem clip nào đạt reach cao nhất → đưa các clip đó vào chung 1 ad set trong ad account. Kết quả: hàng chục biến thể test được từ 1 video gốc, organic exposure miễn phí, creative testing gần như free, và cơ hội có vài "banger ad" — tất cả từ 1 video mà thông thường chỉ ném thẳng vào ad account rồi thôi. Đưa chiến lược "long-form → short-form clipping" (vốn phổ biến ở content/podcast) vào ecom với effort tối thiểu.

Tie §AI ad format types ở trên (AI podcast ads = 1 trong 4 format TOF) + §AI UGC hyper-realistic workflow — clipping strategy này là bước **phân phối/test SAU khi đã production xong**, bổ sung cho pipeline production ở trên.

> [!note] Áp cho MaxPro
> Dựng 1 AI podcast ad 3-5 phút (host + guest bàn về "chó sợ cắt móng") → clip AI thành 10-15 đoạn 15-30s → đăng hết lên TikTok/Reels/Shorts (organic) song song chạy bản gốc trên Meta → clip nào tự nhiên đạt reach cao nhất, đưa vào ad set test.

## AI creative prompts cho Google Ads — 4 prompt templates (Seedance + GPT Images 2.0) ([[ecomamin-ai-prompts-google-ads-creative]])
eCom_Amin (2026-08-25): exact prompt framework cho Google Ads creative production. Full math: $15-20/batch vs $3-8k agency. 4 prompt types:

**Prompt 1 — Shopping static 1080×1080 (GPT Images 2.0):**
- Lived-in environment (không phải studio)
- Human element mid-action (không posed)
- Imperfect detail (không perfectly lit)
- "NOT a studio product shoot" — câu cuối này làm heavy lifting nhất
- *Perfection là tell của AI image — instruction "imperfect" là counter.*

**Prompt 2 — Display/Demand Gen 1200×628 + 1080×1080 (GPT Images 2.0):**
- Show RESULT, không show product
- GPT Images 2.0 handles text-in-image tốt nhất (dùng để embed headline trực tiếp)
- Before/after state framing

**Prompt 3 — YT Short từ winning static (Seedance 2.5, 15s 9:16):**
- Seamless loop
- FIRST frame = hook (không có build-up)
- Subtle motion (không dramatic transition)
- Input: winning static image → animate

**Prompt 4 — Batch variants hàng tuần:**
- Hold visual / change hook
- Hold hook / change environment
- Hold angle / change demographic
- *One variable per variant — thay nhiều biến = không học được gì.*

Tie [[ai-video-production]] §AI UGC hyper-realistic (production pipeline chung) + [[google-ads]] §AI creative production (full routing trong Google funnel) + [[creative-testing]] (variant isolation rule — 1 biến / lần).

## ChatGPT image-gen — 3 prompt hack (jforjacob)

**Fix spelling/gibberish trên label sản phẩm — 1 dòng duy nhất** ([[jforjacob-fix-ai-image-gen-label-spelling]]): vấn đề lớn nhất khi dùng AI image gen cho ads là chữ trên label/packaging bị gibberish/sai chính tả. Đã thử: nói rõ text + cách viết, đưa ảnh riêng của label kèm sản phẩm, viết JSON mô tả text/style/màu/vị trí — đều không ổn định. Giải pháp thật sự work **95% thời gian**: thêm đúng 1 câu vào prompt — *"make sure there are no spelling mistakes on the label"*. jforjacob không biết vì sao câu này hiệu quả hơn mọi cách khác đã thử, nhưng work.

**Đừng đưa reference image bảo AI "recreate" — bảo nó VIẾT PROMPT tả style** ([[jforjacob-chatgpt-style-prompt-from-reference-photo]]): kỹ thuật ngược — thay vì feed ảnh mẫu + "làm giống cái này" (dễ ra kết quả lộn xộn), đưa ảnh thích rồi hỏi ChatGPT **viết 1 prompt mô tả phong cách nhiếp ảnh** của ảnh đó. Prompt thu được dùng như style guide cho BẤT KỲ sản phẩm nào sau này. Ví dụ prompt thật jforjacob dùng cho supplement (kết quả "amazing"):
> *"Editorial-Style Flat Lay… Hard Lighting & Defined Shadows… Monochromatic Background Integration… Texture & Light Play…"*

**Ví dụ áp dụng — replicate style 1 brand cụ thể qua mô tả subject + style-guide bullet** ([[jforjacob-chatgpt-product-photography-prompt]]): test kỹ thuật trên bằng cách thử bắt chước phong cách ảnh của Dore and Rose. Prompt = 1 câu tả subject ngắn + style guide breakdown theo hạng mục (Lighting / Setting / Styling / Mood / Photography Genre Mix), mỗi hạng mục 1-2 câu cụ thể (không mơ hồ). Kết quả "damm chat gpt getting good" — xác nhận format prompt "mô tả subject ngắn + style-guide theo hạng mục cụ thể" là công thức tái dùng được, không riêng cho 1 aesthetic nào.

→ Cả 3 tactic đều là biến thể "prompt cụ thể hơn = kết quả tốt hơn" — tie [[creative-brief]] §senior niche ultra-detailed candid prompts (film-stock specificity, cùng nguyên lý). MaxPro: build 1 style-guide-prompt riêng cho line ảnh sản phẩm (label MaxPro cần câu chống-gibberish ở trên vì có chữ trên thân máy).

## Video ad workflow — Google Flow only, đừng mua course phức tạp (jforjacob)

**Best + easiest AI video ad workflow sau nhiều course/guide vẫn chỉ là Google Flow** ([[jforjacob-ai-video-ads-just-use-google-flow]]): sau khi mua nhiều course + đọc hàng chục guide Twitter về AI video ads, đa số là lãng phí thời gian. Workflow thật sự work: **toàn bộ trong Google Flow** (thêm nano banana cho reference image start-frame nếu cần). Clip đầu = text-to-video 2-3 câu tả nhân vật + lời thoại (ví dụ: *"A middle-aged, well educated looking white man wearing smart casual clothing in a podcast studio talking on a podcast. He says 'My whole life I struggled with getting in shape, and now after 20 years of research I know exactly why that is'"*). Không cần JSON 100 dòng hay 10-bước qua 10 tool — *"you can get whatever you want with just a couple of sentences of natural language and maybe a reference image here or there"*. jforjacob: course phức tạp tồn tại vì đơn giản không bán được course.

**Giữ nhân vật nhất quán qua nhiều clip — neo vào 1 frame đã lưu** ([[jforjacob-veo-3-consistent-characters-frame-to-video]]): với các clip SAU clip đầu — đừng tiếp tục text-to-video. Lưu lại 1 frame từ clip đầu, rồi dùng **frame-to-video** (thay vì text-to-video) với đúng frame đó cho mọi clip tiếp theo. Kết quả: nhân vật/setting giữ **100% nhất quán** xuyên suốt — đây là bước 2 hoàn thiện workflow Google-Flow-only ở trên (bước 1 = clip mở bằng text-to-video, bước 2 = mọi clip sau bằng frame-to-video neo vào frame đã lưu).

> [!note] Áp cho MaxPro
> Podcast-style ad MaxPro: clip 1 = text-to-video tả nhân vật + hook mở đầu trong Google Flow → lưu frame cuối → mọi clip tiếp theo (agitation/mechanism/reveal theo §4-part script ở trên) dùng frame-to-video neo vào frame đó, giữ nhân vật không "trôi" giữa các đoạn.

## AI UGC vs real UGC — misconception về tốc độ + cảnh báo bubble (jforjacob)

**"AI UGC nhanh hơn" là hiểu lầm — thời gian CHỜ ngắn hơn, thời gian TAY LÀM cao hơn nhiều** ([[jforjacob-ai-ugc-is-not-faster-than-real-ugc]]): với UGC thật, sau khi brief/script xong chỉ cần 1 tin nhắn cho creator + 1 lần trả tiền khi xong — hết việc, chờ lâu hơn nhưng hands-on-time RẤT thấp. Với AI UGC, có nhiều bước hơn hẳn: reference image, prompting, re-prompt, voiceover, cố gắng đúng chuyển động/góc máy nhân vật — actual time input CAO hơn UGC thật dù wait-time ngắn hơn. Ẩn dụ jforjacob: *"stir fry vs slow cooking"* — stir-fry (AI UGC) xong nhanh hơn nhưng cần tay làm liên tục; slow-cooker (UGC thật) bỏ vào rồi đi làm việc khác, quay lại là xong — năng suất THẬT cao hơn vì time-input thấp hơn, giống lý do "busy parents love slow cookers". jforjacob: *"Never see anyone talk about this."*

**Cảnh báo bubble — đừng build creative pipeline giả định pricing/scarcity UGC người thật giữ nguyên** ([[jforjacob-ai-ugc-arcads-bubble]]): quality AI creator (Arcads) "mind blowing" tới mức tăng liên tục — jforjacob cảnh báo "UGC girlies realise how limited their days are" — tức là kỳ vọng giá + độ khan hiếm của creator UGC người thật hiện tại (đang là 1 lever cạnh tranh, xem [[creator-sourcing]]) không phải hằng số lâu dài; production pipeline dựng ra hôm nay nên tính cả kịch bản AI UGC bào mòn giá trị đó.

> [!warning] Reconcile với [[creator-sourcing]] và §AI video pattern blindness ở trên
> §AI video pattern blindness ở trên (ecomchasedimond) lập luận **real person = moat AI không copy được**. 2 tweet trên KHÔNG mâu thuẫn — đọc theo 2 trục khác nhau: (1) time-economics (AI UGC không thực sự tiết kiệm effort như tưởng, chỉ đổi wait-time lấy hands-on-time) — vẫn có thể ĐÚNG dù (2) AI creator quality đang tăng nhanh và làm giảm giá trị khan hiếm của UGC người thật theo thời gian. Kết hợp: AI UGC không phải "free lunch" về effort NHƯNG áp lực cạnh tranh giá/chất lượng lên creator người thật là có thật — dùng cả 2 khi quyết định mix creative (không all-in 1 phía chỉ vì 1 trong 2 lý do).

## Icon — không sống nổi với hype, tránh ([[jforjacob-does-icon-live-up-to-hype]])

jforjacob test Icon (tool tự động generate + launch ads bằng AI) và kết luận "a bit of a farce". Cụ thể: trả tiền cho gói "100 ads/tuần tự động generate", sau ~2 tuần chỉ ra **tổng cộng 3 ads (đều tệ)**. Claim "launch ads with one click" = "blatant lie" — không thể, và giới hạn kiểm soát khi launch cũng lớn. Cộng thêm: team Icon no-show buổi onboarding call đã hẹn. Kết luận: **Avoid**.

→ Case cụ thể cho nguyên tắc chung: 1 tool all-in-one hứa tự động hoá TOÀN BỘ pipeline creative (research → gen → launch) nên được test kỹ trước khi trả tiền dài hạn — so với §Case thật Manus/n8n ở [[ai-agent-automation-stack]] (agent TỰ build đúng use-case cụ thể, kiểm soát được từng bước) thay vì mua 1 sản phẩm đóng gói hứa làm hết.
