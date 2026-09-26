---
name: niche-ecommerce
description: Layout, conversion, and performance constraints for E-commerce client sites. Load this after new-client-site resolves the niche.
---

# E-commerce sites

Current live clients in this bucket (`custom_industry`: E-commerce): Belonging,
Silverwaters, Conga Fitness, Farm Go, Biofusions, Tuck & Tonic.

## Read this first: confirm what's actually being built

"E-commerce" client doesn't automatically mean "we build a custom cart and
checkout." Check `custom_recommended_services` / the intake brief before
assuming scope:

- If a platform (Shopify, etc.) is already handling or scoped to handle the
  actual store/checkout, this build may be the marketing site + content
  pages around it, not a custom transactional flow. Building a parallel
  checkout nobody asked for is real wasted work here.
- If this genuinely is a custom storefront build (headless commerce against
  a platform's API, or fully custom), confirm the commerce backend before
  writing any cart/checkout logic — don't invent a payment integration.

## Audience and psychology

Visitors are here to buy, not to be persuaded a business exists. Unlike the
lead-gen niches, the conversion event is the purchase itself, which makes
this the least forgiving niche for friction: every extra step, slow image,
or unclear price loses a sale directly and measurably.

## Conversion patterns

- Product listing pages: clear filtering/sorting, accurate stock status
  visible before checkout, not just at cart.
- Product detail pages are the highest-leverage page type: multiple real
  photos (not just one hero shot), clear pricing, size/variant selection
  that doesn't require a page reload, reviews/ratings if in scope.
- Checkout: guest checkout as default (forcing account creation is a
  well-documented drop-off point), minimal required fields, visible
  security/payment trust signals at the point of payment entry, not just
  the footer.
- Returns/shipping policy visible before checkout, not buried — this is a
  common trust blocker for new customers on a small/unfamiliar brand.
- Cart abandonment recovery (email flows, retargeting) is a marketing
  automation concern downstream of this repo — flag it as a follow-up
  scope item, don't try to build it into the site itself.

## Performance — the strictest gate of any niche here

Product image weight is the single most common perf failure in
e-commerce rebuilds. `next/image` with real responsive sizing is not
optional. LCP directly measured against conversion rate is one of the
best-documented relationships in e-commerce specifically — treat the
`build-qa` performance budget as a hard gate here, not a nice-to-have.

## SEO structure

`Product` and `BreadcrumbList` schema.org markup on PDPs, `ItemList` on
category pages. Missing structured data here has a direct, measurable
organic-traffic cost for this niche more than most.

## Visual/tech guidance

Photography quality matters more than layout cleverness. A 360°/interactive
product view or configurator is one of the few cases where novel-tech
genuinely earns its performance cost, because it directly reduces purchase
uncertainty — still must clear the `build-qa` mobile performance budget
before shipping, per the novel-tech gate.
