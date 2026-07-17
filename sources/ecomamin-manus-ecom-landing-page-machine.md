---
type: swipe
date: 2025-11-09
source: "https://docs.google.com/document/d/1Peu8XMObwNaMpoxv0ldSDmIpGGUVQq3aJUImJ7eaHx0/edit"
author: "@eCom_Amin"
title: "THE +$20M ECOM LANDING PAGE MACHINE — building pages with Manus AI"
---
5 landing-page types matched to search intent, each with a ready-to-use Manus AI build prompt, plus bulk-creation economics and a funnel-stacking compounding model. The type-matching logic itself (comparison/advertorial/quiz/listicle/PDP by intent) overlaps with [[presell-pages]] and [[funnel-and-landing]] — this source's value-add is the AI-prompt templates and the stacking math.

## 5 page types × when to use × claimed conversion range
Comparison page — `[competitor] vs`/`alternative` searches, already-educated buyer choosing between brands. 12-18%. Advertorial — problem-research queries ("how to fix back pain"), not yet shopping. 6-10% (Amin's own case: 8.7% vs 2.1% PDP same keyword). Quiz funnel — multiple product variants causing choice paralysis. 11-15%. Listicle — "best X"/"top X" queries wanting curated picks. 7-12%. Product page — "buy X"/branded high-intent only. 8-14%.

## Manus AI prompt template per page type (condensed structure, not verbatim)
**Comparison:** feed both products' details → ask for headline (objective "X vs Y" framing) → intro paragraph → side-by-side table (price/features/guarantee/shipping/rating/best-for) → an "honest assessment" section instructed to concede 2-3 real competitor strengths before explaining 3-4 specific advantages → CTA with guarantee + trust badges. Explicit design instruction: clean white bg, comparison table as the hero element.
**Advertorial:** feed product + target-customer's problem → ask for a question-format headline naming their specific problem → opening paragraph that empathizes and promises a solution → 300-400 word "problem explanation" section (cause + why common fixes fail + what to look for instead, subheaded every 100-150 words) → solution/product intro explaining the mechanism → proof section (2-3 testimonials + any studies) → risk-reversal (guarantee/shipping) → soft CTA. Explicit tone instruction: helpful/educational, not salesy; blog-style layout.
**Quiz funnel:** feed the product variants + which use-case each fits → landing intro ("not sure which is right for you? take our 2-min quiz") → 5-8 questions (goal/situation/experience-level, single-select) with a progress bar → results page that explains WHY the recommended product matches the specific answers given (not just names it) + a testimonial from someone in a similar situation + secondary "see other options" link.
**Listicle:** feed your product + 3-4 real competitors → headline ("The 5 Best X for Y, [Year] Tested") → intro explaining the testing/evaluation methodology → per-product entries (name/image/rating/one-line summary/150-200-word review/pros/HONEST cons/best-for/price/CTA), your product ranked #1 or #2 with an honest 4.5-4.8★ (not 5.0 — reads fake) → summary comparison table → conclusion naming the overall winner.
**Product page:** author's explicit note — don't bother generating this with AI, just optimize the existing Shopify/Woo template directly (lifestyle hero image, benefit-not-feature bullets, UGC photos, 50-200+ reviews, FAQ, guarantee detail, "add to cart" copy-testing, real scarcity/social-proof numbers if true).

## Page-type-to-traffic-source matching table
By keyword intent: `[competitor] alternative` → comparison. `how to fix [problem]` → advertorial. `best [category]` → listicle. `which [product] for [use case]` → quiz. `buy [product]` → product page. By traffic source: Google Search research queries → advertorial/listicle; Google Search comparison queries → comparison page; Google Shopping → product page; Meta/IG cold → advertorial; retargeting → product page.

## Bulk-creation strategy
Don't build 1 page — extract every distinct angle/pain-point/use-case a product serves (prompt: feed the product page to an LLM, ask it to extract 50+ specific landing-page-worthy angles), organize by page type, batch-generate in Manus (validate quality on 3 pages first, then "create the remaining N using the same format"), then point each Google Ads ad group at its matching page 1:1. Cited economics: ~50 pages via a developer ≈ $15,000/3 weeks vs. ≈$0/a few hours via AI — the gap is framed as the reason to rebuild/iterate pages freely instead of treating each as a fixed cost.

## Testing/kill framework
Collect ≥100 visitors/page before judging. >8% conversion = winner, scale traffic. 4-8% = iterate (test headline/CTA/image/social-proof-placement variations). <4% after iteration = kill or rebuild with a different angle, don't keep feeding it ad spend.

## Funnel-stacking compounding math (illustrative model, not a guaranteed rate)
Layer 1 (advertorial, cold traffic): 6% convert immediately. Layer 2 (email sequence to non-buyers who opted in): 30% of remaining convert within 14 days. Layer 3 (retargeting to email non-openers/non-buyers): 20% of remaining convert within 30 days. Compounded: 6% + (94%×30%) + (66%×20%) = 6% + 28.2% + 13.2% = **47.4% total eventual conversion** from the original cold-traffic pool, if every layer is actually built (advertorial → email capture/sequence → retargeting → a warm comparison-page close). The number is a multiplication-of-layers illustration, not a benchmark to expect out of the box.

— Amin (@ecom_amin, ad-imperium.com)

P.S. offer: DFY funnel build — commercial CTA, not wiki-relevant.
