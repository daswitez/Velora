# The Anti-Noise Manifesto (Rules of Restraint)

The quickest way to ruin a high-end aesthetic is over-animation and visual clutter. "Noise" makes a site feel cheap and desperate for attention. **VELORA Living must exude quiet confidence.**

## Rule 1: The "One-Motion" Law
The human eye cannot process multiple focal points animating simultaneously without feeling overwhelmed. 
- **Application:** If an image is experiencing a slow GSAP parallax effect during scroll, the text beside it must remain perfectly still. If the text is fading up, the image is static. Never animate both concurrently.

## Rule 2: Speed is Cheap, Pacing is Premium
Fast, snappy animations (`0.2s`) belong to utility software, not luxury editorial. 
- **Application:** A property reveal should take its time. A fade-in on scroll should span `0.8s` to `1.2s` using an `ease-out` (like `power2.out` or `power3.out` in GSAP). It must feel like lifting an elegant veil, not turning on a light switch.

## Rule 3: Purposeful Dimensionality (Shapefest Rule)
3D assets (like those from Shapefest) carry immense visual weight. If poorly implemented, they look like a crypto-startup.
- **Application:** If a 3D element is introduced, it must be deeply desaturated or adopt the background color to act as a *texture* rather than an object. It supports the real estate photography; it never competes with it.

## Rule 4: Scroll is a Guide, Not a Rollercoaster
Using Lenis and GSAP `ScrollTrigger` with `scrub: true` binds animations to the user's scrollbar. If misused, fast scrolling causes elements to fly erratically across the screen.
- **Application:** Use scrubbing almost exclusively for extremely slow, imperceptible parallax (`y: -5%` to `y: 5%`). Do not use scrub for massive scaling, rotation, or drastic horizontal movements that induce motion sickness.

## Rule 5: Information Hierarchy (Fear the Clutter)
- **Application:** Do not display everything at once. Use "Progressive Disclosure". A property card should show a stunning image, a title, and a price. Only upon a deliberate, slow `hover` does the card reveal secondary data (like exact sqm, year built, or agent contact). Keep the default state religiously clean.
