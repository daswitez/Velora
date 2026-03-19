# Recommended Tools for Elevated Aesthetics

To supplement the user-requested stack (GSAP, Lenis, shadcn, etc.) and elevate VELORA while rigorously protecting performance and avoiding visual noise, these tools are highly recommended:

## 1. Embla Carousel
- **Why:** Integrating carousels for property galleries is notoriously problematic (clunky swipes, heavy JS). Embla is incredibly lightweight, fluid, and hooks perfectly into React.
- **Silent Premium Fit:** It feels native, smooth, and easily supports snapping without bouncy visual noise.

## 2. Zustand (State Management)
- **Why:** Managing user "Favorites", "Compared Properties", or the NLP Assistant state with React Context can cause unpredictable and jittery re-renders, breaking the smooth GSAP/Lenis flow. 
- **Silent Premium Fit:** Zustand operates silently outside the React tree until needed, ensuring animations remain 60fps even when underlying data changes.

## 3. Tailwind-Merge & clsx
- **Why:** When heavily modifying shadcn/ui components to strip away their default styles (borders, shadows) and insert our architectural styling, class conflicts happen.
- **Silent Premium Fit:** Ensures we never have unexpected UI glitches caused by competing utility classes.

## 4. Nuqs (next-usequerystate)
- **Why:** When the user utilizes the filters or the AI Smart Search, the URL should instantly update without reloading the page. 
- **Silent Premium Fit:** Allows users to share a filtered link (e.g., *French properties with Heritage status*) immediately. It is invisible to the user but conveys massive technological maturity in terms of UX.

## 5. React Three Fiber (R3F) *(Optional Tier)*
- **Why:** If we find that static Shapefest PNGs are too rigid, R3F allows us to render abstract 3D elements dynamically.
- **Silent Premium Fit:** Allows us to program properties like `roughness` and `transmission` (glass) so that 3D shapes perfectly refract the CSS background color of the specific Country Embassy, blending seamlessly without feeling pasted-in.
