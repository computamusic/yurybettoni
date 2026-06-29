import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { TIMELINE } from "@/lib/yury";

export function CareerTimeline() {
  return (
    <section id="timeline" className="scroll-mt-24 border-t border-line bg-bone-deep">
      <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-clay">Career timeline</p>
          <h2
            className="mt-5 font-display font-medium leading-[1.05] tracking-[-0.015em] text-ink"
            style={{ fontSize: "var(--text-display)" }}
          >
            The receipts, in order.
          </h2>
        </Reveal>

        <RevealGroup className="mt-16 border-t border-line">
          {TIMELINE.map((e) => (
            <RevealItem key={e.year + e.title}>
              <div className="group grid grid-cols-1 gap-2 border-b border-line py-7 transition-colors hover:bg-bone md:grid-cols-[10rem_1fr] md:gap-8 md:py-8">
                <div className="flex items-center gap-3">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${e.marker ? "bg-clay" : "bg-ink/30"}`}
                    aria-hidden
                  />
                  <span className="font-mono text-sm font-medium tracking-tight text-ink">
                    {e.year}
                  </span>
                </div>
                <div className="md:flex md:items-baseline md:justify-between md:gap-10">
                  <h3 className="font-display text-xl font-medium text-ink md:text-2xl">
                    {e.title}
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-ink-soft md:mt-0 md:text-right">
                    {e.note}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <p className="mt-8 font-mono text-xs text-mute">
          Dates reflect the public record; final figures to be confirmed before launch.
        </p>
      </div>
    </section>
  );
}
