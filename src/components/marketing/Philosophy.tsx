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

    const isCompactViewport = window.innerWidth < 1024;

    const ctx = gsap.context(() => {
      const revealItems = gsap.utils.toArray<HTMLElement>(".reveal-text");

      if (isCompactViewport) {
        gsap.set(revealItems, { y: 0, opacity: 1 });
        return;
      }

      gsap.set(revealItems, { y: 20, opacity: 0 });

      // Dynamically grab and stagger all text blocks as they enter the viewport
      revealItems.forEach((el) => {
        gsap.fromTo(el, 
          { y: 20, opacity: 0 }, 
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%", // Safer threshold for mobile viewports
              toggleActions: "play none none none", // Disable reverse to prevent scroll-bounce flicker
            }
          }
        );
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="w-full py-24 md:py-64 bg-[var(--token-bg)] flex flex-col items-center">
      <div className="layout-grid w-full">
        
        {/* Part 1: The Core Mission */}
        <div className="col-span-full md:col-start-3 md:col-span-8 space-y-12 md:space-y-24 mb-24 md:mb-56">
          <h2 className="reveal-text font-serif text-[1.75rem] leading-[1.22] tracking-tight text-[var(--token-text)] text-balance sm:text-[2.1rem] md:text-5xl md:leading-[1.25] lg:text-5xl opacity-100">
            {t("intro")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 pt-12 border-t border-[var(--token-text)]/15">
            <p className="reveal-text font-sans text-[15px] text-[var(--token-text)]/80 leading-[1.9] font-normal tracking-[0.01em] md:text-sm md:leading-[2] md:tracking-wide opacity-100">
              {t("context")}
            </p>
            
            <p className="reveal-text font-sans text-[15px] text-[var(--token-text)]/80 leading-[1.9] font-normal tracking-[0.01em] md:text-sm md:leading-[2] md:tracking-wide opacity-100">
              {t("calibre")}
            </p>
          </div>
        </div>

        {/* Part 2: The Core Values Grid */}
        <div className="col-span-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 border-t border-[var(--token-text)]/15 pt-16 md:pt-32 mb-24 md:mb-56">
          <div className="flex flex-col gap-6 reveal-text opacity-100">
            <span className="text-[var(--token-text)] font-serif text-[1.6rem] tracking-wide md:text-2xl">{t("value1_title")}</span>
            <p className="font-sans text-[15px] text-[var(--token-text)]/70 leading-[1.8] md:text-sm">
              {t("value1_desc")}
            </p>
          </div>
          
          <div className="flex flex-col gap-6 reveal-text opacity-100 md:mt-24">
            <span className="text-[var(--token-text)] font-serif text-[1.6rem] tracking-wide md:text-2xl">{t("value2_title")}</span>
            <p className="font-sans text-[15px] text-[var(--token-text)]/70 leading-[1.8] md:text-sm">
              {t("value2_desc")}
            </p>
          </div>

          <div className="flex flex-col gap-6 reveal-text opacity-100">
            <span className="text-[var(--token-text)] font-serif text-[1.6rem] tracking-wide md:text-2xl">{t("value3_title")}</span>
            <p className="font-sans text-[15px] text-[var(--token-text)]/70 leading-[1.8] md:text-sm">
              {t("value3_desc")}
            </p>
          </div>
        </div>

        {/* Part 3: Sales & Lettings Equality */}
        <div className="col-span-full md:col-start-3 md:col-span-8 text-center space-y-10 border-t border-[var(--token-text)]/15 pt-16 md:pt-32">
          <h3 className="reveal-text font-serif text-[1.7rem] text-[var(--token-text)] md:text-4xl opacity-100">
            {t("equal_regard_title")}
          </h3>
          <p className="reveal-text mx-auto max-w-[65ch] text-balance font-sans text-[15px] leading-[1.95] text-[var(--token-text)]/80 md:text-sm md:leading-[2.2] opacity-100">
            {t("equal_regard_desc")}
          </p>
        </div>

      </div>
    </section>
  );
}
