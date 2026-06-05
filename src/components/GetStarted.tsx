import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

/**
 * Primary conversion CTA. Routes into the on-site intake quiz (/start), which
 * qualifies the visitor and then hands off to Lobbie for clinical intake +
 * checkout. Repoint the Lobbie handoff via NEXT_PUBLIC_LOBBIE_INTAKE_URL.
 */
export function GetStarted({
  label = "Get Started",
  size = "md",
  variant = "primary",
  withArrow = true,
  href = "/start",
  className,
}: {
  label?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline" | "ghost";
  withArrow?: boolean;
  href?: string;
  className?: string;
}) {
  return (
    <ButtonLink
      href={href}
      size={size}
      variant={variant}
      className={cn("group", className)}
    >
      {label}
      {withArrow && (
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      )}
    </ButtonLink>
  );
}
