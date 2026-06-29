import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { RsvpButton } from "@/components/work/RsvpButton";

const EVENTS = [
  {
    title: "The 3 Y's Clinic",
    date: "14 September 2026",
    location: "Boca Raton, Florida",
    note: "A full day on court working the method in person — limited to sixteen players.",
  },
  {
    title: "Mindset & Match Play Camp",
    date: "26–27 October 2026",
    location: "Rome, Italy",
    note: "Two days on the clay where it started, blending the mental game with live match play.",
  },
  {
    title: "An Evening with Yury",
    date: "3 December 2026",
    location: "London, United Kingdom",
    note: "A fireside conversation and Q&A — the story, the road, and your questions.",
  },
];

export function EventsSection() {
  return (
    <section id="events" className="scroll-mt-24 border-t border-line bg-bone-deep">
      <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-clay">Events</p>
          <h2
            className="mt-5 font-display font-medium leading-[1.05] tracking-[-0.015em] text-ink"
            style={{ fontSize: "var(--text-display)" }}
          >
            In the room, in person.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
            A handful of dates each year — clinics, camps, and conversations. Seats are few.
          </p>
        </Reveal>

        <RevealGroup className="mt-16 border-t border-line">
          {EVENTS.map((e) => (
            <RevealItem key={e.title}>
              <div className="grid grid-cols-1 gap-5 border-b border-line py-8 md:grid-cols-[10rem_1fr_auto] md:items-center md:gap-10">
                <span className="font-mono text-sm font-medium tracking-tight text-ink">
                  {e.date}
                </span>
                <div>
                  <h3 className="font-display text-xl font-medium text-ink md:text-2xl">
                    {e.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    <span className="text-mute">{e.location}</span> — {e.note}
                  </p>
                </div>
                <div className="md:justify-self-end">
                  <RsvpButton event={e.title} />
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <p className="mt-8 font-mono text-xs text-mute">
          Dates and locations are placeholders to be confirmed before launch.
        </p>
      </div>
    </section>
  );
}
