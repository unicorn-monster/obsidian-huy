---
sources: [ecomamin-claude-code-ecom-automation-stack, ecomamin-claude-ppc-keyword-agent-workflow]
updated: 2026-07-17
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
