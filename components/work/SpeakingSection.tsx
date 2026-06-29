import Link from "next/link";
import { Chevron } from "@/components/ui/Chevron";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const FORMATS = [
  { n: "01", title: "Keynote", body: "A 30–45 minute talk on the mindset that carried a kid from Rome to the players' box of champions." },
  { n: "02", title: "Fireside", body: "A moderated conversation — the story, the method, and the questions only your room would ask." },
  { n: "03", title: "Clinic", body: "On-court teaching for your team or members, built around the 3 Y's." },
];

export function SpeakingSection() {
  return (
    <section id="speaking" className="scroll-mt-24 bg-night text-light">
      <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-end lg:gap-20">
          <Reveal>
            <p className="eyebrow text-clay">Speaking</p>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-[-0.015em] md:text-6xl">
              His story, on your stage.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-base leading-relaxed text-light/75">
              Yury speaks to teams, academies, and companies about resilience, focus, and the
              long road behind any overnight result. Three formats, shaped to your audience.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mt-16 grid gap-px overflow-hidden border border-light/15 bg-light/10 md:grid-cols-3">
          {FORMATS.map((f) => (
            <RevealItem key={f.n} className="h-full">
              <div className="flex h-full flex-col gap-10 bg-night p-8 md:p-10">
                <span className="font-mono text-sm font-semibold tracking-[0.16em] text-clay">
                  {f.n}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-medium md:text-3xl">{f.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-light/70">{f.body}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <div className="mt-14">
            <Link
              href="/contact"
              className="chev-host inline-flex items-center gap-3 bg-light px-7 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-night transition-colors hover:bg-clay hover:text-light"
            >
              Book Yury to speak
              <Chevron />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
