"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function MainHero() {
  const container = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const scrollIndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current || !imageRef.current || !textRef.current || !sublineRef.current) return;

    const tl = gsap.timeline();

    // The Breathing Image Reveal
    // Starts scaled up and darker, then breathes into existence
    tl.fromTo(
      imageRef.current,
      { scale: 1.1, filter: "brightness(0.3)" },
      { scale: 1, filter: "brightness(0.65)", duration: 2.5, ease: "power3.out" }
    );

    // The Elegant Text Reveal (Staggered upward slide)
    const words = textRef.current.querySelectorAll(".split-word");
    tl.fromTo(
      words,
      { y: "120%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 1.5, stagger: 0.1, ease: "power4.out" },
      "-=1.8" // Start while the image is still scaling
    );

    // Subheadline and Scroll Indicator Fade
    tl.fromTo(
      [sublineRef.current, scrollIndRef.current],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: "power2.out" },
      "-=1.0"
    );

    // Subtle Parallax on Scroll (ScrollTrigger)
    gsap.to(imageRef.current, {
      y: "15%",
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      ref={container} 
      className="relative w-full h-[100vh] flex flex-col justify-center items-center overflow-hidden bg-brand-950"
    >
      {/* Background Architectural Image Placeholder */}
      <img
        ref={imageRef}
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2500&auto=format&fit=crop"
        alt="European Architecture"
        className="absolute inset-0 w-full h-full object-cover z-0 origin-center"
      />

      {/* Hero Typography */}
      <div className="relative z-10 text-center flex flex-col items-center gap-8 px-6">
        <h1 
          ref={textRef}
          className="text-white font-serif text-5xl md:text-7xl lg:text-[8rem] tracking-tight leading-[0.85]"
        >
          {/* Faking a text split for GSAP staggering without a paid plugin */}
          <span className="inline-block overflow-hidden pb-4"><span className="split-word block">Curated</span></span>{" "}
          <span className="inline-block overflow-hidden pb-4"><span className="split-word block italic opacity-90">European</span></span>
          <br />
          <span className="inline-block overflow-hidden pb-4"><span className="split-word block">Living.</span></span>
        </h1>
        
        <p 
          ref={sublineRef}
          className="text-white/80 font-sans text-xs md:text-sm tracking-[0.3em] uppercase max-w-[65ch]"
        >
          The Diplomatic Headquarters
        </p>
      </div>

      {/* Scroll indicator */}
      <div 
        ref={scrollIndRef}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 text-[10px] tracking-widest uppercase flex flex-col items-center gap-6"
      >
        <span>Discover</span>
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
