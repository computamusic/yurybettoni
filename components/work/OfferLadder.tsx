import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Chevron } from "@/components/ui/Chevron";

const TIERS = [
  {
    n: "01",
    label: "Newsletter",
    action: "Free",
    href: "#",
    note: "Start here. The work, in your inbox.",
    img: "/images/press/biofile.jpg",
    alt: "Yury Bettoni with Nick Bollettieri",
  },
  {
    n: "02",
    label: "Courses",
    action: "Buy",
    href: "#courses",
    note: "The method, on demand.",
    img: "/images/press/tvmoda.jpg",
    alt: "Yury Bettoni training on court",
  },
  {
    n: "03",
    label: "Coaching",
    action: "Inquire",
    href: "#coaching",
    note: "Time on court with Yury.",
    img: "/images/archive-volkl.jpg",
    alt: "Yury Bettoni striking a backhand",
  },
  {
    n: "04",
    label: "Speaking",
    action: "Inquire",
    href: "#speaking",
    note: "His story, on your stage.",
    img: "/images/archive-academy.jpg",
    alt: "From the Bettoni archive, the Bollettieri years",
  },
  {
    n: "05",
    label: "Events",
    action: "Attend",
    href: "#events",
    note: "In the room, in person.",
    img: "/images/archive-champions.jpg",
    alt: "In the players' box with champions",
  },
];

export function OfferLadder() {
  return (
    <section className="scroll-mt-24 border-t border-line bg-bone">
      <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-clay">The ladder</p>
          <h2
            className="mt-5 font-display font-medium leading-[1.05] tracking-[-0.015em] text-ink"
            style={{ fontSize: "var(--text-display)" }}
          >
            Five ways in — from a free note to a day in the room.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
            No pressure to climb. Take the step that fits where you are — each one stands on its own.
          </p>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-5">
          {TIERS.map((t) => (
            <RevealItem key={t.n} className="h-full">
              <a
                href={t.href}
                className="group relative flex h-full min-h-[20rem] flex-col justify-between overflow-hidden bg-bone-deep p-6 md:min-h-[26rem] md:p-7"
              >
                <Image
                  src={t.img}
                  alt={t.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 20vw"
                  className="graded object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-90"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(12,10,6,0.6) 0%, rgba(12,10,6,0.1) 28%, rgba(12,10,6,0.35) 60%, rgba(12,10,6,0.94) 100%)",
                  }}
                />

                <div className="relative flex items-start justify-between">
                  <span className="font-mono text-xs font-semibold tracking-[0.16em] text-light/70">
                    {t.n}
                  </span>
                  <span className="text-light/55 transition-colors group-hover:text-light">
                    <Chevron />
                  </span>
                </div>
                <div className="relative">
                  <p className="eyebrow text-clay">{t.action}</p>
                  <h3 className="mt-2 font-display text-2xl font-medium text-light">{t.label}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-light/75">{t.note}</p>
                </div>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
