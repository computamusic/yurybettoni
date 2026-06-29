# 04 · User Journeys

Every journey runs the same spine — **inspiration → trust → emotion → conversion** — but enters at a different point and ends in a different goal. The job of the IA (doc 03) is to make each visitor's next step obvious without ever feeling pushed.

## Personas

| # | Persona | Who they are | What they want | Primary goal they serve |
|---|---|---|---|---|
| P1 | **The Aspiring Player / Parent** | A competitive junior, an adult improver, or a tennis parent. | To get better; to trust a method and a coach. | Course sale · coaching inquiry |
| P2 | **The Supporter / Donor** | Moved by the mission; values legacy and dignity. | To do something meaningful, transparently. | Donation · event support |
| P3 | **The Partner / Buyer** | Event organizer, brand, speaking booker, or merch customer. | A credible, premium partner or product. | Speaking/event inquiry · merch |
| P4 | **The Fan / Follower** | Knows Yury from social/press; curious. | To go deeper; to belong. | Email subscribe → future conversion |

---

## P1 — Aspiring Player / Parent

**Entry:** search or social → Home or `/athlete/philosophy`.

| Stage | Feeling | What they see | Page |
|---|---|---|---|
| Inspiration | "This guy is the real thing." | Cinematic hero, one line, verified stat layer. | Home |
| Trust | "He's coached at the highest level." | Timeline, Mary Pierce / top-player proof, press. | `/athlete/timeline`, `/athlete/press` |
| Understanding | "There's an actual method here." | The 3 Y's, explained with clarity and outcomes. | `/athlete/philosophy` |
| **Conversion** | "I want this — and I can start now." | Offer ladder: a course to start, coaching to go deep. | `/work/courses`, `/work/coaching` |

**Ends in:** course purchase (mocked) **or** coaching inquiry. **Fallback:** Subscribe for those not ready.

---

## P2 — Supporter / Donor

**Entry:** Home, a Foundation link, or an event → `/foundation`.

| Stage | Feeling | What they see | Page |
|---|---|---|---|
| Emotion | "This comes from a real place." | The tonal shift; Alessandra's story, in her son's voice. | `/foundation/alessandra` |
| Trust | "I can see where it goes." | Mission, who it serves, honest funding model, **impact data**. | `/foundation/mission`, `/foundation/impact` |
| Dignity | "This honors people, doesn't pity them." | Beneficiary-centered photography and copy. | `/foundation/mission` |
| **Conversion** | "I want to help." | Clear ways to give; frictionless donate. | `/foundation/give` → `/foundation/donate` |

**Ends in:** donation (mocked) **or** event support **or** a cause-merch purchase. **Fallback:** Subscribe to foundation updates.

> Critical: this journey must never feel like a sales funnel. Restraint and transparency *are* the conversion mechanism here.

---

## P3 — Partner / Buyer

**Entry:** referral or direct → Home, `/work/speaking`, `/work/events`, or `/shop`.

| Stage | Feeling | What they see | Page |
|---|---|---|---|
| Inspiration | "Premium. Credible. On-brand." | Confident hero; the world feels built. | Home |
| Trust | "Proven across arenas — sport, business, stage." | Achievements, press, speaking proof. | `/athlete`, `/work/speaking` |
| Fit | "He's right for our audience/event." | Clear what's-included, past events, formats. | `/work/speaking`, `/work/events` |
| **Conversion** | "Let's talk." / "I'll buy this." | Inquiry form (fast, specific) or premium product page. | inquiry form · `/shop/product/[slug]` |

**Ends in:** speaking/event inquiry **or** merch purchase. **Fallback:** Subscribe.

---

## P4 — Fan / Follower

**Entry:** social → any page.

| Stage | Feeling | What they see | Page |
|---|---|---|---|
| Inspiration | "I want to be inside this world." | Whatever page they land on feels coherent and rich. | any |
| Belonging | "There's more, and I want in." | Story, media, the mission. | `/athlete/media`, `/foundation` |
| **Conversion** | "Keep me close." | Low-pressure, well-written Subscribe. | sitewide `/subscribe` |

**Ends in:** email subscribe — the seed for every other goal later.

---

## The emotional arc, sitewide

```
INSPIRATION ───► TRUST ───► EMOTION ───► CONVERSION
  (Athlete)     (proof)    (Legacy)    (Business / give / subscribe)
   the hook    the receipts  the heart   the natural next step
```

The Athlete supplies inspiration and trust. The Legacy supplies emotion and meaning. The Business converts. A visitor can enter at any pillar, but the design always makes the *adjacent* feeling reachable in one move — so a fan becomes a believer, a believer becomes a customer or supporter.

## Conversion guarantees (design rules these journeys impose)

1. **One primary action per surface** (per doc 03 table) — never compete with yourself.
2. **Subscribe is always available** — no visit exits empty-handed.
3. **Proof is always upstream of price** — credibility before any ask.
4. **The Foundation never sells** — it invites, transparently.
5. **Every CTA names the outcome** — "Start the course," "Book Yury to speak," "Support a season," not "Submit."
