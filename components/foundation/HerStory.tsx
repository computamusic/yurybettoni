import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { QUOTES } from "@/lib/yury";

const GOLD = "#c2913b";

// Alessandra's story — first-person, serif long-form, intimate and quiet.
export function HerStory() {
  return (
    <section id="story" className="scroll-mt-24 bg-bone">
      <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-[4/5] overflow-hidden bg-bone-deep">
                <Image
                  src="/images/legacy-africa.jpg"
                  alt="A young Yury Bettoni with his family in Africa"
                  fill
                  sizes="(max-width: 1024px) 92vw, 42vw"
                  className="graded object-cover"
                />
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-mute">
                Alessandra &amp; Yury — East Africa
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow" style={{ color: GOLD }}>
              Her story
            </p>
            <h2
              className="mt-5 max-w-[20ch] font-display font-medium leading-[1.08] tracking-[-0.015em] text-ink"
              style={{ fontSize: "var(--text-display)" }}
            >
              The first hand to ever hold mine on a court was hers.
            </h2>

            <div className="mt-10 max-w-xl space-y-7 font-display text-lg leading-[1.75] text-ink-soft">
              <p>
                I was born in Addis Ababa, Ethiopia, in 1976. Before I was old enough
                to keep the names straight, my family carried me across six countries
                — Ethiopia, Saudi Arabia, Liberia, Ivory Coast, Tanzania — each move
                staying a step ahead of the unrest, until we finally settled in
                Italy. My father was the largest infrastructure developer in
                northeast Africa; he built things that were meant to last. My mother,
                Alessandra, built something quieter and just as permanent in me.
              </p>
              <p>
                She is the one who first put a racquet in my hand. She did not teach
                me to win. She taught me to show up — to a court, to a person, to a
                day — with everything I had, and to leave it better than I found it.
                I was seven, in Dar es Salaam, when I hit my first ball.
              </p>
              <p className="border-l-2 pl-6 not-italic text-ink" style={{ borderColor: GOLD }}>
                &ldquo;{QUOTES.firstBall.text}&rdquo;
                <span className="mt-3 block text-sm not-italic text-mute">
                  {QUOTES.firstBall.context}
                </span>
              </p>
              <p>
                Africa teaches the real, basic values of life: patience, gratitude,
                the weight of a shared meal, the way a small kindness can change a
                whole afternoon. When my mother passed, the silence was the loudest
                thing I have ever heard. Slowly I understood that the way to keep her
                near was to do, for other children, the thing she had done for me — to
                put something in their hands that no one could ever take away.
              </p>
              <p>
                A boy who kept being uprooted now spends his life building a place
                that stays put — a door that opens for the next child, and does not
                close behind them.
              </p>
              <p className="border-l-2 pl-6 italic text-ink" style={{ borderColor: GOLD }}>
                She gave me the game. The least I can do is give it forward.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
