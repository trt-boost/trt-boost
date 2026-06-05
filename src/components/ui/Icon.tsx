import {
  Activity,
  Atom,
  Dumbbell,
  HeartPulse,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Dumbbell,
  HeartPulse,
  Sparkles,
  Activity,
  Atom,
};

export function CategoryIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = map[name] ?? Sparkles;
  return <Cmp className={className} />;
}
