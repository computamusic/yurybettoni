import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { InquiryForm } from "@/components/ui/InquiryForm";

const INCLUDED = [
  { title: "Private", body: "One-on-one time on court. The fastest way to rebuild a stroke from the ground up." },
  { title: "Group", body: "Train with two or three players at your level — shared drills, individual notes." },
  { title: "Online", body: "Live remote sessions for the parts of the game that don't need a court." },
  { title: "Video analysis", body: "Send your footage; receive a frame-by-frame breakdown through the 3 Y's." },
];

export function CoachingSection() {
  return (
    <section id="coaching" className="scroll-mt-36 border-t border-line bg-bone">
      <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow text-clay">Coaching</p>
              <h2
                className="mt-5 font-display font-medium leading-[1.05] tracking-[-0.015em] text-ink"
                style={{ fontSize: "var(--text-display)" }}
              >
                Time with Yury, directly.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
                Four ways to work together — from court time to a frame-by-frame look at your
                game. Tell him where you are, and he&apos;ll point you to the right one.
              </p>
            </Reveal>

            <RevealGroup className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
              {INCLUDED.map((it) => (
                <RevealItem key={it.title} className="h-full">
                  <div className="flex h-full flex-col gap-3 bg-bone p-6 md:p-7">
                    <h3 className="font-display text-xl font-medium text-ink">{it.title}</h3>
                    <p className="text-sm leading-relaxed text-ink-soft">{it.body}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <Reveal delay={0.1} className="lg:pt-2">
            <InquiryForm
              intents={[
                { value: "private", label: "Private" },
                { value: "group", label: "Group" },
                { value: "online", label: "Online" },
                { value: "video", label: "Video analysis" },
              ]}
              submitLabel="Request coaching"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
