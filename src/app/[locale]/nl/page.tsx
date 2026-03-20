import { countryData } from "@/data/countries";
import { CountryThemeInjector } from "@/components/providers/CountryThemeInjector";
import { GlobalFooter } from "@/components/layout/GlobalFooter";
import { NLHeroSearch } from "@/components/nl/NLHeroSearch";
import { NLRegionalGrid } from "@/components/nl/NLRegionalGrid";
import { NLHorizontalGallery } from "@/components/nl/NLHorizontalGallery";
import { NLMarketBrowser } from "@/components/nl/NLMarketBrowser";

export const dynamic = 'force-dynamic';

// This is the DEDICATED Netherlands Embassy Page.
export default async function NetherlandsPage() {
  const profile = countryData["nl"];

  return (
    <main className="flex flex-col overflow-x-hidden min-h-screen">
      <CountryThemeInjector themeToken={profile.themeToken} />
      
      {/* 1. Immersive Hero + Integrated AI Search */}
      <NLHeroSearch heroTitle={profile.heroTitle} heroImage={profile.heroImage} />

      {/* 2. Editorial Philosophy - Overlapping the Hero for a Premium Transition */}
      <section className="relative z-20 w-full pt-16 pb-24 md:pt-24 md:pb-32 bg-[var(--token-bg)] px-6 shadow-[0_-20px_40px_rgba(0,0,0,0.1)] -mt-12 md:-mt-24 rounded-t-[2rem] md:rounded-t-[4rem]">
        <div className="max-w-[800px] mx-auto space-y-12 md:space-y-16 text-center">
           <h2 className="font-serif text-3xl md:text-5xl lg:text-[4rem] tracking-tight leading-[1.1] text-[var(--token-text)]">
             {profile.editorialTitle}
           </h2>
           <div className="space-y-8 text-[var(--token-text)]/80 text-sm md:text-base leading-[2.2] tracking-wide text-left md:text-justify pt-8 border-t border-[var(--token-text)]/15">
             {profile.editorialBody.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
             ))}
           </div>
        </div>
      </section>

      {/* 3. Horizontal Pinned Image Gallery (GSAP) */}
      <NLHorizontalGallery properties={profile.properties} />

      {/* 4. Categorized Bento Grid */}
      <NLRegionalGrid />

      {/* 5. Market Block */}
      <NLMarketBrowser properties={profile.properties} />

      <GlobalFooter />
    </main>
  );
}
