import Link from "next/link";

export function GlobalFooter() {
  return (
    <footer className="w-full bg-[var(--token-bg)] border-t border-[var(--token-text)]/10 pt-24 pb-8">
      <div className="layout-grid mb-24">
        <div className="col-span-full md:col-span-4 flex flex-col gap-6">
          <span className="font-serif text-3xl md:text-4xl uppercase tracking-tighter text-[var(--token-text)]">
            Velora
          </span>
          <p className="text-[var(--token-text)]/60 text-sm font-light max-w-[35ch] leading-relaxed">
            The Diplomatic Headquarters for European luxury real estate and curated architectural living.
          </p>
        </div>

        <div className="col-span-full md:col-start-7 md:col-span-2 flex flex-col gap-4 mt-12 md:mt-0">
          <span className="text-[var(--token-text)] text-xs tracking-[0.2em] uppercase font-semibold mb-2">Embassies</span>
          <Link href="/embassies/france" className="text-[var(--token-text)]/60 text-sm hover:text-[var(--token-text)] transition-colors">France</Link>
          <Link href="/embassies/italy" className="text-[var(--token-text)]/60 text-sm hover:text-[var(--token-text)] transition-colors">Italy</Link>
          <Link href="/embassies/spain" className="text-[var(--token-text)]/60 text-sm hover:text-[var(--token-text)] transition-colors">Spain</Link>
          <Link href="/embassies/greece" className="text-[var(--token-text)]/60 text-sm hover:text-[var(--token-text)] transition-colors">Greece</Link>
        </div>

        <div className="col-span-full md:col-span-2 flex flex-col gap-4 mt-12 md:mt-0">
          <span className="text-[var(--token-text)] text-xs tracking-[0.2em] uppercase font-semibold mb-2">Legal</span>
          <Link href="/privacy" className="text-[var(--token-text)]/60 text-sm hover:text-[var(--token-text)] transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="text-[var(--token-text)]/60 text-sm hover:text-[var(--token-text)] transition-colors">Terms of Service</Link>
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
