---
name: trend-refresh
description: Quarterly process for updating docs/trend-reference.md with current design trends. Use when trend-reference.md is stale (>2 quarters old) or on a scheduled quarterly review, not as part of an individual client build.
---

# Trend refresh

This is a process skill for the team, run quarterly — not part of a single
client build. `new-client-site` and the niche skills read
`docs/trend-reference.md` rather than trusting a model's sense of "current"
directly, because that sense is frozen at training time and this file is
not.

## Steps

1. Check `docs/trend-reference.md`'s "Last updated" date. If it's within
   the current or prior quarter, this refresh may not be needed yet —
   confirm with the human before redoing it.
2. Identify 5-8 live reference sites per active niche (medical-aesthetic,
   property, engineering) — current Awwwards/Site-of-the-day picks in
   comparable categories, plus 1-2 direct competitors of current clients
   that look visibly newer than the last build in that niche.
3. For each, extract the pattern (layout, hero treatment, motion, color,
   type), not just "looks like X site" — patterns are reusable, imitation
   isn't.
4. Explicitly separate what's a genuine differentiator right now from
   what's a gimmick that will look dated in two quarters — favor patterns
   with staying power (type/layout/color discipline) over one-off effects.
5. Update `docs/trend-reference.md`: mark the new quarter's section,
   mark the previous quarter's entries as still-valid or superseded, update
   "Last updated."
6. Do not let this become an excuse to add novel-tech to every build — see
   `build-qa/SKILL.md`'s novel-tech gate. This file informs the visual bar,
   it doesn't override the performance/conversion/compliance gates.
