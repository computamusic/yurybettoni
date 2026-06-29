import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const SHOTS = [
  { img: "/images/products/wristbands-woman.jpg", cap: "Match point" },
  { img: "/images/products/wristbands-man.jpg", cap: "Between serves" },
  { img: "/images/products/wristbands-bag.jpg", cap: "Packed for the open" },
];

export function Lookbook() {
  return (
    <section className="border-t border-light/10 bg-night text-light">
      <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-clay">On court</p>
          <h2
            className="mt-5 font-display font-medium leading-[1.04] tracking-[-0.015em]"
            style={{ fontSize: "var(--text-display)" }}
          >
            GoSymba, in play.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-light/70">
            Worn on the clay, where it belongs — the same lion, from the first ball to the
            last changeover.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-4 md:grid-cols-3">
          {SHOTS.map((s) => (
            <RevealItem key={s.img}>
              <figure className="group relative aspect-[3/4] overflow-hidden bg-night-soft">
                <Image
                  src={s.img}
                  alt={s.cap}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(0deg, rgba(13,10,6,0.6), transparent 45%)" }}
                />
                <figcaption className="absolute bottom-4 left-4 font-sans text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-light/90">
                  {s.cap}
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
