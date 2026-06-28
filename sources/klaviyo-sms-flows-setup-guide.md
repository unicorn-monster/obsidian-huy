---
type: clip
date: 2026-06-28
source:
author:
title: "Klaviyo SMS flows — full setup playbook (6 core flows)"
---

Core principles (apply to every flow)
SMS is expensive and easy to overuse. Only use it for product launches, big sales, and automated flows.
Set exclusion filters at the trigger, not mid-flow. This stops people who already converted from getting the rest of the flow.
One message per flow, except the Welcome Series. In the US you're legally limited to one SMS per abandonment flow, and extra texts feel spammy.
Always enable UTM tracking so you can attribute revenue.
Quiet hours (default: no sends 8:00 PM to 11:00 AM) stay ON for most messages. Turn OFF only when speed matters (welcome msg 1, high-value cart/checkout).
A/B test the time delays for your own brand.

Flow 1: Welcome Series (3 messages)
The only multi-message flow. First impression after someone opts into your SMS list. Goal: deliver the promised discount and guide to first purchase.

Setup

Create Flow → channel SMS → pick Klaviyo's default Welcome Series template.
Name: e.g. "Welcome Series SMS Demo".
Trigger: Subscribed to SMS marketing (no specific list needed, though you can target a specific list if your situation calls for it).
Trigger profile filters (exclusions) — add all three:

Placed Order — zero times since starting this flow
Checkout Started — zero times since starting this flow
Added to Cart — zero times since starting this flow
Why: if someone starts buying mid-series, they belong in a different flow (abandonment), so pull them out of welcome.

Messages

Msg	Timing	Quiet hours	Copy template
1	Immediately on opt-in	OFF (they want the code now)	"Welcome to [Brand Name]! We're excited to have you. Here's 10% off your first order with code [CODE]. Shop now: [link]"
2	3–5 days later (he uses 3)	ON	"Quick reminder, you still have 10% off waiting for you with code [CODE] at checkout. Shop now: [link]"
3	3–5 days after msg 2 (he uses 3)	ON	"Last chance! Your 10% off discount ends in 24 hours. Don't miss out, shop now: [link]"
Cleanup tip: the default template puts a conditional split before msg 3 (placed order = 0). Since you already set that exclusion at the trigger, delete the split, drag SMS 3 up, and the flow looks cleaner.

Enable UTM tracking on all three messages.

Flow 2: Site Abandonment (1 message, build from scratch)
For people who visited your site but did not even reach a product page. Earliest stage of the journey. Goal: re-engage and pull them deeper.

Setup

Create Flow → Build your own (there is no Klaviyo SMS template for this).
Name: e.g. "Site Abandonment SMS Flow Demo".
Trigger: Active on Site (All triggers → Metric → Active on Site).
Trigger profile filters (exclusions) — add all four:

Placed Order — zero times since starting this flow
Checkout Started — zero times since starting this flow
Added to Cart — zero times since starting this flow
Viewed Product — zero times since starting this flow
Why: anyone further down the funnel gets a more specific flow, so exclude them all.

Timing: 2–4 hour delay (he uses 2). Wait a while so you don't spam someone who just landed.

Message settings: quiet hours OFF, UTM tracking ON.

Copy template:

"Looking for something new? Check out our top-selling [product category], you'll love these. Shop here: [link]"

Example for a skincare brand: "Looking for something new? Check out our top-selling moisturizers, you'll love these. Shop here: [link]"

Keep it to one message and point to a bestseller collection or product.

Flow 3: Browse Abandonment (1 message, uses template)
For people who viewed a specific product but did not add it to cart. Works especially well for high-consideration products. Goal: nudge them back to that exact product.

Setup

Create Flow → channel SMS → pick the Browse Abandonment template.
Trigger: Viewed Product (comes pre-set).
Trigger profile filters: template already includes Checkout Started = 0, Placed Order = 0, and "has not been in this flow in the last 30 days." Add one more:

Added to Cart — zero times since starting this flow
Timing: default is 2 hours (good starting point). Split-test 1 vs 3 hours to find your brand's sweet spot.

Message settings: quiet hours ON, skip recently messaged profiles ON, UTM tracking ON.

Copy template (uses dynamic tags):

"Hey! We noticed you checking out the [event name]. Continue browsing now: [event URL]"

event name auto-fills the exact product viewed.
event URL links straight to that product page.
Result example: "Hey! We noticed you checking out the moisturizer. Continue browsing now: [link to that moisturizer]"

Flow 4: Cart + Checkout Abandonment (2 flows, same message)
These are two separate flows because they have two different triggers, but you treat them almost identically. Among the highest-converting flows, do not skip them.

Key distinction:

Cart abandonment = added a product to cart but did NOT start checkout. Trigger: Added to Cart.
Checkout abandonment = started checkout but did NOT complete the purchase. Trigger: Checkout Started.
Important gotcha: Klaviyo's template labeled "Abandoned Cart Reminder" is actually triggered by Checkout Started, so it's really a checkout-abandonment template. Build the checkout flow first, then clone it for cart.

4a. Checkout Abandonment (build first)
Create Flow → SMS → open the "Abandoned Cart Reminder" template (trigger = Checkout Started).
Name: "Checkout Abandonment SMS Flow".
Trigger filters: default is Placed Order = 0 and "can receive SMS marketing." Add a re-entry buffer: has not been in this flow in the last 14 days (so repeat add-to-cart behavior over a couple weeks doesn't trigger multiple texts).
Timing: change the default 4 hours down to 30 min to 1 hour (he uses 30 min). 4 hours is too long for checkout recovery.
Message settings: UTM tracking ON, smart sending OFF (too important to suppress), quiet hours OFF where legally possible.
Copy template:
"Oh no! You left [product name] behind in your cart. Finish your purchase now: [checkout link]"

Uses the event name tag for the product and links to the checkout page.
4b. Cart Abandonment (clone of the above)
Exit, find the checkout flow, Clone it. Name: "Cart Abandonment SMS Flow".
During cloning, change the trigger from Checkout Started to Added to Cart.
Add one filter to avoid overlap: Checkout Started — zero times since starting this flow (so people who progress to checkout get the checkout flow instead).
Time delay: same as checkout.
Message: same copy, but change the link from the checkout page to the cart page (e.g. yourbrand.com/cart), because this person hasn't started checkout yet. Keep the product name tag.

Flow 5: Customer Win-Back (1 message, build from scratch)
For past buyers who have gone quiet. Goal: remind them you exist and drive a repeat purchase.

Setup

Create Flow → SMS → Build your own (no default template).
Name: e.g. "Win Back SMS Flow".
Trigger: Placed Order.
Trigger profile filter:

Placed Order — zero times since starting this flow
Why: if they buy again during the 60–90 day wait, they should drop out of the win-back flow.

Timing: 60–90 days of inactivity is the sweet spot for most brands (he uses 60). Shorten to ~30 days for fast-cycle brands, or lengthen for longer purchase cycles.

Message settings: smart sending ON, UTM tracking ON, quiet hours ON.

Copy template (discount angle):

"Hey [name], we miss you here at [Brand Name]. That's why we're offering you X% off with code [CODE] for the next 48 hours only. Shop now: [link]"

Alternative angle: instead of a discount, nudge new arrivals or bestsellers (saves margin). A/B test discount vs new-arrivals.

Quick reference table
Flow	Trigger	Delay	# Msgs	Quiet hours	Key filter notes
Welcome Series	Subscribed to SMS	0 / 3d / 3d	3	Off, On, On	Exclude order/checkout/cart
Site Abandonment	Active on Site	2–4 hr	1	Off	Exclude order/checkout/cart/viewed
Browse Abandonment	Viewed Product	2 hr (test 1–3)	1	On	Add "added to cart = 0"
Checkout Abandonment	Checkout Started	30–60 min	1	Off	14-day re-entry buffer, smart sending off
Cart Abandonment	Added to Cart	30–60 min	1	Off	Exclude checkout started, link to cart
Win-Back	Placed Order	60–90 days	1	On	Exclude order = 0 in window
