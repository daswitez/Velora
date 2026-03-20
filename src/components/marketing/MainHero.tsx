"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export function MainHero() {
  const t = useTranslations("Hero");
  const container = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const scrollIndRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    if (!container.current || !imageRef.current || !textRef.current) return;

    // Reset references array
    wordsRef.current = gsap.utils.toArray('.split-word');

    const tl = gsap.timeline();

    // The hero image reveal sequence
    tl.to(imageRef.current, {
      scale: 1,
      filter: "brightness(0.9)",
      duration: 2.2,
      ease: "power3.inOut"
    });

    // Stagger the typography immediately after the image settles
    tl.fromTo(wordsRef.current,
      { y: 150, opacity: 0, rotateZ: 5 },
      { y: 0, opacity: 1, rotateZ: 0, duration: 1.4, stagger: 0.15, ease: "power4.out" },
      "-=1.0"
    );

    // Subtle scroll parallax
    gsap.to(imageRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={container} className="relative w-full h-screen overflow-hidden bg-brand-950 flex items-center justify-center">
      
      {/* The Cinematic Background Setup */}
      <div className="absolute inset-0 z-0">
        <img 
          ref={imageRef}
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2500" 
          alt="Refined European Estate" 
          className="w-full h-full object-cover scale-[1.2] brightness-50 transform-gpu"
        />
        {/* Adds an elegant vignette to center focus on typography */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-brand-950/40" />
      </div>

      {/* Primary Landing Typography */}
      <div className="relative z-10 text-center flex flex-col items-center gap-8 px-6">
        <h1 
          ref={textRef}
          className="text-white font-serif text-5xl md:text-7xl lg:text-[7rem] tracking-tight leading-[0.9]"
        >
          {/* Faking a text split for GSAP staggering without a paid plugin */}
          <span className="inline-block overflow-hidden pb-4 md:pb-6"><span className="split-word block">{t("title1")}</span></span>{" "}
          <span className="inline-block overflow-hidden pb-4 md:pb-6"><span className="split-word block italic opacity-90">{t("title2")}</span></span>
          <br />
          <span className="inline-block overflow-hidden pb-4 md:pb-6"><span className="split-word block">{t("title3")}</span></span>
        </h1>
        
        <p 
          className="text-white/80 font-sans text-xs md:text-sm tracking-[0.3em] uppercase max-w-[65ch]"
        >
          {t("subtitle")}
        </p>
      </div>

      {/* Scroll indicator */}
      <div 
        ref={scrollIndRef}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 text-[10px] tracking-widest uppercase flex flex-col items-center gap-6"
      >
        <span>{t("scroll")}</span>
        <div className="w-[1px] h-16 bg-white/20 overflow-hidden relative">
          {/* We'll use CSS for an infinite micro-animation on the scroll bar to avoid continuous GSAP processing */}
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes scroll-down {
              0% { transform: translateY(-100%); }
              50% { transform: translateY(100%); }
              100% { transform: translateY(100%); }
            }
            .scroll-drop { animation: scroll-down 2.5s cubic-bezier(0.77, 0, 0.175, 1) infinite; }
          `}} />
          <div className="absolute top-0 left-0 w-full h-full bg-white/80 scroll-drop" />
        </div>
      </div>
    </section>
  );
}
