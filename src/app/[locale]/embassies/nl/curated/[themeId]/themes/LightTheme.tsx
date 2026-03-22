import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Property } from "@/data/countries";

export default function LightTheme({ properties, theme, locale }: { properties: Property[], theme: { title: string, subtitle: string }, locale: string }) {
  return (
    <main className="min-h-screen bg-white text-[#050505] font-sans selection:bg-[#050505] selection:text-white">
      <nav className="fixed top-0 inset-x-0 z-50 p-8 flex justify-between items-center bg-gradient-to-b from-white via-white/80 to-transparent">
        <Link href={`/${locale}/embassies/nl#market`} className="text-[10px] uppercase tracking-[0.3em] font-bold hover:opacity-50 transition-opacity flex items-center gap-4">
          <ArrowLeft className="w-4 h-4" strokeWidth={2} />
          <span>Exit Exhibition</span>
        </Link>
      </nav>

      <header className="pt-48 pb-24 px-6 md:px-12 border-b border-black/5">
        <div className="max-w-[1600px] mx-auto text-center space-y-8">
          <span className="text-[10px] uppercase tracking-[0.5em] text-black/30 font-bold block">
            {theme.subtitle}
          </span>
          <h1 className="font-sans font-light text-5xl md:text-7xl lg:text-[6rem] uppercase tracking-[0.05em] leading-[1.1] text-balance">
            {theme.title}
          </h1>
        </div>
      </header>

      <section className="px-6 md:px-12 py-16 bg-[#fafafa]">
         <div className="max-w-[1800px] mx-auto columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {properties.map((property: Property) => (
               <article key={property.id} className="group relative break-inside-avoid relative overflow-hidden bg-white hover:shadow-2xl hover:shadow-black/5 transition-shadow duration-1000 cursor-pointer">
                  <div className="relative aspect-square w-full">
                    <Image
                      src={property.imgUrl}
                      alt={property.title}
                      fill
                      className="object-cover brightness-110 saturate-50 contrast-125 opacity-90 group-hover:scale-[1.03] group-hover:opacity-100 transition-all duration-1000 delay-100"
                    />
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500" />
                  </div>
                  
                  <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-white via-white/95 to-transparent flex flex-col md:flex-row justify-between items-start md:items-end gap-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                     <div className="space-y-3">
                        <span className="block text-[9px] uppercase tracking-[0.4em] text-black/40 font-bold">{property.location}</span>
                        <h2 className="font-sans font-black text-2xl uppercase tracking-tighter text-black leading-[0.9]">{property.title}</h2>
                        <span className="block text-[10px] uppercase tracking-[0.25em] text-black/50 font-medium pt-3">{property.sizeSqm} m² · {property.bedrooms} BD</span>
                     </div>
                     <span className="text-[11px] uppercase tracking-widest font-bold text-black border border-black/10 px-4 py-3 shrink-0 bg-white/50 backdrop-blur-md">{property.price}</span>
                  </div>
               </article>
            ))}
         </div>
      </section>
    </main>
  );
}
