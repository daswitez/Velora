import { GlobalNavbar } from "@/components/layout/GlobalNavbar";
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
      <GlobalNavbar />
      <MainHero />
      <TrustedBy />
      <div id="embassies" className="scroll-mt-28">
        <EmbassySelector />
      </div>
      <div id="concept" className="scroll-mt-28">
        <Philosophy />
      </div>
      <div id="collection" className="scroll-mt-28">
        <GlobalCuration />
      </div>
      <div id="concierge" className="scroll-mt-28">
        <ConciergeSearch />
      </div>
      <GlobalFooter />
    </main>
  );
}
