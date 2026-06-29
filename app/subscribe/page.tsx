import type { Metadata } from "next";
import { SubscribeBand } from "@/components/home/SubscribeBand";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Subscribe — Yury Bettoni",
  description:
    "Stay in Yury's world — the work, the legacy, and the occasional drop, straight to your inbox.",
};

const GETS = [
  { k: "The work", v: "New courses, coaching openings, and method breakdowns before anyone else." },
  { k: "The legacy", v: "Stories and milestones from the Alessandra Bettoni Foundation." },
  { k: "The drops", v: "First access to GoSymba releases and live events." },
];

export default function SubscribePage() {
  return (
    <>
      <section className="bg-bone pt-32">
        <div className="mx-auto max-w-(--max-content) px-5 pb-8 md:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-clay">Join the list</p>
            <h1
              className="mt-5 font-display font-medium leading-[1.04] tracking-[-0.02em] text-ink"
              style={{ fontSize: "var(--text-display)" }}
            >
              Come along for the next chapter.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
              One considered note now and then — never noise. Here&apos;s what lands in your
              inbox.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
            {GETS.map((g) => (
              <div key={g.k} className="bg-bone p-8">
                <p className="eyebrow text-clay">{g.k}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{g.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SubscribeBand />
    </>
  );
}
