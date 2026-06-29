import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { QUOTES } from "@/lib/yury";

const GOLD = "#c2913b";

// A warm feature band — Yury on what Africa taught him — over a faint
// golden-hour savanna, with a soft scrim so the serif stays legible.
export function AfricaQuote() {
  const q = QUOTES.africa;

  return (
    <section className="relative overflow-hidden bg-night text-light">
      <Image
        src="/images/savanna-light.png"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="graded object-cover opacity-30"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(13,10,6,0.78) 0%, rgba(13,10,6,0.6) 50%, rgba(13,10,6,0.85) 100%)",
        }}
      />
      <div className="relative mx-auto max-w-(--max-content) px-5 py-28 md:px-8 md:py-36">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow" style={{ color: GOLD }}>
            What Africa taught him
          </p>
          <blockquote
            className="mt-7 font-display font-medium leading-[1.16] tracking-[-0.01em] text-light"
            style={{ fontSize: "var(--text-display)" }}
          >
            &ldquo;{q.text}&rdquo;
          </blockquote>
          {q.attribution && (
            <figcaption className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-light/70">
              <span style={{ color: GOLD }}>—</span> {q.attribution}
            </figcaption>
          )}
        </Reveal>
      </div>
    </section>
  );
}
