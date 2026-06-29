import Link from "next/link";
import { Chevron } from "@/components/ui/Chevron";
import { Reveal } from "@/components/ui/Reveal";

// Dark feature band — stays dark in both themes.
export function CauseBand() {
  return (
    <section className="border-t border-light/15 bg-night text-light">
      <div className="mx-auto grid max-w-(--max-content) gap-12 px-5 py-24 md:grid-cols-12 md:px-8 md:py-32">
        <Reveal className="md:col-span-5">
          <p className="eyebrow text-clay">Wear the lion</p>
          <h2
            className="mt-5 font-display font-medium leading-[1.05] tracking-[-0.015em]"
            style={{ fontSize: "var(--text-display)" }}
          >
            Every piece carries the cause.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-6 md:col-start-7">
          <p className="text-lg leading-relaxed text-light/70">
            GoSymba is the cause-driven line — the lion mark Yury wears on tour, made
            for you. A share of every piece supports the{" "}
            <span className="text-light">Alessandra Bettoni Foundation</span>, funding
            the education and sport programmes that carry his mother&apos;s name forward
            in Ethiopia and Tanzania.
          </p>
          <p className="mt-6 text-light/70">
            It isn&apos;t merch for the sake of merch. It&apos;s a way to put the work on,
            and to give it forward.
          </p>
          <Link
            href="/foundation"
            className="group mt-9 inline-flex items-center gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-light"
          >
            <span className="underline-draw">Meet the Foundation</span>
            <Chevron />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
