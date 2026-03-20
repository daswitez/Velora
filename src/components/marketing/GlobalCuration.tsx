"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { useTranslations } from "next-intl";

export function GlobalCuration() {
  const container = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const t = useTranslations("GlobalCuration");
  const tCountries = useTranslations("EmbassySelector");

  const properties = [
    { country: tCountries("fr_name"), title: t("prop1_title"), img: "https://images.unsplash.com/photo-1621293954908-907159247fc8?q=80&w=2500" },
    { country: tCountries("gr_name"), title: t("prop2_title"), img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2500" },
    { country: tCountries("it_name"), title: t("prop3_title"), img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2500" },
    { country: tCountries("es_name"), title: t("prop4_title"), img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2500" },
    { country: tCountries("nl_name"), title: t("prop5_title"), img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2500" },
    { country: tCountries("pt_name"), title: t("prop6_title"), img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2500" },
    { country: tCountries("de_name"), title: t("prop7_title"), img: "https://images.unsplash.com/photo-1600607687920-4e2a09be15ea?q=80&w=2500" },
    { country: tCountries("be_name"), title: t("prop8_title"), img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2500" },
  ];

  useEffect(() => {
    if (!container.current || !headerRef.current || !textRef.current) return;

    let ctx = gsap.context(() => {
      gsap.fromTo(
        [headerRef.current, textRef.current],
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          stagger: 0.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
          }
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="w-full py-24 md:py-64 bg-[var(--token-bg)]">
      {/* Section Header */}
      <div className="layout-grid mb-16 md:mb-56">
        <h2 ref={headerRef} className="col-span-full md:col-span-7 font-serif text-4xl sm:text-5xl md:text-7xl tracking-tight leading-[1] text-[var(--token-text)] opacity-0">
          {t("tag")}
        </h2>
        <div className="col-span-full md:col-start-9 md:col-span-4 flex items-end mt-12 md:mt-0">
          <p ref={textRef} className="text-[var(--token-text)]/80 text-sm tracking-[0.2em] uppercase leading-relaxed font-sans max-w-[40ch] opacity-0">
            {t("desc")}
          </p>
        </div>
      </div>

      {/* Flagship Property Grid */}
      <div className="layout-grid">
        <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-24 md:gap-y-48">
          {properties.map((prop, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col gap-6 ${idx % 2 === 1 ? 'md:mt-48 w-full md:w-[85%] md:ml-auto' : 'w-full md:w-[90%]'}`}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--token-surface)] group cursor-pointer">
                <img 
                  src={prop.img} 
                  alt={prop.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 opacity-90 group-hover:opacity-100 grayscale-[0.2] group-hover:grayscale-0"
                />
              </div>
              <div className="flex flex-col gap-3 px-2">
                <span className="text-[var(--token-text)]/50 text-xs tracking-[0.3em] uppercase">{prop.country}</span>
                <span className="text-[var(--token-text)] font-serif text-3xl tracking-wide">{prop.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
