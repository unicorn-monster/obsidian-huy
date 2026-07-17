---
type: clip
date: 2025-11-09
source: "https://cream-group-bf6.notion.site/How-I-m-Using-Claude-to-Find-Winning-Ecom-Google-Ads-Keywords-35f71e56950881e3888fcb66ef05472b"
author: "@eCom_Amin"
title: "How I'm Using Claude to Find Winning Ecom Google Ads Keywords"
---
Concrete Claude-Projects setup (not a framework — the actual custom instructions, files, and weekly cadence) for running Google Ads search-term analysis as a persistent AI agent instead of one-off chat prompts.

## Why a Project, not a regular chat
Keyword analysis isn't one-shot — you want an agent that carries account structure, target CPA ranges, product catalogue, negative-keyword history, and competitive landscape across sessions. Regular chat starts from zero every time; a Claude Project builds institutional knowledge. Requires Claude Pro ($20/mo) — free tier lacks Projects and the context length needed for full search-term reports.

## Setup — exact custom instructions template
Project name pattern: "Google Ads Keyword Agent - [brand name]". Custom instructions (verbatim structure, adapt bracketed fields):
```
you are an expert google ads keyword research specialist for DTC ecom brands
selling [product category].
your role is to analyze search term reports and provide strategic keyword
expansion and optimization recommendations.

context:
- DTC ecommerce, primarily [niche]
- products: [list main products]
- target audience: [describe ICP]
- primary goal: maximize qualified purchases while eliminating wasted spend
- account structure: 3-layer search system (TOF symptom keywords,
  MOF category/comparison/transactional, BOF branded, conquesting)

when i provide search term data, you will:
1. categorize every search term by funnel layer (TOF/MOF/BOF/conquesting)
2. identify high-performing terms not yet added as keywords
3. identify wasted spend terms that should be negatives
4. identify emerging keyword themes that warrant new campaigns or ad groups
5. identify competitor brand names appearing that signal conquesting opportunities
6. provide bid adjustment recommendations based on performance data

output format:
HIGH PRIORITY ACTIONS:
- keywords to add immediately (with recommended match type and why)
- negatives to add immediately (with estimated monthly waste prevented)
- bid adjustments (with reasoning)

STRATEGIC INSIGHTS:
- what's working (top performing keyword themes with data)
- what's not working (underperforming themes with diagnosis)
- untapped opportunities (keyword gaps, emerging queries, geographic signals)
- competitive intelligence (competitor names appearing, overlap signals)

NEXT STEPS:
- specific testing recommendations for next 2 weeks
- new landing page needs identified from search intent patterns
- campaign restructuring suggestions if applicable

always provide specific reasoning for every recommendation.
never recommend broad match unless the keyword has 10+ conversions on exact match.
flag any branded terms appearing in non-brand campaigns.
flag any search terms suggesting the wrong audience is being reached.
```

## 5 knowledge-base files to upload (persistent reference context)
1. Negative keyword master list — every current negative, so the agent never re-recommends an excluded term.
2. Product catalogue doc — names, features, target keywords, margins, target CPAs.
3. Landing page inventory — which page exists for which keyword theme, so the agent flags intent with no matching page.
4. Benchmark doc — target CPA by campaign layer, acceptable ROAS ranges, quality-score targets, impression-share goals.
5. Competitive landscape brief — main competitors, positioning, which competitor terms are already targeted vs not.

## Weekly workflow (5 steps, ~45 min/account, down from 3-4h manual)
1. Pull last-7-days search term report + auction insights for key campaigns + any quality-score changes.
2. Feed to the Project with: `weekly analysis for [brand], [date range]. focus on: new keyword opportunities, negative keyword waste, any competitive shifts in auction insights, and quality score changes that need attention.`
3. Review high-priority actions → add keywords/negatives, adjust bids, flag new landing-page needs to content team.
4. Log what was implemented vs deferred as a note in the Project conversation — builds a decision history the agent references in future runs.
5. Monthly: upload a 90-day search-term report for a deeper review that catches slower trends, seasonality, and campaign opportunities weekly data misses.
Claimed edge over manual review: the agent processes every row in the report; a human inevitably skims.

## What the analysis actually returns (concrete examples from the source)
- **Keyword additions:** e.g. a broad-match-triggered term converting 7.2% but not yet a dedicated keyword → promote to exact match in the right funnel-layer campaign with ad copy addressing that specific query, not the generic copy it's currently matching to.
- **Negative identification (biggest $ saved):** scans every term for waste — competitor names with 0 conversions, pure-informational queries, wrong-language queries, job-seeking queries matching a product-sounding term. Claimed case: $2,800/month waste found across 47 negatives a weekly manual review had missed, including a subtle "wholesale"/"bulk" cluster (resellers, not consumers).
- **Strategic pattern insights:** "near me" modifiers outperforming generic terms → build location ad groups; professional/technical terminology (e.g. "bisglycinate") converting higher than consumer language despite lower volume → mirror that vocabulary in ad copy for the more valuable segment; recurring un-targeted competitor names → build a conquesting campaign; geographic clusters in converting terms → geo bid adjustments.
- **Competitive intelligence:** flags every competitor brand name appearing in search terms; repeated appearance = audience-overlap signal worth a conquesting campaign; zero-conversion competitor-name clicks → straight to negatives.

## Advanced configuration
- **Layered analysis by campaign:** upload TOF/MOF/BOF/conquesting search-term reports separately, each judged by layer-specific criteria (TOF = symptom clusters + advertorial signals, MOF = conversion rate by sub-type + comparison queries, BOF = impression-share defense + competitor incursions, conquesting = competitor-specific performance + new competitor discovery).
- **Landing page gap analysis:** feed landing-page inventory alongside search terms, ask "which high-converting terms have no matched page?" Claimed case: a specific long-tail term converting 3.1% on a generic page → built a dedicated page for it → conversion rate to 7.4%.
- **Competitive creative analysis:** when the agent flags a competitor from auction insights, pull their live ads from adstransparency.google.com, screenshot them, upload to the Project, ask for angle patterns + counter-positioning.
- **Bid pacing:** feed spend/conversion data alongside search terms, ask for dayparting/device/geographic patterns → bid adjustments grounded in actual data.
- **Seasonal pattern recognition:** emerges naturally once several months of analyses accumulate in the Project's history (e.g. flags last year's October search-volume spike and recommends pre-empting it).

## Explicit caveat from the author
Requires actually knowing Google Ads — the agent accelerates and catches misses, it doesn't replace judgment. It can recommend a keyword that's directionally right but wrong for brand positioning, a bid change too aggressive for current budget, or miss competitor nuance. Every output should be sanity-checked, not auto-applied.

— Amin (@ecom_amin), Ad Imperium. P.S. offer: Book a call — commercial CTA, not wiki-relevant.
