"use client";

import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

interface NLHeroProps {
  heroTitle: string;
  heroImage: string;
  countryName: string;
}

export function NLHero({ heroTitle, heroImage, countryName }: NLHeroProps) {
  const t = useTranslations("EmbassySelector");
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
    <section className="relative w-full min-h-screen flex items-start justify-end p-6 pt-48 md:p-12 md:pt-64 lg:p-24 lg:pt-64 overflow-hidden">
      {/* Immersive Architectural Media (Full Screen) */}
      <div className="absolute inset-0 z-0 bg-[#0A0A0A]">
        <img 
          src={heroImage} 
          alt="Dutch Architecture"
          draggable={false}
          className="w-full h-full object-cover scale-105 opacity-80"
        />
        {/* Deep gradient to make white text pop. Removed bottom white fade for a clean, sharp architectural cut */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/40 to-black/90 md:w-full" />
        {/* Upper gradient shadow to guarantee Navbar legibility over bright architectural elements */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/50 to-transparent" />
      </div>

      {/* Typography & Concierge Overlay */}
      <div className="relative z-10 w-full md:w-[600px] flex flex-col gap-10 mt-8 md:mt-0 xl:mr-12">
        
        <div className="flex flex-col gap-4">
          <span className="text-white/60 tracking-[0.3em] uppercase text-xs font-sans">
            {t_shared("embassy_of")} {t(`${countryName}_name`)}
          </span>
          <h1 className="font-serif text-white text-6xl md:text-8xl lg:text-[7.5rem] tracking-tight leading-[0.9] text-balance">
            {heroTitle}
          </h1>
        </div>

        <div className="w-full h-px bg-white/20 my-2" />

        {/* AI Search Integration */}
        <div className="flex flex-col gap-6 bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-10 rounded-2xl shadow-2xl mt-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-white/90" />
            <h2 className="text-white font-serif text-3xl md:text-4xl">
              {t_shared("concierge_title")}
            </h2>
          </div>
          <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-[45ch]">
            {t_shared("concierge_desc")}
          </p>

          <form onSubmit={handleSearch} className="relative w-full mt-4 group">
            <textarea 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t_shared("concierge_placeholder")}
              rows={4}
              className="w-full bg-transparent border-b border-white/30 focus:border-white outline-none resize-none py-4 text-white placeholder:text-white/30 font-serif text-xl md:text-2xl transition-colors duration-500 leading-relaxed"
            />
            <button 
              type="submit"
              disabled={isSearching || !query}
              className="absolute right-0 bottom-4 p-5 bg-white text-black rounded-full hover:scale-110 transition-transform duration-300 disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center shadow-2xl"
            >
              {isSearching ? (
                <div className="w-6 h-6 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              ) : (
                <ArrowRight className="w-6 h-6" />
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
