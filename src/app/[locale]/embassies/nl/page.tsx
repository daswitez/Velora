import { countryData } from "@/data/countries";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
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

  if (locale !== "nl" && locale !== "en") {
    redirect("/nl/embassies/nl");
  }

  let profile = countryData["nl"];

  if (!profile) {
    notFound();
  }

  // Intercept the database mock and map the values to local locale dynamically
  profile = translateProfile(profile, locale);
  const saleCount = profile.properties.filter((property) => property.operation === "sale").length;
  const rentCount = profile.properties.filter((property) => property.operation === "rent").length;
  const regionCount = profile.regionsBento?.length ?? 0;

  const t = await getTranslations("nl");

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-[var(--token-bg)]">
      <NLHero
        heroTitle={t("hero_title")}
        heroImage={profile.heroImage}
        countryName={profile.id}
        saleCount={saleCount}
        rentCount={rentCount}
        regionCount={regionCount}
      />

      <section id="concept" className="scroll-mt-28 border-t border-[var(--token-text)]/10 bg-[var(--token-bg)] px-6 py-20 md:py-28">
        <div className="layout-grid gap-y-12">
          <div className="col-span-full md:col-span-4">
            <div className="space-y-6 border-l border-[var(--token-text)]/12 pl-6 md:pl-8">
              <span className="block text-[10px] uppercase tracking-[0.34em] text-[var(--token-text)]/38">
                {t("hero_title")}
              </span>
              <p className="max-w-[28ch] text-sm leading-[1.95] text-[var(--token-text)]/62 md:text-base">
                {t("hero_intro")}
              </p>
            </div>
          </div>

          <div className="col-span-full md:col-span-8">
            <div className="space-y-10 md:space-y-12">
              <h2 className="max-w-[14ch] font-sans text-4xl font-bold uppercase tracking-tighter leading-[0.92] text-[var(--token-text)] md:text-6xl lg:text-[5.2rem]">
                {t("editorial_title")}
              </h2>
              <div className="grid grid-cols-1 gap-8 border-t border-[var(--token-text)]/12 pt-8 md:grid-cols-2 md:gap-10 md:pt-10">
                <p className="text-sm leading-[2] text-[var(--token-text)]/72 md:text-[15px]">
                  {t("editorial_body_1")}
                </p>
                <p className="text-sm leading-[2] text-[var(--token-text)]/72 md:text-[15px]">
                  {t("editorial_body_2")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full border-t border-[var(--token-text)]/6 bg-[var(--token-bg)] px-6 py-20 md:py-32">
        <div className="layout-grid items-center gap-y-16">
          <div className="col-span-full md:col-span-5 space-y-8 pr-0 md:pr-12">
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[var(--token-text)]/40 block">
              {t("light_ethos_subtitle")}
            </span>
            <h3 className="font-sans uppercase text-4xl md:text-6xl tracking-tighter leading-[0.9] text-[var(--token-text)]">
              {t("light_ethos_title")}
            </h3>
            <p className="border-l border-[var(--token-text)]/20 pl-6 text-sm leading-[1.95] text-[var(--token-text)]/68 md:text-base">
              {t("light_ethos_desc")}
            </p>
          </div>
          
          <div className="col-span-full md:col-span-7 h-[50vh] md:h-[80vh] bg-[var(--token-text)]/5 relative overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80" 
              alt="Dutch Light Capture"
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out brightness-90 saturate-50 contrast-125 mix-blend-luminosity opacity-80"
            />
            <div className="absolute inset-0 border-[1px] border-white/10 m-4 md:m-8 pointer-events-none" />
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none" />
            <div className="absolute left-4 right-4 bottom-4 md:left-8 md:right-auto md:bottom-8 md:w-[22rem] border border-white/10 bg-[var(--token-bg)]/92 p-5 backdrop-blur-md">
              <span className="block text-[10px] uppercase tracking-[0.32em] text-[var(--token-text)]/38">
                {t("hero_title")}
              </span>
              <p className="mt-4 text-sm leading-[1.85] text-[var(--token-text)]/70">
                {t("hero_intro")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="flagships" className="scroll-mt-28">
        <NLFlagship properties={profile.properties} countryId={profile.id} />
      </section>

      <section id="regions" className="scroll-mt-28">
        <NLRegions regions={profile.regionsBento || []} />
      </section>

      <section id="market" className="scroll-mt-28">
        <NLMarket properties={profile.properties} countryId={profile.id} />
      </section>
    </main>
  );
}
