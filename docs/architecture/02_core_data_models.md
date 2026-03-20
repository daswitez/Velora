# Core Data Models (Draft)

Regardless of whether we use Next.js Server Actions or a NestJS backend, our Supabase database needs a universally adaptable schema to handle properties across 8 vastly different countries.

## The `Property` Entity

We do not want separate tables for "French Properties" and "Greek Properties". We use one massive, flexible table.

```typescript
type Property = {
  id: string; // UUID
  country_code: 'NL' | 'FR' | 'IT' | 'ES' | 'PT' | 'DE' | 'BE' | 'GR';
  status: 'available' | 'reserved' | 'sold';
  
  // Core Identifiers
  title_en: string; // "19th Century Haussmann Apartment"
  slug: string; // "19th-century-haussmann-apartment-paris"
  
  // Geography
  city: string;
  region: string; // e.g., "Cyclades", "Tuscany"
  coordinates: { lat: number; lng: number }; 

  // Financials
  price_eur: number; // Always store base in EUR for pure sorting logic
  
  // Physical Attributes
  rooms: number;
  bathrooms: number;
  square_meters: number;
  year_built: number;
  
  // Aesthetic / Concierge Categorization
  // This is crucial for the AI Smart Search to work beautifully
  architectural_style: string; // "Cycladic", "Industrial", "Classicist"
  vibe_tags: string[]; // ["quiet", "ocean-view", "historic", "minimalist"]
  
  // Media
  hero_image_url: string;
  gallery_urls: string[]; // Array of high-res image URLs
  
  // Editorial Content
  description_editorial: string; // The high-end, magazine-style text
  ai_summary: string; // A 2-sentence summary generated upon ingestion for NLP fast replies
}
```

## The "Vibe Tags" (The Secret Sauce)
Traditional real estate sites filter by `rooms`, `bathrooms`, `price`. 
Velora filters by *lifestyle*. 

The `vibe_tags` and `architectural_style` columns are the most important fields in the database. When the AI Concierge receives a prompt like *"I want something profoundly quiet but historically significant near the water"*, the backend maps those adjectives directly against our `vibe_tags` (`["quiet", "historic", "water-adjacent"]`) rather than trying to parse complex geography.
