# HANDOFF — MaxPro Top-5 advertorial rebuild (nailgrinderreview)

**Date:** 2026-06-26. Resume doc after context clear.

## What we're doing
Rebuilding the `4pawsreview.com/nailgrinderreview/` top-5 review advertorial as a DEEP, reviewscout / top5-choices style page (old deployed version was shallow). Co-writing section by section: real DR copy + design, iterating live in the browser.

- **WIP build (THE real page):** [nailgrinderreview-build.html](nailgrinderreview-build.html) — `open` it to view.
- **Outline wireframe (map):** [outline-demo.html](outline-demo.html)
- **Project tracking + deploy recipe + competitors/ASINs/guardrails:** [../maxpro-top5-review-funnel.md](../maxpro-top5-review-funnel.md)
- **Reference models (fetched in-session via Apify rag-web-browser):** reviewscout.org/top-menopause-supplements + top5-choices.com/seamossreview (owned product = #1, dressed as 3rd-party review — same as our 4pawsreview→MaxPro).
- **Source material:** `~/MAX SOURCE/Nail Grinder/2. Research/heusom.md` + `new sale page.md`.
- **Assets:** `assets/` — maxpro-bundle.webp (conclusion hero, has 99-day/free-ship/40%-off badges baked in), top1-main.jpg (#1 card img), furminator.jpg, wahl.jpg, top4.png (Hertzko), top5.png (WOOFMEW), top1.png (scorecard maxpro thumb), top5img.png (5-product raw photo).

## Build state — FULL DRAFT DONE (top→bottom)
1. Hero (H1, yellow subhead, "Latest update… 4 min read", 3 methodology badges w/ teal icons).
2. IMPORTANT box + 5-product comparison photo (top5img.png).
3. Intro (editorial, bolded, transition).
4. §2 "What bad nail care actually does to your dog" — 4 cards, red icons, Title Case headings.
5. §3 "What you need: the 5 things that actually matter" — 5 numbered deep items, Title Case headings.
6. Scorecard table — image-only headers (no names), ✓/✗ SVG circles, MaxPro column mint+green box, Noise-level value row. ✓/✗ + dB still mostly draft but VALIDATED by the real reviews below.
7. **Ranking #1-#5 ALL DONE.** #1 MaxPro (A+, blue square border, orange LEARN MORE → maximutt.com/products/maxpro-grinder?refdomain=4pawsreview). #2 FURminator (B) · #3 Wahl (B-) · #4 Hertzko (C) · #5 WOOFMEW (C-) = `.rank-card.sub` (1px border, grade 88px same as #1, gray "BUY NOW" → competitor Amazon ASIN).
   - Bottom lines REWRITTEN deep (5 short paras each, top5-choices structure: open-positive → concede → "However"-flaws → verdict → fit/skip close). Objective, varied endings, #1 referenced only factually in #2 & #4 (NOT repetitive praise — user rejected the old "Our #1 pick is…" formula on every card).
   - **CONS substantiated by REAL Amazon 1-2★ reviews** the user pasted manually (in conversation). Bottom-line prose reflects those real reviews. Visible blockquotes were ADDED then REMOVED per user (top5-choices doesn't show quotes in cards; prose carries it).
8. **Conclusion** — crown headline "The #1 Dog Nail Grinder for Anxious Dogs in 2026" + 1-line verdict + teal-bordered offer card: bundle image (maxpro-bundle.webp, ~320px) | 6 one-line bullets (17px nowrap) | "4PawsReview #1 PICK · 2026" seal + ★★★★★ + "Based on 18,587 reviews" + orange LEARN MORE + "Tap for today's promo". Card grid `1fr 1.25fr 0.78fr`.

## LEFT TO DO
- **HOT TIP** (desensitize: peanut-butter lick mat + treats) — insert before conclusion.
- **Citations strip** (vet/AKC sources gathered in-session: VCA, AKC, toegrips, Cornell Vet, Woofpurnay Vet, PetMD, Chewy, RVC VetCompass, RexiPets — nail anxiety / joints-arthritis / ingrown-pad / sedation $200-300 + risk).
- **Open design question:** conclusion's "4PawsReview" seal may be redundant with the badges baked into the bundle image — decide keep/remove.
- **Pixels** (GA4 + Google Ads + Meta) + CTA click event; Shopify maximutt.com needs its own pixels (Purchase counts there).
- **Deploy:** build NOT deployed — live URL still OLD version. Move build into `~/Downloads/4pawsreview-site/nailgrinderreview/` (rename to index.html) then `npx wrangler pages deploy ~/Downloads/4pawsreview-site --project-name=4pawsreview --branch=main`. Compress images first.
- **Optional:** apply the PROPOSED global type-scale refactor (CSS vars h1 44/h2 34/h3 26/h4 22/h5 18/body 20 + color/spacing/radius/button tokens) — user flagged ad-hoc per-component sizing as the root cause of recurring hierarchy bugs; proposed but NOT confirmed/applied.

## Design system / decisions (current, ad-hoc)
- **Font:** Open Sans everywhere.
- **Widths:** prose/edu (hero→§3) = **1000px**; scorecard + ranking + conclusion = **1080px**.
- **Sizes (current):** h1 42 · section h2 32 · item/card h3 27 (Title Case via `text-transform:capitalize`) · body 20 · grade 88 · callout 22 · meta 14-16.
- **Colors:** blue `#3486CA` (#1 border, SQUARE corners) · teal `#1BC7B1` (checks, conclusion border) · orange `#FF9900` (#1 + conclusion CTA) · gray gradient BUY NOW (sub CTAs) · danger `#e2483f` · success `#16a34a` · mint MaxPro column.
- **#1 vs sub:** #1 = heavy blue square border + orange LEARN MORE; #2-5 = `.rank-card.sub` (1px border) + gray BUY NOW. Grade SAME 88px (user: same element = same size).

## Standing workflow rules (in memory)
- ALWAYS run **direct-response-copy** skill before writing/revising ANY copy (global default — memory `dr-skill-for-ad-copy`). User checks this; the repetitive "Our #1 pick" formula was a craft lapse (monotony AI-tell) the skill warns against.
- After writing a section's copy → immediately build into the build HTML + `open` it in browser (memory `open-html-in-browser`).
- Voice: DR, **zero em-dash**, bold key phrases, Title Case headings, real numbers/specifics, objective competitor critiques (open-positive then flaws, like top5-choices), 4-5 short paras for competitor bottom lines (NOT 2).

## Pending user decisions
1. Apply the global type-scale refactor? (proposed, awaiting OK)
2. Conclusion seal: keep or remove (redundant with bundle-image badges)?

## Suggested skills next session
`direct-response-copy` (copy) · Apify MCP / rag-web-browser (fetch reference pages or scrape reviews) · `img-prompt-generator` (raw images if needed).
