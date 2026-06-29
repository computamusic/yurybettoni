import Link from "next/link";
import { Chevron } from "@/components/ui/Chevron";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const NOTES = [
  {
    head: "Meet Symba",
    body: "The lion on the chest has a name. Symba is the spirit of the line — courage, calm, the quiet confidence of someone who has done the work.",
  },
  {
    head: "A cause, not merch",
    body: "GoSymba is the cause-driven line. It isn't apparel for its own sake — it's the work, made wearable, and given forward.",
  },
  {
    head: "Every piece gives back",
    body: "A share of every piece supports the Alessandra Bettoni Foundation, named for Yury's mother and the values she taught him.",
  },
];

// Warm editorial band on the shop's bone canvas.
export function BrandStory() {
  return (
    <section className="border-t border-line bg-bone-deep">
      <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-clay">The lion has a name</p>
          <h2
            className="mt-5 font-display font-medium leading-[1.05] tracking-[-0.015em] text-ink"
            style={{ fontSize: "var(--text-display)" }}
          >
            GoSymba.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
            The mark Yury wears on tour, made for you — and built to carry his
            mother&apos;s name forward with every order.
          </p>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-3">
          {NOTES.map((note, i) => (
            <RevealItem key={note.head}>
              <div className="flex h-full flex-col border-t border-line pt-6">
                <span className="font-mono text-xs font-semibold tracking-[0.16em] text-clay">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl font-medium text-ink">
                  {note.head}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{note.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <Link
            href="/foundation"
            className="group mt-14 inline-flex items-center gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-ink"
          >
            <span className="underline-draw">About the Foundation</span>
            <Chevron />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
