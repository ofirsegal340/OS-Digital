---
north_star: "A senior strategist's dark studio at night: calm, precise, lit only by the cool glow of live campaign dashboards."
colors:
  primary: "#3DBDF7"
  primaryHover: "#5CC8FF"
  secondary: "#7B6CF0"
  secondaryHover: "#8E7BFF"
  accentLight: "#BAE6FD"
  whatsapp: "#25D366"
  bg: "#080B14"
  surface: "#0E1322"
  surfaceRaised: "#161C30"
  foreground: "#FFFFFF"
  muted: "#A2A4A8"
  gradientCtaFrom: "#4FC3FF"
  gradientCtaTo: "#8E7BFF"
typography:
  fontFamily: "Heebo"
  weights: [300, 400, 500, 600, 700, 800, 900]
  headingTracking: "-0.015em"
  scale:
    display: "text-7xl"
    h1: "text-5xl"
    h2: "text-4xl"
    lead: "text-lg"
    body: "text-base"
    small: "text-sm"
    micro: "text-xs"
rounded:
  card: "1rem"
  button: "9999px"
  input: "0.75rem"
spacing:
  base: "4px"
  scale: [4, 8, 12, 16, 24, 32, 48, 64, 96]
  container: "72rem"
components:
  ctaButton:
    backgroundColor: "{colors.gradientCtaFrom}"
    textColor: "{colors.bg}"
    typography: "text-sm / 600"
    rounded: "{rounded.button}"
    padding: "16px 32px"
  whatsappButton:
    backgroundColor: "{colors.whatsapp}"
    textColor: "{colors.whatsapp}"
    typography: "text-sm / 500"
    rounded: "{rounded.button}"
    padding: "16px 32px"
  glassCard:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.card}"
    padding: "24px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    typography: "text-base / 400"
    rounded: "{rounded.input}"
    padding: "12px 16px"
---

# DESIGN.md — OS Digital

## Overview

OS Digital is a dark, glass-and-aurora landing page for a premium paid-ads agency
serving local service businesses in Israel. The voice is "Spatial Glass Pro": deep
near-black space, soft aurora light blooming behind content, and frosted glass panels
that float above it. Color is used as light, not paint. Restraint carries the premium
signal; nothing shouts. Hebrew-first and RTL-native throughout, set in Heebo with
tight heading tracking for an editorial feel. Motion is slow and ambient (aurora drift,
glow pulses, a single button shine), never urgent. See `PRODUCT.md` for strategy.

## Colors

Two brand hues read as cool light against deep space, joined by a single trust-green
for WhatsApp.

- `{colors.primary}` — Signal Blue, the primary brand light. Selection, focus, links,
  and the cool end of every gradient. Hover lifts to `{colors.primaryHover}`.
- `{colors.secondary}` — Strategy Violet, the warm partner hue. Always paired with
  Signal Blue in gradients and glows, never alone as a fill.
- `{colors.accentLight}` — Mist, a pale blue for small high-contrast accents on dark.
- `{colors.whatsapp}` — the one functional color, reserved exclusively for the WhatsApp
  contact path. Never decorative.
- Neutrals: `{colors.bg}` (page), `{colors.surface}` and `{colors.surfaceRaised}`
  (panels), `{colors.foreground}` (body), `{colors.muted}` (captions, secondary text,
  rendered as white at 62% over the page).
- CTA gradient runs `{colors.gradientCtaFrom}` to `{colors.gradientCtaTo}` at 135deg.

## Typography

Heebo for everything (Hebrew + Latin), loaded 300 to 900. Hierarchy comes from scale
plus weight, not color. Headings carry `-0.015em` tracking. Display and h1 land at
`{typography.scale.display}` / `{typography.scale.h1}`; section heads at
`{typography.scale.h2}`; body at `{typography.scale.body}`; supporting text at
`{typography.scale.small}`. Weights cluster at medium for UI, semibold for emphasis and
buttons, bold for headlines. Body never drops below 16px. Use `text-wrap: balance` on
headings.

## Elevation

There are no hard drop shadows. Depth is built from layered glass and colored glow:

- Panels use frosted glass (`.glass`, `.glass-card`, `.glass-card-elevated`): faint
  white border, translucent `{colors.surface}` fill, backdrop blur, a corner light wash.
- Glow replaces shadow: soft blue/violet halos (`.glow-blue`, `.glow-purple`) at low
  opacity, plus a fixed aurora-mesh background that drifts over 60s.
- The lead form is wrapped in an animated gradient `.glow-border` to mark it as the
  primary conversion surface.
- A `.dot-grid` texture and gradient `.section-divider` add quiet structure between
  sections.

## Components

- **Primary CTA** (`components.ctaButton`): full-pill, CTA-gradient fill, dark text for
  AA contrast, with a slow `btn-shine` sweep and a subtle hover lift. This is the only
  gradient-filled element.
- **WhatsApp button** (`components.whatsappButton`): full-pill outline style, green text
  on a 10% green tint with a 30% green border. Visually secondary to the primary CTA so
  the two never compete.
- **Glass card** (`components.glassCard`): the default content container, rounded-2xl,
  translucent surface, hairline border, lifting its glow and border on hover.
- **Input** (`components.input`): rounded-xl glass field; phone input forced LTR inside
  the RTL form.
- Containers cap at `{spacing.container}` (max-w-6xl); spacing follows the 4pt scale.

## Do's and Don'ts

**Do**

- Always pair Signal Blue with Strategy Violet in gradients and glows; never let violet
  fill a surface on its own.
- Always reserve `{colors.whatsapp}` for the WhatsApp action only.
- Always tint dark surfaces toward the brand hue; the darkest surface is `{colors.bg}`,
  never pure `#000000`.
- Always keep body text at or above 16px and AA contrast (>=4.5:1 body, >=3:1 UI).
- Always gate motion behind `@media (prefers-reduced-motion: reduce)`.

**Don't**

- Prohibited: the loud Israeli agency look. No neon red/yellow, no exclamation walls,
  no countdown timers, no "הגדל מכירות עכשיו!!!", no entry pop-ups. This is the named
  anti-reference.
- Forbidden: pure black (`#000000`) for any large surface. Use `{colors.bg}`.
- Forbidden: a second gradient-filled element competing with the primary CTA. Gradient
  fill is the CTA's alone.
- Never use gray text on a colored or tinted surface; darken the surface color instead.
- Never let glass or glow become decorative noise. Each frosted panel and halo must mark
  real hierarchy, never fill empty space.
- Never disable focus outlines without an equivalent visible replacement.
