import Stripe from "stripe";

/**
 * Lazy server-side Stripe client. Created only when STRIPE_SECRET_KEY is set, so
 * the app builds and runs without Stripe configured (the Vagaro booking flow
 * remains the default). Wire real on-site checkout by setting the env keys.
 */
let _stripe: Stripe | null = null;

export function stripeConfigured(): boolean {
  return Boolean(process.env.STRIPE_SECRET_KEY);
}

export function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is not set — configure Stripe to enable on-site checkout.");
  }
  if (!_stripe) {
    _stripe = new Stripe(key);
  }
  return _stripe;
}
