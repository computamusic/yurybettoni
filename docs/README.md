# Yury Bettoni — Website Rebuild

**Strategy & Design Documentation Set**
Pre-development deliverables for the ground-up rebuild of [yurybettoni.com](https://yurybettoni.com).

This folder is the complete brief the build will follow. No application code is included in this phase — the decisions here (information architecture, design system, motion language, technical architecture) are meant to be executed directly once approved.

## Reading order

| # | Document | Read it to understand… |
|---|---|---|
| 00 | [Overview & North Star](./00-overview.md) | The vision, the three-pillar story, the brand promise, and how everything below fits together. **Start here.** |
| 01 | [Existing Site Audit](./01-existing-site-audit.md) | What the current WordPress site does, what's broken, and what we're explicitly fixing. |
| 02 | [Competitive Analysis](./02-competitive-analysis.md) | What world-class athlete, luxury, coaching, and editorial sites do — and which patterns we borrow. |
| 03 | [Sitemap & Information Architecture](./03-sitemap-information-architecture.md) | Every page, the navigation model, URL structure, and the content model that maps onto Sanity. |
| 04 | [User Journeys](./04-user-journeys.md) | Who visits, what they feel, and how each journey ends in a goal. |
| 05 | [Wireframes](./05-wireframes.md) | The structural skeleton of the key pages, section by section. |
| 06 | [Design System](./06-design-system.md) | Type, color, spacing, grid, components — as build-ready tokens. |
| 07 | [Motion System](./07-motion-system.md) | The motion language and its performance rules. |
| 08 | [Component Inventory](./08-component-inventory.md) | The full component library checklist for the build. |
| 09 | [Technical Architecture](./09-technical-architecture.md) | Next.js + Sanity + commerce structure, performance budget, accessibility, deployment, and the phased roadmap. |

## The decisions already locked

- **Deliverable this phase:** research & design documents only — no code yet.
- **Stack (to be built next phase):** Next.js (App Router) · Tailwind CSS · Framer Motion.
- **Content:** Sanity headless CMS, so Yury can edit without a developer.
- **Commerce:** premium purchase UX is *mocked* now; a real backend (Shopify / Stripe) is wired in a later phase.
- **Primary viewport:** iPad landscape (desktop layout) — but every breakpoint is designed deliberately.

## What we still need from the client

Before the build starts, see the **Content Gaps Checklist** at the end of [09-technical-architecture.md](./09-technical-architecture.md#content-gaps-checklist) — the verified facts, photography, video, and product data the new site needs.
