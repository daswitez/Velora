import { CountryProfile, Property, RegionBento } from "./countries";

export const nlDict: Record<string, string> = {
  // Region names & descriptions
  "Amsterdam Canals": "Amsterdamse Grachten",
  "Rotterdam Center": "Centrum Rotterdam",
  "The Hague": "Den Haag",
  "The Countryside": "Het Platteland",
  "17th Century Estates & Townhouses": "17e-eeuwse Landgoederen & Herenhuizen",
  "Avant-Garde Modernism": "Avant-Garde Modernisme",
  "Diplomatic Elegance": "Diplomatieke Elegantie",
  "Secluded Forests & Meadows": "Afgelegen Bossen & Weiden",

  // Regions
  "North Holland": "Noord-Holland",
  "Amsterdam": "Amsterdam",
  "Rotterdam": "Rotterdam",
  "Utrecht": "Utrecht",
  "Eindhoven": "Eindhoven",

  // Locations
  "Grachtengordel, Amsterdam": "Grachtengordel, Amsterdam",
  "Prinseneiland, Amsterdam": "Prinseneiland, Amsterdam",
  "Aerdenhout, North Holland": "Aerdenhout, Noord-Holland",
  "Oud-Zuid, Amsterdam": "Oud-Zuid, Amsterdam",
  "Kop van Zuid, Rotterdam": "Kop van Zuid, Rotterdam",
  "Benoordenhout, The Hague": "Benoordenhout, Den Haag",
  "Museumkwartier, Utrecht": "Museumkwartier, Utrecht",
  "Villapark, Eindhoven": "Villapark, Eindhoven",
  "Koninginnebuurt, Haarlem": "Koninginnebuurt, Haarlem",

  // Property Types
  "Canal House": "Grachtenpand",
  "Warehouse Loft": "Pakhuis Loft",
  "Villa": "Villa",
  "Apartment": "Appartement",
  "Loft": "Loft",
  "Townhouse": "Herenhuis",
  "Courtyard House": "Hofjeswoning",
  "Family House": "Eengezinswoning",

  // Features
  "Canal View": "Uitzicht op Gracht",
  "Protected Heritage": "Beschermd Erfgoed",
  "South Light": "Zuidlicht",
  "Dock Access": "Toegang tot Dok",
  "Double Height": "Dubbele Hoogte",
  "Brick Warehouse": "Bakstenen Pakhuis",
  "Private Woods": "Privébos",
  "Outdoor Pavilion": "Buitenpaviljoen",
  "Glass Envelope": "Glazen Omhulsel",
  "Quiet Courtyard": "Rustige Binnenplaats",
  "Gallery Walls": "Galerijmuren",
  "Lift Access": "Lifttoegang",
  "River Outlook": "Uitzicht op Rivier",
  "Concrete Frame": "Betonnen Skelet",
  "Wraparound Glass": "Rondom Glas",
  "Private Garden": "Privétuin",
  "Embassy Quarter": "Ambassadewijk",
  "Reception Rooms": "Ontvangstruimtes",
  "Roof Terrace": "Dakterras",
  "Oak Joinery": "Eikenhout Schrijnwerk",
  "Canal Edge": "Grachtrand",
  "Inner Courtyard": "Binnenplaats",
  "Solar Envelope": "Zonne-omhulsel",
  "Family Plan": "Familieplattegrond",
  "Atrium Lightwell": "Atrium Lichtkoepel",

  // Collections
  "Historic Core": "Historisch Hart",
  "Dockside Conversion": "Dokzijde Conversie",
  "Forest Edge": "Bosrand",
  "Quiet City": "Rustige Stad",
  "Diplomatic Quarter": "Diplomatenwijk",
  "Design Technology": "Design & Technologie",
  "Light Studies": "Lichtstudies",

  // Availability
  "Viewing by appointment": "Bezichtigen op afspraak",
  "Available now": "Nu beschikbaar",
  "Private listing": "Privé aanbod",

  // Summaries
  "A restored canal estate where tall windows, quiet proportion, and canal light define the daily rhythm.": "Een gerestaureerd grachtenpand waar hoge ramen, rustige proporties en grachtenlicht het dagelijkse ritme bepalen.",
  "A former warehouse recast into a luminous residence with disciplined material contrast and waterside calm.": "Een voormalig pakhuis omgebouwd tot een lichte residentie met gedisciplineerd materiaalcontrast en rust aan het water.",
  "A long, restrained villa among mature trees, balancing technical exactness with softened forest light.": "Een ingetogen, gestrekte villa tussen volwassen bomen, die technische exactheid in evenwicht brengt met zacht boslicht.",
  "A calibrated city apartment for collectors and diplomats, with controlled light and a muted interior palette.": "Een gekalibreerd stadsappartement voor verzamelaars en diplomaten, met gecontroleerd licht en een gedempt kleurenpalet.",
  "A Rotterdam loft with industrial calm, long sightlines, and a precise structural language set against the water.": "Een Rotterdamse loft met industriële rust, lange zichtlijnen en een precieze structurele taal tegen de achtergrond van het water.",
  "A composed residence in the diplomatic quarter, suited to formal entertaining and stable family life.": "Een beheerste residentie in de ambassadewijk, geschikt voor formeel entertainen en een stabiel gezinsleven.",
  "A lighter canal loft where crafted joinery and outdoor space meet a compact urban cadence.": "Een lichte grachtenloft waar vakkundig houtwerk en buitenruimte elkaar ontmoeten in een compact stadstempo.",
  "A courtyard-led home that feels engineered for calm, with generous glazing and product-design precision.": "Een huis opgebouwd rond een binnenplaats, ontworpen voor rust, met gulle beglazing en productdesign-precisie.",
  "A carefully modernised family house centred on vertical light, practical flow, and a serene studio opening to the garden.": "Een zorgvuldig gemoderniseerd familiehuis gericht op verticaal licht, praktische doorstroming en een serene studio die opent naar de tuin.",
};

export function translateString(str: string | undefined): string {
  if (!str) return "";
  return nlDict[str] || str;
}

export function translateSpecs(specs: string): string {
  let mapped = specs;
  mapped = mapped.replace("sqm", "m²");
  mapped = mapped.replace("Bed", "Slaapkamers");
  // Subtranslate chunks
  const parts = mapped.split(" • ");
  const transParts = parts.map(p => nlDict[p] || p);
  return transParts.join(" • ");
}

export function translateProfile(profile: CountryProfile, locale: string): CountryProfile {
  if (locale !== "nl") return profile; // Return original if not Dutch

  const cloned = JSON.parse(JSON.stringify(profile)) as CountryProfile;

  cloned.properties = cloned.properties.map((p) => {
    return {
      ...p,
      location: translateString(p.location),
      propertyType: translateString(p.propertyType),
      region: translateString(p.region),
      collection: translateString(p.collection),
      availability: translateString(p.availability),
      summary: translateString(p.summary),
      features: p.features ? p.features.map(translateString) : [],
      specs: translateSpecs(p.specs)
    };
  });

  if (cloned.regionsBento) {
    cloned.regionsBento = cloned.regionsBento.map((r) => ({
      ...r,
      name: translateString(r.name),
      desc: translateString(r.desc)
    }));
  }

  return cloned;
}
