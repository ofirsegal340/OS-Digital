# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
OS Digital — landing page for a paid advertising agency targeting small-medium businesses in Israel. Single-page Hebrew (RTL) site focused on lead generation via contact form and WhatsApp.

## Commands
```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
```

## Tech Stack
- **Next.js 14** (App Router) — single page at `app/page.tsx`
- **Tailwind CSS** — brand colors defined in `tailwind.config.ts`
- **Framer Motion** — animations on all client components
- **React Hook Form + Zod** — form validation (`lib/validations.ts`)
- **Lucide React** — icons

## Architecture
```
app/
  page.tsx               ← Main page composing all sections
  layout.tsx             ← RTL, Inter font, metadata
  api/contact/route.ts   ← POST handler → validates with Zod → forwards to Payload CMS
components/
  Navbar.tsx             ← Sticky, blur on scroll, CTA scrolls to form
  HeroSection.tsx        ← Badge + headline + dual CTAs (form scroll + WhatsApp)
  PlatformsBar.tsx       ← CSS-only marquee (no JS)
  ServicesSection.tsx    ← 4 service cards, staggered viewport animation
  StatsSection.tsx       ← 4 metrics with count-up animation
  ContactForm.tsx        ← 5 fields, 4 states (idle/loading/success/error)
  Footer.tsx             ← Copyright + Instagram link
lib/
  validations.ts         ← Zod schema + budget options
```

## Key Patterns
- **RTL**: `<html lang="he" dir="rtl">` — all layout flows right-to-left. Phone input uses `dir="ltr"`.
- **Form flow**: Client validates → POST `/api/contact` → server re-validates → forwards to `PAYLOAD_ENDPOINT` (env var)
- **WhatsApp number** comes from `NEXT_PUBLIC_WHATSAPP_NUMBER` env var
- **Brand colors**: Primary Blue `#00D4FF`, Purple `#B44FFF`, Background `#0A0E1A`, WhatsApp Green `#25D366`
- **Animations**: All use Framer Motion with `viewport={{ once: true }}` — trigger once on scroll into view

## Environment Variables
- `PAYLOAD_ENDPOINT` — Payload CMS URL for lead submission (server-side only)
- `NEXT_PUBLIC_WHATSAPP_NUMBER` — WhatsApp number with country code (972...)
