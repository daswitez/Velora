# Motion Libraries & Scrolling (The "Silent" Flow)

To achieve the "Silent Premium" atmospheric feeling without building a heavy, sluggish website, we will rely on a strictly classified stack of animation libraries.

## 1. Lenis (Smooth Scrolling)
**Role:** The foundational sense of weight and pacing.
- **Use Case:** Absolutely essential for the **Main Landing Page (Diplomatic Headquarters)**. It morphs the erratic behavior of mouse wheels into a buttery, weighted scroll.
- **The "Premium" Rule:** The `lerp` (linear interpolation) must be tuned to feel *confident*, not slippery. We don't want the page to "slide on ice". The user must feel they are turning the heavy pages of a high-end magazine.

## 2. GSAP (GreenSock)
**Role:** Scroll-triggered choreography and layout manipulation.
- **Use Case:** Used in tandem with Lenis (via `ScrollTrigger`) to reveal information contextually. As the user scrolls, GSAP handles subtle parallax on the massive Hero images, or pins a section while editorial text elegantly fades up.
- **The "Premium" Rule:** Restrict properties. We animate `y` (vertical translation), `opacity`, and occasionally `clip-path` for image reveals. We **avoid** extreme scaling, rotation, or bouncing. 

## 3. Framer Motion
**Role:** State-driven micro-interactions.
- **Use Case:** Used strictly inside React components where GSAP is overkill. For example: Dropdown menus opening, the AI Smart Search bar expanding when focused, or a property card's hover states.
- **The "Premium" Rule:** Rely on gentle spring physics. A `stiffness` around `300` and `damping` around `30` removes robotic linearity and provides a natural, physical feel to user clicks and hovers without overshooting aggressively.
