// Mocked course catalogue for the Work pillar.
// All figures and curricula are placeholders to be confirmed before launch.

export type CourseLevel = "Foundations" | "Intermediate" | "Advanced";

export type CurriculumModule = {
  n: number;
  title: string;
  detail: string;
};

export type Course = {
  slug: string;
  title: string;
  summary: string;
  level: CourseLevel;
  price: number;
  durationLabel: string;
  outcomes: string[];
  curriculum: CurriculumModule[];
  image: string;
};

export const COURSES: Course[] = [
  {
    slug: "the-3-ys-foundations",
    title: "The 3 Y's Foundations",
    summary:
      "The method that built a career, taught from the ground up. Mobility into stability into velocity — the sequence every great shot shares.",
    level: "Foundations",
    price: 149,
    durationLabel: "6 modules · ~4 hours",
    outcomes: [
      "Read any incoming ball and arrive in balance before it dictates to you.",
      "Build the stable base that turns motion into a repeatable, trusted strike.",
      "Release power at the exact moment it counts — and not a beat before.",
      "Self-diagnose a breaking-down stroke using the three-force checklist.",
    ],
    curriculum: [
      { n: 1, title: "Why three forces", detail: "The thinking behind the Y-System and how to feel each force in isolation." },
      { n: 2, title: "Y1 — Mobility", detail: "First-step quickness, split-step timing, and recovering to the middle in balance." },
      { n: 3, title: "Y2 — Stability", detail: "Loading the base, the kinetic chain, and holding your ground under pace." },
      { n: 4, title: "Y3 — Velocity", detail: "Sequencing the release so racket-head speed peaks at contact." },
      { n: 5, title: "Linking the chain", detail: "Drills that blend all three forces into one continuous motion." },
      { n: 6, title: "Your practice plan", detail: "A four-week block you can run on any court, alone or with a partner." },
    ],
    image: "/images/stroke-poster.jpg",
  },
  {
    slug: "serve-and-movement",
    title: "Serve & Movement",
    summary:
      "The two shots that decide the most points. A repeatable serve you can trust on a second ball, and the footwork that keeps you a step ahead.",
    level: "Intermediate",
    price: 129,
    durationLabel: "5 modules · ~3.5 hours",
    outcomes: [
      "Groove a service motion that holds up under pressure on the second serve.",
      "Add free points with placement and disguise rather than raw effort.",
      "Move with intention — split, load, recover — instead of chasing the ball.",
      "Defend the corners and turn defence back into offence.",
    ],
    curriculum: [
      { n: 1, title: "The trusted toss", detail: "A consistent toss and rhythm that take variance out of the serve." },
      { n: 2, title: "Building the serve", detail: "Trophy position, leg drive, and pronation without thinking about pronation." },
      { n: 3, title: "Placement & disguise", detail: "Serving to spots, mixing spin, and hiding your intention." },
      { n: 4, title: "Movement patterns", detail: "Split-step timing, the first three steps, and efficient recovery." },
      { n: 5, title: "Defence into offence", detail: "Reading the court so a stretch return becomes your next opening." },
    ],
    image: "/images/hero-3.jpg",
  },
  {
    slug: "the-mental-game",
    title: "The Mental Game",
    summary:
      "The half of tennis no one drills. Routines, breathing, and the inner posture that lets you compete at your highest level — not someone else's.",
    level: "Intermediate",
    price: 119,
    durationLabel: "5 modules · ~3 hours",
    outcomes: [
      "Hold a between-points routine that steadies you on the biggest points.",
      "Reset after errors instead of carrying them into the next game.",
      "Stop comparing — and start playing to your own ceiling.",
      "Walk on court with a clear, repeatable competitive mindset.",
    ],
    curriculum: [
      { n: 1, title: "The inner posture", detail: "Why comparison limits you, and what to focus on instead." },
      { n: 2, title: "Between-points routine", detail: "A 20-second ritual that resets body and mind, point after point." },
      { n: 3, title: "Breath & arousal", detail: "Simple breathing to manage nerves without going flat." },
      { n: 4, title: "Recovering from errors", detail: "Turning the page so one mistake doesn't become three." },
      { n: 5, title: "Competing your way", detail: "Building a personal mindset you can trust under the lights." },
    ],
    image: "/images/archive-indianwells.jpg",
  },
  {
    slug: "match-strategy",
    title: "Match Strategy",
    summary:
      "Think the way a tour player thinks. Read patterns, build points on purpose, and have a plan — and a plan B — before you walk on.",
    level: "Advanced",
    price: 169,
    durationLabel: "6 modules · ~4.5 hours",
    outcomes: [
      "Scout an opponent and build a game plan in the first few games.",
      "Construct points to your strengths instead of trading blindly.",
      "Adjust tactics mid-match when the first plan isn't working.",
      "Close out tight sets with margin and intent.",
    ],
    curriculum: [
      { n: 1, title: "Reading the opponent", detail: "The tells and patterns to spot early — and how to test them." },
      { n: 2, title: "Point construction", detail: "Setting up the ball you want with the shot before it." },
      { n: 3, title: "Patterns of play", detail: "Repeatable plays off serve and return that win you cheap points." },
      { n: 4, title: "Game plans", detail: "Building a plan A and B, and knowing when to switch." },
      { n: 5, title: "Mid-match adjustments", detail: "Reading the score and momentum to change what isn't working." },
      { n: 6, title: "Closing the match", detail: "Serving it out and returning to break with margin, not hope." },
    ],
    image: "/images/archive-federer.jpg",
  },
];

export function getCourse(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug);
}
