# 07 · Motion System

Motion on the current site decorates. Here it does one of three jobs — **establish hierarchy, guide attention, or carry the story** — or it doesn't ship. The discipline *is* the luxury. Built for Framer Motion + CSS, GPU-only.

---

## First principles

1. **Every animation earns its place.** If you can't name which of the three jobs it does, cut it.
2. **One orchestrated moment beats ten scattered effects.** Spend the boldness on the hero load; keep everything else quiet.
3. **GPU-only.** Animate `transform` and `opacity` exclusively. Never animate `width/height/top/left/margin` (layout thrash → jank on iPad).
4. **Motion is subordinate to content.** It reveals what's already there; it never blocks reading or interaction.
5. **Reduced motion is a first-class path,** not a fallback — see the contract below.

---

## The signature moment — "The Baseline"

On first homepage load (and as the page-transition motif), a single horizontal **line draws** across the hero from left to right — the court's baseline — and the hero type and content **settle onto it** (subtle rise + fade). It happens once, fast, and decisively. It is the brand's thesis in motion: precision, the line you build from.

```
load → line draws L→R (clipPath/scaleX, 600ms)
     → hero line + sub rise 16px + fade in (staggered 80ms, after line)
     → scroll affordance fades in last
total ≈ 1.0s, skippable, runs once per session
```

Everywhere else, motion is a quiet echo of this one idea (lines drawing, content settling) — never a new trick.

---

## Motion vocabulary (named, reusable)

| Name | What it does | Where | Job |
|---|---|---|---|
| **draw-line** | a hairline scales/clips in along its axis | dividers, hover underlines, the baseline | hierarchy |
| **settle** | content rises 12–16px + fades in | section reveals, hero | guide attention |
| **stagger** | children settle in sequence (60–90ms apart) | lists, pillar cards, stat layer | hierarchy |
| **frame-scale** | media scales 1.0→1.03 inside a fixed frame on hover/scroll | cards, gallery media | guide attention |
| **solidify** | header bg fades from transparent → `court-ink` + blur | sticky nav on scroll | hierarchy |
| **count-up** | mono stats tick to value once in view | stat layer, impact metrics | carry story (proof) |
| **cross-shift** | tonal cross-fade entering the Foundation | brand → Foundation transition | carry story (emotion) |

That's the whole vocabulary. New pages compose these; they don't invent new motions.

---

## Scroll interactions

- **Reveal on enter:** sections use `settle` + `stagger` once, when ~20% in view (IntersectionObserver / Framer `whileInView`, `once: true`). No re-trigger on scroll-up.
- **Timeline (Athlete):** horizontal scroll-linked progress on the career timeline; the active year (mono) brightens as it passes the baseline. Scroll-linked, not autoplay.
- **Parallax:** at most a *subtle* depth offset on hero media (≤8% travel). No deep, multi-layer parallax — it reads as gimmick and costs frames.
- **No scroll-hijacking.** The page never steals the scroll or pins for long stretches; the visitor stays in control (iPad-friendly).

---

## Timing & easing tokens

| Token | Value | Use |
|---|---|---|
| `dur-fast` | 120ms | hover underline, focus |
| `dur-snap` | 180ms | buttons, small state |
| `dur-base` | 320ms | reveals, settle, fades |
| `dur-slow` | 600ms | the baseline draw, hero, tonal cross-shift |
| `ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` | most reveals (decisive, athletic) |
| `ease-line` | `cubic-bezier(0.65, 0, 0.35, 1)` | line draws (even, mechanical-precise) |
| `ease-soft` | `cubic-bezier(0.4, 0, 0.2, 1)` | Foundation motion (gentler) |

Foundation routes run ~1.15× slower and use `ease-soft` — the tonal shift extends into the motion, not just the palette.

---

## Performance rules (non-negotiable)

- `transform`/`opacity` only; promote animated layers with `will-change` *sparingly* and remove after.
- Hero film: poster image first, lazy-load video, `playsinline`, muted, ≤6s loop, AVIF/WebP poster; pause when offscreen.
- Stagger caps at ~8 children; large lists reveal as a group, not item-by-item.
- No animation library on the critical path beyond Framer Motion (already in the stack); the baseline draw can be pure CSS to avoid blocking.
- Target: motion never pushes INP past budget (doc 09); 60fps on iPad-landscape is the bar.

---

## The reduced-motion contract

When `prefers-reduced-motion: reduce`:

| Normal | Reduced |
|---|---|
| baseline draws + hero settles | line appears instant; hero fades only (no movement) |
| settle / stagger reveals | instant opacity fade, no translate |
| frame-scale on hover | static; border brightens only |
| count-up | final number shown immediately |
| cross-shift | instant cross-fade |

Nothing essential is conveyed by motion alone; every reveal's end-state is the real layout. This is enforced at the component level via a `useReducedMotion` guard, not bolted on.

---

## What we will not do

- No decorative loops, floating particles, or ambient drift.
- No animating layout properties.
- No motion that delays content or interaction.
- No new motion idioms outside the vocabulary above — consistency is the point.
