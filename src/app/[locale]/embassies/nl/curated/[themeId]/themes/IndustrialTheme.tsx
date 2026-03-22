import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Property } from "@/data/countries";

export default function IndustrialTheme({ properties, theme, locale }: { properties: Property[], theme: { title: string, subtitle: string }, locale: string }) {
  return (
    <main className="min-h-screen bg-[#111] text-white selection:bg-white selection:text-black font-sans">
      <nav className="fixed top-0 inset-x-0 z-50 mix-blend-difference p-6">
        <Link href={`/${locale}/embassies/nl#market`} className="inline-flex flex-col text-white hover:opacity-50 transition-opacity">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-50 mb-2">Back to Market</span>
          <ArrowLeft className="w-8 h-8" strokeWidth={2} />
        </Link>
      </nav>

      <header className="pt-40 pb-24 px-6 md:px-12 border-b-[4px] border-white/20">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-sm md:text-base uppercase tracking-[0.4em] text-white/40 block mb-8 font-bold border-l-4 border-white/40 pl-6">
            {theme.subtitle}
          </span>
          <h1 className="font-sans font-black text-6xl xl:text-[9rem] 2xl:text-[11rem] uppercase tracking-tighter leading-[0.85] text-balance">
            {theme.title}
          </h1>
        </div>
      </header>

      <section className="px-6 md:px-12 py-32 bg-[#1a1a1a]">
         <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            {properties.map((property: Property) => (
               <article key={property.id} className="group relative border-y-4 border-white/10 p-8 md:p-12 hover:border-white transition-colors duration-500">
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-b-8 border-white mb-12 grayscale contrast-[1.2] group-hover:grayscale-0 transition-all duration-[2s]">
                    <Image
                      src={property.imgUrl}
                      alt={property.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-8">
                    <h2 className="font-sans font-black text-5xl md:text-6xl uppercase tracking-tighter leading-[0.9] text-balance">{property.title}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border-2 border-white/10">
                       <div className="bg-[#1a1a1a] p-6 lg:p-8 flex flex-col justify-between h-full">
                         <span className="block text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4 font-bold">Price</span>
                         <span className="text-xl lg:text-3xl uppercase tracking-widest font-bold">{property.price}</span>
                       </div>
                       <div className="bg-[#1a1a1a] p-6 lg:p-8 flex flex-col justify-between h-full">
                         <span className="block text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4 font-bold">Footprint</span>
                         <span className="text-xl lg:text-3xl uppercase tracking-widest font-bold">{property.sizeSqm} SQM</span>
                       </div>
                       <div className="bg-[#1a1a1a] p-6 lg:p-8 flex flex-col justify-between h-full">
                         <span className="block text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4 font-bold">Capacity</span>
                         <span className="text-xl lg:text-3xl uppercase tracking-widest font-bold">{property.bedrooms} BEDS</span>
                       </div>
                       <div className="bg-[#1a1a1a] p-6 lg:p-8 flex flex-col justify-between h-full">
                         <span className="block text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4 font-bold">Zoning</span>
                         <span className="text-base lg:text-xl uppercase tracking-widest font-bold">{property.propertyType}</span>
                       </div>
                    </div>
                    
                    <div className="pt-8 border-t-2 border-white/10 flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between">
                       <p className="font-sans text-sm md:text-base uppercase tracking-[0.1em] text-white/60 leading-[2] max-w-2xl font-bold">
                          {property.summary}
                       </p>
                       <ul className="flex flex-col gap-2 shrink-0">
                          {property.features?.map(feature => (
                             <li key={feature} className="text-xs uppercase tracking-[0.3em] text-white/40 bg-white/5 py-2 px-4 border border-white/5 font-bold">
                                + {feature}
                             </li>
                          ))}
                       </ul>
                    </div>
                  </div>
               </article>
            ))}
         </div>
      </section>
    </main>
  );
}
