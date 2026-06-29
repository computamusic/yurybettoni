import { AmbientVideo } from "@/components/ui/AmbientVideo";
import { Reveal } from "@/components/ui/Reveal";
import { QUOTES } from "@/lib/yury";

const GOLD = "#c2913b";

// Full-bleed cinematic band — the original 4K Foundation film as a quiet,
// looping backdrop, with a serif line and Yury's words on Africa overlaid.
export function FoundationFilm() {
  const q = QUOTES.africa;

  return (
    <section
      id="film"
      className="relative min-h-[70svh] scroll-mt-36 overflow-hidden bg-night"
    >
      <AmbientVideo
        src="/video/foundation.mp4"
        poster="/video/foundation-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(12,10,6,0.55) 0%, rgba(12,10,6,0.45) 45%, rgba(12,10,6,0.85) 100%)",
        }}
      />
      <div className="relative mx-auto flex min-h-[70svh] max-w-(--max-content) items-end px-5 py-24 md:px-8 md:py-32">
        <Reveal className="max-w-2xl text-light">
          <p className="eyebrow" style={{ color: GOLD }}>
            The Alessandra Bettoni Foundation
          </p>
          <p
            className="mt-6 font-display font-medium leading-[1.12] tracking-[-0.015em] text-light"
            style={{ fontSize: "var(--text-display)" }}
          >
            A mother&apos;s gift, given forward.
          </p>
          <blockquote className="mt-7 max-w-xl font-display text-lg leading-[1.7] text-light/80">
            &ldquo;{q.text}&rdquo;
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
