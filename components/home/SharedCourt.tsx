"use client";

import { useCallback, useState } from "react";
import { LEGENDS } from "@/lib/yury";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { DiscoveryModal, type Discovery } from "@/components/home/DiscoveryModal";

const searchFor = (query: string) =>
  `https://www.google.com/search?q=${encodeURIComponent(query)}`;

const PLAYER_CONTEXT: Record<string, string> = {
  "Roger Federer": "The Swiss champion and twenty-time major winner was still a rising teenager when Yury trained alongside him at the Swiss Tennis Federation.",
  "Andre Agassi": "The eight-time major champion was Yury's childhood idol. Years later, Agassi also became Yury's unlikely avatar in a memorable PlayStation match against Federer.",
  "Mary Pierce": "The major champion brought Yury onto court as a hitting partner during her title-winning 1997 Italian Open run — a full-circle return to the Rome court he once watched from the stands.",
  "Marat Safin": "The future world No. 1 and two-time major champion came through the Bollettieri orbit during Yury's academy years.",
  "Marcelo Ríos": "The future world No. 1 was among the elite young players in the Bollettieri training environment Yury joined in Florida.",
  "Max Mirnyi": "The major-winning doubles specialist was another academy contemporary in the exceptionally deep Bollettieri ranks.",
  "Arantxa Sánchez Vicario": "The former world No. 1 and four-time major singles champion is part of Yury's professional-tour working history.",
  "Jeff Tarango": "The American tour professional is among the players whose competitive circle and support team overlapped with Yury's career.",
  "Mark Philippoussis": "The major finalist and Davis Cup champion was a contemporary in the academy generation that shaped Yury's view of high performance.",
  "Sven Groeneveld": "The internationally respected coach mentored Yury at the Swiss Federation, where their work placed him alongside a young Federer.",
};

const CREDITS = [
  {
    name: "Dunlop",
    kind: "Racquet partner",
    body: "Dunlop sponsored Yury's racquet when he turned professional in 1996. The relationship later continued through coaching, product work, and a formal sponsorship announcement.",
    query: "Yury Bettoni Dunlop sponsorship",
  },
  {
    name: "Lotto",
    kind: "Tour apparel",
    body: "Lotto supplied Yury's playing kit during his professional years. It belongs here as part of the equipment story behind his time on tour.",
    query: "Yury Bettoni Lotto tennis",
  },
  {
    name: "Völkl",
    kind: "Racquet relationship",
    body: "Völkl appears in Yury's later racquet history and athlete archive, following his earlier years with Dunlop.",
    query: "Yury Bettoni Volkl tennis",
  },
  {
    name: "HBO — Ballers",
    kind: "On-screen appearance",
    body: "This is not a sponsor credit: Yury appeared on HBO's Ballers. It is listed as a small but memorable piece of his life beyond the court.",
    query: "Yury Bettoni HBO Ballers",
  },
];

export function SharedCourt() {
  const [active, setActive] = useState<Discovery | null>(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <section className="relative overflow-hidden border-t border-light/10 bg-night text-light">
      <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-clay">Shared the court with</p>
          <h2 className="mt-5 font-display text-3xl font-normal leading-[1.1] tracking-[-0.01em] md:text-5xl">
            A constellation of the game&apos;s
            <span className="italic text-light/70"> very best.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-light/60">
            These are not endorsements by association. Each name marks a real point of
            contact in Yury&apos;s academy, tour, playing, or coaching life. Open one to see why.
          </p>
        </Reveal>

        <RevealGroup gap={0.06} className="mt-14 grid gap-px overflow-hidden border-y border-light/10 sm:grid-cols-2 lg:grid-cols-3">
          {LEGENDS.map((legend) => (
            <RevealItem key={legend.name} className="group border-b border-light/10 sm:border-b-0 sm:border-t">
              <button
                type="button"
                aria-haspopup="dialog"
                onClick={() =>
                  setActive({
                    eyebrow: "Shared history",
                    title: legend.name,
                    body: PLAYER_CONTEXT[legend.name] ?? legend.relation,
                    detail: legend.relation,
                    href: searchFor(`${legend.name} tennis`),
                    cta: `Learn more about ${legend.name}`,
                    external: true,
                  })
                }
                className="flex h-full w-full cursor-pointer items-start justify-between gap-5 py-7 text-left sm:px-5 sm:py-8 lg:px-7"
              >
                <span>
                  <span className="block font-display text-2xl font-normal leading-tight tracking-[-0.01em] text-light transition-colors group-hover:text-clay md:text-[1.9rem]">
                    {legend.name}
                  </span>
                  <span className="mt-2 block text-sm leading-snug text-light/55">{legend.relation}</span>
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-light/20 text-lg text-light/60 transition-all group-hover:rotate-90 group-hover:border-clay group-hover:text-clay">+</span>
              </button>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <div className="mt-16 border-t border-light/10 pt-10">
            <p className="eyebrow text-clay">The names around the work</p>
            <h3 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-light">
              Equipment, apparel, and one unexpected screen credit.
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-light/55">
              These names refer to specific chapters in Yury&apos;s career. Open each one for the connection, rather than leaving the logo to imply it.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {CREDITS.map((credit) => (
                <button
                  key={credit.name}
                  type="button"
                  aria-haspopup="dialog"
                  onClick={() =>
                    setActive({
                      eyebrow: credit.kind,
                      title: credit.name,
                      body: credit.body,
                      href: searchFor(credit.query),
                      cta: "See the wider record",
                      external: true,
                    })
                  }
                  className="group flex min-h-36 cursor-pointer flex-col justify-between border border-light/15 p-5 text-left transition-colors hover:border-clay/60 hover:bg-light/[0.04]"
                >
                  <span className="eyebrow text-light/40">{credit.kind}</span>
                  <span className="flex items-end justify-between gap-3">
                    <span className="font-display text-xl text-light">{credit.name}</span>
                    <span className="text-xl text-clay transition-transform group-hover:rotate-90">+</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
      <DiscoveryModal item={active} onClose={close} />
    </section>
  );
}
