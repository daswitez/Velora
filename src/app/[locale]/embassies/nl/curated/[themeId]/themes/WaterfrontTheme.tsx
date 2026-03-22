import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Property } from "@/data/countries";

export default function WaterfrontTheme({ properties, theme, locale }: { properties: Property[], theme: { title: string, subtitle: string }, locale: string }) {
  return (
    <main className="min-h-screen bg-[#070b14] text-[#e0e6ed] font-sans selection:bg-[#3b82f6] selection:text-white">
      <nav className="fixed top-0 inset-x-0 z-50 p-6 mix-blend-difference">
        <Link href={`/${locale}/embassies/nl#market`} className="inline-flex items-center gap-4 text-[#e0e6ed] hover:opacity-70 transition-opacity">
          <ArrowLeft className="w-5 h-5" strokeWidth={1.5} />
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Navigate Back</span>
        </Link>
      </nav>

      <header className="pt-48 pb-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-[1200px] mx-auto relative z-10 border-l-[1px] border-blue-500/20 pl-8 md:pl-16">
          <span className="text-[10px] md:text-sm uppercase tracking-[0.4em] text-blue-300/60 block mb-6 font-medium">
            {theme.subtitle}
          </span>
          <h1 className="font-sans font-light text-5xl md:text-7xl lg:text-8xl uppercase tracking-[0.1em] text-balance text-[#e0e6ed] leading-tight">
            {theme.title}
          </h1>
        </div>
      </header>

      <section className="px-6 md:px-12 py-32">
         <div className="max-w-[1400px] mx-auto flex flex-col gap-24 lg:gap-40">
            {properties.map((property: Property, index: number) => (
               <article key={property.id} className={`group relative w-full xl:w-[80%] ${index % 2 === 0 ? 'self-start' : 'self-end'} border-b border-blue-900/30 pb-16`}>
                  <div className="relative aspect-[21/9] w-full overflow-hidden mb-12 bg-[#02040a]">
                    <Image
                      src={property.imgUrl}
                      alt={property.title}
                      fill
                      className="object-cover opacity-80 brightness-90 sepia-[0.3] hue-rotate-[180deg] saturate-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[3s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                     <div className="lg:col-span-8 space-y-4">
                        <div className="flex gap-4 items-center mb-6">
                           <span className="h-px w-12 bg-blue-500/40" />
                           <span className="text-[10px] uppercase tracking-[0.3em] text-blue-200/50 font-bold">{property.region}</span>
                        </div>
                        <h2 className="font-sans font-medium text-3xl md:text-5xl uppercase tracking-widest text-balance text-blue-50/90 leading-[1.1] mb-8">{property.title}</h2>
                        <p className="font-sans font-light text-sm md:text-base leading-loose text-blue-200/70 max-w-[50ch] italic">
                           &quot;{property.summary}&quot;
                        </p>
                     </div>
                     <div className="lg:col-span-4 flex flex-col gap-8 lg:text-right border-l border-blue-900/40 pl-8 lg:border-none lg:pl-0">
                        <div>
                           <span className="block text-[10px] uppercase tracking-[0.3em] text-blue-400/50 mb-3 font-medium">Acquisition</span>
                           <span className="text-2xl md:text-3xl uppercase tracking-widest font-light text-blue-50/90">{property.price}</span>
                        </div>
                        <div>
                           <span className="block text-[10px] uppercase tracking-[0.3em] text-blue-400/50 mb-3 font-medium">Dimensions</span>
                           <span className="text-lg md:text-xl uppercase tracking-widest font-light text-blue-100/70">{property.sizeSqm} m² / {property.bedrooms} BD</span>
                        </div>
                        <div className="flex flex-wrap lg:justify-end gap-3 mt-4">
                           {property.features?.map(feature => (
                              <span key={feature} className="text-[9px] uppercase tracking-[0.2em] text-blue-300/60 border border-blue-500/20 rounded-full px-4 py-2">
                                 {feature}
                              </span>
                           ))}
                        </div>
                     </div>
                  </div>
               </article>
            ))}
         </div>
      </section>
    </main>
  );
}
