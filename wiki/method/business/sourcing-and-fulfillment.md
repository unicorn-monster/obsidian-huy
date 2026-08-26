---
sources: [jforjacob-product-validation-pipeline-before-stock, jforjacob-alibaba-manufacturer-product-research, jforjacob-what-shipping-from-china-can-look-like, jforjacob-chinese-3pl-storage-pick-pack-fees, jforjacob-us-only-pricing-shopify-csv]
updated: 2026-08-26
---

# Sourcing & fulfillment — validate trước khi stock, chạy 3PL Trung Quốc đúng cách

Trang mới (domain fulfillment/sourcing, mở theo CLAUDE.md routing khi đủ nội dung). Gom quy trình research/validate sản phẩm TRƯỚC khi nhập hàng + vận hành 3PL Trung Quốc + pricing US-market. Nguồn: jforjacob.

## Validate demand, competition, product flaws — trước khi chạm vào inventory ([[jforjacob-product-validation-pipeline-before-stock]], [[jforjacob-alibaba-manufacturer-product-research]])

Pipeline đầy đủ từ jforjacob, theo đúng thứ tự:

1. Tìm search volume cao qua Exploding Topics hoặc Keyword Planner
2. Cross-reference doanh số hàng tháng trên Amazon US & UK & TikTok Shop
3. Search Meta Ad Library xem brand nào đang bán (chạy bao lâu, số ads active, ở nước nào)
4. Cross-reference Similarweb/Semrush cho traffic volume + nguồn traffic
5. Đọc review trên Amazon, Trustpilot, Reddit → tìm dislike/issue lặp lại
6. Xác định gap để khai thác (thị trường còn trống, pricing/offer, sửa flaw đối thủ)
7. Tạo website + ads dựa trên research trên
8. Chạy campaign **KHÔNG cần stock** hoặc dropship để lấy proof-of-concept — refund lại nếu có đơn mà chưa có hàng
9. Nếu profitable → order MOQ, customise/modify theo đúng insight đã research
10. Fulfill từ 3PL Trung Quốc để có lợi thế operating/margin so với đối thủ

**Nguồn intel miễn phí hay bị bỏ qua** ([[jforjacob-alibaba-manufacturer-product-research]]): đi Trung Quốc trực tiếp là vô đối cho product research, nhưng chỉ cần CHAT với manufacturer trên Alibaba cũng lấy được lượng thông tin đáng kinh ngạc — best seller là gì, variant phổ biến nhất, top country nào đang mua — mà gần như không ai chịu hỏi.

→ Bước 8 (proof-of-concept không cần stock) chính là cơ chế thực thi cho [[product-selection]] §3 tiêu chí — kiểm own-edge + margin + price-point BẰNG DỮ LIỆU THẬT trước khi cam kết vốn vào MOQ, thay vì đoán.

## Vận hành 3PL Trung Quốc — tốc độ thật + bẫy phí cần tránh ([[jforjacob-what-shipping-from-china-can-look-like]], [[jforjacob-chinese-3pl-storage-pick-pack-fees]], [[jforjacob-us-only-pricing-shopify-csv]])

**Fulfillment từ Trung Quốc làm đúng trông như thế nào** ([[jforjacob-what-shipping-from-china-can-look-like]]): order ngày 14/12, giao ngày 18/12 = 4 ngày tới UK. Chi phí ship $3.05. Không phí lưu kho, không phí pick & pack. Lead-time 10 ngày từ lúc order inventory tới lúc hàng sẵn sàng ship tại 3PL. jforjacob nhấn mạnh: đa số người không biết fulfillment TQ có thể tốt tới mức này — quá nhiều "horror story" định hình sai kỳ vọng.

**Cờ đỏ chọn 3PL** ([[jforjacob-chinese-3pl-storage-pick-pack-fees]]): nếu 3PL Trung Quốc tính CẢ storage fee LẪN pick & pack fee cùng lúc → đang bị chặt chém. 1 trong 2 là bình thường, cả 2 cùng lúc là dấu hiệu đổi 3PL.

→ Đọc chung: benchmark tốt để đánh giá 1 3PL TQ là tốc độ ~4 ngày + chi phí ship rẻ + KHÔNG dính cả 2 loại phí lưu kho/pick-pack. Dùng làm checklist khi shortlist 3PL cho MaxPro.

**Set giá riêng cho thị trường US qua Shopify CSV** ([[jforjacob-us-only-pricing-shopify-csv]]): Shopify nói không set được exact pricing theo từng market, nhưng thực ra làm được — qua product CSV. Cách làm: tạo US thành 1 market riêng trong Shopify → Products → Export lấy CSV (có sẵn giá + compare-at-price theo từng market) → sửa giá + compare-at-price cho dòng US (để cover chi phí ship-to-US mới tăng) → Products → Import lại CSV đã sửa → giá US giờ tách biệt hoàn toàn khỏi market khác. Nhắc kèm: **luôn charge shipping cho US** — jforjacob chưa từng thấy drop-off ở checkout nếu mức phí hợp lý.

> [!note] Áp cho MaxPro
> Trước khi commit MOQ cho SKU mới: chạy đủ 10 bước validation ở trên, đặc biệt bước 8 (ads + proof-of-concept không cần stock) — đỡ vốn chết nếu sai. Khi shortlist 3PL TQ cho MaxPro: hỏi thẳng có tính storage HAY pick&pack (không phải cả 2), và benchmark lead-time ~10 ngày restock / ~4 ngày ship quốc tế. Nếu MaxPro có tier giá riêng US do thay đổi thuế/ship gần đây — dùng route CSV export/import thay vì tưởng Shopify không hỗ trợ.

## Liên kết
- Kết quả validation → chọn product theo tiêu chí: [[product-selection]]
- Margin đủ để absorb rủi ro vận hành 3PL: [[growth-ops]] §Margin cao hấp thụ ngày xấu
- Geo mix khi fulfill từ TQ (US <50% revenue): [[growth-ops]] §Checklist bài học ngược trực giác
