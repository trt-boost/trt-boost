@AGENTS.md

# TRT Boost website — instructions for Claude

## What this is
- The public marketing + storefront site for a men's-health telehealth clinic (TRT, ED, hair loss, weight loss, peptides). It is patient-facing; treat every change as production.
- Stack: Next.js 16 (App Router, Turbopack) + React 19 + TypeScript + Tailwind CSS v4. All code lives in `src/`.
- Hosting: the GitHub repo deploys automatically to Vercel. Pushing to `main` = live at www.trtboost.com within ~2 minutes. Pushing any other branch = a preview URL.
- Appointment booking happens in **OptiMantra** via the embedded booking page on `/book` (`src/components/booking/OptiMantraWidget.tsx`; URL in `OPTIMANTRA_BOOKING_URL`, `src/lib/site.ts`). Every "Get Started / Start visit" button routes through the intake quiz (`/start`) and lands on `/book`. Services, prices, and availability are managed in OptiMantra, not in this repo.
- See `HANDOFF.md` for the ownership/launch checklist and `README.md` for the technical overview.

## Commands
- `npm run dev` — local preview at http://localhost:3000
- `npm run build` — production build. MUST pass before every commit.
- `npm run lint` — ESLint (Next 16's build does not lint, so run this too).
- If the dev server shows stale styles or old content after many edits: stop it, delete the `.next` folder, restart. This is a known Turbopack cache quirk, not a bug in the code.

## Where content lives (edit these for content changes)
- Products, prices, doses, categories, category images: `src/lib/catalog.ts`
- Phone, emails, address, business hours, legal name, nav: `src/lib/site.ts`
- Learn articles: `src/lib/articles.ts` · FAQs: `src/lib/faq.ts` · Reviews: `src/lib/reviews.ts`
- State landing-page data: `src/lib/states.ts` · SEO / structured data: `src/lib/seo.ts`
- Page layouts: `src/app/<route>/page.tsx` (home is `src/app/page.tsx`)
- Legal pages: `src/app/legal/*` (10 pages)
- Product images: `public/images/products/meds/<product-slug>.webp` (one per product, ~1100px wide WebP). Article hero images (optional): `public/images/learn/<article-slug>.webp` — then set `image` on that article in `articles.ts`.
- Logo & badges: `public/brand/`
- Cart: `src/lib/cart.tsx` + `src/components/cart/*`. Intake quiz: `src/components/quiz/Quiz.tsx`.
- Password gate for private previews: `src/middleware.ts` (active only when `PREVIEW_PASSWORD` is set in Vercel).
- Search-engine visibility: the site is hidden from Google unless `NEXT_PUBLIC_NOINDEX=false` is set in Vercel (`src/app/layout.tsx`, `src/app/robots.ts`).

## Workflow (always)
1. Small content changes (text, price, image swap, FAQ, article): edit → `npm run dev` and show the page → `npm run build` and `npm run lint` → commit to `main` → push.
2. Anything touching layout, navigation, the cart, checkout, forms, or more than ~3 files: create a branch `change/<short-description>`, push it, open a PR with `gh pr create`, and give the Vercel preview URL to check before merging.
3. Commit messages: one plain-English line describing the change (e.g. "Update Testosterone Cypionate price to $89/mo").
4. Before saying you are done, report: files changed, the build result, and the commit hash.
5. Environment variables live ONLY in Vercel → Settings → Environment Variables. Changing one requires a Redeploy in Vercel to take effect.

## Guardrails — do NOT do these unless explicitly asked in the same message
- Never create, edit, read, or commit `.env*` files (the committed `.env.example` template is the only exception, and it must never contain real values).
- Never remove or soften the medical disclaimer, HIPAA notice, telehealth consent, refund / terms / privacy pages, or "prescription required" wording. Legal text changes need counsel sign-off — if asked, say so and ask for confirmation first.
- Never add medical or efficacy claims, testimonials, reviews, star ratings, or certification badges (LegitScript, SOC 2, HIPAA). The `TrustBadges` component is intentionally not rendered; only re-enable a badge if the owner confirms the certification is actually held.
- Never change `src/middleware.ts`, `src/app/api/**` (Stripe checkout / webhooks), `src/app/robots.ts`, `src/app/sitemap.ts`, `next.config.ts`, or add npm packages without asking first.
- Do not set Stripe keys or "turn on payments": the checkout currently charges before a provider approves and must be reworked first (see `HANDOFF.md` §5).
- Never `git push --force`, never rewrite history, never delete files or images without asking.
- Never run destructive commands (`rm -rf`, `git reset --hard`).
- If a build or lint fails, fix the root cause; do not disable checks or suppress errors.
- If unsure what is meant, ask before editing.
