---
name: build-qa
description: Pre-handoff quality gate for client website builds — performance, accessibility, conversion, and novel-tech checks. Run this before any build is considered done, regardless of niche.
---

# Build QA — pre-handoff gate

A build is not done until it passes every applicable check below. Where a
check doesn't apply (e.g. no forms on a given page), say so explicitly
rather than silently skipping.

## Performance

- Core Web Vitals targets on mobile, not just desktop: LCP < 2.5s,
  INP < 200ms, CLS < 0.1. Run Lighthouse (or `next build` + local
  profiling) before handoff — don't estimate, measure.
- Images: `next/image` with correct sizing, no unoptimized hero images.
  Property-niche sites specifically fail this most often — check large
  photography first.
- No render-blocking third-party scripts in the head. Booking widgets,
  chat widgets, analytics — defer/lazy-load unless the client explicitly
  needs it synchronous.

## Accessibility

- WCAG 2.1 AA baseline: color contrast, keyboard navigation, alt text on
  all content images, form labels (not placeholder-only labels), focus
  states visible.
- `prefers-reduced-motion` respected on any animation.

## SEO structure

- Meta title/description per page, not just homepage.
- schema.org structured data matched to niche: `MedicalClinic`/
  `LocalBusiness` (medical-aesthetic), `RealEstateAgent`/`LocalBusiness`
  (property), `ProfessionalService` (engineering/B2B) — pick the type that
  actually matches, don't default to generic `Organization` when a
  specific type exists.

## Conversion baseline

- One clear primary CTA above the fold per page — not competing CTAs.
- Every form actually sends and routes correctly — test it, don't assume.
  This is the most common silent failure in agency rebuilds.
- Forms kept short (≤5 fields for lead capture; longer only for
  RFQ-style engineering enquiries where detail is expected).
- Mobile tap targets meet minimum size (44x44px), not just desktop hover
  states.

## Novel-tech gate

WebGL/3D/heavy generative visuals are **opt-in per project**, not a
default trend checkbox:

1. Does the client's brief or niche pack actually call for it as a
   differentiator (e.g. engineering technical visualization), or is it
   being added because `docs/trend-reference.md` shows it trending
   elsewhere?
2. Does it still pass the performance targets above on a throttled mobile
   connection? If adding it breaks LCP/INP budget, it doesn't ship as-is —
   either optimize it down or drop it. Trend compliance never overrides
   performance and conversion on a client site.
3. For medical-aesthetic builds specifically, default to no novel-tech
   unless the human explicitly signs off — see
   `niche-medical-aesthetic/SKILL.md` for why.

## Compliance (medical-aesthetic builds only)

Confirm every item in `niche-medical-aesthetic/SKILL.md`'s compliance
section has been explicitly answered by the human, not defaulted. Do not
mark a medical-aesthetic build QA-passed with an unanswered compliance
item.

## Sign-off

Record, in the handoff message: which checks passed, which don't apply and
why, and any item the human explicitly accepted as a known trade-off
(e.g. "map view kept despite perf cost, client requested it"). Don't
silently ship a known trade-off without naming it.
