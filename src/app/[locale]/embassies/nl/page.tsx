import { countryData } from "@/data/countries";
import { notFound } from "next/navigation";
import { NLHero } from "./components/NLHero";
import { NLFlagship } from "./components/NLFlagship";
import { NLRegions } from "./components/NLRegions";
import { NLMarket } from "./components/NLMarket";
import { getTranslations } from "next-intl/server";
import { translateProfile } from "@/data/translations";

export const dynamic = 'force-dynamic';

export default async function NLCountryPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  let profile = countryData["nl"];

  if (!profile) {
    notFound();
  }

  // Intercept the database mock and map the values to local locale dynamically
  profile = translateProfile(profile, locale);

  const t = await getTranslations("nl");

  return (
    <main className="flex flex-col overflow-x-hidden min-h-screen">
      {/* 1. Immersive Hero + Integrated AI Search */}
      <section id="concept">
        <NLHero heroTitle={t("hero_title")} heroImage={profile.heroImage} countryName={profile.id} />

        {/* 2. Editorial Philosophy - Overlapping the Hero for a Geometric Structural Shift */}
        <div className="relative z-20 w-full pt-16 pb-24 md:pt-24 md:pb-32 bg-[var(--token-bg)] px-6 -mt-12 md:-mt-24 border-t border-white/5 shadow-[0_-10px_30px_rgba(0,0,0,0.2)]">
          <div className="max-w-[800px] mx-auto space-y-12 md:space-y-16 text-center">
            <h2 className="font-sans uppercase text-3xl md:text-5xl lg:text-[5rem] tracking-tighter leading-[0.9] text-[var(--token-text)]">
              {t("editorial_title")}
            </h2>
            <div className="space-y-8 text-[var(--token-text)]/80 text-[10px] md:text-xs uppercase tracking-[0.1em] font-medium leading-[2.2] text-left md:text-justify pt-12 border-t border-[var(--token-text)]/20">
              <p>{t("editorial_body_1")}</p>
              <p>{t("editorial_body_2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 The Cult of Light - Dutch Specific Curatorial Injection */}
      <section className="w-full bg-[var(--token-bg)] px-6 py-24 md:py-40 border-t border-[var(--token-text)]/5">
        <div className="layout-grid items-center gap-y-16">
          <div className="col-span-1 md:col-span-5 space-y-8 pr-0 md:pr-12">
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[var(--token-text)]/40 block">
              {t("light_ethos_subtitle")}
            </span>
            <h3 className="font-sans uppercase text-4xl md:text-6xl tracking-tighter leading-[0.9] text-[var(--token-text)]">
              {t("light_ethos_title")}
            </h3>
            <p className="text-[11px] uppercase tracking-[0.1em] text-[var(--token-text)]/70 leading-[1.8] font-medium border-l border-[var(--token-text)]/20 pl-6">
              {t("light_ethos_desc")}
            </p>
          </div>
          
          <div className="col-span-1 md:col-span-7 h-[50vh] md:h-[80vh] bg-[var(--token-text)]/5 relative overflow-hidden group">
            {/* Massive window geometry implying Dutch light capture. Sharp edges strictly implemented. */}
            <img 
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80" 
              alt="Dutch Light Capture"
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out brightness-90 saturate-50 contrast-125 mix-blend-luminosity opacity-80"
            />
            {/* Stark grid line overlays emphasizing structural 'Order' */}
            <div className="absolute inset-0 border-[1px] border-white/10 m-4 md:m-8 pointer-events-none" />
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* 3. Editorial Flagship Grid */}
      <section id="flagships">
        <NLFlagship properties={profile.properties} countryId={profile.id} />
      </section>

      {/* 4. Categorized Bento Grid */}
      <section id="regions">
        <NLRegions regions={profile.regionsBento || []} />
      </section>

      {/* 5. Market Block */}
      <section id="market">
        <NLMarket properties={profile.properties} countryId={profile.id} />
      </section>
    </main>
  );
}
