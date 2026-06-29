import { Reveal } from "@/components/ui/Reveal";
import { PhotoGallery } from "@/components/ui/PhotoGallery";
import { gallery } from "@/lib/galleries";

const GOLD = "#c2913b";

// Server component — pulls the harvested Foundation photo collection at build
// time and hands it to the shared editorial gallery + lightbox.
export function FoundationGallery() {
  const photos = gallery("foundation").map((src) => ({
    src,
    cap: "Ethiopia & Tanzania",
  }));

  if (photos.length === 0) return null;

  return (
    <section
      id="gallery"
      className="scroll-mt-24 border-t border-line bg-bone"
    >
      <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow" style={{ color: GOLD }}>
            The work, in pictures
          </p>
          <h2
            className="mt-5 font-display font-medium leading-[1.08] tracking-[-0.015em] text-ink"
            style={{ fontSize: "var(--text-display)" }}
          >
            On the ground.
          </h2>
          <p className="mt-7 text-lg leading-relaxed text-ink-soft">
            Moments from the courts and classrooms the Foundation supports across
            Ethiopia and Tanzania — the children, the coaches, the days.
          </p>
        </Reveal>

        <div className="mt-16">
          <PhotoGallery photos={photos} accent={GOLD} />
        </div>
      </div>
    </section>
  );
}
