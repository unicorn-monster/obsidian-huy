---
type: clip
source: https://x.com/DTCMidas/status/2100900664352158152
author: DTCMidas
date: 2026-09-18
title: Meta acquisition exclusions setup three sources
---

Here's how to set up exclusions in Meta so you don't spend your acquisition budget on existing customers.

1. Pixel purchasers

Create a website custom audience using the Purchase event. You can now use a window of up to 730 days, so check that yours isn't still set to 180/365.

Next, add all your purchaser data from shopify & klaviyo.

2. All Shopify purchasers

Go to customers in shopify, filter for more than 0 orders and export those customers as a CSV.

Then go to your meta ad acc > audiences > create audience > custom audience > customer list.

Download meta's template, upload it together with your Shopify CSV to your AI, and ask it to format the CSV to match the template.

Upload the file to meta and check that the email, phone and other matching fields are mapped correctly.

Reupload this list monthly so it includes your newer customers too.

3. All Klaviyo purchasers

Create a segment with this condition:
Placed order, at least once, over all time

Then go to integrations, set up the meta ads integration and connect that segment to a custom audience.

The segment sync keeps this audience updated, so you don't need to keep exporting it manually.

4. Add them to your existing customers and apply the exclusions

In meta's audience segments, add these audiences to your existing customers definition.

For campaigns focused on acquisition, I also recommend switching customer lifecycle strategy to "acquire new customers" at ad set level.

If you're using manual custom audience exclusions instead, add your purchaser audiences there.

Just adding them to audience segments won't exclude them from your targeting (if you don't use "acquire new customers").

The pixel, klaviyo and shopify upload will overlap — the goal is to give meta as much data as possible of who has already bought from you.
