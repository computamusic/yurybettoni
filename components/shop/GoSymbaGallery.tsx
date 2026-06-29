import { Reveal } from "@/components/ui/Reveal";
import { PhotoGallery, type Photo } from "@/components/ui/PhotoGallery";
import { gallery } from "@/lib/galleries";

// Server Component — reads the GoSymba lifestyle/studio collection at build time
// and hands it to the shared masonry + lightbox gallery.
export function GoSymbaGallery() {
  const photos: Photo[] = gallery("gosymba").map((src) => ({ src, cap: "GoSymba" }));

  if (photos.length === 0) return null;

  return (
    <section
      id="in-the-wild"
      className="scroll-mt-24 border-t border-line bg-bone"
    >
      <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-clay">In the wild</p>
          <h2
            className="mt-5 font-display font-medium leading-[1.05] tracking-[-0.015em] text-ink"
            style={{ fontSize: "var(--text-display)" }}
          >
            GoSymba, worn.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
            Off the court and into the day — the lion, carried the way it&apos;s
            meant to be.
          </p>
        </Reveal>

        <div className="mt-14">
          <PhotoGallery photos={photos} />
        </div>
      </div>
    </section>
  );
}
