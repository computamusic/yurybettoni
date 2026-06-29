// Source of truth for real, researched content about Yury Bettoni.
// Sourced from his Tennis-Prose "Biofile" interview, the Beryll journal profile,
// and the original yurybettoni.com. Career claims phrased from the public record;
// a few specifics ("youngest coach…") are his own telling and marked where helpful.

export const BIO = {
  bornYear: 1976,
  bornPlace: "Addis Ababa, Ethiopia",
  based: "Miami Beach, Florida",
  // Born in Ethiopia to Alessandra and Amerigo — both born in Eritrea to Italian
  // immigrant parents who developed infrastructure projects across the region.
  // His father's work moved the family through several African countries;
  // Tanzania shaped the most formative chapter of his youth, before Italy.
  journey: ["Ethiopia", "Tanzania", "Italy"],
};

export type Quote = { text: string; attribution?: string; context?: string };

export const QUOTES: Record<string, Quote> = {
  philosophy: {
    text: "Comparing yourself to others will only limit your ability to reach your higher level.",
    attribution: "Yury Bettoni",
  },
  fullCircle: {
    text: "I used to sit and watch Andre Agassi on that court, dreaming I could play like him. Seven years later, by chance, I was part of an experience I had only ever dreamed.",
    attribution: "Yury Bettoni",
    context: "On returning to the Rome court as Mary Pierce's hitting partner, 1997",
  },
  whyTennis: {
    text: "Tennis let me see the world and meet remarkable people. It taught me discipline, determination, respect, loyalty, passion, a work ethic — and how to deal with life's adversities.",
    attribution: "Yury Bettoni",
  },
  africa: {
    text: "Africa touches humans in a different way. It teaches the real, basic values of life.",
    attribution: "Yury Bettoni",
  },
  firstBall: {
    text: "I remember hitting my first ball ever — and I actually hit it with the strings. Yes!",
    attribution: "Yury Bettoni",
    context: "Age seven, Dar es Salaam",
  },
  design: {
    text: "A house should not feel like an interior-design magazine. It should be a place of comfort.",
    attribution: "Yury Bettoni",
  },
};

export type TimelineEvent = {
  year: string;
  title: string;
  note: string;
  marker?: boolean;
};

export const TIMELINE: TimelineEvent[] = [
  { year: "1976", title: "Born in Addis Ababa", note: "Born in Ethiopia to an Italian family — the start of a childhood spent moving across Africa for his father's work." },
  { year: "1983", title: "First ball, Dar es Salaam", note: "Sees a tennis court for the first time at age seven, in Tanzania, and hits his first ball clean off the strings." },
  { year: "1989", title: "Pushed onto the court", note: "Reluctantly made to play by a school teacher — then reaches the final of both his school event and the Italian National Mini championship in the same week. His mother, Alessandra, tells him to take it seriously." },
  { year: "1990", title: "Rome, from the stands", note: "At thirteen he watches his first star up close at the Italian Open — and dreams of the players' side of the rope." },
  { year: "1992", title: "Bollettieri Academy", note: "Crosses to Florida for the Nick Bollettieri Academy, training in the same ranks as Marcelo Ríos, Marat Safin and Max Mirnyi.", marker: true },
  { year: "1996", title: "Turns professional", note: "Goes pro at twenty, racquet sponsored by Dunlop, kit by Lotto." },
  { year: "1997", title: "Italian Open — with Mary Pierce", note: "Hitting partner on Mary Pierce's run to the Rome title — back on the very court he had once watched from the stands.", marker: true },
  { year: "1997–98", title: "Switzerland, beside Federer", note: "Trains at the Swiss Tennis Federation alongside a young Roger Federer, as assistant to super-coach Sven Groeneveld." },
  { year: "2005", title: "University of South Florida", note: "Graduates with degrees in International Management and Economics; certified by the USPTR and ISSA." },
  { year: "2014", title: "Partner at Italkraft", note: "Turns the family instinct for building into a partnership at the luxury kitchen house Italkraft, on projects from Zaha Hadid's One Thousand Museum to the St. Regis." },
  { year: "Today", title: "The Y-System & the Foundation", note: "Codifies his method as the Y-System and founds the Alessandra Bettoni Foundation in his mother's name.", marker: true },
];

export type Legend = { name: string; relation: string };

// The constellation of players whose orbit he shared.
export const LEGENDS: Legend[] = [
  { name: "Roger Federer", relation: "Trained alongside at the Swiss Federation" },
  { name: "Andre Agassi", relation: "His idol — and his pick on the PlayStation" },
  { name: "Mary Pierce", relation: "Hitting partner, '97 Italian Open champion" },
  { name: "Marat Safin", relation: "Academy ranks, Bollettieri" },
  { name: "Marcelo Ríos", relation: "Academy ranks, Bollettieri" },
  { name: "Max Mirnyi", relation: "Academy ranks, Bollettieri" },
  { name: "Arantxa Sánchez Vicario", relation: "Worked together on tour" },
  { name: "Jeff Tarango", relation: "In his corner" },
  { name: "Mark Philippoussis", relation: "Academy contemporary" },
  { name: "Sven Groeneveld", relation: "Mentored under the super-coach" },
];

// "Off the court" — the Biofile colour that makes him human.
export const BIOFILE: { label: string; value: string }[] = [
  { label: "Born", value: "Addis Ababa, Ethiopia" },
  { label: "First ball", value: "Age 7 · Dar es Salaam" },
  { label: "Racquet", value: "Dunlop CX200, later Völkl" },
  { label: "Kit", value: "Lotto" },
  { label: "Idol", value: "Andre Agassi" },
  { label: "Favourite courts", value: "Rome · Monte Carlo · US Open" },
  { label: "On screen", value: "HBO's “Ballers”" },
  { label: "Raised", value: "Across Africa · mostly Tanzania" },
];

// A genuinely charming anecdote, told straight.
export const FEDERER_STORY = {
  title: "The night he beat Federer — on a PlayStation",
  text: "At the Muratti Time event in Milan, a young Roger Federer turned from the console and said, “How about we play tennis?” Yury picked Agassi. Federer picked himself. Sitting beside the player he was busy beating on screen, Yury remembers it as the most surreal match of his life.",
};

// The Y-System — his proprietary method, built on the "3 Y's".
// From the original yurybettoni.com Y-System pages.
export const THREE_YS = [
  {
    key: "mobilitY",
    title: "Mobility",
    short: "Move freely, then move fast.",
    body: "Range, flexibility and coordination — the body's ability to get into position before the ball arrives. The foundation everything else is built on.",
  },
  {
    key: "stabilitY",
    title: "Stability",
    short: "A base you can trust under load.",
    body: "Strength, balance and control through the kinetic chain, so power has something solid to push against and the body holds its shape under pressure.",
  },
  {
    key: "velocitY",
    title: "Velocity",
    short: "Speed, applied with intent.",
    body: "Explosive movement, agility and conditioning — turning mobility and stability into racquet-head speed and first-step quickness on the court.",
  },
] as const;

export const YSYSTEM_INTRO = {
  eyebrow: "The 3 Y's",
  title: "A visual method for moving better — on the court and off it.",
  body: "The Y-System is Yury's own framework, built on the 3 Y's: mobilitY, stabilitY and velocitY. It reads tennis as movement first, optimising body biomechanics and the cognitive side of the game so players and coaches share one language for getting better.",
};

// The signature line of the original Y-System pages.
export const YSYSTEM_TAGLINE = "Be the Architect of Your Own Body";

// The full definition, as the live site frames it.
export const YSYSTEM_DEFINITION = {
  lead: "The Y-System is a holistic tennis training methodology designed to optimise physical performance and cognitive development through the core principles of Mobility, Stability and Velocity — the 3 Y's.",
  detail:
    "It reads the game as movement first, analysing tennis-specific stances — natural, closed, open and semi-open — and the biomechanics behind them: hip rotation, hip drive, dominant-leg activation and upper-body coordination. Across seven phases it builds tennis performance and motor skill together, so the body learns the pattern as the mind learns the why.",
};

// The seven phases that make up the method, in order.
export const YSYSTEM_PHASES = [
  {
    n: "01",
    title: "Footwork Fundamentals",
    body: "Tennis-specific movement and conditioning using training tools like the Y-Base, alongside functional and resistance training.",
  },
  {
    n: "02",
    title: "Stroke Fundamentals",
    body: "Simplifying stroke mechanics by analysing each player's biomechanics and physical abilities.",
  },
  {
    n: "03",
    title: "Water Training",
    body: "Enhancing control, balance and body awareness for refined, low-impact movement.",
  },
  {
    n: "04",
    title: "On-Court Drills",
    body: "Developing positioning, footwork and shot selection at varying heights and directions.",
  },
  {
    n: "05",
    title: "Two Ball Speeds",
    body: "Teaching players to differentiate forward speed from rotational speed — smarter shot selection and tactical variety.",
  },
  {
    n: "06",
    title: "Mental Strategies & Empowerment",
    body: "Implementing System 5 (court zones) for on-court tactics, and a life philosophy that carries off the court.",
  },
  {
    n: "07",
    title: "Performance Nutrition",
    body: "Customised eating plans to fuel performance, recovery and overall wellness.",
  },
] as const;

// The benefit the method delivers, in the site's own words.
export const YSYSTEM_BENEFIT =
  "The Y-System helps players visually understand the mechanics of each movement, stimulate cognitive skills, and reach the ideal balance of the 3 Y's — a faster, stronger, more responsive and injury-resistant athlete.";

// The Y-Base — the method's signature training tool.
export const YBASE = {
  eyebrow: "The training tool",
  title: "The Y-Base",
  body: "Its innovative Y shape taps into natural pattern recognition, amplifying both physical and mental performance. Versatile and intuitive, it lets anyone — not just tour players — train the 3 Y's and unlock their full athletic potential.",
};

// The bookable services, mirroring the live Y-System booking form's categories.
export const YSYSTEM_BOOKING_CATEGORIES = [
  "1-on-1 private coaching",
  "Group coaching",
  "Online training",
  "Video analysis",
  "Y-Base",
  "Water training",
  "Functional circuit training",
  "Assessment meeting",
  "Eating plans",
  "Nutrition: intake quantities & timing",
] as const;

// The Y-System's purchasable / programmatic expressions.
export const YSYSTEM_PROGRAMS = [
  {
    title: "Tennis",
    note: "Understand the dynamics of a tennis movement through mobility, stability and velocity.",
  },
  {
    title: "Training",
    note: "A personalised regime on the Y-Base that builds the fundamentals of the 3 Y's.",
  },
  {
    title: "Nutrition",
    note: "Eating plans, intake and timing tuned to the work — the off-court half of performance.",
  },
  {
    title: "Coaches",
    note: "Y-System–certified coaches deliver fully tailored programs to each player's goals.",
  },
] as const;

// Brands and partners that have backed or featured him (from About + Press).
export const SPONSORS = [
  "Dunlop",
  "Head",
  "Gosen",
  "imoove",
  "Lotto",
  "Völkl",
  "Peain Script",
] as const;

// Accolades and affiliations — the verifiable, the institutional, the human.
export const ACCOLADES = [
  { label: "Knight of Malta", note: "A lifelong commitment to giving back." },
  {
    label: "B.A., International Management & Economics",
    note: "University of South Florida, 2005.",
  },
  { label: "USPTR-certified coach", note: "United States Professional Tennis Registry." },
  {
    label: "ISSA personal trainer & dietitian",
    note: "International Sports Sciences Association.",
  },
] as const;
