---
sources: [applovin-scaling-guide]
updated: 2026-09-05
---

# AppLovin Ads — rewarded video trong mobile game

Nguồn: [[applovin-scaling-guide]] (Ricky / rare-brands.com, @ecomrickys, bản 2026). Trang kênh mới, ngang hàng [[google-ads]] · [[bing-ads]] · [[youtube-ads]] · [[native-ads]].

> [!warning] Đọc nguồn với con mắt mở
> Guide này là **lead magnet có referral link** (`ads.applovin.com/signup?referralCode=RAREBRANDS` — match $5k spend đầu tiên) và kết bằng pitch agency. Số liệu đưa ra là claim tự-báo-cáo của 1 brand, không có screenshot P&L. Cơ chế setup (screen-by-screen) thì kiểm chứng được vì có ảnh thật từ account; **claim về hiệu quả thì chưa**. Coi đây là bản đồ UI + giả thuyết chiến lược, không phải bằng chứng.

## Kênh này khác gì — attention được MUA, không phải giành
Ads chạy **bên trong mobile game** (kiểu Candy Crush): người chơi hết lượt / muốn thêm gem → phải xem hết 1 video 30-60s mới nhận thưởng. Hệ quả cấu trúc:
- Meta/TikTok: bạn đánh nhau với ngón cái, có ~0.5s trước khi họ lướt. AppLovin: người xem **chọn** xem để đổi lấy phần thưởng → bạn giữ nguyên màn hình 30-60s, không feed, không đối thủ, không scroll.
- Đảo ngược logic hook của [[hooks]]: hook không còn để CHẶN scroll (không có scroll để chặn), mà để giữ người xem KHÔNG bỏ tab / không xem cho có. Video dài 60s trở thành thứ đáng test thật, không phải afterthought — gần với logic [[youtube-ads]] hơn là Meta.
- 3 bước 1 ad: **Video** (bán) → **End card / "interactive"** (chuyển đổi, full-screen, 1 nút Shop Now) → **Store** (PDP có UTM).

Ánh xạ danh từ sang Meta: Media library = thư viện asset · **creative set ≈ ad set** · campaign = campaign (chọn audience strategy + goal type + budget).

## Creative spec (Block A — phần quyết định)
- **9:16, 1080×1920**, max **60s**. Chạy song song bản **30s và 60s** của cùng concept, test đối đầu.
- **Caption bắt buộc** — đa số xem tắt tiếng (đang chơi game, hay ở nơi công cộng). Video cần audio mới hiểu = chết ngay. Style caption TikTok/CapCut mặc định là đúng, không cần fancy.
- **Luật đặt caption:** chia màn hình 4 phần ngang, caption nằm **ngay TRÊN đường 1/4 dưới cùng** — trong 3/4 trên, không bao giờ ghim sát đáy. Dải đáy là chỗ UI quảng cáo + chrome của máy → caption ở đó bị che hoặc bị bỏ qua. (Spec cụ thể hơn mọi ghi chú caption hiện có trong [[ai-video-production]] — dùng chung được cho mọi video dọc.)
- Tác giả nói thẳng: end card, cấu trúc campaign, bid — tất cả **kém quan trọng hơn video rất nhiều**. Ưu tiên effort vào video.

## Creative set = 1 concept, không trộn (Block B)
- **1 creative set = 1 concept** (cùng ý tưởng, cùng angle, cùng style — nhiều cut/biến thể của nó). Trộn creative khác nhau vào 1 set → performance không đọc được. Đây là bản kênh-này của luật isolate ở [[creative-testing]].
- **Khởi động 5 set.** 5 concept đủ signal để tìm winner mà không đốt budget. (Account nguồn hiện ở "hàng trăm concept".)
- **Đặt tên bằng SỐ** cho mọi video và mọi set ("Concept 296", "Creative Set 1225"). Cùng lý do naming-convention bắt buộc ở [[media-buying]]: lúc lọc và cắt loser, naming sạch là khác biệt giữa 5 phút và một cuộc khai quật.
- Upload → duyệt ~5 phút → chọn hết video của 1 concept → **Create creative set**. Sẽ dính lỗi *"You need at least one image in the creative set"* — không phải bug, là AppLovin đòi end card.

## End card = offer + urgency, hết (Block B½)
AppLovin gọi là **interactive**. Có thể custom-code interactive chơi được — **không cần**. Công thức:
- Nền: **1 ảnh 9:16** full-screen, sản phẩm là hero (JPG/PNG, 900×1600 chạy được).
- 1/3 dưới: **offer + urgency gắt** — "50% OFF" to + "ENDS TONIGHT".
- **1 nút Shop Now**. AppLovin tự thêm share button + linh tinh → **xoá sạch**, chỉ giữ Shop Now. 1 card, 1 hành động.
- **KHÔNG test end card lúc đầu.** Làm 5 end card, dùng **y hệt 5 cái đó cho TẤT CẢ creative set**. End card khác nhau theo set làm data giai đoạn đầu không đọc nổi, mà cũng không đáng — miễn có offer + urgency là nó làm xong việc. **Video mới là thứ để test.** Đợi scale rồi mới nghịch end card.
- Build ở **Creative studio**: Media library → Interactives → Create → template **"Immersive visuals"** (1 image/video). Bỏ qua Carousel / Feature highlights / Quiz.

## Ma trận 4 campaign lúc launch (Block C)
2 trục: **audience strategy** (Prospecting = tối ưu cho khách chưa từng mua · Universal = tối ưu purchase từ mọi người; còn có Discovery) × **goal type** (Target ROAS · Cost Per Purchase; còn có CPE). Không chọn — **chạy cả 4**.

|  | Target ROAS | Cost Per Purchase |
|---|---|---|
| **Prospecting** | Campaign 1 — tROAS đặt ~10% CAO hơn target thật | Campaign 2 — CPP đặt ~10% THẤP hơn target thật |
| **Universal** | Campaign 3 — tROAS ~10% cao hơn | Campaign 4 — CPP ~10% thấp hơn |

- **Vì sao đặt target gắt:** hoạt động y như cost cap trên Facebook (xem [[media-buying]] §bid-cap) — platform không kham nổi thì **nó đơn giản là không tiêu tiền**, rồi mình nới dần tới khi nó tiêu. Downside được chặn bằng chính cơ chế đó. Ở account nguồn, AppLovin tiêu ngay cả ở target gắt.
- **Prospecting là performer tốt nhất của họ**, nhưng tác giả nói rõ điều này thay đổi theo brand + attribution model → chạy cả hai, để số quyết định.
- **Budget $200/ngày mỗi campaign** (tức **$800/ngày** cho cả ma trận). Gắn **cả 5 creative set vào cả 4 campaign**, rồi quản như Meta: xem set nào chạy, cắt cái dở, nuôi cái tốt.
- **Dynamic Catalog: OFF.** AppLovin sẽ ép bật, quảng cáo lift 25% — kệ. Mình muốn creative + end card mình thiết kế chạy, không phải catalog ad auto-gen.
- **Naming campaign theo setting**: "Prospecting – tROAS 2.5 – USA – Mug" → dashboard tự đọc được.
- **1 geo / campaign** (Targeting → Specific countries/regions) để naming sạch, kết quả đọc được.

## Tracking — 1 attribution model cho MỌI platform
Bài học đắt nhất của guide, và nó vượt khỏi AppLovin:

> [!warning] AppLovin càng tiêu nhiều, Facebook càng nhận sale của AppLovin về mình
> Giai đoạn đầu, số in-platform còn sạch nên họ scale AppLovin bằng chính report của nó. Nhưng spend càng lớn, attribution của Meta càng âm thầm hút sale của AppLovin sang. **Mọi platform tự chấm bài của chính nó** → trọng tài phải là bên thứ ba, 1 model duy nhất, áp cho mọi kênh.

- Nối tracker (họ dùng **Triple Whale**) từ ngày 1, dùng **đúng model đang dùng để scale Facebook** — của họ là **linear paid, 7 ngày**. Model nào cũng được; phần bất di bất dịch là **giống hệt nhau trên mọi kênh mua**.
- **Day target của campaign phải khớp attribution window** → họ chạy **Day 7**. Day 0 chỉ dùng nếu sản phẩm convert ngay trong phiên.
- URL builder: `utm_source=applovin`, `utm_medium=paid` + macro `{CAMPAIGN_NAME}` và `{CREATIVE_SET}`; thêm **Triple Whale làm measurement partner** → tự append tham số `tw_`. (Cùng logic gclid/UTM bridge đang chạy ở [[maxpro-top5-review-funnel]] — MaxPro chưa có Triple Whale, phải tự dựng lớp param.)
- Giai đoạn hoài nghi (tuỳ chọn): chạy metric khắc nghiệt nhất — **D0 checkout revenue** — để xem kênh có thật sự incremental không. Họ làm vậy và kết luận là có; nhưng tác giả nói bạn có thể **bỏ qua bước paranoia này**.

## Scaling — kênh này chịu được đòn mạnh
- Meta: nhân đôi budget qua đêm thường phá performance + đẩy campaign về learning. AppLovin: họ **nhân 2, thậm chí nhân 4 budget TRONG NGÀY** mà delivery không gãy.
- **Honeymoon ~2 tháng đầu**: AppLovin có xu hướng đẩy brand mới. Cửa sổ dùng-hoặc-mất. Sai lầm nặng nhất là tìm ra setup chạy được rồi nhỏ giọt +$50/lần trong khi thuật toán đang chủ động giúp mình. (⚠️ claim chưa kiểm chứng độc lập — không có data ngoài lời tác giả.)
- Bắt đầu scale từ **ngày 1**, ngay khi thấy kết quả thật + incrementality thật — đọc trên **attribution hợp nhất**, không đọc số tự-báo của platform.
- Nhịp tuần: cắt set thua, ship concept mới thành set mới, giữ nguyên 5 end card. Giống nhịp cut-and-feed ở [[media-buying]].

## Checklist launch (bản rút gọn)
Creative: 30s + 60s mỗi concept · 9:16 · caption sạch trên đường 1/4 dưới. Sets: 5 set, 1 concept/set, đánh số hết. End card: 5 cái, offer + urgency + Shop Now, giống nhau ở mọi set. Campaign: 4 (Prospecting/Universal × tROAS/CPP), tROAS +10% / CPP −10%, $200/ngày mỗi cái, Dynamic Catalog OFF, Day target = attribution window. Tracking: UTM + tracker từ ngày 1, 1 model cho mọi kênh. Scale: 2-4× same-day khi có tín hiệu thật, cut-and-feed hằng tuần.

## Mâu thuẫn với niềm tin hiện có trong vault (chưa giải quyết)
1. **Gate mở kênh mới.** [[media-buying]] (DTCMidas) đặt cửa: native ~$50-100k/mo, "kênh mới" nói chung tới ~$500k/mo mới mở. Guide này bảo mở AppLovin **ngay hôm nay** ở $800/ngày (~$24k/tháng) bất kể quy mô. Hai bên không thể cùng đúng cho brand nhỏ. Điểm hoà giải khả dĩ: **spend-match $5k + honeymoon** làm giảm chi phí thử — nhưng bản thân ma trận $800/ngày vẫn nằm ngoài bậc budget của MaxPro (bậc <£5k/tháng → 3 campaign, xem [[opportunity-research-ai-workflow]]).
2. **Không isolate biến số.** Gắn cả 5 set vào cả 4 campaign nghĩa là mỗi concept chạy đồng thời dưới 4 cơ chế bid/audience khác nhau — đối lập với isolate-one-layer ở [[creative-testing]]. Đọc theo hướng có lợi: 4 campaign là 4 **cơ chế mua**, không phải 4 test creative; creative test vẫn sạch vì mỗi set = 1 concept. Nhưng khi so set-với-set, spend đến từ 4 nguồn khác nhau → attribution của set bị nhiễu.
3. **Video-first vs kho ảnh hiện có.** Toàn bộ kênh là video 30-60s có caption. Vault MaxPro đang nghiêng nặng về **static "ugly" ad** ([[ugly-ads-method]], [[native-statics-machine]]) — muốn thử AppLovin phải dựng năng lực video, chi phí thật nằm ở đó chứ không ở setup.

## Gap — brain chưa biết
- Không có benchmark CPM / CTR / VTR / CPP thật của AppLovin ecom (guide không đưa 1 con số hiệu quả nào ngoài "nó chạy được").
- Không biết lượng inventory / geo coverage ngoài US, cũng không biết ngưỡng spend tối thiểu để thuật toán học.
- Không rõ chính sách compliance với niche pet/grooming (pet product có bị hạn chế inventory game không).
- Chưa biết cơ chế "honeymoon 2 tháng" là chính sách thật hay quan sát cá nhân.
