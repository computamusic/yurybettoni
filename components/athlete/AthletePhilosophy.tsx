import { Chevron } from "@/components/ui/Chevron";
import { Reveal as R, RevealGroup as RG, RevealItem as RI } from "@/components/ui/Reveal";

const YS = [
  { n: "Y1", name: "Mobility", body: "Move first. The freedom to reach any ball, in balance, before it dictates to you." },
  { n: "Y2", name: "Stability", body: "Hold your ground. The base that turns motion into a repeatable, trusted strike." },
  { n: "Y3", name: "Velocity", body: "Then accelerate. Power released at the exact moment it counts — and not before." },
];

export function AthletePhilosophy() {
  return (
    <section id="philosophy" className="scroll-mt-24 bg-night text-light">
      <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-end lg:gap-20">
          <R>
            <p className="eyebrow text-clay">The method — the 3 Y&apos;s</p>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-[-0.015em] md:text-6xl">
              Three forces. One game.
            </h2>
          </R>
          <R delay={0.1}>
            <p className="max-w-md text-base leading-relaxed text-light/75">
              The Y-System distills a lifetime in the sport into three forces every great
              shot shares — mobility into stability into velocity. Learn the sequence, and
              the game slows down for you.
            </p>
          </R>
        </div>

        <RG className="mt-16 grid gap-px overflow-hidden border border-light/15 bg-light/10 md:grid-cols-3">
          {YS.map((y, i) => (
            <RI key={y.n} className="group bg-night">
              <div className="flex h-full flex-col justify-between gap-12 p-8 transition-colors duration-300 hover:bg-night-soft md:p-10">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-sm font-semibold tracking-[0.16em] text-clay">{y.n}</span>
                  <span className={i === 2 ? "text-light" : "text-light/30"}>
                    <Chevron />
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-3xl font-medium md:text-4xl">{y.name}</h3>
                  <p className="mt-4 max-w-xs text-sm leading-relaxed text-light/70">{y.body}</p>
                </div>
              </div>
            </RI>
          ))}
        </RG>

        <R delay={0.1}>
          <blockquote className="mt-20 max-w-3xl border-l-2 border-clay pl-7">
            <p className="font-display text-2xl italic leading-snug md:text-3xl">
              &ldquo;Comparing yourself to others will only limit your ability to reach your
              higher level.&rdquo;
            </p>
            <footer className="eyebrow mt-5 text-light/60">Yury Bettoni</footer>
          </blockquote>
        </R>
      </div>
    </section>
  );
}
