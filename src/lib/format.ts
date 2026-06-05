/** Format a whole-dollar price as $99 (no cents when even). */
export function formatPrice(value: number): string {
  return value % 1 === 0
    ? `$${value}`
    : value.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
