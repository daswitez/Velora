# Base Components and Micro-Interactions

## Overview
The functional elements of VELORA Living (the core User Interface) maintain a neutral, sober, and millimeter-precise appearance. They are the "hardware" of the site. Countries add local "color" through photography or chromatic background tweaks, but buttons, forms, and navigation bars uphold a unified global signature.

## Master Components

### 1. Shared Navigation (Global Nav)
- **Aesthetic:** Ultra-thin, sober, and extremely precise.
- **Behavior:** Often transparent over the *Hero* to give protagonism to the architectural vision, revealing a refined anchor color upon scrolling.
- **Structure:** Dropdown menus free of generic dark boxes or heavy drop shadows (`box-shadow`). Utilizing fine hairlines (1px bounds) or subtle opacity separators instead.

### 2. Property Cards / Editorial Cards
- **Format:** Exceptionally large photography. Great care is placed on cropping (aspect ratio).
- **Information:** Hierarchical text breakdown. A serif or semi-bold sans title, supported by technical meta-information (price, sqm, operation type) cleanly placed below in a small but highly legible font size.

### 3. Filters and NLP Search (Smart Search Component)
- **Display:** The natural language search field must not look like a generic terminal. It must look like the typing bar of a high-end digital concierge.
- **UX Example:** A clear and spacious line inviting: *"Search naturally. e.g. A bright apartment in a walkable neighbourhood..."*

## Micro-Interactions and Animations
- **"Delicate" Directive:** Zero bounces, zero abrupt scaling.
- **Hover Execution:** Hovering over a country or property must be poetic:
  - Slight slow panning movements inside the contained image.
  - Data revealing through *fade-in* alongside an extremely slight Y-axis offset.
  - Buttons revealing arrows or changing background color using extended-latency `ease-out` transitions (e.g., `duration-500` or `700ms`) instead of abrupt, standard button flashes.
