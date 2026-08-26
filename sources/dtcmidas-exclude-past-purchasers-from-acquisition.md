---
type: clip
date: 2025-08-15
source: https://x.com/DTCMidas/status/1956382182148051407
author: DTCMidas
title: "Exclude past purchasers from acquisition campaigns using three layered audiences, because no..."
---

Stop wasting ad spend on people who already bought from you.

Most brands are showing acquisition ads to existing customers, which kills efficiency and pisses off customers who keep seeing ads for products they already own.

Here’s how to exclude them properly using 3 methods:

Method 1: Meta Pixel + CAPI Data

Go to Meta Ads Manager → Audiences → Create Audience → Custom Audience → Website.

Select “Purchase” event and set the timeframe to 180 days.

This automatically pulls everyone who completed a purchase tracked by your pixel and Conversions API.

Method 2: Klaviyo Integration

In Klaviyo, go to Integrations → Meta → Connect Account.

Once connected, create a segment of all customers who have placed at least one order.

Then go to Klaviyo → Integrations → Meta → Sync Audiences and push this segment to Meta as a custom audience.

This syncs automatically and catches people who bought but might not have been tracked by pixel (iOS users, ad blockers, etc.).

Method 3: Manual Upload
In Shopify, go to Customers → Export → All customers → Export as CSV.

In Meta Ads Manager → Audiences → Create Audience → Custom Audience → Customer List → Upload your CSV file.

Map the data fields (email, phone, name, etc…) and let Meta process it.

Repeat this monthly to keep it up to date.

Then exclude all three audiences from your acquisition campaigns.

On adset level, go to Targeting → Exclude → Custom Audiences → Select all three purchaser audiences.

Why use all three methods?

Because no single tracking method is 100% accurate.

Pixel data misses some people, Klaviyo might not have everyone’s email, and manual uploads can get outdated.

Layering all three ensures you’re not advertising the same product to people who already bought it.
