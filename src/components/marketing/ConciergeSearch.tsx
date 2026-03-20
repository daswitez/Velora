import { ArrowRight, Sparkles } from "lucide-react";

export function ConciergeSearch() {
  return (
    <section className="w-full py-40 md:py-64 bg-brand-950 flex justify-center items-center relative overflow-hidden">
      
      {/* Subtle background glow to add to the 'Concierge' glowing effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="layout-grid w-full relative z-10">
        <div className="col-span-full md:col-start-3 md:col-span-8 flex flex-col items-center text-center gap-12">
          
          <div className="flex flex-col gap-6 items-center">
            <span className="flex items-center gap-3 text-white/50 text-xs tracking-[0.3em] uppercase">
              <Sparkles className="w-4 h-4 stroke-[1.5]" /> The AI Concierge
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-white tracking-tight leading-[1.1] text-balance">
              Tell us exactly how you want to live.
            </h2>
            <p className="text-white/60 font-sans text-sm md:text-base font-light max-w-[50ch] leading-[1.8]">
              Skip the filters. Describe your ideal European lifestyle, architectural preferences, or atmosphere. We will curate the perfect exact match.
            </p>
          </div>

          <div className="w-full relative max-w-2xl mt-8 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-white/10 via-white/5 to-white/10 rounded-full blur-md opacity-30 group-focus-within:opacity-60 transition-opacity duration-700" />
            <div className="relative flex items-center bg-[#0A0A0A] border border-white/10 rounded-full p-2 pl-6 md:pl-8 transition-all duration-500 focus-within:border-white/30 focus-within:bg-[#111111]">
              <input 
                type="text" 
                placeholder="e.g. A bright, airy space in Spain where I can paint..."
                // Not linking state just yet, strictly UI mock per `task.md` step 5
                className="w-full bg-transparent text-white/90 placeholder:text-white/30 text-sm md:text-base outline-none font-sans font-light"
              />
              <button className="bg-white text-black rounded-full p-4 md:p-5 flex items-center justify-center hover:scale-95 transition-transform duration-300">
                <ArrowRight className="w-5 h-5 stroke-[1.5]" />
              </button>
            </div>
          </div>

          <div className="flex gap-6 opacity-60 text-[10px] tracking-widest uppercase text-white mt-4">
            <span className="border-b border-white/20 pb-1 cursor-pointer hover:text-white hover:border-white transition-colors duration-300">"Quiet Tuscan Villa"</span>
            <span className="border-b border-white/20 pb-1 cursor-pointer hover:text-white hover:border-white transition-colors duration-300">"Historic Paris Loft"</span>
          </div>

        </div>
      </div>
    </section>
  );
}
