# site-builder

Market Forever's website build system: React/Next.js/Tailwind client
sites, driven by client briefs already captured in ERPNext, organized by
niche (medical-aesthetic, property, engineering/B2B, e-commerce,
church/non-profit, app marketing).

See `CLAUDE.md` for the full workflow. Start with the `new-client-site`
skill.

## Layout

- `.claude/skills/` — the build workflow (`new-client-site`), niche packs,
  the pre-handoff QA gate (`build-qa`), and the quarterly trend-refresh
  process.
- `design-system/` — shared Next.js/Tailwind base every project starts
  from.
- `docs/erpnext-field-map.md` — exact ERPNext fields the build skill reads.
- `docs/trend-reference.md` — living, team-maintained record of current
  design trends. Not baked into any skill, because "current" doesn't stay
  current.

## Not in scope here

- CRM/intake (already exists in ERPNext).
- Deployment (handled separately).
