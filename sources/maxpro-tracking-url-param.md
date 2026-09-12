---
type: learning
date: 2026-08-31
title: Maxpro funnel — tracking thật của store và quy ước URL param trong account
---

Kiểm tra bằng curl và Google Ads API ngày 31/08/2026. Có hai chỗ ghi chú cũ trong repo ghi SAI, đã sửa.

## 1. Store KHÔNG dùng wetracked

Ghi chú cũ trong `~/Max Hub/campaigns/best-nail-grinder/site/tags.js` viết: "Đơn thật do wetracked bắt trên trang sale rồi gửi server-side qua Conversion API."

**Sai.** `curl` trang sản phẩm maximutt.com: 0 lần xuất hiện chữ wetracked. Thứ store thật sự chạy:

| | |
|---|---|
| Google Ads gtag | `AW-18178279287` |
| GA4 | `G-N4N79ME432` |
| Nạp qua | googletagmanager, tức app Google & YouTube của Shopify |

Khớp với [[maxpro-top5-review-funnel]]: mọi conversion action trong Ads đều tên `Google Shopping App ...`.

**Kết luận không đổi nhưng LÝ DO đổi hẳn, và theo hướng làm passthrough quan trọng hơn:** không có server-side Conversion API nào đỡ. gtag bên store phải **nhìn thấy `gclid` trong URL ngay lúc landing** mới quy được đơn về click. Không chuyền click-id qua domain thì attribution chết ngay chỗ nhảy domain.

Vẫn tuyệt đối không bắn label `AW-18178279287` ở trang review: conversion đếm ở store lúc đặt hàng thật, bắn lại ở trang review là biến người đọc thành conversion và làm hỏng smart bidding.

## 2. Quy ước URL param của account (đã thống nhất sẵn, cứ theo)

- **Auto-tagging: BẬT** → Google tự gắn `gclid`, không cần tự thêm.
- **Tracking template: để trống** ở mọi cấp. Account không dùng.
- **Final URL suffix đặt ở cấp CAMPAIGN**, mỗi camp một `utm_campaign` riêng:

```
utm_source=google&utm_medium=cpc&utm_campaign=<slug>&utm_id={campaignid}&utm_term={keyword}&utm_content={creative}
```

Đặt ở suffix chứ không nhét vào Final URL vì suffix áp cho **mọi** URL trong camp, gồm cả sitelink, khỏi dán tay từng cái. Sitelink đã có sẵn query (`?sl=test`) thì Google nối bằng `&`, trang đọc bằng `URLSearchParams` nên không vỡ.

## 3. Lỗ hổng: `utm_id` chết ở cú nhảy domain

`tags.js` chỉ chuyền 9 param sang maximutt.com:

```
fbclid, gclid, gbraid, wbraid, utm_source, utm_medium, utm_campaign, utm_content, utm_term
```

**`utm_id` KHÔNG có trong danh sách**, mà mọi camp trong account đều đang đặt `utm_id={campaignid}` trong suffix. Nghĩa là camp id không bao giờ tới GA4 của store. Camp Heusom dính đúng lỗi này.

Sửa: hoặc thêm `utm_id` vào mảng `KEYS`, hoặc bỏ nó khỏi suffix. Đừng để lệch như hiện tại.

**Bài học chung, dùng lại được:** bất cứ khi nào funnel đi qua 2 domain, **đối chiếu danh sách param trong Final URL suffix với danh sách param mà script passthrough thật sự chuyền**. Lệch một cái là mất một chiều báo cáo mà không ai biết, vì không có lỗi nào nổ ra.

## 4. Deep-link sitelink bằng `?sl=<key>` trên trang React

Trang top-5 render bằng React nên lúc parse HTML chưa có gì để neo. Giải pháp đang chạy: sitelink trỏ `?sl=<key>`, script map key sang selector rồi cuộn sau khi React vẽ xong.

Test thật trên bản live, 6 key đều cuộn đúng, dừng cách đỉnh 80px. Nhưng **flaky lúc load nguội**: lần đầu có key trượt (đứng ở scrollY 0), chạy lại thì trúng. Vòng lặp nhắm hết lượt thử trước khi React mount xong. Trượt thì người dùng đứng ở đầu trang, không phải trang vỡ, nên chấp nhận được.

Neo bằng `id=` trong HTML ổn định hơn neo bằng `[data-sl=]` gắn bằng JS sau render.

## Liên quan
[[maxpro-top5-review-funnel]] · [[google-ads]] · [[maximutt-gmc-feed]]
