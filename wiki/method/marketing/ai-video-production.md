---
sources: [galba-ai-video-model-pricing-matrix, 0xroas-veo-ai-cost-breakdown, 0xroas-ai-ad-formats-tof-bof, ecomamin-seedance-google-ads-creative, 0xroas-seedance-ugc-workflow, 0xroas-seedance25-ad-formats, 0xroas-ai-native-statics-blog-video, ecomamin-seedance-opus5-yt-workflow, 0xROAS-canvas-ugc-ai-workflow]
updated: 2026-08-22
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

Signal từ @0xROAS: cả 4 format giờ sản xuất được với AI với chi phí rất thấp — barrier format đã gần bằng 0, creative strategy (angle, hook, copy) là thứ còn differentiator. **Reminder quan trọng:** BOF cũng là "game changer" — cùng AI toolset phải extend sang retargeting, không chỉ dùng cho prospecting.

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
