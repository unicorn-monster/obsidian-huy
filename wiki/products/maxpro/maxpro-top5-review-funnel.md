---
status: building
sources: [maxpro-tracking-url-param, maxpro-conquest-search-term-method]
updated: 2026-09-12
---
# MaxPro Top-5 Review Funnel (4pawsreview.com)

Project đang chạy (bắt đầu 2026-06-21): clone funnel **review-domain** kiểu top5-choices cho MaxPro nail grinder. Method gốc ở [[presell-pages]] (section "3rd-party review DOMAIN") + teardown [[top5choices-seamoss-review-funnel-teardown]].

## Trạng thái hiện tại
**ĐÃ LIVE** trên Cloudflare Pages (2026-06-22): https://4pawsreview.com/nailgrinderreview/ (SSL ok, apex + www proxied). Cấu trúc **path-based để reuse domain**: mỗi sản phẩm 1 subfolder (`/nailgrinderreview/` = MaxPro), root để dành trang hub sau. Source deploy: `~/Downloads/4pawsreview-site/nailgrinderreview/`. Lệnh: `npx wrangler pages deploy ~/Downloads/4pawsreview-site --project-name=4pawsreview --branch=main`. Ảnh thật đã cắm (5 đối thủ + MaxPro), CTA wired, advertising disclosure có.
**CHƯA ad-ready:** CONS đối thủ chưa có review thật (FTC) · chưa wire pixel (GA4/Google Ads/Meta) · Shopify maximutt chưa xác nhận pixel đếm Purchase.

## Nền móng đã chốt
- **Scope:** review-domain tái dùng (1 domain → nhiều sản phẩm pet sau).
- **Host:** static HTML → **Cloudflare Pages** (free, nhanh, clone-per-product).
- **Domain:** nhắm **4pawsreview.com** (chưa chốt mua chắc; backup còn trống: top5-pets.com, pets-review.com, pawreviewhq.com, petreviewscout.com). Đăng ký ở Cloudflare Registrar.
- **CTA target:** sale page MaxPro Shopify (đã có) + param `?refdomain=4pawsreview` để track.

## Design tokens THẬT (rút từ source, dùng build tiếp)
- Font: **Raleway** (headline) + **Roboto** (body)
- Nền trang `#F5F9FF` · hero nền tối, H1 trắng, **subhead vàng `#FFDA00`**
- Card #1 + pick cuối: **viền `#3486CA` dày 10px**
- Cột #1 bảng so sánh: nền mint `rgba(154,230,180,0.25)`
- Nút LEARN MORE cam `#FF9900` (pill, viền trắng) · tick teal `#1BC7B1` · X đỏ `#e93d3d` · IMPORTANT/villain `#FF4A4A` · cúp/seal vàng `#F8AE13` · section max-width 1170px

## Content đã chốt
- **Ranking:** #1 MaxPro (A+) · #2 FURminator (B) · #3 Wahl 5972 (B-) · #4 Hertzko (C) · #5 WOOFMEW (C-). Đối thủ Amazon thật, beatable. KHÔNG Casfuy/LuckyTail (xịn hơn MaxPro → lòi đuôi), KHÔNG Heusom (cùng OEM với MaxPro). Xem [[maxpro-competitors]]. ASIN: FURminator B0062Z0UVG · Wahl B016AJEI7K · Hertzko B01IPW47BW · WOOFMEW B07LFV4Q4K (backup PawPerfect B08HRFWLXW, Bousnic B097DBXKLY).
- **5 criteria** (mục "What you need" + hàng bảng so sánh): 1) Safe on the quick · 2) Quiet for anxious dogs · 3) No vibration · 4) Strong enough for thick nails · 5) Safe on black nails.
- **Hot tip** = desensitize (peanut butter lick mat + bật máy gần cho chó quen + treat). Design: heading 🔥 + box viền đứt nét nền mint.
- **Charity** (50% cho no-kill shelter) = nhắc thoáng qua, KHÔNG phải criterion.
- **Avatar:** dog-mom cảm xúc (avatar 1 guilt + 2 fear-free), power angle gài trong tiêu chí. Xem [[maxpro-avatars]], [[maxpro-product-truth]].
- **Voice:** DR, **zero em dash**, humanize có chọn lọc (giữ persuasion, bỏ vân tay AI). Dùng skill humanizer khi viết.

## Cấu trúc trang (theo top5-choices)
header → hero tối (H1 + subhead vàng + Advertising Disclosure + 3 nav button) → IMPORTANT box → ảnh ngang → education (why tool matters · what you need = 5 criteria · bad nail care can cause · why most tools fail · HOT TIP · 5 mistakes) → "Best Dog Nail Grinders of 2026" + bảng so sánh (5 ô ảnh + 5 criteria rows, cột MaxPro mint) → ranking #1-#5 (grade + seal/rank badge + PROS/CONS + The Bottom Line + CTA) → pick cuối + cúp. **Đã bỏ footer + sticky bar** theo yêu cầu.

## Việc tiếp theo (thứ tự)
~~Ảnh thật~~ ✅ · ~~Wire CTA~~ ✅ · ~~Mua domain + deploy CF Pages~~ ✅ · ~~Disclosure~~ ✅
Còn lại **trước khi đốt tiền ad**:
1. **Substantiate đối thủ** (ĐANG NỢ — bắt buộc FTC): số sao thật + 1-2 quote 1-2★/đối thủ vào CONS. ASIN: FURminator B0062Z0UVG · Wahl B016AJEI7K · Hertzko B01IPW47BW · WOOFMEW B07LFV4Q4K. (Apify `web_wanderer/amazon-reviews-extractor` trả 0 items 22/6 — thử actor khác hoặc lấy tay.)
2. **Wire 3 pixel** (GA4 + Google Ads + Meta) vào `<head>` + event click CTA.
3. **Tracking khép kín**: Meta Pixel + GA4 trên Shopify maximutt.com (Purchase đếm ở đó) + GA4 cross-domain `4pawsreview ↔ maximutt`.

**Gotcha deploy:** token OAuth wrangler KHÔNG có scope DNS → 2 CNAME (`@` + `www` → `4pawsreview.pages.dev`, Proxied) phải thêm tay ở dashboard. Redeploy = chạy lại lệnh deploy ở trên (ảnh cache theo hash, upload tức thì).

**Traffic vào funnel này:** creative test + campaign structure Google Demand Gen Discover đã chốt ở [[maxpro-demand-gen-discover]] (campaign `23867277482`, batch 8-12 grid-ad raw iPhone, ngưỡng CTR ~5%, đích = funnel này).

## Editorial ad angle (creative feed funnel này)
Nguồn: [[blvckledge-editorial-ad-comparison-funnel]] — chính bài này lấy **pet nail clipper** làm ví dụ mẫu cho funnel "editorial ad → comparison page". Method 5-beat ở [[presell-pages]] (§Editorial ad → comparison). Angle cụ thể cho grinder MaxPro (clipper = villain, grinder = giải):
- **Beat 1-2 (stakes):** nail-trim SAI gây **đau · chảy máu · joint issues dài hạn** — không phải chuyện nhỏ, chọn đúng dụng cụ mới quan trọng.
- **Beat 3 (dạy tiêu chí = villain clipper):** clipper guillotine rẻ **crush móng TRƯỚC khi cắt** → **splits & damages the quick** theo thời gian (kể cả trim đúng cách). Dụng cụ thiết kế tệ → chó phát triển **fear response** → mỗi lần trim = **màn vật lộn 2 người**. → dạy reader: thứ tách "tốt" khỏi "tệ" = grind-and-release nhẹ, quiet, không crush.
- **Beat 4 (what to look for):** = 5 criteria funnel (safe-on-quick · quiet · no-vibration · thick-nail · black-nail).
- **Beat 5 (product checks boxes):** MaxPro grind-and-release → không crush quick → không tạo fear-loop.
- **Cost frame ([[offer-and-cta]]):** dụng cụ đúng rẻ hơn về lâu vs **vet bill** fix cut-quick + chi phí sửa behavioural (chó ghét đụng chân). Dồn năm > groomer $45/lần.
- **Format:** UGC / podcast-style / AI animation / VSL — chọn cái hợp, chạy Demand Gen (khớp [[maxpro-demand-gen-discover]]). ⚠️ chỉ claim quan-sát-được, không bịa bệnh ẩn ([[compliance]]).

## Guardrails
- **IP:** badge/seal tái dựng (brand 4Paws, "4PAWS #1 PICK"), KHÔNG bê file seal "Top5 Choices" của họ. Ảnh sản phẩm = ảnh MaxPro/đối thủ tự chụp-tải, không hotlink file của họ.
- **Compliance:** disclosure rõ + mọi claim chê đối thủ phải có bằng chứng review thật, không bịa study. Claim "large-breed ~150lb" để modest. Xem [[compliance]].

## Tracking — sự thật của store (đã verify 2026-08-31) ([[maxpro-tracking-url-param]])
Store **KHÔNG dùng wetracked** (ghi chú cũ trong tags.js sai). Store thật sự chạy:
- Google Ads gtag: `AW-18178279287`
- GA4: `G-N4N79ME432`
- Nạp qua Google Tag Manager (app Google & YouTube của Shopify)

**Không có server-side Conversion API** → gtag phải nhìn thấy `gclid` trong URL ngay lúc landing để quy attribution. Không pass click-id qua domain jump → attribution chết.

### URL param convention (đã chốt)
- Auto-tagging: **BẬT** → gclid tự gắn
- Tracking template: **để trống**
- Final URL suffix ở cấp **CAMPAIGN**:
  ```
  utm_source=google&utm_medium=cpc&utm_campaign=<slug>&utm_id={campaignid}&utm_term={keyword}&utm_content={creative}
  ```

### Bug: `utm_id` không tới GA4 ⚠️
`tags.js` chỉ pass 9 param (fbclid/gclid/gbraid/wbraid/utm_source/medium/campaign/content/term) — **`utm_id` bị thiếu**. Mọi camp đang đặt `utm_id={campaignid}` trong suffix nhưng param này chết ở domain jump, không tới GA4. Camp Heusom dính đúng lỗi này.

Fix: thêm `utm_id` vào mảng `KEYS` trong tags.js, hoặc bỏ `utm_id` khỏi suffix. Không để lệch.

**Bài học chung:** khi funnel đi qua 2 domain → đối chiếu param trong Final URL suffix vs param script passthrough thật sự chuyền. Lệch 1 cái = mất 1 chiều báo cáo không ai biết (không có lỗi nào nổ ra).

### Sitelink deep-link `?sl=<key>`
React render timing → `?sl=<key>` flaky lúc cold load (loop nhắm trước khi React mount xong → trượt về scrollY 0). Chấp nhận được (trang không vỡ, người dùng ở đầu trang). Neo bằng `id=` trong HTML ổn định hơn `[data-sl=]` gắn bằng JS sau render.

## Conquest routing — page phải mention brand bị conquest ([[maxpro-conquest-search-term-method]])
Camp conquest LuckyTail KHÔNG trỏ `/nailgrinderreview/` (trang đó không có LuckyTail) — trỏ `/best-nail-grinder/` là trang rank LuckyTail.

Conquest priority theo search_term_view 30 ngày thật (Maximutt account), không theo editorial ranking trên review page. Dremel = 26.3 conv/tháng $26 CPA = cơ hội to nhất chưa có camp riêng. Xem [[google-ads]] §Conquest bằng search_term_view thật.

## Nguồn liên quan
[[presell-pages]] · [[top5choices-seamoss-review-funnel-teardown]] · [[reviewscout-3rd-party-review-domain-teardown]] · [[maxpro-product-truth]] · [[maxpro-competitors]] · [[maxpro-avatars]] · [[maxpro-ugly-ads-plan]] · [[funnel-and-landing]] · [[maxpro-tracking-url-param]] · [[maxpro-conquest-search-term-method]]
