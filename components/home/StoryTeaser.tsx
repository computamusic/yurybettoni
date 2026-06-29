import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { ForwardLink } from "@/components/ui/Chevron";

export function StoryTeaser() {
  return (
    <section className="border-t border-line bg-bone-deep">
      <div className="mx-auto grid max-w-(--max-content) items-center gap-12 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <Reveal>
          <div className="relative aspect-[3/2] overflow-hidden bg-bone">
            <Image
              src="/images/archive-champions.jpg"
              alt="A young Yury Bettoni alongside a champion, late nineties"
              fill
              sizes="(max-width: 1024px) 92vw, 55vw"
              className="graded object-cover"
            />
            <span className="eyebrow absolute bottom-4 left-4 text-light/90">
              Archive — c. 1998
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow text-clay">Among champions</p>
          <h2
            className="mt-5 font-display font-medium leading-[1.08] tracking-[-0.01em] text-ink"
            style={{ fontSize: "var(--text-heading)" }}
          >
            In the players&apos; box of the world&apos;s very best.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
            Hitting partner to Mary Pierce for her 1997 Italian Open title. In the corner of
            Tarango and Sánchez Vicario. The youngest coach in the room — proof that the
            method travels, and that he has stood exactly where it counts.
          </p>
          <div className="mt-9">
            <ForwardLink href="/athlete/timeline">See the timeline</ForwardLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
