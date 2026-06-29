# 03 · Sitemap & Information Architecture

## The model: one world, three destinations

Navigation always reads as **Yury's world**. The three pillars are destinations *within* it, not separate sites. The orphaned Foundation branch and the disconnected GoSymba shop are reunited under one experience.

```
                          ┌─────────────────────────┐
                          │        HOMEPAGE         │
                          │  Who he is · why care   │
                          │   routes to 3 pillars   │
                          └────────────┬────────────┘
            ┌──────────────────────────┼──────────────────────────┐
            ▼                          ▼                          ▼
   ┌─────────────────┐       ┌──────────────────┐       ┌──────────────────┐
   │   THE ATHLETE   │       │   THE LEGACY     │       │   THE BUSINESS   │
   │  (credibility)  │       │  (Foundation)    │       │   (conversion)   │
   └────────┬────────┘       └────────┬─────────┘       └────────┬─────────┘
            │                         │                          │
   Story / Timeline           Alessandra's story          Courses
   Achievements & Press       Mission & impact            Coaching (inquiry)
   Philosophy (3 Y's)         How it's funded             Speaking
   Media                      Ways to give ──► DONATE     Events
            │                         │                   Shop (merch)
            └─── all roads also offer ─┴── Newsletter ─────┘ Product / Course detail
```

## Primary navigation

A single persistent header. Calm, few items, always escapable.

```
[ YB monogram ]      Athlete      Legacy      Work With Yury      Shop      [ Subscribe ]
```

- **Athlete** → the credibility pillar (story, achievements, philosophy, press, media).
- **Legacy** → the Foundation (tonal shift begins on click — see doc 06).
- **Work With Yury** → the Business hub (courses, coaching, speaking, events). Named for the visitor's intent, not "Business."
- **Shop** → merch storefront (mocked commerce).
- **Subscribe** → persistent, low-pressure email capture (the always-available micro-conversion).

Mobile/portrait: monogram + hamburger → full-screen overlay nav with the same five destinations and a Subscribe field at the base.

> **Naming principle (from frontend-design):** label by what the visitor wants, not by our internal structure. "Work With Yury," not "Business." "Legacy," not "Nonprofit."

## Full sitemap & URL structure

```
/                              Home
│
├── /athlete                   Athlete hub — story + proof
│   ├── /athlete/story         The narrative (Africa → Bollettieri → pro → coach → builder)
│   ├── /athlete/timeline      Career chronology (real years)
│   ├── /athlete/philosophy    The 3 Y's (mobility · stability · velocity)
│   ├── /athlete/press         "As seen in" — dated, linked, featured interviews
│   └── /athlete/media         Films, photo essays (retires the old "gallery")
│
├── /foundation                The Legacy hub — Alessandra Bettoni Foundation
│   ├── /foundation/alessandra Her story (the emotional core)
│   ├── /foundation/mission    Who it serves (Ethiopia, Tanzania), the model
│   ├── /foundation/impact     Outcomes & transparency (needs real data — doc 09)
│   ├── /foundation/give       Ways to support → donate / events / shop-that-gives
│   └── /foundation/donate     Donation flow (mocked this phase)
│
├── /work                      "Work With Yury" hub — the offer ladder
│   ├── /work/courses          Course catalog
│   │   └── /work/courses/[slug]   Course detail (mocked purchase)
│   ├── /work/coaching         Coaching → inquiry form (lead-gen)
│   ├── /work/speaking         Speaking → inquiry form
│   └── /work/events           Events listing + detail / RSVP
│       └── /work/events/[slug]
│
├── /shop                      Merch storefront (GoSymba as sub-brand, bridged)
│   ├── /shop/[category]       Category / collection
│   ├── /shop/product/[slug]   Product detail (mocked add-to-cart)
│   └── /shop/cart             Cart (mocked checkout)
│
├── /subscribe                 Email capture (also embedded sitewide)
├── /contact                   General contact + routes to specific inquiry forms
│
└── (system) /account · /privacy · /terms · /404
```

### URL principles
- Lowercase, hyphenated, human-readable; pillar prefix communicates context (`/athlete/...`, `/foundation/...`, `/work/...`).
- "Work With Yury" lives at `/work` (short, intent-named). Foundation keeps the recognizable `/foundation`.
- Stable slugs from Sanity; avoid query-string routing for primary content (SEO + shareability).
- Preserve/redirect notable existing URLs (301s) — map during build to protect SEO equity (e.g. old `/about`, `/y-system`, `/press`, GoSymba product URLs).

## The conversion architecture (every page has one job)

| Surface | Primary action | Secondary |
|---|---|---|
| Home | Enter a pillar | Subscribe |
| Athlete (any) | Continue the story / go to Work | Subscribe |
| Philosophy (3 Y's) | See courses/coaching | Subscribe |
| Foundation (any) | **Donate / give** | Subscribe |
| Courses | Buy a course | Subscribe |
| Coaching / Speaking | **Submit inquiry** | Subscribe |
| Events | **RSVP / register** | Subscribe |
| Shop / Product | Add to cart → checkout | Subscribe |

One primary CTA per surface. **Subscribe** is the universal fallback so no visit is wasted.

## Content model (maps directly onto Sanity — see doc 09)

Document types (singletons marked ⊙):

- ⊙ **siteSettings** — nav, footer, social, SEO defaults, the persistent CTA copy.
- ⊙ **homepage** — hero, pillar intros, featured pulls (references to the below).
- **storyChapter** — ordered narrative blocks (Athlete story; Alessandra story). Fields: title, year/era, body (portable text), media, pull-quote.
- **timelineEvent** — year, title, description, media, category, `verified` (bool + source URL).
- **achievement** — label, value, context, `verified` + source. (Powers the stat layer.)
- **pressItem** — outlet, title, date, url, logo, type (interview/feature/mention).
- **philosophy / theY** — the 3 Y's: each Y has name, principle, detail, media.
- ⊙ **foundation** — mission, model, the "how luxury funds the mission" explainer.
- **impactMetric** — label, value, source, year (transparency-first).
- **givingOption** — title, description, type (donate/event/shop), target.
- **course** — title, slug, summary, outcomes[], curriculum[], price, media, level.
- **service** — type (coaching/speaking), description, what's-included, inquiry routing.
- **event** — title, slug, date, location, description, capacity, RSVP/register link.
- **product** — title, slug, category, price, variants, images, description, `cause` flag (GoSymba-gives).
- **person / testimonial** — name, role, quote, photo, `verified`.

Every "claim-bearing" type (`achievement`, `timelineEvent`, `pressItem`, `testimonial`) carries a **`verified` flag + source** so the credibility-through-specificity principle is enforced in the data, not just the design.

## Foundation: integrated, not severed

The Foundation is a first-class pillar at `/foundation` inside the same app, header, and footer — but crossing into it triggers the **tonal shift** (doc 06): serif voice, paper ground, warmer light, slower motion. It belongs to Yury's world while unmistakably being the part that isn't for sale. The "luxury events fund the mission" logic gets an explicit, honest explainer on `/foundation/mission` to resolve the dissonance flagged in the audit.
