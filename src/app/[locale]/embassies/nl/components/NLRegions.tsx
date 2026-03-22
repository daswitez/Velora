"use client";
import { useEffect, useRef } from "react";

import { RegionBento } from "@/data/countries";
import { useTranslations } from "next-intl";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

export function NLRegions({ regions }: { regions: RegionBento[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const t_shared = useTranslations("country_shared");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const cards = containerRef.current!.querySelectorAll('.bento-card');
      
      gsap.fromTo(cards, 
        { opacity: 0, clipPath: "inset(10% 10% 10% 10%)" },
        {
          opacity: 1, 
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.5,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  if (!regions || regions.length === 0) return null;
  return (
    <section className="w-full py-32 md:py-48 px-6 bg-[var(--token-bg)]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 md:mb-32 px-4 border-l border-[var(--token-text)]/10 pl-8">
          <h2 className="font-sans uppercase text-3xl md:text-5xl lg:text-[5rem] tracking-tighter leading-[0.9] text-[var(--token-text)]">
            {t_shared("regions_title")}
          </h2>
          <p className="max-w-[40ch] text-[var(--token-text)]/70 text-[10px] md:text-xs uppercase tracking-[0.1em] font-medium leading-[2.2] text-balance border-l border-[var(--token-text)]/10 pl-6">
            {t_shared("regions_desc")}
          </p>
        </div>

        {/* Bento Box Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 auto-rows-[300px] md:auto-rows-[450px]">
          {regions.map((region) => (
            <div 
              key={region.id}
              className={`bento-card relative overflow-hidden group cursor-pointer ${region.colSpan} ${region.rowSpan} bg-[var(--token-text)]/5`}
            >
              {/* Image with extreme zoom effect */}
              <Image 
                src={region.img} 
                alt={region.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-[2.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 opacity-70 group-hover:opacity-100 z-10"
              />
              
              {/* Gradient specific for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-20 pointer-events-none transition-opacity duration-1000 group-hover:opacity-80" />
              
              {/* Region Data */}
              <div className="absolute inset-x-0 bottom-0 p-8 flex justify-between items-end z-30">
                <div className="flex flex-col gap-2">
                  <span className="text-white/70 text-xs tracking-[0.3em] uppercase font-sans transform transition-transform duration-[1s] ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                    {region.desc}
                  </span>
                  <h3 className="text-white font-sans font-bold uppercase text-2xl md:text-4xl tracking-tighter transform transition-transform duration-[1s] ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-6 group-hover:translate-y-0">
                    {region.name}
                  </h3>
                </div>
                
                {/* View CTA */}
                <div className="w-12 h-12 rounded-none bg-white border border-white flex items-center justify-center transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 hover:bg-black hover:border-black text-black hover:text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
