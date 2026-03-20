# VELORA Living - Phase 2 Roadmap & Next Steps

With the core architecture, visual identity, main landing page, and internationalization (i18n) routing firmly established, the project is ready to move into Phase 2. 

The primary focus of Phase 2 is the creation of the dynamic **"Embajadas Estéticas"** (Country Pages) and the integration of the simulated **NLP (Natural Language Processing) Search**.

## Next Steps

### 1. Dynamic Country Routing Architecture
To support the 8 European regions, we need to implement dynamic routing that natively supports the existing `next-intl` infrastructure.
- **Goal:** Create the `src/app/[locale]/[country]/page.tsx` dynamic route.
- **Mechanics:** 
  - Ensure `[country]` dynamically accepts `nl`, `fr`, `es`, `pt`, `it`, `de`, `be`, `gr`.
  - The dynamic page must ingest the country ID and trigger the specific CSS theme overrides (`data-country="NL"`) onto the primary `<body>` or `<main>` wrapper so the background colors and typography shift to that specific country's aesthetic automatically upon navigation.

### 2. Country Data Structure (Mock DB)
We cannot hardcode 8 different page layouts. We must build a unified, data-driven "Country Profile" component.
- **Goal:** Create a structured JSON datastore (e.g., `src/data/countries.ts`) that acts as a headless CMS mock.
- **Schema Requirements:**
  - `countryId`: Identifier (e.g., "NL")
  - `themeValues`: Any specific token overrides required beyond CSS.
  - `heroImage`: The flagship image for the country header.
  - `editorialText`: Philosophy paragraphs specific to that region's architectural history.
  - `properties`: An array of mock properties (images, prices, locales) available in that country.

### 3. Building the "Embajadas" Layout Engine
With the data schema in place, we will build the reusable country page template.
- **Goal:** Design the `CountryTemplate.tsx` component.
- **Components:**
  - A specialized Hero that adapts to the country's tone.
  - An Editorial section replacing the global "Philosophy" with localized architectural storytelling.
  - A highly visual, asymmetrical Property Grid showcasing the available listings in that specific country.
  - Smooth Lenis scroll syncing and GSAP reveal animations inherited from the main page components.
- **Initial Implementation:** We will build and test the **Netherlands (NL)** and **France (FR)** pages first to verify the dynamic CSS token swapping works smoothly.

### 4. NLP Smart Search Simulation
The main landing page has a "Concierge Search" section that prompts the user to type natural language (e.g., *"A serene Bauhaus loft in Berlin with morning light"*).
- **Goal:** Build the interactive UI for this search block.
- **Mechanics:**
  - Create a full-screen or modal overlay that captures the user's input.
  - Create a "thinking" animation simulating an AI parsing the prompt.
  - Design a "Results" interface that cross-references the mock database (from Step 2) and surfaces the closest conceptual matches.

### 5. Final Polish & Performance Audit
Once the country pages and search are functional, a final pass will be made.
- **Goal:** Ensure "Silent Premium" standards are met globally.
- **Mechanics:**
  - Cross-device QA (checking Embla carousels and GSAP triggers).
  - Performance audit (Lighthouse scores, image optimization checks).
  - Final copywriting review.
