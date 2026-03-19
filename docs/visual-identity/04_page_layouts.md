# Visual Hierarchy and Page Layouts (Master Grid)

The skeleton of the local pages ("Embassies") of VELORA Living obeys a strict mastery of the 12-column CSS Grid. The manner in which we place content dictates the perception of luxury. This is not an infinite, jammed listing of houses; it is an immersive experience.

---

## 1. The Main Hero (The Immersion)
- **Graphic Structure:** Full-bleed image or video spanning all 12 columns in maximum width (`vw-100`), or an alternatively highly editorial composition taking up 10 centered columns.
- **Visual Goal:** The Hero of each country establishes the "mood". The chosen *Display* typography (e.g., Classic Serif in France vs. Neo-Grotesque in Holland) is overlaid with massive contrast or structured in a *split* model (50% left screen for text, 50% right screen for edge-to-edge photography).

## 2. The AI Assistant / NLP Search (Smart Search)
- **Graphic Structure:** Centralized component, occupying the 8 central columns (focusing the vision, avoiding lateral distractions).
- **The Challenge:** It cannot look like the utilitarian search bar of an outdated portal. It must visualize almost like the command bar of a luxury *Concierge*.
- **Look & Feel:** Large inputs, devoid of sharp or heavy borders, employing functional typography at an extra-large scale. Extremely soft shadows (`shadow-sm`) and slow transitions.
- **Placeholder Text:** Dynamically changes per country, inviting: *"Ask VELORA. e.g. A luminous character property in Lisbon."*

## 3. Premium Gallery (The Property Listing)
- **The Industry Mistake:** Compressing 4 or 5 minuscule properties per row to force volume.
- **The VELORA Solution:** 
  - **Minimum Desktop Resolution:** A grid of 2 cards (occupying 6 columns each) or 3 cards (occupying 4 columns, bounded by `gap-8`). 
  - **Photographic Aspect Ratio:** Vertical or striking panoramic horizontal. Zero messy crops. Enormous protagonism awarded to the first photo.
  - **Data Hierarchy (Below the Photo):** 
    1. Tiny, elegant Neighborhood/Tag label.
    2. Main Title (Short address or Property Name) in the country's Display Typography.
    3. Price and sqm in Functional Typography (tabular numbers).

## 4. Filters and Organization (Taxonomy)
- **Graphic-Technical Structure:** Two permitted formats depending on local market density:
  - *Option A (Sticky Sidebar):* The grid splits into 3 fixed left columns (Utilitarian Filters) and 9 rightward scrolling Gallery columns.
  - *Option B (Minimalist Top Bar):* Hidden underneath an ultra-thin, sober "Filter & Refine" component before the gallery begins. Preferable so as not to steal width (air) from the photography.

## 5. Editorial Intermission Zones
To prevent the visual fatigue of scrolling endlessly through homes, we inject editorial blocks (e.g., *Curated Collections*, *Life in Milan*).
- **Graphic Structure:** Asymmetrical blocks. 7 columns dedicated to a giant lifestyle photograph, 5 empty columns featuring hyper-refined text narrating the value of the neighborhood. This injects pure brand status (Magazine Layout) right in the middle of a transaction.
