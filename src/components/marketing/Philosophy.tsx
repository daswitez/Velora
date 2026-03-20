"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export function Philosophy() {
  const container = useRef<HTMLDivElement>(null);
  const t = useTranslations("Philosophy");

  useEffect(() => {
    if (!container.current) return;

    // Dynamically grab and stagger all text blocks as they enter the viewport
    gsap.utils.toArray('.reveal-text').forEach((el: any) => {
      gsap.fromTo(el, 
        { y: 20, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 95%", // Triggers immediately when it enters the viewport
            toggleActions: "play none none reverse",
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={container} className="w-full py-32 md:py-64 bg-[var(--token-bg)] flex flex-col items-center">
      <div className="layout-grid w-full">
        
        {/* Part 1: The Core Mission */}
        <div className="col-span-full md:col-start-3 md:col-span-8 space-y-16 md:space-y-24 mb-32 md:mb-56">
          <h2 className="reveal-text font-serif text-3xl md:text-5xl lg:text-5xl text-[var(--token-text)] leading-[1.3] tracking-tight text-balance opacity-0">
            {t("intro")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 pt-12 border-t border-[var(--token-text)]/15">
            <p className="reveal-text font-sans text-sm text-[var(--token-text)]/80 leading-[2] font-normal tracking-wide opacity-0">
              {t("context")}
            </p>
            
            <p className="reveal-text font-sans text-sm text-[var(--token-text)]/80 leading-[2] font-normal tracking-wide opacity-0">
              {t("calibre")}
            </p>
          </div>
        </div>

        {/* Part 2: The Core Values Grid */}
        <div className="col-span-full grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-16 border-t border-[var(--token-text)]/15 pt-16 md:pt-32 mb-32 md:mb-56">
          <div className="flex flex-col gap-6 reveal-text opacity-0">
            <span className="text-[var(--token-text)] font-serif text-2xl tracking-wide">{t("value1_title")}</span>
            <p className="font-sans text-sm text-[var(--token-text)]/70 leading-[1.8]">
              {t("value1_desc")}
            </p>
          </div>
          
          <div className="flex flex-col gap-6 reveal-text opacity-0 md:mt-24">
            <span className="text-[var(--token-text)] font-serif text-2xl tracking-wide">{t("value2_title")}</span>
            <p className="font-sans text-sm text-[var(--token-text)]/70 leading-[1.8]">
              {t("value2_desc")}
            </p>
          </div>

          <div className="flex flex-col gap-6 reveal-text opacity-0">
            <span className="text-[var(--token-text)] font-serif text-2xl tracking-wide">{t("value3_title")}</span>
            <p className="font-sans text-sm text-[var(--token-text)]/70 leading-[1.8]">
              {t("value3_desc")}
            </p>
          </div>
        </div>

        {/* Part 3: Sales & Lettings Equality */}
        <div className="col-span-full md:col-start-3 md:col-span-8 text-center space-y-10 border-t border-[var(--token-text)]/15 pt-16 md:pt-32">
          <h3 className="reveal-text font-serif text-3xl md:text-4xl text-[var(--token-text)] opacity-0">
            {t("equal_regard_title")}
          </h3>
          <p className="reveal-text font-sans text-sm text-[var(--token-text)]/80 leading-[2.2] opacity-0 max-w-[65ch] mx-auto text-balance">
            {t("equal_regard_desc")}
          </p>
        </div>

      </div>
    </section>
  );
}
