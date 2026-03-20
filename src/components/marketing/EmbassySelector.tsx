"use client";

import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

const embassies = [
  { id: "NL", name: "Netherlands", aura: "Order & Light", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2500" },
  { id: "FR", name: "France", aura: "Heritage & Quiet Elegance", img: "https://images.unsplash.com/photo-1621293954908-907159247fc8?q=80&w=2500" },
  { id: "IT", name: "Italy", aura: "Warmth & Material Soul", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2500" },
  { id: "ES", name: "Spain", aura: "Luminous Open Living", img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2500" },
  { id: "PT", name: "Portugal", aura: "Atlantic Calm", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2500" },
  { id: "DE", name: "Germany", aura: "Clarity & Precision", img: "https://images.unsplash.com/photo-1600607687920-4e2a09be15ea?q=80&w=2500" },
  { id: "BE", name: "Belgium", aura: "Timeless Character", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2500" },
  { id: "GR", name: "Greece", aura: "Radiant & Ancient", img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2500" },
];

export function EmbassySelector() {
  const [emblaRef] = useEmblaCarousel({ 
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps"
  });

  return (
    <section className="w-full py-24 md:py-48 bg-[var(--token-bg)] overflow-hidden">
      
      <div className="layout-grid mb-16">
        <h2 className="col-span-full md:col-span-8 font-serif text-5xl md:text-7xl tracking-tight leading-[1] text-[var(--token-text)] text-balance">
          The Embassies.
        </h2>
        <div className="col-span-full md:col-span-4 flex items-end mt-6 md:mt-0">
          <p className="text-[var(--token-text)]/70 text-sm tracking-[0.2em] uppercase leading-relaxed font-sans max-w-[40ch]">
            Select your destination. Drag to explore the eight localized aesthetics and their available collections.
          </p>
        </div>
      </div>

      {/* Embla Carousel Viewport */}
      {/* We use pl-6 md:pl-12 lg:pl-24 to respect the grid start on the left, but let it bleed off the right */}
      <div 
        className="pl-6 md:pl-12 xl:pl-24 cursor-grab active:cursor-grabbing w-full overflow-hidden" 
        ref={emblaRef}
      >
        <div className="flex gap-4 md:gap-8 mr-6 md:mr-24 pr-[20vw]">
          {embassies.map((embassy) => (
            <Link 
              key={embassy.id}
              href={`#${embassy.id.toLowerCase()}`}
              className="relative flex-[0_0_85%] md:flex-[0_0_40%] lg:flex-[0_0_28%] aspect-[3/4] overflow-hidden group bg-[#0A0A0A] block"
            >
              <img 
                src={embassy.img} 
                alt={embassy.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 opacity-80 group-hover:opacity-50"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col gap-2">
                <span className="text-white/60 text-xs tracking-[0.3em] uppercase transform transition-transform duration-700 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                  {embassy.aura}
                </span>
                <span className="text-white font-serif text-3xl md:text-4xl tracking-wide transform transition-transform duration-700 translate-y-4 group-hover:translate-y-0">
                  {embassy.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </section>
  );
}
