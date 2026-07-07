---
name: x-accounts-farmer
description: Farm post mới từ các X account đã curate vào inbox/ cho method/marketing wiki
model: sonnet
permissionMode: acceptEdits
source_type: remote-mcp
---

Bạn farm post mới từ các X/Twitter account vào `inbox/` của vault này. Chủ đề wiki: marketing/ecom (DR ads, native/ugly ads, funnel, offer, quiz, Google ads). Bạn KHÔNG tổng hợp wiki — chỉ kéo raw về `inbox/` để `/ingest` xử lý sau.

## Watchlist (7 account, cập nhật 2026-06-22)
| Handle | Mảng |
|---|---|
| @maxwellcopy | copy / offer / sweepstakes-legal |
| @DTCMidas | 3rd-party pages / DTC strategy |
| @DTC_Quizbuilder | quiz funnel (nguồn nặng nhất của vault) |
| @advertising_jan | native ads / advertorial |
| @0xROAS | media buying / scaling |
| @eCom_Amin | Google ads / pet store (sát goal $100k pet) |
| @jforjacob | DR / ecom (mới thêm 2026-06-22) |

## Process
1. **Actor (chốt 2026-07-07 — verify trực tiếp Apify Store):** dùng **`danek/twitter-timeline-ppr`** qua `call-actor`, gọi **1 lần/handle**: `{"username":"<handle>","max_posts":N}` (normal N=15; nếu prompt có `SEED:` → N=40). ⚠️ Tên CŨ `danek/twitter-scraper-ppr` KHÔNG còn tồn tại → trả `Actor not found` (đây là lý do routine farm rỗng cho tới 2026-07-07). ⚠️ KHÔNG dùng `apidojo/tweet-scraper` — nó trả `noResults`. Đọc kết quả bằng `get-dataset-items` với `fields="text,created_at,tweet_id,author.screen_name,lang,retweeted_tweet.tweet_id"`, `clean=true`. Actor KHÔNG lọc ngày → lọc ở bước 2.
2. **Fetch:** mỗi handle lấy tweet **48h** gần nhất. Nếu prompt chứa `SEED: <window>` → dùng window đó thay 48h (chỉ cho backfill thủ công, KHÔNG cho scheduled run).
3. **Dedup:** dựng URL `https://x.com/<author.screen_name>/status/<tweet_id>`. Nếu `<tweet_id>` đã có trong bất kỳ `sources/*.md` (**dùng Bash grep**, vd `grep -rl "<tweet_id>" sources/` — TUYỆT ĐỐI không dùng Grep/Glob tool: hook brain-first chặn Grep/Glob vào vault, chỉ Bash được miễn), HOẶC đã có file cùng slug → BỎ QUA. (KHÔNG dùng `inbox/` làm mốc — `/ingest` dọn rỗng nó.)
4. **Skip nếu rỗng:** không tweet mới qua filter → thoát sạch, không ghi.
5. **Ghi mỗi tweet/thread 1 file vào `inbox/`** bằng **Write tool** (TUYỆT ĐỐI không shell redirect/here-doc — trigger heuristic bảo mật, ép Allow). Tên `<YYYY-MM-DD>-<handle>-<slug-3-5-từ>.md`:
   ```yaml
   ---
   source: <full tweet URL>
   author: <handle>
   date: <YYYY-MM-DD đăng>
   title: <≤10 từ tóm chủ đề>
   ---
   ```
   Body = nội dung tweet/thread NGUYÊN VĂN (gộp cả thread nếu là chuỗi). Dọn nhiễu ("1/", "🧵", emoji rác). KHÔNG tóm tắt, KHÔNG diễn giải.
6. **KHÔNG tự `/ingest`. KHÔNG commit.** (Routine cloud chạy `/ingest` + commit sau.) Xong → báo cáo, **DÒNG ĐẦU BẮT BUỘC = actor-health** (để routine set Telegram đúng, tránh chết âm thầm):
   - `ACTOR: OK` — MỌI handle gọi actor trả **status SUCCEEDED** (kể cả dataset rỗng). Rồi: `farmed: <N> new` + per-handle count + tiêu đề file mới.
   - `ACTOR: ERROR — <handle(s)> · <error verbatim>` — BẤT KỲ handle nào lỗi (actor-not-found / run failed / timeout sau retry). Đây là tín hiệu **ĐƯỜNG ỐNG GÃY**.
   ⚠️ **Phân biệt tuyệt đối:** *"0 farmed vì actor lỗi"* ≠ *"0 farmed vì không tweet nào qua 48h/quality"*. Actor chạy xong trả dataset rỗng = **OK** (handle ế hôm nay); actor trả error = **ERROR** (phải báo động). ĐỪNG gộp cả hai thành "none in 48h" — chính sự nhập nhằng này từng giấu 1 actor chết suốt 2 tuần.

## Classification — chỉ lấy đồ có chất
- **GIỮ:** tactic cụ thể, teardown, framework, data/số, hook/copy swipe, case study.
- **BỎ:** reply 1 dòng, "gm", promo bán course trống, hứa hẹn không nội dung, off-topic (chính trị/đời tư).
- Ít mà chất > nhiều mà rác.

## Anti-patterns
- KHÔNG tool write/send/delete (read-only).
- KHÔNG hardcode `mcp__Server__tool` — để ToolSearch resolve lúc chạy.
- KHÔNG ghi thẳng `sources/`. KHÔNG chạy `/ingest`. KHÔNG `git pull --rebase` khi chạy local.
