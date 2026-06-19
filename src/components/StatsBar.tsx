"use client";

import { useEffect, useRef, useState } from "react";
import { siteContent } from "@/data/siteContent";

const { stats } = siteContent;

function useCountUp(target: number, run: boolean, durationMs = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!run) return;
    // Respect users who prefer reduced motion — a 0ms duration lands on the
    // final value on the first frame (keeps all setState inside rAF).
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dur = reduced ? 0 : durationMs;

    let raf = 0;
    let start: number | null = null;
    const tick = (now: number) => {
      if (start === null) start = now;
      const progress = dur === 0 ? 1 : Math.min((now - start) / dur, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target, durationMs]);

  return value;
}

function Stat({ value, suffix, label, run }: { value: number; suffix: string; label: string; run: boolean }) {
  const display = useCountUp(value, run);
  return (
    <div className="text-center">
      <div className="font-display text-[40px] font-black leading-none text-accent site:text-[58px]">
        {display.toLocaleString("en-IN")}
        {suffix}
      </div>
      <div className="mt-[7px] font-display text-[12px] font-semibold uppercase tracking-[0.1em] text-white/70">
        {label}
      </div>
    </div>
  );
}

export function StatsBar() {
  const ref = useRef<HTMLElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRun(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-blued px-[18px] py-[38px]">
      <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-x-4 gap-y-[26px] site:grid-cols-4">
        {stats.map((stat) => (
          <Stat key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} run={run} />
        ))}
      </div>
    </section>
  );
}
