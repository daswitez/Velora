import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Property } from "@/data/countries";

export default function SanctuaryTheme({ properties, theme, locale }: { properties: Property[], theme: { title: string, subtitle: string }, locale: string }) {
  return (
    <main className="min-h-screen bg-[#f2f2f2] text-[#111] selection:bg-black selection:text-[#f2f2f2]">
      <nav className="fixed top-0 inset-x-0 z-50 p-8 flex justify-center mix-blend-difference text-[#f2f2f2]">
        <Link href={`/${locale}/embassies/nl#market`} className="text-[10px] uppercase tracking-[0.4em] font-medium opacity-50 hover:opacity-100 transition-opacity flex items-center gap-4">
          <ArrowLeft className="w-4 h-4" strokeWidth={1} />
          <span>Leave Sanctuary</span>
        </Link>
      </nav>

      <header className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4">
          <span className="text-[10px] uppercase tracking-[0.5em] opacity-30 block mb-12 font-sans font-medium">
            {theme.subtitle}
          </span>
          <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.2em] text-balance text-[#111] font-light leading-relaxed max-w-4xl">
            {theme.title}
          </h1>
      </header>

      <section className="py-32 bg-white">
         <div className="max-w-4xl mx-auto flex flex-col gap-40 px-6">
            {properties.map((property: Property) => (
               <article key={property.id} className="text-center group flex flex-col items-center">
                  <div className="relative aspect-[3/4] w-[70%] overflow-hidden mb-16 opacity-80 group-hover:opacity-100 transition-opacity duration-1000 mix-blend-multiply">
                    <Image
                      src={property.imgUrl}
                      alt={property.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h2 className="font-sans text-2xl uppercase tracking-[0.4em] leading-loose text-black/70 mb-4">{property.title}</h2>
                  <div className="flex items-center justify-center gap-6 text-[10px] uppercase tracking-[0.3em] opacity-50 font-medium mb-10">
                    <span>{property.location}</span>
                    <span className="w-1 h-1 rounded-full bg-black/20" />
                    <span>{property.price}</span>
                    <span className="w-1 h-1 rounded-full bg-black/20" />
                    <span>{property.sizeSqm} m²</span>
                  </div>
                  <p className="max-w-[45ch] text-sm leading-[2.4] text-black/70 font-sans tracking-[0.05em] opacity-80 mix-blend-multiply">
                     {property.summary}
                  </p>
               </article>
            ))}
         </div>
      </section>
    </main>
  );
}
