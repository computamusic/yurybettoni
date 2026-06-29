import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Chevron, ForwardLink } from "@/components/ui/Chevron";
import {
  THREE_YS,
  YSYSTEM_INTRO,
  YSYSTEM_PROGRAMS,
  YSYSTEM_TAGLINE,
  YSYSTEM_PHASES,
} from "@/lib/yury";

// The signature treatment: each key reads "mobilitY", with the trailing Y
// pulled out in clay so the 3 Y's framework is legible at a glance.
function KeyMark({ word }: { word: string }) {
  const stem = word.slice(0, -1);
  return (
    <span className="font-display lowercase leading-none tracking-[-0.01em]">
      <span className="text-ink-soft">{stem}</span>
      <span className="text-clay">Y</span>
    </span>
  );
}

export function YSystem() {
  return (
    <section id="method" className="scroll-mt-36 border-t border-line bg-bone">
      <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-clay">{YSYSTEM_INTRO.eyebrow}</p>
          <h2
            className="mt-5 font-display font-medium leading-[1.05] tracking-[-0.015em] text-ink"
            style={{ fontSize: "var(--text-display)" }}
          >
            {YSYSTEM_INTRO.title}
          </h2>
          <p className="mt-4 font-display text-lg italic text-clay">
            {YSYSTEM_TAGLINE}.
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
            {YSYSTEM_INTRO.body}
          </p>
        </Reveal>

        {/* The 3 Y's — a set, not a sequence. */}
        <RevealGroup className="mt-16 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
          {THREE_YS.map((y) => (
            <RevealItem key={y.key} className="h-full bg-bone">
              <div className="flex h-full flex-col justify-between gap-10 p-8 transition-colors duration-300 hover:bg-bone-deep md:p-10">
                <span className="text-3xl md:text-4xl">
                  <KeyMark word={y.key} />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-medium text-ink md:text-3xl">
                    {y.title}
                  </h3>
                  <p className="mt-3 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-clay">
                    {y.short}
                  </p>
                  <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
                    {y.body}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* The seven phases — the method as a sequence, in brief. */}
        <Reveal delay={0.1} className="mt-16 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <p className="eyebrow text-mute">The build — seven phases</p>
          <ForwardLink href="/y-system">Explore the full Y-System</ForwardLink>
        </Reveal>
        <RevealGroup className="mt-6 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {YSYSTEM_PHASES.map((p) => (
            <RevealItem key={p.n} className="h-full bg-bone">
              <a
                href="/y-system#phases"
                className="group flex h-full gap-4 p-6 transition-colors duration-300 hover:bg-bone-deep"
              >
                <span className="font-mono text-xs font-semibold text-clay">{p.n}</span>
                <div>
                  <h3 className="font-display text-base font-medium text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.body}</p>
                </div>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* The programs — ways to put the method to work. */}
        <Reveal delay={0.1} className="mt-16">
          <p className="eyebrow text-mute">Put the method to work</p>
        </Reveal>
        <RevealGroup className="mt-6 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {YSYSTEM_PROGRAMS.map((p) => (
            <RevealItem key={p.title} className="h-full bg-bone">
              <a
                href="#courses"
                className="group flex h-full flex-col justify-between gap-8 p-7 transition-colors duration-300 hover:bg-bone-deep"
              >
                <span className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-medium text-ink">{p.title}</h3>
                  <span className="text-ink/45 transition-colors group-hover:text-clay">
                    <Chevron />
                  </span>
                </span>
                <p className="text-sm leading-relaxed text-ink-soft">{p.note}</p>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
