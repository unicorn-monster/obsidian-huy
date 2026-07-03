---
type: clip
date: 2026-07-03
source: https://x.com/DTCMidas/status/2072987096441065520
author: DTCMidas
title: Landing page test method via Meta ABO ROAS comparison
---

Here's how I run landing page tests.

So we have two types of landing pages:

1. Our main landing pages (1 / angle / product) where most of our traffic goes.

2. Variant pages we build for winning ads to make the experience more congruent and squeeze more out of the winners. These are based on templates of our main pages.

What you need to understand is that your targeting and cost of traffic (CPMs) aren't just determined by your creative.

They're also determined by your post-click experience, so your lp's, offers, etc...

This is why only looking at rev per session on tools like Intelligems won't give you the full truth, as it doesn't take the cost of traffic into account.

What happens there is that your CPM gets averaged out and then split across both pages (also these tools can increase your overall CPM during tests, but that's another discussion).

But one page might drive a lower cost of traffic than the other.

So one page can look worse on revenue per session, but the cost to drive traffic to it is actually lower.

That's why I run the test directly in Meta right now.

Here's how to do it:

Grab your winning ads for the page you want to test

Spin up a separate ABO testing campaign

One ad set with all the winning ads going to page A (control)

Another ad set with the same winning ads going to page B (variant)

Keep daily budget the same for both

You can test more variants too. B, C, D etc.

We duplicate the control page to a new URL so there's no other traffic coming in except this test.

Run it for a while and then compare. Don't look at in platform attribution.

Just look at revenue generated from page A vs page B, compare to the spend, and you get the ROAS per page.

Then we run a significance test on abtestguide(dot)com to make sure the results actually mean something.

For variant pages we're often lazier.

We just duplicate a winning ad set in a live campaign, give it a new hero section, and see if it picks up spend and performs.

Less accurate, but it drives spend up efficiently so I just do it.
