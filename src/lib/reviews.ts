/**
 * NOTE: These are ILLUSTRATIVE placeholder reviews about the service experience
 * (not health-outcome claims). Replace with real, consented, verifiable reviews
 * before launch — fabricated reviews are an FTC/compliance risk. The aggregate
 * rating in lib/seo.ts must also reflect real data before publishing.
 */

export type Review = {
  name: string;
  location: string;
  rating: number; // 1-5
  category: string;
  date: string; // ISO
  title: string;
  body: string;
};

export const reviews: Review[] = [
  {
    name: "Marcus T.",
    location: "Austin, TX",
    rating: 5,
    category: "Testosterone",
    date: "2026-05-28",
    title: "Finally a process that respects my time",
    body: "The whole visit took ten minutes from my couch. No waiting room, labs were easy to arrange, and my provider actually answered my questions instead of rushing me out.",
  },
  {
    name: "Devon R.",
    location: "Denver, CO",
    rating: 5,
    category: "Testosterone",
    date: "2026-05-21",
    title: "Transparent and straightforward",
    body: "Pricing was clear up front with no surprise bills. It finally feels like care built for how I actually live.",
  },
  {
    name: "James P.",
    location: "Tampa, FL",
    rating: 5,
    category: "Weight Loss",
    date: "2026-05-18",
    title: "Refills on autopilot",
    body: "Auto-ship means I never run out, and I can message the care team whenever something comes up. Easily the most convenient health experience I've had.",
  },
  {
    name: "Andre W.",
    location: "Columbus, OH",
    rating: 4,
    category: "ED",
    date: "2026-05-12",
    title: "Discreet and simple",
    body: "Packaging was completely discreet and the online visit was painless. Took a couple days to ship but worth it for the convenience.",
  },
  {
    name: "Hassan M.",
    location: "Phoenix, AZ",
    rating: 5,
    category: "Hair",
    date: "2026-05-09",
    title: "Easy to get started",
    body: "I'd been putting this off for years. The quiz made it simple to figure out where to start and the provider tailored the plan to me.",
  },
  {
    name: "Tyler B.",
    location: "Seattle, WA",
    rating: 5,
    category: "Testosterone",
    date: "2026-05-02",
    title: "Great follow-up care",
    body: "What sold me was the ongoing support — they checked in, adjusted my dose after labs, and made it feel like a real care team, not a vending machine.",
  },
  {
    name: "Chris L.",
    location: "Nashville, TN",
    rating: 5,
    category: "Weight Loss",
    date: "2026-04-27",
    title: "Clear guidance the whole way",
    body: "The dose titration was explained clearly and the side-effect tips actually helped. Felt supported instead of left to figure it out alone.",
  },
  {
    name: "Eric S.",
    location: "Charlotte, NC",
    rating: 4,
    category: "Peptides",
    date: "2026-04-20",
    title: "Knowledgeable team",
    body: "Asked a lot of detailed questions and got real answers. Appreciated that they didn't overpromise and kept it grounded.",
  },
  {
    name: "Brandon K.",
    location: "San Diego, CA",
    rating: 5,
    category: "ED",
    date: "2026-04-14",
    title: "Confidence back",
    body: "Simple, private, and fast. The daily option fit my life better than planning around a single dose. Wish I'd done this sooner.",
  },
];
