"use client";

import { useEffect, useState } from "react";
import { X, Bath, BedDouble, Expand, CheckCircle2 } from "lucide-react";
import { Property } from "@/data/countries";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface NLDossierProps {
  property: Property | null;
  onClose: () => void;
}

export default function NLDossier({ property, onClose }: NLDossierProps) {
  const t_shared = useTranslations("country_shared");
  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Handle mount and fade-in
  useEffect(() => {
    if (property) {
      // Async mounting to allow CSS transition frames and bypass synchronous linting
      const renderTimer = setTimeout(() => setIsRendered(true), 0);
      const visibleTimer = setTimeout(() => setIsVisible(true), 50);
      document.body.style.overflow = "hidden"; // Prevent background scroll
      
      return () => {
        clearTimeout(renderTimer);
        clearTimeout(visibleTimer);
      };
    } else {
      const exitTimer = setTimeout(() => setIsVisible(false), 0);
      const timer = setTimeout(() => {
        setIsRendered(false);
        document.body.style.overflow = "auto";
      }, 500); // 500ms exit transition
      
      return () => {
        clearTimeout(exitTimer);
        clearTimeout(timer);
      };
    }
  }, [property]);

  // Handle ESC key closing
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && property) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, property]);

  if (!isRendered || !property) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-stretch md:items-center justify-center p-0 md:p-12 2xl:p-24 bg-[var(--token-bg)]/80 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Absolute Close Layer */}
      <div 
        className="absolute inset-0 z-0 cursor-crosshair" 
        onClick={onClose} 
        title="Click anywhere to close"
      />

      {/* Main Dossier Window */}
      <div 
        className={`relative z-10 w-full h-full md:w-[98vw] md:h-[98vh] md:max-h-[1200px] max-w-[1800px] flex flex-col md:flex-row bg-[var(--token-bg)] shadow-[0_0_120px_rgba(0,0,0,0.2)] md:ring-1 ring-[var(--token-text)]/10 overflow-hidden transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
          isVisible ? "translate-y-0 scale-100" : "translate-y-8 scale-[0.98]"
        }`}
      >
        {/* Mobile Header / Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 z-50 flex h-12 w-12 items-center justify-center bg-[var(--token-bg)]/70 backdrop-blur-md border border-[var(--token-text)]/10 text-[var(--token-text)] hover:bg-[var(--token-text)] hover:text-[var(--token-bg)] transition-colors rounded-none"
        >
          <X className="h-5 w-5" strokeWidth={1.5} />
        </button>

        {/* Left Side: Photography (45%) - Sticky */}
        <div className="w-full md:w-[45%] h-[40vh] md:h-full relative border-b md:border-b-0 md:border-r border-[var(--token-text)]/15 flex-shrink-0">
          <Image
            src={property.imgUrl}
            alt={property.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={true}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--token-bg)]/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 text-[var(--token-bg)] drop-shadow-md">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold bg-[var(--token-bg)]/20 backdrop-blur-md px-4 py-2 border border-white/20">
              {property.collection || property.propertyType}
            </span>
          </div>
        </div>

        {/* Right Side: Data Typography (55%) - Scrolling */}
        <div 
          className="w-full md:w-[55%] flex-1 md:h-full flex flex-col bg-[var(--token-bg)] overflow-y-auto custom-scrollbar relative"
          data-lenis-prevent="true"
        >
          <div className="px-8 py-12 md:px-16 md:py-20 lg:px-24 lg:py-24 flex-1 flex flex-col">
            
            {/* Header Data */}
            <div className="mb-20">
              <div className="flex items-center gap-6 mb-8">
                <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--token-text)]/40 font-bold">
                  {property.location}
                </span>
                <div className="flex-1 h-px bg-[var(--token-text)]/10" />
              </div>
              
              <h2 className="text-4xl lg:text-[4rem] font-sans font-bold tracking-tighter text-[var(--token-text)] mb-12 leading-[0.95] uppercase text-balance">
                {property.title}
              </h2>

              <div className="grid grid-cols-2 gap-12 border-t border-[var(--token-text)]/15 pt-8 mt-12">
                <div>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-[var(--token-text)]/40 block mb-4 font-bold">
                    {t_shared("price")}
                  </span>
                  <div className="text-2xl lg:text-4xl font-sans tracking-tighter text-[var(--token-text)]">
                    {property.price}
                  </div>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-[var(--token-text)]/40 block mb-4 font-bold">
                    {t_shared("status")}
                  </span>
                  <div className="text-sm uppercase tracking-[0.2em] text-[var(--token-text)]/80 mt-1">
                    {property.availability}
                  </div>
                </div>
              </div>

              {/* Minimalist Tech Specs (Airy) */}
              <div className="flex flex-wrap gap-12 lg:gap-20 border-y border-[var(--token-text)]/15 py-10 my-10">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl lg:text-6xl font-light tracking-tighter leading-none">{property.bedrooms}</span>
                  <span className="text-[9px] uppercase tracking-[0.4em] text-[var(--token-text)]/40 font-bold">Bed</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl lg:text-6xl font-light tracking-tighter leading-none">{property.bathrooms}</span>
                  <span className="text-[9px] uppercase tracking-[0.4em] text-[var(--token-text)]/40 font-bold">Bath</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl lg:text-6xl font-light tracking-tighter leading-none">{property.sizeSqm}</span>
                  <span className="text-[9px] uppercase tracking-[0.4em] text-[var(--token-text)]/40 font-bold">m²</span>
                </div>
              </div>
            </div>

            {/* Narrative */}
            <div className="mb-20">
              <h3 className="text-[10px] uppercase tracking-[0.4em] text-[var(--token-text)]/40 font-bold mb-8 pb-4 border-b border-[var(--token-text)]/10">
                {t_shared("about_property")}
              </h3>
              <p className="text-[var(--token-text)]/70 leading-[2.2] text-sm md:text-base font-medium columns-1 lg:columns-2 gap-16">
                {property.summary}
              </p>
            </div>

            {/* Amenities Grid */}
            <div className="mb-20">
              <h3 className="text-[10px] uppercase tracking-[0.4em] text-[var(--token-text)]/40 font-bold mb-8 pb-4 border-b border-[var(--token-text)]/10">
                {t_shared("amenities")}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                {(property.features ?? []).map((feature, idx) => (
                  <li key={idx} className="flex items-center justify-between text-sm text-[var(--token-text)]/80 tracking-wide border-b border-[var(--token-text)]/5 pb-3">
                    {feature}
                    <CheckCircle2 className="h-3 w-3 text-[var(--token-text)]/30" strokeWidth={1.5} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Map Section (API-Free Embed) */}
            <div className="mb-12">
              <h3 className="text-[10px] uppercase tracking-[0.4em] text-[var(--token-text)]/40 font-bold mb-8 pb-4 border-b border-[var(--token-text)]/10">
                {t_shared("location")}
              </h3>
              <p className="text-xs uppercase tracking-widest text-[var(--token-text)]/60 mb-6 font-semibold">
                {property.location}
              </p>
              <div className="w-full h-64 md:h-80 bg-[var(--token-text)]/5 relative overflow-hidden border border-[var(--token-text)]/10">
                <iframe 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  loading="lazy"
                  style={{ border: 0 }}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(property.location)}&t=&z=14&ie=UTF8&iwloc=&output=embed`} 
                  className="grayscale opacity-70 contrast-125 hover:opacity-100 transition-opacity duration-1000 absolute inset-0"
                />
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-auto pt-8 border-t border-[var(--token-text)]/10 grid grid-cols-2 gap-4">
              <button className="col-span-2 py-5 bg-[var(--token-text)] text-[var(--token-bg)] text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-[var(--token-text)]/90 transition-colors">
                {t_shared("inquire")}
              </button>
            </div>
            
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--token-text);
          opacity: 0.2;
        }
      `}</style>
    </div>
  );
}
