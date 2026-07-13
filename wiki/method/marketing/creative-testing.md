---
sources: [low-budget-creative-testing-playbook, maxwellcopy-ab-testing-scale, dtcmidas-net-new-vs-iteration-ratio, rubiinov-gruns-100m-funnel-teardown, 0xroas-ai-ads-agent, maxwellcopy-1b-dtc-funnel-6-stages, 0xroas-ai-ugc-under-dollar-infinite-video]
updated: 2026-07-13
---

# Creative testing — isolate-one-layer (low-budget)

Nguồn: [[low-budget-creative-testing-playbook]]. Đối trọng **low-budget** của [[media-buying]] (nkecom flood-volume). Thesis: **clean signal beats volume.** Account budget thấp "feel random" vì 2 lỗi cùng lúc — đổi quá nhiều thứ mỗi ad + spread spend quá mỏng → algorithm ko bao giờ learn. Ko phải vấn đề creativity, là vấn đề **attribution**: đổi angle+hook+visual cùng lúc → winner cho bạn KHÔNG gì để copy.

## 3 layer của 1 static (hold 2, vary 1)
Mọi static = 3 biến độc lập chồng lên nhau. Test 1 layer/lần, giữ 2 cái kia cố định:
1. **Angle / big idea** — luận điểm/lời hứa (mechanism, enemy, desire). **Đây là thứ tạo breakout.** → [[angles]]
2. **Hook** — headline/dòng đầu chặn scroll. → [[hooks]]
3. **Visual execution** — format: before/after, native/UGC screenshot, product-on-bg, meme, chart, lifestyle. → [[creative-brief]] (4 category / 7 format)

## Test theo round (thứ tự = theo leverage)
- **R1 — tìm Angle.** 4-6 angle, CÙNG visual đơn giản + CÙNG hook style. Chỉ angle đổi. → isolated winning angle. **Round đòn bẩy cao nhất** (angle drives breakout).
- **R2 — tìm Execution.** Angle thắng × 4-5 format. Cùng message, khác look. → format nào carry angle đó tốt nhất.
- **R3 — sharpen Hook.** Angle+format thắng × 4-5 hook. Rẻ nhất, nhanh nhất, vắt nốt performance.

## Budget split: 70-80% iterate / 20-30% swing mới
Creative đã prove → đổ phần lớn budget **iterate nó** (hook mới, format mới, biến thể nhỏ trên angle đã thắng), KHÔNG mint concept mới. Đa số làm ngược (ném concept mới mãi). Swing mới = tìm winner KẾ; iterate = "bank" cái đang có.

> [!note] Ratio nên FLEX theo cycle, không dán cứng ([[dtcmidas-net-new-vs-iteration-ratio]])
> DTCMidas tinh chỉnh con số 70-80/20-30 ở trên: tỉ lệ net-new vs iteration **không nên tĩnh** — có kỳ **20% iteration / 80% net-new** (đang đi tìm winner), có kỳ **50/50** (vừa tìm được thứ đáng vắt). Luật: *"whenever you find something that works, iterate the shit out of it until it stops working"* → rồi mới dồn về net-new. Về volume: launch nhiều **nhất có thể mà không giảm chất** — nhưng ưu tiên **ít mà high-conviction** hơn nhiều mà nhạt (chất ≠ production-quality, mà = độ sắc angle/hook). Vị trí trong cycle quyết định ratio, không phải 1 số cố định.

**Creative velocity = biến số scale (Gruns proof, [[rubiinov-gruns-100m-funnel-teardown]]):** Gruns giữ **900+ meta ad active** cùng lúc (brand $30-80k/mo điển hình chỉ 5-20), mix UGC + static + AI. Nguyên lý: nhiều asset in-market = nhiều data nhanh hơn = nhận diện winning angle trong **30 ngày thay vì 90**. Đây là mặt "volume" bổ trợ isolate-layer: velocity **tìm** winner, isolate **giải thích** vì sao thắng để copy. (Cùng flood-thesis [[media-buying]].)

**Xác nhận ở tầng $1B (AG1/Grüns/IM8, [[maxwellcopy-1b-dtc-funnel-6-stages]]):** ad-count active — **AG1 530 · Grüns 910 · IM8 1,300** (IM8 founder nói đang push **2,500 live cùng lúc**). Lý do cơ học: **Meta Andromeda update thưởng library nhiều creative đa dạng** → newness kéo CPM xuống + tăng conversion. Luật vận hành: *pump creative mới mỗi TUẦN + kill loser mỗi tuần*. Mix **~50/50 static ↔ video**. Corroborate Gruns velocity — không phải outlier, là chuẩn của brand scale lớn.
- **Static chỉ cần 2 loại:** (1) **educational infographic** (ingredient / benefit / what's inside) · (2) **direct-offer ad** (acquisition offer + welcome kit). Phần lớn static **gen bằng AI** để pump volume rẻ. → MaxPro static: infographic "vì sao chó sợ clipper / grind-and-release" + direct-offer "99-day + bundle".
- **White-label / collab ad (net-new format, ~50% video của các brand này) ⭐:** chạy ad **TỪ account của influencer**, brand tag làm **collaborator** → target follower của influencer + **trông 100% native** ("người bạn đã follow đang dùng", không phải brand lạ trong feed). Đây là đòn media-buy chưa có ở wiki — tie [[media-buying]] (creative format) + [[personas]] (borrowed authority ở tầng ad-account). → MaxPro: collab với micro-groomer/pet-creator, chạy ad từ account họ, MaxPro là collaborator.

## Naming + tracker = nơi pattern hiện ra
- Tag mọi creative: `ANGLE_HOOK_FORMAT_VERSION` (vd `GUT-HEALTH_CURIOSITY_BEFOREAFTER_v3`). Giữ sạch là vấn đề naming, ko phải willpower.
- 1 row/creative, cột = mỗi tag + số: `Creative ID · Angle · Hook type · Format · Copy length · Spend · Link CTR · CPA · Verdict`.
- Cuối tháng **pivot**: "avg CPA của mọi curiosity hook?" · "before/after có beat native screenshot ko?" → playbook thật thay vì đống random win. **Pattern chỉ hiện khi data được tag.**

## Đọc signal (2 metric, 2 failure)
- **Link CTR** = "angle + hook có grab ko?"
- **CPA / ROAS** = "luận điểm có thật sự convert ko?"

> [!warning] 2 failure pattern phải action
> - **High CTR + bad CPA** = hook viết cái check mà angle/offer ko trả nổi. Clickbait. **Kill.**
> - **Low CTR** = scroll-stop fail, body copy chưa kịp được đọc. **Fix hook/visual** bất kể argument hay cỡ nào.

## Hard constraint (lý do isolate, ko flood)
Cần đủ spend/creative để con số đáng tin. Test 15 thứ × $5 = mua noise. **Ít test, có chủ đích > spray-and-pray** khi budget hẹp. (Campaign structure thực thi: [[media-buying]] § low-budget regime.)

> [!note] Tension với [[media-buying]] (nkecom flood-volume) — 2 regime theo budget
> nkecom: **flood 50+ ad**, đổi mọi thứ, để algorithm tự lọc top 1-5 (= multi-armed bandit). Bài này: **isolate 1 layer**, 3-5 creative/ad set (= controlled experiment).
> - **Đồng ý:** 1 ad set · **50 conversion/tuần** thoát learning phase · consolidate ko fragment. (2 nguồn xác nhận con số 50.)
> - **Khác:** volume-per-test scale theo budget. nkecom giả định **$150-200/day** → 50 ad vẫn đủ spend cho winner ăn. Bài này **$20-40/day** → 50 ad = mỗi ad ~$0.50 = noise, nên chỉ 3-5 ad để mỗi cái đủ đọc.
> - **Chọn regime:** budget cao + chỉ cần "tìm winner nhanh" → flood. Budget thấp + cần "biết VÌ SAO thắng để copy" → isolate-layer.

## Testing culture — systematic winner propagation ([[maxwellcopy-ab-testing-scale]])
@maxwellcopy (agency, 100+ clients): **10+ A/B tests/client/month** = 1,000+ data point mỗi tháng. Cơ chế lan truyền: mọi **conclusive result** đổ vào 1 Slack channel company-wide → ai cũng "steal" winner. *"We get a SHIT TON of data and that's how we find winning concepts and angles."*

Solo insight: không phải về quy mô — mà về **closing the loop**: winner PHẢI có chỗ sống sau khi test xong. Tracker (§ naming+tracker ở trên) là Slack channel cá nhân. Không đủ "chạy test", cần "hệ thống hấp thụ kết quả test". Tie [[email-marketing]] § resend-top-performer: winner không chết — được replay.

## AI-assisted ad production — early signal ([[0xroas-ai-ads-agent]])
@0xROAS (2026-07-09): GPT 5.6 Sol + Seedance 2.0 agent for end-to-end ad creation from a single prompt — brolls, talking head, character-doing-actions. Signal = AI creative production đang reach "one prompt → full ad" threshold.

**AI UGC dưới $1 — RN V3 system ([[0xroas-ai-ugc-under-dollar-infinite-video]]):** 2026-07-12 update từ cùng tác giả: **RN V3** cho infinite-length UGC realistic với chi phí **<$1/video** — realistic voice + human movements + consistent length + all-in-one workflow. Barrier production UGC nay thấp hơn bất kỳ UGC actor trả phí nào.

Hàm ý cho testing regime: production cost/ad tiếp tục giảm → barrier để flood volume (Gruns 900+ ad) giảm theo. Nhưng **isolate-one-layer vẫn đúng**: AI chạy nhiều asset nhanh hơn không có nghĩa là bỏ signal discipline — vẫn cần tag đúng để extract pattern. Tie [[market-awareness]] §unaware pool: AI giỏi copy "fast ad" format nhưng vẫn cần operator input để viết unaware creative không flat.

> Theo dõi RN V3 + Seedance 2.0 + GPT Sol agent khi production budget cho MaxPro mở rộng — RN V3 đặc biệt hấp dẫn cho UGC "talking pet owner" format dưới $1/clip thay thế actor thuê ngoài.

## MaxPro
Dùng round-test để confirm: angle nào trong [[maxpro-avatars]] thật sự convert (R1) → format ugly-native nào carry ([[ugly-ads-method]], R2) → hook ([[hooks]], R3) — thay vì đổi cả 3 cùng lúc rồi ko biết cái nào ăn.
