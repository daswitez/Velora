"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Philosophy() {
  const container = useRef<HTMLDivElement>(null);

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
            We are a European real estate agency dedicated to exceptional residential properties. We believe that finding a home should be guided by judgement, trust, and a genuine understanding of how you wish to live.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 pt-12 border-t border-[var(--token-text)]/15">
            <p className="reveal-text font-sans text-sm text-[var(--token-text)]/80 leading-[2] font-normal tracking-wide opacity-0">
              The market offers abundance, but very little discernment. Too often, homes of real beauty—elegant apartments, refined family estates, and architecturally significant residences—are reduced to bare information. VELORA was created in response to that absence.
            </p>
            
            <p className="reveal-text font-sans text-sm text-[var(--token-text)]/80 leading-[2] font-normal tracking-wide opacity-0">
              We do not seek volume or noise. We seek calibre. VELORA aspires to represent a distinctly European idea of living well, one rooted in beauty, context, and proportion. Whether representing a city apartment or a coastal home, our purpose is to bring care and clarity to renting and buying.
            </p>
          </div>
        </div>

        {/* Part 2: The Core Values Grid */}
        <div className="col-span-full grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-16 border-t border-[var(--token-text)]/15 pt-16 md:pt-32 mb-32 md:mb-56">
          <div className="flex flex-col gap-6 reveal-text opacity-0">
            <span className="text-[var(--token-text)] font-serif text-2xl tracking-wide">Discretion & Judgement</span>
            <p className="font-sans text-sm text-[var(--token-text)]/70 leading-[1.8]">
              Property matters must be handled with quiet confidence. A good agency does more than provide access; it offers perspective, measured advice, and a strong sense of what gives a property lasting appeal.
            </p>
          </div>
          
          <div className="flex flex-col gap-6 reveal-text opacity-0 md:mt-24">
            <span className="text-[var(--token-text)] font-serif text-2xl tracking-wide">Respect for Place</span>
            <p className="font-sans text-sm text-[var(--token-text)]/70 leading-[1.8]">
              A home cannot be understood in isolation. It belongs to a neighbourhood, a culture, and a rhythm of life. We treat every property within the context that gives it meaning and sensitivity to its character.
            </p>
          </div>

          <div className="flex flex-col gap-6 reveal-text opacity-0">
            <span className="text-[var(--token-text)] font-serif text-2xl tracking-wide">Substance Over Display</span>
            <p className="font-sans text-sm text-[var(--token-text)]/70 leading-[1.8]">
              We admire beauty, but never without substance. For VELORA, premium quality is expressed through restraint, deep material proportion, and thoughtful architectural detail rather than pure spectacle.
            </p>
          </div>
        </div>

        {/* Part 3: Sales & Lettings Equality */}
        <div className="col-span-full md:col-start-3 md:col-span-8 text-center space-y-10 border-t border-[var(--token-text)]/15 pt-16 md:pt-32">
          <h3 className="reveal-text font-serif text-3xl md:text-4xl text-[var(--token-text)] opacity-0">
            Equal Regard for Lettings and Sales
          </h3>
          <p className="reveal-text font-sans text-sm text-[var(--token-text)]/80 leading-[2.2] opacity-0 max-w-[65ch] mx-auto text-balance">
            We reject the notion that lettings should be treated with less care than sales. A property to let marks a new chapter, an international move, or a professional transition that deserves comfort and stability. Whether searching for a seasonal rental in the Mediterranean or a lifelong family estate in Germany, we approach the process with identical attentiveness and discretion.
          </p>
        </div>

      </div>
    </section>
  );
}
