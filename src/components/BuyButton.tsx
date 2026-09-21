"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";

/**
 * Starts a Stripe Checkout for a treatment. If Stripe isn't configured yet, it
 * gracefully falls back to the clinical intake (/start) — so it's never broken.
 *
 * IMPORTANT (clinical/legal): prescription treatments require a licensed
 * provider's approval BEFORE charging. In production, gate the actual charge on
 * provider approval (e.g., book via the quiz/intake and capture payment after
 * the provider signs off) rather than charging on an impulse "buy".
 */
export function BuyButton({
  slug,
  dosage,
  label = "Subscribe",
  size = "sm",
  variant = "outline",
  className,
}: {
  slug: string;
  dosage?: string;
  label?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function buy() {
    setLoading(true);
    track("begin_checkout", { item_id: slug, item_variant: dosage });
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ slug, dosage }),
      });
      if (res.ok) {
        const data = (await res.json()) as { url?: string };
        if (data.url) {
          window.location.href = data.url;
          return;
        }
      }
      // Stripe not configured / error → route through the clinical flow instead.
      router.push("/start");
    } catch {
      router.push("/start");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      type="button"
      onClick={buy}
      size={size}
      variant={variant}
      disabled={loading}
      className={cn("group", className)}
    >
      {loading ? (
        <Loader2 className="size-4 animate-spin" />
      ) : (
        <CreditCard className="size-4" />
      )}
      {label}
    </Button>
  );
}
