---
name: niche-faith-nonprofit
description: Layout and conversion constraints for church and non-profit/charity client sites. Load this after new-client-site resolves the niche.
---

# Church and non-profit / charity sites

Real live client: **More Church** — currently classified `custom_industry:
Other` in ERPNext, because there is no Church/Non-profit option in that
picklist yet. Flag this to the team as a gap to add (same class of issue as
the missing Engineering value — see `docs/erpnext-field-map.md`); don't
let a client sit under "Other" silently once this pack exists.

## Shared baseline across both sub-patterns

- Tone is warm and community-facing, not corporate. Copy and photography
  should center real people (congregation, volunteers, beneficiaries), not
  stock-feeling imagery — this audience trusts specificity over polish.
- Trust here is about "where does my money/time go," not "is this a
  legitimate business" — be concrete: named leadership, real numbers
  (people served, funds raised, years active), not vague mission language
  alone.
- Primary CTA is rarely a sale — it's "give," "volunteer," "visit," or
  "get involved." Don't force an e-commerce-style hard-sell pattern here.

## Sub-pattern A: church

- Service times and location/directions visible on the homepage, not
  buried in a "visit" subpage — this is usually the single most-sought
  piece of information for a first-time visitor.
- "Plan a visit" / newcomer path as the primary above-fold CTA, ahead of
  giving — a first-time visitor converts by showing up, not by donating.
- Sermon archive / livestream embed if in scope — confirm which platform
  (YouTube, a church-specific streaming service, etc.) before building an
  embed; don't assume one.
- Ministries/small groups/events calendar as secondary navigation.
- Giving/donations: almost always routed through a third-party giving
  platform (e.g. Tithe.ly, Give, a payment processor's giving product) —
  confirm which one is in use or planned before building a donation flow;
  this is very rarely a custom checkout.

## Sub-pattern B: non-profit / charity

- Mission and impact stated concretely on the homepage — a specific
  outcome ("X families housed this year") outperforms a general mission
  statement for this audience.
- Donation CTA prominent, alongside volunteer signup as an equally valid
  conversion path — not every visitor is a donor prospect.
- Current campaigns/appeals need to be easy to update without a developer
  — flag if the client will need CMS-level control over this content.
- **Charity registration/transparency disclosure**: some jurisdictions
  require a registered charity number or equivalent to be displayed on
  external communications (e.g. UK charities under certain rules). This
  skill does not state which rule applies — confirm current requirement
  for the client's actual jurisdiction with the human before publishing,
  same principle as the compliance check in `niche-medical-aesthetic`:
  don't guess, don't omit, don't invent the specific rule.

## Visual/tech guidance

Restraint and warmth over spectacle. Novel-tech (WebGL, heavy motion) is
essentially never the right differentiator here — this audience responds
to authenticity and clarity, and a slick, effects-heavy site can read as
tone-deaf against a mission-driven or donation-driven message. Default to
no novel-tech unless the human explicitly overrides, same posture as
`niche-medical-aesthetic`.
