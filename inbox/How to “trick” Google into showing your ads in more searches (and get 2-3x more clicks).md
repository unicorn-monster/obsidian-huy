---
title: "How to “trick” Google into showing your ads in more searches (and get 2-3x more clicks)"
source: "https://x.com/blvckledge/status/2032087432301310209"
author:
  - "[[@blvckledge]]"
published: 2026-03-12
created: 2026-06-19
description: "over the past 5 years, we've scaled google shopping accounts from $10k/month to $300k+/month using product duplication.this is a tactic that..."
tags:
  - "clippings"
---
![Image](https://pbs.twimg.com/media/HCuZZzraUAAtkOL?format=jpg&name=large)

over the past 5 years, we've scaled google shopping accounts from $10k/month to [$300k+](https://x.com/search?q=%24300k%2B&src=cashtag_click)/month using product duplication.

this is a tactic that lets you:

\- show up for 3-5x more relevant searches - capture 2-4+ carousel positions in a single search result - push competitors down or off the page entirely

we've helped clients 2-3x their shopping traffic in 30 days, and this strategy is a big part of that.

the concept is simple:

instead of having one generic product listing trying to rank for everything…

you create multiple versions of the same product, each focused on a specific search intent or use case.

google treats them as separate listings and ranks each one for its specific query

![Image](https://pbs.twimg.com/media/HCuZh1iaUAAVJJk?format=jpg&name=large)

and often shows multiple variations from your brand in the same search result.

![Image](https://pbs.twimg.com/media/HCuZf0-a4AA7kX_?format=png&name=large)

we've been running this for 200+ brands for 3 years with zero issues. it's within google's terms of service when done correctly.

this article breaks down exactly how it works and how to implement it in your account.

## I. the one-listing problem

normally, you get one shot per product to match what someone's searching for, and that creates a big problem.

**you can't optimize for multiple search intents**

the majority of products serve more than one type of buyer.

take magnesium supplements:

"magnesium for sleep" → person dealing with insomnia "magnesium for anxiety" → person managing stress "magnesium for muscle recovery" → athlete preventing cramps "magnesium for kids" → parent looking for children's supplement

completely different intents. and buying triggers.

but you only have one product listing.

so what do brands typically do?

they optimize for the highest-volume keyword: "magnesium supplement"

**but when you do that, you essentially opted out of every other search intent.**

google's algorithm prioritizes precision.

when someone searches "magnesium for anxiety" and your title says "premium magnesium supplement for sleep support,"

google sees:

\- partial keyword match - moderate relevance signal - lower likelihood of click

your listing gets deprioritized.

I’m not saying that you have zero chance of showing up for “"magnesium for anxiety" or "magnesium for muscle recovery"

but your odds drop significantly.

and any brand that built their feed specifically around those terms will consistently outrank you.

in other words, you’ll be missing out on a significant chunk of demand from keywords with different use cases or demographics.

searches with:

\- lower competition (everyone else optimized for the high-volume term) - higher intent (specific problem = closer to purchase) - better conversion rates (message-to-market match is clearer)

so the question is:

can you optimize your feed for all those keywords at once?

can one product show up across every relevant search intent in its category?

the answer is yes, and you do that with product duplication.

## II. the solution: product duplication

in simple terms, product duplication is creating multiple feed variations of the same product, each optimized for a different search query or buyer intent.

each variation gets:

\- a title structured around a specific query - a description written to match that audience's language - a unique item id (so google sees them as distinct listings) - a unique landing page url (aligned to that specific intent)

google will see and view each of these as a separate listing

and on shopping, feed relevance is the primary determinant of search eligibility and rankings.

when someone searches on google shopping:

\- google analyzes the search query for intent signals - google scans feed attributes for relevance - products with closer keyword matches get prioritized - eligible products enter the auction - top performers appear in the carousel

since you have different feeds optimized for multiple intent…

your one product now appears across the full range of searches in its category.

like for the magnesium example above…

your listings are eligible to show for:

“magnesium for sleep” “insomnia relief supplement” “magnesium for anxiety” “muscle cramp relief” etc

**the multi-position effect**

here's where it gets powerful: google can and will show multiple listings from the same brand in a single search result.

when someone searches "magnesium supplement," your variations might all be eligible.

google's algorithm evaluates which ones are most relevant and shows 2-3 of them in the same carousel.

instead of fighting for 1/5 positions, you now own 2/5.

you've just 2x'd your traffic potential without changing your budget.

![Image](https://pbs.twimg.com/media/HCuZxMSaUAIbQN9?format=jpg&name=large)

**why google allows thi**

google doesn't care if you're advertising the same product.

they care whether your ads add unique value to the user experience.

they reward relevance, not uniqueness.

that means the same product can show up multiple times if it's speaking to different people, different pain points, or promoting different offers.

if someone searches "creatine for women" and your listing is specifically optimized for women, that's good for the user.

if someone else searches "creatine for muscle gain" and a different listing speaks directly to muscle building, that's also good for the user.

why would they not allow an ad that:

\- improves user experience (better relevance = higher satisfaction) - increases click-through rates (aligned messaging = more clicks) - reduces bounce rates (intent match = better engagement)

## III. implementation: how to set this up

**step 1: product selection**

start with products with the highest chances of benefiting from this strategy

\- top 5-10 performing skus by revenue - products with enough search volume to support multiple angles - products that serve multiple buyer types or solve multiple problems

**step 2: query research**

this is where a lot of brands mess up when trying this strategy.

they duplicate randomly without researching what queries have search volume.

use these formulas to uncover keyword themes:

\- \[product\] + use case: "magnesium for sleep," "protein powder for weight loss" - \[product\] + benefit: "creatine for muscle gain," "vitamin c for immunity" - \[product\] + demographic: "protein powder for women," "magnesium for kids" - \[product\] + attribute: "vegan protein powder," "organic magnesium"

validation criteria for each query theme:

\- search volume: is there enough demand? - commercial intent: are people looking to buy? - credible angle: can we credibly address this with messaging?

start with 3-4 variations for your first product.

**step 3: feed duplication setup**

use a feed management tool like datafeedwatch to duplicate your product feed

then modify product ids:

\- original feed: PROTEIN-POWDER-001 - duplicate a (weight loss): - PROTEIN-POWDER-001-WL - duplicate b (women's): PROTEIN-POWDER-001-WOMEN - duplicate c (vegan): PROTEIN-POWDER-001-VEGAN

remove gtin from all duplicate feeds (only the original feed should include gtin)

keep item\_group\_id the same across all variations

this prevents gtin misuse violations while consolidating reviews across all duplicates.

set up custom labels:

feed a: custom\_label\_0 = "query-weight-loss" feed b: custom\_label\_0 = "query-womens" feed c: custom\_label\_0 = "query-vegan"

this lets you track performance by query angle in google ads.

**step 4: title & description optimization**

the golden rule: front-load your target query in the first 5 words of the title.

google weighs the beginning of your title most heavily when determining search relevance.

Examples:

original generic title: "premium whey protein powder 25g - chocolate flavor - brandname"

variation a (weight loss query): "protein powder weight loss women low calorie 25g whey isolate chocolate - brandname"

variation b (vegan query): "vegan protein powder plant based 25g pea protein chocolate dairy free - brandname"

variation c (muscle gain query): "protein powder muscle gain mass builder 25g whey concentrate chocolate - brandname"

notice the pattern:

\- each title is laser-focused on a specific query - front-loaded with the exact search terms buyers use - unique and differentiated from the other variations - still includes essential product details

then make sure your description reinforces the title's angle and speaks directly to that buyer's concerns.

**step 5: landing page alignment**

your landing page should match the angle of your ad.

if someone clicks on "protein powder weight loss women," they should land on a page that headlines the weight loss benefit.

ideally, you want a product page/sales page tailored specifically to that angle

but at the start, you can go with a minimum viable approach:

customize your headline and benefits to match.

**step 6: campaign structure**

add all duplicate variations to your existing shopping campaign.

what will happen:

\- google tests all variations - the algorithm rotates which variation shows based on search query relevance - high-relevance variations get more impressions for their target queries - you'll see 2-3 of your listings appear in the same carousel for broad searches

sometimes, the algorithm picks a favorite and won't give impressions to your other variations

if that’s the case, create separate campaigns for under-served variations with their own budgets.

**step 7: track and optimize**

monitor which query angles are performing.

key metrics by custom label:

impressions and impression share, ctr, conversion rate, roas

optimization actions:

\- scale winners: increase bids or budgets for high-performing angles. - fix underperformers: if a query angle has low ctr, test new title variations. if conversion rate is low, fix landing page alignment. - kill them if there’s no other optimization you can do - add negative keywords: monitor search terms report for each custom label and add negatives to prevent wasted spend.

**step 8: scale to more products**

over time, you want to scale this to more skus.

apply the same process: research queries, duplicate feeds, optimize titles, track performance.

## final words:

we've seen success with this strategy across many industries. supplements, skincare, fitness, pet products, etc

especially effective with products that have:

\- multiple use cases - multiple buyer personas - multiple problems they solve - multiple ways customers describe them

honestly, most products can benefit from this if you're creative about it.

we rarely find a brand that has absolutely no use case for product duplication.

it's one of the highest-leverage things you can do in shopping/pmax without adding a single new product.

so go over this article, save it, and implement it in your accounts right now.

and if you need help setting them up, my dms are open.