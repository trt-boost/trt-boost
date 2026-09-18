# TRT Boost — Website Handoff

This document transfers full ownership of the trtboost.com website from the builder (FCI Advisory) to the client (TRT Boost). After the steps in §2, the client owns and pays for everything, and the builder has no access, cost, or maintenance obligation.

Companion documents: `CLAUDE.md` (instructions your Claude reads automatically when editing this site) and `README.md` (technical overview).

---

## 1. What you are receiving

| Asset | Where it lives | Owner after handoff |
|---|---|---|
| Source code (Next.js site) | GitHub repository `trt-boost` | Client's GitHub account |
| Hosting, deployments, SSL | Vercel project `trt-boost` | Client's Vercel **Pro** team (paid, ~$20/mo) |
| Domain `trtboost.com` + DNS | GoDaddy | Client's GoDaddy account (registration paid through 2028-06-10) |
| Email `@trtboost.com` (Microsoft 365 via GoDaddy) | GoDaddy | Client's GoDaddy account |
| Clinical intake / prescribing / fulfillment | Lobbie | Client's Lobbie account |
| Payments (dormant — see §5B) | Stripe | Client's Stripe account |
| Analytics (optional) | Google Analytics 4 | Client's Google account |
| AI editing | Claude (claude.ai Pro) | Client's Claude subscription (~$20/mo) |

The code contains **no passwords or keys** (verified across the working tree and full git history). Every secret lives only in Vercel → Settings → Environment Variables, which the client will own.

---

## 2. Transfer plan — do these in order

### Step 0 — Client creates accounts (before anything moves)
1. **GitHub** account (free) at github.com. The repository transfer requires an existing username.
2. **Vercel** account, signed up *with that GitHub account*, then create a **paid Pro team** with the client's own card (Settings → Billing). Vercel's free Hobby plan is restricted to non-commercial use; a paid clinic site must be on Pro (~$20/mo). Do **not** use a Pro *trial* — trial teams cannot change owners or receive transfers.
3. **Claude Pro** subscription at claude.ai (~$20/mo) — needed to edit with Claude (§6).

### Step 1 — Vercel project transfer (builder → client) · zero downtime
Pick one path.

- **Path A — dashboard.** Client invites the builder (`mfarran@fciadvisory.com`) to their Pro team as a *Member* (Team Settings → Members → Invite). Builder opens the project → Settings → General → scroll to the bottom → **Transfer Project** → selects the client's team → reviews the listed domains and environment variables → **Transfer**. Afterwards the client removes the builder from the team (a Member seat costs ~$20/mo while active).
- **Path B — claim link (builder never joins the client's team).** Builder generates a 24-hour transfer code via the Vercel API (`POST /projects/{id}/transfer-request`) and sends the client `https://vercel.com/claim-deployment?code=…`. Client opens it while signed in, selects their Pro team, and clicks Transfer.

What moves: all deployments, environment variables, both domains (`trtboost.com`, `www.trtboost.com`), the Git link, security settings, analytics. Takes 10 seconds – 10 minutes; the site keeps serving throughout. Marketplace integrations (none are used) would not move.

### Step 2 — Verify (client)
In the client's Vercel team → project `trt-boost`:
- **Settings → Domains:** both domains should show *Valid Configuration*. If a domain card shows values **different** from today's (`A @ → 216.150.1.1` and `CNAME www → 63966843c8fcc5cb.vercel-dns-016.com`), update those two records in GoDaddy DNS to exactly what the card shows. Never touch the email records (§3).
- **Settings → Environment Variables:** confirm the variables in §4 are present.
- Load https://www.trtboost.com — it should serve the latest deployment.

### Step 3 — GitHub repository transfer (builder → client)
- Builder: `github.com/FCIAdvisory/trt-boost` → Settings → Danger Zone → **Transfer** → *Specify an organization or username* → enter the client's GitHub username → type the repository name → confirm.
- Client: accept the confirmation email **within 1 day**, or the transfer expires and must be re-sent. (The client's account must not already have a repository named `trt-boost`.)
- GitHub automatically leaves the builder listed as a *collaborator* — the client removes them under Settings → Collaborators.

### Step 4 — Reconnect Vercel to the moved repository (client)
The Vercel ↔ GitHub connection does **not** follow a transferred repository, so:
1. GitHub → Settings → Applications → **Vercel** → grant it access to `trt-boost`.
2. Vercel project → Settings → **Git** → *Disconnect* → *Connect Git Repository* → choose `<client-username>/trt-boost`.
3. Push any small commit to `main` and confirm a production deployment builds and www.trtboost.com updates.

Vercel only deploys commits whose author is a member of the Pro team, so whoever edits the site (§6) must commit with a git email linked to their GitHub/Vercel login.

### Step 5 — Domain and email (GoDaddy)
- **If `trtboost.com` is already in the client's GoDaddy account** (likely — the Microsoft 365 email for the domain was set up there): nothing to transfer. Keep the DNS as in §3, turn on auto-renew (next renewal 2028-06-10), enable 2-step verification, and remove any delegate access the builder may have had.
- **If it is in the builder's GoDaddy account:** builder → Domain Portfolio → `trtboost.com` → *Transfer to another GoDaddy account* → enter the client's GoDaddy account email (choose **not** to copy contact info, so the client becomes registrant) → Send. Client accepts within **10 days** at Domain Portfolio → Transfers In (if asked, choose *Do not lock domain transfers for 60 days*). No fee; DNS and email records stay intact; completes within ~90 minutes. **Note:** a Microsoft 365-via-GoDaddy email subscription does *not* move with the domain — if that subscription also sits in the builder's account, GoDaddy support must move the organization separately (the client pre-buys matching plans first).
- To let someone change DNS later (e.g. whoever operates Claude) without sharing the login: GoDaddy → Account → *Delegate access* → invite with the **Domains Only** level, Transfer Access off.

### Step 6 — Cleanup (both)
- Client removes the builder from: GitHub collaborators, the Vercel team, and GoDaddy delegates (if any).
- Client sets/rotates every secret in §4 to values from accounts they own (nothing was ever committed to code, so there is nothing to revoke — just replace).
- Builder confirms `trt-boost` no longer appears in their Vercel team and deletes or re-points their local copy.

---

## 3. DNS records (reference — only the first two belong to the website)

| Type | Name | Value | Purpose |
|---|---|---|---|
| A | `@` | `216.150.1.1` | **Website** (Vercel) |
| CNAME | `www` | `63966843c8fcc5cb.vercel-dns-016.com` | **Website** (Vercel) |
| NS | `@` | `ns47` / `ns48.domaincontrol.com` | GoDaddy DNS — keep |
| MX | `@` | `trtboost-com.mail.protection.outlook.com` (priority 0) | Email — keep |
| TXT | `@` | `v=spf1 include:spf.protection.outlook.com -all` | Email — keep |
| TXT | `@` | `v=verifydomain MS=…` | Email — keep |
| TXT | `_dmarc` | `v=DMARC1; p=reject; …` | Email — keep |
| CNAME | `autodiscover` | `autodiscover.outlook.com` | Email — keep |

`trtboost.com` redirects to `www.trtboost.com` (the primary). The DMARC policy is `p=reject`, so an accidental change to the SPF record would make outbound email bounce.

---

## 4. Environment variables (Vercel → Settings → Environment Variables)
Changing any variable requires a **Redeploy** (Deployments → ⋯ → Redeploy) to take effect. A commented template of all of them is in `.env.example`.

| Variable | What it does | Value at launch |
|---|---|---|
| `NEXT_PUBLIC_LOBBIE_INTAKE_URL` | Where every "Get Started / Start visit" button and the intake quiz send patients | **Your real Lobbie intake link.** Currently a placeholder (`https://app.lobbie.com/`) — every conversion path dead-ends until this is set. |
| `NEXT_PUBLIC_NOINDEX` | Search-engine visibility | Leave **unset** to stay hidden from Google (current state). Set to `false` to appear in search — only after §5A is resolved. |
| `PREVIEW_USER` / `PREVIEW_PASSWORD` | Password-gates the entire site (for private review) | Set both to gate the site; leave unset for public access. |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 (optional) | Your GA4 measurement ID (`G-…`). |
| `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | On-site card checkout | **Do not set yet** — see §5B. |
| `LOBBIE_API_BASE_URL`, `LOBBIE_API_KEY` | Future server-side Lobbie sync | Not used yet. |

---

## 5. Launch checklist — items the client must resolve
The site was built to demonstrate the complete experience. Several elements are **placeholders** that carry real legal or functional risk on a public healthcare site. Your Claude will not change these on its own (see the guardrails in `CLAUDE.md`); each one needs the client's decision.

### 5A. Legal / compliance — resolve before public launch (have counsel review)

| Item | Where | Risk |
|---|---|---|
| **Fabricated reviews and testimonials** — 9 reviews and 3 home-page testimonials with invented names, cities, and dates | `src/lib/reviews.ts`, `src/components/marketing/Testimonials.tsx`, `src/app/reviews/page.tsx` | FTC fake-reviews rule. Replace with real, consented reviews or remove. |
| **Fabricated "4.8★ / 1,240 reviews" rating**, also emitted as Google structured data (AggregateRating) | `src/lib/seo.ts` (`aggregateRating`), `src/app/reviews/page.tsx` (star distribution, "1,240+ verified members") | FTC + Google structured-data manual-action risk. Remove until real. |
| **Compliance badges (LegitScript / AICPA SOC 2 / HIPAA)** — not rendered as of handoff | `src/components/marketing/TrustBadges.tsx` (component kept, not used) | Displaying a certification you don't hold is trademark misuse and a deceptive claim; payment processors and ad networks check. Re-add a badge **only** once that certification is actually held. |
| **Provider photos and bios are placeholders** — the two headshots are of real, identifiable people with no documented consent; "Board-certified" is claimed | `src/app/about/page.tsx`, `public/images/team/` | Right of publicity; misrepresentation of clinical staff. Replace with your real, credentialed providers. |
| **"Medically reviewed by the TRT Boost clinical team"** on all 12 Learn articles — no review occurred | `src/lib/articles.ts` (author), `src/app/learn/page.tsx` | Health-content substantiation. Have a clinician review or change the attribution. |
| **Six peptide product images say "FOR RESEARCH ONLY / NOT FOR HUMAN CONSUMPTION"** while the site sells them as prescriptions | `public/images/products/meds/`: `bpc-157`, `cjc-1295-ipamorelin`, `ipamorelin`, `pt-141`, `sermorelin` (also the Peptides category hero), `tesamorelin` | FDA/FTC — regenerate these images without that text. |
| Marketing claims baked into other product images ("Clinically proven", "Proven results", "Supports weight loss*") with no substantiation; all renders show TRT Boost as the drug labeler | `public/images/products/meds/`: `dutasteride`, `topical-minoxidil`, `tirzepatide`, `naltrexone-bupropion` | FTC substantiation; FDA labeling optics. |
| **Bracketed placeholders and dates in legal pages** — `[State]`, `[State/County]`, `[Company Address]`; effective dates "March 31, 2026" on all 10 pages; company legal name and mailing address unconfirmed | `src/app/legal/*`, `src/lib/site.ts` (`legalName`, `mailingAddress`) | Unenforceable terms; wrong entity. The Privacy Policy is an authored template — counsel must review. |
| **51 state pages assert licensed providers in every state + D.C.** | `src/app/treatment-areas/[state]/page.tsx`, `src/lib/states.ts`, `src/components/marketing/StateChecker.tsx` | State licensure. Restrict `states.ts` to states where you actually have licensed prescribers and a compliant pharmacy. |
| Catalog copy calls compounded GLP-1s "clinically proven"; the peptide catalog may include substances not eligible for compounding | `src/lib/catalog.ts` | FDA/FTC — regulatory counsel should review the catalog and re-confirm prices. |
| "Free online visit" and "Free, discreet shipping" promises | home, pricing, FAQ, how-it-works, articles | FTC — confirm these are true. |

### 5B. Functional — wire or configure before launch

| Item | Where |
|---|---|
| **Real Lobbie intake URL** (every CTA) | Vercel env `NEXT_PUBLIC_LOBBIE_INTAKE_URL` |
| Phone `1-800-TRT-BOOST` is not provisioned and may belong to someone else | `src/lib/site.ts` |
| Mailboxes `support@`, `billing@`, `legal@`, `security@trtboost.com` must exist and be monitored; stated hours and "2 business day" reply promise | `src/lib/site.ts`, `src/app/contact/page.tsx` |
| **Contact form sends nothing** — it shows a fake success message and discards the message (potentially containing patient information). Route it to a HIPAA-appropriate inbox or CRM. | `src/components/contact/ContactForm.tsx` |
| Newsletter signup saves nothing | `src/components/marketing/Newsletter.tsx` |
| "Live chat" is advertised on the Contact page but does not exist | `src/app/contact/page.tsx` |
| **Stripe — do not enable yet.** The current checkout charges the card the moment checkout completes, *before* any provider approves the prescription, and the webhook handlers are empty. Rework the flow (charge only after approval) before setting keys. Stripe also requires written approval for a telehealth/Rx business. | `src/app/api/checkout/route.ts`, `src/app/api/webhooks/stripe/route.ts` |
| Go public in search when ready: set `NEXT_PUBLIC_NOINDEX=false` and redeploy | Vercel env |

### 5C. Cosmetic
- `finasteride-minoxidil.webp` and `daily-ed-support.webp` are copies of the finasteride and tadalafil images.
- Social links in `src/lib/site.ts` are `#` (not rendered anywhere).
- Article hero images are optional (`image` field per article); cards fall back to a brand gradient.

---

## 6. Editing the site with Claude
Your Claude reads `CLAUDE.md` automatically at the start of every session; the rules it must follow are enforced by `.claude/settings.json` (it cannot touch `.env` files, legal pages, checkout code, or force-push, and it asks before every `git push`).

**One-time setup (on the client's computer)**
1. Subscribe to **Claude Pro** at claude.ai (~$20/mo; includes Claude Code). Do not set an `ANTHROPIC_API_KEY` on the computer — that would bill per-token instead of using the subscription.
2. Install **Git**, **Node.js** (current LTS, v24 — Next.js 16 needs 20.9+), the **GitHub CLI** (`gh`), and the **Claude Desktop app**. Run `gh auth login` once (GitHub.com → HTTPS → log in with a web browser).
3. Get the code: `gh repo clone <client-username>/trt-boost`, then `cd trt-boost` and `npm install`. Set `git config user.name` / `user.email` to the name and email linked to your GitHub and Vercel accounts.

**Everyday edit loop**
1. Claude app → **Code** tab → open the `trt-boost` folder → mode selector: **Accept edits** (never "Bypass").
2. Describe the change in plain English, naming the page — e.g. "On the pricing page, change Testosterone Cypionate to $89/month."
3. Review the diff it shows. Say "run npm run dev and show me the page" to preview.
4. Say "run npm run build and npm run lint and fix anything that fails." Don't continue until both pass.
5. Say "commit with a clear message and push to main." Approve the push. Vercel deploys in ~2 minutes; refresh www.trtboost.com in a private window.
6. Bigger changes (layout, navigation, cart): ask for "a branch and a pull request" and check the Vercel preview link before merging.
7. **Undo a bad deploy instantly:** Vercel → project → Production Deployment → **Instant Rollback** → pick the previous good deployment. After you fix the problem, click **Undo Rollback**, or new pushes will not go live.

---

## 7. Ongoing costs (client)
- **Vercel Pro:** ~$20/mo (+~$20/mo per additional developer seat; optional Password Protection add-on ~$20/mo for a gated preview).
- **Claude Pro:** ~$20/mo.
- **Domain:** GoDaddy renewal, next due 2028-06-10.
- **Microsoft 365 email:** existing subscription.
- **If patient health information will flow through the site** (forms, checkout): Vercel's HIPAA BAA add-on (~$350/mo) and a healthcare-approved payment processor.

---

## 8. Acknowledgment
The builder delivered the site as a working demonstration with the placeholders listed in §5 disclosed in writing. Regulatory compliance of the clinic's operations — medical content, provider licensure, state availability, advertising and review claims, privacy, and payment processing — is the client's responsibility. It is recommended that the client sign or otherwise acknowledge this document at handoff.
