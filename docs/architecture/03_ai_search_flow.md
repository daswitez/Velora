# The AI Concierge: Smart Search Flow

Velora's standout functional feature is replacing the ugly, cluttered "Filter Form" (sliders, drop-downs, checkboxes) with a minimalist, glowing text input for NLP (Natural Language Processing).

## The User Flow

1. **The Input:** On the Main Landing or Country Embassy, the user types a hyper-specific lifestyle request: 
   > *"Show me a bright, airy space in Spain where I can paint, preferably an old converted structure under 1.5M Euros."*

2. **The Interpretation (The LLM Layer):**
   - The frontend sends this string to our backend (whether Next.js API route or NestJS).
   - We hit an LLM (OpenAI GPT-4o-mini, Claude 3 Haiku, or DeepSeek API).
   - **System Prompt for LLM:** *"You are an AI router for a luxury real estate database. Convert the user's natural language request into a strict JSON search filter object based on the Velora Property Schema."*
   
3. **The LLM Output (The Parsed Intent):**
   The LLM does not search the database itself. It merely translates English/Spanish into parameters:
   ```json
   {
     "country_code": ["ES"],
     "max_price_eur": 1500000,
     "vibe_tags": ["bright", "airy", "creative", "historic"],
     "architectural_style": ["converted", "finca"]
   }
   ```

4. **The Execution (Supabase Query):**
   - Our backend takes that JSON object.
   - It executes a strongly-typed Supabase query:
     `.from('properties').select('*').in('country_code', ['ES']).lte('price_eur', 1500000).contains('vibe_tags', ['historic'])`
   
5. **The Presentation (Frontend View):**
   - Next.js receives the matched properties.
   - Using GSAP and Nuqs, the page seamlessly transitions to a gallery view, displaying exactly the properties that match the aesthetic request, along with a custom AI-generated introductory sentence like: 
   > *"We found 3 sun-drenched, meticulously converted spaces in Spain that perfectly suit a creative retreat."*
