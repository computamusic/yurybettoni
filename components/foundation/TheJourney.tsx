import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { BIO } from "@/lib/yury";

const GOLD = "#c2913b";

// The African childhood that gave the Foundation its meaning — born in
// Ethiopia, formed in Tanzania, settled in Italy, rendered as a quiet
// connected sequence (not a literal map).
export function TheJourney() {
  const stops = BIO.journey;

  return (
    <section id="journey" className="scroll-mt-36 border-t border-line bg-bone">
      <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow" style={{ color: GOLD }}>
            A childhood across Africa
          </p>
          <h2
            className="mt-5 font-display font-medium leading-[1.08] tracking-[-0.015em] text-ink"
            style={{ fontSize: "var(--text-display)" }}
          >
            A childhood carried across a continent.
          </h2>
          <p className="mt-7 text-lg leading-relaxed text-ink-soft">
            Born in Addis Ababa in {BIO.bornYear}, Yury spent his boyhood moving
            through several African countries as his father&apos;s work took the
            family from place to place. Tanzania shaped him most — the formative
            chapter that left him with the values the Foundation now runs on —
            before the road led on to Italy.
          </p>
        </Reveal>

        {/* The connected sequence — mono labels, hairline connectors, gold nodes. */}
        <RevealGroup
          gap={0.07}
          className="mt-16 flex flex-col gap-y-10 md:flex-row md:flex-nowrap md:items-start md:gap-y-0"
        >
          {stops.map((place, i) => {
            const last = i === stops.length - 1;
            return (
              <RevealItem
                key={place}
                className="relative flex items-center gap-5 md:flex-1 md:flex-col md:items-start md:gap-0"
              >
                {/* Node + connector row */}
                <div className="flex shrink-0 items-center md:w-full">
                  <span
                    aria-hidden
                    className="relative z-10 h-2.5 w-2.5 shrink-0 rounded-full ring-4 ring-bone"
                    style={{ background: last ? GOLD : "var(--color-mute)" }}
                  />
                  {!last && (
                    <span
                      aria-hidden
                      className="ml-3 hidden h-px flex-1 md:block"
                      style={{
                        background:
                          "linear-gradient(90deg, var(--color-line), rgba(194,145,59,0.5))",
                      }}
                    />
                  )}
                </div>

                {/* Label block */}
                <div className="md:mt-5">
                  <span className="block font-mono text-[0.7rem] uppercase tracking-[0.22em] text-mute">
                    {i === 0 ? "Born" : last ? "Home" : "Formative"}
                  </span>
                  <span
                    className="mt-2 block font-display text-xl font-medium leading-tight tracking-[-0.01em]"
                    style={{ color: last ? GOLD : "var(--color-ink)" }}
                  >
                    {place}
                  </span>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal delay={0.1}>
          <p className="mt-14 max-w-xl border-l-2 pl-6 font-display text-lg italic leading-relaxed text-ink-soft" style={{ borderColor: GOLD }}>
            It is the road behind the Foundation — and the reason its door is the
            kind that opens, and stays open.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
