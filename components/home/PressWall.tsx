"use client";

import { useCallback, useState } from "react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { DiscoveryModal, type Discovery } from "@/components/home/DiscoveryModal";

const OUTLETS = [
  {
    name: "Tennis-Prose",
    kind: "Interviews & commentary",
    body: "Tennis-Prose has documented Yury's playing memories, coaching relationships, equipment perspective, and firsthand stories about figures including Federer, Bollettieri, and Peter Lundgren.",
    href: "https://www.google.com/search?q=site%3Atennis-prose.com+Yury+Bettoni",
  },
  {
    name: "Beryll Journal",
    kind: "Profile",
    body: "Beryll Journal profiled Yury's path from Ethiopia and professional tennis into entrepreneurship and luxury design through Italkraft.",
    href: "https://www.google.com/search?q=Beryll+Journal+Yury+Bettoni+Italkraft",
  },
  {
    name: "Sweat It Out",
    kind: "Long-form interview",
    body: "Sweat It Out featured a candid interview about Yury's years as an ATP professional, his coaching life, and the lessons carried from the tour into the work he does now.",
    href: "https://www.google.com/search?q=Sweat+It+Out+Yury+Bettoni+interview",
  },
  {
    name: "USPTR",
    kind: "Professional credential",
    body: "USPTR is not a publication credit. It refers to Yury's professional tennis-coaching certification and the formal teaching foundation beneath his tour experience.",
    href: "https://www.google.com/search?q=Yury+Bettoni+USPTR+certified",
  },
];

export function PressWall() {
  const [active, setActive] = useState<Discovery | null>(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <section className="border-t border-line bg-bone">
      <div className="mx-auto max-w-(--max-content) px-5 py-20 md:px-8 md:py-24">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-clay">Where the story appears</p>
          <h2 className="mt-5 font-display text-3xl font-medium leading-tight text-ink md:text-5xl">
            Coverage, conversation, and credentials.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
            This is the outside record around Yury&apos;s career — profiles, interviews,
            specialist tennis coverage, and the credential behind his coaching work.
          </p>
        </Reveal>
        <RevealGroup className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {OUTLETS.map((outlet) => (
            <RevealItem key={outlet.name} className="group">
              <button
                type="button"
                aria-haspopup="dialog"
                onClick={() =>
                  setActive({
                    eyebrow: outlet.kind,
                    title: outlet.name,
                    body: outlet.body,
                    href: outlet.href,
                    cta: "Find the references",
                    external: true,
                  })
                }
                className="flex min-h-48 w-full cursor-pointer flex-col justify-between border border-line bg-bone-deep p-6 text-left transition-all hover:-translate-y-1 hover:border-clay/60"
              >
                <span className="eyebrow text-mute">{outlet.kind}</span>
                <span>
                  <span className="block font-display text-2xl text-ink transition-colors group-hover:text-clay">{outlet.name}</span>
                  <span className="mt-3 flex items-center justify-between text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-mute">
                    Why it&apos;s here
                    <span className="text-lg text-clay transition-transform group-hover:rotate-90">+</span>
                  </span>
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
