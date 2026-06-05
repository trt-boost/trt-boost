import { NextResponse } from "next/server";
import { getStripe, stripeConfigured } from "@/lib/stripe";
import { allProducts, startingPrice } from "@/lib/catalog";
import { site } from "@/lib/site";

export const runtime = "nodejs";

/**
 * Creates a Stripe Checkout Session for a treatment (subscription mode).
 * POST body: { slug: string, dosage?: string }
 *
 * NOTE: This is the on-site checkout path. The clinical intake still happens via
 * Lobbie — in production, gate fulfillment on a provider's approval (e.g., only
 * charge after the prescription is approved, or reconcile orders to Lobbie).
 */
export async function POST(req: Request) {
  if (!stripeConfigured()) {
    return NextResponse.json(
      { error: "Stripe is not configured. Set STRIPE_SECRET_KEY to enable checkout." },
      { status: 503 },
    );
  }

  let body: { slug?: string; dosage?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const product = allProducts.find((p) => p.slug === body.slug);
  if (!product) {
    return NextResponse.json({ error: "Unknown product." }, { status: 404 });
  }
  const variant =
    product.variants.find((v) => v.dosage === body.dosage) ?? product.variants[0];
  const amount = (variant?.price ?? startingPrice(product)) * 100;

  const origin = req.headers.get("origin") ?? site.url;

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: amount,
            recurring: { interval: "month" },
            product_data: {
              name: `${product.name}${variant ? ` · ${variant.dosage}` : ""}`,
              description: product.description.slice(0, 200),
            },
          },
        },
      ],
      allow_promotion_codes: true,
      billing_address_collection: "required",
      success_url: `${origin}/start?checkout=success`,
      cancel_url: `${origin}/pricing?checkout=cancelled`,
      metadata: { slug: product.slug, dosage: variant?.dosage ?? "" },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json({ error: "Could not create checkout session." }, { status: 500 });
  }
}
