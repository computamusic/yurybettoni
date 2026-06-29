import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Chevron } from "@/components/ui/Chevron";

export function AthleteHandoff() {
  return (
    <section className="border-t border-line bg-bone">
      <div className="mx-auto max-w-(--max-content) px-5 py-24 text-center md:px-8 md:py-28">
        <Reveal>
          <p className="eyebrow text-clay">Work with Yury</p>
          <h2
            className="mx-auto mt-5 max-w-2xl font-display font-medium leading-[1.06] tracking-[-0.015em] text-ink"
            style={{ fontSize: "var(--text-display)" }}
          >
            Train the way he teaches.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink-soft">
            The same method that carried him through the world&apos;s toughest rooms — made
            available to your game.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <Link
              href="/work"
              className="chev-host inline-flex items-center gap-3 bg-ink px-7 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-bone transition-colors hover:bg-clay"
            >
              Explore the work
              <Chevron />
            </Link>
            <Link
              href="/foundation"
              className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-ink underline-draw"
            >
              The Foundation
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
