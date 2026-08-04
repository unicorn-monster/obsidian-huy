---
type: brief
date: 2026-07-28
product: Rescue Paws Bracelet (Dinosaurized)
sources: [vysta-native-image-ads-demand-gen-scale, blvckledge-demand-gen-image-ads-playbook, advertising-jan-7-native-headline-structures, maxpro-demand-gen-discover-test]
---

# Rescue Paws Bracelet, Demand Gen Discover, plan A-Z

Flow: Discover ad → `/pages/5-reasons-this-isnt-just-a-bracelet` → `/products/rescue-paws-bracelet` → checkout.

Chốt: trang giữa là **advertorial editorial của chính brand**, không phải bài xếp hạng top-5 sản phẩm. Nên hệ creative = mission/editorial, KHÔNG dùng ảnh grid so sánh nhiều sản phẩm (blvckledge angle 3). Dùng angle 2 problem-aware/educational, biến thể mission.

KPI giai đoạn test = **CTR**. Đủ để phán creative. Khi qua bước scale thì phải mở NC-CAC ra xem, lúc đó mới cần AOV.

---

## 1. Tạo campaign

New campaign → goal **Sales** → type **Demand Gen**.

| Cài | Giá trị | Lý do |
|---|---|---|
| Campaign name | `RP \| DG \| Discover \| Test \| 2607` | dễ lọc |
| Conversion goal | **Chỉ Purchase**. Bỏ hết add-to-cart, page view, begin checkout khỏi goal | để goal rác vào là Max-Conv tối ưu về click rẻ, không về đơn |
| Bidding | **Maximize conversions, KHÔNG set target CPA** | vault: đặt tCPA sớm trên cold = bóp delivery, starve test, không bao giờ ra winner |
| Budget | xem §6 | |
| Locations | United States | free ship 3+ chỉ áp US |
| Location option | **Presence: people in your targeted locations** (đổi khỏi mặc định) | mặc định gồm "interest in", ăn traffic ngoài US |
| Languages | English | |
| Ad schedule | all | |
| Devices | all | Discover ~100% mobile sẵn rồi |

## 2. Ad group, Discover only

Tên ad group: `broad-mission`.

Ad group settings → **Channel controls** → chọn **"Control each channel individually"**:

| Channel | Set |
|---|---|
| Discover | **ON** |
| YouTube In-Feed | OFF |
| YouTube In-Stream | OFF |
| YouTube Shorts | OFF |
| Gmail | OFF |
| Display | OFF |

Channel controls nằm ở **ad group level**, không phải campaign level. Ba lựa chọn có sẵn: All channels (mặc định), All Google owned and operated, Control each channel individually. Phải chọn cái thứ ba mới tick lẻ được.

Audience batch 1: **để trống segment**, broad hoàn toàn. Demographics để all. Lý do: cùng một audience thì chênh CTR giữa các ad là do ảnh chứ không do targeting, đó là điều kiện để đọc được winner. Nếu có toggle **optimized targeting** thì tắt.

## 3. Exclusion, làm TRƯỚC khi bật campaign

Campaign → Audiences → **Exclusions**:
- Customer list past purchasers
- All visitors 540 ngày
- Email list

Không làm bước này thì campaign "cold" âm thầm thành remarketing, CTR và ROAS đẹp giả, NC-CAC không đọc được. Vault xếp đây là việc bắt buộc trước launch, không phải dọn sau.

Nếu customer list chưa đủ size để Google nhận, tối thiểu phải exclude được All visitors 540 ngày.

## 4. Cấu trúc ad

**10 ad = 10 concept.** Một concept một ad.

Mỗi ad gồm:
- 1 ảnh, xuất **3 khung**: 1.91:1 (khung chính của Discover), 1:1 (bắt buộc để tạo được ad), 4:5 (mở slot vertical). Cùng một ảnh crop ra, không phải 3 ảnh khác nhau.
- **1 headline duy nhất** (không nhét 5 cái). Demand Gen trộn asset, nhét 5 headline vào 1 ad là mất dòng CTR sạch để so.
- 1 description, tối đa 2.
- Business name: `Rescue Paws` (11 ký tự).
- Logo 1:1, 1200x1200.

Giới hạn ký tự: headline **40**, description **90**, business name **25**.

Final URL: `https://dinosaurized.co/pages/5-reasons-this-isnt-just-a-bracelet` (bỏ sạch `_ab` và `key`, đó là param preview).

Final URL suffix: `utm_source=google&utm_medium=demandgen&utm_campaign=rp_discover_test&utm_content={creative}`

CTA button: **Learn more** (đáp xuống advertorial, không phải PDP). Batch 2 test "Shop now".

## 5. Creative, 10 concept

Tất cả ảnh: raw iPhone, ảnh thật từ buổi cho ăn. Google Demand Gen flag ảnh AI, đây là chỗ brand có lợi thế tuyệt đối vì có ảnh field thật hằng ngày. Không dựng, không studio, không typography chồng lên ảnh, chữ dưới 20% diện tích.

| # | Ảnh | Headline (≤40) | Description (≤90) |
|---|---|---|---|
| 1 | Chó gầy đang ăn từ bát trên vỉa hè, chụp ngang tầm chó | He hadn't eaten in days. We fed him. | The dogs most people walk past. We find them. Your bracelet helps us feed them. |
| 2 | Chó ngồi đợi bên lề đường, chưa có đồ ăn, ánh sáng sớm | She waits by the road every morning | Each bracelet helps provide 10 meals to abandoned dogs. Photos from the field monthly. |
| 3 | Đàn chó xúm quanh nhiều bát, chụp từ trên xuống | 2,000,000 meals. 100,000 people. | No single hero. Just thousands of small choices. Each bracelet feeds a dog 10 times. |
| 4 | Tay người đổ đồ ăn từ bao xuống nền xi măng | We feed them. Every single day. | We feed street dogs every day. Every bracelet pays for 10 more meals. See the photos. |
| 5 | Vòng tay trên cổ tay, hậu cảnh có chó mờ | Each bracelet = 10 meals for a dog | Handcrafted, adjustable, 4.96/5 from 35,000+ reviews. And 10 meals for a dog who waits. |
| 6 | Cận cổ tay đeo vòng, bối cảnh nhà bếp thật | Wear it. A dog eats because of it. | 120-day guarantee. Free US shipping on 3+. Each bracelet helps provide 10 meals. |
| 7 | Màn hình điện thoại đang xem album ảnh feeding, cầm trên tay | Photos of the dog your bracelet fed | Over 2,000,000 meals provided so far. Every month we publish the photos. Come see. |
| 8 | Dãy bát xếp dọc lề, chó đang ăn phía sau | 10 meals. That's the whole idea. | Each bracelet helps provide 10 meals to abandoned dogs. Photos from the field monthly. |
| 9 | Toàn cảnh buổi cho ăn lúc tờ mờ sáng, người và chó | You don't need to do everything | You don't need to do everything. Just something. 10 meals, from one bracelet. |
| 10 | Chó nằm co ro, khung hình lệch kiểu chụp vội | Ribs showing, curled in the road | We feed street dogs every day. Every bracelet pays for 10 more meals. See the photos. |

### 3 ad đối chứng (chèn nếu chạy 12 ad, hoặc để batch 2)

Vault cảnh báo rất rõ: trên native, headline dạng **direct benefit** đọc như billboard và thường chết, headline đọc như editorial mới ăn. 10 cái trên bám message "10 meals" theo đúng yêu cầu, nên tao để 3 cái editorial làm đối chứng. Nếu nhóm này thắng thì batch 2 xoay hẳn hướng đó.

| # | Ảnh | Headline | Description |
|---|---|---|---|
| 11 | Bàn tay giơ điện thoại có ảnh chó, ngoài đường | The bracelet that comes with photos | Over 2,000,000 meals provided so far. Every month we publish the photos. Come see. |
| 12 | Nhiều cổ tay đeo vòng chụp vội trong sân | Why 100,000 people wear this | No single hero. Just thousands of small choices. Each bracelet feeds a dog 10 times. |
| 13 | Chồng bao thức ăn chất trong cốp xe | What 2 million meals looks like | We feed street dogs every day. Every bracelet pays for 10 more meals. See the photos. |

## 6. Budget, tính ngược từ impression

Vault đòi **1,500 impression/ad** mới được quyền kill, đọc tin cậy ở 2,000-3,000.

10 ad × 2,500 impression = **25,000 impression** cho batch 1.

Giả định CPM Discover cold US khoảng $5 (đây là giả định, ngày 1 mở cột CPM ra đo lại rồi tính lại): 25,000 impression = khoảng $125 tổng.

Rải qua cửa sổ 48-72h: **$100/ngày × 3 ngày = $300**, dư gấp đôi mức cần. Đây là mức tao đề xuất. Xuống $50/ngày vẫn chạy được nhưng phải kéo 5-6 ngày mới đủ data, mà native fatigue trong 7-10 ngày nên kéo dài là tự cắn đuôi.

## 7. Benchmark và luật đọc

| CTR | Verdict | Hành động |
|---|---|---|
| 7%+ | winner mạnh | isolate, dồn budget, làm biến thể ngay |
| 5-7% | winner | isolate, iterate cùng góc |
| 3-5% | góc đúng execution dở | giữ, làm lại ảnh cho batch sau |
| <3% | chết | pause |

Điều kiện để được phán:
- Sàn **1,000 impression/ad** mới nhìn, **2,000-3,000** mới tin.
- Ad ăn <800 impression sau 72h = **inconclusive, không phải killed**. Test lại ở batch sau. Max-Conv tự dồn impression về ad engagement cao nên ad yếu hay bị bỏ đói, kill nó là kill oan.
- Chỉ pause dứt khoát ad đã ăn **≥1,500 impression mà vẫn <5%**.
- Bar 5% áp cho **AD**, không áp cho **CAMPAIGN**. Campaign Discover prospecting đã scale thật chạy blended 4.89% vẫn lãi. Đừng thấy blended tụt dưới 5% mà hoảng kill campaign.

Thao tác kill: Campaign → ad group → tab **Ads** → thêm cột CTR và Impressions → sort CTR giảm dần → ad dưới bar VÀ đủ impression → Pause. Không xoá campaign, budget tự chảy sang ad còn sống.

## 8. Lịch 14 ngày

| Ngày | Việc |
|---|---|
| D0 | Dựng campaign, exclusion, upload 10 ad, kiểm tra lại channel controls một lần nữa trước khi enable |
| D1 | Mở cột CPM, tính lại budget theo CPM thật. Chưa động vào ad nào |
| D2 | Vẫn không động. Để data chảy |
| D3 | Đọc lần 1. Pause ad ≥1,500 imp và <3% |
| D4 | Đọc lần 2. Pause tiếp <5%. Ghi lại ad nào bị bỏ đói để test lại |
| D5-6 | Dựng batch 2 từ góc thắng. Chuẩn bị ảnh trước, đừng đợi winner tàn mới làm |
| D7 | Upload batch 2 vào cùng ad group. Native fatigue 7-10 ngày, phải có cái mới đang test trước khi cái cũ chết |
| D10 | Isolate: còn 1-3 ad sống. Tăng budget từng bậc 20-30%, không nhân đôi |
| D14 | Chốt: có winner clear 5% thì mới tính chuyện mở YouTube/Gmail, và phải là **campaign riêng chạy tCPA**, không trộn vào campaign test này |

## 9. Rủi ro disapproval

1. **Claim từ thiện.** Copy trong plan này bám đúng chữ của landing page: "helps provide", "helps us feed". Không viết "we donate", không viết "100% of proceeds", không viết dạng kêu gọi quyên góp. Google có chính sách riêng cho charitable solicitation và một brand thương mại đứng ra kêu gọi quyên góp là kèo bị soi. Giữ nguyên khung "mua sản phẩm, sản phẩm này giúp bọn tao cho chó ăn" thì ad và LP congruent, không phát sinh claim mới nào ngoài trang đích.
2. **Chữ trên ảnh.** Dưới 20%. Nặng chữ thì vừa bị Google phạt vừa đọc như ad.
3. **Before/after.** Không ghép 2 panel có label. Nếu muốn kể chuyện chó gầy rồi chó ăn thì tách thành 2 ad riêng, 2 ảnh candid khác góc.
4. **Ảnh AI.** Không dùng. Discover flag mạnh hơn Meta nhiều.
5. Nếu bị disapprove: **sửa asset rồi upload lại, xong mới appeal**. Appeal trên creative hỏng làm Google gắn cờ tái phạm cho account.

## 10. Chỗ còn để ngỏ

- **Logo field.** Vault có đòn split-test ảnh organic bất kỳ vào ô logo để gỡ tín hiệu "đây là ad", báo +30-50% CTR. Tao chưa đưa vào plan chính vì Google yêu cầu logo đại diện cho business, đây là vùng xám. Muốn test thì test ở batch 2 trên 1-2 ad, đừng áp cả batch.
- **Số budget cuối cùng** do Huy quyết. $300 cho batch 1 là mức tao khuyến nghị dựa trên phép tính impression ở §6.
