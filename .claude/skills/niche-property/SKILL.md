---
name: niche-property
description: Layout and conversion constraints for Property client sites — both residential real estate agents and property management/developers. Load this after new-client-site resolves the niche.
---

# Property sites

Covers both sub-patterns below — confirm which one applies from the
client's brief (`custom_recommended_services` / intake business
description) before choosing. Do not assume "Property" means listings
search by default; check.

Current live client for reference: Camelot Finland (`custom_industry`:
Property & Construction).

## Sub-pattern A: residential real estate agents

Consumer-facing, listing-driven.

- Listing search/filter is the core feature — location, price, bed/bath,
  type. If the client uses a third-party listings feed (Rightmove/Zoopla
  API or similar in the UK, MLS/IDX equivalents elsewhere), the site needs
  an integration point, not hand-maintained listing pages. Confirm which
  feed/CRM before building — don't assume.
- Per-listing lead capture (book viewing / request details) — keep the
  form short (name, phone, preferred contact time) since mobile users
  abandon long forms fast here.
- Map-based browse is a common differentiator but is a real performance
  cost — only include if the client's actual listing volume justifies it.
- Valuation/lead-magnet form ("what's my home worth") is a proven
  conversion pattern for this niche — check if in scope.
- Prominent phone/WhatsApp CTA — UK residential property audiences skew
  toward wanting to call, not just email.

## Sub-pattern B: property management / developers

Trust/portfolio-facing, not search-driven.

- Portfolio/project showcase as the primary content, not a listings grid.
- Investor or tenant trust signals: completed project count, scale
  (units/sq ft under management), compliance/accreditation badges relevant
  to property management in the client's jurisdiction.
- Brochure/deck download as a lead-capture point, common in this
  sub-pattern.
- Longer-form content acceptable (case studies, development timelines) —
  this audience reads more than a homebuyer casually browsing.

## Shared conversion baseline

- Every property site needs a fast, working contact/enquiry path — this is
  the single most common failure mode in agency rebuilds (forms that don't
  actually send, or route to a dead inbox). Verify the form's destination
  works before handoff, in `build-qa`.
- SEO structure matters more here than most niches — local search
  (`RealEstateAgent` / `LocalBusiness` schema.org markup) drives real
  discovery traffic for this niche specifically.

## Visual/tech guidance

Property sites tolerate more visual ambition than medical — large
photography, subtle parallax/scroll reveals read as current without
hurting trust. Still check `build-qa` performance budgets: large hero
imagery is the most common perf killer in this niche specifically, so
image optimization (next/image, proper sizing) is not optional.
