import { OPTIMANTRA_BOOKING_URL } from "@/lib/site";

/**
 * Embeds the clinic's OptiMantra patient booking page. The page is served
 * cross-origin, so its height can't be measured — it gets a tall fixed frame
 * and scrolls internally.
 */
export function OptiMantraWidget() {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white">
      <iframe
        src={OPTIMANTRA_BOOKING_URL}
        title="Book an appointment with TRT Boost"
        loading="lazy"
        allow="payment"
        className="block h-[85vh] min-h-[720px] w-full border-0"
      />
    </div>
  );
}
