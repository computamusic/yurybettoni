"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

const STATS = [
  { value: 30, suffix: "+", label: "Years in the game" },
  { value: 1997, label: "Italian Open, with Mary Pierce", static: true },
  { value: 3, label: "World top-ranked players coached" },
  { value: 2, label: "Nations served by the Foundation" },
];

function useCountUp(target: number, run: boolean, isStatic?: boolean) {
  const [n, setN] = useState(isStatic ? target : 0);
  useEffect(() => {
    if (!run || isStatic) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1100;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target, isStatic]);
  return n;
}

function Stat({ s, run }: { s: (typeof STATS)[number]; run: boolean }) {
  const n = useCountUp(s.value, run, s.static);
  return (
    <div className="border-t border-line pt-5">
      <p
        className="font-sans text-4xl font-semibold tracking-tight text-ink md:text-5xl"
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        {s.static ? s.value : n}
        {s.suffix ?? ""}
      </p>
      <p className="mt-3 max-w-[22ch] text-sm leading-snug text-mute">{s.label}</p>
    </div>
  );
}

export function StatLayer() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  return (
    <section className="bg-bone">
      <div className="mx-auto max-w-(--max-content) px-5 pb-24 md:px-8">
        <p className="eyebrow text-clay">The proof</p>
        <div ref={ref} className="mt-8 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          {STATS.map((s) => (
            <Stat key={s.label} s={s} run={inView} />
          ))}
        </div>
        <p className="mt-10 text-xs uppercase tracking-[0.16em] text-mute">
          Every number here is real, and verified. Nothing inflated.
        </p>
      </div>
    </section>
  );
}
