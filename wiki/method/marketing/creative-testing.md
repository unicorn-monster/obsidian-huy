---
sources: [low-budget-creative-testing-playbook]
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

## MaxPro
Dùng round-test để confirm: angle nào trong [[maxpro-avatars]] thật sự convert (R1) → format ugly-native nào carry ([[ugly-ads-method]], R2) → hook ([[hooks]], R3) — thay vì đổi cả 3 cùng lúc rồi ko biết cái nào ăn.
