import { countryData } from "@/data/countries";
import { notFound } from "next/navigation";
import { translateProfile } from "@/data/translations";
import { curatorialThemes } from "../../curatorialThemes";
import IndustrialTheme from "./themes/IndustrialTheme";
import WaterfrontTheme from "./themes/WaterfrontTheme";
import SanctuaryTheme from "./themes/SanctuaryTheme";
import LightTheme from "./themes/LightTheme";

export const dynamic = 'force-dynamic';

export default async function CuratedThemePage({
  params
}: {
  params: Promise<{ locale: string; themeId: string }>
}) {
  const { locale, themeId } = await params;
  
  const profile = countryData["nl"];
  if (!profile) notFound();

  const themeConfig = curatorialThemes.find(t => t.id === themeId);
  if (!themeConfig) notFound();

  const rawProperties = profile.properties.filter(property => 
    !property.isFlagship && 
    themeConfig.features.some(f => property.features?.includes(f))
  );

  const subsetProfile = { ...profile, properties: rawProperties };
  const translatedProfile = translateProfile(subsetProfile, locale);
  const properties = translatedProfile.properties;

  const props = { properties, theme: themeConfig, locale };

  switch(themeId) {
    case 'industrial': return <IndustrialTheme {...props} />;
    case 'waterfront': return <WaterfrontTheme {...props} />;
    case 'sanctuary':  return <SanctuaryTheme {...props} /> ;
    case 'light':      return <LightTheme {...props} />;
    default: notFound();
  }
}
