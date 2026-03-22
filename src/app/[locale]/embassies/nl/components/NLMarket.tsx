"use client";

import { useState } from "react";
import { ArrowUpRight, Bath, BedDouble, Expand, SlidersHorizontal } from "lucide-react";
import { Property } from "@/data/countries";

type OperationMode = "sale" | "rent";
type BudgetFilter =
  | "all"
  | "sale-under-2m"
  | "sale-under-4m"
  | "sale-above-4m"
  | "rent-under-7k"
  | "rent-under-10k"
  | "rent-above-10k";
type BedroomFilter = "any" | "2" | "3" | "4";



function matchesBudget(property: Property, operation: OperationMode, budget: BudgetFilter) {
  if (budget === "all" || property.priceValue == null) return true;

  if (operation === "sale") {
    if (budget === "sale-under-2m") return property.priceValue <= 2000000;
    if (budget === "sale-under-4m") return property.priceValue <= 4000000;
    if (budget === "sale-above-4m") return property.priceValue > 4000000;
    return true;
  }

  if (budget === "rent-under-7k") return property.priceValue <= 7000;
  if (budget === "rent-under-10k") return property.priceValue <= 10000;
  if (budget === "rent-above-10k") return property.priceValue > 10000;
  return true;
}

function matchesBedrooms(property: Property, bedrooms: BedroomFilter) {
  if (bedrooms === "any" || property.bedrooms == null) return true;
  return property.bedrooms >= Number(bedrooms);
}

function getAspectClass(index: number) {
  const pattern = [
    "aspect-[4/5]",
    "aspect-[16/10]",
    "aspect-[5/6]",
    "aspect-[5/4]",
    "aspect-[4/5]",
    "aspect-[16/11]",
  ];

  return pattern[index % pattern.length];
}

import { useTranslations } from "next-intl";

export function NLMarket({ properties, countryId }: { properties: Property[], countryId: string }) {
  const t = useTranslations(countryId);
  const t_shared = useTranslations("country_shared");
  const marketProperties = properties.filter((property) => !property.isFlagship);
  const [operation, setOperation] = useState<OperationMode>("sale");
  const [region, setRegion] = useState("All");
  const [propertyType, setPropertyType] = useState("All");
  const [budget, setBudget] = useState<BudgetFilter>("all");
  const [bedrooms, setBedrooms] = useState<BedroomFilter>("any");
  const [feature, setFeature] = useState("All");
  const [activeCuratorial, setActiveCuratorial] = useState<string | null>(null);

  const curatorialThemes = [
    {
      id: "waterfront",
      title: "Meesters van het Water",
      subtitle: "Waterfront Heritage",
      image: "https://images.unsplash.com/photo-1549487442-fbbc2e2cccb8?q=80&w=1600&auto=format&fit=crop",
      features: ["Canal View", "Dock Access", "River Outlook", "Canal Edge"]
    },
    {
      id: "industrial",
      title: "Industrieel Modernisme",
      subtitle: "Brutalist Scale",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
      features: ["Brick Warehouse", "Concrete Frame", "Double Height", "Glass Envelope"]
    },
    {
      id: "sanctuary",
      title: "Gezelligheid & Rust",
      subtitle: "Private Sanctuaries",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600&auto=format&fit=crop",
      features: ["Quiet Courtyard", "Inner Courtyard", "Private Garden", "Private Woods"]
    },
    {
      id: "light",
      title: "De Cultus van het Licht",
      subtitle: "Sunlight Capture",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600&auto=format&fit=crop",
      features: ["South Light", "Solar Envelope", "Wraparound Glass", "Roof Terrace"]
    }
  ];

  const regions = Array.from(
    new Set(marketProperties.map((property) => property.region).filter(Boolean))
  ) as string[];
  const propertyTypes = Array.from(
    new Set(marketProperties.map((property) => property.propertyType).filter(Boolean))
  ) as string[];
  const featureOptions = Array.from(
    new Set(marketProperties.flatMap((property) => property.features ?? []))
  ).slice(0, 8);

  const filteredProperties = marketProperties.filter((property) => {
    const operationMatch = property.operation === operation;
    const regionMatch = region === "All" || property.region === region;
    const typeMatch = propertyType === "All" || property.propertyType === propertyType;
    const budgetMatch = matchesBudget(property, operation, budget);
    const bedroomMatch = matchesBedrooms(property, bedrooms);
    const featureMatch = feature === "All" || property.features?.includes(feature);
    const curatorialMatch = activeCuratorial 
      ? curatorialThemes.find(t => t.id === activeCuratorial)?.features.some(f => property.features?.includes(f))
      : true;

    return operationMatch && regionMatch && typeMatch && budgetMatch && bedroomMatch && featureMatch && curatorialMatch;
  });

  const saleCount = marketProperties.filter((property) => property.operation === "sale").length;
  const rentCount = marketProperties.filter((property) => property.operation === "rent").length;
  const budgetOptions =
    operation === "sale"
      ? [
          { id: "all", label: "All Budgets" },
          { id: "sale-under-2m", label: "Up to €2M" },
          { id: "sale-under-4m", label: "Up to €4M" },
          { id: "sale-above-4m", label: "Above €4M" },
        ]
      : [
          { id: "all", label: "All Budgets" },
          { id: "rent-under-7k", label: "Up to €7k" },
          { id: "rent-under-10k", label: "Up to €10k" },
          { id: "rent-above-10k", label: "Above €10k" },
        ];

  const resetFilters = () => {
    setRegion("All");
    setPropertyType("All");
    setBudget("all");
    setBedrooms("any");
    setFeature("All");
    setActiveCuratorial(null);
  };

  if (marketProperties.length === 0) return null;

  return (
    <section className="w-full border-t border-[var(--token-text)]/10 bg-[var(--token-bg)] px-6 pt-28 pb-32 md:pt-36 md:pb-48">
      <div className="layout-grid gap-y-12">
        {/* Curatorial Lifestyle Previews */}
        <div className="col-span-full border-b border-[var(--token-text)]/10 pb-16 mb-4">
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-12 gap-12">
            <div>
              <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.34em] text-[var(--token-text)]/38 mb-6">
                <SlidersHorizontal className="h-3.5 w-3.5" strokeWidth={1.2} />
                {t("market_tag")}
              </span>
              <h2 className="font-sans font-bold uppercase text-4xl leading-[0.94] tracking-tighter text-[var(--token-text)] md:text-[5rem] max-w-[12ch]">
                {t("market_title")}
              </h2>
            </div>
            
            <div className="flex gap-px border border-[var(--token-text)]/10 bg-[var(--token-text)]/10 shrink-0">
              <div className="bg-[var(--token-bg)] px-6 py-6 min-w-[140px]">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--token-text)]/35">
                  {t_shared("sale_index")}
                </span>
                <div className="mt-4 font-sans font-bold text-4xl tracking-tighter leading-none text-[var(--token-text)]">
                  {saleCount}
                </div>
              </div>
              <div className="bg-[var(--token-bg)] px-6 py-6 min-w-[140px]">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--token-text)]/35">
                  {t_shared("rental_index")}
                </span>
                <div className="mt-4 font-sans font-bold text-4xl tracking-tighter leading-none text-[var(--token-text)]">
                  {rentCount}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {curatorialThemes.map(theme => {
              const isActive = activeCuratorial === theme.id;
              return (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => {
                    setActiveCuratorial(isActive ? null : theme.id);
                    setFeature("All"); // Reset sub-features to avoid conflicts
                  }}
                  className={`relative aspect-[3/4] overflow-hidden group transition-all duration-700 ${
                    isActive
                      ? 'border-[2px] border-[var(--token-text)] opacity-100'
                      : 'border-[1px] border-[var(--token-text)]/10 hover:border-[var(--token-text)]/30 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={theme.image} 
                    alt={theme.title} 
                    draggable={false}
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[2.5s] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive ? 'scale-100' : 'scale-[1.08] group-hover:scale-[1.02]'
                    } mix-blend-luminosity`}
                  />
                  <div className={`absolute inset-0 bg-[var(--token-text)] transition-opacity duration-1000 ${isActive ? 'opacity-0' : 'opacity-[0.15] group-hover:opacity-0'}`} />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 bg-gradient-to-t from-[#050505]/90 via-[#050505]/50 to-transparent flex flex-col items-start text-left z-10 h-1/2 justify-end">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-3 font-medium">{theme.subtitle}</span>
                    <h3 className="font-sans font-bold uppercase text-2xl tracking-tighter text-white leading-[1.05]">{theme.title}</h3>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="col-span-full space-y-5">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
            <div className="border border-[var(--token-text)]/10 bg-[var(--token-surface)]/55 p-5 md:col-span-4 md:p-6">
              <span className="text-[10px] uppercase tracking-[0.34em] text-[var(--token-text)]/35">
                {t_shared("market_mode")}
              </span>
              <div className="mt-5 grid grid-cols-2 gap-px border border-[var(--token-text)]/10 bg-[var(--token-text)]/10">
                {(["sale", "rent"] as OperationMode[]).map((mode) => {
                  const active = mode === operation;

                  return (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => {
                        setOperation(mode);
                        setBudget("all");
                      }}
                      className={`min-h-[120px] px-4 py-4 text-left transition-colors duration-500 ${
                        active
                          ? "bg-[var(--token-text)] text-[var(--token-bg)]"
                          : "bg-[var(--token-bg)] text-[var(--token-text)] hover:bg-[var(--token-text)]/[0.03]"
                      }`}
                    >
                      <div className="text-[10px] uppercase tracking-[0.3em] opacity-50">{t_shared("mode")}</div>
                      <div className="mt-6 text-sm uppercase tracking-[0.24em]">
                        {mode === "sale" ? t_shared("for_sale") : t_shared("for_rent")}
                      </div>
                    </button>
                  );
                })}
              </div>
              <p className="mt-4 text-xs leading-[1.8] text-[var(--token-text)]/56">
                {operation === "sale" ? t_shared("sale_desc") : t_shared("rent_desc")}
              </p>
            </div>

            <div className="border border-[var(--token-text)]/10 p-5 md:col-span-4 md:p-6">
              <span className="text-[10px] uppercase tracking-[0.34em] text-[var(--token-text)]/35">
                {t_shared("region")}
              </span>
              <div className="mt-5 flex flex-wrap gap-2">
                {["All", ...regions].map((item) => {
                  const active = item === region;

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setRegion(item)}
                      className={`px-3 py-2 text-[10px] uppercase tracking-[0.28em] transition-colors duration-500 ${
                        active
                          ? "bg-[var(--token-accent)] text-white"
                          : "border border-[var(--token-text)]/12 text-[var(--token-text)]/66 hover:border-[var(--token-text)]/22"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="border border-[var(--token-text)]/10 p-5 md:col-span-4 md:p-6">
              <span className="text-[10px] uppercase tracking-[0.34em] text-[var(--token-text)]/35">
                {t_shared("property_type")}
              </span>
              <div className="mt-5 flex flex-wrap gap-2">
                {["All", ...propertyTypes].map((item) => {
                  const active = item === propertyType;

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setPropertyType(item)}
                      className={`px-3 py-2 text-[10px] uppercase tracking-[0.28em] transition-colors duration-500 ${
                        active
                          ? "bg-[var(--token-text)] text-[var(--token-bg)]"
                          : "border border-[var(--token-text)]/12 text-[var(--token-text)]/66 hover:border-[var(--token-text)]/22"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
            <div className="border border-[var(--token-text)]/10 p-5 md:col-span-4 md:p-6">
              <span className="text-[10px] uppercase tracking-[0.34em] text-[var(--token-text)]/35">
                {t_shared("price_range")}
              </span>
              <div className="mt-5 flex flex-wrap gap-2">
                {budgetOptions.map((item) => {
                  const active = item.id === budget;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setBudget(item.id as BudgetFilter)}
                      className={`px-3 py-2 text-[10px] uppercase tracking-[0.28em] transition-colors duration-500 ${
                        active
                          ? "bg-[var(--token-bg)] text-[var(--token-text)] ring-1 ring-[var(--token-text)]/14"
                          : "border border-[var(--token-text)]/12 text-[var(--token-text)]/66 hover:border-[var(--token-text)]/22"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="border border-[var(--token-text)]/10 p-5 md:col-span-3 md:p-6">
              <span className="text-[10px] uppercase tracking-[0.34em] text-[var(--token-text)]/35">
                {t_shared("bedrooms")}
              </span>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  { id: "any", label: "Any" },
                  { id: "2", label: "2+" },
                  { id: "3", label: "3+" },
                  { id: "4", label: "4+" },
                ].map((item) => {
                  const active = item.id === bedrooms;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setBedrooms(item.id as BedroomFilter)}
                      className={`px-3 py-2 text-[10px] uppercase tracking-[0.28em] transition-colors duration-500 ${
                        active
                          ? "bg-[var(--token-text)]/[0.06] text-[var(--token-text)] ring-1 ring-[var(--token-text)]/14"
                          : "border border-[var(--token-text)]/12 text-[var(--token-text)]/66 hover:border-[var(--token-text)]/22"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="border border-[var(--token-text)]/10 p-5 md:col-span-5 md:p-6">
              <div className="flex items-center justify-between gap-4">
                <span className="text-[10px] uppercase tracking-[0.34em] text-[var(--token-text)]/35">
                  {t_shared("spatial_mood")}
                </span>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="text-[10px] uppercase tracking-[0.28em] text-[var(--token-text)]/46 transition-colors hover:text-[var(--token-text)]"
                >
                  {t_shared("reset")}
                </button>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {["All", ...featureOptions].map((item) => {
                  const active = item === feature;

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setFeature(item)}
                      className={`px-3 py-2 text-[10px] uppercase tracking-[0.24em] transition-colors duration-500 ${
                        active
                          ? "bg-[var(--token-accent)]/12 text-[var(--token-text)] ring-1 ring-[var(--token-accent)]/18"
                          : "border border-[var(--token-text)]/12 text-[var(--token-text)]/66 hover:border-[var(--token-text)]/22"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-full border-b border-[var(--token-text)]/10 pb-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.34em] text-[var(--token-text)]/35">
                {t_shared("current_selection")}
              </span>
              <p className="text-sm leading-[1.8] text-[var(--token-text)]/64">
                {t_shared("matches_found", { count: filteredProperties.length })}
              </p>
            </div>
            <p className="max-w-[38ch] text-sm leading-[1.8] text-[var(--token-text)]/52">
              {t_shared("market_p_2")}
            </p>
          </div>
        </div>

        <div className="col-span-full">
          {filteredProperties.length === 0 ? (
            <div className="border border-dashed border-[var(--token-text)]/14 px-8 py-16">
              <span className="text-[10px] uppercase tracking-[0.34em] text-[var(--token-text)]/35">
                No Match
              </span>
              <p className="mt-4 max-w-[42ch] text-sm leading-[1.9] text-[var(--token-text)]/64">
                {t("market_no_match")}
              </p>
            </div>
          ) : (
            <div className="columns-1 gap-6 md:columns-2 2xl:columns-3">
              {filteredProperties.map((property, index) => (
                <article
                  key={property.id}
                  className="group mb-6 break-inside-avoid border border-[var(--token-text)]/10 bg-[var(--token-bg)] transition-colors duration-500 hover:border-[var(--token-text)]/20"
                >
                  <div className={`relative overflow-hidden bg-[var(--token-surface)] ${getAspectClass(index)}`}>
                    <img
                      src={property.imgUrl}
                      alt={property.title}
                      draggable={false}
                      className="h-full w-full object-cover transition-transform duration-[1.8s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                    />

                    <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between px-4 py-4">
                      <span className="border border-white/15 bg-black/35 px-3 py-2 text-[10px] uppercase tracking-[0.28em] text-white/90 backdrop-blur-sm">
                        {property.operation === "sale" ? t_shared("for_sale") : t_shared("for_rent")}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.28em] text-white/72">
                        {property.propertyType}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-5 p-5 md:p-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[var(--token-text)]/38">
                        <span>{property.region}</span>
                        <span className="h-1 w-1 rounded-full bg-[var(--token-text)]/18" />
                        <span>{property.collection}</span>
                      </div>
                      <h3 className="font-sans font-bold uppercase text-xl leading-[1.02] tracking-tighter text-[var(--token-text)] truncate">
                        {property.title}
                      </h3>
                      <p className="text-[10px] uppercase tracking-[0.05em] leading-[1.9] text-[var(--token-text)]/60 line-clamp-2">
                        {property.summary}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-px border border-[var(--token-text)]/10 bg-[var(--token-text)]/10">
                      <div className="bg-[var(--token-bg)] px-4 py-4">
                        <span className="text-[10px] uppercase tracking-[0.28em] text-[var(--token-text)]/35">
                          {t_shared("price")}
                        </span>
                        <div className="mt-3 text-sm uppercase tracking-[0.16em] text-[var(--token-text)]/78">
                          {property.price}
                        </div>
                      </div>
                      <div className="bg-[var(--token-bg)] px-4 py-4">
                        <span className="text-[10px] uppercase tracking-[0.28em] text-[var(--token-text)]/35">
                          {t_shared("status")}
                        </span>
                        <div className="mt-3 text-xs uppercase tracking-[0.18em] text-[var(--token-text)]/62">
                          {property.availability}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 border-t border-[var(--token-text)]/10 pt-5 text-[var(--token-text)]/68">
                      <div className="space-y-2">
                        <BedDouble className="h-4 w-4" strokeWidth={1.2} />
                        <div className="text-xs uppercase tracking-[0.24em]">
                          {property.bedrooms} {t_shared("bed")}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Bath className="h-4 w-4" strokeWidth={1.2} />
                        <div className="text-xs uppercase tracking-[0.24em]">
                          {property.bathrooms} {t_shared("bath")}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Expand className="h-4 w-4" strokeWidth={1.2} />
                        <div className="text-xs uppercase tracking-[0.24em]">
                          {property.sizeSqm} {t_shared("sqm")}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 border-t border-[var(--token-text)]/10 pt-5">
                      {(property.features ?? []).map((item) => (
                        <span
                          key={item}
                          className="border border-[var(--token-text)]/10 px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-[var(--token-text)]/56"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between border-t border-[var(--token-text)]/10 pt-5">
                      <span className="text-xs text-[var(--token-text)]/55">{property.location}</span>
                      <button className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-[var(--token-text)]/72 transition-colors hover:text-[var(--token-text)]">
                        {t_shared("open_dossier")}
                        <ArrowUpRight className="h-4 w-4" strokeWidth={1.2} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
