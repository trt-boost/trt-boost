import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe, stripeConfigured } from "@/lib/stripe";

export const runtime = "nodejs";

/**
 * Stripe webhook receiver. Verifies the signature and handles subscription /
 * checkout events. Configure the endpoint in the Stripe dashboard and set
 * STRIPE_WEBHOOK_SECRET. In production, this is where you'd sync orders to
 * Lobbie / your fulfillment and update the customer's subscription state.
 */
export async function POST(req: Request) {
  if (!stripeConfigured()) {
    return NextResponse.json({ error: "Stripe not configured." }, { status: 503 });
  }
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "Missing STRIPE_WEBHOOK_SECRET." }, { status: 503 });
  }

  const sig = req.headers.get("stripe-signature");
  if (!sig) {
    return NextResponse.json({ error: "Missing signature." }, { status: 400 });
  }

  const raw = await req.text();
  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(raw, sig, secret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature." }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed":
      // TODO: provision the subscription, reconcile with Lobbie, send confirmation.
      break;
    case "customer.subscription.updated":
    case "customer.subscription.deleted":
      // TODO: update the member's plan / access state.
      break;
    case "invoice.payment_failed":
      // TODO: dunning — notify the customer, pause fulfillment.
      break;
    default:
      break;
  }

  return NextResponse.json({ received: true });
}
