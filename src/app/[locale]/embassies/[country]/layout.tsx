import { CountryThemeInjector } from "@/components/providers/CountryThemeInjector";
import { countryData } from "@/data/countries";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { GlobalFooter } from "@/components/layout/GlobalFooter";
import { EmbassyNavbar } from "@/components/layout/EmbassyNavbar";

export default async function EmbassyLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string; country: string }>;
}) {
  const { country } = await params;
  const profile = countryData[country];

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
