import Image from "next/image";
import Link from "next/link";
import { Chevron } from "@/components/ui/Chevron";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const PILLARS = [
  {
    n: "01",
    title: "The Athlete",
    sub: "The proof",
    body: "Bollettieri to the pro tour to the players' box of champions. The credibility, the story, the philosophy.",
    href: "/athlete",
    img: "/images/archive-federer.jpg",
    alt: "A young Yury Bettoni with fellow players in the late nineties",
  },
  {
    n: "02",
    title: "The Legacy",
    sub: "The heart",
    body: "The Alessandra Bettoni Foundation. A mother's gift, given forward to young people in Ethiopia and Tanzania.",
    href: "/foundation",
    img: "/images/legacy-africa.jpg",
    alt: "A family in Africa, from the Bettoni archive",
  },
  {
    n: "03",
    title: "The Work",
    sub: "For you",
    body: "Courses, coaching, speaking and events. The method that built a career — made available to yours.",
    href: "/work",
    img: "/images/hero-action.png",
    alt: "Yury Bettoni training on court",
  },
];

export function PillarRouter() {
  return (
    <section id="paths" className="scroll-mt-20 border-t border-line bg-bone">
      <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-clay">One world, three paths</p>
          <h2
            className="mt-5 font-display font-medium leading-[1.05] tracking-[-0.015em] text-ink"
            style={{ fontSize: "var(--text-display)" }}
          >
            Everything he does is the same instinct, expressed three ways.
          </h2>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p) => (
            <RevealItem key={p.href}>
              <Link
                href={p.href}
                className="group block border-b border-line pb-6 transition-colors"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-bone-deep">
                  <Image
                    src={p.img}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="graded object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(23,21,15,0.45) 0%, transparent 22%, transparent 72%, rgba(23,21,15,0.5) 100%)",
                    }}
                  />
                  <span className="absolute left-4 top-4 font-sans text-xs font-semibold tracking-[0.18em] text-light/90">
                    {p.n}
                  </span>
                  <span className="eyebrow absolute bottom-4 right-4 text-light/90">
                    {p.sub}
                  </span>
                </div>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-medium text-ink md:text-[1.7rem]">
                      {p.title}
                    </h3>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
                      {p.body}
                    </p>
                  </div>
                  <span className="mt-2 shrink-0 text-ink">
                    <Chevron />
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
