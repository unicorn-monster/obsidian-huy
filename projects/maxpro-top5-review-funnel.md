---
status: building
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

## Guardrails
- **IP:** badge/seal tái dựng (brand 4Paws, "4PAWS #1 PICK"), KHÔNG bê file seal "Top5 Choices" của họ. Ảnh sản phẩm = ảnh MaxPro/đối thủ tự chụp-tải, không hotlink file của họ.
- **Compliance:** disclosure rõ + mọi claim chê đối thủ phải có bằng chứng review thật, không bịa study. Claim "large-breed ~150lb" để modest. Xem [[compliance]].

## Nguồn liên quan
[[presell-pages]] · [[top5choices-seamoss-review-funnel-teardown]] · [[reviewscout-3rd-party-review-domain-teardown]] · [[maxpro-product-truth]] · [[maxpro-competitors]] · [[maxpro-avatars]] · [[maxpro-ugly-ads-plan]] · [[funnel-and-landing]]
