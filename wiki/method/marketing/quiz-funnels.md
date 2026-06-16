# Quiz funnels (interactive pre-sell)

Nguồn: [[dtcquizbuilder-quiz-funnel-2m-90days]], [[dtcquizbuilder-im8-quiz-teardown]], [[dtcquizbuilder-web2app-email-capture]] (cùng tác giả @DTC_Quizbuilder, đã có [[dtcquizbuilder-native-ads-workflow]]). Là MỘT dạng pre-sell layer giữa ad và PDP — họ hàng đầy đủ ở [[funnel-and-landing]].

## Vì sao quiz = arbitrage
"No-foreplay funnel" (ad→PDP→checkout) convert cold 1-2%. Chèn quiz vào giữa = warm-up. Case: cold CVR **1.2% → 4.7%**, $2M/90 ngày, chỉ 1 thay đổi. Quiz làm 4 việc PDP không làm:
- **Micro-commitment** — mỗi câu trả lời = 1 "yes" nhỏ dồn lại, bỏ ngang thấy phí công.
- **Belief seeding** — dịch chuyển niềm tin TRƯỚC khi thấy giá.
- **Objection pre-handling** — câu hỏi tự xử lý phản đối.
- **Zero-party data** — biết chính xác họ quan tâm gì, mạnh hơn pixel.

Thesis bổ sung cho [[media-buying]] ("creative is the new targeting"): khi ai cũng có AI copy + AI creative + CRO, **funnel là chỗ còn arbitrage** (khó copy hơn 1 cái ad).

## Congruency = câu hỏi #1 (hỏi TRƯỚC khi build)
[[dtcquizbuilder-im8-quiz-teardown]]: *"Is this congruent with the traffic I'm sending to it?"* — quiz phải khớp messaging / mechanism / proof / emotion / **awareness level** của ad đã đưa họ vào. IM8 chạy ad GLP-1 side-effects (fatigue, brain fog, hair shedding) → problem-aware → quiz = *"Find out your GLP-1 Nutrient Debt Score"* (diagnostic, presuppose "hidden cost"), KHÔNG phải "wellness assessment" generic. Cùng nguyên lý congruency của tên persona-page ([[personas]]) + message-match ad↔page ([[funnel-and-landing]]) + Schwartz awareness ([[market-awareness]]).

## Question sequencing — low-friction entry
- **Q1 = nhàm chán nhất** (age/gender). Zero cognitive load → khởi động yes-chain. Bioma, Nooro, Lunavia, SkinnyFit đều mở y hệt.
- Câu aspirational để **Q3-4** (sau khi đã commit thì câu cảm xúc đánh mạnh hơn).
- Sequence mẫu: `1 age · 2 gender · 3 goals/desire · 4 pain points · 5+ deeper diagnosis`.
- **V1 (data-first):** IM8 bỏ cả age/gender ở screen 1, thay bằng slide "cho lý do đọc tiếp" + authority stack. Mục tiêu = "miếng khoai tây chiên đầu tiên" frictionless để ăn cả bịch.

## 4 nguyên lý tâm lý (IM8 — transferable sang MỌI copy)
1. **Authority before product** — screen đầu nuke skepticism bằng authority asset, chưa hỏi/bán gì.
2. **Positive desire before negative admission** — hỏi *"nếu lấy lại 1 thứ trước tiên, là gì?"* thay vì *"bạn bị làm sao?"*. Thú nhận vấn đề qua **nostalgia, không phải shame** → hope kéo vào sâu thay vì defensive đẩy ra.
3. **Answers presuppose the problem** — đáp án tốt nhất là *"I haven't had issues **yet**"* thay vì *"I'm fine"*. Chữ "yet" giữ **problem-state momentum**, không cho user thoát cảm xúc. Đây là "twist the knife" của DR.
4. **Comfort before the offer** — sau khi dồn pain tới đỉnh, hạ áp lực ("không phải lỗi bạn", "đây là bước tự nhiên tiếp theo") TRƯỚC khi show offer → mở lòng mua thay vì freeze.

> [!note] Sequencing nuance vs guilt-lead
> #2 mở bằng *desire/hope* để hạ friction lúc chưa đầu tư; còn [[hooks]] / [[ugly-ads-method]] mở bằng *guilt/confession*. Không mâu thuẫn: quiz cần stick-rate ở câu 1 nên mở nhẹ, rồi #3 intensify problem sau. Long-form ad đã có người đọc tự chọn (length=qualifier) nên twist-knife được ngay.

## Drop-off diagnosis — tối ưu completion
Mỗi câu có drop-off riêng; tìm câu chảy máu nhất → split-test tới khi về bình thường. Case: Q4 "What solutions tried?" options quá dài + nhiều → rút còn **4 options + "None of the above"** → drop 22% → 9%, completion 19% → 25%.

**Benchmark:** Q1 drop **30-40%** (filter lớn nhất, OK) · các câu sau **<15%** mỗi câu · completion mục tiêu **25%+**. Câu nào >10% drop = chỗ phải sửa.

## Loading screen = captive attention
10-15s "đang phân tích" = khán giả bị giữ chân không click đi được. Nhồi vào: before/after testimonial mạnh nhất + social-proof stat + product preview (để quen mặt trước khi thấy offer). Đừng để spinner trống.

## Segment & retarget bằng câu trả lời
Người KHÔNG mua vẫn để lại data (goal / struggle / solution-tried / symptom). Retarget tách theo đáp án: "tried diets, weight came back" → ad yo-yo cycle · "low energy" → ad energy (không phải weight). Cùng product, angle khớp đúng cái họ TỰ KHAI.

## Web2App — dùng quiz thay pop-up để bắt email
[[dtcquizbuilder-web2app-email-capture]]: tắt pop-up → CVR **+51%**. Pop-up chồng discount lên discount, spike CPA Meta, che PDP đúng lúc họ định mua. Thay bằng: export email KÈM mọi biến quiz (`{{age}}` `{{main_problem}}` `{{desire}}` `{{failed_solutions}}`) về Klaviyo → flow/campaign hyper-targeted. **Trick 0 drop-off (Pawchamp):** đóng khung email như "bên thứ 3 để NHẬN quà" (free K9 program) chứ không phải "bạn cho tôi data" → ask nhẹ, vẫn chốt sale front-end. Ví dụ thị trường: MadMuscles, Pawchamp, Liven.

## Cho MaxPro? (đánh giá thật)
Quiz mạnh nhất cho supplement/health (diagnostic triệu chứng). Grinder = tool vật lý → quiz yếu hơn nhưng làm được: *"Tình trạng móng chó bạn?"* → breed/size (cơ hội **qualify out large-breed sớm**, [[maxpro-product-truth]]) → đã thử clipper/groomer? → sợ gì nhất → data feed retarget + email. **Nhưng:** listicle pre-sell ([[funnel-and-landing]]) khả thi & rẻ hơn nhiều cho v0 — cân nhắc cái đó TRƯỚC quiz.
