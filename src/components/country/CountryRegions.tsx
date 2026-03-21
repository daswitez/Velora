"use client";

import { RegionBento } from "@/data/countries";
import { useTranslations } from "next-intl";

export function CountryRegions({ regions }: { regions: RegionBento[] }) {
  const t_shared = useTranslations("country_shared");
  if (!regions || regions.length === 0) return null;
  return (
    <section className="w-full py-32 md:py-48 px-6 bg-[var(--token-bg)]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 md:mb-24 px-4">
          <h2 className="font-serif text-5xl md:text-7xl lg:text-[6rem] tracking-tight text-[var(--token-text)] leading-[1] max-w-[10ch]">
            {t_shared("regions_title")}
          </h2>
          <p className="max-w-[40ch] text-[var(--token-text)]/70 text-sm md:text-base leading-relaxed text-balance">
            {t_shared("regions_desc")}
          </p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[450px]">
          {regions.map((region) => (
            <div 
              key={region.id}
              className={`relative overflow-hidden group cursor-pointer ${region.colSpan} ${region.rowSpan} bg-black`}
            >
              {/* Image with extreme zoom effect */}
              <img 
                src={region.img} 
                alt={region.name}
                draggable={false}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 opacity-70 group-hover:opacity-100 z-10"
              />
              
              {/* Gradient specific for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-20 pointer-events-none transition-opacity duration-1000 group-hover:opacity-80" />
              
              {/* Region Data */}
              <div className="absolute inset-x-0 bottom-0 p-8 flex justify-between items-end z-30">
                <div className="flex flex-col gap-2">
                  <span className="text-white/70 text-xs tracking-[0.3em] uppercase font-sans transform transition-transform duration-[1s] ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                    {region.desc}
                  </span>
                  <h3 className="text-white font-serif text-3xl md:text-5xl tracking-wide transform transition-transform duration-[1s] ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-6 group-hover:translate-y-0">
                    {region.name}
                  </h3>
                </div>
                
                {/* View CTA */}
                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 border border-white/20 hover:bg-white hover:text-black text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
