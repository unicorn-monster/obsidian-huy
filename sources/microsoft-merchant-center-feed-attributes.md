---
type: clip
date: 2026-09-07
source: "https://help.ads.microsoft.com/#apex/ads/en/51084/1"
author: "Microsoft Advertising Help"
title: "Product attributes (Microsoft Merchant Center feed file spec)"
---
> Browser extraction of the MMC feed spec — the only outside link with substance cited inside [[microsoft-aeo-geo-guide]] (p.11, "Learn more about the Microsoft Merchant Center feed schema here"). The full page is a ~100-attribute reference; captured here is the AI/agent-relevant delta plus the field inventory. The "Optional fields — Bing attributes" accordion did not render in the extraction and is not captured.

# Microsoft Merchant Center — product attributes (feed file spec)

## Field inventory (by section)

**Required:** `description` · `id` · `image_link` · `link` · `price` · `shipping` · `title`

**Required if assigned by the manufacturer:** `brand` · `gtin` · `mpn`

**Optional — apparel:** `age_group` · `color` · `gender` · `size` · `size_system` · `size_type`

**Optional — product variants:** `additional_image_link` · `item_group_id` · `material` · `pattern`

**Optional — other:** `adult` · `availability` · `condition` · `excluded_destination` · `expiration_date` · `included_destination` · `installment` · `multipack` · `product_category` · `product_type` · `shopping_ads_excluded_country` · `unit_pricing_base_measure` · `unit_pricing_measure` · `ads_redirect` · `custom_label_0`–`custom_label_4` · `link_template` · `seller_name`

**Optional — sales and promotions:** `sale_price` · `sale_price_effective_date`

**Optional — UCP readiness:** `return_policy_labels` · `consumer_message_type` · `consumer_message_content`

## UCP readiness — the agentic-checkout block

| Field | Description | What you need to know |
|---|---|---|
| Exception policy (field name must be exactly `return_policy_labels`) | If some products follow different return rules, you can define one exception policy. Max 50 characters per string. | "This is a store-level return policy that's required for UCP. This information may be shown to customers during checkout." |
| `consumer_message_type` | The category of warning (for example, safety, legal, health, or environmental). Enum, e.g. `legal_disclaimer`, `safety_warning`, `prop_65`. | "Some products require legal disclosures or safety notices. These warnings are shown to customers before purchase." |
| `consumer_message_content` | The warning text shown to customers. Max 1,000 characters per string. Accepted HTML tags: `<b>`, `<br>`, `<i>`, `<a href>`. | Same — shown to customers before purchase. |

## Rules that bear on machine-readability

**`description`** — 10,000 char limit, alphanumeric, no HTML code and no promotional text, not enclosed in quotes. "The description from the landing page of your offer must be the same description as indicated in the feed." Recommend including size, color and pattern when applicable. "User relevant description with the most important data at the front." The description of the item can be slightly different, but it must be for the same item.

**`title`** — 150 char limit. "Use relevant titles that match with what users are searching for with key information first in the title (e.g., Women's over the knee boots)." When applicable include gender, size, color, material, and pattern details (e.g., "Women's small red wool sweater"). Include characteristics like color to differentiate from other products. Do not include promotional text (e.g., "Free shipping") or use all caps.

**`image_link`** — HTTP/HTTPS only; bmp, gif, exif, jpg, png, tiff; min 220×220px (250×250px for Apparel & Accessories > Shoes and > Clothing); max 16 MB; one image per item. No watermarks or free-shipping text. "Do not include any text within your images, including promotional messaging." White background recommended for a "pop" effect. **robots.txt must allow Microsoft Advertising to crawl your site — the ad cannot be served if crawling is incomplete.** Image link URL is case-sensitive; changing casing forces a re-crawl. Images may be auto-cropped to centre the product.

**`link`** — 0–2000 chars, HTTP/HTTPS only and **no redirects** (use `ads_redirect` for redirect URLs). Must point to the specific product, not the home page or a multi-product page. The product URL domain must match the store URL domain.

**`id`** — 50 Unicode char limit, unique per item per market, unique across multiple feeds. Same as the merchant product ID (MPID).

**Review latency:** first upload, and any later change to title, description, image URL or product URL, reverts the item to pending review — up to **3 business days**.

**`sale_price_effective_date`:** if you update `sale_price` but not the effective date, the sale price will continue to be used for your item.

## Installment attributes

Monthly installment plan displayed by number of months, with or without a down payment. Only applies to mobile and tablet product categories (ignored elsewhere): `4745 - Electronics > Computers > Tablet Computers`, `267 - Electronics > Communications > Telephony > Mobile Phones` and its children (Feature Phones, Smartphones, Watch Phones). `price` is treated as the down payment; for these categories price can be 0 when multiple installments are provided. Stated benefits: increased traffic volume, more informed shoppers, improved market share.

## Unique identifiers

"We recommend that you tag all three attributes for all your items" (`brand`, `gtin`, `mpn`), as they help to define your products in a global marketplace.

## Related pages in the same help section

Step 2 - Create a feed · Creating and organizing Microsoft Shopping campaigns feed files · What Google feed file attributes can I use? · Import your Google Merchant Center product offers to Microsoft Merchant Center · Merchant promotions
