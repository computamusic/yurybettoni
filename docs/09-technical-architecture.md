# 09 · Technical Architecture

How the site is built, how it stays fast, how Yury edits it, and what we still need before the build starts. Stack locked with the client: **Next.js (App Router) · Tailwind CSS · Framer Motion · Sanity CMS · mocked commerce.**

---

## 1. Stack & rationale

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js (App Router, React Server Components)** | Server-render by default → minimal client JS; route-level rendering control; image optimization built in. |
| Styling | **Tailwind CSS** | Design-system tokens (doc 06) become the theme; no runtime CSS-in-JS cost. |
| Motion | **Framer Motion** | Declarative, `whileInView`, `useReducedMotion`; only loaded where motion lives. |
| Content | **Sanity** | Non-technical editing for Yury; structured content maps to doc 03's model; live preview; CDN-delivered. |
| Commerce | **Mocked this phase** | Real purchase UX with placeholder data behind a clean seam (see §4). |
| Fonts | **`next/font` (self-hosted)** | `display: swap`, subsetting, no third-party font CDN round-trip. |
| Hosting | **Vercel** | Edge network, ISR, image CDN, preview deploys; first-class Next.js support. |
| Analytics | **Vercel Analytics + privacy-light events** | Real-user Core Web Vitals + the conversion proxies in doc 00. |

---

## 2. App structure (App Router)

```
app/
  layout.tsx                 root: Header, Footer, fonts, base theme (brand)
  page.tsx                   Home
  athlete/                   pillar (brand theme)
    page.tsx · story/ · timeline/ · philosophy/ · press/ · media/
  foundation/                pillar (foundation theme via TonalBoundary)
    layout.tsx               applies foundation palette + ease-soft
    alessandra/ · mission/ · impact/ · give/ · donate/
  work/
    page.tsx · courses/[slug]/ · coaching/ · speaking/ · events/[slug]/
  shop/
    page.tsx · [category]/ · product/[slug]/ · cart/
  subscribe/ · contact/ · (legal)/ · not-found.tsx
components/                  the inventory in doc 08 (ui/ · sections/)
lib/
  sanity/                    client, queries (GROQ), image-url, types
  commerce/                  MOCK adapter (see §4) — single seam to a real backend
  motion/                    variants + tokens (doc 07)
sanity/                      Studio (schemas from doc 03 content model)
```

Pillar theming is applied via a route-group/layout that sets the palette + motion easing, so `foundation/*` renders the tonal shift without per-component branching.

---

## 3. Rendering strategy (per route)

| Route type | Strategy | Notes |
|---|---|---|
| Home, Athlete, Foundation, Work hubs | **SSG + ISR** (revalidate on Sanity webhook) | Static + instant; content edits publish via webhook. |
| Course / event / product / press detail | **SSG (`generateStaticParams`) + ISR** | Pre-rendered from Sanity at build; revalidate on change. |
| Forms (inquiry, subscribe, donate, cart) | **Server Actions / Route Handlers** | Progressive enhancement; work without client JS where possible. |
| Account (later) | Dynamic | Out of scope until real commerce. |

Default to static. Client components only where interaction demands it (motion wrappers, cart, forms, filters) — kept as small leaf islands so the page ships minimal JS.

---

## 4. The commerce seam (mock now, real later)

All commerce flows through **one adapter interface** so swapping the backend touches no UI:

```ts
// lib/commerce/index.ts
interface CommerceAdapter {
  getProducts(): Promise<Product[]>
  getProduct(slug): Promise<Product>
  getCourses(): Promise<Course[]>
  createCheckout(items): Promise<{ url: string }>   // mock returns a fake success route
  // donations + RSVPs route through the same seam
}
export const commerce: CommerceAdapter = mockAdapter   // ← swap to shopify/stripe later
```

- **This phase:** `mockAdapter` reads placeholder product/course data (from Sanity or fixtures), renders full cart/checkout/donation UI, and resolves to a mocked success state. No payment processing, no PCI surface.
- **Later phase:** replace with a `shopifyAdapter` (Storefront API) for merch and/or `stripeAdapter` (Checkout) for courses/coaching/donations. UI, cart logic, and analytics events are already built against the interface.

---

## 5. Content & Sanity

- **Studio** embedded at `/studio` (or separate deploy); schemas implement the doc 03 content model 1:1.
- **Claim integrity:** `verified` boolean + `source` URL on `achievement`, `timelineEvent`, `pressItem`, `testimonial`; the UI can visually de-emphasize or hide unverified claims — credibility-through-specificity enforced in data.
- **Portable Text** for story/long-form, with custom serializers for `EditorialMedia`, pull-quotes, and the line device.
- **Image pipeline:** Sanity asset CDN → `next/image` with `srcset`, AVIF/WebP, blur-up placeholders, explicit dimensions (no CLS). One grade applied at the asset/treatment level (doc 06).
- **Preview:** Sanity Presentation / draft mode for live editing before publish.
- **Webhooks:** publish → revalidate affected routes (ISR tag-based).

---

## 6. Performance budget (the "instantaneous" target)

Measured on throttled **iPad-landscape (primary)** and mid-tier mobile:

| Metric | Target |
|---|---|
| LCP | < 2.0s (hero poster pre-rendered; video lazy) |
| INP | < 200ms |
| CLS | < 0.05 (explicit media dimensions; font-swap controlled) |
| TTFB | < 0.4s (edge/ISR) |
| JS shipped (route avg) | < 120KB gzip; home critical-path minimal |
| Lighthouse (mobile) | ≥ 95 perf / 100 a11y / 100 best-practice / ≥ 95 SEO |

**Enforcement:** Lighthouse CI + bundle-size check in the pipeline; budgets fail the build when exceeded. Techniques: RSC by default, route-level code-splitting, lazy hero video, `next/image`, `next/font`, prefetch on viewport for primary nav, transform/opacity-only motion (doc 07).

---

## 7. Accessibility (built in, not bolted on)

- WCAG 2.2 AA baseline: semantic landmarks, logical heading order, skip link, visible focus (2px accent ring), 4.5:1 contrast on text (palette verified in doc 06).
- Keyboard-complete: nav, forms, cart, accordions, timeline all operable; focus trapping in the mobile nav overlay.
- `prefers-reduced-motion` contract (doc 07) honored everywhere.
- Alt text required on Sanity images (schema validation); captions on editorial media.
- Forms: labels, error messaging that says what to do, programmatic association.
- Test gate: axe + keyboard pass per route in CI.

---

## 8. SEO & sharing

- Per-route metadata via the Metadata API; Open Graph / Twitter cards (art-directed OG images via `@vercel/og`).
- JSON-LD: `Person` (Yury), `Organization` (Foundation), `Product`, `Course`, `Event`.
- Sitemap + robots generated; canonical URLs; **301 redirect map** from notable legacy WordPress/GoSymba URLs (protect existing equity — build a redirect table from the live site before launch).

---

## 9. Phased roadmap

| Phase | Scope | Outcome |
|---|---|---|
| **0 — Foundations** *(next, on approval)* | Repo, Tailwind tokens (doc 06), motion lib (doc 07), Header/Footer/Hero, Sanity schemas, design-system page | A themed shell + living style guide |
| **1 — Flagship pages** | Home + one flagship page per pillar, mock content | The story works end-to-end; client reacts |
| **2 — Full pillars** | All Athlete/Foundation/Work routes; press, timeline, philosophy, events | Complete content site |
| **3 — Mocked commerce** | Shop, product, course detail, cart, donation, inquiry forms (mock adapter) | Full purchase/lead UX |
| **4 — Content load + verify** | Real copy, photography, video, verified claims into Sanity; perf/a11y/SEO hardening | Launch-ready |
| **5 — Real backend** *(later engagement)* | Swap mock adapter for Shopify/Stripe; account; live donations | Transacting site |

---

## Content Gaps Checklist

The build can start now with placeholders, but these are needed from the client before **Phase 4 / launch**. Flagged here so collection starts early.

**Verified facts (with sources)**
- [ ] Exact career claims — years on tour, ranking facts, the "youngest coach" claim (source or soften), players coached, titles.
- [ ] The Mary Pierce / 1997 Italian Open detail, phrased accurately.
- [ ] Certifications (USPTR, ISSA) and dates.

**Athlete**
- [ ] High-res action + portrait photography (rights cleared) for one grade.
- [ ] Hero film (short, ≤6s loop-able) + any documentary/interview footage.
- [ ] Press list: outlet, title, date, working link, logo.
- [ ] The 3 Y's content — final wording for mobility / stability / velocity.

**Foundation (highest-trust)**
- [ ] Alessandra's story — approved long-form copy in Yury's voice.
- [ ] **Impact data:** youth served, locations, seasons, outcomes — real numbers with sources.
- [ ] **Governance/transparency:** board, registration status, fund-allocation breakdown.
- [ ] Honest explainer: how the luxury events fund the mission.
- [ ] Dignity-first beneficiary photography (consent cleared).
- [ ] Donation destination + (later) payment processor details.

**Business**
- [ ] Course catalog: titles, outcomes, curriculum, pricing, level, media.
- [ ] Coaching/speaking: formats, what's-included, inquiry routing email(s).
- [ ] Events: real upcoming events, dates, locations, RSVP/registration method.
- [ ] Testimonials (named, consent cleared).

**Commerce / merch**
- [ ] GoSymba product data: titles, variants, prices, photography, cause-flag.
- [ ] Decision: keep "GoSymba" as a bridged sub-brand or fold fully under Yury Bettoni.
- [ ] Legacy URL list for the 301 redirect map.

**Brand / legal**
- [ ] Final say on tagline + Foundation name lockup.
- [ ] Logo/monogram assets (or commission a YB monogram).
- [ ] Privacy policy, terms, cookie/analytics consent stance.
- [ ] Confirm font licenses (PP Neue Montreal etc.) or approve the open-source alternates in doc 06.
