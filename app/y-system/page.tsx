import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { AmbientVideo } from "@/components/ui/AmbientVideo";
import { Chevron } from "@/components/ui/Chevron";
import { BookingForm } from "@/components/y-system/BookingForm";
import {
  THREE_YS,
  YSYSTEM_INTRO,
  YSYSTEM_TAGLINE,
  YSYSTEM_DEFINITION,
  YSYSTEM_PHASES,
  YSYSTEM_BENEFIT,
  YBASE,
  YSYSTEM_PROGRAMS,
} from "@/lib/yury";

export const metadata: Metadata = {
  title: "The Y-System — Yury Bettoni",
  description:
    "Be the architect of your own body. The Y-System is Yury Bettoni's holistic tennis methodology — Mobility, Stability, Velocity — across seven phases, the Y-Base tool and bookable coaching.",
};

// The signature treatment: each key reads "mobilitY", trailing Y pulled out in
// clay so the 3 Y's framework is legible at a glance.
function KeyMark({ word }: { word: string }) {
  const stem = word.slice(0, -1);
  return (
    <span className="font-display lowercase leading-none tracking-[-0.01em]">
      <span className="text-ink-soft">{stem}</span>
      <span className="text-clay">Y</span>
    </span>
  );
}

export default function YSystemPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Method"
        title={YSYSTEM_TAGLINE}
        lead={YSYSTEM_DEFINITION.lead}
        image="/images/y-system/action.jpg"
        images={[
          "/images/y-system/action.jpg",
          "/images/y-system/footwork.jpg",
          "/images/y-system/stance.jpg",
        ]}
        imageAlt="Yury Bettoni training the Y-System"
        imagePosition="center 22%"
        anchors={[
          { href: "#principles", label: "The 3 Y's" },
          { href: "#phases", label: "Seven phases" },
          { href: "#y-base", label: "The Y-Base" },
          { href: "#programs", label: "Programs" },
          { href: "#book", label: "Book" },
        ]}
      />

      {/* The principles — definition + the 3 Y's as a set. */}
      <section id="principles" className="scroll-mt-36 border-t border-line bg-bone">
        <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-clay">{YSYSTEM_INTRO.eyebrow}</p>
            <h2
              className="mt-5 font-display font-medium leading-[1.05] tracking-[-0.015em] text-ink"
              style={{ fontSize: "var(--text-display)" }}
            >
              {YSYSTEM_INTRO.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-soft">
              {YSYSTEM_DEFINITION.detail}
            </p>
          </Reveal>

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
                    <p className="mt-4 text-sm leading-relaxed text-ink-soft">{y.body}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* The seven phases — the method as a sequence. */}
      <section id="phases" className="scroll-mt-36 border-t border-line bg-bone-deep">
        <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-clay">The build — seven phases</p>
            <h2
              className="mt-5 font-display font-medium leading-[1.05] tracking-[-0.015em] text-ink"
              style={{ fontSize: "var(--text-display)" }}
            >
              From the first step to the last meal.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-soft">
              Each phase layers onto the last — movement before strokes, control before
              speed, tactics and nutrition closing the loop.
            </p>
          </Reveal>

          <RevealGroup className="mt-14 grid gap-px overflow-hidden border border-line bg-line md:mt-16 md:grid-cols-2">
            {YSYSTEM_PHASES.map((p) => (
              <RevealItem key={p.n} className="h-full bg-bone">
                <div className="flex h-full gap-6 p-8 transition-colors duration-300 hover:bg-bone-deep md:p-10">
                  <span className="font-mono text-sm font-semibold text-clay">{p.n}</span>
                  <div>
                    <h3 className="font-display text-xl font-medium text-ink md:text-2xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.body}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Water training — phase 03, in a full-bleed real frame from the method. */}
      <section className="relative isolate overflow-hidden bg-night">
        <div className="relative h-[56svh] min-h-80 w-full md:h-[68svh]">
          <Image
            src="/images/y-system/water.jpg"
            alt="Yury Bettoni training underwater — the Y-System's water phase"
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 40%" }}
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(8,12,16,0.35) 0%, rgba(8,12,16,0.1) 45%, rgba(8,12,16,0.85) 100%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-(--max-content) px-5 pb-10 md:px-8 md:pb-14">
              <p className="eyebrow text-clay">Phase 03 — Water Training</p>
              <p className="mt-3 max-w-xl font-display text-2xl font-medium leading-[1.2] tracking-[-0.01em] text-light md:text-3xl">
                Control, balance and body awareness — refined under water, returned to the
                court.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Y-Base — the signature training tool. */}
      <section id="y-base" className="scroll-mt-36 border-t border-line bg-bone">
        <div className="mx-auto grid max-w-(--max-content) items-center gap-10 px-5 py-24 md:grid-cols-2 md:gap-16 md:px-8 md:py-32">
          <Reveal>
            <p className="eyebrow text-clay">{YBASE.eyebrow}</p>
            <h2
              className="mt-5 font-display font-medium leading-[1.05] tracking-[-0.015em] text-ink"
              style={{ fontSize: "var(--text-display)" }}
            >
              {YBASE.title}
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-soft">{YBASE.body}</p>
          </Reveal>

          <Reveal delay={0.12} className="w-full">
            <div className="group relative aspect-square overflow-hidden bg-night md:aspect-[4/5]">
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
      </section>

      {/* The payoff — the benefit statement, large. */}
      <section className="border-t border-line bg-night">
        <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
          <Reveal className="max-w-4xl">
            <p className="eyebrow text-clay">The outcome</p>
            <p className="mt-6 font-display text-2xl font-medium leading-[1.25] tracking-[-0.01em] text-light md:text-4xl md:leading-[1.2]">
              {YSYSTEM_BENEFIT}
            </p>
          </Reveal>
        </div>
      </section>

      {/* The programs — ways to put the method to work. */}
      <section id="programs" className="scroll-mt-36 border-t border-line bg-bone">
        <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-clay">Put the method to work</p>
            <h2
              className="mt-5 font-display font-medium leading-[1.05] tracking-[-0.015em] text-ink"
              style={{ fontSize: "var(--text-display)" }}
            >
              Four ways into the system.
            </h2>
          </Reveal>

          <RevealGroup className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {YSYSTEM_PROGRAMS.map((p) => (
              <RevealItem key={p.title} className="h-full bg-bone">
                <a
                  href="#book"
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

      {/* Book — the mocked enquiry form. */}
      <section id="book" className="scroll-mt-36 border-t border-line bg-bone-deep">
        <div className="mx-auto grid max-w-(--max-content) gap-12 px-5 py-24 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:px-8 md:py-32">
          <Reveal>
            <p className="eyebrow text-clay">Book the Y-System</p>
            <h2
              className="mt-5 font-display font-medium leading-[1.05] tracking-[-0.015em] text-ink"
              style={{ fontSize: "var(--text-display)" }}
            >
              Train with Yury and his coaches.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
              Choose what you&apos;re after — from a single private session to a full
              assessment, water training, the Y-Base or a tuned nutrition plan — and the
              team will be in touch.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <BookingForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
