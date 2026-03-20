import Link from "next/link";

export function GlobalFooter() {
  return (
    <footer className="w-full bg-[var(--token-bg)] border-t border-[var(--token-text)]/10 pt-24 pb-8">
      <div className="layout-grid mb-24">
        
        {/* Brand Column */}
        <div className="col-span-full md:col-span-4 flex flex-col gap-6">
          <span className="font-serif text-3xl md:text-4xl uppercase tracking-tighter text-[var(--token-text)]">
            Velora
          </span>
          <p className="text-[var(--token-text)]/60 text-sm font-light max-w-[35ch] leading-relaxed">
            The Diplomatic Headquarters for European luxury real estate and curated architectural living.
          </p>
        </div>

        {/* Links Column */}
        <div className="col-span-full md:col-start-7 md:col-span-6 grid grid-cols-2 gap-12 mt-16 md:mt-0 font-sans text-sm tracking-wide">
          
          <div className="col-span-1 flex flex-col gap-5">
            <span className="font-sans text-xs tracking-[0.2em] uppercase opacity-40 mb-2">Embassies</span>
            <Link href="#nl" className="text-[var(--token-text)]/60 hover:text-[var(--token-text)] transition-colors">Netherlands</Link>
            <Link href="#fr" className="text-[var(--token-text)]/60 hover:text-[var(--token-text)] transition-colors">France</Link>
            <Link href="#it" className="text-[var(--token-text)]/60 hover:text-[var(--token-text)] transition-colors">Italy</Link>
            <Link href="#es" className="text-[var(--token-text)]/60 hover:text-[var(--token-text)] transition-colors">Spain</Link>
            <Link href="#pt" className="text-[var(--token-text)]/60 hover:text-[var(--token-text)] transition-colors">Portugal</Link>
            <Link href="#de" className="text-[var(--token-text)]/60 hover:text-[var(--token-text)] transition-colors">Germany</Link>
            <Link href="#be" className="text-[var(--token-text)]/60 hover:text-[var(--token-text)] transition-colors">Belgium</Link>
            <Link href="#gr" className="text-[var(--token-text)]/60 hover:text-[var(--token-text)] transition-colors">Greece</Link>
          </div>

          <div className="col-span-1 flex flex-col gap-5">
            <span className="font-sans text-xs tracking-[0.2em] uppercase opacity-40 mb-2">Legal</span>
            <Link href="/privacy" className="text-[var(--token-text)]/60 hover:text-[var(--token-text)] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-[var(--token-text)]/60 hover:text-[var(--token-text)] transition-colors">Terms of Service</Link>
            <span className="font-sans text-xs tracking-[0.2em] uppercase opacity-40 mt-6 mb-2">Agency</span>
            <Link href="#contact" className="text-[var(--token-text)]/60 hover:text-[var(--token-text)] transition-colors">Private Consultation</Link>
          </div>

        </div>

      </div>

      <div className="layout-grid pt-8 border-t border-[var(--token-text)]/10">
        <div className="col-span-full flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[var(--token-text)]/40 text-xs font-serif italic tracking-wide">
            "The architecture of a well-lived life."
          </span>
          <span className="text-[var(--token-text)]/30 text-[10px] tracking-widest uppercase">
            © 2026 Velora Living
          </span>
        </div>
      </div>
    </footer>
  );
}
