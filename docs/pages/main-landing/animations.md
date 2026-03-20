# Animations & Motion: Main Landing Page

This page is the ultimate showcase of the **Silent Premium** motion rules. It sets the tone for the entire platform.

## 1. The Lenis Scroll
- The scrolling experience must be perfectly weighted. A `lerp` value of around `0.08` to `0.1` should be configured globally on this page. It should feel like pushing a large, heavy, flawlessly oiled door.

## 2. The Hero Reveal (On Load)
- **Image/Video:** `scale: 1.05` to `scale: 1` over 2 seconds (`power3.out`). A slow, breathing outward expansion.
- **Typography:** GSAP `SplitText` (or custom Framer Motion variant) to stagger the letters or words upward from a `clip-path` mask. Duration: 1.5s.

## 3. Scrub Parallax
- The massive architectural background images should scroll at a slightly slower speed than the normal scroll (`y` axis shifting based on `ScrollTrigger` with `scrub: true`). Keep the movement minimal—just enough to create depth between the text and the background.

## 4. The Portal Transition (Country Selection)
- When a user clicks e.g., "France", instead of an instant hard-cut page load, the clicked card should expand, the screen should fade to the French Base Color (`Haussmann Cream`), and *then* the routing occurs. 

## Strict Avoidance
- No bouncing.
- No frantic side-to-side (`x`-axis) sweeping.
- No element should move faster than `0.6s` unless it is micro-interaction hover state.
