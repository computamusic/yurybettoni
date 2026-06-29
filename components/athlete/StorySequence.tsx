import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

import { QUOTES } from "@/lib/yury";

const CHAPTERS = [
  {
    n: "01",
    title: "Africa",
    img: "/images/legacy-africa.jpg",
    alt: "The Bettoni family in Africa",
    body: "Born in Addis Ababa in 1976 to Italian parents, he spent a childhood carried across six countries — Ethiopia, Saudi Arabia, Liberia, Ivory Coast, Tanzania — before Italy. He learned early that home is something you carry, not somewhere you stay. It was his mother, Alessandra, who set the standard he would chase for life.",
    quote: QUOTES.africa.text,
  },
  {
    n: "02",
    title: "The first ball",
    img: "/images/hero-1.jpg",
    alt: "Yury Bettoni on court",
    body: "Age seven, in Dar es Salaam, he saw a tennis court for the first time. At thirteen a school teacher pushed a reluctant boy onto the court — and that same week he reached the final of both his school event and the Italian National Mini championship. Alessandra told him to take it seriously. He did.",
    quote: QUOTES.firstBall.text,
  },
  {
    n: "03",
    title: "Bollettieri",
    img: "/images/archive-academy.jpg",
    alt: "The Nick Bollettieri Academy in Florida",
    body: "A one-way ticket to Florida and the most demanding tennis academy in the world. At the Nick Bollettieri Academy he trained in the same ranks as Marcelo Ríos, Marat Safin and Max Mirnyi. The courts didn't care where you came from — only how you competed. He competed.",
  },
  {
    n: "04",
    title: "Among champions",
    img: "/images/archive-champions.jpg",
    alt: "Yury Bettoni alongside champions in the late nineties",
    body: "Hitting partner to Mary Pierce on her run to the 1997 Italian Open title — back on the very Rome court he had once watched from the stands, dreaming of Agassi. The next year, Switzerland: training beside a young Roger Federer at the Swiss Tennis Federation, as assistant to super-coach Sven Groeneveld.",
    quote: QUOTES.fullCircle.text,
  },
  {
    n: "05",
    title: "The architect",
    img: "/images/about-yury.jpg",
    alt: "Yury Bettoni striking a forehand",
    body: "A degree from the University of South Florida in International Management and Economics. Certifications from the USPTR and ISSA. A partnership at the luxury kitchen house Italkraft, on projects from Zaha Hadid's One Thousand Museum to the St. Regis. The same discipline, pointed at a bigger life — and at a foundation that carries his mother's name forward.",
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
            Five chapters, one through-line: discipline.
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
                  {c.quote && (
                    <blockquote className="mt-7 max-w-md border-l-2 border-clay pl-5">
                      <p className="font-display text-lg italic leading-snug text-ink md:text-xl">
                        &ldquo;{c.quote}&rdquo;
                      </p>
                    </blockquote>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
