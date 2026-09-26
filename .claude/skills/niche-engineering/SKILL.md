---
name: niche-engineering
description: Layout and conversion constraints for Engineering / B2B technical and professional-services client sites. Load this after new-client-site resolves the niche.
---

# Engineering / B2B professional services sites

Covers Engineering and adjacent B2B professional/technical services. Note:
ERPNext's `custom_industry` Select field does not currently have a
distinct "Engineering" value — the closest current buckets are
"Professional Services" and "Technology" (see
`docs/erpnext-field-map.md`). Confirm with the human that this pack is the
right match before building; don't infer it purely from the industry
field until that gap is fixed.

## Audience and psychology

Buyers here are procurement/technical decision-makers, often evaluating
multiple vendors against a spec, not impulse visitors. Sales cycles are
longer. The site's job is to get onto a shortlist and support a
multi-stakeholder internal sell, not to close a sale on-page.

## Conversion patterns

- Primary conversion is "request quote" / "start a conversation," not
  instant purchase or single-click booking. Don't force a residential-site
  urgency pattern onto this audience.
- Case studies with concrete, specific outcomes (not vague "we delivered
  excellence") are the highest-trust content type here — check
  `custom_recommended_services` / `custom_company_background` for real
  project details to draw from rather than generic placeholder cases.
- Certifications/accreditations (ISO, industry-specific licensing) need to
  be visible and verifiable, not just logos — link to the issuing body
  where possible.
- Technical capability pages (what you can actually do, specs/standards
  you work to) matter more than a generic "services" page — this audience
  filters on capability match early.
- Team/leadership credibility (named people, real experience) reads
  stronger here than an anonymous "our team" page.

## Content structure baseline

Home → Capabilities/Services (technical depth) → Case Studies/Projects →
Certifications/Compliance → About/Team → Contact (RFQ-oriented form:
project type, scope, timeline — not a generic "message us" box).

## Visual/tech guidance

Tone per `brand_tone` from intake is often "Technical and expert-led" or
"Professional and formal" for this niche — check the actual field rather
than assuming. Visual restraint reads as competence here; over-designed
sites can undermine trust with a technical buyer who expects substance
over polish. Novel-tech (3D product visualization, interactive technical
diagrams) can genuinely differentiate if it demonstrates real capability
(e.g. an interactive spec explorer) — but never as decoration; check
`build-qa` before adding anything that doesn't serve the technical sell.
