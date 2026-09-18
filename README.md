# TRT Boost — Marketing & Storefront 
 
The public-facing website for **TRT Boost**, a men's health / TRT telehealth clinic.
Visitors browse treatments, build a plan in the cart, and hand off to **Lobbie** for
clinical intake, prescribing, and fulfillment.

- **Editing with Claude?** Read `CLAUDE.md` (Claude loads it automatically).
- **Taking ownership / launching?** Read `HANDOFF.md` — transfer steps, DNS, env vars, and the launch checklist.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` in `src/app/globals.css`)
- **lucide-react** icons · **next/image** · **next/font** (Inter + Sora)
- Deployed on **Vercel** (GitHub → automatic production deploys from `main`, preview deploys from branches)

## Getting started

```bash
npm install
cp .env.example .env.local   # optional locally; production values live in Vercel
npm run dev                  # http://localhost:3000
npm run build && npm run lint
```

`.env.example` documents every environment variable. In production they are set in
Vercel → Settings → Environment Variables (a change requires a redeploy).

## Project structure

```
src/
  app/
    page.tsx                     Home
    treatments/                  Index + [category] pages (product cards, add to cart)
    treatment-areas/             Index + [state] local-SEO pages (50 states + D.C.)
    learn/                       Article hub + [slug] articles
    cart/                        Multi-treatment cart page
    start/                       Intake quiz → Lobbie handoff
    pricing, reviews, faq, how-it-works, about, contact
    legal/                       10 policy pages (privacy, terms, refund, shipping, HIPAA NPP, …)
    api/checkout, api/webhooks/stripe   Stripe scaffold (dormant until keys are set)
    sitemap.ts, robots.ts        SEO (robots blocks crawlers unless NEXT_PUBLIC_NOINDEX=false)
    layout.tsx                   Root layout, CartProvider, analytics, noindex default
    globals.css                  Tailwind v4 theme (navy "ink" + neon "brand" green) + motion system
  middleware.ts                  Optional HTTP Basic Auth gate (active when PREVIEW_PASSWORD is set)
  components/
    layout/                      Header (nav, search, cart button), Footer, FloatingActions
    marketing/                   Hero pieces, CategoryCard, ProductCard, ArticleCard, Faq, TrustBadges (not rendered), …
    cart/                        CartDrawer, CartLines, AddToCartButton, CartCheckoutButton, CartView
    quiz/                        Intake quiz
    search/                      ⌘K command palette
    analytics/                   GA4 loader (when NEXT_PUBLIC_GA_ID is set)
    seo/                         JSON-LD helper
    brand/, legal/, contact/, ui/
  lib/
    catalog.ts                   Product catalog (28 SKUs / 5 categories) — source of truth for prices
    site.ts                      Site config: name, contact, nav, Lobbie URL
    cart.tsx                     Cart state (React context + localStorage)
    articles.ts, faq.ts, reviews.ts, states.ts, seo.ts, analytics.ts, stripe.ts, format.ts, cn.ts
public/
  brand/                         Logo artwork; badges/ (LegitScript, SOC 2 seals — display only when certified)
  images/products/meds/          One studio render per product: <slug>.webp
  images/team/                   Placeholder provider photos (replace)
```

### Editing content

- **Products / prices / doses** → `src/lib/catalog.ts` (drives home, treatments, pricing, cart).
- **Contact info, hours, legal name, nav, Lobbie URL** → `src/lib/site.ts`.
- **Articles / FAQs / reviews / states** → `src/lib/articles.ts`, `faq.ts`, `reviews.ts`, `states.ts`.
- **Legal copy** → `src/app/legal/*/page.tsx`.
- **Product images** → `public/images/products/meds/<slug>.webp`.
- **Brand colors / fonts** → `@theme` block in `src/app/globals.css`.

## Lobbie, cart, and payments

- Every "Get Started / Start visit" CTA and the cart's checkout route through the intake quiz and
  then hand off to `NEXT_PUBLIC_LOBBIE_INTAKE_URL`. Set that variable to the real Lobbie intake link.
- The **cart** lets a visitor combine treatments across categories (e.g. TRT + hair loss) into one
  plan. Today nothing is charged on-site — the visitor is handed to Lobbie, where a provider must
  approve before any charge.
- **Stripe** is scaffolded (`src/lib/stripe.ts`, `api/checkout`, `api/webhooks/stripe`) but returns 503
  until `STRIPE_SECRET_KEY` is set. **Do not enable it as-is:** the checkout charges at completion,
  before provider approval, and the webhook handlers are stubs. See `HANDOFF.md` §5B.

## Preview gating and search visibility

- Set `PREVIEW_USER` + `PREVIEW_PASSWORD` in Vercel to password-protect the whole site (private review).
- The site is **noindex by default**. Set `NEXT_PUBLIC_NOINDEX=false` in Vercel to allow search engines.

## Known placeholders

Several elements are placeholders that must be replaced before public launch (fabricated reviews and
rating markup, placeholder provider bios/photos, bracketed legal text, product images with baked-in
claims, all-states licensure claims, a demo contact form and newsletter). The complete list with file
references is in `HANDOFF.md` §5.
