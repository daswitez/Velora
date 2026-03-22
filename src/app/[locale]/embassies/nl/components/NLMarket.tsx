"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Bath, BedDouble, Expand, SlidersHorizontal, Sparkles, ArrowRight, ArrowLeft } from "lucide-react";
import { Property } from "@/data/countries";
import NLDossier from "./NLDossier";

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

  // Pagination & Search States
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 4;
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  
  // Property Dossier State
  const [viewingProperty, setViewingProperty] = useState<Property | null>(null);

  const filterKey = `${operation}-${region}-${propertyType}-${budget}-${bedrooms}-${feature}-${activeCuratorial}`;
  const [prevFilterKey, setPrevFilterKey] = useState(filterKey);

  if (filterKey !== prevFilterKey) {
    setCurrentPage(1);
    setPrevFilterKey(filterKey);
  }

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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    setIsSearching(true);
    // Simulated AI routing delay
    setTimeout(() => {
      setIsSearching(false);
      setQuery("");
    }, 1500);
  };

  if (marketProperties.length === 0) return null;

  const totalPages = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE);
  const paginatedProperties = filteredProperties.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

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

        <div className="col-span-full border-b border-[var(--token-text)]/10 pb-8 mb-12">
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
              Viewing Page {currentPage} of {totalPages || 1}
            </p>
          </div>
        </div>

        {/* Embedded Concierge Search Moved Here */}
        <div className="col-span-full mb-16">
          <div className="flex flex-col gap-6 bg-[var(--token-text)]/5 border border-[var(--token-text)]/10 p-8 md:p-12 rounded-none relative">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[var(--token-text)]" />
              <h2 className="text-[var(--token-text)] font-sans uppercase tracking-[0.1em] text-xl md:text-2xl font-bold">
                {t_shared("concierge_title")}
              </h2>
            </div>
            <p className="text-[var(--token-text)]/80 text-sm md:text-base leading-relaxed max-w-[45ch] font-medium tracking-wide">
              {t_shared("concierge_desc")}
            </p>

            <form onSubmit={handleSearch} className="relative w-full mt-4 group">
              <textarea 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t_shared("concierge_placeholder")}
                rows={4}
                className="w-full bg-transparent border-b border-[var(--token-text)]/30 focus:border-[var(--token-text)] outline-none resize-none py-4 pr-16 text-[var(--token-text)] font-sans text-xl md:text-2xl transition-colors duration-500 leading-relaxed"
              />
              <button 
                type="submit"
                disabled={isSearching || !query}
                className="absolute right-0 bottom-4 p-5 bg-[var(--token-text)] text-[var(--token-bg)] rounded-none hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center shadow-2xl"
              >
                {isSearching ? (
                  <div className="w-5 h-5 border-2 border-[var(--token-bg)]/30 border-t-[var(--token-bg)] rounded-full animate-spin" />
                ) : (
                  <ArrowRight className="w-5 h-5" />
                )}
              </button>
            </form>
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
              {paginatedProperties.map((property, index) => (
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
                      <button 
                        onClick={() => setViewingProperty(property)}
                        className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-[var(--token-text)]/72 transition-colors hover:text-[var(--token-text)]"
                      >
                        {t_shared("open_dossier")}
                        <ArrowUpRight className="h-4 w-4" strokeWidth={1.2} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          <div className="mt-16 flex items-center justify-center gap-4 border-t border-[var(--token-text)]/10 pt-10">
            <button 
              type="button"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1 && totalPages <= 1}
              className="group flex items-center gap-3 px-6 py-3 border border-[var(--token-text)]/20 text-[10px] uppercase tracking-widest text-[var(--token-text)] disabled:opacity-20 disabled:cursor-not-allowed hover:bg-[var(--token-text)] hover:text-[var(--token-bg)] transition-all duration-500"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-500 group-hover:-translate-x-1" strokeWidth={1.5} />
              {t_shared("prev")}
            </button>
            <div className="flex gap-2">
              {Array.from({ length: Math.max(totalPages, 3) }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 flex items-center justify-center border text-[11px] transition-all duration-500 ${
                    currentPage === i + 1 
                      ? 'border-[var(--token-text)] bg-[var(--token-text)] text-[var(--token-bg)] font-bold' 
                      : 'border-[var(--token-text)]/20 text-[var(--token-text)] hover:border-[var(--token-text)]/40'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button 
                type="button"
                onClick={() => setCurrentPage(p => Math.min(Math.max(totalPages, 3), p + 1))}
                disabled={currentPage === Math.max(totalPages, 3)}
                className="group flex items-center gap-3 px-6 py-3 border border-[var(--token-text)]/20 text-[10px] uppercase tracking-widest text-[var(--token-text)] disabled:opacity-20 disabled:cursor-not-allowed hover:bg-[var(--token-text)] hover:text-[var(--token-bg)] transition-all duration-500"
            >
              {t_shared("next")}
              <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
      <NLDossier property={viewingProperty} onClose={() => setViewingProperty(null)} />
    </section>
  );
}
