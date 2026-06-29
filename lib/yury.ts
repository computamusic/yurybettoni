// Source of truth for real, researched content about Yury Bettoni.
// Sourced from his Tennis-Prose "Biofile" interview, the Beryll journal profile,
// and the original yurybettoni.com. Career claims phrased from the public record;
// a few specifics ("youngest coach…") are his own telling and marked where helpful.

export const BIO = {
  bornYear: 1976,
  bornPlace: "Addis Ababa, Ethiopia",
  based: "Miami Beach, Florida",
  // Family fled political unrest across these before settling in Italy.
  journey: ["Ethiopia", "Saudi Arabia", "Liberia", "Ivory Coast", "Tanzania", "Italy"],
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
    text: "Africa touches you in a different way. It teaches the real, basic values of life.",
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
  { year: "1976", title: "Born in Addis Ababa", note: "Born in Ethiopia to Italian parents — the start of a childhood carried across continents." },
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
  { label: "Languages of a nomad", value: "Six countries before Italy" },
];

// A genuinely charming anecdote, told straight.
export const FEDERER_STORY = {
  title: "The night he beat Federer — on a PlayStation",
  text: "At the Muratti Time event in Milan, a young Roger Federer turned from the console and said, “How about we play tennis?” Yury picked Agassi. Federer picked himself. Sitting beside the player he was busy beating on screen, Yury remembers it as the most surreal match of his life.",
};
