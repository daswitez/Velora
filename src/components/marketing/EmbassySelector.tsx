"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export function EmbassySelector() {
  const t = useTranslations("EmbassySelector");
  const locale = useLocale();

  const embassies = [
    { id: "NL", name: t("nl_name"), aura: t("nl_label"), img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2500" },
    { id: "FR", name: t("fr_name"), aura: t("fr_label"), img: "https://images.unsplash.com/photo-1621293954908-907159247fc8?q=80&w=2500" },
    { id: "IT", name: t("it_name"), aura: t("it_label"), img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2500" },
    { id: "ES", name: t("es_name"), aura: t("es_label"), img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2500" },
    { id: "PT", name: t("pt_name"), aura: t("pt_label"), img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2500" },
    { id: "DE", name: t("de_name"), aura: t("de_label"), img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2500" },
    { id: "BE", name: t("be_name"), aura: t("be_label"), img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2500" },
    { id: "GR", name: t("gr_name"), aura: t("gr_label"), img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2500" },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps"
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="w-full py-16 md:py-48 bg-[var(--token-bg)] overflow-hidden">
      
      <div className="layout-grid mb-16 md:mb-24">
        <div className="col-span-full md:col-span-12 xl:col-span-7">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl tracking-tight leading-[1] text-[var(--token-text)] text-balance">
            {t("title")}
          </h2>
        </div>
        <div className="col-span-full md:col-span-5 flex flex-col justify-end items-start md:items-end mt-8 md:mt-0 gap-8">
          <p className="text-[var(--token-text)]/70 text-sm tracking-[0.2em] uppercase leading-relaxed font-sans max-w-[40ch] md:text-right">
            {t("desc")}
          </p>
        </div>
      </div>

      {/* Embla Carousel Viewport */}
      {/* We use pl-6 md:pl-12 lg:pl-24 to respect the grid start on the left, but let it bleed off the right */}
      <div className="relative w-full group">
        <div 
          className="pl-6 md:pl-12 xl:pl-24 cursor-grab active:cursor-grabbing w-full overflow-hidden" 
          ref={emblaRef}
        >
          <div className="flex gap-4 md:gap-8 pr-6 md:pr-24 lg:pr-[20vw]">
            {embassies.map((embassy) => (
              <div 
                key={embassy.id}
                className="relative flex-[0_0_85%] md:flex-[0_0_40%] lg:flex-[0_0_28%] aspect-[3/4]"
              >
                <div className="w-full h-full relative overflow-hidden group/card bg-[#0A0A0A] select-none block">
                  <Link href={`/${embassy.id.toLowerCase()}/embassies/${embassy.id.toLowerCase()}`} draggable={false} className="absolute inset-0 z-10" />
                  <img 
                    src={embassy.img} 
                    alt={embassy.name} 
                    draggable={false}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:scale-105 opacity-80 group-hover/card:opacity-50 pointer-events-none"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col gap-2 pointer-events-none">
                    <span className="text-white/60 text-xs tracking-[0.3em] uppercase transform transition-transform duration-700 translate-y-2 group-hover/card:translate-y-0 opacity-0 group-hover/card:opacity-100">
                      {embassy.aura}
                    </span>
                    <span className="text-white font-serif text-3xl md:text-4xl tracking-wide transform transition-transform duration-700 translate-y-4 group-hover/card:translate-y-0">
                      {embassy.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Absolute Floating Navigation Elements for Intuitiveness */}
        <button 
          onClick={scrollPrev}
          className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 p-4 md:p-6 bg-white/90 backdrop-blur-md border border-neutral-200 rounded-full hover:bg-black hover:text-white transition-all duration-500 opacity-0 group-hover:opacity-100 z-10 shadow-2xl text-black -translate-x-4 group-hover:translate-x-0 hidden md:flex items-center justify-center"
          aria-label="Previous"
        >
          <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 stroke-[1]" />
        </button>
        
        <button 
          onClick={scrollNext}
          className="absolute right-2 md:right-8 xl:right-16 top-1/2 -translate-y-1/2 p-4 md:p-6 bg-white/90 backdrop-blur-md border border-neutral-200 rounded-full hover:bg-black hover:text-white transition-all duration-500 opacity-0 group-hover:opacity-100 z-10 shadow-2xl text-black translate-x-4 group-hover:translate-x-0 hidden md:flex items-center justify-center"
          aria-label="Next"
        >
          <ArrowRight className="w-5 h-5 md:w-6 md:h-6 stroke-[1]" />
        </button>
      </div>

    </section>
  );
}
