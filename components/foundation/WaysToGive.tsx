import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Chevron, ForwardLink } from "@/components/ui/Chevron";
import { DonateBlock } from "@/components/foundation/DonateBlock";

const GOLD = "#c2913b";

export function WaysToGive() {
  return (
    <section id="give" className="scroll-mt-36 bg-bone-deep">
      <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow" style={{ color: GOLD }}>
            Ways to give
          </p>
          <h2
            className="mt-5 font-display font-medium leading-[1.08] tracking-[-0.015em] text-ink"
            style={{ fontSize: "var(--text-display)" }}
          >
            Three ways to carry her legacy forward.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Donate — the primary act, gold-accented */}
          <Reveal>
            <div className="flex h-full flex-col">
              <span className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: GOLD }}>
                Donate
              </span>
              <h3 className="mt-4 font-display text-2xl font-medium text-ink">
                Fund a season directly
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
                Your gift goes to courts, coaching, and school support for young
                players in Ethiopia and Tanzania. Choose an amount below.
              </p>
              <div className="mt-7">
                <DonateBlock />
              </div>
            </div>
          </Reveal>

          {/* The two secondary ways */}
          <RevealGroup className="flex flex-col gap-px overflow-hidden border border-line bg-line">
            <RevealItem className="bg-bone-deep p-8 md:p-9">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-mute">
                Attend an event
              </span>
              <h3 className="mt-4 font-display text-2xl font-medium text-ink">
                Show up in person
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                Clinics, exhibitions, and benefit evenings throughout the year. Every
                ticket helps keep a door open.
              </p>
              <p className="mt-5 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-mute">
                Calendar coming soon
              </p>
            </RevealItem>

            <RevealItem className="bg-bone-deep p-8 md:p-9">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-mute">
                Shop that gives
              </span>
              <h3 className="mt-4 font-display text-2xl font-medium text-ink">
                Wear it, fund it
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                A share of every order in the shop is routed to the foundation. Good
                kit, good cause — no compromise on either.
              </p>
              <div className="mt-5">
                <ForwardLink href="/shop">Visit the shop</ForwardLink>
              </div>
            </RevealItem>
          </RevealGroup>
        </div>

        {/* Governance / transparency note */}
        <Reveal delay={0.1}>
          <div className="mt-16 border-t border-line pt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mute">
              Governance &amp; transparency
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-soft">
              The Alessandra Bettoni Foundation is being established with independent
              oversight. Its board, legal registration, and charitable status are
              being finalized and will be published here before launch, alongside
              annual reporting on how funds are raised and spent. Until then, the
              giving flows on this page are demonstrations only.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
