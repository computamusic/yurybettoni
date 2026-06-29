# 06 · Design System

A material-honest identity drawn from Yury's actual world — not a brand color picked in the abstract. Every token below is named so it can drop straight into a Tailwind `theme.extend`. An inline visual "style tile" is rendered in chat alongside this doc.

---

## 1. The concept — "The Line"

A tennis court is geometry: precise white lines on warm clay, the baseline you build everything from, the velocity across it. That is the identity.

- **Ground:** deep, warm near-black — the confident documentary register of an athlete film.
- **Clay:** a muted, sophisticated sienna — earned twice over (the clay courts of Rome where he made his name; the red earth of the Africa he came from). *Not* a decorative terracotta default — it's the subject's literal material.
- **Chalk:** warm off-white for editorial, paper-grounded passages.
- **The signature device — the line:** hairline rules used as the structural system across the site, and one decisive "baseline" drawn on load (doc 07).

**The deliberate risk:** we lead the athletic/business world on a **dark, warm ground with a confident grotesque** and hold the **serif back for the Foundation only** — inverting the common "serif = prestige everywhere" move. Serif here means *intimacy and grief-into-purpose*, so it carries weight precisely because it's rationed.

---

## 2. Typography

Two voices, one utility face. The pairing is the personality — chosen for this brief, not defaults.

| Role | Typeface | Why this one | Usage |
|---|---|---|---|
| **Display / athletic voice** | **PP Neue Montreal** (or open alt: **Geist**) — a wide, confident contemporary grotesque | Modern, precise, athletic; reads as *built*, not literary. Carries the brand's confidence. | Hero lines, section headlines, pillar titles, CTAs |
| **Body / interface** | **Inter Tight** (or **Mona Sans**) | Quiet humanist sans; excellent at small sizes and on iPad. | All body copy, nav, UI, product/commerce |
| **Editorial / Foundation voice** | **Newsreader** (or **Spectral**) — a refined reading serif | Reserved for the Foundation and long-form story — the *tonal shift*. | Foundation hero/body, Alessandra's story, pull-quotes |
| **Data / structure** | **Geist Mono** (or **Commit Mono**) | The "scoreboard." Encodes real data — years, stats, scores, prices. | Stat layer, timeline years, prices, captions, labels, eyebrows |

> Load via `next/font` (self-hosted, `display: swap`, subset). Three families max on any page; the serif loads only on Foundation/long-form routes to protect performance.

### Type scale (fluid, `clamp()` — 1.25 major-third base, tightened display)

| Token | Size (clamp) | Use |
|---|---|---|
| `display-xl` | `clamp(2.75rem, 6vw, 5.5rem)` | Hero line |
| `display-l` | `clamp(2rem, 4vw, 3.75rem)` | Section headline |
| `heading-m` | `clamp(1.5rem, 2.5vw, 2.25rem)` | Subsection |
| `heading-s` | `1.25rem` | Card title |
| `body-l` | `1.125rem` | Lead paragraph |
| `body` | `1rem` | Default |
| `caption` | `0.8125rem` | Captions, meta |
| `label` (mono) | `0.75rem`, `0.08em` tracking, uppercase | Eyebrows, stat labels |

Rules: display set tight (`letter-spacing: -0.02em`, `line-height: 1.0–1.05`); body at `line-height: 1.6`; serif long-form at `1.7` with a `66ch` measure. Two weights per family (Regular 400 / Medium 500–600). No faux bolding.

---

## 3. Color

Two palettes share one ground. The **Brand** palette runs Athlete + Business; the **Foundation** palette is the tonal shift — same bones, warmer light, paper-forward, gold instead of clay.

### Brand (Athlete + Business)

| Token | Hex | Role |
|---|---|---|
| `court-ink` | `#15110D` | Primary ground (warm near-black) |
| `court-ink-soft` | `#211B15` | Raised surfaces / cards on dark |
| `clay` | `#B05A38` | Primary accent (sienna) — CTAs, active line, emphasis |
| `clay-deep` | `#8A4329` | Hover / pressed accent |
| `chalk` | `#F0EADE` | Light ground + primary text on dark |
| `chalk-dim` | `#C9C0B1` | Secondary text on dark |
| `line` | `#FFFFFF @ 14%` | Hairline rules (the court lines) |
| `line-strong` | `#FFFFFF @ 28%` | Emphasized dividers / hover |

### Foundation (the tonal shift)

| Token | Hex | Role |
|---|---|---|
| `paper` | `#F4EFE6` | Primary ground (warm paper) |
| `paper-deep` | `#E7DECE` | Raised surfaces |
| `earth` | `#3A2E22` | Primary text (warm umber, not pure black) |
| `acacia` | `#C2913B` | Accent (African gold) — give/donate, emphasis |
| `acacia-deep` | `#9A6F26` | Hover / pressed |
| `sage` | `#6E7359` | Quiet secondary accent (olive/sage) |
| `line-warm` | `#3A2E22 @ 12%` | Hairline rules on paper |

**Contrast:** chalk on court-ink ≈ 13:1; earth on paper ≈ 11:1 — both clear AA/AAA for body. Clay/acacia are used for accent and large text; verify any small text on accent against AA (4.5:1) and prefer accent-on-ground over text-on-accent.

**Dark mode stance:** the Brand experience is *already* a warm-dark canvas, so a separate "dark mode" is unnecessary and would dilute the identity. The Foundation is intentionally light (paper) — its tonal contrast against the dark brand is the point. We respect `prefers-color-scheme` only for system UI (forms, focus) and otherwise ship the art-directed palette per pillar. (Documented decision — revisit only if analytics show demand.)

---

## 4. Spacing & grid

**Spacing scale** (8px base, named tokens): `space-1=4 · 2=8 · 3=12 · 4=16 · 6=24 · 8=32 · 12=48 · 16=64 · 24=96 · 32=128 · 48=192`. Section vertical rhythm is generous — `space-24`→`space-48` between major sections. Whitespace is a luxury signal; do not crowd.

**Grid:** 12-column, max content width `1280px`, gutters `24px` (desktop) / `16px` (mobile), with full-bleed escapes for hero film and the line dividers. The court metaphor is literal: primary layout snaps to the grid; the line device spans full-bleed to read as a court line.

**Breakpoints** (mobile-first, primary target = iPad landscape):
`sm 640 · md 768 (iPad portrait) · lg 1024 (iPad landscape — primary) · xl 1280 · 2xl 1536`.

---

## 5. Components (visual spec; full inventory in doc 08)

- **Buttons.**
  - *Primary:* solid `clay` (Brand) / `acacia` (Foundation), `chalk`/`paper` label, `radius-md`, generous padding, hover → `clay-deep` + 1px line draw under label.
  - *Secondary:* transparent, `line-strong` 1px border, hover fills `court-ink-soft`.
  - *Text/quiet:* label + animated underline (the "line" again). All CTAs name the outcome ("Start the course"), sentence case, never "Submit."
- **Cards.** Flat. `court-ink-soft` (or `paper-deep`) surface, 1px `line`, `radius-12`. Pillar cards carry a single media zone + title + one action. No drop shadows — separation via the line and ground contrast.
- **Navigation.** Slim persistent header, transparent over hero then solidifies to `court-ink` on scroll (opacity/blur via backdrop, GPU-only). Active pillar marked by a clay underline.
- **Forms.** Underline-style fields (a literal line) on transparent ground; label floats up on focus; focus ring = 2px clay/acacia. Inquiry forms use an intent selector (doc 05). Success states name the next step + timeline.
- **Image treatment.** One grade for all photography: warm, slightly desaturated, lifted blacks toward `court-ink` (so images sit *in* the ground, not on it). Consistent crop ratios (3:2 editorial, 4:5 portrait, 16:9 film). Optional fine film grain on hero only. Foundation imagery is graded warmer/lighter (toward `paper`) and centers the beneficiary's dignity.
- **Icons.** Minimal line icons, 1.5px stroke, matching the hairline weight (e.g. Lucide). Used sparingly — labels over icons.
- **Eyebrows / labels / numbering.** Mono, uppercase, tracked. Numbering only where order is real (timeline years, story chapters, the 3 Y's) — never decorative `01/02/03`.

### Hover & state behaviors
- Links/CTAs: a line draws in under the label (120–180ms).
- Cards: media subtly scales (1.0→1.03) within a fixed frame; the card border brightens `line`→`line-strong`.
- Focus-visible: 2px accent ring, always present (accessibility floor).
- Reduced motion: all of the above degrade to instant color/opacity changes (doc 07).

---

## 6. Tailwind token sketch (build-ready)

```js
// tailwind.config — theme.extend (abridged; full set in build)
colors: {
  court: { ink: '#15110D', soft: '#211B15' },
  clay:  { DEFAULT: '#B05A38', deep: '#8A4329' },
  chalk: { DEFAULT: '#F0EADE', dim: '#C9C0B1' },
  paper: { DEFAULT: '#F4EFE6', deep: '#E7DECE' },
  earth: '#3A2E22',
  acacia:{ DEFAULT: '#C2913B', deep: '#9A6F26' },
  sage:  '#6E7359',
},
fontFamily: {
  display: ['"PP Neue Montreal"', 'Geist', 'sans-serif'],
  sans:    ['"Inter Tight"', 'system-ui', 'sans-serif'],
  serif:   ['Newsreader', 'Spectral', 'serif'],
  mono:    ['"Geist Mono"', 'ui-monospace', 'monospace'],
},
fontSize: { /* display-xl, display-l, heading-m… per scale above via clamp() */ },
maxWidth: { content: '1280px', prose: '66ch' },
borderColor: { line: 'rgb(255 255 255 / 0.14)', 'line-strong': 'rgb(255 255 255 / 0.28)' },
```

---

## 7. The signature, in one sentence

**Precise white lines on warm clay-dark ground, a confident grotesque held in check by deep whitespace, and a serif voice rationed to the one place it should ache** — the court, made into a brand.
