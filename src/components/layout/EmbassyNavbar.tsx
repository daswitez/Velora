"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, Globe } from "lucide-react";
import { CountryProfile } from "@/data/countries";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

export function EmbassyNavbar({ profile }: { profile: CountryProfile }) {
  const t_shared = useTranslations("country_shared");
  const pathname = usePathname();
  const currentLocale = pathname?.split("/")[1] || "en";
  const homeUrl = `/${currentLocale}`;
  
  const nativeLocale = profile.id;
  const alternateLocale = currentLocale === "en" ? nativeLocale : "en";
  const switchUrl = pathname?.replace(`/${currentLocale}/`, `/${alternateLocale}/`) || `/${alternateLocale}`;
  const switchLabel = currentLocale === "en" ? nativeLocale.toUpperCase() : "EN";
  
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  if (pathname?.includes("/curated/")) return null;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 pointer-events-none ${
        scrolled 
          ? "bg-[var(--token-bg)]/90 backdrop-blur-md border-b border-[var(--token-text)]/10 py-4 text-[var(--token-text)]" 
          : "bg-transparent py-8 text-white"
      }`}
    >
      <div className="layout-grid items-center justify-between pointer-events-auto">
        {/* Left side Return (Logo) */}
        <Link 
          href={homeUrl}
          className="col-span-1 md:col-span-3 flex items-center gap-4 hover:opacity-70 transition-opacity"
        >
          <ArrowLeft className="w-5 h-5 stroke-[1.5]" />
          <span className="text-2xl tracking-tighter uppercase font-serif">Velora</span>
        </Link>

        {/* Center Nav */}
        <div className={`hidden md:flex col-span-6 justify-center gap-8 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-700 ${
          scrolled ? "text-[var(--token-text)]/60" : "text-white/70"
        }`}>
          <button onClick={() => scrollTo("concept")} className={`transition-colors ${scrolled ? "hover:text-[var(--token-text)]" : "hover:text-white"}`}>{t_shared("nav_concept")}</button>
          <button onClick={() => scrollTo("flagships")} className={`transition-colors ${scrolled ? "hover:text-[var(--token-text)]" : "hover:text-white"}`}>{t_shared("nav_curation")}</button>
          <button onClick={() => scrollTo("regions")} className={`transition-colors ${scrolled ? "hover:text-[var(--token-text)]" : "hover:text-white"}`}>{t_shared("nav_regions")}</button>
          <button onClick={() => scrollTo("market")} className={`transition-colors ${scrolled ? "hover:text-[var(--token-text)]" : "hover:text-white"}`}>{t_shared("nav_market")}</button>
        </div>

        {/* Right Actions */}
        <div className="col-span-3 flex justify-end items-center gap-6">
          <div className={`text-[10px] md:text-xs uppercase tracking-[0.24em] font-medium hidden sm:block transition-colors ${
            scrolled ? "text-[var(--token-text)]/50" : "text-white/50"
          }`}>
            {profile.id.toUpperCase()}
          </div>
          
          {nativeLocale !== "en" && (
            <Link 
              href={switchUrl} 
              className={`flex items-center gap-2 hover:opacity-70 transition-opacity py-2 ${
                scrolled ? "text-[var(--token-text)]" : "text-white"
              }`}
            >
              <Globe className="w-4 h-4 stroke-[1.5]" />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium">{switchLabel}</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
