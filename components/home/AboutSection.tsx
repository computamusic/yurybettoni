import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { ForwardLink } from "@/components/ui/Chevron";

export function AboutSection() {
  return (
    <section className="border-t border-line bg-bone">
      <div className="mx-auto grid max-w-(--max-content) items-center gap-12 px-5 py-24 md:px-8 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-bone-deep">
            <Image
              src="/images/about-yury.jpg"
              alt="Yury Bettoni striking a forehand at the Miami Open"
              fill
              sizes="(max-width: 1024px) 90vw, 42vw"
              className="graded object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow text-clay">About</p>
          <h2
            className="mt-4 font-display font-medium leading-[1.05] tracking-[-0.015em] text-ink"
            style={{ fontSize: "var(--text-heading)" }}
          >
            The athlete who became an architect.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
            Born in Addis Ababa and raised across Africa, Yury turned a
            first ball struck clean off the strings into a life on tour. He trained at the
            Nick Bollettieri Academy, hit with champions, and coached at the highest level —
            then built a second life off the court, from a partnership at the luxury kitchen
            house Italkraft to the Alessandra Bettoni Foundation, founded in his mother&apos;s
            name. An athlete who became an architect — of homes, of method, of purpose.
          </p>
          <div className="mt-9">
            <ForwardLink href="/athlete#story">Learn more</ForwardLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
