---
name: niche-app-marketing
description: Layout and conversion constraints for app/software product marketing sites (not the app itself — the site that sells it). Load this after new-client-site resolves the niche.
---

# App / software product marketing sites

Not the same as `niche-engineering`. Engineering serves a slow,
multi-stakeholder B2B procurement decision; this pack serves a fast,
often single-visitor, self-serve evaluation ending in a download or
signup, sometimes in under a minute. Don't apply the engineering pack's
patterns here even if `custom_industry` shows "Technology" for both —
check the actual product/audience before picking a pack.

Note on ERPNext: there is no distinct "App"/"Software" value in
`custom_industry` yet — "Technology" is the closest current bucket and
covers both this pack and, potentially, `niche-engineering` clients.
Confirm with the human which pack actually fits; don't infer purely from
the field.

## Audience and psychology

Visitors are often mid-scroll from an ad, a search result, or a
recommendation, comparing this against several alternatives in the same
session. Attention is short and the bounce risk is the highest of any
niche in this repo — the site has seconds to communicate what the
product does and why it's worth the download/signup.

## Conversion patterns

- Above-the-fold: one clear value proposition sentence, one primary CTA
  (Download / Get Started / Start free trial), and a real product visual
  (screenshot, short looping demo, or GIF) — not an abstract illustration
  standing in for the actual product.
- App store badges (iOS/Android) or a direct signup CTA — confirm which
  applies; a mobile app needs store badges, a web app needs a signup flow,
  don't default to both without checking.
- Feature sections as screenshot + benefit-focused copy pairs, not just
  feature-name lists — show the product doing the thing, not just
  claiming it.
- Social proof: user/download counts, star ratings, recognizable customer
  logos if available — check what the client actually has before
  fabricating placeholder numbers.
- Pricing page if freemium/subscription — clear tier comparison, no
  hidden-cost surprises, since this audience self-serves and won't call to
  ask.
- FAQ addressing the objections that stall self-serve signup (data
  privacy, cancellation, platform compatibility).

## Performance

Treat the Core Web Vitals budget in `build-qa` as the strictest of any
niche here — this audience has the lowest patience for a slow load of
anyone this repo builds for, often on a mobile connection straight from an
ad click.

## Visual/tech guidance

Novel-tech is more justified here than in most niches, specifically when
it demonstrates the product itself: an embedded live/interactive demo, a
before/after or drag-to-compare feature showcase, an actual working
mini-version of a key feature. It is not justified as generic decoration
(particle backgrounds, unrelated 3D). Every addition still has to clear
the mobile performance budget in `build-qa` — this audience is the least
tolerant of a slow hero of anyone in this repo, so the trade-off is
tighter here than anywhere else.
