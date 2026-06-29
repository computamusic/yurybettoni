import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { QUOTES } from "@/lib/yury";

export function FullCircleQuote() {
  const q = QUOTES.fullCircle;
  return (
    <section className="relative overflow-hidden bg-night">
      <Image
        src="/images/clay-texture.png"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(13,10,6,0.85) 0%, rgba(13,10,6,0.7) 50%, rgba(13,10,6,0.9) 100%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-(--max-content) px-5 py-28 md:px-8 md:py-40">
        <Reveal className="mx-auto max-w-4xl text-center">
          <span className="font-display text-6xl leading-none text-clay md:text-8xl" aria-hidden>
            &ldquo;
          </span>
          <blockquote className="mt-2">
            <p className="font-display text-2xl font-medium italic leading-[1.25] tracking-[-0.01em] text-light md:text-4xl">
              {q.text}
            </p>
            <footer className="mt-8">
              <p className="eyebrow text-clay">{q.attribution}</p>
              {q.context && (
                <p className="mt-3 text-sm leading-relaxed text-light/60">{q.context}</p>
              )}
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
