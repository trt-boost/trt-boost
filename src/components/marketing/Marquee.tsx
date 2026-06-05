import { ShieldCheck, Truck, Lock, Clock, BadgeCheck, Stethoscope } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Licensed U.S. providers" },
  { icon: Truck, label: "Free, discreet shipping" },
  { icon: Lock, label: "100% private & secure" },
  { icon: Clock, label: "Online visit in minutes" },
  { icon: BadgeCheck, label: "Cancel anytime" },
  { icon: Stethoscope, label: "Pharmacy-grade fulfillment" },
];

export function Marquee() {
  // Duplicate the set so the -50% translate loops seamlessly.
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-ink-950/60 py-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="marquee gap-10 pr-10">
        {row.map((item, i) => (
          <div key={i} className="flex shrink-0 items-center gap-2.5">
            <item.icon className="size-4 text-brand-400" />
            <span className="whitespace-nowrap text-sm font-medium text-ink-200">
              {item.label}
            </span>
            <span className="ml-10 size-1 rounded-full bg-brand-500/60" />
          </div>
        ))}
      </div>
    </div>
  );
}
