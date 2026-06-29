import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const GOLD = "#c2913b";

const FUNDING = [
  {
    name: "The Y-System",
    body: "His coaching method and player development programs. A share of every engagement is committed to the foundation — so the work that builds champions also builds courts.",
  },
  {
    name: "GoSymba",
    body: "The travel-and-gear venture. Curated kit for the road, with a portion of proceeds routed directly to youth programs in Ethiopia and Tanzania.",
  },
  {
    name: "Curated experiences",
    body: "Clinics, retreats, and one-of-one days with Yury. Premium by design, purposeful by intent — the margin keeps seasons funded and doors open.",
  },
];

export function Mission() {
  return (
    <section id="mission" className="scroll-mt-24 bg-bone-deep">
      <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow" style={{ color: GOLD }}>
            The mission
          </p>
          <h2
            className="mt-5 font-display font-medium leading-[1.08] tracking-[-0.015em] text-ink"
            style={{ fontSize: "var(--text-display)" }}
          >
            A door that opens — and stays open.
          </h2>
          <p className="mt-7 text-lg leading-relaxed text-ink-soft">
            The Alessandra Bettoni Foundation serves young people in Ethiopia and
            Tanzania, the two countries that raised him. The model is simple and
            deliberate: pair tennis with education, and you give a child more than a
            sport — you give them a reason to stay in school, a community that
            expects something of them, and a path that does not close behind them.
          </p>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
          <RevealItem className="bg-bone-deep p-8 md:p-10">
            <h3 className="font-display text-2xl font-medium text-ink">Tennis</h3>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Coaching, courts, and equipment — the structure of a real season.
              Discipline learned with a racquet travels into every other room of a
              life.
            </p>
          </RevealItem>
          <RevealItem className="bg-bone-deep p-8 md:p-10">
            <h3 className="font-display text-2xl font-medium text-ink">Education</h3>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              School support tied to the program, so that progress on the court is
              matched by progress off it. The two reinforce each other; neither
              stands alone.
            </p>
          </RevealItem>
        </RevealGroup>
      </div>

      {/* Dark beat — savanna at golden hour, faint. How the giving sustains itself. */}
      <div className="relative overflow-hidden bg-night text-light">
        <Image
          src="/images/savanna-light.png"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(13,10,6,0.82), rgba(13,10,6,0.9))" }}
        />
        <div className="relative mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-28">
          <Reveal className="max-w-2xl">
            <p className="eyebrow" style={{ color: GOLD }}>
              How it&apos;s funded
            </p>
            <h2
              className="mt-5 font-display font-medium leading-[1.1] tracking-[-0.01em] text-light"
              style={{ fontSize: "var(--text-heading)" }}
            >
              Charity that depends on a good month is fragile. This doesn&apos;t.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-light/75">
              Yury&apos;s ventures are built to carry the mission, not the other way
              around. A committed share of what they earn funds the programs — so
              giving here is steady, transparent, and sustainable, rather than
              dependent on any single campaign.
            </p>
          </Reveal>

          <RevealGroup className="mt-14 grid gap-px overflow-hidden border border-light/15 bg-light/15 md:grid-cols-3">
            {FUNDING.map((f) => (
              <RevealItem key={f.name} className="bg-night p-8 md:p-9">
                <span
                  className="text-xs font-semibold uppercase tracking-[0.18em]"
                  style={{ color: GOLD }}
                >
                  {f.name}
                </span>
                <p className="mt-4 text-base leading-relaxed text-light/70">{f.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <p className="mt-10 max-w-xl text-sm leading-relaxed text-light/60">
            The exact contribution model and per-venture commitments are being
            finalized and will be published in full before launch.
          </p>
        </div>
      </div>
    </section>
  );
}
