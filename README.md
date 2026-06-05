# TRT Boost — Marketing & Storefront

The public-facing website for **TRT Boost**, a men's health / TRT telehealth brand
(à la Hims / Henry Meds). Visitors browse treatments and pricing, then hand off to
**Lobbie** for clinical intake, prescribing, and fulfillment.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` in `src/app/globals.css`)
- **lucide-react** icons
- SSG/SSR-ready for SEO and high traffic; deploy on **Vercel** (or any Node host)

Chosen to mirror what large telehealth e-commerce brands run: server rendering for
SEO + marketing pages, trivial horizontal scaling behind a CDN, and a clean seam
for a Stripe merchant account when direct on-site checkout is added.

## Getting started

```bash
npm install
cp .env.example .env.local   # then set NEXT_PUBLIC_LOBBIE_INTAKE_URL
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
```

## Project structure

```
src/
  app/
    page.tsx                 Home
    treatments/              Treatments index + [category] dynamic pages
    pricing/                 Full catalog + shipping pricing
    how-it-works, about, contact, faq
    legal/                   privacy-policy, terms, refund-policy, shipping
    sitemap.ts, robots.ts    SEO
    globals.css              Tailwind v4 theme (navy "ink" + neon "brand" green)
  components/
    layout/                  Header, Footer
    marketing/               Hero bits, CategoryCard, ProductCard, Faq, CtaBand, CardBrands…
    brand/                   Wordmark (typographic), Logo (PNG artwork)
    legal/                   LegalLayout
    contact/                 ContactForm
    ui/                      Button, Container, Section, Icon
  lib/
    catalog.ts               Typed product catalog (28 items / 5 categories) — source of truth for pricing
    site.ts                  Site config: name, contact, nav, LOBBIE_INTAKE_URL
    faq.ts, format.ts, cn.ts
public/brand/                TRT Boost logo artwork (trimmed for web)
```

### Editing content

- **Products / prices** → `src/lib/catalog.ts` (drives home, treatments, and pricing).
- **Contact info, nav, Lobbie URL** → `src/lib/site.ts`.
- **Legal copy** → `src/app/legal/*/page.tsx` (transcribed from the official policy PDFs).
- **Brand colors / fonts** → `@theme` block in `src/app/globals.css`.

## Payments & Lobbie integration

**Today (Lobbie handoff):** every CTA links to `LOBBIE_INTAKE_URL`
(`NEXT_PUBLIC_LOBBIE_INTAKE_URL`, see `src/lib/site.ts`). Lobbie handles the
clinical questionnaire, provider review, and processing. Repoint the whole site by
changing that one env var.

**Next (direct on-site checkout / merchant account):** the codebase is structured
to add **Stripe** without rework:

1. Add Stripe keys to `.env.local` (placeholders are in `.env.example`).
2. Add `app/api/checkout/route.ts` to create a Stripe Checkout Session (use
   `catalog.ts` for line items / subscription prices) and a Stripe webhook at
   `app/api/webhooks/stripe/route.ts`.
3. Swap the `GetStarted` CTA (or `ProductCard`'s "Start Visit") to POST to the
   checkout route for products that should be purchased on-site, keeping the
   Lobbie handoff for the clinical intake step.
4. Optionally sync orders/patients to Lobbie via its API (`LOBBIE_API_*`).

Because TRT is subscription-based, use Stripe **Billing/Subscriptions** with the
recurring prices that mirror `catalog.ts`. This matches the Refund, Terms, and
Shipping policies already written into the site.

## Notes

- The contact form (`ContactForm.tsx`) is a front-end demo (shows a success
  state). Wire its submit handler to your support inbox / CRM / Lobbie endpoint.
- The Privacy Policy is an authored template — have counsel review before launch.
  The Refund, Terms, and Shipping pages are transcribed from the provided PDFs;
  bracketed placeholders (e.g. `[State]`, company address) still need filling in.
- Logo artwork in `public/brand` was downscaled and auto-trimmed from the source
  files for web use.
