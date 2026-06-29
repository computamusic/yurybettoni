import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const OUTLETS = ["Tennis-Prose", "Beryll Journal", "Sweat It Out", "USPTR", "ITF"];

export function PressWall() {
  return (
    <section className="border-t border-line bg-bone">
      <div className="mx-auto max-w-(--max-content) px-5 py-20 md:px-8 md:py-24">
        <Reveal>
          <p className="eyebrow text-clay">From the world</p>
        </Reveal>
        <RevealGroup className="mt-10 flex flex-wrap items-center gap-x-12 gap-y-7">
          {OUTLETS.map((o) => (
            <RevealItem key={o}>
              <span className="font-display text-xl text-mute transition-colors hover:text-ink md:text-2xl">
                {o}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
