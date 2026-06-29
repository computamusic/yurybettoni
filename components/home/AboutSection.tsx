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
            Yury is a former Italian-American professional tennis player who leverages his
            background in sport and business to give back with purpose through his
            foundation. Born in Africa, he lived across several countries before arriving in
            the United States to train at the renowned Nick Bollettieri Academy. After
            competing professionally and coaching top-ranked players, he graduated from the
            University of South Florida and built a career in business — including a
            partnership at Italkraft, the luxury kitchen brand known for craftsmanship.
          </p>
          <div className="mt-9">
            <ForwardLink href="/athlete/story">Learn more</ForwardLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
