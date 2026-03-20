import { MainHero } from "@/components/marketing/MainHero";

export default function Home() {
  return (
    <main className="flex flex-col min-h-[200vh]">
      <MainHero />
      
      {/* Placeholder block below the pure 100vh hero to demonstrate scrolling parallax.
          Eventually this will be the 'Cultural Authority' Ribbon and 'Global Curation' Carousel
      */}
      <section className="h-screen w-full bg-[var(--token-bg)] flex justify-center items-center">
        <p className="text-[var(--token-text)]/50 tracking-widest uppercase text-sm">
          Content continues here...
        </p>
      </section>
    </main>
  );
}
