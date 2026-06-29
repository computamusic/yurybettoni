import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ACCOLADES, SPONSORS } from "@/lib/yury";

export function Accolades() {
  return (
    <section id="accolades" className="scroll-mt-24 border-t border-line bg-bone">
      <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-clay">On the record</p>
          <h2
            className="mt-5 font-display font-medium leading-[1.05] tracking-[-0.015em] text-ink"
            style={{ fontSize: "var(--text-display)" }}
          >
            Credentials, quietly kept.
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-px overflow-hidden border-t border-line sm:grid-cols-2 sm:border sm:border-line">
          {ACCOLADES.map((a) => (
            <RevealItem
              key={a.label}
              className="border-b border-line bg-bone px-1 py-6 sm:border-b sm:border-r sm:border-line/60 sm:p-7"
            >
              <h3 className="font-display text-xl leading-snug text-ink md:text-2xl">
                {a.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{a.note}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-14 border-t border-line pt-8">
          <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-mute">
            Sponsored by · partnered with
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
            {SPONSORS.map((name) => (
              <li
                key={name}
                className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-ink-soft"
              >
                {name}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
