---
name: niche-medical-aesthetic
description: Layout, conversion, and compliance constraints for Healthcare, Wellness, Clinic, Plastic Surgery, and Skin Clinic client sites. Load this after new-client-site resolves the niche — do not use standalone without the client's actual brief.
---

# Medical / aesthetic clinic sites

Covers: Healthcare, Wellness, Clinic, Plastic Surgery, Skin Clinic.
Current live clients in this bucket (for pattern reference, not copying):
Ace Aesthetics, Athira Clinic, INIYA Clinic, Biowellness, Hayfever
Solutions, Menzz Easy Reach, Massage Mountain Healing, Clarity CTPM.

## Read this first: compliance is not optional and not guessable

This skill does **not** contain legal rules. Medical/aesthetic advertising
law varies by country and changes; anything about "what's allowed" that a
model states confidently from training data may be wrong or outdated. The
client's jurisdiction was given as UK plus others not yet specified — do
not assume UK rules apply to a non-UK client.

Before publishing any medical/aesthetic site, confirm with the human (who
confirms with the client or current regulator guidance) on each of these
categories — do not draft copy that assumes an answer:

- **Outcome/results claims** — can the copy say "removes wrinkles" /
  "guaranteed results," or must it be qualified ("may reduce the
  appearance of...")? Regulators (e.g. UK ASA/CAP for advertising, the
  relevant medical/clinic regulator for the service type) typically
  restrict this — verify current wording rules, don't assume.
- **Before/after photography** — consent requirements, whether retouching
  disclosure is mandated, whether "results may vary" must appear adjacent.
- **Testimonials** — for some medical services testimonials are restricted
  or banned outright in some jurisdictions. Confirm before building a
  testimonials section, don't default to including one.
- **Practitioner credentials** — regulators often require named,
  verifiable practitioner qualifications displayed, not just "expert team."
- **Pricing display** — some jurisdictions require pricing transparency for
  medical/cosmetic procedures.
- **Data/privacy** — booking forms and health-related enquiry forms need
  privacy notices appropriate to health data handling, not a generic
  contact-form privacy line.

If the human can't confirm an answer, ship the more conservative version
(qualified claims, consented photos only, no testimonials) rather than
guessing permissive.

## Audience and psychology

Visitors are often anxious, comparison-shopping across multiple providers,
and researching before they'll ever call. Trust and clarity outrank
cleverness. A visually striking site that reads as slick-but-vague will
lose to a plainer one that answers "is this practitioner qualified, is
this safe, what does it cost, how do I book" fast.

## Conversion patterns

- Primary CTA (book consultation / call) visible above the fold on every
  page, not just the homepage.
- Practitioner credentials and registration/accreditation visible near the
  top of relevant service pages, not buried in an About page.
- Clear path from "service page" to "consultation booking" in 1-2 clicks.
- Booking integration: check `custom_recommended_services` — several
  current clients (e.g. Massage Mountain Healing) have "booking
  integration" explicitly scoped. Don't add a booking widget that isn't
  in scope; don't skip one that is.
- Mobile-first: this audience searches on mobile disproportionately.
  Anything that slows mobile load costs conversions directly here more
  than in other niches.

## Visual/tech guidance

Default to a calm, clinical-but-warm register: restrained color (1-2
accent colors max against neutral base), generous whitespace, legible type
at clinical-content sizes (body copy is often read carefully, not skimmed).

Novel-tech (WebGL heroes, heavy 3D, generative visuals) is **not** the
default here even if `docs/trend-reference.md` shows it trending elsewhere.
This audience is trust-sensitive and often on mobile — a flashy but slow
hero actively works against conversion. Reserve novel-tech for a specific
flagship/portfolio build where the client has explicitly asked for
differentiation and performance budget allows it (see `build-qa`).

## Content structure baseline

Home → Services (with individual service pages) → About/Practitioners
(credentials prominent) → Before/After (gated on compliance confirmation)
→ Booking/Contact → Legal (privacy, terms, medical disclaimers appropriate
to jurisdiction).
