"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export function MainHero() {
  const t = useTranslations("Hero");
  const tPhilosophy = useTranslations("Philosophy");
  const tNavbar = useTranslations("Navbar");
  const tEmbassies = useTranslations("EmbassySelector");
  const tConcierge = useTranslations("ConciergeSearch");
  const container = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const wordsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    if (!container.current || !imageRef.current || !textRef.current) return;

    wordsRef.current = gsap.utils.toArray('.split-word');
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.set(imageRef.current, { scale: 1, filter: "brightness(0.9)" });
      gsap.set(wordsRef.current, { y: 0, opacity: 1, rotateZ: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.to(imageRef.current, {
        scale: 1,
        filter: "brightness(0.9)",
        duration: 2.2,
        ease: "power3.inOut"
      });

      tl.fromTo(wordsRef.current,
        { y: 150, opacity: 0, rotateZ: 5 },
        { y: 0, opacity: 1, rotateZ: 0, duration: 1.4, stagger: 0.15, ease: "power4.out" },
        "-=1.0"
      );

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
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative w-full min-h-[100svh] overflow-hidden bg-brand-950">
      <div className="absolute inset-0 z-0">
        <Image
          ref={imageRef}
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2500" 
          alt="Refined European Estate" 
          fill
          priority
          sizes="100vw"
          className="object-cover scale-[1.2] brightness-50 transform-gpu"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/35 via-brand-950/10 to-brand-950/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/80 via-brand-950/35 to-brand-950/50" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] items-end pb-10 pt-28 md:pb-14 md:pt-32">
        <div className="layout-grid gap-y-10 md:gap-y-14">
          <div className="col-span-full xl:col-span-7">
            <div className="flex max-w-[58rem] flex-col items-start gap-6 md:gap-8">
              <span className="text-[10px] uppercase tracking-[0.34em] text-white/62 md:text-xs">
                {t("subtitle")}
              </span>

              <h1 
                ref={textRef}
                className="text-left font-serif text-[2.9rem] leading-[0.96] tracking-tight text-white sm:text-[4.2rem] md:text-[5.6rem] lg:text-[6.8rem] xl:text-[7.5rem]"
              >
                <span className="inline-block overflow-hidden pb-3 md:pb-5"><span className="split-word block">{t("title1")}</span></span>{" "}
                <span className="inline-block overflow-hidden pb-3 md:pb-5"><span className="split-word block italic opacity-90">{t("title2")}</span></span>
                <br />
                <span className="inline-block overflow-hidden pb-3 md:pb-5"><span className="split-word block">{t("title3")}</span></span>
              </h1>

              <p className="max-w-[42rem] text-pretty text-sm leading-[1.85] text-white/78 md:text-base md:leading-[2]">
                {tPhilosophy("intro")}
              </p>

              <div className="flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row">
                <Link
                  href="#embassies"
                  className="inline-flex min-h-12 items-center justify-center border border-white/18 bg-white/12 px-5 text-[10px] uppercase tracking-[0.28em] text-white backdrop-blur-sm transition-colors duration-500 hover:bg-white hover:text-brand-950 md:px-6"
                >
                  {tNavbar("embassies")}
                </Link>
                <Link
                  href="#concierge"
                  className="inline-flex min-h-12 items-center justify-center border border-white/14 px-5 text-[10px] uppercase tracking-[0.28em] text-white/82 transition-colors duration-500 hover:border-white/30 hover:text-white md:px-6"
                >
                  {tConcierge("button")}
                </Link>
              </div>
            </div>
          </div>

          <div className="col-span-full md:col-span-8 xl:col-span-4 xl:col-start-9">
            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 backdrop-blur-md">
              <Link
                href="#embassies"
                className="group bg-black/20 px-5 py-5 transition-colors duration-500 hover:bg-white hover:text-brand-950 md:px-7 md:py-6"
              >
                <span className="block text-[10px] uppercase tracking-[0.32em] text-white/54 transition-colors duration-500 group-hover:text-brand-950/50">
                  {tNavbar("embassies")}
                </span>
                <span className="mt-3 block font-serif text-[1.65rem] leading-[1.05] tracking-tight text-white transition-colors duration-500 group-hover:text-brand-950 md:text-[2rem]">
                  {tEmbassies("title")}
                </span>
                <span className="mt-3 block text-sm leading-[1.8] text-white/70 transition-colors duration-500 group-hover:text-brand-950/72">
                  {tEmbassies("desc")}
                </span>
              </Link>

              <Link
                href="#concierge"
                className="group bg-black/30 px-5 py-5 transition-colors duration-500 hover:bg-white hover:text-brand-950 md:px-7 md:py-6"
              >
                <span className="block text-[10px] uppercase tracking-[0.32em] text-white/54 transition-colors duration-500 group-hover:text-brand-950/50">
                  {tNavbar("search")}
                </span>
                <span className="mt-3 block font-serif text-[1.65rem] leading-[1.05] tracking-tight text-white transition-colors duration-500 group-hover:text-brand-950 md:text-[2rem]">
                  {tConcierge("title")}
                </span>
                <span className="mt-3 block text-sm leading-[1.8] text-white/70 transition-colors duration-500 group-hover:text-brand-950/72">
                  {tConcierge("desc")}
                </span>
              </Link>
            </div>
          </div>

          <div className="col-span-full border-t border-white/12 pt-5 md:pt-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="inline-flex items-center gap-4 text-white/55">
                <span className="text-[10px] uppercase tracking-[0.34em]">{t("scroll")}</span>
                <div className="h-px w-20 bg-white/18 md:w-28" />
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.3em] text-white/46 md:justify-end">
                <span>{tNavbar("concept")}</span>
                <span>{tNavbar("embassies")}</span>
                <span>{tNavbar("search")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
