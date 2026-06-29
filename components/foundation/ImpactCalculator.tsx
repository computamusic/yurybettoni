"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const GOLD = "#c2913b";

export function ImpactCalculator() {
  const [amount, setAmount] = useState(75);

  // Illustrative allocation — to be finalised with the Foundation.
  const weeks = Math.max(1, Math.round(amount / 12));
  const racquets = Math.floor(amount / 45);
  const kids = Math.max(1, Math.round(amount / 60));

  const lines = [
    { n: weeks, label: weeks === 1 ? "week of coached court time" : "weeks of coached court time" },
    { n: kids, label: kids === 1 ? "young player reached" : "young players reached" },
    { n: racquets, label: racquets === 1 ? "racquet put in a hand" : "racquets put in hands" },
  ].filter((l) => l.n > 0);

  return (
    <section className="border-t border-line bg-bone-deep">
      <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <Reveal>
            <p className="eyebrow" style={{ color: GOLD }}>
              See your gift at work
            </p>
            <h2
              className="mt-5 font-display font-medium leading-[1.06] tracking-[-0.01em] text-ink"
              style={{ fontSize: "var(--text-display)" }}
            >
              Every dollar opens the door a little wider.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
              Move the slider to see what a single gift can carry on the ground in Ethiopia
              and Tanzania.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border border-line bg-bone p-5 sm:p-8 md:p-10">
              <div className="flex items-baseline justify-between">
                <span className="eyebrow text-mute">Your gift</span>
                <span className="font-mono text-4xl tabular-nums text-ink md:text-5xl">
                  ${amount}
                </span>
              </div>

              <input
                type="range"
                min={10}
                max={500}
                step={5}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                aria-label="Gift amount"
                className="mt-6 w-full"
                style={{ accentColor: GOLD }}
              />
              <div className="mt-2 flex justify-between font-mono text-[0.65rem] text-mute">
                <span>$10</span>
                <span>$500</span>
              </div>

              <div className="mt-8 space-y-4 border-t border-line pt-7">
                <p className="eyebrow text-mute">Could provide</p>
                {lines.map((l) => (
                  <div key={l.label} className="flex items-baseline gap-4">
                    <span
                      className="min-w-12 font-mono text-2xl tabular-nums"
                      style={{ color: GOLD }}
                    >
                      {l.n}
                    </span>
                    <span className="text-sm leading-snug text-ink-soft">{l.label}</span>
                  </div>
                ))}
              </div>

              <Link
                href="#give"
                className="mt-8 inline-flex w-full items-center justify-center px-7 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-night transition-opacity hover:opacity-90"
                style={{ background: GOLD }}
              >
                Give ${amount}
              </Link>
              <p className="mt-4 text-center text-[0.7rem] text-mute">
                Illustrative allocation — final figures confirmed with the Foundation.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
