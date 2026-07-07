---
type: benchmark
date: 2026-07-07
---

# Brain benchmark — retrieval 2 lớp vs default (2026-07-07)

Nguyên tắc #5 PDF RoboNuggets: "make it prove itself". 10 câu hỏi thật từ vault, 2 đường:
- **Brain path** = ladder `/ask`: `recall.mjs` (L1, deterministic) → qmd query snippets (L2a) → cắt section top hit (L2b) → `qmd get` trọn file (L2c). Đo đúng những gì model phải đọc.
- **Default path** = Claude không có brain: grep keyword → Read TRỌN top-3 file match.

Rerun bất cứ lúc nào: `node .brain/bench/run-bench.mjs`

| id | lớp dừng | brain tok | default tok | saving | brain ms | đúng (brain/default) | câu hỏi |
|----|----------|-----------|-------------|--------|----------|----------------------|---------|
| q1 | L1 | 2,251 | 20,847 | 89% | 36 | ✅ / ❌ | lệnh deploy 4pawsreview funnel |
| q2 | L1 | 87 | 18,842 | 100% | 28 | ✅ / ✅ | cấu trúc CBO chuẩn DTCMidas |
| q3 | L1→L2c | 11,792 | 20,264 | 42% | 1,038 | ✅ / ✅ | refund rate pet brand eCom_Amin |
| q4 | L1 | 1,843 | 15,920 | 88% | 28 | ✅ / ✅ | 5 avatar maxpro, avatar lead |
| q5 | L1 | 2,182 | 8,615 | 75% | 27 | ✅ / ✅ | hook lặp trong swipe kittysupps |
| q6 | L1 | 553 | 24,269 | 98% | 30 | ✅ / ✅ | kill/keep window meta |
| q7 | L1 | 838 | 24,269 | 97% | 31 | ✅ / ✅ | test gì tiếp maxpro trên google (pair mode) |
| q8 | L1 | 2,673 | 17,447 | 85% | 31 | ✅ / ✅ | free shipping badge google shopping |
| q9 | L1→L2a | 2,745 | 21,419 | 87% | 1,819 | ✅ / ❌ | khách chê đắt xử lý sao (semantic VN→EN) |
| q10 | L1 | 244 | 20,951 | 99% | 34 | ✅ / ✅ | mystery vs flat discount email |

**TỔNG: brain 25,208 tok vs default 192,843 tok → tiết kiệm 87% · đúng 10/10 (default chỉ 7/10).**

Đọc kết quả:
- 8/10 câu dừng ngay **L1** — ~30ms, 0 LLM call, section đúng.
- **q9** là ca semantic thuần ("chê đắt" → "value gap ≠ price objection" trong [[offer-and-cta]]): keyword grep chịu chết (default ❌), Qwen3 embedding bắt được → đây là lý do tồn tại của lớp qmd.
- **q3** là needle khó nhất (fact 1 dòng giữa trang dài): phải leo tới L2c đọc trọn file — nhưng vẫn là 1 file ĐÚNG (42% saving) thay vì 3 file đoán mò.
- **q1** default ❌ dù đọc 20k tok: grep dàn trải trượt file đúng — brain thắng cả về ĐỘ ĐÚNG, không chỉ token.

Honest note (đúng cảnh báo PDF): fact nằm sẵn trong index/CLAUDE.md thì default cũng nhanh — brain thắng ở fact chôn sâu, câu đa file, và câu semantic song ngữ. Token ước lượng bytes/4; default path mô phỏng (grep→read top-3), không phải phiên live, nhưng cùng thước đo cho cả 2 phía.
