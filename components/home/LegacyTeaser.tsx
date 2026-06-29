import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Chevron } from "@/components/ui/Chevron";

// The emotional center — the single warm, dark moment in a light system.
export function LegacyTeaser() {
  return (
    <section className="relative overflow-hidden bg-night text-light">
      <div className="mx-auto grid max-w-(--max-content) items-stretch gap-0 lg:grid-cols-2">
        <Reveal className="relative min-h-[22rem] lg:min-h-[40rem]">
          <Image
            src="/images/legacy-africa.jpg"
            alt="The Bettoni family in Africa"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, transparent 40%, rgba(23,21,15,0.55) 100%), linear-gradient(90deg, transparent 60%, rgba(23,21,15,0.4) 100%)",
            }}
          />
        </Reveal>

        <Reveal delay={0.1} className="relative flex items-center px-5 py-20 md:px-12 lg:py-0">
          <Image
            src="/images/savanna-light.png"
            alt=""
            aria-hidden
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover opacity-20"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(23,21,15,0.7), rgba(23,21,15,0.82))" }}
          />
          <div className="relative">
            <p className="eyebrow text-clay">The legacy — Alessandra Bettoni Foundation</p>
            <h2 className="mt-6 font-display text-4xl font-normal leading-[1.12] tracking-[-0.01em] md:text-6xl">
              She gave me the game.
              <span className="mt-1 block italic text-light/70">We give it forward.</span>
            </h2>
            <p className="mt-7 max-w-md font-display text-lg leading-relaxed text-light/75">
              In his mother&apos;s memory, Yury stands with young people in Ethiopia and
              Tanzania — meeting them with basic needs, education, and tennis, a door that
              opens and stays open. Africa, he says, teaches the real, basic values of life.
            </p>
            <Link
              href="/foundation"
              className="chev-host mt-9 inline-flex items-center gap-3 border border-light/30 px-7 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-light transition-colors hover:bg-light hover:text-night"
            >
              Honor her legacy
              <Chevron />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
