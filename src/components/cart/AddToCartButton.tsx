"use client";

import { Check, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useCart, type CartItem } from "@/lib/cart";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";

/**
 * Adds a treatment to the plan/cart. If it's already in the cart, the button
 * flips to "In cart" and opens the cart drawer instead of adding twice.
 */
export function AddToCartButton({
  item,
  size = "sm",
  variant = "outline",
  className,
}: {
  item: CartItem;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
}) {
  const { add, has, open } = useCart();
  const inCart = has(item.slug);

  return (
    <Button
      type="button"
      size={size}
      variant={inCart ? "ghost" : variant}
      onClick={() => {
        if (inCart) {
          open();
          return;
        }
        add(item);
        track("add_to_cart", {
          item_id: item.slug,
          item_variant: item.dosage,
          value: item.price,
        });
      }}
      className={cn("group", className)}
      aria-label={inCart ? `${item.name} is in your cart` : `Add ${item.name} to cart`}
    >
      {inCart ? (
        <Check className="size-4 text-brand-600" />
      ) : (
        <Plus className="size-4" />
      )}
      {inCart ? "In cart" : "Add to cart"}
    </Button>
  );
}
