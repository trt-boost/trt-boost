"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { value: number; prefix?: string; suffix?: string; label: string };

const stats: Stat[] = [
  { value: 27, label: "Doctor-prescribed treatments" },
  { value: 5, label: "Categories of men's care" },
  { value: 99, prefix: "$", label: "TRT starting per month" },
  { value: 100, suffix: "%", label: "Online & discreet" },
];

function useCountUp(target: number, run: boolean, duration = 1400) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Skip the animation: jump to the final value on the next frame.
      const id = requestAnimationFrame(() => setN(target));
      return () => cancelAnimationFrame(id);
    }
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return n;
}

function StatItem({ stat, run }: { stat: Stat; run: boolean }) {
  const n = useCountUp(stat.value, run);
  return (
    <div className="text-center">
      <div className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        {stat.prefix}
        {n}
        {stat.suffix}
      </div>
      <div className="mt-2 text-sm text-ink-300">{stat.label}</div>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    // Fail-open: if the observer never fires, still show the final numbers.
    const fallback = setTimeout(() => setRun(true), 2500);
    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4"
    >
      {stats.map((s) => (
        <StatItem key={s.label} stat={s} run={run} />
      ))}
    </div>
  );
}
