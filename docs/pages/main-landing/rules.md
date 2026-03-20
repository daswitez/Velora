# Rules & Constraints: Main Landing Page

To protect the integrity of the Diplomatic Headquarters, the following absolute rules apply:

1. **The Rule of Neutrality**
   - No national flags. No localized color palettes. No culturally specific typography. The Main Landing is international territory.

2. **The "Two-Scroll" Rule for Entry**
   - The user should understand the brand (Scroll 1) and be presented with the country options (Scroll 2) immediately. Do not force them to scroll through endless corporate text before choosing a destination.

3. **Photography over UI**
   - UI elements (buttons, borders) must be nearly invisible. Use 1px ultra-light borders or hover states to define boundaries. The photography does the heavy lifting.

4. **Performance is Aesthetic**
   - Because we heavily rely on Lenis and GSAP here, do not load heavy third-party tracking scripts immediately. Prioritize the First Contentful Paint. If the scroll lags, the "luxury" illusion evaporates instantly. 

5. **Navigation Isolation**
   - The Global Navbar on this page lacks the "Smart Search" input by default because the user hasn't selected a market yet. The search input must clearly explain "Select a region first".
