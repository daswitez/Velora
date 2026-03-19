# UI Foundations & Visual Assets

We leverage industry-leading libraries, but they must be severely stripped of generic "SaaS" aesthetics to fit VELORA's editorial direction.

## 1. shadcn/ui
**Role:** Accessible, unstyled UI bedrock.
- **Integration:** We will use it for complex components (Dialogs, Selects, Accordions, Sliders). 
- **The Adaptation:** Out-of-the-box, shadcn can look too "dashboard-heavy". We will rewrite its default Tailwind configurations to override border radii (going for sharp `rounded-none` or extremely subtle `rounded-sm`), remove heavy drop shadows, and implement our *Silent Premium* hairlines (1px borders with very low opacity).

## 2. Iconography: Phosphor Icons / Lucide
**Role:** Wayfinding and micro-visuals.
- **Integration:** We will use either Phosphor or Lucide, maintaining absolute consistency across the board.
- **The Adaptation:** Icons must act as elegant punctuation, not illustrations. `strokeWidth` should be set to 1 or 1.5 strictly. The icons must feel sharp, architectural, and lightweight.

## 3. Typewolf (Typographic Curation)
**Role:** High-end font pairings.
- **Integration:** Our typography matrices (detailed in `visual-identity`) map directly to the high-taste curation standards seen on Typewolf. When mixing our functional Sans (Inter) with Display Serifs (Ogg, Playfair), we refer to Typewolf's rules on x-height matching and contrast balancing.

## 4. Shapefest
**Role:** 3D Abstract Geometry.
- **Use Case:** High-quality, pre-rendered 3D geometric shapes used highly sparingly in Editorial sections or the Main Landing to add depth to flat 2D layouts.
- **The Adaptation:** We will not use bright, plastic-looking 3D. Shapes should be monochromatic, frosted glass, or stone-textured, acting purely as architectural background elements.
