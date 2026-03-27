"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

interface NLHeroProps {
  heroTitle: string;
  heroImage: string;
  countryName: string;
  saleCount: number;
  rentCount: number;
  regionCount: number;
}

export function NLHero({
  heroTitle,
  heroImage,
  countryName,
  saleCount,
  rentCount,
  regionCount,
}: NLHeroProps) {
  const t = useTranslations("EmbassySelector");
  const t_page = useTranslations("nl");
  const t_shared = useTranslations("country_shared");
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    setIsSearching(true);
    // Simulate AI search latency
    setTimeout(() => {
      setIsSearching(false);
      alert(`AI Matchmaker activated for: "${query}"`);
    }, 1500);
  };

  return (
    <section className="relative isolate w-full overflow-hidden border-b border-white/10 bg-[#0A0A0A]">
      <div className="absolute inset-0 z-0 bg-[#0A0A0A]">
        <Image
          src={heroImage} 
          alt="Dutch Architecture"
          fill
          priority
          sizes="100vw"
          draggable={false}
          className="object-cover scale-105 opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070b]/88 via-[#05070b]/58 to-[#05070b]/82 md:w-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-[#05070b]/88" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/50 to-transparent" />
      </div>

      <div className="relative z-10 min-h-[100svh] pb-10 pt-32 md:pb-12 md:pt-40">
        <div className="layout-grid items-end gap-y-10">
          <div className="col-span-full md:col-span-7">
            <div className="max-w-[50rem] space-y-7 md:space-y-9">
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.34em] text-white/58 md:text-xs">
                  {t_shared("embassy_of")} {t(`${countryName}_name`)}
                </span>
                <h1 className="font-sans text-[3.7rem] font-bold uppercase tracking-tighter leading-[0.82] text-white sm:text-[5rem] md:text-[7rem] lg:text-[8.5rem] xl:text-[9.5rem]">
                  {heroTitle}
                </h1>
              </div>

              <p className="max-w-[38rem] text-sm leading-[1.9] text-white/76 md:text-base md:leading-[2]">
                {t_page("hero_intro")}
              </p>

              <div className="flex flex-col gap-3 pt-1 sm:flex-row">
                <Link
                  href="#flagships"
                  className="inline-flex min-h-12 items-center justify-center border border-white/18 bg-white/10 px-5 text-[10px] uppercase tracking-[0.28em] text-white backdrop-blur-sm transition-colors duration-500 hover:bg-white hover:text-black md:px-6"
                >
                  {t_shared("nav_curation")}
                </Link>
                <Link
                  href="#market"
                  className="inline-flex min-h-12 items-center justify-center border border-white/14 px-5 text-[10px] uppercase tracking-[0.28em] text-white/80 transition-colors duration-500 hover:border-white/30 hover:text-white md:px-6"
                >
                  {t_shared("nav_market")}
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-px border border-white/10 bg-white/10 max-w-[34rem]">
                <div className="bg-black/25 px-4 py-4 md:px-5">
                  <span className="block text-[9px] uppercase tracking-[0.3em] text-white/42">
                    {t_shared("sale_index")}
                  </span>
                  <span className="mt-3 block text-3xl font-bold tracking-tighter text-white md:text-4xl">
                    {saleCount}
                  </span>
                </div>
                <div className="bg-black/25 px-4 py-4 md:px-5">
                  <span className="block text-[9px] uppercase tracking-[0.3em] text-white/42">
                    {t_shared("rental_index")}
                  </span>
                  <span className="mt-3 block text-3xl font-bold tracking-tighter text-white md:text-4xl">
                    {rentCount}
                  </span>
                </div>
                <div className="bg-black/25 px-4 py-4 md:px-5">
                  <span className="block text-[9px] uppercase tracking-[0.3em] text-white/42">
                    {t_shared("nav_regions")}
                  </span>
                  <span className="mt-3 block text-3xl font-bold tracking-tighter text-white md:text-4xl">
                    {regionCount}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full md:col-span-5 md:pb-2">
            <div className="border border-white/12 bg-white/8 p-6 backdrop-blur-2xl shadow-2xl md:p-8">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-white/90" />
                <h2 className="text-xl font-bold uppercase tracking-[0.12em] text-white md:text-2xl">
                  {t_shared("concierge_title")}
                </h2>
              </div>
              <p className="mt-5 max-w-[45ch] text-sm leading-[1.9] text-white/74 md:text-base">
                {t_shared("concierge_desc")}
              </p>

              <form onSubmit={handleSearch} className="relative mt-8 w-full">
                <textarea 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t_shared("concierge_placeholder")}
                  rows={4}
                  className="w-full resize-none border-b border-white/25 bg-transparent py-4 pr-16 text-lg leading-relaxed text-white placeholder:text-white/30 outline-none transition-colors duration-500 focus:border-white md:text-xl"
                />
                <button 
                  type="submit"
                  disabled={isSearching || !query}
                  className="absolute bottom-4 right-0 flex items-center justify-center bg-white p-4 text-black shadow-2xl transition-transform duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                >
                  {isSearching ? (
                    <div className="h-6 w-6 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                  ) : (
                    <ArrowRight className="h-5 w-5" />
                  )}
                </button>
              </form>

              <div className="mt-6 flex flex-wrap gap-2">
                <Link
                  href="#concept"
                  className="border border-white/10 px-3 py-2 text-[10px] uppercase tracking-[0.28em] text-white/60 transition-colors duration-500 hover:border-white/24 hover:text-white"
                >
                  {t_shared("nav_concept")}
                </Link>
                <Link
                  href="#regions"
                  className="border border-white/10 px-3 py-2 text-[10px] uppercase tracking-[0.28em] text-white/60 transition-colors duration-500 hover:border-white/24 hover:text-white"
                >
                  {t_shared("nav_regions")}
                </Link>
              </div>
            </div>
          </div>

          <div className="col-span-full border-t border-white/10 pt-5 md:pt-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="inline-flex items-center gap-4 text-white/52">
                <span className="text-[10px] uppercase tracking-[0.34em]">{t_shared("nav_concept")}</span>
                <div className="h-px w-20 bg-white/18 md:w-28" />
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.3em] text-white/42 md:justify-end">
                <span>{t_shared("nav_curation")}</span>
                <span>{t_shared("nav_regions")}</span>
                <span>{t_shared("nav_market")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
