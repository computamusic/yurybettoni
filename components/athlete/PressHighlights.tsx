import { Chevron, ForwardLink } from "@/components/ui/Chevron";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { PRESS, type PressItem } from "@/lib/press";

// A hand-picked editorial cross-section: a couple of marquee video interviews
// plus the strongest written features (Miami Herald, Tennis-Prose Biofile,
// Dunlop sponsorship, the ELEVATE design profile).
const FEATURED_TITLES = [
  "Sport, Style, and a Life of Purpose",
  "From the Tour to the Trenches: Yury Bettoni Opens Up",
  "Bettoni’s Leap into Luxury Design",
  "From Ethiopia to Federer: Yury Bettoni’s Rise",
  "Power Meets Precision: Dunlop Teams Up with Yury Bettoni",
  "Yury Bettoni’s Journey into Luxury Design",
];

// Derive a tidy, readable source name from the canonical href.
const SOURCE_LABELS: { match: string; label: string }[] = [
  { match: "youtube.com", label: "YouTube" },
  { match: "miamiherald.com", label: "Miami Herald" },
  { match: "tennis-prose.com", label: "Tennis-Prose" },
  { match: "dropbox.com", label: "Dunlop Sports" },
  { match: "issuu.com", label: "ELEVATE by Italkraft" },
];

function sourceFor(item: PressItem): string {
  const href = item.href ?? "";
  const hit = SOURCE_LABELS.find((s) => href.includes(s.match));
  if (hit) return hit.label;
  return item.kind === "video" ? "Video feature" : "Feature";
}

const featured = FEATURED_TITLES.map((t) => PRESS.find((p) => p.title === t)).filter(
  (p): p is PressItem => Boolean(p && p.href),
);

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "long", year: "numeric" });

export function PressHighlights() {
  return (
    <section id="press" className="scroll-mt-24 border-t border-line bg-bone">
      <div className="mx-auto max-w-(--max-content) px-5 py-24 md:px-8 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-clay">Press &amp; Media</p>
          <h2
            className="mt-5 font-display font-medium leading-[1.05] tracking-[-0.015em] text-ink"
            style={{ fontSize: "var(--text-display)" }}
          >
            In his own words, and others’.
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 border-t border-line">
          {featured.map((item) => (
            <RevealItem key={item.title}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-6 border-b border-line py-7 transition-colors hover:bg-bone-deep"
              >
                <div className="max-w-3xl">
                  <p className="font-mono text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-mute">
                    {sourceFor(item)} · {item.kind === "video" ? "Interview" : "Article"} ·{" "}
                    {fmtDate(item.date)}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-medium leading-snug text-ink transition-colors group-hover:text-clay md:text-2xl">
                    {item.title}
                  </h3>
                </div>
                <span className="mt-2 shrink-0 text-ink">
                  <Chevron />
                </span>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-10">
          <ForwardLink href="/press">See all press</ForwardLink>
        </Reveal>
      </div>
    </section>
  );
}
