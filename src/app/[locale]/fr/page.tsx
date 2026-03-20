import { countryData } from "@/data/countries";
import { CountryThemeInjector } from "@/components/providers/CountryThemeInjector";
import { GlobalFooter } from "@/components/layout/GlobalFooter";

// This is the DEDICATED France Embassy Page.
// You have complete architectural freedom here.
export default async function FrancePage() {
  const profile = countryData["fr"];

  return (
    <main className="flex flex-col overflow-x-hidden min-h-screen">
      <CountryThemeInjector themeToken={profile.themeToken} />
      
      {/* --- FRANCE SPECIFIC HERO --- */}
      <section className="relative w-full h-[80vh] bg-[var(--token-bg)] flex items-end justify-center pb-24 md:pb-32">
        <div className="absolute inset-0 z-0 overflow-hidden">
           <img 
             src={profile.heroImage} 
             alt={profile.heroTitle}
             draggable={false}
             className="w-full h-full object-cover grayscale-[0.2] brightness-75 scale-105"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-[var(--token-bg)] via-[var(--token-bg)]/40 to-transparent" />
        </div>
        <div className="relative z-10 text-center px-6">
           <h1 className="font-serif text-[var(--token-text)] text-5xl md:text-7xl lg:text-[8rem] tracking-tight text-balance leading-[0.9]">
             {profile.heroTitle}
           </h1>
           <p className="mt-6 text-[var(--token-text)]/80 tracking-[0.2em] uppercase text-sm">
             France
           </p>
        </div>
      </section>

      {/* --- FRANCE SPECIFIC LOGIC / FILTERS AREA --- */}
      <section className="w-full py-12 bg-[var(--token-bg)] px-6 border-b border-[var(--token-text)]/10">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="text-[var(--token-text)]/60 text-sm tracking-widest uppercase">
             [ Reserved for Custom FR Map & Filters ]
           </div>
           <button className="px-8 py-3 bg-[var(--token-text)] text-[var(--token-bg)] rounded-full text-sm tracking-widest uppercase hover:bg-opacity-80 transition-all">
             Initialize Custom AI Search
           </button>
        </div>
      </section>

      {/* --- FRANCE EDITORIAL CONTENT --- */}
      <section className="w-full py-24 md:py-32 bg-[var(--token-bg)] px-6">
        <div className="max-w-[800px] mx-auto space-y-12 md:space-y-16 text-center">
           <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-[var(--token-text)]">
             {profile.editorialTitle}
           </h2>
           <div className="space-y-8 text-[var(--token-text)]/80 text-sm md:text-base leading-[2.2] tracking-wide text-left md:text-justify pt-8">
             {profile.editorialBody.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
             ))}
           </div>
        </div>
      </section>

      {/* --- FRANCE PROPERTY GRID --- */}
      <section className="layout-grid pb-32 md:pb-64 bg-[var(--token-bg)]">
        <div className="col-span-full mb-16 md:mb-24 flex flex-col items-center text-center gap-6 pt-16 border-t border-[var(--token-text)]/15">
           <span className="text-[var(--token-text)]/50 text-xs tracking-[0.3em] uppercase">The Collection</span>
           <h3 className="font-serif text-4xl md:text-6xl text-[var(--token-text)]">French Curations</h3>
        </div>

        <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-24 md:gap-y-48">
           {profile.properties.map((prop, idx) => (
              <div 
                key={prop.id} 
                className={`flex flex-col gap-6 ${prop.isFlagship ? 'md:col-span-2 md:w-[85%] md:mx-auto' : ''} ${idx % 2 === 1 && !prop.isFlagship ? 'md:mt-48' : ''}`}
              >
                 <div className="relative aspect-[4/5] overflow-hidden bg-[var(--token-surface)] group cursor-pointer block">
                    <img 
                      src={prop.imgUrl} 
                      draggable={false}
                      className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                    />
                 </div>
                 <div className="flex flex-col gap-3 px-2">
                    <span className="text-[var(--token-text)]/50 text-xs tracking-[0.3em] uppercase">{prop.price}</span>
                    <span className="text-[var(--token-text)] font-serif text-3xl tracking-wide">{prop.title}</span>
                    <span className="text-[var(--token-text)]/70 text-sm tracking-wide mt-2">{prop.specs}</span>
                    <span className="text-[var(--token-text)]/40 text-xs uppercase tracking-widest">{prop.location}</span>
                 </div>
              </div>
           ))}
        </div>
      </section>

      <GlobalFooter />
    </main>
  );
}
