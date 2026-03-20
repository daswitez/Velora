"use client";

export function GlobalCuration() {
  const properties = [
    { country: "France", title: "19th Century Haussmann", img: "https://images.unsplash.com/photo-1621293954908-907159247fc8?q=80&w=2500" },
    { country: "Greece", title: "Cycladic Coastal Villa", img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2500" },
    { country: "Italy", title: "Tuscan Stone Estate", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2500" },
    { country: "Spain", title: "Sun-Baked Finca", img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2500" },
    { country: "Netherlands", title: "Modernist Canal Loft", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2500" },
    { country: "Portugal", title: "Atlantic Ocean Retreat", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2500" },
    { country: "Germany", title: "Industrial Bauhaus Studio", img: "https://images.unsplash.com/photo-1600607687920-4e2a09be15ea?q=80&w=2500" },
    { country: "Belgium", title: "Flemish Heritage House", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2500" },
  ];

  return (
    <section className="w-full py-32 md:py-48 bg-[var(--token-bg)]">
      {/* Section Header */}
      <div className="layout-grid mb-24 md:mb-40">
        <h2 className="col-span-full md:col-span-7 font-serif text-5xl md:text-7xl tracking-tight leading-[1] text-[var(--token-text)]">
          The <br /> Collection
        </h2>
        <div className="col-span-full md:col-start-9 md:col-span-4 flex items-end mt-8 md:mt-0">
          <p className="text-[var(--token-text)]/80 text-sm tracking-[0.2em] uppercase leading-relaxed font-sans max-w-[40ch]">
            A meticulously selected portfolio of historic estates, modern lofts, and coastal rentals available across our eight active markets.
          </p>
        </div>
      </div>

      {/* Flagship Property Grid (Faux Masonry using CSS Grid staggered margins) */}
      <div className="layout-grid">
        <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-16 md:gap-y-32">
          {properties.map((prop, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col gap-6 ${idx % 2 === 1 ? 'md:mt-48 w-[85%] ml-auto' : 'w-[90%]'}`}
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
