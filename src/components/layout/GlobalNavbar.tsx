"use client";

import Link from "next/link";
import { Search, Globe, Menu } from "lucide-react";
import { useEffect, useState } from "react";

export function GlobalNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled 
          ? "bg-brand-50/80 backdrop-blur-md border-b border-brand-900/10 py-4" 
          : "bg-transparent py-8"
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
        <div className="hidden md:flex col-span-6 justify-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-brand-900/60">
          <Link href="/concept" className="hover:text-brand-900 transition-colors">Concept</Link>
          <Link href="/embassies" className="hover:text-brand-900 transition-colors">Embassies</Link>
          <Link href="/journal" className="hover:text-brand-900 transition-colors">Journal</Link>
        </div>

        {/* Right Actions */}
        <div className="col-span-3 flex justify-end items-center gap-6">
          <button className="hidden md:flex items-center gap-2 hover:opacity-70 transition-opacity">
            <Search className="w-4 h-4 stroke-[1.5]" />
            <span className="sr-only">Search</span>
          </button>
          <button className="hidden md:flex items-center gap-2 hover:opacity-70 transition-opacity">
            <Globe className="w-4 h-4 stroke-[1.5]" />
            <span className="sr-only">Language</span>
          </button>
          <button className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <Menu className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>
      </div>
    </nav>
  );
}
