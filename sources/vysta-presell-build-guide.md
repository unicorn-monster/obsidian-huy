---
type: clip
date: 2026-06-16
source: "https://growwithvysta.notion.site/presell-pages"
author: "Vysta (growwithvysta)"
title: "How we build presell pages that convert at 8-12% (the native ads funnel)"
---
> "this is the exact presell architecture we use across 150+ ecom brands. we produce 50+ custom landing pages per week using this system. comparison and listicle pages convert 2-3x better than sending traffic to a homepage. this is why, and this is exactly how to build them yourself.”

### why presell pages exist (and why your agency probably isn't building them)

most brands run ads directly to a product page. that works for warm traffic - people who already know what they want.

but the second you scale into cold traffic (Demand Gen, YouTube, native placements), you're sending people who don't know you, don't trust you, and aren't ready to buy - straight into a checkout environment.

the result: your CPA explodes, your ROAS tanks, and you think the channel "doesn't work."

it's not a media problem. it's a landing page problem.

a presell page (also called a prelander, advertorial, or editorial) sits between the ad and the product page. its job is simple: educate, build trust, and warm the visitor up before they ever see a price.

the math:

cold traffic to PDP: 1-3% conversion rate

cold traffic to presell → PDP: 8-12% presell CTR, 4-7% end conversion rate

advertorial subdomain tests have moved CPA 30-40% for us

### the 4 presell formats we use (and when to use each)

| format | best for | traffic temperature | typical CTR to PDP |
| --- | --- | --- | --- |
| advertorial | single-product hero pushes, pain-point storytelling | cold (YouTube, Demand Gen, native) | 8-15% |
| listicle | category buyers, comparison shoppers | cold to warm (Demand Gen image, Shopping) | 10-18% |
| quiz funnel | complex products, bundles, personalization | cold (YouTube, social) | 15-25% (to result page) |
| comparison page | competitor conquesting, branded alternatives | warm (Search, competitor keywords) | 12-20% |

### format 1: the advertorial - full build guide

this is the workhorse. it looks and reads like an editorial article, but it's designed to move the reader toward one action: clicking through to the product page.

the wireframe (section by section, with exact implementation)

section 1: the headline

repeat the ad's promise. if the ad said "the $39 pillow that's replacing memory foam," the headline says exactly that. 1:1 congruence between ad and first screen is non-negotiable.

how to build this in Funnelish:

1.create a new page in your Funnelish workspace

2.add a full-width section with zero padding on mobile

3.drop in a headline element - set it to H1, 28-36px on desktop, 22-26px on mobile

4.font: use a serif or editorial-style font (Georgia, Playfair Display, or Lora) to differentiate from your brand store

5.center-align on mobile, left-align on desktop

6.add a thin colored line (2px) above or below the headline as a visual separator

how to build this in Shopify (via Replo or custom Liquid):

1.create a new page template in your theme editor or Replo

2.use a custom section with a single rich-text block

3.set the H1 with inline styling or a dedicated CSS class that uses editorial fonts

4.ensure the page template removes your standard navigation (you want a clean, distraction-free header)

headline formulas that convert (swap the nouns for your niche):

"a simple \[daily habit\] that helps with \[pain/outcome\] (backed by \[authority\])"

"why \[persona\] are switching to this \[odd but accurate descriptor\] for \[benefit\]"

"we tested \[product\] for 30 days - here's what surprised us about \[benefit\]"

"i stopped using \[common solution\]. here's what happened after \[new approach\]"

"the \[location/science\] trick that finally made \[pain\] manageable"

"before you buy \[category\], read this quick breakdown of what actually matters"

"this $\[price\] \[product type\] punches way above its weight for \[use-case\]"

section 2: the sub-headline

one line expanding the promise + previewing the proof. "we tested it for 30 nights against a $200 competitor. here's what happened."

how to implement:

place directly below the H1 with 8-12px spacing

use a lighter font weight (300 or 400) and slightly smaller size (18-20px desktop, 16px mobile)

color: use a muted gray (#555 or #666) to create visual hierarchy against the bold headline

keep it to one line on desktop, max two lines on mobile

section 3: the credibility block

who is speaking? this is NOT your brand speaking directly - it's an editorial voice. options:

author persona with headshot photo ("by Sarah Mitchell, wellness editor")

"reviewed by \[credential\]" with a small badge

founder story framing ("after 3 years of testing 47 products...")

third-party reviewer framing ("an independent review by \[publication name\]")

how to build in Funnelish:

1.add a 2-column row (30/70 split)

2.left column: circular image element (60x60px) with a headshot

3.right column: text block with name, title, and a one-line bio

4.add a light gray background (#f8f8f8) to the entire row to make it feel like a byline

5.add a subtle border-bottom (1px, #e0e0e0) to separate from the content below

how to build in Shopify:

1.use a custom Liquid section or Replo component

2.create a flex container with the headshot and text side by side

3.style with a light background and rounded corners for the author card

4.ensure it's responsive - stack vertically on mobile

section 4: the problem setup (with a new insight)

don't just restate the problem. add a mechanism or insight the reader hasn't heard before. give them something they can repeat to a friend.

examples by niche:

skincare: "most moisturizers lose 70% of their active ingredients within 15 minutes of application because of \[specific molecular reason\]"

supplements: "the reason your greens powder tastes terrible is because brands prioritize shelf stability over bioavailability"

sleep: "memory foam was designed for NASA seats, not 8-hour sleep cycles. the pressure redistribution that works in zero gravity actually creates heat pockets at body temperature"

fitness: "your protein powder is 40% filler by weight. here's how to read the label they don't want you to understand"

how to structure this section:

1.open with a bold, surprising statement (the "new insight")

2.follow with 2-3 sentences explaining WHY this is true

3.use a pull quote or highlighted text box for the key stat

4.close with a transition: "so what actually works?"

Funnelish implementation:

1.use a standard text block with paragraph spacing set to 1.6 line height

2.for the pull quote: add a separate text element with a left border (4px, brand color), italic font, and 20px left padding

3.add an image here if possible - a diagram, a close-up of the problem, or a relevant photo

4.keep paragraphs SHORT (2-3 sentences max). walls of text kill mobile readers

section 5: the mechanism (why THIS product works differently)

this is the bridge between "i have a problem" and "this product solves it." not miracle language. tangible, specific, believable.

the formula: \[specific feature\] + \[how it works mechanically\] + \[why that matters for the user\]

examples:

"the dual-density foam uses open-cell construction on the surface layer (for airflow) and closed-cell at the base (for support). that means you get pressure relief without the heat trap that memory foam creates."

"each serving contains 47 whole-food ingredients, cold-pressed within 4 hours of harvest. the difference: 3x higher polyphenol retention compared to spray-dried powders."

"the compression zones are mapped to the plantar fascia pressure points identified in the 2019 Journal of Biomechanics study. not random padding - targeted support."

how to build this section:

1.lead with a bold sub-heading: "how \[product\] actually works" or "the \[mechanism name\] difference"

2.use 2-3 short paragraphs explaining the mechanism

3.include a product image or diagram here - ideally showing the mechanism in action (cross-section, ingredient close-up, etc.)

4.if you have a comparison, use a simple 2-column layout: "traditional \[category\]" vs "\[your product\]"

Funnelish implementation:

1.add a 2-column section for the comparison (50/50 split)

2.left column: "the old way" with a red X icon and 3 pain points

3.right column: "the \[product\] way" with a green checkmark and 3 benefits

4.below: a full-width image showing the product mechanism

5.keep the image under 200KB (compress with TinyPNG or Squoosh before uploading)

section 6: the demonstration / proof section

this is where images and social proof do the heavy lifting. the reader should be able to SEE the difference.

what to include (pick 3-4 of these):

before/after photos (if compliant with your ad platform)

GIFs showing the product in use

ingredient/material close-ups with callouts

side-by-side comparison with a competitor (blurred or generic)

third-party review excerpts (screenshot format, not just text)

star ratings with review count

"as seen in" logos (only if real)

user-generated photos from customers

Funnelish implementation for a proof gallery:

1.create a new section with a light background (#fafafa)

2.add a sub-heading: "what customers are saying" or "the results speak for themselves"

3.use a 3-column grid on desktop (stacks to 1 column on mobile)

4.each column: customer photo (square, 1:1 ratio), star rating image, 2-3 sentence quote, first name + verified buyer badge

5.below the grid: add a full-width banner showing the aggregate rating ("4.8/5 from 2,847 verified reviews")

Shopify implementation:

1.use Loox, Judge.me, or Yotpo review widget embedded directly on the page

2.alternatively, screenshot your best reviews and place them as images (faster load, more control over layout)

3.add a Shopify metafield for review count that auto-updates

section 7: micro-CTAs (every 2-3 scrolls)

don't wait until the bottom. place contextual CTAs throughout the page. on mobile, use a sticky button.

CTA placement map:

first CTA: after the mechanism section (roughly 40% scroll depth). the reader now understands the problem and the solution.

second CTA: after the demonstration/proof section (roughly 65% scroll depth). they've seen evidence.

third CTA: after the offer section (roughly 85% scroll depth). they know the price and guarantee.

sticky mobile CTA: always visible. small bar at the bottom.

CTA copy that works for presell pages:

DO NOT use: "buy now," "shop now," "add to cart" - too aggressive for cold traffic on a presell.

USE: "see if it's right for you →," "check current availability →," "see the full details →," "learn more about \[product\] →," "view pricing and options →"

the CTA should feel like the NEXT STEP in their research, not a purchase commitment.

Funnelish CTA button implementation:

1.add a button element - full width on mobile, 60% width centered on desktop

2.button color: your brand's primary CTA color (high contrast against background)

3.font size: 16-18px, bold weight

4.padding: 16px top/bottom, 32px left/right

5.add a small text line below the button: "free shipping + 30-day guarantee" or "4.8★ from 2,847 reviews"

6.for the sticky mobile CTA: use Funnelish's sticky element feature, set it to appear after 30% scroll depth

Shopify sticky CTA implementation:

1.add a custom Liquid snippet to your page template:

Plain Text

\<div class="sticky-cta" style="position:fixed; bottom:0; left:0; width:100%; background:#fff; padding:12px 16px; box-shadow:0 -2px 8px rgba(0,0,0,0.1); z-index:999; display:flex; align-items:center; justify-content:space-between;"> \<span style="font-size:14px; font-weight:600;">Free shipping + 30-day guarantee\</span> \<a href="/products/your-product" style="background:#000; color:#fff; padding:12px 24px; border-radius:4px; font-size:14px; font-weight:600; text-decoration:none;">View Product →\</a> \</div>

1.add a media query to hide on desktop: @media (min-width: 768px) {.sticky-cta { display: none!important; } }

section 8: the offer block

price, bundle options, guarantees, delivery timeline. make it feel like a deal they discovered, not a sales pitch.

what to include:

product image (lifestyle shot, not white background)

price with any discount clearly shown

guarantee badge ("100-night trial" or "60-day money back")

shipping info ("free shipping, arrives in 3-5 days")

payment icons (Visa, Mastercard, PayPal, Shop Pay)

Funnelish implementation:

1.create a section with a subtle border (1px solid #e0e0e0) and light shadow

2.2-column layout: product image left (40%), offer details right (60%)

3.right column: product name, price (large, bold), savings callout, guarantee text, CTA button

4.below: trust badges row (payment icons, security badge, guarantee badge)

5.on mobile: stack vertically, image on top, offer below

section 9: FAQ section

handle the top 3-5 objections. these should be the REAL objections you see in customer service tickets and ad comments.

how to find your FAQs:

1.pull your top 10 customer service questions from the last 90 days

2.read the comments on your ads - what are people asking?

3.check your product reviews - what do 3-star reviews complain about?

4.search Reddit for your category - what concerns come up?

Funnelish implementation:

1.use accordion/toggle elements (click to expand)

2.each FAQ: bold question, expandable answer (2-3 sentences max)

3.add a final FAQ that handles the purchase objection: "what if it doesn't work for me?" → answer with your guarantee

Shopify implementation:

1.use the native collapsible content section in most modern themes

2.or add a custom Liquid section with details/summary HTML elements for lightweight accordions

advertorial disclosure is mandatory. without it, you risk ad disapprovals and policy violations.

required elements:

disclosure statement: "this page is an advertorial and reflects the opinions of the author. results may vary."

contact information or link to contact page

if health/supplement: FDA disclaimer

implementation: add a simple text block at the bottom with small font (12px), muted color (#999), and links to your policy pages.

![](https://growwithvysta.notion.site/image/attachment%3Ab3814e8d-0d0c-470d-90ea-d9e4831a18e7%3AFree_Deep-Dive_Audit__Custom_Growth_Plan_Led_by_World-Class_Google__YouTube_Ads_Specialists_(4)-modified.png?table=block&id=37bb8763-6928-804f-b697-c1f3e18cce98&spaceId=227850c6-e019-4dca-a0f1-51a2198638af&width=1410&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

### format 2: the listicle - full build guide

listicles work because they feel objective. the reader thinks they're getting a curated list, not a sales page.

step-by-step build process

step 1: choose your angle

the title format: "\[number\] best \[category\] for \[use-case\] in 2026 (tested & reviewed)"

examples:

"7 best travel backpacks for one-bag travel in 2026"

"5 best greens powders that actually taste good (lab-tested)"

"9 best compression socks for nurses who stand 12+ hours"

step 2: write the intro (2-3 sentences)

set the criteria. "we evaluated 23 \[products\] across price, durability, and \[key metric\]. here's what actually held up."

step 3: build the list structure

items 1-2: other products. brief, fair, honest pros and cons

item 3 or 4: YOUR product. positioned as the best fit for a SPECIFIC segment (not best overall - that kills credibility). give this the longest, most detailed review

items 5-7: other products again. keeps it balanced

for each item, include:

product name and image

price

2-3 sentence summary

"best for: \[specific use-case\]"

pros (3 bullets)

cons (1-2 bullets - yes, even for your own product)

step 4: add the comparison table

| feature | product A | YOUR PRODUCT | product C |
| --- | --- | --- | --- |
| price | $XX | $XX | $XX |
| key spec 1 | value | value | value |
| key spec 2 | value | value | value |
| rating | X/5 | X/5 | X/5 |

your product should win on the 2-3 metrics that matter most to your buyer.

step 5: write the verdict

"if you're looking for \[specific outcome\], \[your product\] is the clear pick because \[reason\]. if budget is your main concern, \[product X\] is a solid alternative."

step 6: add the CTA

"check current price →" or "see if it's still available →" - link to your PDP.

Funnelish implementation for listicles:

1.use a repeating section structure: image left (30%), text right (70%) for each product

2.alternate background colors slightly (#fff and #fafafa) to create visual separation

3.for your product's section: add a subtle highlight border (left border, 4px, brand color) or a "editor's pick" badge

4.comparison table: use Funnelish's table element or build with columns

5.verdict section: use a callout box with a light brand-color background

### format 3: the quiz funnel - full build guide

quizzes convert highest because they create psychological investment. by the time someone answers 4-6 questions, they're committed to seeing their "result."

step-by-step build process

step 1: map your quiz questions (4-6 max)

each question should segment the user into a product recommendation. structure:

question 1: identify the primary problem/goal ("what's your biggest concern with \[category\]?")

question 2: context/severity ("how often do you experience \[problem\]?")

question 3: current behavior ("what have you tried before?")

question 4: preferences ("what matters most to you: \[option A\] or \[option B\]?")

question 5 (optional): budget sensitivity ("what's your ideal price range?")

question 6 (optional): urgency ("when are you looking to start?")

step 2: design the result page

the result page is where the conversion happens. it must feel personalized.

include:

"based on your answers..." personalized headline

their "profile" summary (restate their answers back to them)

a testimonial from someone with a similar profile

the CTA to the product page

step 3: build in Funnelish

Funnelish has native quiz/survey functionality:

1.create a new funnel with the "survey" page type

2.add each question as a step - use image-based answer options when possible (higher engagement than text-only)

3.set up conditional logic: based on answers, route to different result pages

4.result page: use a standard sales page layout with the personalized elements

5.add a progress bar at the top (increases completion rate by 20-30%)

step 4: build in Shopify

for Shopify, you'll need a quiz app:

RevenueHunt Product Recommender

Typeform embedded via custom page

or build a custom quiz with Liquid + JavaScript:

1.create a custom page template

2.use JavaScript to handle question progression (show/hide sections)

3.store answers in URL parameters or session storage

4.redirect to a results page filtered by their answers

real quiz funnel examples to study:

colonbroom GLP-1 quiz → recommendation → checkout

bioma health weight loss quiz → personalized result

fitflow intermittent fasting quiz

dog food expose survey → pre-lander → offer

herbodhi cortisol quiz → product recommendation

### format 4: the comparison page - full build guide

comparison pages are the highest-intent presell format. someone searching "\[your brand\] vs \[competitor\]" is ready to buy - they just need the final push.

step-by-step build process

step 1: identify your top 3-5 comparison targets

check google search console for "\[your brand\] vs" queries. also check:

what competitors your customers mention in reviews

what brands show up in your Shopping auction insights

what alternatives people discuss on Reddit

step 2: write the structure

headline: "\[your product\] vs \[competitor\]: honest breakdown after testing both"

TL;DR verdict (one sentence): "if you care about \[X\], go with \[your product\]. if you need \[Y\], \[competitor\] might be better."

spec table: side by side on every metric that matters

3 pros for each product: be genuinely fair. admitting a competitor strength builds massive trust

"who should choose which" section: segment by use-case

3 external citations: link to third-party reviews or standards that support your claims

CTA: "see \[your product\] details →"

step 3: build in Funnelish

1.use a clean, editorial layout - minimal branding, lots of white space

2.comparison table: 3-column layout (feature | your product | competitor)

3.use green checkmarks and red X marks for feature presence

4.add a "verdict" callout box at the bottom with the CTA

5.URL structure: /compare/\[your-product\]-vs-\[competitor\]

step 4: build in Shopify

1.create a new page with a custom template (remove sidebar, simplify header)

2.use a metafield-driven approach so you can create multiple comparison pages from one template

3.or use Replo to build a reusable comparison component

4.add schema markup (Product structured data for both products) to help with SEO

### the tech stack: Shopify + Funnelish (and how they work together)

when to use Funnelish vs Shopify pages

| scenario | use Funnelish | use Shopify page |
| --- | --- | --- |
| advertorial for cold traffic | YES - faster builds, better page speed, no store nav distractions | only if you need it on your main domain |
| listicle | YES - editorial feel, clean layout | if SEO value matters (organic ranking) |
| quiz funnel | YES - native quiz functionality, conditional logic | if using Octane AI or similar app |
| comparison page | either works | YES if you want organic search traffic |
| post-purchase upsell | YES - native upsell flows | if using Shopify's native post-purchase |

Funnelish setup (step by step)

initial setup:

1.create a Funnelish account and connect your Shopify store

2.in Funnelish settings → integrations → connect Shopify (this allows checkout to flow back to your store)

3.set up your custom domain: go to settings → domains → add your editorial domain (e.g., "reviews.yourbrand.com" or "info.yourbrand.com")

4.point your subdomain DNS (CNAME record) to Funnelish's servers

building your first presell page:

1.create a new funnel → select "blank page"

2.set the page URL slug (e.g., /best-\[category\]-2026)

3.build the page section by section following the wireframe above

4.set the CTA button destination to your Shopify PDP URL

5.add tracking: go to settings → tracking → paste your GTM container ID or GA4 measurement ID

6.publish and test on mobile

the Shopify Buy Button integration:for a seamless checkout without leaving the presell page:

1.in Shopify admin → sales channels → add "Buy Button"

2.create a buy button for your product

3.copy the embed code

4.in Funnelish, add a custom HTML element and paste the buy button code

5.style it to match your page design

Shopify page setup (for on-domain presells)

using Replo:

1.install Replo from the Shopify App Store

2.create a new page → start from blank

3.build using Replo's drag-and-drop editor (similar to Funnelish but lives on your Shopify domain)

4.publish to a custom URL (e.g., /pages/best-\[category\])

5.advantage: inherits your store's checkout, no cross-domain tracking issues

using custom Liquid:

1.in Shopify admin → online store → themes → edit code

2.create a new template: templates → add new → page → name it "presell"

3.build the layout in Liquid (or copy a minimal template and customize)

4.remove the standard header/footer navigation for a cleaner editorial feel

5.add your presell content using sections and blocks

6.assign the template to your presell page in the page editor

the custom domain strategy (for brands spending $30K+/day)

for larger brands, we run presell pages on a separate editorial subdomain. this:

separates the editorial experience from the brand store

allows dedicated tracking without cross-domain complexity

enables a second ad account dedicated to comparison/editorial traffic

protects the main store from policy risk on aggressive angles

how to set this up:

1.choose a subdomain: "reviews.yourbrand.com" or "info.yourbrand.com" or a separate editorial domain

2.build the presell pages in Funnelish on that domain

3.CTA buttons link to your main Shopify store PDP

4.set up cross-domain tracking (see tracking section below)

![](https://growwithvysta.notion.site/image/attachment%3Af575fc76-8503-44d6-aca2-d40801d61b9c%3AUntitled_design_-_2026-01-15T100519.418.png?table=block&id=37bb8763-6928-80ac-97ae-d30d68b73609&spaceId=227850c6-e019-4dca-a0f1-51a2198638af&width=1410&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

### page speed requirements (non-negotiable)

speed kills or creates conversions on presell pages. cold traffic has zero patience. if your page takes more than 2 seconds to load on a phone, you are burning ad spend.

| metric | target | how to check | how to fix |
| --- | --- | --- | --- |
| LCP (largest contentful paint) | < 2.0s on 4G | PageSpeed Insights | compress hero image, use WebP, preload critical assets |
| CLS (cumulative layout shift) | < 0.1 | PageSpeed Insights | set explicit width/height on all images, avoid dynamic content injection |
| total page weight | < 500KB | Chrome DevTools → Network tab | compress images, remove unused CSS/JS, lazy-load below-fold images |
| javascript | minimal | Chrome DevTools → Coverage tab | remove unnecessary apps/scripts, defer non-critical JS |
| time to interactive | < 3.0s | PageSpeed Insights | reduce third-party scripts, minimize main-thread work |

the image optimization workflow

images are the #1 speed killer on presell pages. follow this exact process:

1.resize before upload: no image should be wider than 1200px for full-width, 800px for half-width, 400px for thumbnails

2.compress: run every image through TinyPNG or Squoosh before uploading. target: under 100KB per image

3.format: use WebP with JPEG fallback. Funnelish supports WebP natively. for Shopify, the CDN auto-converts if you use the | image\_url filter

4.lazy load: every image below the fold should have loading="lazy" attribute. Funnelish does this automatically. in Shopify Liquid, add it manually to \<img> tags

5.hero image: the ONLY image that should load immediately. keep it under 150KB. preload it in the \<head> with \<link rel="preload" as="image" href="...">

Funnelish speed tips:

disable any animations on mobile (they cause CLS)

don't use background videos (massive file size)

limit custom fonts to 1-2 weights (each weight = ~50KB download)

remove any unused sections/elements (they still load even if hidden)

Shopify speed tips:

uninstall apps you're not using (each adds JavaScript)

use a fast theme (Dawn, Prestige, or Impulse are optimized)

for presell pages: use a minimal template that strips out unnecessary theme JS

enable Shopify's built-in lazy loading in theme settings

### CTA placement rules (the system that doubles click-through)

the #1 mistake on presell pages: putting one CTA at the bottom and hoping people scroll there. most visitors never reach the bottom of your page.

the placement system

| CTA position | scroll depth | trigger | copy style |
| --- | --- | --- | --- |
| first CTA | ~40% | after mechanism section (they understand the solution) | "see if it's right for you →" |
| second CTA | ~65% | after proof/demo section (they've seen evidence) | "check current availability →" |
| third CTA | ~85% | after offer section (they know the price) | "get \[product\] now →" |
| sticky mobile | always visible | appears after 30% scroll | "view product →" |

CTA copy rules

never use on a presell page:

"buy now" (too aggressive for cold traffic)

"add to cart" (they're not on a store page)

"shop now" (breaks the editorial illusion)

"order today" (premature commitment ask)

always use:

"see if it's right for you →"

"check current availability →"

"see the full details →"

"learn more about \[product\] →"

"view pricing and options →"

"see what's included →"

the CTA should feel like the NEXT STEP in their research, not a purchase commitment.

CTA button design specs

| element | specification |
| --- | --- |
| width | 100% on mobile, 50-60% centered on desktop |
| padding | 16px top/bottom, 32px left/right |
| font size | 16-18px, bold weight |
| color | high contrast against background (dark button on light page) |
| border radius | 4-8px (slightly rounded, not pill-shaped) |
| sub-text below button | "free shipping + 30-day guarantee" in 12-14px muted text |
| hover state | slight darkening or shadow increase |

### the congruence rule (this is where most pages fail)

ad → presell → PDP must tell ONE continuous story.

if your ad says "the $39 pillow that replaced my $200 memory foam," your presell headline must reference that exact claim, and your PDP must show that $39 price prominently.

any disconnect = bounce.

how to implement congruence

basic (one presell per ad angle):

running 3 ad angles? build 3 presell pages, each matching its angle

URL structure: /presell/\[angle-name\] (e.g., /presell/sleep-temperature, /presell/back-pain, /presell/price-comparison)

each page has the same body content but a different H1 and hero image matching the ad

advanced (dynamic congruence with UTM swaps):

for brands testing 10+ ad angles simultaneously, swap the H1 and hero image dynamically based on UTM parameters.

Funnelish implementation:

1.in your page settings, enable URL parameter detection

3.use this JavaScript to swap the headline based on UTM:

Plain Text

\<script> const params = new URLSearchParams(window.location.search); const angle = params.get('utm\_content'); const headline = document.querySelector('h1'); const heroImg = document.querySelector('.hero-image img'); const angles = { 'sleep-temp': { h1: 'the cooling pillow that finally fixed my night sweats', img: '/images/cooling-hero.webp' }, 'back-pain': { h1: 'i stopped waking up with back pain after switching to this', img: '/images/support-hero.webp' }, 'price': { h1: 'this $39 pillow outperformed my $200 memory foam', img: '/images/value-hero.webp' } }; if (angle && angles\[angle\]) { headline.textContent = angles\[angle\].h1; heroImg.src = angles\[angle\].img; } \</script>

1.in your ad campaigns, set utm\_content to match your angle keys

this alone has improved presell CTR by 15-25% across accounts where we've tested it.

### tracking and measurement setup

the metrics that matter

| metric | target | what it tells you | how to track |
| --- | --- | --- | --- |
| presell CTR (clicks to PDP) | 8-12% | is the page doing its job? | outbound click event in GA4 |
| EPC (earnings per click) | varies by AOV | revenue efficiency per visitor | revenue / outbound clicks |
| scroll depth (50%+) | \> 60% of visitors | are people reading? | GA4 scroll event or Hotjar |
| time on page | \> 45 seconds | engagement quality | GA4 engagement time |
| bounce rate | < 55% | ad-to-page congruence | GA4 bounce rate |

UTM structure (standardize this)

Plain Text

utm\_source=google utm\_medium=cpc utm\_campaign=\[campaign-type\]\_\[angle\]\_\[date\] utm\_content=\[creative-id\]\_\[format\] utm\_term=\[keyword-or-audience\]

example: utm\_source=google&utm\_medium=cpc&utm\_campaign=dg\_sleep-temp\_0610&utm\_content=vid023\_vertical&utm\_term=interest-sleep

tracking setup for Funnelish → Shopify

option 1: GTM cross-domain (manual)

1.install GTM on both your Funnelish page and Shopify store

2.in GTM, configure the linker tag: add your Funnelish domain and Shopify domain to the auto-link domains list

3.this passes the GA4 client ID across domains so sessions don't split

option 2: use a tracking platform (recommended)platforms like wetracked.io, Trackbee, or Blotout handle cross-domain tracking automatically:

1.install their pixel on both Funnelish and Shopify

2.they stitch sessions across domains using first-party data

3.you get accurate attribution without the GTM complexity

event tracking on the presell page

set up these events in GA4 (via GTM):

| event name | trigger | purpose |
| --- | --- | --- |
| presell\_view | page load | baseline traffic |
| presell\_scroll\_50 | 50% scroll depth | engagement quality |
| presell\_scroll\_75 | 75% scroll depth | high engagement |
| presell\_cta\_click | any CTA button click | conversion intent |
| presell\_outbound\_click | click to PDP | primary conversion metric |
| presell\_time\_45s | 45 seconds on page | engaged session |

heatmap setup (non-negotiable)

install Microsoft Clarity or Hotjar on every presell page. watch:

where people stop scrolling (that's where you're losing them)

where they click (are they clicking non-clickable elements? add a CTA there)

rage clicks (something is broken or frustrating)

the mobile vs desktop experience (they're often completely different)

### the weekly production cadence

this is how we operate at 50+ pages per week:

monday: review and kill

pull last week's presell performance from GA4

kill any page with < 5% CTR to PDP

identify top 3 performers for iteration

check heatmaps for scroll-death points on underperformers

tuesday-wednesday: build new pages

build 3-5 new presell pages based on winning ad angles from the previous week

rule: new angle = new presell page. never send a new angle to an old page

duplicate your best-performing page template and swap the angle-specific elements (H1, hero, mechanism section)

thursday: optimize winners

A/B test headlines on top performers (swap one element at a time)

test CTA copy variations

add/remove proof elements based on heatmap data

check page speed - has anything degraded?

friday: launch and pair

publish new pages into campaigns

pair each new presell with its matching ad creative

set up tracking events on new pages

brief the media buying team on which presell goes with which angle

### compliance (the stuff that gets pages disapproved)

always do this:

advertorial disclosure on every presell page ("this is an advertorial")

accurate pricing (match what's on the PDP exactly)

real testimonials with proper disclosure ("results may vary")

clear shipping timelines that match your Shopify settings

functional links to return/refund policy

contact information accessible from the page

never do this:

fake news logos or publication branding you don't own

before/after images for health/weight loss (google policy violation)

miracle claims or medical language ("cures," "treats," "heals")

fake scarcity ("only 3 left!" when it's not true)

impersonating journalists, doctors, or celebrities

countdown timers with fake deadlines that reset

images directly from ChatGPT, DALL-E, or Sora (google is flagging AI imagery)

copied product descriptions or images from AliExpress or competitors

![](https://growwithvysta.notion.site/image/attachment%3A4c9cea27-8439-4b4e-9077-2784623f5cc5%3ABook_A_Call_Now_(1500_x_1500_px)_(1500_x_1500_px)_(1500_x_3600_px)_(1500_x_4000_px)_(1500_x_5000_px)_(1500_x_5000_px)_(2)-modified.png?table=block&id=37bb8763-6928-805f-9c7e-fc42e7638606&spaceId=227850c6-e019-4dca-a0f1-51a2198638af&width=1410&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)