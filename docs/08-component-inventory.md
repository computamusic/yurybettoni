# 08 · Component Inventory

The reusable parts that build every page in doc 03. Grouped atom → molecule → organism. Each entry: purpose · key variants/states · where used. This is a build checklist — if a page in the sitemap needs something not listed here, the list is wrong, not the page.

**Conventions:** every component is themeable from doc 06 tokens; every interactive component has `default / hover / focus-visible / active / disabled` states and a reduced-motion path (doc 07). Pillar theming is a prop (`brand` | `foundation`) that swaps the palette + motion easing — components are written once.

---

## Atoms

| Component | Purpose | Variants / states | Used on |
|---|---|---|---|
| `Button` | The single action | primary · secondary · quiet/text; loading; pillar-themed | everywhere |
| `Link` | Inline + animated-underline link | default · nav · footer | everywhere |
| `Eyebrow` | Mono uppercase label above headings | brand · foundation | sections |
| `StatValue` | Mono number with `count-up` | with/without label; verified badge | hero, impact |
| `Tag` / `Badge` | Category, level, "cause-gives" flag | neutral · accent · cause | shop, courses |
| `Icon` | Line icon, 1.5px | sized sm/md | sparingly |
| `Divider` | The line device | hairline · strong · full-bleed; `draw-line` | sections |
| `Input` / `Textarea` | Underline field | default · focus · error; floating label | forms |
| `Select` / `RadioGroup` | Choice controls (e.g. inquiry intent) | — | forms |
| `Price` | Mono price display | regular · sale | shop, courses |
| `Avatar` | Person / testimonial photo | — | testimonials, foundation |

## Molecules

| Component | Purpose | Variants / states | Used on |
|---|---|---|---|
| `CTAButtonRow` | One primary + optional quiet secondary | enforces single-primary rule | section ends |
| `MediaFrame` | Fixed-ratio image/video frame with `frame-scale` | 3:2 · 4:5 · 16:9; grain on/off; lazy | everywhere |
| `PillarCard` | Routes to a pillar | athlete · legacy · work | home |
| `ProductCard` | Merch tile | default · cause-flagged · sold-out | shop |
| `CourseCard` | Course tile (outcome-led) | level variants | work/courses |
| `EventCard` | Event tile | upcoming · past | work/events |
| `PressItem` | Outlet · title · date · link | logo · text | athlete/press |
| `TimelineEvent` | Year (mono) + event | milestone · standard; verified | athlete/timeline |
| `StoryChapter` | Numbered media+text block | media-left · media-right | story, alessandra |
| `YCard` | One of the 3 Y's | mobility · stability · velocity | philosophy |
| `ImpactMetric` | Number + source (transparency) | — | foundation/impact |
| `GivingOption` | Donate / event / shop-gives choice | — | foundation/give |
| `Testimonial` | Quote + person | — | work, athlete |
| `NewsletterField` | Inline email capture | compact · band; success/error | sitewide |
| `Accordion` | FAQ / curriculum | — | course detail, FAQ |
| `StickyBuyBar` | Persistent buy on scroll (mobile) | course · product | detail pages |

## Organisms

| Component | Purpose | Variants / states | Used on |
|---|---|---|---|
| `Header` | Persistent nav with `solidify` | transparent→solid; active-pillar underline; mobile overlay | all |
| `Footer` | Pillars · social · contact · legal | brand · foundation | all |
| `Hero` | Cinematic opener + "The Baseline" | home · pillar · foundation (serif); video/photo | tops of pages |
| `PillarRouter` | The 3-pillar choice block | — | home |
| `StatLayer` | Row of verified `StatValue`s | brand · foundation(impact) | home, athlete, foundation |
| `StorySequence` | Ordered `StoryChapter`s, scroll-revealed | — | athlete/story, foundation/alessandra |
| `TimelineRail` | Scroll-linked horizontal timeline | — | athlete/timeline |
| `YSystemBlock` | The three `YCard`s + intro | — | philosophy, home teaser |
| `PressWall` | Dated, linked `PressItem`s + featured | — | athlete/press, home |
| `OfferLadder` | Free→high offer overview | — | work hub |
| `ProductGrid` | Filterable `ProductCard`s | category filter; empty state | shop |
| `CourseDetail` | Outcome-led course sell + `StickyBuyBar` | — | course detail |
| `InquiryForm` | Intent-routed lead capture | coaching · speaking · events; success state | work, contact |
| `Cart` | Mocked cart + checkout summary | empty · items · mocked-checkout | shop/cart |
| `GivingBlock` | `GivingOption`s + donate CTA | — | foundation/give |
| `DonationForm` | Mocked donation flow | amounts · custom; success | foundation/donate |
| `SubscribeBand` | Full-width email capture | brand · foundation | sitewide |
| `EditorialMedia` | Art-directed media + caption (retires "gallery") | single · pair · full-bleed | media, story |
| `TonalBoundary` | Wrapper that applies `cross-shift` + foundation theme | — | foundation routes |

---

## Coverage check (every page in doc 03 is buildable)

| Page | Built from |
|---|---|
| Home | Header · Hero · StatLayer · PillarRouter · StorySequence(teaser) · TonalBoundary(teaser) · PressWall · SubscribeBand · Footer |
| Athlete hub/story/timeline/philosophy/press/media | Hero · StorySequence · TimelineRail · YSystemBlock · PressWall · EditorialMedia · CTAButtonRow |
| Foundation alessandra/mission/impact/give/donate | TonalBoundary · Hero(serif) · StorySequence · StatLayer(impact) · ImpactMetric · GivingBlock · DonationForm |
| Work hub/courses/coaching/speaking/events | Hero · OfferLadder · CourseCard grid · InquiryForm · EventCard · CTAButtonRow |
| Course detail | CourseDetail · Accordion · StickyBuyBar · Testimonial |
| Shop / product / cart | ProductGrid · ProductCard · MediaFrame · Price · Cart · StickyBuyBar |
| Contact | InquiryForm |
| Subscribe | SubscribeBand |

No gaps. Conversely, every organism above maps to at least one page — no orphan components.
