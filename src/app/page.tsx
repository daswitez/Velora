export default function Home() {
  return (
    <main className="min-h-screen bg-brand-50 text-brand-900 flex flex-col items-center justify-center p-6">
      <div className="text-center space-y-6 max-w-3xl">
        <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight text-balance">
          VELORA
        </h1>
        <p className="font-sans text-lg md:text-xl font-light text-brand-800 tracking-wide uppercase">
          European Living, Curated.
        </p>
        <div className="w-12 h-[1px] bg-brand-900 mx-auto mt-8 opacity-20"></div>
        <p className="font-sans text-brand-800/80 text-sm max-w-lg mx-auto leading-relaxed pt-8 font-light">
          This is the Diplomatic Headquarters. From here, you will soon be able to explore the visual embassies of the Netherlands, France, Italy, Spain, Portugal, Germany, and Belgium.
        </p>
      </div>
    </main>
  );
}
