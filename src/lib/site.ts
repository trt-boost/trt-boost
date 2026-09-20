/**
 * Central site configuration for TRT Boost.
 *
 * Clinical intake + checkout is handled by Lobbie on the backend. Every
 * "Get Started" / "Start Visit" CTA links to LOBBIE_INTAKE_URL so the whole
 * site can be repointed by changing one env var (NEXT_PUBLIC_LOBBIE_INTAKE_URL).
 *
 * Direct on-site card checkout (merchant account) is planned via Stripe — see
 * README "Payments & Lobbie integration". Until then, CTAs hand off to Lobbie.
 */

export const LOBBIE_INTAKE_URL =
  process.env.NEXT_PUBLIC_LOBBIE_INTAKE_URL ?? "https://app.lobbie.com/"; // TODO: replace with the real Lobbie intake/booking link

export const site = {
  name: "TRT Boost",
  legalName: "TRT Boost Remote Clinical Services",
  tagline: "Men's Health & Vitality",
  description:
    "Doctor-trusted testosterone replacement therapy and men's health treatments, prescribed online by licensed providers and delivered to your door.",
  url: "https://www.trtboost.com",
  domain: "trtboost.com",
  contact: {
    supportEmail: "support@trtboost.com",
    billingEmail: "billing@trtboost.com",
    legalEmail: "legal@trtboost.com",
    securityEmail: "security@trtboost.com",
    phoneDisplay: "202-999-6684",
    phoneDigits: "202-999-6684",
    phoneHref: "tel:+12029996684",
    smsHref: "sms:+12029996684",
    hours: "Mon–Fri, 8:00 AM – 8:00 PM EST",
    mailingAddress: "TRT Boost Clinical Services, [Mailing Address]",
  },
  social: {
    instagram: "#",
    facebook: "#",
    x: "#",
    youtube: "#",
  },
} as const;

export type NavLink = { label: string; href: string };

/** Curated set for the desktop top nav. */
export const headerNav: NavLink[] = [
  { label: "Treatments", href: "/treatments" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Learn", href: "/learn" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
];

/** Full set used by the footer, mobile menu, and search. */
export const primaryNav: NavLink[] = [
  { label: "Treatments", href: "/treatments" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Learn", href: "/learn" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
  { label: "Treatment Areas", href: "/treatment-areas" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const legalNav: NavLink[] = [
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Notice of Privacy Practices", href: "/legal/privacy-practices" },
  { label: "Terms & Conditions", href: "/legal/terms" },
  { label: "Telehealth Informed Consent", href: "/legal/telehealth-consent" },
  { label: "Refund & Cancellation", href: "/legal/refund-policy" },
  { label: "Shipping & Delivery", href: "/legal/shipping" },
  { label: "Subscription & Auto-Renewal", href: "/legal/subscription-terms" },
  { label: "Medical Disclaimer", href: "/legal/medical-disclaimer" },
  { label: "Cookie Policy", href: "/legal/cookie-policy" },
  { label: "Accessibility Statement", href: "/legal/accessibility" },
];

/** Shorter set for the footer column. */
export const footerLegal: NavLink[] = [
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Terms & Conditions", href: "/legal/terms" },
  { label: "Telehealth Consent", href: "/legal/telehealth-consent" },
  { label: "Refund & Cancellation", href: "/legal/refund-policy" },
  { label: "Shipping & Delivery", href: "/legal/shipping" },
  { label: "All policies", href: "/legal/privacy-policy" },
];

/** Tawk.to live chat. The widget loads only when both IDs are set in Vercel. */
export const chat = {
  propertyId: process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID,
  widgetId: process.env.NEXT_PUBLIC_TAWK_WIDGET_ID,
};

export const chatEnabled = Boolean(chat.propertyId && chat.widgetId);
