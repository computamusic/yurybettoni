import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const CHAPTERS = [
  {
    n: "01",
    title: "Africa",
    img: "/images/legacy-africa.jpg",
    alt: "The Bettoni family in Africa",
    body: "Born in Africa to Italian parents who built things meant to last, he learned early that home is something you carry, not somewhere you stay. It was his mother, Alessandra, who first put a racquet in his hand — and a standard in his head.",
  },
  {
    n: "02",
    title: "Bollettieri",
    img: "/images/hero-1.jpg",
    alt: "Yury Bettoni on a hard court",
    body: "A one-way ticket to Florida and the most demanding tennis academy in the world. At the Nick Bollettieri Academy, the courts didn't care where you came from — only how you competed. He competed.",
  },
  {
    n: "03",
    title: "Among champions",
    img: "/images/archive-champions.jpg",
    alt: "Yury Bettoni alongside champions in the late nineties",
    body: "Hitting partner to Mary Pierce for her 1997 Italian Open title in Rome. In the corner of Jeff Tarango and Arantxa Sánchez Vicario. He spent his twenties beside the very best in the game, learning what separates good from great.",
  },
  {
    n: "04",
    title: "The architect",
    img: "/images/about-yury.jpg",
    alt: "Yury Bettoni striking a forehand",
    body: "A degree from the University of South Florida. Certifications as a coach and a trainer. A partnership at Italkraft, the luxury kitchen house. The same discipline, pointed at a bigger life — and at a foundation that carries his mother's name forward.",
  },
];

export function StorySequence() {
  return (
    <section id="story" className="scroll-mt-24 bg-bone">
      <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-clay">The story</p>
          <h2
            className="mt-5 font-display font-medium leading-[1.05] tracking-[-0.015em] text-ink"
            style={{ fontSize: "var(--text-display)" }}
          >
            Four chapters, one through-line: discipline.
          </h2>
        </Reveal>

        <div className="mt-20 flex flex-col gap-24 md:gap-32">
          {CHAPTERS.map((c, i) => (
            <Reveal key={c.n}>
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-bone-deep">
                  <Image
                    src={c.img}
                    alt={c.alt}
                    fill
                    sizes="(max-width: 1024px) 92vw, 46vw"
                    className="graded object-cover"
                  />
                  <span className="absolute left-5 top-5 font-mono text-sm font-semibold tracking-[0.16em] text-light/90">
                    {c.n}
                  </span>
                </div>
                <div>
                  <p className="eyebrow text-clay">Chapter {c.n}</p>
                  <h3 className="mt-4 font-display text-3xl font-medium text-ink md:text-5xl">
                    {c.title}
                  </h3>
                  <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
                    {c.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
