import { countryData } from "@/data/countries";
import { notFound } from "next/navigation";
import { CountryHero } from "@/components/country/CountryHero";
import { CountryFlagship } from "@/components/country/CountryFlagship";
import { CountryRegions } from "@/components/country/CountryRegions";
import { CountryMarket } from "@/components/country/CountryMarket";
import { getTranslations } from "next-intl/server";
import { translateProfile } from "@/data/translations";

export const dynamic = 'force-dynamic';

export default async function CountryPage({
  params
}: {
  params: Promise<{ locale: string; country: string }>
}) {
  const { locale, country } = await params;
  let profile = countryData[country];

  if (!profile) {
    notFound();
  }

  // Intercept the database mock and map the values to local locale dynamically
  profile = translateProfile(profile, locale);

  const t = await getTranslations(country);

  return (
    <main className="flex flex-col overflow-x-hidden min-h-screen">
      {/* 1. Immersive Hero + Integrated AI Search */}
      <section id="concept">
        <CountryHero heroTitle={t("hero_title")} heroImage={profile.heroImage} countryName={profile.id} />

        {/* 2. Editorial Philosophy - Overlapping the Hero for a Premium Transition */}
        <div className="relative z-20 w-full pt-16 pb-24 md:pt-24 md:pb-32 bg-[var(--token-bg)] px-6 shadow-[0_-20px_40px_rgba(0,0,0,0.1)] -mt-12 md:-mt-24 rounded-t-[2rem] md:rounded-t-[4rem]">
          <div className="max-w-[800px] mx-auto space-y-12 md:space-y-16 text-center">
            <h2 className="font-serif text-3xl md:text-5xl lg:text-[4rem] tracking-tight leading-[1.1] text-[var(--token-text)]">
              {t("editorial_title")}
            </h2>
            <div className="space-y-8 text-[var(--token-text)]/80 text-sm md:text-base leading-[2.2] tracking-wide text-left md:text-justify pt-8 border-t border-[var(--token-text)]/15">
              <p>{t("editorial_body_1")}</p>
              <p>{t("editorial_body_2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Editorial Flagship Grid */}
      <section id="flagships">
        <CountryFlagship properties={profile.properties} countryId={profile.id} />
      </section>

      {/* 4. Categorized Bento Grid */}
      <section id="regions">
        <CountryRegions regions={profile.regionsBento || []} />
      </section>

      {/* 5. Market Block */}
      <section id="market">
        <CountryMarket properties={profile.properties} countryId={profile.id} />
      </section>
    </main>
  );
}
