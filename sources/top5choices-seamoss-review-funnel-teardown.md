---
type: clip
date: 2026-06-21
source: "https://top5-choices.com/seamossreview"
author: "live teardown + tech-stack verification (Huy + Claude session)"
title: "top5-choices.com sea moss funnel — verified tech stack + 8-tier persuasion skeleton"
---

## Why captured
Nối tiếp [[reviewscout-3rd-party-review-domain-teardown]] bằng 1 case **LIVE, full-capture + tech stack đã verify** (reviewscout chỉ có mechanics, không có stack). top5-choices.com là domain reviewscout từng liệt kê nhưng `/shilajitreview` đã 404; `/seamossreview` còn sống. Similarweb: **332.8K visit/tháng**, bounce 49%, 1.8 pages/visit, 1:02 duration → paid-traffic funnel ở scale. Target = #1 "Wild Sea Moss" by Organics Ocean.

## Verified tech stack (✅ từ header/HTML · ⚠️ suy luận)
| Lớp | Công cụ | Bằng chứng |
|---|---|---|
| Review/advertorial page | ✅ **GoHighLevel** | mọi ảnh trên `images.leadconnectorhq.com` + `assets.cdn.filesafe.space`, location id `lgyEItXJkearxHL93Sna` (chữ ký HighLevel) |
| Domain review | ✅ "review-authority" domain, 1 slug / 1 category | `top5-choices.com/seamossreview`, `/shilajitreview`… |
| Offer store | ✅ **Shopify** | header `powered-by: Shopify` (organicsocean.com) |
| Offer landing page | ✅ **GemPages** (+ chút Shogun) | 125 ref `gempages` trong HTML |
| Reviews widget | ✅ **Judge.me** | trong HTML |
| Analytics | ✅ Google tag (gtag) | trong HTML |
| CDN/WAF | ✅ Cloudflare (cả 2 site) | `server: cloudflare` |
| Media entity | ✅ **Rain Media** | dòng disclaimer |
| Attribution | ✅ params `refdomain` / `funnelid` / `cmc_vid` / `cmc_goal` / `cmc_ref` | trong link CTA; ⚠️ tracker (Hyros/Funnelish/custom) chưa rõ |
| Traffic source | ⚠️ native (Taboola/Outbrain) + FB | suy từ format + nhãn *Advertorial* + Similarweb; pixel inject bằng JS nên curl ko bắt được |

**Vì sao stack này khôn:**
- **Tách review (GoHighLevel) khỏi store (Shopify):** review rẻ / dựng nhanh / disposable + brand "không endorse" (disclaimer Rain Media) → giảm risk FTC/claim. Khác note cũ `reviews.brand.com` subdomain (vẫn lộ brand) — đây là domain **rời hẳn**.
- **1 domain authority, N slug:** `/seamossreview` hôm nay, mai `/collagenreview`… tái dùng halo.
- **`refdomain` attribution = mô hình media-buy:** nhiều review site cùng đẩy 1 offer, đo site nào đẻ đơn → scale cái thắng. Affiliate network, không phải 1 trang lẻ.
- **GemPages offer:** sau click #1, người mua rơi vào **long-form sale page** (không giới hạn theme Shopify), không phải PDP trơ → khớp [[funnel-and-landing]] (cold bỏ PDP).

## 8-tier persuasion skeleton (granular hơn 6-anchor TOC của reviewscout)
1. **Authority skin** — domain "Top5", tiêu đề "Buyers Guide", "4 min read", ngày update = hôm nay, nhãn *Advertorial* tí xíu góc phải.
2. **Lead box** (IMPORTANT, in nghiêng) — qualify avatar (joints/lungs/aging) + "We tested" + hứa "mistakes + brand thắng".
3. **Educate + agitate** — symptom-match ("sau tuổi 30 mất khả năng giữ khoáng" + list triệu chứng); số liệu "92/102 khoáng" = uy tín.
4. **Benefit stack** — "A Quality… can" (chữ *Quality* gieo mầm phân loại).
5. **Rigged criteria** ⭐ (= criteria-funnel reviewscout, bản chi tiết): tiêu chí "khách quan" mà chỉ #1 đạt. Cú chốt: *"to our surprise Organics Ocean was the ONLY brand to include chlorella"* + 800mg + USA-tested. "Top 5 mistakes" cài sẵn objection (fake/Chinese → trust USA; cheap → "you get what you pay for" chặn giá).
6. **Format-war strawman** (mechanic MỚI) — "Gel vs Capsules" + "Negatives of Gel" hạ **nguyên 1 category** đối thủ TRƯỚC ranking → ép về format của #1.
7. **Ranking = decoy effect** (mechanic MỚI) — letter grade **A+ → C-** (vách đá); #1 full pros + **fake-cons** ("sells out", "only on website" = scarcity trá hình); **nêu giá đối thủ** ($35–$50, anchor) nhưng **giấu giá #1** tới offer page; đối thủ **không nêu tên thật** (an toàn pháp lý + dồn spotlight).
8. **Close** — references PubMed/DOI (borrowed authority; nói về seaweed chung, KHÔNG về sản phẩm) + risk-reversal lặp (90-day) + urgency ("summer promo") + **coupon $29 "for readers of Top5"** (price anchor cuối, framing ưu đãi riêng).

## Tone
Song trùng **"I" (tôi test, dùng Blend-Tec) + "we" (we tested / our research)** = vừa cá nhân đáng tin vừa uy tín tổ chức. Hedge cho claim #1 ("may/potential") nhưng nói chắc nịch về nhược điểm đối thủ.

## Compliance
Cùng landmine cao nhất với [[reviewscout-3rd-party-review-domain-teardown]]: FTC fake-review + endorsement không disclose. Defensible = disclosure rõ + criteria/citation thật, không bịa study → [[compliance]], [[presell-pages]].
