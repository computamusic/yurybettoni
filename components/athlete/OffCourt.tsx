import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { BIOFILE, FEDERER_STORY } from "@/lib/yury";

export function OffCourt() {
  return (
    <section id="off-court" className="scroll-mt-24 border-t border-line bg-bone">
      <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-clay">Off the court</p>
          <h2
            className="mt-5 font-display font-medium leading-[1.05] tracking-[-0.015em] text-ink"
            style={{ fontSize: "var(--text-display)" }}
          >
            The man behind the method.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Biofile data grid */}
          <RevealGroup className="grid grid-cols-1 gap-px overflow-hidden border-t border-line sm:grid-cols-2 sm:border sm:border-line">
            {BIOFILE.map((row) => (
              <RevealItem
                key={row.label}
                className="border-b border-line bg-bone px-1 py-5 sm:border-b-0 sm:border-r sm:border-line/60 sm:p-6"
              >
                <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-mute">
                  {row.label}
                </p>
                <p className="mt-2 font-display text-lg leading-snug text-ink">{row.value}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          {/* Federer PlayStation anecdote — feature card */}
          <Reveal delay={0.1}>
            <figure className="flex h-full flex-col overflow-hidden border border-line bg-bone-deep">
              <div className="relative aspect-[16/10] overflow-hidden bg-night">
                <Image
                  src="/images/archive-federer.jpg"
                  alt="A young Yury Bettoni with a young Roger Federer"
                  fill
                  sizes="(max-width: 1024px) 92vw, 50vw"
                  className="graded object-cover"
                />
                <figcaption className="absolute bottom-3 left-4 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-light">
                  With a young Roger Federer
                </figcaption>
              </div>
              <div className="flex flex-1 flex-col p-7 md:p-9">
                <p className="eyebrow text-clay">A true story</p>
                <h3 className="mt-4 font-display text-2xl font-medium leading-tight text-ink md:text-3xl">
                  {FEDERER_STORY.title}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-ink-soft">
                  {FEDERER_STORY.text}
                </p>
              </div>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
