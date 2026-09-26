# ERPNext field contract

Fields the `new-client-site` skill reads, confirmed against the live
ERPNext instance on 2026-09-26. Re-verify with `get_doctype_info` if a
field is missing — schemas change.

## `Customer` doctype (primary source)

| Field | Type | Use |
|---|---|---|
| `customer_name` | Data | Client display name |
| `custom_industry` | Select | Niche routing — see mapping below |
| `industry` | Link | Standard Frappe industry link, sparsely populated; `custom_industry` is more reliable, prefer it |
| `custom_website_url` | Data | Existing site, if any — check before assuming "no website" |
| `custom_target_audience` | Long Text (Claude) | Who the site must speak to |
| `custom_brand_voice` | Small Text (Claude) | Tone constraint |
| `custom_pain_point_summary` | Long Text (Claude) | What the client is frustrated by — informs what NOT to repeat from their old site |
| `custom_opportunity_summary` | Long Text (Claude) | What to lead with |
| `custom_company_background` | Long Text (Claude) | About/story content seed |
| `custom_competitor_summary` | Long Text (Claude) | Differentiation angle |
| `custom_recommended_services` | Small Text (Claude) | What the agency scoped — tells you if "website rebuild" is even in scope, or if this is SEO/ads only |
| `custom_team_notes` | Long Text | Anything a human flagged manually — always read this, it overrides AI-generated fields |
| `custom_strategy_brief` | Long Text (Claude) | 90-day strategy context |
| `custom_intake_completed` | Check | If false, stop and flag — do not build from an incomplete brief |

## `Client Intake Form` doctype (if `custom_linked_project` / a submitted form exists)

Richer source when available — includes `usp`, `words_describe_brand`,
`words_never_use` (hard constraint, treat as a blocklist), `brand_tone`,
`website_happy` (tells you if this is a rebuild or greenfield), and the
`claude_*` interpretation fields (pain points, opportunities, recommended
services, risk flags, strategy brief).

`claude_risk_flags` must be read and surfaced to the human before build
starts — never silently proceed past a flagged risk.

## `custom_industry` → niche pack mapping

| `custom_industry` value seen in ERPNext | Niche pack |
|---|---|
| Healthcare | `niche-medical-aesthetic` |
| (no current value, but client is a clinic/wellness/plastic-surgery/skin-clinic business) | `niche-medical-aesthetic` |
| Property & Construction (residential/agency context) | `niche-property` |
| Property & Construction (developer/management context) | `niche-property` (management sub-pattern) |
| Professional Services | `niche-engineering` (best current fit) |
| Technology (B2B/procurement-style product or service) | `niche-engineering` |
| Technology (self-serve app/software product) | `niche-app-marketing` — confirm with the human which one, `custom_industry` alone can't distinguish these |
| E-commerce | `niche-ecommerce` |
| Other, where the client is actually a church | `niche-faith-nonprofit` (church sub-pattern) — e.g. **More Church**, currently sitting under `Other` |
| Other, where the client is actually a non-profit/charity | `niche-faith-nonprofit` (non-profit sub-pattern) |
| Anything else / `Other` / empty, not covered above | No niche pack matches — ask the human which pack applies, or whether a new one is needed. Do not guess. |

Known gaps in the `custom_industry` Select list — flag to the team rather
than working around them silently:

- No distinct **Engineering** value (closest: Property & Construction /
  Professional Services).
- No distinct **App/Software** value separate from general Technology.
- No **Church** or **Non-profit/Charity** value — these currently land in
  `Other`, which is why `Other` can't be routed automatically and always
  needs a human check.
