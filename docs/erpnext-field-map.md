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

As of 2026-09-27 the picklist is: Healthcare, Property & Construction,
E-commerce, Professional Services, Hospitality, Retail, Technology,
Education, Finance, Engineering, Church, Non-Profit / Charity,
App / Software, Other.

| `custom_industry` value | Niche pack |
|---|---|
| Healthcare | `niche-medical-aesthetic` |
| Property & Construction (residential/agency context) | `niche-property` |
| Property & Construction (developer/management context) | `niche-property` (management sub-pattern) |
| Engineering | `niche-engineering` |
| Professional Services | `niche-engineering` (best current fit — some Professional Services clients may not fit; check the brief) |
| Technology | Ambiguous — could be `niche-engineering` (B2B/procurement-style product) or `niche-app-marketing` (self-serve app/software). `custom_industry` alone can't distinguish these; confirm with the human. |
| App / Software | `niche-app-marketing` |
| E-commerce | `niche-ecommerce` |
| Church | `niche-faith-nonprofit` (church sub-pattern) |
| Non-Profit / Charity | `niche-faith-nonprofit` (non-profit sub-pattern) |
| Other / empty | No niche pack matches automatically. Read `custom_company_background` and `custom_target_audience` for real evidence before asking the human which pack applies (or whether a new one is needed) — don't guess from the client name alone. Some `Other` clients (e.g. a security-equipment hire business, a local pet-care service) genuinely don't fit any pack yet — that's a legitimate outcome, not a classification failure. |

Reclassified from `Other` with confirmed evidence on 2026-09-27: **More
Church** → Church; **LMI** (Legacy Ministries International, a
registered UK charity) → Non-Profit / Charity.

## Auto-classifying new customers

Not yet automated. The existing `claude_*` enrichment fields (pain points,
recommended services, etc.) are populated by an external pipeline — likely
n8n calling out to Claude on Client/Intake Form submission, based on the
"Populated by n8n" field descriptions elsewhere on `Customer`. The right
place to add `custom_industry` classification is inside that existing
pipeline, not as a separate mechanism — it already has the business
description in hand at the moment a customer/intake record is created.
Until that's wired up, classify `custom_industry` manually per new client.
