// Rich content for the flagship product template. Drop images named
// `<galleryPrefix>-*.jpg` (and a `<galleryPrefix>-hero.jpg`) into
// public/images/products and they populate automatically on the next build.

export type ProductContent = {
  galleryPrefix: string;
  tagline: string;
  heroEyebrow: string;
  heroLine: string;
  quality: { h: string; d: string }[];
  sizing: { headline: string; body: string; points: [string, string][] };
  foundationHeadline: string;
  specs: [string, string][];
  faq: [string, string][];
};

const causeSpec: [string, string] = ["Gives back", "A share funds the Foundation"];

const performanceFaq: [string, string][] = [
  ["How does it fit?", "True to size with a slight athletic taper. Between sizes, size up for a relaxed drape or down for a sharper line."],
  ["Will the logo crack?", "No — the Symba lion is embroidered, not printed, so it survives every wash."],
  ["Court only?", "Built for play, but it wears just as easily off the court."],
  ["What does my order support?", "A share of every GoSymba order funds the Alessandra Bettoni Foundation."],
];

export const CONTENT: Record<string, ProductContent> = {
  "performance-tee-true-royal": {
    galleryPrefix: "royal-tee",
    tagline: "The everyday court tee — engineered to move, marked with the lion.",
    heroEyebrow: "On court",
    heroLine: "Built to move with you.",
    quality: [
      { h: "Moisture-wicking knit", d: "An engineered fabric that pulls sweat off the skin and dries fast, so you stay light and dry deep into the third set." },
      { h: "Embroidered, never printed", d: "The Symba lion is stitched at the chest — it won't crack, peel or fade the way a print does." },
      { h: "Cut to play", d: "A clean athletic cut with just enough stretch to rotate freely through the swing." },
    ],
    sizing: {
      headline: "Find your fit.",
      body: "A true-to-size athletic cut, slightly tapered through the body with room to move. Take your usual size for a fitted-but-not-tight feel.",
      points: [
        ["Runs true", "Order your normal size for the intended athletic fit."],
        ["Between sizes?", "Size up for a relaxed drape, down for a sharper line."],
        ["The cut", "Tapered through the body, with room to rotate and reach."],
      ],
    },
    foundationHeadline: "A tee on your back. A season on court for a kid who has neither.",
    specs: [
      ["Fabric", "Moisture-wicking performance knit"],
      ["Fit", "Athletic · true to size"],
      ["Sizes", "S–XXL"],
      ["Logo", "Embroidered Symba lion"],
      ["Care", "Machine wash cold · tumble low"],
      causeSpec,
    ],
    faq: performanceFaq,
  },

  "oversized-tee-vintage-white": {
    galleryPrefix: "white-tee",
    tagline: "The off-court staple — heavyweight cotton, washed soft, cut to drape.",
    heroEyebrow: "Off duty",
    heroLine: "Off-court ease, on-brand.",
    quality: [
      { h: "Heavyweight cotton", d: "A substantial, washed hand-feel that drapes instead of clinging — the kind of tee that only gets better with wear." },
      { h: "Relaxed, boxy cut", d: "The modern oversized silhouette: dropped shoulder, square body, a little extra length." },
      { h: "Tonal embroidered lion", d: "The Symba mark stitched quietly into the cotton — understated, never loud." },
    ],
    sizing: {
      headline: "Wear it loose.",
      body: "Designed oversized. Take your usual size for the intended relaxed fit, or size up for full streetwear volume.",
      points: [
        ["Sized to drape", "Your normal size gives the intended relaxed fit."],
        ["Want it bigger?", "Size up for maximum oversized volume."],
        ["The cut", "Boxy body, dropped shoulder, slightly longer hem."],
      ],
    },
    foundationHeadline: "A tee for your weekend. A door that stays open for someone else.",
    specs: [
      ["Fabric", "Heavyweight washed cotton"],
      ["Fit", "Oversized · relaxed"],
      ["Sizes", "S–XXL"],
      ["Logo", "Tonal embroidered lion"],
      ["Care", "Machine wash cold · air dry"],
      causeSpec,
    ],
    faq: [
      ["Is it meant to be loose?", "Yes — it's cut oversized. Take your usual size for the intended drape, or size up for more volume."],
      ["Will it shrink?", "Wash cold and air dry and it holds its shape and softness."],
      ["Will the logo last?", "It's embroidered, so it won't crack or peel."],
      ["What does my order support?", "A share of every order funds the Alessandra Bettoni Foundation."],
    ],
  },

  "performance-tee-limited-edition": {
    galleryPrefix: "orange-tee",
    tagline: "A limited run of the performance tee — match-day orange, while it lasts.",
    heroEyebrow: "Limited",
    heroLine: "A limited run, in match-day orange.",
    quality: [
      { h: "A limited release", d: "Produced in a single short run. When this colourway is gone, it's gone — no restock." },
      { h: "Performance knit", d: "The same moisture-wicking, fast-drying fabric as the core tee, in a colour that doesn't hide." },
      { h: "Embroidered lion", d: "Stitched at the chest — crisp against the orange, and built to last." },
    ],
    sizing: {
      headline: "Find your fit.",
      body: "The same athletic cut as the core performance tee — true to size with a slight taper.",
      points: [
        ["Runs true", "Order your normal size for the athletic fit."],
        ["Between sizes?", "Size up for a relaxed drape, down for a sharper line."],
        ["The cut", "Tapered through the body, room to rotate."],
      ],
    },
    foundationHeadline: "A limited tee. An unlimited reason to wear it.",
    specs: [
      ["Edition", "Limited run · no restock"],
      ["Fabric", "Moisture-wicking performance knit"],
      ["Fit", "Athletic · true to size"],
      ["Sizes", "S–XXL"],
      ["Logo", "Embroidered Symba lion"],
      causeSpec,
    ],
    faq: [
      ["Will it come back?", "No — it's a limited run with no planned restock."],
      ["How does it fit?", "True to size, same athletic cut as the core performance tee."],
      ["Will the logo crack?", "No, it's embroidered."],
      ["What does my order support?", "A share of every order funds the Alessandra Bettoni Foundation."],
    ],
  },

  "gosymba-duffel": {
    galleryPrefix: "duffel",
    tagline: "Court to street, packed — the everyday carry, marked with the lion.",
    heroEyebrow: "Carry",
    heroLine: "Court to street, packed.",
    quality: [
      { h: "Built to haul", d: "A structured, lightweight body that holds its shape — loaded for a tournament or slung empty over a shoulder." },
      { h: "Room for the day", d: "Swallows a full kit: shoes, towel, a change of clothes, and a racquet's worth of everything else." },
      { h: "Embroidered lion", d: "The Symba mark front and centre, stitched to take the knocks of daily carry." },
    ],
    sizing: {
      headline: "One bag, all day.",
      body: "Sized for a full day on and off the court — generous without being a suitcase.",
      points: [
        ["Capacity", "Fits a day's kit — shoes, towel, a change, and more."],
        ["Carry", "Twin top handles plus a detachable shoulder strap."],
        ["Build", "Lightweight, structured, wipe-clean lining."],
      ],
    },
    foundationHeadline: "A bag for your kit. A future for a kid who'd carry one too.",
    specs: [
      ["Body", "Lightweight structured shell"],
      ["Carry", "Twin handles · shoulder strap"],
      ["Use", "Court, gym, weekend"],
      ["Logo", "Embroidered Symba lion"],
      ["Care", "Spot clean"],
      causeSpec,
    ],
    faq: [
      ["How big is it?", "A roomy day-bag — a full kit with shoes and a change fits comfortably."],
      ["How does it carry?", "Twin top handles and a detachable shoulder strap."],
      ["Will the logo last?", "It's embroidered to take daily wear."],
      ["What does my order support?", "A share of every order funds the Alessandra Bettoni Foundation."],
    ],
  },

  "gosymba-cap": {
    galleryPrefix: "cap",
    tagline: "Shade the eyes, show the lion — a clean six-panel in black.",
    heroEyebrow: "Headwear",
    heroLine: "Shade the eyes. Show the lion.",
    quality: [
      { h: "Structured crown", d: "Six panels that hold their shape, with a gently curved brim — court-ready, never floppy." },
      { h: "Dialled-in fit", d: "An adjustable strap-back that tunes from a junior's head to an adult's, in seconds." },
      { h: "Embroidered lion", d: "The Symba mark stitched front and centre, crisp on black." },
    ],
    sizing: {
      headline: "One size, dialled in.",
      body: "An adjustable strap-back means one cap fits most — tune it and forget it.",
      points: [
        ["Adjustable", "Strap-back fits junior through adult."],
        ["Structured", "Holds its crown; curved brim for shade."],
        ["The mark", "Embroidered lion, front panel."],
      ],
    },
    foundationHeadline: "A cap for your game. A share for someone learning theirs.",
    specs: [
      ["Style", "Six-panel · curved brim"],
      ["Fit", "Adjustable strap-back · one size"],
      ["Colour", "Black"],
      ["Logo", "Embroidered Symba lion"],
      ["Care", "Spot clean"],
      causeSpec,
    ],
    faq: [
      ["Will it fit me?", "Yes — the strap-back adjusts to fit most heads, junior to adult."],
      ["Is the brim flat or curved?", "Gently curved, for shade and a classic look."],
      ["Will the logo last?", "It's embroidered, so it holds up."],
      ["What does my order support?", "A share of every order funds the Alessandra Bettoni Foundation."],
    ],
  },

  "gosymba-lion-plush": {
    galleryPrefix: "lion",
    tagline: "The littlest member of the pride — a plush Symba in his own GoSymba tee.",
    heroEyebrow: "For the cub",
    heroLine: "The littlest member of the pride.",
    quality: [
      { h: "Soft, huggable plush", d: "A genuinely cuddle-worthy little lion for the youngest fan in the family." },
      { h: "Wears the kit", d: "He comes in his own tiny GoSymba tee — the smallest member of the team." },
      { h: "Gives the most", d: "Of everything in the shop, this is the one most tied to the cause — fitting, for a lion named for a foundation." },
    ],
    sizing: {
      headline: "Pocket-sized pride.",
      body: "A small, soft plush sized for little hands — and big enough to keep.",
      points: [
        ["Size", "A compact, sit-anywhere plush."],
        ["Made for", "Kids — and grown-ups who won't admit it."],
        ["Detail", "Removable GoSymba tee."],
      ],
    },
    foundationHeadline: "A toy for one child. A door for another.",
    specs: [
      ["Type", "Soft plush lion"],
      ["Includes", "Mini GoSymba tee"],
      ["Made for", "All ages"],
      ["Care", "Surface wash"],
      causeSpec,
    ],
    faq: [
      ["Is it for young kids?", "It's soft and simple — suitable as a cuddly companion for all ages."],
      ["Does the tee come off?", "Yes, the little GoSymba tee is removable."],
      ["What does my order support?", "A larger-than-usual share of this one funds the Alessandra Bettoni Foundation."],
      ["Why a lion?", "“Symba” means lion — the heart of the GoSymba mark and the Foundation it supports."],
    ],
  },
};

export function contentFor(slug: string): ProductContent | undefined {
  return CONTENT[slug];
}
