import Link from "next/link";
import { Phone, Mail, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/brand/Logo";
import { CardBrands } from "@/components/marketing/CardBrands";
import { Newsletter } from "@/components/marketing/Newsletter";
import { categories } from "@/lib/catalog";
import { footerLegal, legalNav, primaryNav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-ink-950 text-ink-200">
      <Container className="py-14">
        {/* Newsletter band */}
        <div className="mb-12 grid gap-8 border-b border-white/10 pb-12 lg:grid-cols-2 lg:items-center">
          <div className="max-w-md">
            <Newsletter />
          </div>
          <p className="font-display text-xl font-bold text-white lg:text-right">
            Your health. Your confidence.
            <span className="text-brand-400"> Our commitment.</span>
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand + contact */}
          <div>
            <Logo href="/" width={200} height={87} className="h-10 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-300">
              Doctor-trusted testosterone therapy and men&apos;s health
              treatments, prescribed online and delivered discreetly to your
              door.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              <li>
                <a
                  href={site.contact.phoneHref}
                  className="inline-flex items-center gap-2 hover:text-brand-400"
                >
                  <Phone className="size-4 text-brand-500" />
                  {site.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.contact.supportEmail}`}
                  className="inline-flex items-center gap-2 hover:text-brand-400"
                >
                  <Mail className="size-4 text-brand-500" />
                  {site.contact.supportEmail}
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-ink-300">
                <Clock className="size-4 text-brand-500" />
                {site.contact.hours}
              </li>
            </ul>
          </div>

          {/* Treatments */}
          <FooterCol title="Treatments">
            {categories.map((c) => (
              <FooterLink key={c.slug} href={`/treatments/${c.slug}`}>
                {c.name}
              </FooterLink>
            ))}
          </FooterCol>

          {/* Company */}
          <FooterCol title="Company">
            {primaryNav.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </FooterCol>

          {/* Legal */}
          <FooterCol title="Legal & policies">
            {footerLegal.map((l) => (
              <FooterLink key={l.label} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </FooterCol>
        </div>

        {/* Payments */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
              Accepted payment methods
            </p>
            <CardBrands className="mt-3" />
          </div>
          <p className="max-w-sm text-xs leading-relaxed text-ink-400">
            Payments are processed securely. We accept all major credit and debit
            cards. HSA/FSA eligibility varies by plan and treatment.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 space-y-4 border-t border-white/10 pt-8 text-xs leading-relaxed text-ink-400">
          <p>
            <strong className="text-ink-300">Medical disclaimer:</strong> TRT
            Boost provides telehealth services through licensed healthcare
            providers. Content on this site is for informational purposes only
            and is not medical advice, diagnosis, or treatment. Prescriptions are
            issued only when clinically appropriate, at the sole discretion of a
            licensed provider. TRT Boost is not an emergency service — if you are
            experiencing a medical emergency, call 911.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {2026} {site.legalName}. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-1">
              {legalNav
                .filter((l) =>
                  ["/legal/privacy-policy", "/legal/terms", "/legal/cookie-policy", "/legal/accessibility"].includes(l.href),
                )
                .map((l) => (
                  <Link key={l.href} href={l.href} className="hover:text-brand-400">
                    {l.label}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-ink-300 transition-colors hover:text-brand-400"
      >
        {children}
      </Link>
    </li>
  );
}
