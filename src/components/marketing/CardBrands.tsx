import { cn } from "@/lib/cn";

/* Simplified, recognizable card-brand badges rendered as inline SVG so they
   stay crisp at any size and add no network requests. */

function CardShell({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <span
      role="img"
      aria-label={label}
      className="inline-flex h-8 w-12 items-center justify-center rounded-md border border-ink-200 bg-white shadow-sm"
    >
      <svg viewBox="0 0 48 32" className="h-full w-full" aria-hidden="true">
        {children}
      </svg>
    </span>
  );
}

function Visa() {
  return (
    <CardShell label="Visa">
      <text
        x="24"
        y="22"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontStyle="italic"
        fontSize="13"
        letterSpacing="0.5"
        fill="#1a1f71"
      >
        VISA
      </text>
    </CardShell>
  );
}

function Mastercard() {
  return (
    <CardShell label="Mastercard">
      <circle cx="20" cy="16" r="9" fill="#eb001b" />
      <circle cx="30" cy="16" r="9" fill="#f79e1b" />
      <path
        d="M25 9a9 9 0 0 1 0 14 9 9 0 0 1 0-14Z"
        fill="#ff5f00"
      />
    </CardShell>
  );
}

function Amex() {
  return (
    <CardShell label="American Express">
      <rect x="4" y="6" width="40" height="20" rx="2" fill="#2e77bc" />
      <text
        x="24"
        y="19"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize="8"
        fill="#ffffff"
      >
        AMEX
      </text>
    </CardShell>
  );
}

function Discover() {
  return (
    <CardShell label="Discover">
      <text
        x="21"
        y="20"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize="6.5"
        fill="#1a1f36"
      >
        DISCOVER
      </text>
      <circle cx="40" cy="17" r="4" fill="#f48120" />
    </CardShell>
  );
}

export function CardBrands({
  className,
  showHsa = true,
}: {
  className?: string;
  showHsa?: boolean;
}) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2.5", className)}>
      <Visa />
      <Mastercard />
      <Amex />
      <Discover />
      {showHsa && (
        <span className="inline-flex h-8 items-center rounded-md border border-ink-200 bg-white px-2.5 text-[11px] font-semibold text-ink-600 shadow-sm">
          HSA / FSA
        </span>
      )}
    </div>
  );
}
