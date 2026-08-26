---
sources: [ecomamin-claude-code-ecom-automation-stack, ecomamin-claude-ppc-keyword-agent-workflow, jforjacob-why-brand-owners-should-learn-n8n, jforjacob-need-to-hire-becomes-need-to-automate, jforjacob-ai-customer-service-commslayer, jforjacob-manus-creative-upload-automation, jforjacob-manus-one-shot-landing-page-workflow, jforjacob-chatgpt-analyse-meta-creative-metrics-roas, dtcmidas-claude-setup-for-ad-copy]
updated: 2026-08-26
---

# AI-agent automation stack cho ecom ops (Claude Code + MCP)

Nguồn: [[ecomamin-claude-code-ecom-automation-stack]] (@eCom_Amin). Framework dựng agent Claude Code + MCP để VẬN HÀNH cả 1 chức năng business (PPC, CS, competitor intel, inventory, content, email, finance, supplier) thay vì chỉ dùng AI để soạn nháp rồi copy-paste tay.

## 4 cấp độ dùng AI (khung tự đánh giá)
Cấp 0 — search-engine mode: hỏi chung chung, người vẫn làm 100%, đòn bẩy = 0. Cấp 1 — advisor: AI cho lời khuyên khớp business, người vẫn tự thực thi, tiết kiệm ~10% thời gian. Cấp 2 — assistant: AI thực thi 40-60% công việc THẬT cùng người, đây mới là chỗ tiết kiệm thời gian thật bắt đầu. Cấp 3 — automation: AI làm 80-95% không cần giám sát, người chỉ review output + quyết định chiến lược. Claim tác giả: đa số brand kẹt ở cấp 0-1; khác biệt margin nằm ở cấp 2-3.

## "Context engineering" thay "prompt engineering"
Model đã biết kiến thức chung — thiếu CONTEXT về chính business của bạn (sản phẩm, margin, khách hàng, quyết định tuần trước, task đang có trong PM tool). 3 lớp context cần xếp chồng: **business context** (catalog/margin/target/brand-voice/đối thủ) → **individual context** (role/quyền quyết/ưu tiên/style giao tiếp) → **task context** (đang làm gì/vì sao/thành công trông ra sao/ràng buộc). Claim: 2023 cần khéo viết prompt; giờ nút thắt là feed ĐÚNG context, không phải viết câu hỏi khéo.

## Kiến trúc 4 lớp
1. **Context database (nền tảng)** — Supabase (hoặc tương đương) lưu transcript họp, quyết định, task từ PM-tool, process doc, lịch sử Slack, tương tác khách hàng = "trí nhớ sống" agent query thay vì bắt đầu từ 0 mỗi lần.
2. **MCP server connections (tay chân)** — connector cho agent THỰC SỰ hành động, không chỉ chat: Shopify, Gmail, Google Ads API, Google Sheets, Merchant Center, Notion, Slack, Apify (scraping).
3. **Agent architecture (người vận hành)** — 1 agent/chức năng, mỗi cái có: master prompt (context business) + system prompt (định nghĩa role) + quyền MCP đúng phạm vi role + skill library.
4. **Skill library (hệ SOP)** — mỗi quy trình lặp lại viết thành thủ tục đánh số rõ ràng agent load và chạy đúng từng bước khi gọi tên skill, thay vì tự suy luận lại quy trình mỗi lần (vd skill "phân tích review đối thủ" = scrape qua Apify → trích sentiment/theme → tìm gap → lưu Notion → tóm tắt Slack → tạo task top-3 cơ hội).

## "Cần hire" → "cần automate" — mindset shift + n8n thay SaaS ([[jforjacob-why-brand-owners-should-learn-n8n]], [[jforjacob-need-to-hire-becomes-need-to-automate]])

jforjacob: default thought pattern đã đổi hẳn từ *"I need to hire a…"* sang *"I need to automate…"* — tốc độ AI/MCP tiến bộ "nhanh nhất từng thấy trong 1 tháng" làm tác giả không còn muốn hire thêm người hay subscribe thêm SaaS mới, vì MCP/agent liên tục "eat" những chỗ trước đây cần cả 2. Đây là khung tâm lý đứng SAU toàn bộ 4-cấp-độ-dùng-AI ở trên — quyết định NÊN nhìn 1 vấn đề vận hành là "job cần hire" hay "job cần automate" trước khi build agent.

**Bằng chứng cụ thể — n8n thay tool trả phí launching ads:** jforjacob annoyed vì không có tool launch Facebook ads tự động vừa túi tiền (mọi lựa chọn hoặc giới hạn nhiều hoặc đắt hơn thuê VA) → tự build bằng **n8n**: ads upload vào folder Google Drive "to upload" (sub-folder = ad set, file = ad, tên folder/file tự map sang cấu trúc account) → n8n tự launch lên Facebook đúng cấu trúc đó → ads xong tự chuyển sang folder "uploaded" → Slack báo tên + chi tiết ads đã lên. Chi phí gần như 0 (không SaaS subscription), không giới hạn như tool thương mại. Roadmap tiếp: nối thêm image-gen automation (custom GPT biết hết về brand + scrape ad-library/review/Reddit) để launch cả AI-generated ads tự động.

**Hàm ý:** brand owner học n8n (hoặc thuê người biết) = đòn bẩy build custom automation đúng ý, không bị giới hạn bởi feature-set SaaS trả phí. Tie §Kiến trúc 4 lớp ở trên — n8n ở đây đóng vai trò lớp 2 (MCP/automation "tay chân") nhưng do brand owner tự dựng thay vì thuê agency.

## Mẫu agent theo chức năng (3 cấp mỗi cái: advisor → assistant → automation)
- **PPC:** L1 biết catalog/margin/ROAS-target/voice/đối thủ, review search-term report khi được hỏi. L2 có quyền ghi vào Google Ads+Merchant Center+Sheets, build cả campaign (structure/copy/feed-title/negative/bidding) từ 1 câu lệnh, vẫn hỏi trước khi launch. L3 chạy tự động theo lịch (vd mỗi 6h: tăng budget +15% campaign trên 120% target ROAS bền 72h, pause campaign dưới 50% target bền 48h) kèm ngưỡng escalate rõ ràng (mọi lần pause, budget nhảy >50% 1 lần, hoạt động đối thủ mới, anomaly >40%) báo về Slack.
  **Implementation cụ thể ở mức L1 (Claude Project, không phải Claude Code) — [[ecomamin-claude-ppc-keyword-agent-workflow]]:** dùng Claude Projects (không cần Claude Code/MCP, chỉ cần Pro $20/mo) làm agent chuyên phân tích search-term report. Custom instructions ép output format 3 khối (HIGH PRIORITY ACTIONS / STRATEGIC INSIGHTS / NEXT STEPS) + rule cứng "never recommend broad match unless 10+ conversions on exact match". Nạp 5 file làm knowledge base cố định: negative-keyword master list, product catalogue (margin/target CPA), landing-page inventory, benchmark doc (target CPA/ROAS/QS theo layer), competitive brief — Project nhớ xuyên session, không phải feed lại mỗi lần như chat thường. Cadence: mỗi thứ Hai kéo search-term 7-ngày + auction-insights, feed vào Project, review/action, rồi GHI LẠI đã làm gì/bỏ gì làm note trong chính conversation đó (xây decision-history cho lần phân tích sau) — bước log này là phần hay bị bỏ qua nhất nhưng quan trọng nhất để agent "học" theo thời gian. Case số liệu: $2,800/tháng waste tìm ra qua 47 negative bị bỏ sót review tay hàng tuần. Ngưỡng dùng: đây là L1 advisor (người vẫn tự apply), muốn lên L2 (agent tự ghi Google Ads) mới cần MCP như Fable 5 ở [[google-ads]] §AI media buyer.
- **Customer service:** L1 draft email chờ người duyệt. L2 có quyền Shopify+Gmail+Notion, tự xử lý tra cứu đơn hàng + refund/replacement nhỏ trọn vẹn. L3 phân loại intent mọi email đến, tự giải quyết order-status/refund-nhỏ/replacement/FAQ (claim ~87% volume), chỉ escalate refund lớn/ngôn ngữ pháp lý-abusive/khách phàn nàn lặp lại.
- **Competitor intelligence:** scrape tự động hàng ngày (Apify) giá/review/sản phẩm-mới/hoạt động ad-library đối thủ, so với snapshot hôm qua, phân tích sentiment, ra báo cáo Slack kèm đề xuất phản ứng chiến lược.
- **Inventory:** forecast demand từ velocity 90 ngày + mùa vụ, tính ngày-tồn-kho-còn-lại/SKU, cờ SKU cần reorder, soạn PO đúng MOQ/ngưỡng ship supplier chờ duyệt, theo dõi ETA, cập nhật tồn khi nhận hàng.
- **Content:** sinh full listing (title/bullet/meta/description 3 góc) từ phân tích pattern đối thủ dưới 1 phút; theo dõi CVR rớt theo SKU và tự draft/A-B-test title/ảnh/mô tả thay thế.
- **Email:** dựng sequence welcome/abandon/win-back cá nhân hoá theo nguồn signup, theo dõi open/click/convert theo segment, đề xuất và chạy A/B subject-line/send-time.
- **Finance:** kéo dữ liệu Shopify+ad-platform+accounting mỗi đêm ra P&L/unit-economics hàng ngày (revenue/CAC/ROAS/margin vs target), cờ anomaly, phân tích lời-lỗ THẬT theo SKU (COGS+ship+processing+return+ad-spend phân bổ) để bắt sản phẩm đang lỗ ẩn.
- **Supplier:** tự tạo và gửi PO khi trigger reorder, theo dõi ship qua email check-in định kỳ, cập nhật tồn khi nhận hàng — người chỉ can thiệp khi có ngoại lệ.

## Case thật — CS agent (Commslayer) và general agent (Manus) thay tool chuyên dụng (jforjacob)

**Customer service — chức năng AI-revolutionize nhất trong business, theo jforjacob** ([[jforjacob-ai-customer-service-commslayer]]): stack **Commslayer MCP + Claude** — tự nhận "feels like cheating". Tự tin resolve **90%+ ticket** bằng AI với setup này. Chi tiết đáng chú ý: AI agent trong Commslayer đạt **CSAT cao hơn MỌI agent con người thật** của brand. Xác nhận trực tiếp §Mẫu agent theo chức năng > Customer service ở trên (L2/L3, claim ~87% volume tự xử lý) — con số 90%+ + CSAT vượt người thật là bằng chứng THỰC TẾ (không phải chỉ pitch) cho claim L3 ở đó.

**General agent (Manus) làm việc của tool chuyên dụng, không cần build riêng:**
- **Sync creative asset tự động** ([[jforjacob-manus-creative-upload-automation]]): Manus tự kiểm tra Notion creative database mỗi ngày tìm ad mới → tải creative từ Frame → upload lên Facebook testing campaign → cập nhật status + ngày upload lại vào Notion. Chạy tự động lúc nửa đêm mỗi ngày. jforjacob: *"Bye bye Adnova"* — 1 automation Manus thay thế thẳng 1 SaaS chuyên dụng (Adnova) chỉ để làm đúng 1 việc "di chuyển asset giữa hệ thống".
- **One-shot landing page từ 1 câu brief** ([[jforjacob-manus-one-shot-landing-page-workflow]]): brief Manus bằng **link ad top-spending** (không phải blank prompt) + 1 URL listicle mẫu thích phong cách → Manus tự transcribe ad, viết copy congruent, generate ảnh bằng nano banana pro (không cần đưa API key/tài khoản Google), build page HTML, đẩy vào Shopify draft theme, rồi khi yêu cầu thêm — tự sửa code để page chia section editable trong theme editor thay vì 1 block. Kiểm tra lại: mọi CTA/link đúng, discount code trên announcement bar tự khớp với site thật. Tất cả "one shot" — không cần sửa lại lần 2.

**Bài học chung 2 case Manus:** brief agent bằng **artifact thật đang chạy tốt** (top ad, top landing template) thay vì mô tả trừu tượng — agent tự phân tích + transcribe input thật cho ra kết quả congruent hơn brief tay. Đây là biến thể cụ thể của nguyên tắc "context engineering" ở trên (§Context engineering thay Prompt engineering) — context ở đây là 1 ASSET THẬT, không phải mô tả bằng lời.

## ChatGPT/reasoning model soi correlation trong data Meta — thay phân tích tay ([[jforjacob-chatgpt-analyse-meta-creative-metrics-roas]])

jforjacob: export data campaign top-spending 30 ngày từ Meta, đưa cho ChatGPT o3 (reasoning model), hỏi có creative metric nào correlate với ROAS/spend không — model tự generate charts + tóm tắt correlation. Đây là biến thể **L1 advisor** đơn giản nhất của §PPC ở trên (không cần MCP/quyền ghi, chỉ cần export CSV + reasoning model) — bước đệm rẻ nhất trước khi đầu tư dựng agent L2 có quyền ghi trực tiếp vào Ads Manager.

## Mẫu master-prompt tái dùng được (cấu trúc chung mọi agent)
`[ROLE + BRAND + NICHE + doanh thu] → [BUSINESS CONTEXT: catalog/margin/target/voice/đối thủ] → [ĐỊNH NGHĨA ROLE] → [DECISION FRAMEWORK: ngưỡng số cụ thể trigger hành động gì] → [ACCESS: MCP tool nào, đọc hay ghi] → [với L2/L3: SKILL sẵn có + SAFETY RULE (vd "không bao giờ pause campaign đang lời khi chưa duyệt", "tăng budget >30% cần duyệt")]`.

## Chi phí claim (minh hoạ pitch bán hàng, KHÔNG phải case-study đã kiểm chứng độc lập)
Tool hàng tháng: Claude Pro/API ~$20-100 + Supabase ~$25 + n8n ~$20-50 ≈ **$115-195/tháng**. Setup 1 lần: $3-5k thuê ngoài hoặc 40-80h tự làm. Lương claim thay thế: PPC manager $6k + CS 4 người $18k + ops manager $5.5k + copywriter $4.5k + email marketer $4k + financial analyst $6k = **$44k/tháng** → tiết kiệm ròng claim ~$43.8k/tháng ("30+ điểm margin"). Đòn bẩy thật phụ thuộc rất nhiều vào volume đơn hàng + quy mô team + tỉ lệ công việc thật sự SOP-hoá được — coi số này là minh hoạ, không phải benchmark đảm bảo.

## Lỗi thường gặp (tác giả tự nêu)
Tự động hoá 1 quy trình CHƯA hệ thống hoá (không automate được thứ chưa có SOP — document trước). Context thiếu (instruction chung chung → output chung chung không khớp business). Không có người giám sát lúc rollout (lỗi cộng dồn âm thầm — chạy L1→L2→L3 tuần tự, giữ review người ~30 ngày trước khi giảm checkpoint). Cố tự động hoá MỌI chức năng cùng lúc (chọn 1, làm cho chạy, rồi mới mở rộng). Đánh giá thấp thời gian setup thật (claim 40-80h, không phải 1 cuối tuần).

## Trình tự rollout gợi ý
Tháng 1: document quy trình, dựng agent L1 advisor đầu tiên (thường PPC hoặc CS — ROI cảm nhận cao nhất), nối 3 MCP đọc-only, dựng 5 skill đầu. Tháng 2: nâng L2 (quyền ghi + workflow tự động đầu tiên), nhân bản pattern cho chức năng thứ 2. Tháng 3: dựng L3 cho quy trình đã chứng minh an toàn ở L2, chuyển team sang vai trò giám sát.

> [!warning] Verify trước khi setup thật
> Package name/CLI syntax MCP cụ thể trong nguồn (11/2025) cần tự kiểm tra lại với doc Claude Code/MCP hiện tại trước khi làm theo — hạ tầng này đổi nhanh.

## Claude Opus + Projects + Skills — vẫn ăn đứt mọi setup khác cho copywriting ([[dtcmidas-claude-setup-for-ad-copy]])
DTCMidas (2026-07-28): Claude Opus + Projects + Skills vẫn cho output tốt nhất khi viết copy — hơn cả **Claude Code** (dù gắn kèm nguyên memory base), hơn **ChatGPT 5.6**. Setup cụ thể: **1 Project riêng cho MỖI sản phẩm**, nạp càng nhiều context chất lượng cao càng tốt; và **1 Skill riêng cho MỖI format đang viết**, mỗi Skill train trên winning examples + DR fundamentals.

→ Xác nhận trực tiếp pattern "1 Claude Project = persistent context / sản phẩm" đã có ở §PPC L1 trên ([[ecomamin-claude-ppc-keyword-agent-workflow]]) và ở [[market-awareness]] (jforjacob-product-launch-research-process, master research doc trong Claude project). DTCMidas mở rộng đúng pattern này sang **copywriting** cụ thể, và thêm 1 layer 2 case kia chưa nhắc: **Skill riêng theo format**, train trên ví dụ THẮNG thật — không chỉ system prompt chung chung. Tie [[copywriting]] (DR fundamentals — chính là nội dung nên nạp vào mỗi Skill).

> [!note] Áp cho MaxPro
> Dựng 1 Claude Project "MaxPro" nạp: catalog/margin/avatar/competitor/VOC hiện có trong wiki + [[copywriting]] DR fundamentals. Build Skill riêng cho từng format hay viết (advertorial, primary text, email), train trên winning example đã có sẵn trong wiki (VD [[maxpro-elle-birdie-winning-native]]) thay vì để Claude tự suy diễn format mỗi lần.
