/**
 * Central site configuration for TRT Boost.
 *
 * Appointment booking runs through Vagaro. The primary CTAs send visitors to
 * VAGARO_BOOKING_URL (the provider's live calendar); /book also embeds the
 * Vagaro services widget for anyone who wants to pick a specific service.
 *
 * Direct on-site card checkout (merchant account) is planned via Stripe.
 */

/** Vagaro "Book Now" page for the business — opens the provider calendar. */
export const VAGARO_BOOKING_URL = "https://www.vagaro.com/trtboost/book-now";

/** Vagaro memberships page — where patients subscribe to a monthly plan. */
export const VAGARO_MEMBERSHIPS_URL = "https://www.vagaro.com/trtboost/memberships";

export type Plan = {
  id: "trt" | "weight" | "peptide";
  name: string;
  title: string;
  price: number;
  blurb: string;
  includes: string[];
  membershipUrl: string;
};

/** Monthly plans. Prices and billing live in Vagaro Memberships. */
export const plans: Plan[] = [
  {
    id: "trt",
    name: "TRT",
    title: "Testosterone therapy",
    price: 99,
    blurb: "Provider-managed testosterone replacement therapy.",
    includes: [
      "Video consultations with a licensed provider",
      "Prescription when appropriate",
      "Medication delivered to your door",
      "Ongoing check-ins and dose adjustments",
    ],
    membershipUrl: VAGARO_MEMBERSHIPS_URL,
  },
  {
    id: "weight",
    name: "Weight Loss",
    title: "Medical weight loss",
    price: 299,
    blurb: "Provider-managed weight loss treatment, including GLP-1 options.",
    includes: [
      "Video consultations with a licensed provider",
      "Prescription when appropriate",
      "Medication delivered to your door",
      "Ongoing check-ins and dose adjustments",
    ],
    membershipUrl: VAGARO_MEMBERSHIPS_URL,
  },
  {
    id: "peptide",
    name: "Peptide",
    title: "Peptide therapy",
    price: 299,
    blurb: "Provider-managed peptide therapy for recovery and performance.",
    includes: [
      "Video consultations with a licensed provider",
      "Prescription when appropriate",
      "Medication delivered to your door",
      "Ongoing check-ins and dose adjustments",
    ],
    membershipUrl: VAGARO_MEMBERSHIPS_URL,
  },
];

/** Shown wherever a patient is asked to pay. */
export const refundPromise =
  "You're charged when you subscribe. If your provider doesn't prescribe treatment, you get a full refund.";

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
    hours: "7 days a week, 8:00 AM – 8:00 PM EST",
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
  { label: "Plans", href: "/subscribe" },
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
  { label: "Plans", href: "/subscribe" },
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
