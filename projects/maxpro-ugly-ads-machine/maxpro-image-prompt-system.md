---
date: 2026-06-16
status: phase-0
product: maxpro
---

# MaxPro image-prompt system

Execution ảnh cho [[maxpro-ugly-ads-plan]]. Học từ swipe thật: `/Users/quanghuy/Claude Project/Kittysups/ugly-ads-winning` (9 winner: bụng "i hate the way i look", răng hô, đầu hói, áo ướt mồ hôi, paw đỏ nứt, chó nằm vet). Tool-agnostic (Nano Banana Pro / Gemini / Kie.ai).

## Định nghĩa ugly ad (LÕI — đừng quên)
**1 ảnh raw chụp điện thoại của VẤN ĐỀ/nỗi đau. Ảnh tự nó LÀ hook. 0 chữ, hoặc tối đa 1 dòng cực ngắn.**

Winning ugly = xấu, mộc, thật, khó chịu/đáng báo động → dừng scroll bằng VISUAL, không bằng chữ.

## 3 luật vàng
1. **Ảnh raw vấn đề = hook.** Chủ thể = nỗi đau/sự cố/con vật khó chịu, lấp đầy khung. Như camera-roll thật.
2. **Chữ = 0 (mặc định).** Nếu có: 1 dòng cực ngắn viết tay/plain HOẶC red circle + arrow. KHÔNG block chữ, KHÔNG typography đẹp.
3. **Ratio = 1:1 LUÔN.** Mọi prompt kết `square 1:1`.

## ❌ KHÔNG dùng (đã test, bạn loại)
- FB-post screenshot mockup (UI giả) — "ugly dạng post"
- Meme text-on-image nhiều chữ (chữ át ảnh)
- Scene dàn dựng đẹp / product-in-use bóng bẩy
- Before/after thiết kế 2 panel
- Bất kỳ studio polish / logo / graphic design nào

## Ugly checklist (≥6/8 mới dùng)
- [ ] Ảnh raw điện thoại: noise/grain, hơi out-focus hoặc motion blur
- [ ] **Vấn đề/nỗi đau lấp đầy khung** (không phải product đẹp)
- [ ] Khung lệch, crop vụng kiểu chụp vội
- [ ] Nền đời thật (sàn gỗ/tile/sofa), lộn xộn nhẹ
- [ ] Ánh sáng thật: flash gắt HOẶC overhead/window phẳng
- [ ] **0 chữ, hoặc ≤1 dòng cực ngắn** + có thể red circle/arrow
- [ ] Không logo, không UI giả, không design pro
- [ ] Square 1:1

## Kho raw-shot cho dog nails (chọn để gen)
Overgrown/curled nail macro · bleeding quick sau cú clip · móng quặp đâm vào đệm · móng nứt/splinter · chó hoảng mắt trợn lúc bị giữ clip · móng dài xoè bàn chân trên sàn gỗ.
→ Stage 2-3 + comfort: bám nail-problem + anxiety, KHÔNG đẩy injury/disease nặng ([[compliance]]).

## Andromeda distinctness
5 ảnh/script = 5 **chủ thể/góc raw KHÁC nhau** (không phải 5 biến thể 1 ảnh) → 5 Entity ID ([[maxpro-ugly-ads-plan]]).

## Lưu ý
- **Avatar page (profile pic) ≠ ad creative.** Avatar = chân dung persona (xem [[maxpro-persona-network]]); ad creative = raw problem-photo. Hai thứ khác nhau.
- **Meta** flood AI static OK ([[media-buying]]); **Google** flag ảnh AI → ảnh thật nếu mở Demand Gen.
- Product shot (khi cần) = MaxPro thật, trắng, 3-port cap ([[maxpro-product-truth]]) — nhưng product shot KHÔNG phải ugly-ad hook, dùng hạn chế.
