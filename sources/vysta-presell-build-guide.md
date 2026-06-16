---
type: clip
date: 2026-06-16
source: "https://growwithvysta.notion.site/presell-pages"
author: "Vysta (growwithvysta)"
title: "How we build presell pages that convert at 8-12% (the native ads funnel)"
---

# how we build presell pages that convert at 8-12% (the native ads funnel no agency will show you)

"this is the exact presell architecture we use across 150+ ecom brands. we produce 50+ custom landing pages per week using this system. comparison and listicle pages convert 2-3x better than sending traffic to a homepage."

## why presell pages exist
most brands run ads directly to a product page. works for warm traffic. but cold traffic (Demand Gen, YouTube, native) sent straight to checkout → CPA explodes, ROAS tanks. it's not a media problem, it's a landing page problem.

a presell page (prelander / advertorial / editorial) sits between ad and product page. job: educate, build trust, warm the visitor before they see a price.

the math:
- cold traffic to PDP: 1-3% conversion
- cold traffic to presell → PDP: 8-12% presell CTR, 4-7% end conversion
- advertorial subdomain tests moved CPA 30-40%

## the 4 presell formats (and when)
| format | best for | traffic temp | typical CTR to PDP |
|---|---|---|---|
| advertorial | single-product hero, pain-point storytelling | cold (YouTube, Demand Gen, native) | 8-15% |
| listicle | category buyers, comparison shoppers | cold→warm (Demand Gen image, Shopping) | 10-18% |
| quiz funnel | complex products, bundles, personalization | cold (YouTube, social) | 15-25% (to result page) |
| comparison page | competitor conquesting, branded alternatives | warm (Search, competitor keywords) | 12-20% |

## format 1: advertorial — 10-section wireframe
looks/reads like editorial article, designed to move reader to ONE action: click to product page.
1. **headline** — repeat ad's promise. 1:1 congruence ad↔first screen non-negotiable. editorial serif font (Georgia/Playfair/Lora) to differ from brand store. Formulas: "a simple [daily habit] that helps with [pain] (backed by [authority])" · "why [persona] are switching to this [odd descriptor] for [benefit]" · "we tested [product] for 30 days — here's what surprised us" · "i stopped using [common solution]. here's what happened" · "the [science] trick that finally made [pain] manageable" · "before you buy [category], read this".
2. **sub-headline** — one line expanding promise + previewing proof. muted gray.
3. **credibility block** — NOT brand speaking, editorial voice: author persona + headshot ("by Sarah Mitchell, wellness editor") / "reviewed by [credential]" / founder story / third-party reviewer. light gray byline card.
4. **problem setup + NEW insight** — add a mechanism/insight they haven't heard, something repeatable to a friend. open bold surprising stat → why true → transition "so what actually works?". short paragraphs.
5. **mechanism (why THIS works differently)** — formula: [specific feature] + [how it works mechanically] + [why it matters]. tangible, not miracle. 2-col "old way (red X)" vs "[product] way (green ✓)".
6. **demonstration/proof** — pick 3-4: before/after (if compliant), GIFs, ingredient close-ups, side-by-side vs competitor, review screenshots, star ratings + count, "as seen in" (only if real), UGC photos. aggregate rating banner ("4.8/5 from 2,847 reviews").
7. **micro-CTAs (every 2-3 scrolls)** — don't wait for bottom. sticky mobile button.
8. **offer block** — lifestyle product image, price + discount, bundle ("most popular: 3-pack save 20%"), guarantee badge, shipping, payment icons. feel like a deal they discovered.
9. **FAQ** — top 3-5 REAL objections (from CS tickets, ad comments, 3-star reviews, Reddit). accordion. final FAQ = purchase objection "what if it doesn't work?" → guarantee.
10. **compliance footer** — "this page is an advertorial... results may vary" + privacy/terms/refund links + contact + FDA disclaimer if health.

## format 2: listicle
feels objective → reader thinks curated list, not sales page.
- title: "[number] best [category] for [use-case] in 2026 (tested & reviewed)"
- intro 2-3 sentences set criteria ("we evaluated 23 [products] across price, durability, [metric]")
- structure: items 1-2 other products (fair pros/cons) · item 3 or 4 = YOUR product (best for a SPECIFIC segment, NOT "best overall" — kills credibility; longest review) · items 5-7 others (keeps balance)
- each item: name+image, price, 2-3 sent summary, "best for: [use-case]", 3 pros, 1-2 cons (yes even your own)
- comparison table (your product wins on 2-3 metrics that matter most)
- verdict: "if you want [outcome], [your product] is the pick because [reason]. if budget is the concern, [product X] is a solid alt."
- CTA "check current price →"

## format 3: quiz funnel
quizzes convert highest — psychological investment. after 4-6 questions they're committed to seeing their "result".
- 4-6 questions max, each segments to a product rec: primary problem → severity → tried before → preferences → budget → urgency
- result page: "based on your answers..." personalized headline, restate their profile, recommended product + WHY it fits, matching testimonial, CTA
- progress bar +20-30% completion
- Shopify: Octane AI / RevenueHunt / Typeform / custom Liquid+JS
- real examples to study: colonbroom GLP-1 quiz, bioma weight loss, fitflow intermittent fasting, dog food expose survey, herbodhi cortisol quiz

## format 4: comparison page (highest intent)
someone searching "[brand] vs [competitor]" is ready to buy, needs final push.
- find targets: Google Search Console "[brand] vs" queries, competitors mentioned in reviews, Shopping auction insights, Reddit
- structure: headline "[product] vs [competitor]: honest breakdown after testing both" · TL;DR verdict one sentence · spec table side by side · 3 pros EACH (admitting competitor strength builds massive trust) · "who should choose which" by use-case · 3 external citations · CTA
- URL: /compare/[product]-vs-[competitor]

## tech stack: Shopify + Funnelish
- Funnelish for: advertorial (faster, better page speed, no store nav), listicle, quiz (native logic). Shopify page if SEO/organic matters.
- custom editorial subdomain (reviews.brand.com) for brands spending $30K+/day: separates editorial from store, dedicated tracking, second ad account, protects main store from policy risk on aggressive angles.
- Buy Button embed for checkout without leaving presell.
- Shopify on-domain: Replo (drag-drop, inherits checkout) or custom Liquid template (remove header/footer nav).

## page speed (non-negotiable)
cold traffic zero patience. >2s load on phone = burning spend.
| metric | target |
|---|---|
| LCP | < 2.0s on 4G |
| CLS | < 0.1 |
| total page weight | < 500KB |
| time to interactive | < 3.0s |
image workflow: resize (≤1200px full, 800 half, 400 thumb) → compress TinyPNG/Squoosh (<100KB) → WebP + JPEG fallback → lazy-load below fold → hero <150KB preloaded. limit fonts to 1-2 weights (~50KB each).

## CTA placement system (doubles CTR)
#1 mistake: one CTA at bottom. most never scroll there.
| position | scroll depth | trigger | copy |
|---|---|---|---|
| first | ~40% | after mechanism | "see if it's right for you →" |
| second | ~65% | after proof | "check current availability →" |
| third | ~85% | after offer | "get [product] now →" |
| sticky mobile | always | after 30% scroll | "view product →" |
CTA copy — NEVER "buy now / add to cart / shop now / order today" (too aggressive for cold). ALWAYS "see if it's right for you", "check current availability", "see the full details", "learn more about [product]", "view pricing and options". CTA = NEXT STEP in research, not purchase commitment.
button: 100% mobile / 50-60% centered desktop, 16-18px bold, high contrast, 4-8px radius, sub-text "free shipping + 30-day guarantee".

## the congruence rule (where most pages fail)
ad → presell → PDP must tell ONE continuous story. if ad says "$39 pillow that replaced my $200 memory foam", presell headline references that exact claim, PDP shows $39 prominently. any disconnect = bounce.
- basic: 1 presell per ad angle. URL /presell/[angle-name]. same body, different H1 + hero per angle.
- advanced (dynamic congruence): swap H1 + hero by utm_content via JS. improved presell CTR 15-25%.

## tracking & metrics
| metric | target |
|---|---|
| presell CTR (clicks to PDP) | 8-12% |
| EPC | revenue / outbound clicks |
| scroll depth 50%+ | > 60% of visitors |
| time on page | > 45s |
| bounce rate | < 55% |
- UTM: utm_campaign=[type]_[angle]_[date], utm_content=[creative-id]_[format]
- GA4 events: presell_view, presell_scroll_50/75, presell_cta_click, presell_outbound_click, presell_time_45s
- cross-domain Funnelish→Shopify: GTM linker, or platform (wetracked.io / Trackbee / Blotout)
- heatmaps mandatory: Microsoft Clarity / Hotjar — watch scroll-death, rage clicks, mobile vs desktop

## weekly production cadence (50+ pages/week)
- **mon — review & kill:** pull last week, kill any page <5% CTR to PDP, find top 3 to iterate, check heatmaps for scroll-death
- **tue-wed — build:** 3-5 new pages from winning ad angles. rule: new angle = new presell page. duplicate best template, swap H1/hero/mechanism
- **thu — optimize winners:** A/B headlines (one element at a time), CTA copy, add/remove proof per heatmap, check speed
- **fri — launch & pair:** publish into campaigns, pair each presell with its ad creative, set up tracking, brief media buyer

## compliance (gets pages disapproved)
ALWAYS: advertorial disclosure every page · accurate pricing (match PDP exactly) · real testimonials + "results may vary" · clear shipping timelines · functional return/refund links · contact info.
NEVER: fake news logos/publication branding you don't own · before/after for health/weight loss (Google policy) · miracle/medical claims ("cures/treats/heals") · fake scarcity ("only 3 left!") · impersonating journalists/doctors/celebrities · fake countdown timers that reset · AI images from ChatGPT/DALL-E/Sora (Google flagging AI imagery) · copied product descriptions/images from AliExpress or competitors.
