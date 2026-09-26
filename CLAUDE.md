# site-builder — Market Forever client website builds

This repo builds React/Next.js/Tailwind websites for Market Forever clients.
It does not host client data — client business context lives in ERPNext and
is pulled live via the `ERPNext_Assistant_Core` MCP tools at build time.

## What this repo is not

- Not a CRM. Client intake, briefs, brand voice, and industry classification
  already exist in ERPNext (`Client Intake Form`, `Customer` doctypes). Never
  recreate that data here — read it.
- Not a deployment pipeline. Deployment is handled separately/manually.
  This repo's job ends at a reviewed, working codebase.

## Workflow for a new client site

1. Run the `new-client-site` skill with the ERPNext Customer name. It pulls
   the Customer record + linked Client Intake Form, resolves which niche
   pack applies, and scaffolds the project from `design-system/`.
2. The matched niche skill (`niche-medical-aesthetic`, `niche-property`,
   `niche-engineering`) governs layout, conversion, and (for medical) the
   compliance checklist. It is not a template — it is constraints on what
   this specific build must do given the client's brief.
3. Before handoff, run the `build-qa` skill. A build is not done until it
   passes.
4. `docs/trend-reference.md` is what "current" means right now — it is a
   living document the team updates, not something baked into a skill.
   Any skill's visual guidance defers to it, not to a model's training data.

## Stack defaults

- Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui as the component
  base in `design-system/`.
- Motion: CSS/Framer Motion by default, respecting `prefers-reduced-motion`.
  WebGL/3D is opt-in per project (see `build-qa`), never a default, because
  it trades against performance and conversion on mobile — see
  `niche-medical-aesthetic/SKILL.md` for why that trade-off matters most
  there.

## ERPNext field contract

See `docs/erpnext-field-map.md` for the exact fields `new-client-site` reads.
If a field is missing or empty for a client, the skill says so and asks
rather than inventing brand tone or claims.
