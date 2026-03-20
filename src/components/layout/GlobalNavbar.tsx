"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Globe, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const SUPPORTED_LOCALES = [
  { code: 'en', label: 'EN' },
  { code: 'nl', label: 'NL' },
  { code: 'fr', label: 'FR' },
  { code: 'it', label: 'IT' },
  { code: 'es', label: 'ES' },
  { code: 'pt', label: 'PT' },
  { code: 'de', label: 'DE' },
  { code: 'el', label: 'EL' },
];

export function GlobalNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("Navbar");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLocaleUrl = (newLocale: string) => {
    if (!pathname) return `/${newLocale}`;
    const segments = pathname.split('/');
    if (segments.length > 1 && SUPPORTED_LOCALES.some(l => l.code === segments[1])) {
      segments[1] = newLocale;
      return segments.join('/') || '/';
    }
    return `/${newLocale}${pathname}`;
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled 
          ? "bg-[var(--token-bg)]/90 backdrop-blur-md border-b border-[var(--token-text)]/10 py-4 text-[var(--token-text)]" 
          : "bg-transparent py-8 text-white"
      }`}
    >
      <div className="layout-grid items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="col-span-1 md:col-span-3 text-2xl tracking-tighter uppercase font-serif"
        >
          Velora
        </Link>

        {/* Center Nav - Hidden on Mobile */}
        <div className={`hidden md:flex col-span-6 justify-center gap-8 text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-700 ${
          scrolled ? "text-[var(--token-text)]/60" : "text-white/70"
        }`}>
          <Link href="/concept" className={`transition-colors ${scrolled ? "hover:text-[var(--token-text)]" : "hover:text-white"}`}>{t("concept")}</Link>
          <Link href="/embassies" className={`transition-colors ${scrolled ? "hover:text-[var(--token-text)]" : "hover:text-white"}`}>{t("embassies")}</Link>
          <Link href="/journal" className={`transition-colors ${scrolled ? "hover:text-[var(--token-text)]" : "hover:text-white"}`}>{t("journal")}</Link>
        </div>

        {/* Right Actions */}
        <div className="col-span-3 flex justify-end items-center gap-6">
          <button className="hidden md:flex items-center gap-2 hover:opacity-70 transition-opacity">
            <Search className="w-4 h-4 stroke-[1.5]" />
            <span className="sr-only">{t("search")}</span>
          </button>
          
          {/* Language Switcher Dropdown */}
          <div className="relative group hidden md:flex items-center">
            <button className="flex items-center gap-2 hover:opacity-70 transition-opacity py-2">
              <Globe className="w-4 h-4 stroke-[1.5]" />
              <span className="sr-only">{t("language")}</span>
            </button>
            <div className="absolute top-full right-0 pt-4 w-16 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
              <div className="bg-[var(--token-bg)] border border-[var(--token-text)]/10 text-[var(--token-text)] shadow-xl flex flex-col py-2">
                {SUPPORTED_LOCALES.map((loc) => (
                  <Link 
                    key={loc.code} 
                    href={getLocaleUrl(loc.code)}
                    className="px-4 py-2 text-xs font-sans tracking-widest hover:bg-[var(--token-text)]/5 text-center transition-colors"
                  >
                    {loc.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <button className="flex items-center gap-2 hover:opacity-70 transition-opacity ml-2">
            <Menu className="w-5 h-5 stroke-[1.5]" />
            <span className="sr-only">{t("menu")}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
