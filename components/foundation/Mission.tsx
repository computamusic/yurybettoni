import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const GOLD = "#c2913b";

const FUNDING = [
  {
    name: "The Y-System",
    body: "A revolutionary visual tennis and training method that sharpens biomechanics and cognitive performance. A share of every engagement is committed to the Foundation — so the work that builds players also builds courts.",
  },
  {
    name: "GoSymba",
    body: "A socially driven streetwear line. A portion of every order is routed directly to youth programs in Ethiopia and Tanzania.",
  },
  {
    name: "A sustainable model",
    body: "Sport, innovation, and design working as one ecosystem — built to expand its impact year on year, rather than depend on a single campaign or a single good month.",
  },
];

const PROGRAMS = [
  {
    name: "Basic needs",
    body: "Food, clean water, school supplies, and clothing — the ground a child stands on before anything else becomes possible.",
  },
  {
    name: "Education",
    body: "Tuition assistance and learning materials, so school stays within reach and a child has a path to a future.",
  },
  {
    name: "Tennis outreach",
    body: "Coaching, courts, and equipment — the structure of a real season. Discipline learned with a racquet travels into every other room of a life.",
  },
  {
    name: "Community partnerships",
    body: "Working hand in hand with local organisations already trusted on the ground, so support reaches the children who need it most.",
  },
];

export function Mission() {
  return (
    <section id="mission" className="scroll-mt-36 bg-bone-deep">
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
            The Alessandra Bettoni Foundation supports underserved young people in
            Ethiopia and Tanzania — the country where Yury was born and the one
            that shaped him most. It begins with what a child needs to get through
            the day, builds in the schooling that gives them a future, and adds the
            tennis that teaches discipline along the way: more than a sport — a
            reason to stay in school, a community that expects something of them,
            and a path that does not close behind them.
          </p>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
          {PROGRAMS.map((p) => (
            <RevealItem key={p.name} className="bg-bone-deep p-8 md:p-10">
              <h3 className="font-display text-2xl font-medium text-ink">{p.name}</h3>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">{p.body}</p>
            </RevealItem>
          ))}
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
              Yury&apos;s ventures exist to carry the mission, not the reverse. A
              committed share of what each one earns is routed to the programs —
              steady, transparent, and renewing season after season, rather than
              riding on a single campaign or a single good year.
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
