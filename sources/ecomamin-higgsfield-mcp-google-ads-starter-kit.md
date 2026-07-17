---
type: clip
date: 2025-11-09
source: "https://cream-group-bf6.notion.site/Higgsfield-MCP-Claude-Google-Ads-Starter-Kit-35671e56950880f1a221e5883b6f81a2"
author: "@eCom_Amin"
title: "Higgsfield MCP + Claude + Google Ads Starter Kit"
---
Setup + workflow for using Higgsfield (AI image/video generation) as an MCP tool inside Claude to produce Google Ads creative (shopping images, Shorts/PMax video, display) at production speed, plus 10 ready-to-run animation prompt templates by category.

## Setup — 3 paths
- **Path A, Claude Cowork (fastest):** higgsfield.ai/mcp → Connect → authenticate. No config, immediately available.
- **Path B, Claude Code (technical/programmatic):** add to `~/Library/Application Support/Claude/claude_desktop_config.json`:
```json
{
  "mcpServers": {
    "higgsfield": {
      "command": "higgsfield-mcp",
      "env": {
        "HIGGSFIELD_API_KEY": "your-key",
        "HIGGSFIELD_SECRET": "your-secret"
      }
    }
  }
}
```
API key/secret from cloud.higgsfield.ai/api-keys. Restart Claude Code.
- **Path C, Python automation:** clone github.com/geopopos/geo_higgsfield_ai_mcp, `pip install`, set credentials as env vars.

5 tools across all paths: `generate_image`, `generate_video`, `create_character`, `get_generation_status`, `list_characters`. Credits: $1 = 16 credits, free tier = 150 credits/month.

*(Note: package/repo names and pricing are as of the doc's Nov 2025 writing — re-verify before setup.)*

## The 5-phase Google Ads creative workflow (Higgsfield touches phases 2-3)
1. **Market research** (no Higgsfield) — Claude Cowork scrapes competitor sites, extracts keyword strategy, identifies winning angles, maps LP structure → creative brief with angle priority + product moments to feature.
2. **Product image generation (Soul model)** — when the client lacks strong photography, generate hero shots feeding shopping-feed images + static display. Prompt pattern: `product photography, [product description], white background, 3/4 angle showing both front and side label, sharp focus on label text, professional studio lighting, no text overlays, 1200x1200, optimised for google shopping`.
3. **Video generation (Seedance 2.0 or Kling 3.0)** — uses the Phase-2 product image as reference anchor. Seedance 2.0 = cinematic product animation (default choice); Kling 3.0 = motion-heavy/physics-simulation content. Workflow: generate hero shot via Soul → upload as reference to Seedance → prompt for motion direction → generate at 9:16 (Shorts), 16:9 (YouTube pre-roll), 1:1 (Display).
4. **Asset organization** (no Higgsfield) — pull returned URLs into a shared folder, tag by campaign type (Shopping/Shorts/Display/PMax), organize by angle so the media buyer knows which LP each variant maps to.
5. **Campaign deployment** — every creative variant must point to the LP matching its angle (the sleep-supplement Short → sleep advertorial, not homepage; the product demo → product page with the matching claim above the fold). Congruency principle, same logic as ad↔LP message-match elsewhere in the wiki.

## 10 ready-to-run animation prompt templates (paste into Claude w/ Higgsfield MCP active, replace bracketed vars)
**Supplements:** (1) Water/liquid pour reveal over bottle, midnight-blue/amber palette, 9:16, 12s loopable. (2) Particle-dissolve awakening — golden particles rising from bottle, camera pulls back to reveal bedroom at golden hour, 9:16, 15s.
**Pet care:** (3) Before/after split-screen coat reveal (dull desaturated vs glossy saturated), product as dividing element, 9:16, 10s loopable. (4) Playful product bounce with cartoon physics (Kling 3.0), grooming-kit elements fan out around product, 9:16, 8s.
**Skincare:** (5) Cellular-renewal microscopy — macro serum pour + skin-cell-cross-section renewal insert shot, clinical-luxury white/gold, 9:16, 12s. (6) Morning-ritual reveal on marble counter, golden-light push-in, water droplets, 9:16, 15s.
**Home goods / ergonomics / fitness / collagen:** (7) Satisfying self-assembly sequence (Kling 3.0), overhead flat-lay → 3/4 beauty shot, 9:16, 10s. (8) Spine-alignment x-ray/blueprint overlay for ergonomic furniture, authoritative medical white/navy, 9:16, 12s. (9) Energy-pulse burst + athlete-silhouette training cut for pre-workout, electric palette, 9:16, 12s. (10) Anti-aging time-lapse skin-tightening metaphor (NOT literal skin footage) for collagen, warm natural palette, 9:16, 15s beauty-editorial.

## Batch-generation session prompt (generates full campaign-launch asset set in one session)
```
i'm generating creative assets for [brand] in [product category].
the product is [description]. the primary ad angle is [angle from research].
target audience is [demographic]. brand palette is [colours].

i need:
- 3 shopping feed product images (white background, 1200x1200, soul model)
- 4 youtube shorts animations (9:16, 12-15 seconds, seedance 2.0)
- 2 display banner source images (lifestyle, 1:1, soul model)
- 1 youtube pre-roll video (16:9, 15 seconds, seedance 2.0)

generate these in sequence. for each asset, describe what you're generating
before generating it so i can redirect if needed. return asset urls
organised by asset type.
```
Claimed output: 10 assets across all format requirements in one 20-30 min session — work that previously needed a production team + several days.

## Creative → performance feedback loop (the strategic layer most brands skip)
When an animation style/motion-treatment performs, its prompt becomes the template for the next batch — vary only secondary elements (palette, camera angle, duration), not the core motion treatment that's proven. Case: a supplement client's "particles rising from bottle" motion consistently outperformed alternatives → every subsequent generation used that motion as baseline, producing 40+ variants of the proven format over 3 months instead of constantly re-testing unvalidated treatments. Thesis: systematic prompt-outcome tracking builds a proprietary, compounding prompt library that becomes a creative asset in itself — not just a one-off image generator.

## Monthly creative production cadence
Week 1 Research (Cowork market-research session → creative brief w/ angle priority). Week 2 Batch generation (10-15 assets across formats for validated angles, deploy). Week 3 Performance review (which angles pull, cross-reference search-terms report for new keyword-to-creative mapping). Week 4 Iteration batch (8-10 variants of top performers, kill underperformers, refresh fatiguing creative with new motion treatments). Claimed output: 40-60 new assets/month at ~3-4h active production time — framed as creative infrastructure agencies would charge $15-20k/month to replicate manually.

## Author's framing of why this matters
Campaign structure and audience targeting both hit a ceiling quickly; the variable claimed to separate 7-figure from 8-figure ecom brands is creative-iteration velocity — how fast you can test/identify/iterate on angles. The templates are starting points, the batch workflow is the engine, the feedback loop is what turns output into a compounding proprietary asset.

— Amin (@ecom_amin). P.S. offer: Book a call — commercial CTA, not wiki-relevant.
