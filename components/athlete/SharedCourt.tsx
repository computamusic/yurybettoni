import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { LEGENDS } from "@/lib/yury";

export function SharedCourt() {
  return (
    <section id="legends" className="scroll-mt-24 bg-night text-light">
      <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-20">
          <Reveal>
            <p className="eyebrow text-clay">The orbit</p>
            <h2
              className="mt-5 font-display font-medium leading-[1.04] tracking-[-0.015em]"
              style={{ fontSize: "var(--text-display)" }}
            >
              Shared the court with.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-base leading-relaxed text-light/70">
              A nomad&apos;s childhood became a front-row seat to a golden era of the game.
              The names below are not a wish list — they are training partners, hitting
              partners, mentors and rivals from across the years.
            </p>
          </Reveal>
        </div>

        <RevealGroup
          gap={0.06}
          className="mt-16 grid gap-px overflow-hidden border border-light/15 bg-light/10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {LEGENDS.map((l, i) => (
            <RevealItem key={l.name} className="group bg-night">
              <div className="flex h-full flex-col justify-between gap-8 p-7 transition-colors duration-300 hover:bg-night-soft md:p-8">
                <span className="font-mono text-xs font-semibold tracking-[0.16em] text-clay">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-medium leading-tight md:text-3xl">
                    {l.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-light/65">{l.relation}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
