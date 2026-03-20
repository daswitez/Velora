import { MainHero } from "@/components/marketing/MainHero";
import { TrustedBy } from "@/components/marketing/TrustedBy";
import { Philosophy } from "@/components/marketing/Philosophy";
import { GlobalCuration } from "@/components/marketing/GlobalCuration";
import { EmbassySelector } from "@/components/marketing/EmbassySelector";
import { ConciergeSearch } from "@/components/marketing/ConciergeSearch";
import { GlobalFooter } from "@/components/layout/GlobalFooter";

export default function Home() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <MainHero />
      <TrustedBy />
      <Philosophy />
      <GlobalCuration />
      <EmbassySelector />
      <ConciergeSearch />
      <GlobalFooter />
    </main>
  );
}
