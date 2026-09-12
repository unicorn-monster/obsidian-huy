---
type: learning
date: 2026-08-31
title: Chọn brand để conquest bằng search term THẬT, không bằng cảm giác
---

Hôm nay được yêu cầu dựng camp conquest LuckyTail giống camp Heusom đang chạy. Kéo số thật trong account Maximutt (`9039526050`) trước khi dựng, và số nói ngược.

## Cách làm: xếp hạng brand đối thủ bằng search_term_view 30 ngày

Query `search_term_view` toàn account, gom theo từ khoá brand, cộng impression/click/conv/spend. Đây là **nhu cầu thật đã chạm vào account mình**, không phải ước lượng của Keyword Planner.

Kết quả (Maximutt, 30 ngày, tới 31/08/2026):

| Brand | Impr | Click | Conv | CPA |
|---|---|---|---|---|
| Heusom / Silent Groom | 42.217 | 3.772 | 222,5 | $23,82 |
| **Dremel** | **6.798** | **423** | **26,3** | **$26,00** |
| Casfuy | 833 | 24 | 1,5 | $15,35 |
| Wahl | 273 | 17 | 1,0 | $6,92 |
| **LuckyTail** | **229** | **10** | **0,0** | không có |
| oneisall / Furminator / Hertzko / Bousnic | <100 mỗi cái | | 0,0 | |

## Ba kết luận rút ra được, dùng lại cho brand khác

**1. Brand nằm trên trang so sánh của mình KHÔNG có nghĩa là có người tìm nó.** LuckyTail là #2 trên trang top-5, nhưng cả tháng chỉ 229 impression và 0 conversion. Đưa ai lên trang là quyết định biên tập; conquest ai là quyết định theo nhu cầu. Hai thứ đó rời nhau.

**2. Dưới ~30 conv/tháng thì đừng dùng smart bidding.** tCPA/Maximize Conversions cần lượng conversion để thoát learning. Camp Heusom chạy tCPA $26,40 được vì có 222 conv/tháng. Brand 0 conv thì tCPA sẽ đứng im không đấu giá. Với brand nhỏ: **Maximize Clicks + trần CPC** để mua dữ liệu trước, đủ 15-30 conv rồi mới chuyển.

**3. Cơ hội to nhất thường là brand ĐANG convert sẵn trong camp generic mà chưa ai tách ra.** Dremel đẻ 26,3 conv ở CPA $26,00, gần bằng CPA của camp Heusom, và chưa có camp riêng. Phải kiểm tra độ liên quan trước khi mừng: lọc search term chứa brand, đếm bao nhiêu % có kèm từ ngành. Dremel: 6.712/6.802 impression dính "dog"/"nail" ("dog nail dremel", "best dremel for dog nails"), tức 98,7% là người tìm mài móng chó chứ không phải tìm máy khoan. Nếu tỉ lệ này thấp thì brand đó là bẫy.

## Brand coined-word vs brand từ thường: khác nhau ở negative list

Camp Heusom chạy **không một negative nào** ở cấp campaign và vẫn sạch, vì "heusom" là từ bịa, không đụng ai.

Brand tên bằng từ thường thì ngược lại. "lucky tail" trùng với tiệm grooming, tổ chức cứu hộ, shop pet. Conquest brand loại này bắt buộc có negative ngay từ ngày đầu:

```
-salon -groomer -"grooming salon" -rescue -adoption -shelter
-boarding -daycare -jobs -hiring -"near me"
-treats -shampoo -collar -harness -bed -toy
```

**Quy tắc 1 dòng:** trước khi dựng conquest, gõ tên brand vào Google. Ra toàn sản phẩm đó = không cần negative. Ra tiệm/dịch vụ/tổ chức = viết negative list trước khi bật.

## Landing page phải có tên brand bị conquest

Camp Heusom trỏ `/nailgrinderreview/`, trang đó có Heusom. Nhưng trang đó **không hề có LuckyTail** (hồi xây đã cố ý loại ra, xem [[maxpro-competitors]]). Đổ traffic tìm LuckyTail vào trang không nhắc LuckyTail là bounce chắc chắn. Conquest LuckyTail phải trỏ `/best-nail-grinder/` là trang có xếp hạng nó.

## Liên quan
[[maxpro-top5-review-funnel]] · [[maxpro-competitors]] · [[google-ads]]
