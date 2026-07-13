---
type: idea
date: 2026-07-13
source: "session Max Hub — debate demand gen Discover creative test"
title: "MaxPro — Google Demand Gen Discover creative test (structure + grid prompts)"
product: maxpro
tags: [demand-gen, discover, google-ads, creative-testing, maxpro, grid-ads]
---

# MaxPro — Google Demand Gen Discover creative test

Kênh: **Google Demand Gen, Discover placement**. Đích click = funnel top-5 review `4pawsreview.com/nailgrinderreview/` (đã live) → recommend MaxPro #1 → PDP. Campaign đã có sẵn `23867277482` (Demand Gen - Short - No Feed, PAUSED, customer 9039526050). Prerequisite gần đủ: advertorial built, tracking verified, foundation profit. Thiếu duy nhất = **creative supply** (chính là việc này).

Method gốc: [[vysta-native-image-ads-demand-gen-scale]] (4-step: batch → read CTR → isolate → scale). Bổ trợ: [[echelonn-native-style-demand-gen-image-ads]], [[creative-testing]], [[native-ads]], [[maxpro-image-prompt-system]], [[maxpro-ugly-ads-plan]].

## Campaign structure (đã debate + sửa)

```
Camp: Maxpro | DG | Discover | Test
 ├─ Bidding: Maximize Conversions — NO target (không tCPA/tROAS)
 ├─ Placement: Discover ONLY (tắt YouTube In-Feed + Gmail)
 ├─ Budget: ~$100-150/ngày
 └─ Ad group: broad-informational (1)
     ├─ Ad = 1 concept, mỗi ad chứa 1:1 + 1.91:1 CỦA CÙNG concept đó
     ├─ 8-12 ad/batch (KHÔNG 20 — xem lý do dưới)
     └─ tất cả → 4pawsreview.com/nailgrinderreview
```

## Bài học / nguyên lý (điểm chốt sau debate)

1. **1 concept = 1 ad.** 1:1 và 1.91:1 là cùng 1 ảnh/concept đổi khung, KHÔNG phải 2 concept khác nhau nhét chung 1 ad. Trộn 2 concept khác nhau vào 1 ad → CTR bị blend trung bình theo impression → ảnh yếu kéo tụt, giết nhầm concept mạnh. Headline trong 1 ad cũng phải cùng 1 hook.

2. **Demand Gen KHÔNG có "rotate evenly"** như Search — luôn auto-optimize, không tắt được. Nhồi 20 ad/1 ad group → Google dồn impression vào 3-4 ad dẫn đầu sớm (data mỏng ngày đầu) + bỏ đói phần còn lại. → **batch 8-12 ad** để mỗi ad đủ impression đọc CTR công bằng, test thành nhiều sóng.

3. **Ngưỡng impression để phán CTR** (ở mức ~5%):
   - Sàn 1,000 impression/ad mới được nhìn.
   - Đọc tin cậy: 2,000-3,000 impression/ad (~30-50 click).
   - Luôn tôn trọng cửa sổ 48-72h.
   - Ad bị Google bỏ đói <~800 impression sau 72h = **"inconclusive" chứ không "killed"**, test lại batch sau. Chỉ kill dứt ad đã ăn ≥1,500 impression mà vẫn <5%.

4. **Bảng verdict CTR:** 7%+ = winner mạnh, isolate + scale ngay · 5-7% = winner, isolate + iterate · 3-5% = góc có thể đúng, execution dở, làm lại ảnh · <3% = kill. Isolate = tách winner ra (pause ad yếu tại chỗ, hoặc nhấc winner sang campaign sạch) để budget + học dồn vào 1-3 ad proven.

5. **Congruency phải bám ĐÚNG loại funnel.** 4pawsreview là **top-5 buyer's guide** (không phải advertorial 1-sản-phẩm). → ad congruent nhất = ad hứa **so sánh/xếp hạng** ("we compared 5", "top 5", "only one passed"), KHÔNG phải pain-point cartoon. Áp nhầm hệ Meta persona (raw problem photo) vào funnel comparison = giảm congruency.

6. **Có 2 hệ creative, đừng lẫn:**
   - **Meta FB ugly-ads** ([[maxpro-image-prompt-system]]) = 1 ảnh raw problem 1:1, 0 chữ, congruent với dòng persona advertorial.
   - **Top-5 review funnel** (agency 3-format) = **grid / lifestyle / side-by-side comparison**, đóng khung editorial. → Đây là hệ dùng cho Discover/4pawsreview.

7. **Grid KHÔNG chết CTR** (tao từng phán sai). Cái chết = catalog vô hồn trên nền trắng. Cái sống = **grid raw iPhone**, 5 sản phẩm thật đứng trên bàn bếp + nguyên liệu thô rải trước (kiểu ref sea moss / magnesium supplement). Huy đã test dạng này ăn ngon.

8. **Before/after lách policy = 2 ảnh candid chụp khác góc/khác setup**, KHÔNG phải split-graphic 2-panel có label BEFORE/AFTER. Cái bị Google/vault loại là graphic dàn dựng có typography; 2 tấm ảnh thật riêng biệt thì không bị flag transformation. Đây là cách lách chính thống.

9. **Google Demand Gen FLAG ảnh AI** → dùng **ảnh thật** (hoặc AI đủ real để không bị soi). Khác Meta (flood AI static OK).

10. **Style creative thắng = raw amateur iPhone snapshot**, KHÔNG editorial/magazine/flatlay top-down, KHÔNG photorealistic CGI. Anchor phrase: *"A casual amateur photo taken on an iPhone 12/13, NOT professional, NOT photorealistic CGI, looks like a real snapshot."* Ép tool dùng đúng 5 ảnh sản phẩm thật bỏ vào Image Input.

## Prompt example — style GRID (đã ưng, dùng được)

3 biến thể grid, cùng tông raw iPhone, dùng 5 ảnh sản phẩm thật ở Image Input. (Lifestyle + Side-by-side CHƯA chốt, không lưu.)

**Grid v1 — đứng trên bàn bếp + nail clippings**
```
Use the 5 product images provided as the exact products in the scene. A casual amateur photo taken on an iPhone 12/13, NOT professional, NOT photorealistic CGI, looks like a real snapshot someone took on their kitchen counter. Arrange the 5 dog nail grinders/clippers from the provided images standing upright in a loose row on a speckled brown granite kitchen counter, slightly different sizes, some slightly overlapping, casually placed (not perfectly aligned). In the foreground scattered on the counter: a small pile of trimmed dog nail clippings and a few loose grinder sanding-head attachments. Background: real home kitchen softly out of focus, wooden cabinets and a stainless microwave, warm indoor lighting with a slight phone-flash glare. Natural imperfect framing, shallow phone depth of field, faint grain, real and a little messy. No text, no logos added, no studio look.
```

**Grid v2 — nằm ngang trên khăn + bàn chân chó (góc từ trên)**
```
Use the 5 product images provided as the exact products in the scene. A casual amateur photo taken on an iPhone 12/13, NOT professional, NOT photorealistic CGI, looks like a real snapshot taken at home. Lay the 5 dog nail grinders/clippers from the provided images flat on a slightly wrinkled cream towel on a wooden table, arranged in a rough loose row (not perfectly aligned). Next to them, a real dog's paw resting on the towel, and a small scatter of trimmed dog nail clippings. Slightly overhead casual angle looking down. Warm indoor light with a bit of phone-flash glare, natural imperfect framing, shallow phone depth of field, faint grain, real and a little messy. No text, no logos added, no studio look.
```

**Grid v3 — đứng trên bếp + chó mờ hậu cảnh + khoanh đỏ**
```
Use the 5 product images provided as the exact products in the scene. A casual amateur photo taken on an iPhone 12/13, NOT professional, NOT photorealistic CGI, looks like a real snapshot someone took on their kitchen counter. Arrange the 5 dog nail grinders/clippers from the provided images standing upright in a loose casual row on a speckled brown granite counter, different sizes, some slightly overlapping. In the blurred background, a real dog sits in the home kitchen watching, softly out of focus. Foreground counter has a few loose grinder sanding-head attachments scattered. Warm indoor lighting with slight phone-flash glare, imperfect framing, shallow phone depth of field, faint grain, real and a little messy. Add a rough hand-drawn red circle around the white 3-port grinder and a red arrow pointing to it, like a casual phone markup. No text, no logos added, no studio look.
```

Ref style (ugly grid supplement): 5 chai đứng trên bàn bếp granite, nguyên liệu thô (sea moss strands / capsules trong nắp) rải trước, 1 cái khoanh đỏ + mũi tên. Analog cho grinder = nail clippings + đầu mài rải trước, MaxPro trắng 3-port là hero.

## Todo còn mở
- [ ] Chốt style Lifestyle + Side-by-side comparison (chưa ưng).
- [ ] Gen batch grid v1-v3 (ảnh thật, dùng 5 product image input).
- [ ] Verify config campaign `23867277482`: Discover-only + Max Conv no-target + đích URL 4pawsreview.
- [ ] Launch batch 1 (8-12 concept), đọc CTR 48-72h theo ngưỡng trên.
