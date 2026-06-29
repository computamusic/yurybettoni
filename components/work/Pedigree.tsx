import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { QUOTES } from "@/lib/yury";

// Proof points drawn straight from the public record (see lib/yury.ts).
const PROOF = [
  {
    n: "01",
    stat: "Bollettieri",
    label: "The academy ranks",
    note: "Trained in the same Bradenton ranks as Marcelo Ríos, Marat Safin and Max Mirnyi — the production line that built world No. 1s.",
  },
  {
    n: "02",
    stat: "Grand Slam",
    label: "Hitting partner",
    note: "On the other side of the net for Mary Pierce's run to the 1997 Italian Open title — back on the very court he'd once watched from the stands.",
  },
  {
    n: "03",
    stat: "Switzerland",
    label: "Beside a young Federer",
    note: "At the Swiss Tennis Federation he trained alongside a teenage Roger Federer, as assistant to super-coach Sven Groeneveld.",
  },
  {
    n: "04",
    stat: "USPTR · ISSA",
    label: "Certified",
    note: "Credentialed by the USPTR and ISSA, with degrees in International Management and Economics. Instinct, made into method.",
  },
];

export function Pedigree() {
  return (
    <section className="scroll-mt-24 border-t border-light/15 bg-night text-light">
      <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-clay">Why learn from Yury</p>
          <h2
            className="mt-5 font-display font-medium leading-[1.05] tracking-[-0.015em]"
            style={{ fontSize: "var(--text-display)" }}
          >
            A career spent inside the lines that matter.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-light/70">
            Not a theory borrowed from a manual — a method earned beside champions,
            on the courts where the game is decided.
          </p>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-px overflow-hidden border border-light/15 bg-light/15 sm:grid-cols-2 lg:grid-cols-4">
          {PROOF.map((p) => (
            <RevealItem key={p.n} className="h-full">
              <div className="flex h-full flex-col justify-between gap-12 bg-night p-7">
                <span className="font-mono text-xs font-semibold tracking-[0.16em] text-light/40">
                  {p.n}
                </span>
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-clay">
                    {p.stat}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-medium leading-snug">
                    {p.label}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-light/70">{p.note}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Pull-quote — QUOTES.whyTennis, verbatim. */}
        <Reveal delay={0.1} className="mt-20 grid gap-10 md:grid-cols-12 md:items-center">
          <div className="relative aspect-[5/4] overflow-hidden md:col-span-4">
            <Image
              src="/images/about-yury.jpg"
              alt="Yury Bettoni"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="graded object-cover"
            />
          </div>
          <blockquote className="md:col-span-7 md:col-start-6">
            <p
              className="font-display font-medium leading-[1.18] tracking-[-0.01em]"
              style={{ fontSize: "var(--text-heading)" }}
            >
              &ldquo;{QUOTES.whyTennis.text}&rdquo;
            </p>
            <footer className="mt-6 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-light/60">
              — {QUOTES.whyTennis.attribution}
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
