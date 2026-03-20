export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  specs: string;
  imgUrl: string;
  isFlagship?: boolean;
}

export interface CountryProfile {
  id: string;                // e.g. "nl"
  themeToken: string;        // e.g. "NL" for CSS variables
  heroTitle: string;
  heroImage: string;
  editorialTitle: string;
  editorialBody: string[];
  properties: Property[];
}

export const countryData: Record<string, CountryProfile> = {
  nl: {
    id: "nl",
    themeToken: "NL",
    heroTitle: "Order & Light",
    heroImage: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2500",
    editorialTitle: "A Tradition of Luminous Restraint",
    editorialBody: [
      "Dutch architecture has long been defined by its relationship with light and water. The historical necessity of optimizing narrow canal plots gave rise to spaces that celebrate verticality, immense windows, and an inherent sense of pragmatic order.",
      "At VELORA, our Dutch portfolio focuses on homes that honor this legacy. From perfectly preserved 17th-century canal estates with soaring ceilings to rigorously minimalist modernist lofts, we curate spaces where historic character meets contemporary precision."
    ],
    properties: [
      {
        id: "nl-1",
        title: "The Keizersgracht Estate",
        location: "Grachtengordel, Amsterdam",
        price: "€4,200,000",
        specs: "450 sqm • 5 Bed • Canal View",
        imgUrl: "https://images.unsplash.com/photo-1590059374092-23cacc596fc5?q=80&w=2500",
        isFlagship: true
      },
      {
        id: "nl-2",
        title: "Prinseneiland Conversion",
        location: "Prinseneiland, Amsterdam",
        price: "€2,850,000",
        specs: "280 sqm • 3 Bed • Dock Access",
        imgUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2500"
      },
      {
        id: "nl-3",
        title: "Modernist Forest Villa",
        location: "Aerdenhout, North Holland",
        price: "€5,100,000",
        specs: "600 sqm • 6 Bed • Private Woods",
        imgUrl: "https://images.unsplash.com/photo-1621293954908-907159247fc8?q=80&w=2500"
      }
    ]
  },
  fr: {
    id: "fr",
    themeToken: "FR",
    heroTitle: "Heritage & Quiet Elegance",
    heroImage: "https://images.unsplash.com/photo-1621293954908-907159247fc8?q=80&w=2500",
    editorialTitle: "The Architecture of Proportion",
    editorialBody: [
      "French residential design is a study in proportion. It is an aesthetic confident enough to leave spaces empty, allowing original moldings, intricate parquet flooring, and grand, light-drenched volumes to command attention without additional effort.",
      "Our curation in France spans the grand Haussmannian apartments of the 8th arrondissement to secluded stone retreats in the Luberon. Each reflects an understanding that true luxury is found not in ostentation, but in flawless execution, scale, and uncompromising quality."
    ],
    properties: [
      {
        id: "fr-1",
        title: "Avenue Montaigne Haussmannian",
        location: "8th Arrondissement, Paris",
        price: "€8,500,000",
        specs: "320 sqm • 4 Bed • Balcony filante",
        imgUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09be15ea?q=80&w=2500",
        isFlagship: true
      },
      {
        id: "fr-2",
        title: "Luberon Stone Bastide",
        location: "Gordes, Provence",
        price: "€6,200,000",
        specs: "500 sqm • 7 Bed • Olive Grove",
        imgUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2500"
      },
      {
        id: "fr-3",
        title: "Marais Hotel Particulier",
        location: "3rd Arrondissement, Paris",
        price: "Price upon request",
        specs: "800 sqm • 8 Bed • Private Courtyard",
        imgUrl: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2500"
      }
    ]
  },
  it: {
    id: "it",
    themeToken: "IT",
    heroTitle: "Warmth & Materiality",
    heroImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2500",
    editorialTitle: "Italian Craftsmanship",
    editorialBody: ["Coming soon."],
    properties: []
  },
  es: {
    id: "es",
    themeToken: "ES",
    heroTitle: "Luminous Spaces",
    heroImage: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2500",
    editorialTitle: "Sun-Drenched Elegance",
    editorialBody: ["Coming soon."],
    properties: []
  },
  pt: {
    id: "pt",
    themeToken: "PT",
    heroTitle: "Atlantic Calm",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2500",
    editorialTitle: "Portuguese Serenity",
    editorialBody: ["Coming soon."],
    properties: []
  },
  de: {
    id: "de",
    themeToken: "DE",
    heroTitle: "Clarity & Precision",
    heroImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2500",
    editorialTitle: "German Engineering & Design",
    editorialBody: ["Coming soon."],
    properties: []
  },
  be: {
    id: "be",
    themeToken: "BE",
    heroTitle: "Timeless Character",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2500",
    editorialTitle: "Belgian Design Excellence",
    editorialBody: ["Coming soon."],
    properties: []
  },
  gr: {
    id: "gr",
    themeToken: "GR",
    heroTitle: "Radiant & Ancient",
    heroImage: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2500",
    editorialTitle: "Modern Cycladic",
    editorialBody: ["Coming soon."],
    properties: []
  }
};
