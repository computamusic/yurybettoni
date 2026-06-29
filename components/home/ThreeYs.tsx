import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ForwardLink, Chevron } from "@/components/ui/Chevron";

const YS = [
  {
    n: "Y1",
    name: "Mobility",
    body: "Move first. The freedom to get anywhere on court before the ball asks you to.",
  },
  {
    n: "Y2",
    name: "Stability",
    body: "Hold your ground. The base that turns motion into a repeatable, trusted strike.",
  },
  {
    n: "Y3",
    name: "Velocity",
    body: "Then accelerate. Power released at the exact moment it counts — and not before.",
  },
];

export function ThreeYs() {
  return (
    <section className="border-t border-line bg-bone">
      <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal className="max-w-xl">
            <p className="eyebrow text-clay">The method — the 3 Y&apos;s</p>
            <h2
              className="mt-5 font-display font-medium leading-[1.05] tracking-[-0.015em] text-ink"
              style={{ fontSize: "var(--text-display)" }}
            >
              Three forces. One game.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ForwardLink href="/athlete#philosophy">Discover the method</ForwardLink>
          </Reveal>
        </div>

        <RevealGroup className="mt-16 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
          {YS.map((y, i) => (
            <RevealItem key={y.n} className="group bg-bone">
              <div className="flex h-full flex-col justify-between gap-10 p-8 transition-colors duration-300 hover:bg-bone-deep md:p-10">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-sm font-semibold tracking-[0.16em] text-clay">
                    {y.n}
                  </span>
                  {/* Velocity gets the chevron emphasis — the brand's motif */}
                  <span className={`text-ink/70 ${i === 2 ? "opacity-100" : "opacity-30"}`}>
                    <Chevron />
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-3xl font-medium text-ink md:text-4xl">
                    {y.name}
                  </h3>
                  <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">{y.body}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
