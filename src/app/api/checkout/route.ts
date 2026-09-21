import { NextResponse } from "next/server";
import { getStripe, stripeConfigured } from "@/lib/stripe";
import { allProducts, startingPrice } from "@/lib/catalog";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type LineRequest = { slug?: string; dosage?: string };

/**
 * Creates a Stripe Checkout Session (subscription mode) for one OR many
 * treatments — this is the multi-item "plan" cart's checkout path.
 *
 * POST body (either form):
 *   { slug: string, dosage?: string }                 // single item
 *   { items: [{ slug, dosage? }, { slug, dosage? }] } // cart
 *
 * NOTE: prescription fulfillment must be gated on a provider's approval. In
 * production, only charge after the prescription is approved, or
 * reconcile these orders against the clinical intake — do not ship on payment
 * alone.
 */
export async function POST(req: Request) {
  if (!stripeConfigured()) {
    return NextResponse.json(
      { error: "Stripe is not configured. Set STRIPE_SECRET_KEY to enable checkout." },
      { status: 503 },
    );
  }

  let body: LineRequest & { items?: LineRequest[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  // Normalize single-item and cart payloads into one list.
  const requested: LineRequest[] =
    Array.isArray(body.items) && body.items.length > 0
      ? body.items
      : [{ slug: body.slug, dosage: body.dosage }];

  const lines = requested
    .map((line) => {
      const product = allProducts.find((p) => p.slug === line.slug);
      if (!product) return null;
      const variant =
        product.variants.find((v) => v.dosage === line.dosage) ??
        product.variants[0];
      const amount = (variant?.price ?? startingPrice(product)) * 100;
      return {
        item: {
          quantity: 1 as const,
          price_data: {
            currency: "usd",
            unit_amount: amount,
            recurring: { interval: "month" as const },
            product_data: {
              name: `${product.name}${variant ? ` · ${variant.dosage}` : ""}`,
              description: product.description.slice(0, 200),
            },
          },
        },
        meta: { slug: product.slug, dosage: variant?.dosage ?? "" },
      };
    })
    .filter((l): l is NonNullable<typeof l> => l !== null);

  if (lines.length === 0) {
    return NextResponse.json({ error: "Unknown product(s)." }, { status: 404 });
  }

  const origin = req.headers.get("origin") ?? site.url;

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: lines.map((l) => l.item),
      allow_promotion_codes: true,
      billing_address_collection: "required",
      success_url: `${origin}/start?checkout=success`,
      cancel_url: `${origin}/cart?checkout=cancelled`,
      metadata: {
        items: lines.map((l) => `${l.meta.slug}:${l.meta.dosage}`).join(","),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json({ error: "Could not create checkout session." }, { status: 500 });
  }
}
