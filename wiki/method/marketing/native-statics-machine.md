---
sources: [native-statics-machine-guide]
updated: 2026-08-27
---

# Native statics machine — ship 30-50 static/ngày

Nguồn: [[native-statics-machine-guide]] (Alex, Ecommerce Scaling Secrets / GetHookd — flagship guide "The Ad Angles Series"). Đây là **hệ sản xuất số lượng lớn cho static native trên Meta**, không phải open-web native ([[native-ads]]). Bổ sung tầng PRODUCTION cho [[ugly-ads-method]] (tầng copy) + [[creative-testing]] (tầng đọc số).

> [!important] Luận điểm gốc
> "Brand thắng static **không design giỏi hơn bạn — họ ship nhiều hơn bạn.**" Bằng chứng library: 1 brand huyết áp **496 ad active**, 1 brand cat furniture **961 ad active**, 1 brand castor oil **140 ad** — tất cả performance score 98-100. Phần lớn static của họ chỉ là 1 tấm ảnh + ít chữ.
> Math cuối guide: **100 câu hỏi $5/ngày > 1 câu hỏi $500/tuần.**

## Static = tầng khám phá ANGLE rẻ nhất của cả account ⭐
Đây là vai trò chiến lược thật sự, không phải "làm creative cho đủ số":
- Static là **câu hỏi rẻ nhất** bạn hỏi được auction ($2-4/static, grade ở $5-8 spend).
- 50 static/ngày = 50 câu hỏi/ngày. Câu trả lời **định giá trước** cho việc $500 video/advertorial nên nói gì.
- **3 static cùng 1 ANGLE thắng trong 1 tuần ≠ creative win → đó là market discovery.** Angle đó tốt nghiệp sang mọi format khác: long-form native, advertorial, VSL script.
- Tie: [[angles]] §50-angle strategy · [[creative-testing]] §Test hypothesis = CONCEPT.

## 8 format native (dễ → khó sản xuất)
| # | Format | Trông như gì | Tải copy | Chi phí sản xuất |
|---|---|---|---|---|
| 1 | **Big-type text post** | 1 câu bold trên nền phẳng, như screenshot tweet | 1 dòng trên ảnh, body ngắn | Vài phút. **Ngựa kéo volume.** |
| 2 | **Screenshot-style** | iMessage, Notes app, review, forum reply | "Đoạn hội thoại" CHÍNH LÀ copy | Vài phút, có template |
| 3 | **Review card** | Quote khách styled thành testimonial card | 1 quote mạnh + attribution | Vài phút. Cần quote thật |
| 4 | **Us-vs-them** | 2 cột: cách cũ vs cách này | 6-10 dòng đối lập ngắn | Nhanh. Ăn ở niche commodity |
| 5 | **Candid photo** | Ảnh chất lượng điện thoại: sản phẩm trên bàn bếp, trong tay | Caption làm việc | 1 buổi chụp = 50 static nguyên liệu |
| 6 | **Meme format** | Meme structure quen chở angle của mình | Tối thiểu, phụ thuộc timing | Nhanh nhưng **hết hạn trong vài tuần** |
| 7 | **Editorial card** | Như preview bài báo: headline + kicker + ảnh | Headline là tất cả | Template + kỷ luật headline |
| 8 | **Story-post long-form** | Ảnh người + story ngôi 1 dài hàng nghìn từ | Nặng — body CHÍNH LÀ funnel | Format cao cấp = [[ugly-ads-method]] |

**Phân vai:** format 1-7 chở volume. Format 8 chở whale. Máy chạy hằng ngày sống ở **1-5**.

## Grid 8×8 — 8 ý tưởng thành 192 brief ⭐
Cách để không bao giờ hết ad.

- **Trục dọc = 8 angle:** hidden cause · threat-avoid (cái gì trong thứ họ đang dùng) · us-vs-them · identity mirror ("đây là bạn") · becoming (future self) · curiosity gap · proof number (1 con số đổi cả câu chuyện) · objection flip.
- **Trục ngang = 8 format** ở trên.
- 8 × 8 = **64 cell**. Viết 3 biến thể copy/cell = **192 brief đầy đủ spec** — hơn 1 tháng test ở nhịp 30-50/ngày, sinh ra trong 1 buổi planning.

Ví dụ cell:
- *hidden cause × screenshot* = thread iMessage 1 người bạn giải thích vì sao đầu gối bạn thật ra đau.
- *proof number × big-type* = "6,000x mạnh hơn Vitamin C" trên nền phẳng.
- *objection flip × review card* = review 1-sao-chuyển-5-sao trả lời đúng chỗ do dự.

**2 luật bắt buộc để grid hoạt động:**
1. **1 cell / 1 static.** Static test 2 angle cùng lúc dạy bạn con số 0 (one-variable law → [[creative-testing]]).
2. **Đặt tên bằng cell:** `0731-hiddencause-screenshot-v2` — 3 tuần sau nhìn dashboard là tự đọc được.

→ Grid này ăn khớp với matrix angle × avatar × persona ở [[angles]]; đây là trục thứ 3 (FORMAT) mà matrix cũ đang thiếu.

## Nhịp chạy hằng ngày — ~3 giờ, 50 static
| Block | Thời gian | Việc |
|---|---|---|
| **Research** | 30' | Lọc library: **images only + 30+ ngày active + keyword niche + sort theo run time**. Lưu 10 cái tốt nhất vào swipe board. Đang thu **angle + format**, không phải ảnh đẹp |
| **One prompt** | 20' | Chạy prompt 50-brief → toàn bộ copy hôm nay (mọi avatar, mọi angle) ra dạng bảng → [[native-copy-prompt-chain]] |
| **Copy** | 60' | Feed Claude đúng cách: 3 native đang thắng (full copy) + product facts + banned-word list → 10 cặp headline-body / angle |
| **Check + launch** | 40' | Quét banned-word, check tên file, upload 25/ad set nhóm theo angle, bật cost cap |
| **Đọc hôm qua** | 20' | Kill loser ở gate $5-8, đẻ con từ winner, đưa kết quả vào prompt ngày mai |

**Math nhân sự:** một mình = 50/ngày (~3h). +1 VA chạy batch 2 = 100/ngày, $0.50-2/static. Ở $2-4/static, một ngày 50 static **rẻ hơn 1 video UGC**.

## Launch structure + 2 gate kill
**Setup:** 1 campaign testing, **ABO**, cost cap ở target CPA. Static lên theo batch 25-50/ad set, **nhóm theo angle** — nhìn 1 ad set là biết cả angle đó đang ra sao. Winner chuyển sang campaign scaling. **Campaign testing không bao giờ scale.**

| Gate | Spend | Luật |
|---|---|---|
| **Gate 1 — scroll test** | $5-8 / static | CTR < ~1%: **chết ngay hôm nay**. CTR > ~2%: qua Gate 2. Ở giữa: thêm 1 ngày rồi quyết |
| **Gate 2 — money test** | 1-2× target CPA | Bằng/dưới target = winner, tốt nghiệp + nhân giống. **Trên 2× CPA nhưng CTR tốt = ad viết cái séc mà lander không trả nổi → sửa PAGE, đừng kill static** |

**Winner thì nhân giống 2 chiều:** 5 copy variant trên visual thắng + 5 visual variant trên copy thắng. Batch ngày mai = **nửa cell grid mới, nửa con của winner hôm qua**.
→ Ăn khớp với "iterate the shit out of it" + never-kill rule ở [[creative-testing]].

## Vòng lặp tuần
- **T2-T6:** ship batch, đọc số hôm qua, kill loser, đẻ con từ winner.
- **T6:** nhìn cả tuần — angle nào thắng, angle nào chết. **Angle chết ngồi ngoài 30 ngày.**
- **T7:** batch tuần sau nghiêng về cái thắng; **angle mạnh nhất tuần đưa cho Claude thành long story / advertorial / VSL script**.
- **Mỗi tháng:** swipe board đầy vài trăm test mà **chỉ mình bạn có kết quả**. Board đó giá trị hơn mọi khoá học.

## 10 winner được mổ — cái gì steal được
Tất cả đều là format 8 (story-post), score 98-100, đây là nơi có nhiều cấu trúc steal được nhất.

### 1. Story native — The Blood Pressure Journal (496 ad live)
Skeleton beat-by-beat (đây là bản chuẩn để clone):

| Beat | Dòng thật | Việc nó làm |
|---|---|---|
| **Camera-truth hook** | "Mặt chồng tôi xám ngoét trong tấm thiệp Giáng sinh." | Cụ thể, thị giác, SAI. Phải biết vì sao |
| **Narrator siêu cụ thể** | Susan, 61, Saginaw, 33 năm cùng 1 tuyến thư | Specificity = động cơ tin |
| **The stake** | Chồng của thợ ảnh "cũng đúng màu đó 4 năm trước khi nhồi máu" | **Bi kịch đi mượn** — nỗi sợ đến mà không claim gì về reader |
| **Mechanism** | Thành mạch, nitric oxide, vòng lặp tự nuôi | Nguyên nhân ẩn. Reader HỌC được gì đó → đó là thứ mua được 2,000 từ tiếp |
| **Đốt giải pháp cũ** | "Beetroot chỉ thêm từ bên ngoài. Nó không làm gì cho thành mạch." | Giết thứ họ đã thử → **mua không đồng nghĩa thừa nhận mình thất bại** |
| **Nhật ký tuần-qua-tuần** | Tuần 2 bàn tay trên quầy, tuần 4 chị gái, tuần 6 bác sĩ nhìn 2 lần | Proof = **khoảnh khắc quan sát được**, gần như không có claim nào review được |
| **Triple P.S.** | Tấm thiệp mới · thợ ảnh cũng mua · logic bảo hành | **3 close cho 3 kiểu reader**: đa cảm, social-proof, hoài nghi |

Chi tiết "máy" quan trọng nhất: **cùng 1 story chạy đồng thời dưới 3 ad ID riêng**, mỗi ID mang 4 media variant. Cùng copy, khác campaign structure = duplicate test ở quy mô công nghiệp.

### 2. Dialogue native — Cattasaurus (961 ad live)
"Sáu tháng trước chồng tôi muốn tống con mèo đi." Sản phẩm là cat cave; **story là một cuộc hôn nhân đang căng** — kể bằng đối thoại từng dòng như đọc trộm tin nhắn. Beat mechanism = bác sĩ thú y reframe vấn đề ("Nó không cào để mài móng. Nó cào vì đó là chỗ của nó") — authority + hidden cause giao bằng CẢNH, không phải bài giảng. Close cảm xúc: chồng nhắn "Em cho *nó* ăn chưa?" — *nó*.

> [!important] Steal: bán MỐI QUAN HỆ, không bán sản phẩm
> Ở niche pet, vấn đề thật của người mua gần như không bao giờ là con vật — mà là **ma sát giữa người với người quanh con vật**. 961 ad live nói brand này biết điều đó.
> **→ MaxPro:** villain hiện tại vẫn đang là móng chó ([[villains]]). Góc chưa test: cắt móng là chỗ vợ/chồng đổ lỗi cho nhau, là lý do con chó ghét chủ. Xem [[maxpro-avatars]].

### 3. Persona-page native — Eden Labs (140 ad, score 98)
Ad **không chạy từ brand page mà từ page đặt tên như một con người**. Story (bà goá bị con dâu gạt ra rìa, được minh oan bởi nghi thức đêm của một bà cụ Hàn Quốc 80 tuổi) đọc như personal essay; tên page hoàn tất ảo giác. Cả CTA cũng diễn: **"EDIT: Suýt quên cái link."**
⚠️ Steal có chọn lọc: play này ở sát tripwire nhất, và ad này còn mang claim language sống được chỉ vì được mặc áo hồi ký. **Học cấu trúc, đừng bê claim** → [[compliance]].

### 4. Obedience-failed native — Kendra Williams (188 ad, persona page)
"Ông ấy làm đúng mọi thứ bác sĩ dặn. Bỏ muối. Đi bộ 3 dặm mỗi ngày. Uống đủ từng viên thuốc. Ông ấy chết vì suy thận."
Angle = **tuân thủ chính là cái bẫy**. Reader đã ngoan mà vẫn đang thua → lần đầu thấy mình được nhìn thấy, mặc cảm tội lỗi biến thành sự chú ý ngay lập tức. Cell: *hidden cause × story-post*.
> **Steal ⭐:** mở màn bằng nhân vật làm ĐÚNG mọi thứ. **Thất-bại-dù-tuân-thủ hook mạnh hơn thất-bại-do-lơ-là ở mọi niche health** — vì đó mới là cơn ác mộng thật của reader.

### 5. Micro-niche native — Sandra Reynolds (46 ad)
"Đêm nào cũng khóc trong cái faja. Cho tới khi biết chai Arnica $40 + MLD của tôi đang xử lý **sai loại sưng**."
Hai bài học: (a) **từ vựng người trong ngành** (faja, MLD, Arnica) lọc audience mạnh hơn mọi menu targeting — người ngoài lướt qua, người trong đứng hình; (b) **wrong-solution mechanic** — thứ họ đã mua nhắm sai LOẠI vấn đề → mua mới mà không phải thừa nhận thất bại. Cell: *objection flip × story-post*.

### 6. Fiction serial (38 ad)
Khác vertical (story app) nhưng vật lý chuyển được: body **chính là chương 1**, cắt giữa khúc ngoặt. Toàn bộ ad là cell *curiosity gap × story-post*, không có gì khác.
> **Steal:** **kết body ở giữa khúc ngoặt.** Bản ecom: cắt story ngay TRƯỚC lúc reveal mechanism, để lander viết nốt câu — click biến thành lật trang.

### 7-10. Avatar rotation — Ledisa (99 + 207 ad live) ⭐ phát hiện lớn nhất
1 miếng dán GLP-1. **2 page đặt tên kiểu cộng đồng** ("Women's Wellness Circle", "Healthy Habits Circle"). Ít nhất **3 cuộc đời ngôi-thứ-nhất hoàn toàn khác nhau** cùng bán nó, mọi bản đều score 100:
- Avatar 1: Beth, 44 — chạy half-marathon, sinh con năm 40, "con trai tôi không nhận ra tôi trong ảnh".
- Avatar 2: cưới 19 năm — "chồng tôi thôi không nhìn tôi nữa".
- Avatar 3: Teresa, 46 — giáo viên lớp 4, "food noise", cái máy bán hàng tự động.

Đọc 3 body liên tiếp là thấy máy trần trụi: **60% đầu mỗi story là custom hoàn toàn** (tên, thành phố, nghề, vết thương khác nhau) — rồi **khối mechanism gần như y nguyên từng chữ ở cả 3 bản**.

> [!important] **MECHANISM LÀ TEMPLATE. AVATAR LÀ BIẾN.** ⭐
> Viết mechanism 1 lần, sản xuất phần đầu-theo-avatar ở volume. 5 avatar × 2 page = **10 ad "khác nhau" từ 1 asset lõi**. Và họ còn xoay VISUAL dưới mỗi avatar nữa.
> → Đây là phiên bản story-level của hệ sản xuất trong cả guide này. Nối với [[personas]] §voice signature per page + [[hook-swap-method]] (engine giữ / skin thay — cùng nguyên lý, khác tầng: hook-swap ở tầng dòng, avatar-rotation ở tầng 60% đầu bài).

**Ghi chú compliance đáng steal:** mọi ad Ledisa đều mang **full FDA disclaimer block** cuối story. Operator chạy avatar system hung hãn nhất cũng là người kỷ luật nhất ở sàn pháp lý — không phải trùng hợp, đó là cách cái máy sống sót.

## Visual — đọc từ 10 static thật (vision-read, không phải từ text guide) ⭐
Guide chỉ viết 1 dòng "trông như chụp bằng điện thoại". Nhìn 10 ảnh thật thì kỷ luật thực tế khác và giàu hơn:

**Tuyệt đối, 10/10:** **KHÔNG có chữ nào overlay lên ảnh.** Không badge, không giá, không logo, không caption bar. Copy nằm 100% ở primary text.

**3 archetype visual thắng (thay vì 1):**
1. **Artifact-of-memory (3/10)** — hiện vật vật lý của ký ức, KHÔNG phải mặt người: cái ghế bành da xám trống với miếng vá Star Trek trong phòng làm việc bừa bộn (Blood Pressure); một bàn tay cầm tấm ảnh in thập niên 70 của đôi vợ chồng trẻ (Kendra); chồng ảnh in cũ trên mặt bàn gỗ xước (Ledisa avatar 2). Đồ vật, không phải người → sự vắng mặt/mất mát tự kể chuyện.
2. **Ugly phone-real (2/10)** — ghế sofa hoa bị cào nát bung cả foam với con mèo vàng nằm trong đó (Cattasaurus); mirror selfie split before/after trong nhà tắm, đèn gắt, máy sấy tóc trên quầy (Sandra). Đây mới đúng nghĩa "ugly" ở [[ugly-ads-method]].
3. **AI portrait của chính avatar (3/10)** — chân dung 1:1 do AI sinh, **thân hình thật, không glamour, đặt trong môi trường của avatar**: phụ nữ plus-size khoanh tay nhìn ra biển lúc hoàng hôn / cô giáo đứng trước lớp học mờ phía sau. Không có sản phẩm trong ảnh.

> [!important] Visual rotation rẻ nhất = cùng avatar, đổi TRẠNG THÁI CẢM XÚC
> Ledisa Beth chạy 2 static: (1) buồn — khoanh tay, nhìn đi chỗ khác, trời âm u; (2) vui — váy hoa, cười, biển nắng. **Cùng copy, cùng nhân vật, before-emotion vs after-emotion.** Đó là test visual rẻ nhất tồn tại.

> [!warning] Mâu thuẫn với niềm tin đang có trong vault
> [[ugly-ads-method]] + memory "ugly-ad image candid style" đang chốt: pretty-studio-cozy = scroll-stop FAIL, phải raw/grainy/harsh-flash. Nhưng **chỉ 2/10 winner ở board này là ugly-phone thật**; 5/10 là editorial sạch hoặc AI portrait dựng đẹp (bà cụ trên hiên nhà bên hồ nắng vàng = ảnh editorial hoàn toàn, score 98). Điều 10/10 CÙNG tuân thủ không phải "xấu" mà là: **không chữ trên ảnh + không sản phẩm-trên-nền-trắng + ảnh mang một câu chuyện chưa được giải thích**. "Ugly" là 1 con đường tới đó, không phải điều kiện.
> → Cần test riêng ở MaxPro trước khi sửa luật cũ. Xem [[maxpro-image-prompt-system]].

**Luật khớp copy-ảnh:** copy native dưới ảnh studio bóng bẩy = lệch trang phục — chữ nói "người", pixel nói "brand". Batch ~20 image variant / 1 copy thắng, để gate $5 phân loại.

## Liên kết
- Tầng copy long-form: [[ugly-ads-method]] · [[hooks]] · [[copywriting]]
- Prompt chain sản xuất: [[native-copy-prompt-chain]]
- Đọc số + kill: [[creative-testing]] · [[media-buying]]
- Page/persona: [[personas]] · Rào pháp lý: [[compliance]]
- Kênh khác (open web): [[native-ads]]
