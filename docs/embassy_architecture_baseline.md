# Embassy Page Architecture Baseline

**Purpose:** This document dictates the structural sequence (DOM Order) for all international Embassy pages (e.g., France, Germany, Spain). 

**Critical Rule:** This blueprint enforces the *order of sections* and the *data flow*. It does **NOT** enforce CSS, animations, typography, or boundary radiuses. Every single country must inject its own unique aesthetic identity, GSAP mathematics, and spatial paddings as defined by their respective cultural manifesto (e.g., `01_netherlands.md`).

---

## 1. The Hero (`[CC]Hero.tsx`)
**Role:** The grand architectural entrance.
- **Components:**
  - Country-specific display typography (massive `h1`).
  - Immersive regional background (static image or subdued video loop).
  - The "Concierge" module (AI Search integration) overlaying the hero, allowing users to bypass standard navigation.

## 2. The Cultural Ethos (Editorial Section)
**Role:** A purely narrative block that explains the *design philosophy* of that specific country.
- **Components:**
  - Embedded directly in `page.tsx` or as `[CC]Ethos.tsx`.
  - A sophisticated photo displaying specific native architecture (e.g., massive windows for NL, stone farmhouses for IT).
  - High-impact editorial text translated entirely into the native language, focusing on *why* people buy property there (e.g., Netherlands = "The Cult of Light").

## 3. Flagship Curation (`[CC]Flagship.tsx`)
**Role:** The absolute pinnacle of the portfolio. Magazine-style presentation of the top 2 properties.
- **Components:**
  - Staggered, asymmetrical image and data pairs.
  - Large-scale imagery.
  - Minimalistic property data (price, beds, location) treated as secondary typography.
  - Interactive GSAP ScrollTriggers (must be tailored per country: snapping for NL, fluid fading for FR, etc.).

## 4. Regional Bento Layout (`[CC]Regions.tsx`)
**Role:** Navigating the country via geography instead of spreadsheets.
- **Components:**
  - A CSS Grid (often an asymmetrical Bento Box layout).
  - Image-driven cards representing regions (e.g., "Grachtengordel", "Provence", "Andalucía").
  - Hover interactions that invite the luxury buyer to explore specific historical sectors.

## 5. The Market Index (`[CC]Market.tsx`)
**Role:** The exhaustively functional database, elegantly disguised.
- **Sequence within the Market Component:**
  1. **Header & Indices:** Title of the collection alongside severe metric counters (Sale Index, Rental Index).
  2. **Curatorial Lifestyle Previews:** (Crucial UX element). A 4-column carousel/grid of large images depicting cultural archetypes (e.g., "Waterfront Heritage" or "Tuscan Vineyards"). Clicking these visually filters the properties below by linking to their `.features` array.
  3. **Strict Data Filters:** Granular filtering options (Operation, Region, Property Type, Budget, Bedrooms, Spatial Mood).
  4. **The Concierge Fallback:** A mirror of the Hero AI Search module injected *right before* the property list, serving as a safety net for users overwhelmed by the filters.
  5. **Paginated Grid Array:** The actual rendered listing cards restricted via controlled mathematical pagination (e.g., 4 or 6 items per page) to prevent DOM overloading.

---

### Implementation Mandates for New Embassies:
1. **Never inherit CSS classes blindly.** If `NLMarket` uses `rounded-none`, do not copy it to `FRMarket` unless French identity dictates brutal rectilinearity (it usually dictates classical curves).
2. **Translate Everything.** Ensure all static strings reside deeply inside `en.json` and `[cc].json`.
3. **Decouple Components.** France must not import from `nl/components/`. All structural files must be re-written or safely cloned and isolated into `fr/components/FR*.tsx` to guarantee zero cross-contamination.
