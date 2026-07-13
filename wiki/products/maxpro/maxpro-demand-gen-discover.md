---
sources: [maxpro-demand-gen-discover-test]
updated: 2026-07-13
---

# MaxPro — Google Demand Gen Discover creative test

Cách chạy **creative test** trên Google **Demand Gen, placement Discover** để bơm traffic vào funnel top-5 [[maxpro-top5-review-funnel]] (`4pawsreview.com/nailgrinderreview/`, đã live). Method gốc: [[vysta-native-image-ads-demand-gen-scale]] (batch → read CTR → isolate → scale). Bổ trợ [[echelonn-native-style-demand-gen-image-ads]], [[creative-testing]], [[google-ads]] §Demand-Gen, [[maxpro-image-prompt-system]]. Campaign sẵn: `23867277482` (Demand Gen - Short - No Feed, PAUSED, customer 9039526050). Thiếu duy nhất để launch = **creative supply**.

## Campaign structure (chốt sau debate)
```
Camp: Maxpro | DG | Discover | Test
 ├─ Bidding: Maximize Conversions — NO target (không tCPA/tROAS)
 ├─ Placement: Discover ONLY (tắt YouTube In-Feed + Gmail)
 ├─ Budget: ~$100-150/ngày
 └─ Ad group: broad-informational (1)
     ├─ Ad = 1 concept, mỗi ad chứa 1:1 + 1.91:1 CỦA CÙNG concept
     ├─ 8-12 ad/batch (KHÔNG 20)
     └─ tất cả → 4pawsreview.com/nailgrinderreview
```

## Nguyên lý (điểm chốt)
1. **1 concept = 1 ad.** 1:1 và 1.91:1 = cùng ảnh đổi khung, KHÔNG phải 2 concept nhét chung. Trộn 2 concept → CTR blend theo impression → ảnh yếu kéo tụt, giết nhầm concept mạnh. Headline trong 1 ad cũng cùng 1 hook.
2. **Demand Gen KHÔNG "rotate evenly"** như Search — luôn auto-optimize, không tắt được. Nhồi 20 ad/1 ad group → Google dồn impression vào 3-4 ad dẫn đầu sớm (data mỏng) + bỏ đói phần còn lại → **batch 8-12 ad** để mỗi ad đủ impression đọc CTR công bằng, test thành nhiều sóng.
3. **Ngưỡng impression để phán CTR:** sàn 1,000/ad mới nhìn · đọc tin cậy 2,000-3,000/ad (~30-50 click) · luôn tôn trọng cửa sổ 48-72h · ad bị bỏ đói <~800 impression sau 72h = **"inconclusive" không phải "killed"** (test lại batch sau); chỉ kill dứt ad đã ăn ≥1,500 impression mà vẫn <5%.
4. **Verdict CTR** (baseline ~5%): **7%+** winner mạnh → isolate + scale · **5-7%** winner → isolate + iterate · **3-5%** góc đúng nhưng execution dở → làm lại ảnh · **<3%** kill. *Isolate* = tách winner (pause ad yếu tại chỗ, hoặc nhấc winner sang campaign sạch) để budget + học dồn vào 1-3 ad proven.
5. **Congruency bám ĐÚNG loại funnel.** 4pawsreview = **top-5 buyer's guide** (không phải advertorial 1-sản-phẩm) → ad congruent nhất = ad hứa **so sánh/xếp hạng** ("we compared 5", "top 5", "only one passed"), KHÔNG pain-point cartoon. Áp nhầm hệ Meta persona (raw problem photo) vào funnel comparison = giảm congruency.

## 2 hệ creative — đừng lẫn
- **Meta FB ugly-ads** ([[maxpro-image-prompt-system]], [[ugly-ads-method]]) = 1 ảnh raw problem 1:1, 0 chữ, congruent dòng persona advertorial.
- **Top-5 review funnel** (agency 3-format) = **grid / lifestyle / side-by-side comparison**, đóng khung editorial → hệ dùng cho Discover/4pawsreview.

## Luật creative cho Discover
- **Grid KHÔNG chết CTR.** Cái chết = catalog vô hồn nền trắng. Cái sống = **grid raw iPhone** — 5 sản phẩm thật trên bàn bếp + nguyên liệu thô rải trước (kiểu sea moss / magnesium supplement). Huy đã test dạng này ăn.
- **Before/after lách policy = 2 ảnh candid khác góc/setup**, KHÔNG split-graphic 2-panel có label BEFORE/AFTER. Bị Google/vault loại = graphic dàn dựng có typography; 2 tấm thật riêng biệt thì không bị flag transformation.
- **Google Demand Gen FLAG ảnh AI** → dùng ảnh thật (hoặc AI đủ real để không bị soi). Khác Meta (flood AI static OK) → xem [[compliance]].
- **Style thắng = raw amateur iPhone snapshot**, KHÔNG editorial/magazine/flatlay top-down, KHÔNG photorealistic CGI. Anchor phrase: *"A casual amateur photo taken on an iPhone 12/13, NOT professional, NOT photorealistic CGI, looks like a real snapshot."* Ép tool dùng đúng 5 ảnh sản phẩm thật ở Image Input.

## Grid prompts (đã ưng, dùng được)
3 biến thể grid, cùng tông raw iPhone, dùng 5 ảnh sản phẩm thật ở Image Input. Hero = MaxPro trắng 3-port; analog cho "nguyên liệu thô rải trước" = nail clippings + đầu mài. (Lifestyle + Side-by-side CHƯA chốt.)

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

## Todo còn mở
- [ ] Chốt style Lifestyle + Side-by-side comparison (chưa ưng).
- [ ] Gen batch grid v1-v3 (ảnh thật, dùng 5 product image input).
- [ ] Verify config campaign `23867277482`: Discover-only + Max-Conv no-target + đích URL 4pawsreview.
- [ ] Launch batch 1 (8-12 concept), đọc CTR 48-72h theo ngưỡng trên.
