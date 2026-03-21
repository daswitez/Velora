"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Globe, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

const SUPPORTED_LOCALES = [
  { code: "en", label: "EN", name: "English", flag: "🇬🇧" },
  { code: "nl", label: "NL", name: "Nederlands", flag: "🇳🇱" },
  { code: "fr", label: "FR", name: "Francais", flag: "🇫🇷" },
  { code: "it", label: "IT", name: "Italiano", flag: "🇮🇹" },
  { code: "es", label: "ES", name: "Espanol", flag: "🇪🇸" },
  { code: "pt", label: "PT", name: "Portugues", flag: "🇵🇹" },
  { code: "de", label: "DE", name: "Deutsch", flag: "🇩🇪" },
  { code: "el", label: "EL", name: "Greek", flag: "🇬🇷" },
];

export function GlobalNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileLanguageOpen, setMobileLanguageOpen] = useState(false);
  const lastTouchToggleRef = useRef(0);
  const pathname = usePathname();
  const t = useTranslations("Navbar");
  const currentLocale =
    pathname?.split("/")[1] && SUPPORTED_LOCALES.some((loc) => loc.code === pathname.split("/")[1])
      ? pathname.split("/")[1]
      : "en";
  const navLinks = [
    { href: "/concept", label: t("concept") },
    { href: "/embassies", label: t("embassies") },
    { href: "/journal", label: t("journal") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const getLocaleUrl = (newLocale: string) => {
    if (!pathname) return `/${newLocale}`;
    const segments = pathname.split('/');
    if (segments.length > 1 && SUPPORTED_LOCALES.some(l => l.code === segments[1])) {
      segments[1] = newLocale;
      return segments.join('/') || '/';
    }
    return `/${newLocale}${pathname}`;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((open) => {
      const nextOpen = !open;
      if (!nextOpen) setMobileLanguageOpen(false);
      return nextOpen;
    });
  };

  const handleMobileMenuTouchEnd = () => {
    lastTouchToggleRef.current = Date.now();
    toggleMobileMenu();
  };

  const handleMobileMenuClick = () => {
    if (Date.now() - lastTouchToggleRef.current < 450) return;
    toggleMobileMenu();
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        mobileMenuOpen
          ? "bg-[var(--token-bg)] border-b border-[var(--token-text)]/10 py-4 text-[var(--token-text)]"
          : scrolled
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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${scrolled ? "hover:text-[var(--token-text)]" : "hover:text-white"}`}
            >
              {link.label}
            </Link>
          ))}
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
            <div className="absolute top-full right-0 pt-4 w-56 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
              <div className="max-h-[min(70vh,28rem)] overflow-y-auto bg-[var(--token-bg)] border border-[var(--token-text)]/10 text-[var(--token-text)] shadow-xl flex flex-col py-2">
                {SUPPORTED_LOCALES.map((loc) => (
                  <Link 
                    key={loc.code} 
                    href={getLocaleUrl(loc.code)}
                    className={`flex items-center justify-between px-4 py-3 text-xs font-sans transition-colors ${
                      currentLocale === loc.code ? "bg-[var(--token-text)]/5" : "hover:bg-[var(--token-text)]/5"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-base leading-none">{loc.flag}</span>
                      <span className="tracking-[0.18em] uppercase">{loc.name}</span>
                    </span>
                    <span className="text-[10px] tracking-[0.28em] text-[var(--token-text)]/40">{loc.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleMobileMenuClick}
            onTouchEnd={handleMobileMenuTouchEnd}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                toggleMobileMenu();
              }
            }}
            className={`relative z-[70] ml-2 flex h-11 w-11 shrink-0 touch-manipulation pointer-events-auto items-center justify-center rounded-full border transition-all duration-300 md:hidden ${
              mobileMenuOpen || scrolled
                ? "border-[var(--token-text)]/10 bg-[var(--token-bg)] text-[var(--token-text)] shadow-lg"
                : "border-white/20 bg-black/35 text-white backdrop-blur-md"
            }`}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            style={{ touchAction: "manipulation" }}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 stroke-[1.5]" /> : <Menu className="w-5 h-5 stroke-[1.5]" />}
            <span className="sr-only">{t("menu")}</span>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[60] md:hidden ${mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!mobileMenuOpen}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => {
            setMobileLanguageOpen(false);
            setMobileMenuOpen(false);
          }}
          aria-label={t("menu")}
        />

        <div
          id="mobile-navigation"
          className={`absolute right-0 top-0 flex h-full w-[88vw] max-w-[360px] flex-col border-l border-[var(--token-text)]/10 bg-white text-[var(--token-text)] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between border-b border-[var(--token-text)]/10 px-6 py-5">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.34em] text-[var(--token-text)]/35">
                Navigation
              </span>
              <div className="font-serif text-2xl tracking-tight">Velora</div>
            </div>
            <button
              type="button"
              onClick={() => {
                setMobileLanguageOpen(false);
                setMobileMenuOpen(false);
              }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--token-text)]/10"
              aria-label={t("menu")}
            >
              <X className="h-5 w-5 stroke-[1.5]" />
            </button>
          </div>

          <div className="flex flex-1 flex-col overflow-hidden">
            <div className="flex-1 space-y-8 overflow-y-auto px-6 py-8">
              <div className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      setMobileLanguageOpen(false);
                      setMobileMenuOpen(false);
                    }}
                    className="border-b border-[var(--token-text)]/10 pb-4 font-serif text-[2rem] leading-none tracking-tight"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => setMobileLanguageOpen((open) => !open)}
                  className="flex w-full items-center justify-between border-t border-[var(--token-text)]/10 pt-5 text-left"
                  aria-expanded={mobileLanguageOpen}
                >
                  <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.34em] text-[var(--token-text)]/35">
                    <Globe className="h-3.5 w-3.5" strokeWidth={1.2} />
                    {t("language")}
                  </span>
                  <span className="text-xs text-[var(--token-text)]/40">
                    {mobileLanguageOpen ? <X className="h-4 w-4 stroke-[1.5]" /> : <Menu className="h-4 w-4 stroke-[1.5]" />}
                  </span>
                </button>
                {mobileLanguageOpen ? (
                  <div className="grid max-h-[42vh] grid-cols-1 gap-2 overflow-y-auto pr-1">
                    {SUPPORTED_LOCALES.map((loc) => (
                      <Link
                        key={loc.code}
                        href={getLocaleUrl(loc.code)}
                        onClick={() => {
                          setMobileLanguageOpen(false);
                          setMobileMenuOpen(false);
                        }}
                        className={`flex items-center justify-between border px-4 py-3 text-[11px] uppercase tracking-[0.24em] transition-colors ${
                          currentLocale === loc.code
                            ? "border-[var(--token-text)]/22 bg-[var(--token-text)]/[0.04] text-[var(--token-text)]"
                            : "border-[var(--token-text)]/12 text-[var(--token-text)]/68 hover:border-[var(--token-text)]/25 hover:text-[var(--token-text)]"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-lg leading-none">{loc.flag}</span>
                          <span>{loc.name}</span>
                        </span>
                        <span className="text-[10px] tracking-[0.28em] text-[var(--token-text)]/40">{loc.label}</span>
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="shrink-0 border-t border-[var(--token-text)]/10 px-6 pb-8 pt-5">
              <p className="max-w-[22ch] text-sm leading-[1.8] text-[var(--token-text)]/58">
                A quieter way to move through Europe&apos;s residential embassies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
