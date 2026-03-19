# Adaptability Rules (Fixed vs. Fluid)

The greatest technical and design challenge in VELORA Living is governing mutability. If everything changes, the platform breaks, perceived as a series of chaotic sites. If nothing changes, it falls into the generic "tech-bro" aesthetic we strive to avoid.

This is the strict borderline between **The Constant** and **The Adaptable**.

## 1. The Constant (Untouchable Design Rules)

These elements constitute the UX/UI engineering that never mutates from country to country, guaranteeing familiarity and trust.

- **The Master Grid:** A strict 12-column system (max 1440px). Everything rests upon this mathematical axis.
- **Spacing and "Air" (Spacing Tokens):** Padding variables between sections (e.g., `py-24`, `gap-8`) remain identical to ensure the same reading rhythm across any market.
- **Functional Typography (UI Text):** Buttons, prices, meta-data (sqm), navigation bars, and filter menus will always use the same hyper-legible Sans-Serif (e.g., *Inter* or *Geist*) in all embassies to prevent cognitive friction during browsing.
- **Component Anatomy:** The "geometry" of a property card (where the image goes, where the price sits) is immutable.
- **Micro-interactions:** Hover behaviors and animation timings (always slow, *ease-out*, bounce-free) remain heavily standardized.

## 2. The Fluid (Cultural Adaptation Variables)

This is where the "Aesthetic Embassy" factor kicks in. These tokens change based on the URL of the country being visited.

- **Display Typography (Headlines):** The large typography that narrates the soul of the page (Hero, Property titles, Editorial titles) changes to reflect the architectural culture of the country.
- **Color Palettes:** Backgrounds, surface colors, and accented CTAs mutate responding to the geography, climate, and historical materials of the region.
- **Photographic Direction:** Lighting temperature, proportion of shadows (dark in Belgium, bright in Spain), and framing (wide-open vs. intimate tight shots).
- **Editorial Copy Tone:** Modulation ranging between a highly rational/precise tone (Germany) vs. a warmer/passionate one (Italy).
