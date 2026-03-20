export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  specs: string;
  imgUrl: string;
  isFlagship?: boolean;
  operation?: "sale" | "rent";
  propertyType?: string;
  region?: string;
  collection?: string;
  priceValue?: number;
  sizeSqm?: number;
  bedrooms?: number;
  bathrooms?: number;
  features?: string[];
  availability?: string;
  summary?: string;
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
        imgUrl: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2500",
        isFlagship: true,
        operation: "sale",
        propertyType: "Canal House",
        region: "Amsterdam",
        collection: "Historic Core",
        priceValue: 4200000,
        sizeSqm: 450,
        bedrooms: 5,
        bathrooms: 4,
        availability: "Viewing by appointment",
        features: ["Canal View", "Protected Heritage", "South Light"],
        summary: "A restored canal estate where tall windows, quiet proportion, and canal light define the daily rhythm."
      },
      {
        id: "nl-2",
        title: "Prinseneiland Conversion",
        location: "Prinseneiland, Amsterdam",
        price: "€2,850,000",
        specs: "280 sqm • 3 Bed • Dock Access",
        imgUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2500",
        isFlagship: true,
        operation: "sale",
        propertyType: "Warehouse Loft",
        region: "Amsterdam",
        collection: "Dockside Conversion",
        priceValue: 2850000,
        sizeSqm: 280,
        bedrooms: 3,
        bathrooms: 3,
        availability: "Available now",
        features: ["Dock Access", "Double Height", "Brick Warehouse"],
        summary: "A former warehouse recast into a luminous residence with disciplined material contrast and waterside calm."
      },
      {
        id: "nl-3",
        title: "Modernist Forest Villa",
        location: "Aerdenhout, North Holland",
        price: "€5,100,000",
        specs: "600 sqm • 6 Bed • Private Woods",
        imgUrl: "https://images.unsplash.com/photo-1621293954908-907159247fc8?q=80&w=2500",
        operation: "sale",
        propertyType: "Villa",
        region: "North Holland",
        collection: "Forest Edge",
        priceValue: 5100000,
        sizeSqm: 600,
        bedrooms: 6,
        bathrooms: 5,
        availability: "Private listing",
        features: ["Private Woods", "Outdoor Pavilion", "Glass Envelope"],
        summary: "A long, restrained villa among mature trees, balancing technical exactness with softened forest light."
      },
      {
        id: "nl-4",
        title: "Oud-Zuid Gallery Apartment",
        location: "Oud-Zuid, Amsterdam",
        price: "€8,900 / month",
        specs: "190 sqm • 3 Bed • Quiet Courtyard",
        imgUrl: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2500",
        operation: "rent",
        propertyType: "Apartment",
        region: "Amsterdam",
        collection: "Quiet City",
        priceValue: 8900,
        sizeSqm: 190,
        bedrooms: 3,
        bathrooms: 2,
        availability: "Available now",
        features: ["Quiet Courtyard", "Gallery Walls", "Lift Access"],
        summary: "A calibrated city apartment for collectors and diplomats, with controlled light and a muted interior palette."
      },
      {
        id: "nl-5",
        title: "Rotterdam Harbor Loft",
        location: "Kop van Zuid, Rotterdam",
        price: "€1,980,000",
        specs: "230 sqm • 2 Bed • River Outlook",
        imgUrl: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2500",
        operation: "sale",
        propertyType: "Loft",
        region: "Rotterdam",
        collection: "Avant-Garde Modernism",
        priceValue: 1980000,
        sizeSqm: 230,
        bedrooms: 2,
        bathrooms: 2,
        availability: "Viewing by appointment",
        features: ["River Outlook", "Concrete Frame", "Wraparound Glass"],
        summary: "A Rotterdam loft with industrial calm, long sightlines, and a precise structural language set against the water."
      },
      {
        id: "nl-6",
        title: "Diplomatic Garden Residence",
        location: "Benoordenhout, The Hague",
        price: "€12,400 / month",
        specs: "260 sqm • 4 Bed • Private Garden",
        imgUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2500",
        operation: "rent",
        propertyType: "Townhouse",
        region: "The Hague",
        collection: "Diplomatic Quarter",
        priceValue: 12400,
        sizeSqm: 260,
        bedrooms: 4,
        bathrooms: 3,
        availability: "Available now",
        features: ["Private Garden", "Embassy Quarter", "Reception Rooms"],
        summary: "A composed residence in the diplomatic quarter, suited to formal entertaining and stable family life."
      },
      {
        id: "nl-7",
        title: "Utrecht Canal Loft",
        location: "Museumkwartier, Utrecht",
        price: "€6,800 / month",
        specs: "170 sqm • 2 Bed • Roof Terrace",
        imgUrl: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2500",
        operation: "rent",
        propertyType: "Loft",
        region: "Utrecht",
        collection: "Canal Edge",
        priceValue: 6800,
        sizeSqm: 170,
        bedrooms: 2,
        bathrooms: 2,
        availability: "Viewing by appointment",
        features: ["Roof Terrace", "Oak Joinery", "Canal Edge"],
        summary: "A lighter canal loft where crafted joinery and outdoor space meet a compact urban cadence."
      },
      {
        id: "nl-8",
        title: "Eindhoven Courtyard House",
        location: "Villapark, Eindhoven",
        price: "€2,240,000",
        specs: "310 sqm • 4 Bed • Inner Courtyard",
        imgUrl: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2500",
        operation: "sale",
        propertyType: "Courtyard House",
        region: "Eindhoven",
        collection: "Design Technology",
        priceValue: 2240000,
        sizeSqm: 310,
        bedrooms: 4,
        bathrooms: 3,
        availability: "Private listing",
        features: ["Inner Courtyard", "Solar Envelope", "Family Plan"],
        summary: "A courtyard-led home that feels engineered for calm, with generous glazing and product-design precision."
      },
      {
        id: "nl-9",
        title: "Haarlem Glass Atrium Home",
        location: "Koninginnebuurt, Haarlem",
        price: "€3,480,000",
        specs: "340 sqm • 5 Bed • Atrium Lightwell",
        imgUrl: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2500",
        operation: "sale",
        propertyType: "Family House",
        region: "North Holland",
        collection: "Light Studies",
        priceValue: 3480000,
        sizeSqm: 340,
        bedrooms: 5,
        bathrooms: 3,
        availability: "Viewing by appointment",
        features: ["Atrium Lightwell", "Family Plan", "Garden Studio"],
        summary: "A carefully modernised family house centred on vertical light, practical flow, and a serene studio opening to the garden."
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
