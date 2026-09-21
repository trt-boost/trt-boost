/**
 * Central site configuration for TRT Boost.
 *
 * Appointment booking runs through the Vagaro widget on /book — the intake
 * quiz hands off there once a visitor qualifies.
 *
 * Direct on-site card checkout (merchant account) is planned via Stripe.
 */

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
  { label: "Book", href: "/book" },
  { label: "Learn", href: "/learn" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
];

/** Full set used by the footer, mobile menu, and search. */
export const primaryNav: NavLink[] = [
  { label: "Treatments", href: "/treatments" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Book", href: "/book" },
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
