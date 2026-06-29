# 01 · Existing Site Audit

**Subject:** the current [yurybettoni.com](https://yurybettoni.com) — a WordPress build (footer credit: "Brew by Coffee Creative Studio"), with the shop branded separately as **GoSymba** and the **Foundation** on a side branch.

This audit is a teardown, not a critique for its own sake. Each finding maps to a decision in the new IA (doc 03) or design system (docs 06–07).

---

## Method

- Reviewed the live pages: Home, About, Y-System, Press, Gallery, Foundation, the GoSymba shop, and My Account.
- Read primary copy and CTAs on About and Foundation in full.
- Inferred platform/performance characteristics from markup, asset patterns, and the WordPress/WooCommerce structure.

> ⚠️ **Verify before build:** treat performance numbers as directional until we run a Lighthouse/WebPageTest pass on the live URL with the client's permission, on a throttled iPad-landscape + mobile profile. The *patterns* below are reliable; exact metrics are not yet measured.

---

## Page-by-page teardown

### Home
- **Purpose:** route visitors into the ventures.
- **Works:** strong source photography exists; the ambition (athlete + brand + cause) is visible.
- **Confusing:** no single statement of who Yury is and why to care; the three pillars aren't framed as one world. Visitors must self-assemble the story.
- **Unnecessary:** motion that decorates rather than directs attention. Multiple competing CTAs with no hierarchy.

### About
- **Purpose:** establish credibility and tell the story.
- **Works:** a genuinely compelling arc exists (IMG/Bollettieri → pro → coaching top players → business → philanthropy); the tagline *"Be the architect of your own destiny"* is a keeper.
- **Confusing:** chronology and themes are tangled; the page pivots into service offerings mid-story.
- **Unnecessary / risky:** heavy credential-listing reads as boastful; claims like *"youngest coach to coach top-ranked players"* are **unverified** and need sourcing or softening; vague business details (Italkraft) dilute focus. Few concrete, quantifiable achievements.
- **Fix → doc 03/04:** split "story" (emotional, linear) from "proof" (verifiable achievements) from "offerings" (business). Credibility through *specificity*, not adjectives.

### Y-System
- **Purpose:** present the proprietary training methodology (the "3 Y's": mobility, stability, velocity), plus a coach directory and nutrition.
- **Works:** the 3 Y's is a real, ownable framework — a genuine asset.
- **Confusing:** sits between "philosophy" and "product." Is it a story, a course, or a service? Unclear how to *act* on it.
- **Fix:** position the 3 Y's as the philosophy that bridges Athlete → Business; the *purchasable* expression becomes courses/coaching with clear pricing.

### Press
- **Purpose:** social proof via media appearances.
- **Works:** third-party validation is exactly what the credibility pillar needs.
- **Confusing/unnecessary:** if it's a bare logo wall or stale links, it underdelivers. Needs real outlets, dates, and links to be trusted.
- **Fix:** fold into the Athlete pillar as a tight, dated, linked "As seen in" + featured-interview module.

### Gallery
- **Purpose:** photos of activities and people.
- **Works:** humanizes the brand; raw material for an editorial experience.
- **Confusing/unnecessary:** an undifferentiated grid with no captions or story is decoration. Likely a heavy, unoptimized image payload.
- **Fix:** retire the standalone "gallery" concept; redeploy the best images as editorial media *inside* story sections, with intent and captions.

### Foundation (the Alessandra Bettoni Foundation)
- **Purpose:** honor Alessandra; invite support for youth in Ethiopia and Tanzania.
- **Works:** a clear narrative arc, a real "Donate Today" CTA, and transparency about fund allocation. The personal story (*"Africa teaches the real, basic values of life"*) is moving and authentic.
- **Confusing / on a side branch:** it reads as a *separate site*, severing the emotional center from the brand. The revenue model (Y-System + GoSymba + luxury driving events fund the foundation) is interesting but under-explained.
- **Risky:** luxury experiences (casino rallies, fine dining, supercar events) sit awkwardly beside a poverty-focused mission — potential cognitive dissonance. No quantifiable impact (beneficiaries, outcomes), no governance/board info — both erode donor trust.
- **Fix → doc 03/06:** bring the Foundation *into* the brand with a deliberate **tonal shift** (quieter, serif, paper-grounded). Lead with dignity and impact; make the "how luxury funds the mission" logic explicit and honest. Flag impact data + governance as required content (doc 09).

### Shop — "GoSymba"
- **Purpose:** sell apparel/accessories (~$8–$55: tees, performance wear, hats, wristbands, bags).
- **Works:** a real catalog and price points exist; a streetwear brand with a cause angle is differentiated.
- **Confusing:** the **GoSymba** name is disconnected from "Yury Bettoni" — visitors don't know it's the same world. Standard WooCommerce styling undercuts the premium positioning.
- **Fix:** unify under the Business pillar with a premium, editorial commerce UX (mocked this phase). Keep "GoSymba" only if it's a deliberate sub-brand with an explicit bridge back to Yury.

### My Account
- **Purpose:** WooCommerce account/login.
- **Works:** functional necessity for commerce.
- **Confusing/unnecessary:** default WooCommerce chrome breaks the brand. Low priority until real commerce lands.
- **Fix:** out of scope while commerce is mocked; design a branded account surface when the backend is wired.

---

## Consolidated issues

### Performance bottlenecks (to confirm with a live audit)
- **WordPress + plugin stack:** typical render-blocking CSS/JS from theme + WooCommerce + slider/animation plugins; jQuery and multiple stylesheets.
- **Unoptimized media:** gallery/hero imagery likely served oversized, un-lazyloaded, and without modern formats (AVIF/WebP) or responsive `srcset`.
- **No edge/static delivery:** dynamic PHP rendering per request; little to no static caching or CDN image optimization.
- **Animation cost:** plugin-driven effects animating layout properties (top/left/width) rather than GPU-friendly transform/opacity → jank, especially on iPad.
- **Third-party weight:** social embeds, fonts loaded without `display: swap`, analytics/marketing scripts.
- **Net effect:** slow first paint and poor interaction readiness — the opposite of the "instantaneous" target.
> The new architecture (doc 09) answers each of these directly: static/ISR rendering, an optimized image pipeline, transform/opacity-only motion, and a hard performance budget.

### UX issues
- **No through-line:** three pillars presented as separate ventures; the person is missing.
- **Orphaned Foundation & shop:** the emotional center and the commerce both live "elsewhere."
- **Weak conversion paths:** competing CTAs, unclear next step per page, no single action per section.
- **Credibility gaps:** unverified superlatives instead of specific, sourced proof.
- **Foundation trust gaps:** no impact metrics, no governance, luxury/charity tension unaddressed.
- **Navigation load:** flat menu of ventures rather than a guided journey.

### Visual inconsistencies
- Multiple visual languages collide: marketing-site hero styling vs. default WooCommerce shop vs. a differently-skinned Foundation.
- No consistent type scale, spacing rhythm, or button system across sections.
- Stock-photo and lifestyle imagery mixed without a unifying treatment (no consistent grade, crop ratio, or grain).
- Inconsistent use of motion — present in some areas, absent in others, with no shared language.

---

## What we keep (assets worth carrying forward)

- The **tagline** — *"Be the architect of your own destiny."*
- The **3 Y's** framework (mobility, stability, velocity).
- The **Alessandra story** and the Africa origin — the emotional core.
- The **career proof points** (Bollettieri/IMG, Mary Pierce 1997 Italian Open, top-player coaching) — once verified and sourced.
- The **best source photography** — recropped and graded to one treatment.
- A **real product catalog** and price architecture to design commerce around.

## What we retire

- The four-front-doors mental model.
- The side-branched Foundation and the disconnected GoSymba identity (as *separate worlds*).
- Decorative, layout-animating motion.
- Boastful, unverified copy.
- Default WooCommerce/WordPress visual chrome.
