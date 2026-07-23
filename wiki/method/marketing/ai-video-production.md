---
sources: [galba-ai-video-model-pricing-matrix, 0xroas-veo-ai-cost-breakdown, 0xroas-ai-ad-formats-tof-bof]
updated: 2026-07-23
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

## Áp cho tôi (Maxpro / ecom video ad)
1 video ad Maxpro nên route: demo mài móng (**proof**) → Kling · testimonial mặt-nói → Sora/Seedance · cutaway b-roll → Veo Lite 8s · nền → Seedance Mini. **Render silent + lay 1 VO** (giữ SFX chỉ ở beat tiếng grinder = bán "ultra-quiet"). Sửa 1 chi tiết → Gemini Omni thay vì re-render. → tactic UGC/broll ở [[creative-brief]].
