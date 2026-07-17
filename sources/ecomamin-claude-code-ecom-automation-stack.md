---
type: clip
date: 2025-11-09
source: "https://docs.google.com/document/d/1FpD3dbC6m9skCIzOemGr46Hf7EoVKSrk5uh5Jn-OhE0/edit"
author: "@eCom_Amin"
title: "HOW TO AUTOMATE YOUR BRAND WITH CLAUDE CODE — the $200 AI stack replacing a $44k payroll"
---
System for building Claude Code + MCP-connected agents that run whole ecom operational functions (PPC, customer service, competitor intel, inventory, content, email, finance, supplier coordination) rather than being used as a chat-based drafting tool.

## The 4 levels of AI usage (framing)
Level 0 — search-engine mode: generic Q&A, 100% of execution still human, zero leverage ("write me a product description"). Level 1 — advisor mode: tailored advice, human still executes, ~10% time saved ("suggest 3 angles for this launch"). Level 2 — assistant mode: AI executes 40-60% of the actual task alongside the human, real time savings start here ("analyze competitor reviews and build a positioning strategy"). Level 3 — automation mode: AI handles 80-95% of the work unsupervised, human only reviews outputs/makes strategic calls ("monitor competitor pricing daily and adjust ours automatically within margin bounds"). Author's claim: most brands are stuck at 0-1; the margin difference comes from operating at 2-3.

## Why generic prompting plateaus — "context engineering" over "prompt engineering"
The model already knows general marketing/coding/writing knowledge — what it lacks is YOUR business (products, margins, customers, last week's decisions, what's in your PM tool). Three context layers to stack: business context (company/niche/revenue/team/tools/current priorities), individual context (your role/authority/focus/communication style), task context (what/why/success-criteria/constraints). The claimed shift: 2023 required skilled prompting to get good output; now the bottleneck is feeding the model the right CONTEXT, not phrasing the ask cleverly.

## 4-layer infrastructure
1. **Context database (foundation)** — a Supabase backend (or similar) storing meeting transcripts/decisions, PM-tool tasks, process docs, Slack history, customer interactions — a "living memory" the agent queries instead of starting from zero context every time.
2. **MCP server connections (the "hands and feet")** — connectors letting the agent actually take action, not just chat: Shopify (orders/products/refunds), Gmail (read/send), Google Ads API (read/write), Google Sheets, Merchant Center, Notion, Slack, Apify (scraping).
3. **Agent architecture (the "operators")** — one agent per business function, each with: a master prompt (business context), a system prompt (role definition), MCP tool access scoped to that role, and a skill library (documented SOPs).
4. **Skill library (the SOP system)** — each repeatable process written as an explicit numbered procedure the agent loads and executes step-by-step on a trigger phrase, rather than re-deriving the process each time (example given: a "competitor review analysis" skill = scrape reviews via Apify → extract sentiment/themes → identify gaps → save to Notion → Slack summary → create a task with top opportunities).

## Per-function agent breakdown (3 maturity levels each: advisor → assistant → automation)
**PPC:** Level 1 knows product/margin/ROAS-target/brand-voice/competitor data, reviews search-term reports and flags waste/opportunities on request. Level 2 gets write access to Google Ads + Merchant Center + Sheets, can build full campaigns (structure/ad copy/feed titles/negatives/bidding) from a single instruction, still asks for review before launch. Level 3 runs autonomously on a schedule (e.g. every 6h: scale campaigns >20% above target ROAS sustained 72h by +15% budget, pause campaigns <50% of target sustained 48h, adjust ad-group bids by performance band) with defined escalation triggers (any pause, budget jump >50% in one move, competitor activity, >40% metric anomaly, monthly strategic review) reported to Slack.
**Customer service:** L1 drafts email responses for human review. L2 gets Shopify+Gmail+Notion access, autonomously handles order-status lookups and small refunds/replacements end-to-end. L3 classifies intent on every inbound email and auto-resolves order-status/simple-refund/replacement/FAQ cases (claimed ~87% of volume), escalating only refunds over a threshold, legal/abusive language, or repeat-complainer patterns.
**Competitor intelligence:** daily automated scrape (Apify) of competitor pricing/reviews/new-products/ad-library activity, diffed against yesterday's stored snapshot, sentiment-analyzed, compiled into a Slack report with a suggested strategic response — replacing a manual market-research role.
**Inventory:** weekly (or daily) demand forecast from 90-day sales velocity + seasonality, calculates days-of-inventory-remaining per SKU, flags reorder-window SKUs, drafts POs sized to supplier MOQ/shipping thresholds for human approval, tracks shipment ETAs, updates stock on receipt.
**Content:** generates full product listings (title/bullets/meta/description in 3 angle-variants) from competitor-pattern analysis in under a minute; monitors conversion-rate drops per SKU and auto-drafts/A-B-tests replacement titles/images/descriptions against the drop.
**Email marketing:** builds personalized welcome/abandonment/win-back sequences keyed to signup source, monitors open/click/conversion by segment, proposes and runs subject-line/send-time A-B tests.
**Finance:** nightly pull from Shopify+ad platforms+accounting software to generate a daily P&L / unit-economics summary (revenue, CAC, ROAS, margin vs target), flags anomalies, and runs SKU-level true-profitability analysis (COGS + shipping + processing + returns + allocated ad spend) to catch products that are actually losing money once fully loaded.
**Supplier coordination:** auto-generates and sends POs on reorder-trigger, tracks shipment status via scheduled supplier check-in emails, updates inventory on arrival, all with human-in-the-loop only on exceptions.

## Cost claim (illustrative, not verified)
Monthly tooling: Claude Pro/API ~$20-100 + Supabase ~$25 + n8n ~$20-50 + MCP connections free ≈ **$115-195/month total**. One-time setup: $3-5k if outsourced, or 40-80 hours if self-built. Claimed monthly-salary equivalents replaced: PPC manager $6k, 4-person CS team $18k, ops manager $5.5k, copywriter $4.5k, email marketer $4k, financial analyst $6k = **$44k/mo** → net claimed savings ~$43.8k/mo ("30+ margin points"). Treat this framing as a sales pitch's illustrative math, not a validated case study — the actual leverage depends heavily on order volume, team size, and how much of each role's real work is genuinely SOP-able.

## Practical Claude Code / MCP setup steps (as of the doc's writing)
`npm install -g @anthropic-ai/claude-code` → `claude-code auth` with an Anthropic API key from console.anthropic.com → install per-need MCP server packages (`@modelcontextprotocol/server-google-ads`, `-shopify`, `-gmail`, `-google-sheets`, `-notion`, `-slack`) → obtain each platform's API credentials (Google Ads developer token + OAuth2, Shopify admin API token via "develop apps," Gmail/Sheets OAuth2 via Google Cloud Console, Notion integration token, Slack bot token with scopes) → configure `~/.claude-code/mcp-servers.json` with each server's command/args/env credentials → test each connection before building agents on top. *(Note: exact package names/CLI syntax should be re-verified against current Claude Code/MCP docs before use — tooling in this space changes fast and this doc is from Nov 2025.)*

## Master-prompt template pattern (reusable structure across every function)
Every agent's master prompt follows: `[ROLE + BRAND + NICHE + REVENUE context] → [BUSINESS CONTEXT: catalog/margins/targets/voice/competitors] → [YOUR ROLE definition] → [DECISION FRAMEWORK: explicit numeric thresholds for what triggers what action] → [ACCESS: which MCP tools, read vs write] → [for L2/L3: SKILLS available + SAFETY RULES like "never pause a profitable campaign without approval" / "budget increases >30% need approval"]`. Concrete example decision-framework thresholds given for PPC: pause if <50% of target ROAS for 48h, recommend scale if >150% of target for 72h, flag any keyword spending $50+ with 0 conversions, flag search terms with 3+ conversions not yet targeted.

## Stated common failure modes
Automating undocumented/inconsistent processes (you can't automate what isn't systematic yet — document and SOP first). Under-specified context (generic instructions → generic output that doesn't fit the business — invest in the context layer before judging agent quality). No human oversight during rollout (errors compound silently — run L1→L2→L3 in sequence with ~30 days of human review before reducing checkpoints). Trying to automate every function simultaneously (pick one, get it working, then expand — parallel rollout compounds failure surface). Underestimating real setup time (a working infrastructure is claimed to take 40-80 hours, not a weekend).

## Suggested rollout sequence
Month 1: document processes, build first L1 advisor agent (usually PPC or CS — highest perceived ROI), connect 3 core read-only MCP integrations, build first 5 skills. Month 2: upgrade to L2 (write access + first automated workflows), replicate the pattern for a second function. Month 3: build L3 automations for processes proven safe at L2, roll out to the team as an oversight-only workflow.

— Amin (@ecom_amin)

P.S. offer: DM "google" — commercial CTA, not wiki-relevant.
