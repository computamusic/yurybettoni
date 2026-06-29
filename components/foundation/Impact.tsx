import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const GOLD = "#c2913b";

const STATS = [
  { value: "—", label: "Young people reached" },
  { value: "—", label: "Seasons funded" },
  { value: "—", label: "Communities" },
  { value: "2", label: "Nations", note: "Ethiopia & Tanzania" },
];

export function Impact() {
  return (
    <section id="impact" className="scroll-mt-24 bg-bone">
      <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow" style={{ color: GOLD }}>
            The impact
          </p>
          <h2
            className="mt-5 font-display font-medium leading-[1.08] tracking-[-0.015em] text-ink"
            style={{ fontSize: "var(--text-display)" }}
          >
            We&apos;ll count honestly, and show our work.
          </h2>
          <p className="mt-7 text-lg leading-relaxed text-ink-soft">
            Numbers earn trust only when they&apos;re real. Rather than publish
            figures we haven&apos;t verified, we&apos;re leaving these placeholders in
            place until they&apos;re confirmed — and we&apos;ll keep them current as the
            work grows.
          </p>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <RevealItem key={s.label} className="bg-bone p-8 md:p-10">
              <span
                className="block font-display font-medium leading-none tracking-[-0.02em] text-ink"
                style={{ fontSize: "var(--text-display)" }}
              >
                {s.value}
              </span>
              <span className="mt-4 block text-sm font-semibold uppercase tracking-[0.14em] text-ink-soft">
                {s.label}
              </span>
              {s.note && <span className="mt-2 block text-sm text-mute">{s.note}</span>}
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <p
            className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em]"
            style={{ color: GOLD }}
          >
            <span
              aria-hidden
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ background: GOLD }}
            />
            Impact figures to be confirmed before launch
          </p>
        </Reveal>
      </div>
    </section>
  );
}
