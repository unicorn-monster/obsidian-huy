---
sources: [low-budget-creative-testing-playbook, maxwellcopy-ab-testing-scale, dtcmidas-net-new-vs-iteration-ratio, rubiinov-gruns-100m-funnel-teardown, 0xroas-ai-ads-agent, maxwellcopy-1b-dtc-funnel-6-stages, 0xroas-ai-ugc-under-dollar-infinite-video, dtcmidas-500k-month-4months, ecomamin-48-laws-google-advertising, jforjacob-what-a-winning-ad-looks-like, jforjacob-soft-metrics-hide-winning-ads, jforjacob-cpa-doesnt-tell-full-story, jforjacob-soft-metrics-before-after-reveal-hook, jforjacob-soft-metrics-tell-the-story-behind-cpa, jforjacob-testing-is-for-learnings-not-low-cpa, jforjacob-track-every-element-instead-of-spam-testing, jforjacob-single-variant-changes-in-testing-ad-sets, jforjacob-keep-single-variable-tests-despite-andromeda, jforjacob-cheap-cpc-no-conversions-build-the-lander, jforjacob-dedicated-lander-for-good-soft-metrics, dtcmidas-test-concepts-not-creatives, dtcmidas-test-every-ad-seven-days-with-intent, dtcmidas-is-the-image-or-the-copy-driving-your-winning-static, dtcmidas-why-should-you-analyze-your-losing-ads, dtcmidas-weekly-creative-testing-feedback-loop, dtcmidas-should-you-speed-up-your-video-ads, dtcmidas-how-do-you-iterate-a-winning-ad, dtcmidas-how-to-milk-a-winning-ad-for-months, dtcmidas-iterate-your-top-spender-never-kill-it, dtcmidas-fighting-creative-fatigue]
updated: 2026-08-26
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

## Test hypothesis = CONCEPT, không phải creative nào ăn spend (DTCMidas, 2 tweet)
Bồi thêm lớp "vì sao/cách nào" cho §Test theo round ở trên — DTCMidas mô tả cụ thể cách chạy round Angle BÊN TRONG 1 ad set:

- **Setup cụ thể** ([[dtcmidas-test-concepts-not-creatives]]): CBO min-spend (ABO tương tự) — mỗi ad set nhận **3-5 biến thể của CÙNG 1 concept (big idea)**, cố ý GIỐNG nhau: video = cùng body, khác hook; static = cùng headline, khác visual. Hypothesis không phải "creative cụ thể này có ăn không" mà "**concept này có work không**" — không quan tâm 1 creative trong ad set ăn hết budget, vì câu trả lời cho hypothesis-concept đã có rồi. Concept thắng → mới isolate biến số tiếp (đây chính là R1→R2→R3 ở trên). Concept không thắng → chuyển concept khác, đừng cố cứu bằng biến thể nhỏ hơn.
- **Test có CHỦ ĐÍCH, không random spam** ([[dtcmidas-test-every-ad-seven-days-with-intent]]): mỗi ad launch phải có lý do rõ đứng sau nó. DTCMidas test mỗi ad **7 ngày** (độc lập xác nhận nhịp 7-ngày × $30/ngày ở §Nhịp 10-test/tuần dưới — nguồn khác, ecomamin), và claim: làm đúng chủ đích có thể **profitable ngay trong giai đoạn testing**, không chỉ "trả học phí" chờ tới lúc scale.

→ **Không mâu thuẫn** với §3 layer/Test theo round ở trên — 2 tầng zoom khác nhau của cùng discipline isolate-1-layer: R1 nói "4-6 angle" (biến số GIỮA các ad set), DTCMidas nói "3-5 variation/ad set" (biến số TRONG 1 ad set, cùng 1 angle/concept).

## Winning static: tách RIÊNG image vs copy để biết cái nào đang carry ([[dtcmidas-is-the-image-or-the-copy-driving-your-winning-static]])
Kỹ thuật phân rã 1 native static ĐÃ THẮNG (bước SAU khi có winner, không phải cách tìm winner mới): dựng **10 ad mới = ảnh-thắng + 10 copy khác nhau**, VÀ **10 ad mới = copy-thắng + 10 ảnh khác nhau**, chạy 2 nhóm ở 2 ad set riêng. DTCMidas: đa số trường hợp **copy carry nhiều hơn** (đặc biệt copy dài/long-form) — tìm được winner mới ở vòng này thì lặp lại đúng quy trình (giữ copy, đổi ảnh tiếp) để vắt thêm.

→ 1 dạng chẩn đoán chạy NGƯỢC lại §Test theo round: thay vì test angle→format→hook theo thứ tự cố định, kỹ thuật này bổ **CHẨN ĐOÁN** 1 winner sẵn có để biết layer nào (ảnh hay chữ) đang gánh performance, trước khi quyết định vắt layer nào tiếp. MaxPro: khi có 1 static ugly-native ăn tốt, chạy split này để biết nên vắt copy (thêm variant headline) hay vắt visual (thêm variant photo raw-problem) trước.

## Weekly creative review — dissect winners VÀ losers có hệ thống (DTCMidas, 2 tweet) ⭐
Bồi trực tiếp cho §Naming+tracker ở trên (tracker hiện có: Creative ID/Angle/Hook type/Format/Copy length/Spend/Link CTR/CPA/Verdict) bằng 1 QUY TRÌNH review hàng tuần + field bổ sung.

**Vì sao PHẢI phân tích ads THUA, không chỉ ads thắng** ([[dtcmidas-why-should-you-analyze-your-losing-ads]]): chỉ nhìn winner = survivorship bias — đúng lỗi suýt giết phi công Đồng Minh WWII. Quân đội định gia cố chỗ MÁY BAY VỀ ĐƯỢC dính đạn nhiều nhất (thân, cánh) — statistician Abraham Wald chỉ ra ngược lại: chỗ CẦN giáp là chỗ KHÔNG thấy lỗ đạn (động cơ, buồng lái), vì máy bay trúng đó đã rơi, không bao giờ về để đếm. Ads y hệt: 50 ad chạy, 3 winner được study kỹ — 47 loser chết trong im lặng, mang theo bài học "KHÔNG làm gì" mà không ai đọc. Câu hỏi cần hỏi mỗi ad thua: hook yếu? sai awareness stage? value-prop mờ? format lệch audience? creative execution dở?

**Quy trình weekly review đầy đủ** ([[dtcmidas-weekly-creative-testing-feedback-loop]]): mỗi tuần dissect TOÀN BỘ ad đã chạy — **winner TRƯỚC** (Angle · Hook · Promise · Avatar · Awareness level · Pacing · Desire · Format), rồi **loser SAU** (cùng bộ câu hỏi, DTCMidas nhấn: quan trọng hơn vì thường có nhiều loser hơn winner). Mục tiêu không phải ăn mừng/than vãn — là hiểu VÌ SAO. Iterate sau khi biết: video → cùng video đổi hook / cùng script đổi creator / hook-thắng ghép video cũ / cùng script đổi b-roll; static → cùng headline đổi visual / cùng visual đổi headline (= chính kỹ thuật §Winning static ở trên).

**Field bổ sung cho tracker** (nối §Naming+tracker): `Status · Batch number · Testing hypothesis · Results-bucket (high-spend+good-CPA / poor-spend+good-CPA / poor-spend+poor-CPA / good-spend+poor-CPA)`. Persona/avatar và Format đã trùng cột hiện tại — thêm mới là Status/Batch/Hypothesis/4-ô-kết-quả.

> [!note] Trùng lặp có chủ đích với §Testing culture — jforjacob ở trên
> §"Track TỪNG element" (jforjacob) đã nói tag avatar/awareness/desire/creator/format/editor trên MỌI ad — cùng tinh thần "test = học VÌ SAO" với DTCMidas ở đây. Delta: jforjacob nhấn TAGGING liên tục; DTCMidas thêm NGHI THỨC hàng tuần cụ thể (buổi review winner-rồi-loser + 4-ô kết quả) + lý-thuyết-nền survivorship bias giải thích TẠI SAO loser quan trọng ngang winner. 2 nguồn củng cố nhau — dùng cả 2: tag mọi ad (jforjacob) + review theo nhịp tuần này (DTCMidas).

## Tactical: tăng tốc video ad 15-30% ([[dtcmidas-should-you-speed-up-your-video-ads]])
DTCMidas test 2 tháng trên cả UGC-style lẫn AI-voiceover+b-roll: bản **speed-up 15-30%** thắng bản tốc độ gốc ở phần lớn trường hợp. Tactic rẻ, áp được ngay ở khâu edit cuối — thử A/B trên video đã có sẵn (không cần quay lại) trước khi đổ thêm budget sản xuất mới. Tie [[ai-video-production]] (khâu chọn model/production) — đây là đòn hậu-kỳ, không phải đòn chọn model.

## Budget split: 70-80% iterate / 20-30% swing mới
Creative đã prove → đổ phần lớn budget **iterate nó** (hook mới, format mới, biến thể nhỏ trên angle đã thắng), KHÔNG mint concept mới. Đa số làm ngược (ném concept mới mãi). Swing mới = tìm winner KẾ; iterate = "bank" cái đang có.

> [!note] Ratio nên FLEX theo cycle, không dán cứng ([[dtcmidas-net-new-vs-iteration-ratio]])
> DTCMidas tinh chỉnh con số 70-80/20-30 ở trên: tỉ lệ net-new vs iteration **không nên tĩnh** — có kỳ **20% iteration / 80% net-new** (đang đi tìm winner), có kỳ **50/50** (vừa tìm được thứ đáng vắt). Luật: *"whenever you find something that works, iterate the shit out of it until it stops working"* → rồi mới dồn về net-new. Về volume: launch nhiều **nhất có thể mà không giảm chất** — nhưng ưu tiên **ít mà high-conviction** hơn nhiều mà nhạt (chất ≠ production-quality, mà = độ sắc angle/hook). Vị trí trong cycle quyết định ratio, không phải 1 số cố định.

## "Iterate the shit out of it" — levers cụ thể + never-kill rule (DTCMidas, 4 tweet) ⭐
§Budget split trên đã chốt NGUYÊN LÝ (đổ 70-80% budget vào iterate winner, "iterate cho tới khi nó ngừng work") — đây là 4 tweet trả lời câu hỏi CỤ THỂ: iterate CÁI GÌ, và vì sao không được tắt nó dọc đường.

**Đừng bao giờ tắt top spender** ([[dtcmidas-iterate-your-top-spender-never-kill-it]]): tắt ad ăn spend nhiều nhất → performance CẢ campaign nhiều khả năng chết theo, không chỉ mất 1 ad. Thay vì kill, làm 1 iteration của chính nó — đọc **comment** trên ad để biết cần sửa gì trước khi iterate (nguồn insight rẻ nhất, đang có sẵn dưới ad).

**Iteration levers — video** (gộp từ [[dtcmidas-how-do-you-iterate-a-winning-ad]] + [[dtcmidas-how-to-milk-a-winning-ad-for-months]], 2 tweet cùng chủ đề, danh sách hợp nhất):
- Hook mới — nhỏ nhất: đổi text-overlay 3 giây đầu; lớn nhất: quay lại hoàn toàn hook nói + hình
- Lead mới (đoạn mở sau hook)
- CÙNG script, gửi cho **creator khác**
- Đổi b-roll, giữ nguyên voiceover (đặc biệt hiệu quả với ad dạng AI-VO + b-roll)
- Tăng/giảm tốc độ video (xem thêm §Tactical speed-up dưới — đã có data riêng cho lever này)
- Cắt ngắn (chỉ giữ core message) hoặc kéo dài (thêm proof/giải thích mechanism)
- Testimonial mới / thêm social proof
- Đổi format cùng message: podcast-style, UGC, AI-voiceover+b-roll
- Đổi bối cảnh quay (xe hơi, phòng khách, công viên chó…)
- Greenscreen reaction ad (creator phản ứng lại video gốc)
- Turn winning hook thành static ad (chuyển-chéo format)

**Iteration levers — static:**
- Ảnh thắng + headline mới, HOẶC headline thắng + ảnh mới (không đổi cả 2 cùng lúc)
- Static "native" không headline (chỉ hình) → đổi nhân vật/vật thể chính bằng Gemini/Higgsfield: ví dụ ảnh thắng có phụ nữ da đen trẻ → làm biến thể phụ nữ da đen lớn tuổi, phụ nữ châu Á trẻ, phụ nữ da trắng… — giữ bố cục/mood, chỉ đổi người
- Biến ảnh thành GIF, hoặc thêm chuyển động vào visual tĩnh
- Thêm urgency/social-proof element lên ảnh
- Turn winning headline thành video hook/script (chuyển-chéo format ngược lại)

**Nguyên lý xuyên suốt cả 2 danh sách:** isolate ĐÚNG 1 biến, giữ nguyên mọi thứ khác — đây chính là kỷ luật §3 layer/§Test theo round ở đầu trang, áp dụng SAU khi đã có winner thay vì trước khi tìm winner. Khác trọng tâm với §Winning static (tách ảnh/copy) ở trên: đó là CHẨN ĐOÁN layer nào đang carry; đây là DANH SÁCH biến thể để sinh ra khi đã biết cần vắt layer nào.

**Fighting creative fatigue — chỉ 1 giải pháp dài hạn** ([[dtcmidas-fighting-creative-fatigue]]): launch đều đặn ad chất lượng cao mới là cách DUY NHẤT giải quyết creative fatigue lâu dài — không có shortcut thay thế việc liên tục sản xuất. Ngắn hạn, kéo dài tuổi thọ winner bằng cách gắn 1 **landing page congruent MỚI** cho nó (không đổi creative, đổi điểm đến) — tie [[funnel-and-landing]], [[presell-pages]]; cùng cơ chế "đổi destination thay vì đổi creative" đã thấy ở §CPC rẻ+không convert→build lander riêng (jforjacob) phía dưới trang.

> [!note] Áp MaxPro
> Khi 1 ugly-native static ăn spend ổn định: đọc comment trước → chọn lever (ảnh thắng+headline mới hay headline thắng+ảnh mới) → nếu hết ý, thử đổi nhân vật avatar (chủ chó già/trẻ/nam/nữ) bằng Gemini/Higgsfield giữ nguyên bố cục. KHÔNG tắt nó để "dọn account" — làm iteration trước, tắt sau nếu iteration cũng chết.

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

## DTC scale playbook — $0→$500k/mo trong 4 tháng ([[dtcmidas-500k-month-4months]])
DTCMidas case xác nhận những gì DID vs DIDN'T move needle ở giai đoạn scale early:

**DID (thực sự làm):**
- Tăng creative output — onboard creator mới mỗi tuần, thuê creative agency
- Đọc review + ad comment + CS ticket thủ công để hiểu khách (*"đọc thủ công — không delegate"*)
- Làm ad drive **real TOF** (net new visitor, không chỉ retarget)
- Test giá và offer — kể cả **tăng giá + tăng phí ship** (CVR không rớt)
- Đàm phán giá tốt hơn với nhà máy/3PL khi volume tăng

**DIDN'T (không làm):**
- Thêm kênh marketing mới
- Bàn về cấu trúc ad account
- Build dashboard phức tạp
- Launch sản phẩm mới (quá sớm)
- Gọi vốn

**Hàm ý cho testing regime:** creative velocity (thuê agency, onboard creators) + TOF real creative là đòn bẩy #1. Confirm cùng Gruns 900+ ad velocity ở trên. "Không thêm kênh" = focus đào sâu 1 kênh trước.

> [!note] MaxPro
> Giai đoạn $0→$100k: ưu tiên **output creative + hiểu khách thủ công** trước khi nghĩ đến dashboard/automation. Test giá táo bạo hơn — $39.95→$44.95 rất có thể không rớt CVR (xem [[offer-and-cta]] §raise price sau khi raise value).

## Nhịp 10-test/tuần + ngưỡng kill bằng SỐ ([[ecomamin-48-laws-google-advertising]], Law 18/46) ⭐
Bồi phần **cadence + kill-threshold** mà §isolate-one-layer chưa đóng đinh (trang này mạnh về *test cái gì*, yếu về *bao lâu thì cắt*):
- **Nhịp:** 10 creative/tuần, **giết 8**. Mỗi cái **7 ngày × $30/ngày**. *"Most brands test 2-3 creatives per month and wonder why nothing scales — the winning creative is hidden inside a volume of tests."*
- **Ngưỡng kill (video/YouTube-DG):** view-through rate **<40%** HOẶC CTR **<1.5%** → cắt; sống sót → **gấp đôi budget**. (So với bar Discover-image **<3-5% CTR** ở [[google-ads]] §native image ads — khác placement, khác bar; đừng lẫn.)
- ⚠️ Ngưỡng này giả định **$30/ngày/creative** — đúng regime "budget khá", không phải regime $20-40/day CHO CẢ ACCOUNT ở §hard-constraint. Ở budget MaxPro hiện tại: giữ số creative ít hơn nhưng **giữ nguyên kỷ luật 7 ngày + cắt theo con số**, đừng cắt theo cảm giác ngày thứ 3.

**Law 46 — creative thắng luôn là cái bạn KHÔNG ngờ tới.** *"The creative you spent the most time on will not outperform the one you threw together in 10 minutes."* Tác giả nói thẳng: điều này lặp đủ đều để **phải đổi quy trình sản xuất**, không chỉ để tự an ủi — sinh volume, test nhanh, để data chọn. **Ranh giới rõ:** trực giác creative **hữu ích để đẻ variant**, **không đáng tin để đoán winner**. → chống lại phản xạ đánh bóng 1 concept "chắc thắng"; khớp §budget-split (iterate cái ĐÃ thắng, đừng nuôi cái mình THÍCH) + [[dtcmidas-net-new-vs-iteration-ratio]].

> [!note] Ma trận Jocko Fuel — đọc từ ảnh Transparency Center (vision-read)
> Screenshot ~20+ ad đang chạy cùng lúc của 1 brand. 2 thứ đọc được mà text không nói:
> 1. **Đa dạng ANGLE trong cùng 1 thời điểm, không phải nhiều biến thể của 1 angle** — đếm được ~6 họ: product-on-black moody · **founder/đàn ông lớn tuổi talking-head** · text-card claim to (*"FLAVORS TASTE LIKE DESSERT"*, *"2G NATURAL SUGAR"*, *"NO ARTIFICIAL FLAVORS OR SWEETENERS"*) · **social-proof card** (*"2000+ ★★★★★ REVIEWS"*) · ingredient-list card (ALPHA GPC · L-THEANINE · BACOPA · ELECTROLYTES) · UGC nữ cầm sản phẩm / cảnh gym.
> 2. **Description text GIỐNG HỆT nhau xuyên gần hết bộ** (*"Jocko Milk Protein Shakes. Delicious & Keto Friendly. Fuel Your Workout & Recovery."*) → biến số đang test là **hình + angle**, phần chữ giữ cố định. Đây đúng là isolate-one-layer chạy ở quy mô lớn — và là cách rẻ để đọc ma trận test của bất kỳ đối thủ nào (cách mở Transparency Center → [[google-ads]] §48-laws).
> → **MaxPro:** ghim 1 description/desc-line cố định rồi đổi hình theo 6 họ angle ([[maxpro-avatars]], [[ugly-ads-method]]) — thay vì đổi cả chữ lẫn hình rồi không đọc được gì.

## Testing = để học, không phải để có CPA thấp nhất (jforjacob, 4 tweet) ⭐
Bồi trực tiếp cho §3 layer + §Test theo round ở trên — cùng thesis isolate-one-layer, jforjacob nhấn thêm **lý-do-tồn-tại** của discipline này:

- **Mục tiêu test không phải "CPA thấp nhất có thể"** ([[jforjacob-testing-is-for-learnings-not-low-cpa]]): publish ra CPA thấp mà không rút được VÌ SAO nó thắng = vô giá trị dài hạn — không lặp lại được, không giữ CPA thấp qua thời gian. jforjacob: người hỏi "sao anh scale nhanh vậy" rồi nhún vai khi nghe câu trả lời (chính là kỷ luật rút bài học này) — không phải bí mật, chỉ là ít người chịu làm.
- **Track TỪNG element trên mọi ad, đừng chỉ spam-test** ([[jforjacob-track-every-element-instead-of-spam-testing]]): avatar, awareness stage, desire, creator, format, editor — tag hết trên mọi ad thay vì chỉ đổi hàng loạt rồi đoán. Kết quả khi làm đúng: "strategist đang gặp khó để tạo ra 1 ad thua" — vì đã hiểu rõ biến số nào drive performance. Khớp §Naming+tracker ở trên, thêm cột `Creator · Awareness stage · Desire · Editor` vào tracker hiện có.
- **Ad set test thật trông như thế nào** ([[jforjacob-single-variant-changes-in-testing-ad-sets]]): ad set test tiêu chuẩn của jforjacob = 1 ảnh, chỉ đổi COPY (single-variant). Câu hỏi tu từ: nếu Meta coi các bản copy-variant là "cùng 1 asset" thì sao chúng vẫn ăn spend khác nhau? Và vì sao hook-iteration của winner luôn ăn spend? → bỏ qua lời khuyên agency/Meta, giữ discipline single-variant.
- **Đừng bỏ single-variable test vì buzzword mới (Andromeda)** ([[jforjacob-keep-single-variable-tests-despite-andromeda]]): creative diversity đến từ CONCEPT mới, không phải từ dừng test biến-thể-nhỏ của concept cũ. Hook-test/headline-test tốn gần như 0 effort, luôn high-leverage — dừng nó không giải phóng thời gian để làm concept mới (concept mới thì variation vẫn nên làm luôn, effort thấp). Dừng variation-test = giảm volume, giảm learning, giảm spend.

→ Cả 4 tweet củng cố 1 điểm: **test không phải trò chơi số CPA, là hệ thống thu thập bằng chứng "biến số X drive performance" — buzzword mới (Andromeda) không đổi nguyên lý này.**

## Soft metrics = full story đằng sau CPA, không chỉ 2 metric (jforjacob, 5 tweet) ⭐
Mở rộng §Đọc signal ở trên (hiện chỉ 2 metric: Link CTR + CPA/ROAS) bằng bộ soft-metrics đầy đủ hơn từ jforjacob:

- **Phán xét ad chỉ bằng CPA/ROAS là sai** ([[jforjacob-soft-metrics-hide-winning-ads]]): có thể lấy BẤT KỲ ad thắng nào, đổi sang offer dở hoặc gửi sang landing page tệ → CPA/ROAS tụt ngay — ad KHÔNG tự nhiên trở nên dở. Ai chỉ nhìn CPA đang bỏ lỡ cơ hội: nhiều ad "thua" trong tài khoản thực ra chỉ cần đổi funnel/landing page, không phải kill. Bộ metric đáng nhìn thêm: **hook rate, hold rate, average watch time, CPC** — 4 số này chỉ ra content có TỐT không, tách biệt khỏi việc offer/page có convert không.
- **High CPA ≠ ad dở** ([[jforjacob-cpa-doesnt-tell-full-story]]): 1 ad thắng bị copy sang landing page/offer khác có thể ra CPA $100 thay vì $20 gốc — ad không hề đổi, chỉ destination đổi. Ví dụ: hold rate + CTR tốt nhưng hook rate kém → chỉ cần đổi hook, ad "thua" biến thành "thắng" — thứ sẽ KHÔNG BAO GIỜ test được nếu chỉ nhìn CPA.
- **Không 1 metric nào đủ, nhưng NHIỀU metric cùng lúc correlate mạnh với winner** ([[jforjacob-soft-metrics-before-after-reveal-hook]], quote @IstvanicMarin): publish 1 ad, pick up spend ngay dù chưa thấy sale — đủ tự tin đoán nó sẽ ăn vì có đủ "hình dạng" của mọi winner đã thấy trước đó.
- **Ẩn dụ bóng đá — không đội nào chỉ nhìn tỉ số** ([[jforjacob-soft-metrics-tell-the-story-behind-cpa]]): đội thắng/thua vẫn phân tích pass-completion, quãng đường chạy, số tắc bóng — vì đó là DỮ LIỆU giải thích tỉ số, để điều chỉnh trước trận sau. Ads y hệt: CPA/ROAS là "tỉ số" cần optimize, nhưng hook rate/hold rate/CTR/CPM là "in-game stats" giải thích VÌ SAO — không nhìn cả 2 loại cùng lúc là ignorant hoặc đang nói dối.
- **Chữ ký 1 winner thật khi vừa publish** ([[jforjacob-what-a-winning-ad-looks-like]]): trong <24h vào scaling campaign — ăn spend ngay, CPA thấp hơn target 50%+, frequency rất thấp, CVR site cũng tăng theo (case cụ thể +17%). Chữ ký kết hợp: soft metrics (spend pickup, frequency thấp) + CPA + site-level CVR cùng lúc dương — không phải 1 số đơn lẻ.

→ Nối trực tiếp §Đọc signal (2 metric) ở trên: mở rộng từ **Link CTR + CPA/ROAS** lên bộ đầy đủ **hook rate/hold rate/watch-time/CPC/frequency/site-CVR** — cùng nguyên lý (soft metric giải thích, CPA/ROAS là kết quả). 2 failure pattern cũ (High CTR+bad CPA=kill; Low CTR=fix hook) giờ có thêm lát cắt thứ 3: **hold rate/watch-time tốt + CPA xấu = vấn đề landing page/funnel, KHÔNG PHẢI vấn đề creative.**

## CPC rẻ + không convert → build lander riêng, đừng kill ad (jforjacob, 2 tweet)
Tactic cụ thể nối trực tiếp §Soft metrics ở trên (lát cắt "hold rate tốt + CPA xấu = vấn đề landing page"):

- **Quy trình** ([[jforjacob-cheap-cpc-no-conversions-build-the-lander]]): publish creative với forced spend trước → xem cái nào drive CPC thấp hơn trung bình mà KHÔNG convert → mới build landing page RIÊNG cho đúng ad đó. Áp dụng nhiều nhất với static kiểu clickbait: gửi thẳng lên PDP thì CPA chắc chắn tệ — lấy đúng chủ đề/headline clickbait đó, viết tiếp bằng advertorial/sale page nối mạch câu chuyện ("full Sugarman"). Làm SAU khi đã publish (biết ad nào đáng làm lander) chứ không dựng landing page cho từng creative trước. jforjacob phản bác thẳng "trust-the-algo bro" và bid/cost-cap maxi: 2 kiểu account này sẽ KHÔNG BAO GIỜ cho creative click-bait ăn spend vì gửi PDP mặc định → bounce cao → Meta không ưu ái. Đây chính là lý do TESTING tồn tại — không phải "force spend rồi hy vọng nó tự scale", mà để thu thập data + isolate biến số + hiểu cái gì drive performance.
- **"Big hack" hit-rate** ([[jforjacob-dedicated-lander-for-good-soft-metrics]]): test ad → soft metrics tốt nhưng CPA không đạt → dựng NGAY 1 lander riêng cho đúng ad đó. jforjacob đã làm nhiều với static CPC rẻ kiểu clickbait — bỏ ngoài tai lời khuyên "đừng chạy ad kiểu này" (người nói vậy thường chưa từng làm cách này). Quy trình: publish → xem cái nào ăn spend + CPC thấp → LÚC ĐÓ mới viết advertorial/listicle nối tiếp headline đã bait → nhanh nếu đã có sẵn format listicle/advertorial dựng trước.

> [!note] Áp MaxPro
> Static "ugly" clickbait ([[ugly-ads-method]]) test trước, không build landing riêng ngay — chỉ khi thấy CPC rẻ + CTR/hold tốt mà PDP không convert mới dựng advertorial/listicle nối headline đó ([[presell-pages]], [[funnel-and-landing]]).

## MaxPro
Dùng round-test để confirm: angle nào trong [[maxpro-avatars]] thật sự convert (R1) → format ugly-native nào carry ([[ugly-ads-method]], R2) → hook ([[hooks]], R3) — thay vì đổi cả 3 cùng lúc rồi ko biết cái nào ăn.
