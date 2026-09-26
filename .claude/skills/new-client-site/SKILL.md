---
name: new-client-site
description: Start a new client website build by pulling live brief data from ERPNext, resolving the correct niche pack, and scaffolding a Next.js/Tailwind project from the shared design system. Use when starting any new client site build, or rebuilding an existing client's site.
---

# New client site

## 1. Get the client identifier

Ask for the ERPNext `Customer` name if not given. Do not proceed on a name
you're guessing at — resolve it against ERPNext first (`search_doctype` on
`Customer` if the exact name is unclear).

## 2. Pull the brief

Use the `ERPNext_Assistant_Core` MCP tools to fetch, in this order:

1. `get_document` (or `list_documents` with a `name` filter) on `Customer`
   for the fields in `docs/erpnext-field-map.md`.
2. If `custom_linked_project` or a submitted `Client Intake Form` exists for
   this customer, fetch it too — it's richer than the Customer rollup.

If `custom_intake_completed` is false, or core fields (`custom_target_audience`,
`custom_brand_voice`) are empty: **stop and tell the human.** Do not invent a
brand voice or audience to fill the gap. A build from an incomplete brief is
a rework risk, not a time save.

If `claude_risk_flags` (on the Client Intake Form) or `custom_risk_flags`
(on Customer) is non-empty, surface it before doing anything else and get
explicit human confirmation to proceed.

## 3. Resolve the niche pack

Use `custom_industry` against the mapping table in
`docs/erpnext-field-map.md`. If it doesn't map cleanly, ask the human which
niche pack applies rather than guessing from the business description.

Load the matched skill:
- `niche-medical-aesthetic` — Healthcare, Wellness, Clinic, Plastic Surgery,
  Skin Clinic
- `niche-property` — residential agents and property management/developers
- `niche-engineering` — B2B professional/technical services

## 4. Check what's actually being built

Read `custom_recommended_services` / the intake's recommended-services
field. A site rebuild may not even be in scope — if the client is scoped
for SEO/ads only, say so instead of building a site nobody asked for this
round.

If `custom_website_url` / `website_url` is populated, treat this as a
rebuild: read the pain-point summary for what's explicitly wrong with the
current site, and don't reintroduce those problems.

## 5. Scaffold

- Copy `design-system/` as the starting point (Next.js App Router,
  TypeScript, Tailwind, shadcn/ui base components, design tokens).
- Do not start from a blank Next.js app — the shared base is what keeps
  quality and consistency across builds by different people on the team.
- Apply the matched niche skill's layout/conversion patterns on top.
- Apply `custom_brand_voice` / `brand_tone` to copy, and treat
  `words_never_use` (if present) as a hard blocklist, not a suggestion.

## 6. Check current trends before styling

Read `docs/trend-reference.md`. If it's more than 2 quarters stale, flag
that to the human before treating anything in it as current — don't run
on stale trend data silently.

## 7. Before calling it done

Run the `build-qa` skill. Do not hand off a build that hasn't passed it.

## What this skill does not do

- Does not deploy. Deployment is separate.
- Does not write back to ERPNext (no auto-updating `custom_website_url` or
  task status) unless the human explicitly asks for that in a given run —
  that's a CRM workflow decision, not a default of a website build.
