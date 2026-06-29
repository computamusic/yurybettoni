import { LEGENDS } from "@/lib/yury";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

// The headline legend-driver: a dark feature band naming the players whose
// orbit Yury shared. Names large, relation small — a constellation, not a list.
const CREDITS = ["Dunlop", "Lotto", "Völkl", "HBO — “Ballers”"];

export function SharedCourt() {
  return (
    <section className="relative overflow-hidden border-t border-light/10 bg-night text-light">
      <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-clay">Shared the court with</p>
          <h2 className="mt-5 font-display text-3xl font-normal leading-[1.1] tracking-[-0.01em] md:text-5xl">
            A constellation of the game&apos;s
            <span className="italic text-light/70"> very best.</span>
          </h2>
        </Reveal>

        <RevealGroup
          gap={0.06}
          className="mt-14 grid gap-px overflow-hidden border-y border-light/10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {LEGENDS.map((legend) => (
            <RevealItem
              key={legend.name}
              className="group flex flex-col gap-2 border-b border-light/10 py-7 sm:border-b-0 sm:border-t sm:py-8"
            >
              <span className="font-display text-2xl font-normal leading-tight tracking-[-0.01em] text-light transition-colors group-hover:text-clay md:text-[1.9rem]">
                {legend.name}
              </span>
              <span className="text-sm leading-snug text-light/55">
                {legend.relation}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-light/10 pt-8">
            <span className="eyebrow text-light/40">Backed &amp; featured</span>
            {CREDITS.map((credit) => (
              <span
                key={credit}
                className="font-sans text-sm uppercase tracking-[0.18em] text-light/65"
              >
                {credit}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
