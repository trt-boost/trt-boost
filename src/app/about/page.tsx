import type { Metadata } from "next";
import Image from "next/image";
import {
  ShieldCheck,
  FlaskConical,
  Lock,
  Users,
  BadgeCheck,
  MapPin,
  Activity,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/marketing/PageHero";
import { SectionHeading } from "@/components/ui/Section";
import { Logo } from "@/components/brand/Logo";
import { CtaBand } from "@/components/marketing/CtaBand";

export const metadata: Metadata = {
  title: "About",
  description:
    "TRT Boost makes high-quality men's healthcare simple, private, and effective — licensed providers, licensed pharmacies, and transparent care.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Licensed, accountable care",
    body: "Every prescription is issued by a healthcare provider licensed in your state, based on a real medical evaluation — never automated.",
  },
  {
    icon: FlaskConical,
    title: "Pharmacy-grade fulfillment",
    body: "Medications are compounded and dispensed by licensed U.S. pharmacies and shipped in secure, temperature-controlled packaging.",
  },
  {
    icon: Lock,
    title: "Private by design",
    body: "Your consultations and data are handled securely, and treatments arrive in discreet packaging — your health is your business.",
  },
  {
    icon: Users,
    title: "Care that continues",
    body: "We don't disappear after checkout. Message your care team, adjust your dose, and get follow-up labs as your plan evolves.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About TRT Boost"
        title="Men's health, finally done right"
        subtitle="TRT Boost exists to make proven, doctor-trusted men's healthcare radically simple — pairing licensed clinicians with a seamless online experience and pharmacy-grade delivery."
      />

      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-ink-100 bg-ink-50/50 p-10 text-center">
              <Logo href={null} width={300} height={130} className="mx-auto h-auto w-60" />
              <p className="mt-8 font-display text-xl font-semibold text-ink-900">
                Your health. Your confidence.
                <br />
                Our commitment.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-ink-900">Our mission</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-500">
                Too many men put off the care they need because it&apos;s slow,
                awkward, or hard to access. We built TRT Boost to change that —
                a modern telehealth platform where getting evaluated, treated,
                and supported for low testosterone and men&apos;s health takes
                minutes, not months.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink-500">
                Behind every plan is a licensed provider, a licensed pharmacy,
                and a care team that stays with you — so you can focus on
                feeling like yourself again.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ink-50/60">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="What we stand for"
            title="Standards we won't compromise"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="flex gap-4 rounded-2xl border border-ink-100 bg-white p-6"
              >
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <v.icon className="size-6" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-ink-900">{v.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink-500">
                    {v.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Best in medicine */}
      <section className="bg-white">
        <Container className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="Your care team"
            title={
              <>
                Care by the <span className="text-gradient">best in medicine</span>
              </>
            }
            subtitle="Behind every plan is a licensed provider and a dedicated care team — reviewing your health, building your protocol, and staying with you for the long run."
          />

          {/* Provider cards. NOTE: replace with real, credentialed provider
              names, titles, and bios before launch. */}
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {[
              {
                img: "/images/team/provider-zan.jpg",
                name: "Men's Health Provider",
                role: "Hormone & Metabolic Care",
                tags: ["Testosterone therapy", "Men's health", "Metabolic health"],
                bio: "Our providers focus on evidence-based hormone optimization — evaluating your labs and symptoms to build a safe, personalized plan with ongoing monitoring and dose adjustments.",
              },
              {
                img: "/images/team/provider-2.jpg",
                name: "Patient Care Lead",
                role: "Care Coordination",
                tags: ["Onboarding", "Follow-up care", "Refills & labs"],
                bio: "Your dedicated care team handles scheduling, refills, lab coordination, and day-to-day questions — so real support is always just a message away.",
              },
            ].map((p) => (
              <div
                key={p.name}
                className="flex flex-col gap-5 rounded-3xl border border-ink-100 bg-ink-50/40 p-5 shadow-[var(--shadow-card)] sm:flex-row"
              >
                <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-2xl bg-ink-100 sm:size-44">
                  <Image
                    src={p.img}
                    alt={p.role}
                    fill
                    sizes="(max-width: 640px) 100vw, 180px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink-900">{p.name}</h3>
                  <p className="text-sm font-semibold text-brand-700">{p.role}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-ink-200 bg-white px-2.5 py-1 text-xs font-medium text-ink-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">{p.bio}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Credentials band */}
          <div className="mt-12 grid gap-8 overflow-hidden rounded-3xl bg-ink-950 p-8 text-white sm:grid-cols-2 lg:grid-cols-4 lg:p-10">
            {[
              { icon: BadgeCheck, title: "Board-certified", body: "Care from qualified, licensed clinicians." },
              { icon: MapPin, title: "Licensed in your state", body: "Matched to a provider authorized where you live." },
              { icon: FlaskConical, title: "Lab-guided", body: "Protocols informed by your bloodwork." },
              { icon: Activity, title: "Ongoing monitoring", body: "Follow-ups and dose adjustments over time." },
            ].map((c) => (
              <div key={c.title}>
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-white/10 text-brand-400">
                  <c.icon className="size-5" />
                </span>
                <h4 className="mt-4 font-bold text-white">{c.title}</h4>
                <p className="mt-1 text-sm text-ink-300">{c.body}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-ink-400">
            Provider availability varies by state. Treatment is prescribed only
            when clinically appropriate, at a provider&apos;s discretion.
          </p>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
