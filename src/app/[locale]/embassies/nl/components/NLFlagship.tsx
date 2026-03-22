"use client";

import { useTranslations } from "next-intl";
import { Property } from "@/data/countries";
import { ArrowUpRight } from "lucide-react";

export function NLFlagship({ properties, countryId }: { properties: Property[], countryId: string }) {
  const t = useTranslations(countryId);
  const t_shared = useTranslations("country_shared");
  const featured = properties.filter((p) => p.isFlagship).slice(0, 2);

  if (featured.length === 0) return null;

  return (
    <section className="w-full bg-[var(--token-bg)] border-y border-[var(--token-text)]/15 pt-24 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Marketing Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12 border-b border-[var(--token-text)]/15 pb-16 mb-16">
          <div className="w-full md:w-1/2">
            <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.34em] text-[var(--token-text)]/38 mb-6">
              {t("flagship_label")}
            </span>
            <h2 className="font-serif text-4xl md:text-6xl tracking-tight text-[var(--token-text)] leading-[1.05] text-balance">
              {t("marketing_title")}
            </h2>
          </div>
          <div className="w-full md:w-1/3">
            <p className="text-[var(--token-text)]/70 text-sm md:text-base leading-[2.1] text-balance">
              {t("marketing_desc")}
            </p>
          </div>
        </div>

        {/* Editorial Grids */}
        <div className="space-y-32">
          {featured.map((prop, idx) => {
            const isEven = idx % 2 !== 0;
            return (
              <div key={prop.id} className="relative group flex flex-col md:flex-row gap-8 lg:gap-16 items-stretch">
                
                {/* Image Block */}
                <div className={`w-full md:w-3/5 overflow-hidden bg-[var(--token-surface)] ${isEven ? 'md:order-2' : ''}`}>
                  <div className="aspect-[4/3] w-full relative">
                    <img 
                      src={prop.imgUrl} 
                      alt={prop.title}
                      className="absolute inset-0 w-full h-full object-cover grayscale-[0.05] transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                      draggable={false}
                    />
                  </div>
                </div>

                {/* Data Block */}
                <div className={`w-full md:w-2/5 flex flex-col justify-center ${isEven ? 'md:order-1' : ''}`}>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-[var(--token-text)]/40 text-[10px] tracking-[0.4em] uppercase">
                      {String(idx + 1).padStart(2, '0')} / {String(featured.length).padStart(2, '0')}
                    </span>
                    <div className="flex-1 h-px bg-[var(--token-text)]/10" />
                  </div>
                  
                  <h3 className="font-serif text-[var(--token-text)] text-3xl lg:text-5xl tracking-wide leading-tight mb-6">
                    {prop.title}
                  </h3>
                  
                  <div className="flex flex-col gap-3 py-6 border-y border-[var(--token-text)]/10 my-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-[var(--token-text)]/50 tracking-widest uppercase text-[10px]">{t_shared("location")}</span>
                      <span className="text-[var(--token-text)]/80 tracking-wide">{prop.location}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-[var(--token-text)]/50 tracking-widest uppercase text-[10px]">{t_shared("price")}</span>
                      <span className="text-[var(--token-text)]/80 tracking-widest uppercase text-xs">{prop.price}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-[var(--token-text)]/50 tracking-widest uppercase text-[10px]">{t_shared("specs")}</span>
                      <span className="text-[var(--token-text)]/80 tracking-wide text-xs">{prop.specs}</span>
                    </div>
                  </div>

                  <p className="text-sm leading-[1.8] text-[var(--token-text)]/60 my-6">
                    {prop.summary}
                  </p>

                  <button className="mt-auto group/btn inline-flex items-center justify-between border border-[var(--token-text)]/20 px-6 py-4 transition-colors hover:bg-[var(--token-text)] hover:text-[var(--token-bg)]">
                    <span className="text-xs tracking-[0.2em] uppercase">
                      {t("view_property")}
                    </span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
