# Layout Blueprint: Main Landing Page

The layout of the Diplomatic Headquarters is designed less like a traditional software interface and more like a high-end architectural magazine spread. It intentionally avoids grids packed with information in favor of sweeping, deliberate pacing.

## Visual Hierarchy & Flow

### 1. The Gateway (Initial Viewport)
- **Hierarchy:** 1st Level (Immediate Brand Establishment).
- **Structure:** Takes up completely 100% of the screen height (`100vh`). 
- **The "Why":** We command the user's absolute attention the moment they enter. By leaving no other UI elements visible besides the pristine structural photography and the core brand typography, we enforce the "Silent Premium" rule. The user must scroll intentionally to proceed, removing the chaotic "browse" mentality.

### 2. The Cultural Authority ("Featured In")
- **Hierarchy:** 2nd Level (Silent Validation).
- **Structure:** A razor-thin, monochromatic ribbon of logos (e.g., *Architectural Digest*, *Monocle*, *Vogue Living*, *Financial Times*), deeply desaturated with low opacity (`opacity-40`) spanning the grid.
- **The "Why":** It immediately establishes VELORA not just as a real estate agency, but as an internationally recognized curation authority. It answers the subconscious question of trust without shouting or breaking the aesthetic balance.

### 3. The Global Curation (The Exploration)
- **Hierarchy:** 3rd Level (Desire Generation).
- **Structure:** A highly manicured, asymmetrical masonry grid (or elegant vertically stacked scroll). It features exactly 8 flagship properties—a tiny taste of each country. 
- **The "Why":** We have to prove the value of our curation right on the home page. Showing a 19th-century Parisian Haussmann apartment next to a sun-baked Cycladic villa in Greece creates breathtaking visual contrast. It transforms the site from a "directory" into a global lifestyle moodboard, making the user *want* to explore the individual embassies.

### 4. The Embassy Portals (Country Selection)
- **Hierarchy:** 4th Level (Action / Routing).
- **Structure:** A horizontally expansive Embla carousel that breaks out of standard containers, bleeding to the edges of the screen.
- **The "Why":** Horizontal arrangement (especially when navigated via smooth swiping or GSAP scroll-jacking) physically feels distinct from vertical reading. It subconsciously implies walking through a curated gallery, viewing distinct national identities side-by-side, rather than scrolling through an endless feed of content.

### 5. The Concierge Terminal (AI Search)
- **Hierarchy:** 5th Level (Bespoke Utility).
- **Structure:** Contained perfectly within the central columns of our 12-column grid. It is surrounded by an immense amount of negative space (`py-48`).
- **The "Why":** After the visual stimulation of the European photography, we instantly reduce cognitive load to near absolute zero. A single, elegantly styled input centered in emptiness. The vast negative space acts as a physical brake—commanding the user to stop scrolling, breathe, and start typing their hyper-specific lifestyle request.

## Global Rules Implemented

- **The Negative Space Mandate:** The layout must never feel constrained or rushed. We do not stack sections tightly. We use extreme vertical padding between the Hero, the Carousel, and the Search Terminal to give the eye a distinct moment of rest.
- **Typography as Architecture:** Because visible UI boxes, heavy cards, and thick borders are strictly forbidden (as per our `interaction-design` rules), the typographic blocks themselves—combining the weight of `Playfair Display` and the precision of `Inter`—become the mathematical pillars that construct the grid.
