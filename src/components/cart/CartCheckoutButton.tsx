"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/lib/cart";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";

/**
 * Proceeds with the whole plan. Tries the on-site Stripe checkout (multi-item);
 * if Stripe isn't configured (current default) it gracefully routes to the
 * clinical intake (/start), where a provider reviews the plan before any charge.
 */
export function CartCheckoutButton({
  label = "Start your visit",
  size = "lg",
  className,
}: {
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const { items, subtotal, close } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function go() {
    if (!items.length || loading) return;
    setLoading(true);
    track("begin_checkout", {
      value: subtotal,
      items: items.map((i) => i.slug),
    });
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({ slug: i.slug, dosage: i.dosage })),
        }),
      });
      if (res.ok) {
        const data = (await res.json()) as { url?: string };
        if (data.url) {
          window.location.href = data.url;
          return;
        }
      }
      // Stripe not configured / error → clinical intake (provider review first).
      close();
      router.push("/start");
    } catch {
      close();
      router.push("/start");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      type="button"
      onClick={go}
      size={size}
      disabled={loading || items.length === 0}
      className={cn("group w-full", className)}
    >
      {loading ? <Loader2 className="size-4 animate-spin" /> : null}
      {label}
      {!loading && (
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      )}
    </Button>
  );
}
