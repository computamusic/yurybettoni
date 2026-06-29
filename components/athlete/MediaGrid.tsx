import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const MEDIA = [
  { img: "/images/archive-federer.jpg", cap: "With fellow players, late ’90s", span: "md:col-span-2 md:row-span-2", ratio: "aspect-[3/2]" },
  { img: "/images/hero-3.jpg", cap: "Miami Open", span: "", ratio: "aspect-[4/5]" },
  { img: "/images/legacy-africa.jpg", cap: "Africa, from the archive", span: "", ratio: "aspect-[4/5]" },
  { img: "/images/about-yury.jpg", cap: "Forehand, Miami", span: "", ratio: "aspect-[4/5]" },
  { img: "/images/hero-2.jpg", cap: "On the clay, Rome", span: "", ratio: "aspect-[4/5]" },
];

export function MediaGrid() {
  return (
    <section id="media" className="scroll-mt-24 border-t border-line bg-bone">
      <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-clay">Media</p>
          <h2
            className="mt-5 font-display font-medium leading-[1.05] tracking-[-0.015em] text-ink"
            style={{ fontSize: "var(--text-display)" }}
          >
            A life in frames.
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid auto-rows-[1fr] grid-cols-2 gap-4 md:grid-cols-4">
          {MEDIA.map((m) => (
            <RevealItem key={m.img} className={m.span}>
              <figure className="group relative h-full">
                <div className={`relative ${m.ratio} h-full overflow-hidden bg-bone-deep`}>
                  <Image
                    src={m.img}
                    alt={m.cap}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="graded object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <figcaption className="absolute bottom-3 left-3 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-light/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {m.cap}
                  </figcaption>
                </div>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
