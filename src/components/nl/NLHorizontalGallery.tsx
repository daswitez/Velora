"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Property } from "@/data/countries";

export function NLHorizontalGallery({ properties }: { properties: Property[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // We only want to animate if we have properties and on non-mobile screens 
    // (horizontal scroll can be tricky on mobile, though Lenis makes it okay. Let's do it for all screens via GSAP)
    let ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".gallery-item");
      
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          // End after scrolling the width of the container
          end: () => "+=" + wrapperRef.current?.offsetWidth
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [properties]);

  if (!properties || properties.length === 0) return null;

  return (
    <section ref={containerRef} className="w-full h-screen bg-[var(--token-bg)] overflow-hidden relative border-y border-[var(--token-text)]/15">
      
      {/* Decorative Grid Lines to emphasize "Order" */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10 flex justify-between px-24">
        <div className="w-px h-full bg-[var(--token-text)]" />
        <div className="w-px h-full bg-[var(--token-text)]" />
        <div className="w-px h-full bg-[var(--token-text)]" />
      </div>

      <div className="absolute top-16 left-6 md:left-24 z-20">
        <h2 className="font-serif text-3xl md:text-5xl text-[var(--token-text)]">
          Flagship Estates
        </h2>
      </div>
      
      <div ref={wrapperRef} className="h-full flex w-[300vw] md:w-[200vw]" style={{ width: `${properties.length * 100}vw` }}>
        {properties.map((prop, index) => (
          <div 
            key={prop.id} 
            className="gallery-item relative w-screen h-full flex items-center justify-center pt-24 pb-16 px-6 md:px-24 flex-shrink-0"
          >
            <div className="relative w-full h-full max-w-[1200px] mx-auto flex flex-col md:flex-row gap-8 items-center justify-center">
              
              {/* Massive Image Container */}
              <div className="relative w-full md:w-[65%] h-[50vh] md:h-[80%] overflow-hidden bg-[var(--token-surface)] border border-[var(--token-text)]/10">
                <img 
                  src={prop.imgUrl} 
                  alt={prop.title}
                  draggable={false}
                  className="w-full h-full object-cover grayscale-[0.1]"
                />
              </div>

              {/* Minimalist Data */}
              <div className="w-full md:w-[35%] flex flex-col gap-6 px-4 md:px-12">
                <span className="text-[var(--token-text)]/40 text-[10px] tracking-[0.4em] uppercase">
                  {String(index + 1).padStart(2, '0')} / {String(properties.length).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-[var(--token-text)] text-4xl md:text-6xl tracking-wide leading-tight">
                  {prop.title}
                </h3>
                <div className="flex flex-col gap-2 mt-4 pt-8 border-t border-[var(--token-text)]/20">
                  <span className="text-[var(--token-text)]/70 text-sm tracking-widest uppercase">{prop.price}</span>
                  <span className="text-[var(--token-text)]/50 text-xs tracking-wide">{prop.location}</span>
                  <span className="text-[var(--token-text)]/50 text-xs">{prop.specs}</span>
                </div>
                <button className="mt-8 text-left text-sm tracking-widest uppercase text-[var(--token-text)] hover:opacity-50 transition-opacity flex items-center gap-4">
                  View Property 
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
