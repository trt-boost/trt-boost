import Link from "next/link";
import { FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/marketing/PageHero";
import { legalNav, site } from "@/lib/site";

export function LegalLayout({
  title,
  effectiveDate,
  version,
  currentHref,
  intro,
  children,
}: {
  title: string;
  effectiveDate: string;
  version?: string;
  currentHref: string;
  intro?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={title}
        subtitle={
          <span className="text-sm text-ink-400">
            Effective {effectiveDate}
            {version ? ` · Version ${version}` : ""} · © 2026 {site.legalName}
          </span>
        }
      />
      <section className="bg-white">
        <Container className="py-14 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_3fr]">
            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                Policies
              </p>
              <nav className="mt-3 space-y-1">
                {legalNav.map((l) => {
                  const active = l.href === currentHref;
                  return (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={
                        active
                          ? "flex items-center gap-2 rounded-lg bg-brand-50 px-3 py-2 text-sm font-semibold text-brand-700"
                          : "flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-ink-600 hover:bg-ink-50 hover:text-ink-900"
                      }
                    >
                      <FileText className="size-4 shrink-0" />
                      {l.label}
                    </Link>
                  );
                })}
              </nav>
              <div className="mt-6 rounded-xl border border-ink-100 bg-ink-50/50 p-4 text-sm text-ink-600">
                <p className="font-semibold text-ink-900">Questions?</p>
                <p className="mt-1">
                  Email{" "}
                  <a
                    href={`mailto:${site.contact.legalEmail}`}
                    className="font-semibold text-brand-700 hover:underline"
                  >
                    {site.contact.legalEmail}
                  </a>{" "}
                  or call {site.contact.phoneDisplay}.
                </p>
              </div>
            </aside>

            {/* Document */}
            <article className="legal max-w-none">
              {intro}
              {children}
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}

/** Numbered legal section heading. */
export function LSection({
  n,
  id,
  title,
  children,
}: {
  n: string;
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 id={id}>
        <span className="num">{n}.</span> {title}
      </h2>
      {children}
    </section>
  );
}
