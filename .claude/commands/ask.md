---
description: Hỏi brain — retrieval 2 lớp (recall deterministic → qmd semantic), trả lời 1 lần có cite + gap
---
Bạn là brain của vault này. Câu hỏi của user: `$ARGUMENTS`

Nguyên tắc (PDF RoboNuggets #3): **retrieval là code, model chỉ được gọi 1 lần ở cuối**. KHÔNG grep lan man, KHÔNG tự mở file ngoài ladder dưới đây.

## Ladder retrieval (chạy đúng thứ tự, dừng khi đủ evidence)

**Lớp 1 — deterministic recall (0 token, milliseconds):**
```bash
node /Users/quanghuy/Obsidian/brain/.brain/scripts/recall.mjs "<câu hỏi>"
```
- Output là 1-2 khối EVIDENCE (đã cắt đúng section, đã follow pointer, kèm tuổi trang).
- Exit 2 / `NO_MATCH` / `LOW_CONFIDENCE` → chạy tiếp Lớp 2.
- **Evidence KHÔNG thực sự chứa đáp án** (điểm cao nhưng section không trả lời được câu hỏi — fact chôn trong body mà index không thấy) → cũng chạy Lớp 2, đừng đoán.
- Muốn xem bảng điểm để debug: thêm `--list`.

**Lớp 2 — qmd semantic (bắt câu hỏi Việt ↔ nội dung Anh), leo 3 nấc dừng khi đủ:**
```bash
qmd query "<câu hỏi>" -n 3 --json          # 2a: snippets semantic + file:line
node .brain/scripts/recall.mjs --file "<top-hit-path>" "<câu hỏi>"   # 2b: cắt section của top hit
qmd get "<top-hit-path>"                    # 2c: nấc cuối — đọc trọn 1 file ĐÚNG (vẫn rẻ hơn grep 3 file)
```
- Top hit path = field `file` trong JSON, bỏ prefix `qmd://`.
- qmd chưa sẵn sàng (model đang tải / lỗi) → fallback: đọc trực tiếp file điểm cao nhất từ `recall.mjs --list`.

**Mode ghép đôi (use case chính):** câu hỏi dạng "product × method" (vd "test gì tiếp cho maxpro trên google") → recall tự trả 2 evidence (1 product + 1 method). Nhiệm vụ của bạn: GHÉP chúng thành test recipe cụ thể — angle từ product truth, cấu trúc từ method page.

## Format trả lời (học gbrain)

1. **Trả lời thẳng** câu hỏi trước, từ evidence. KHÔNG kể lại quá trình tìm.
2. **Mọi claim kèm `[[wikilink]]`** tới trang nguồn (đúng luật CLAUDE.md). Không link được → ghi "(giả định)".
3. Câu hỏi product×method → xuất **test recipe**: angle + hook + cấu trúc + kênh + trang nguồn từng mảnh.
4. Cuối bài, 2 dòng bắt buộc:
   - **Brain chưa biết:** gap thật sự liên quan câu hỏi (evidence không phủ được phần nào? trang nào thiếu data?). Không có gap → ghi "không có gap đáng kể".
   - **⚠️ Stale:** evidence nào có mark `STALE >45d` → cảnh báo user là claim có thể cũ. Không có → bỏ dòng này.

## Cấm
- KHÔNG mở quá 3 file cho 1 câu hỏi (ladder đã chọn đúng file rồi).
- KHÔNG trả lời từ trí nhớ của model khi evidence có sẵn — evidence thắng.
- KHÔNG bịa wikilink.
