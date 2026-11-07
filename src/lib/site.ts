/**
 * Central site configuration for TRT Boost.
 *
 * Appointment booking runs through OptiMantra. The primary CTAs send visitors
 * to OPTIMANTRA_BOOKING_URL (the clinic's patient booking page); /book also
 * embeds that same page so visitors can book without leaving the site.
 *
 * Direct on-site card checkout (merchant account) is planned via Stripe.
 */

/** OptiMantra patient booking page for the clinic — lists services and opens the calendar. */
export const OPTIMANTRA_BOOKING_URL =
  "https://www.optimantra.com/optimus/patient/patientaccess/servicesall?pid=b1RjVWs0NkpucGlPTXhwcnIyVkw3dz09&lid=cWhQUnRyWVloNlY5d25seVRLVXhhUT09";

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
    address: "1660 International Dr, Ste 684, Mclean, VA 22102",
    mailingAddress: "TRT Boost Clinical Services, 1660 International Dr, Ste 684, Mclean, VA 22102",
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
  { label: "Labs", href: "/labs" },
  { label: "Learn", href: "/learn" },
  { label: "About", href: "/about" },
];

/** Full set used by the footer, mobile menu, and search. */
export const primaryNav: NavLink[] = [
  { label: "Treatments", href: "/treatments" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Book", href: "/book" },
  { label: "Lab Testing", href: "/labs" },
  { label: "Learn", href: "/learn" },
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
