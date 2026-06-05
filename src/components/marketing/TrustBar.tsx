import { ShieldCheck, Truck, MonitorSmartphone, HeartHandshake } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Licensed U.S. providers" },
  { icon: Truck, label: "Free, discreet shipping" },
  { icon: MonitorSmartphone, label: "100% online — no waiting rooms" },
  { icon: HeartHandshake, label: "Ongoing care & dose adjustments" },
];

export function TrustBar({ tone = "dark" }: { tone?: "light" | "dark" }) {
  const light = tone === "light";
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-3">
          <item.icon
            className={light ? "size-5 shrink-0 text-brand-400" : "size-5 shrink-0 text-brand-600"}
          />
          <span
            className={
              light
                ? "text-sm font-medium text-ink-200"
                : "text-sm font-medium text-ink-700"
            }
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
