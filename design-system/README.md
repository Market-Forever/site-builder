# design-system

Shared base every client build starts from. This is intentionally minimal —
tokens + a handful of primitives, not a finished UI kit. Niche packs and
each client's brand voice do the rest of the work.

## Why a shared base exists

Without one, each build reinvents buttons/spacing/type scale, and quality
becomes dependent on which team member built it. This exists so
consistency and QA don't rely on everyone remembering the same defaults.

## Using it

1. `npx create-next-app@latest <client-slug> --typescript --tailwind --app`
2. Copy `tailwind.config.ts`, `src/styles/tokens.css`, and
   `src/components/` from this directory into the new project.
3. Override tokens in `tokens.css` per client brand (colors, font pairing)
   — never rewrite the component structure per client, only the tokens
   feeding it. If a niche genuinely needs a structurally different
   component, that's a signal to add it here as a shared primitive, not to
   fork it silently in one project.

## What's here

- `tailwind.config.ts` — token-driven config, no hardcoded client colors.
- `src/styles/tokens.css` — CSS custom properties for color/type/spacing,
  the only place a client's visual identity should be set.
- `src/components/` — `Button`, `Section`, `Container` primitives that
  niche patterns build on top of.

## What's deliberately not here

Niche-specific layout (booking flows, listing grids, case-study layouts)
lives in the relevant `.claude/skills/niche-*/SKILL.md` guidance and gets
built per-project — this directory stays generic on purpose.
