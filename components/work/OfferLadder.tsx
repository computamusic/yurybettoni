import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Chevron } from "@/components/ui/Chevron";

const TIERS = [
  { n: "01", label: "Newsletter", action: "Free", href: "#", note: "Start here. The work, in your inbox." },
  { n: "02", label: "Courses", action: "Buy", href: "#courses", note: "The method, on demand." },
  { n: "03", label: "Coaching", action: "Inquire", href: "#coaching", note: "Time on court with Yury." },
  { n: "04", label: "Speaking", action: "Inquire", href: "#speaking", note: "His story, on your stage." },
  { n: "05", label: "Events", action: "Attend", href: "#events", note: "In the room, in person." },
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
                className="group flex h-full flex-col justify-between gap-10 bg-bone p-6 transition-colors hover:bg-bone-deep md:p-7"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs font-semibold tracking-[0.16em] text-mute">
                    {t.n}
                  </span>
                  <span className="text-ink/40 transition-colors group-hover:text-ink">
                    <Chevron />
                  </span>
                </div>
                <div>
                  <p className="eyebrow text-clay">{t.action}</p>
                  <h3 className="mt-2 font-display text-2xl font-medium text-ink">{t.label}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{t.note}</p>
                </div>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
