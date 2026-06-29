"use client";

import { useCallback, useState } from "react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ForwardLink } from "@/components/ui/Chevron";
import { AmbientVideo } from "@/components/ui/AmbientVideo";
import { DiscoveryModal, type Discovery } from "@/components/home/DiscoveryModal";
import { THREE_YS, YSYSTEM_INTRO } from "@/lib/yury";

// The signature treatment: each key reads "mobilitY", trailing Y in clay.
function KeyMark({ word }: { word: string }) {
  const stem = word.slice(0, -1);
  return (
    <span className="font-display lowercase leading-none tracking-[-0.01em]">
      <span className="text-ink/70">{stem}</span>
      <span className="text-clay">Y</span>
    </span>
  );
}

export function ThreeYs() {
  const [active, setActive] = useState<Discovery | null>(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <section className="border-t border-line bg-bone">
      <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
        <div className="grid items-end gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <Reveal className="max-w-xl">
              <p className="eyebrow text-clay">The method — {YSYSTEM_INTRO.eyebrow}</p>
              <h2
                className="mt-5 font-display font-medium leading-[1.05] tracking-[-0.015em] text-ink"
                style={{ fontSize: "var(--text-display)" }}
              >
                Three forces. One game.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-soft">
                {YSYSTEM_INTRO.body}
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-8">
              <ForwardLink href="/y-system">Discover the method</ForwardLink>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="w-full max-w-xl lg:justify-self-end">
            <div className="group relative aspect-square overflow-hidden bg-night">
              <AmbientVideo
                src="/video/y-system-recap.mp4"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="pointer-events-none absolute inset-0 border border-ink/10" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/75 to-transparent px-5 pb-5 pt-16">
                <p className="eyebrow text-light/70">The Y-System, in motion</p>
              </div>
            </div>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-px overflow-hidden border border-line bg-line md:mt-16 md:grid-cols-3">
          {THREE_YS.map((y, i) => (
            <RevealItem key={y.key} className="group bg-bone">
              <button
                type="button"
                aria-haspopup="dialog"
                onClick={() =>
                  setActive({
                    eyebrow: `The Y-System — 0${i + 1}`,
                    title: y.title,
                    body: y.body,
                    detail: y.short,
                    href: "/y-system",
                    cta: "Explore the full method",
                  })
                }
                className="flex h-full w-full cursor-pointer flex-col justify-between gap-10 p-8 text-left transition-colors duration-300 hover:bg-bone-deep md:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="text-3xl md:text-4xl">
                    <KeyMark word={y.key} />
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-lg text-ink-soft transition-all duration-300 group-hover:rotate-90 group-hover:border-clay group-hover:text-clay">
                    +
                  </span>
                </div>
                <div>
                  <p className="max-w-xs text-sm leading-relaxed text-ink-soft">{y.short}</p>
                </div>
                <span className="eyebrow text-mute transition-colors group-hover:text-clay">
                  Inspect this force
                </span>
              </button>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
      <DiscoveryModal item={active} onClose={close} />
    </section>
  );
}
