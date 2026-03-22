import { CountryThemeInjector } from "@/components/providers/CountryThemeInjector";
import { countryData } from "@/data/countries";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { GlobalFooter } from "@/components/layout/GlobalFooter";
import { EmbassyNavbar } from "@/components/layout/EmbassyNavbar";

export default function NLEmbassyLayout({
  children,
}: {
  children: ReactNode;
}) {
  const profile = countryData["nl"];

  if (!profile) {
    notFound();
  }

  return (
    <>
      <CountryThemeInjector themeToken={profile.themeToken} />
      <EmbassyNavbar profile={profile} />
      {children}
      <GlobalFooter />
    </>
  );
}
