import Link from "next/link";
import { useTranslations } from "next-intl";

export function GlobalFooter() {
  const t = useTranslations("Footer");
  const tCountries = useTranslations("EmbassySelector");

  return (
    <footer className="w-full bg-[var(--token-bg)] border-t border-[var(--token-text)]/10 pt-24 pb-8">
      <div className="layout-grid mb-24">
        
        {/* Brand Column */}
        <div className="col-span-full md:col-span-4 flex flex-col gap-6">
          <span className="font-serif text-3xl md:text-4xl uppercase tracking-tighter text-[var(--token-text)]">
            Velora
          </span>
          <p className="text-[var(--token-text)]/60 text-sm font-light max-w-[35ch] leading-relaxed">
            {t("desc")}
          </p>
        </div>

        {/* Links Column */}
        <div className="col-span-full md:col-start-7 md:col-span-6 grid grid-cols-2 gap-12 mt-16 md:mt-0 font-sans text-sm tracking-wide">
          
          <div className="col-span-1 flex flex-col gap-5">
            <span className="font-sans text-xs tracking-[0.2em] uppercase opacity-40 mb-2">{t("embassies")}</span>
            <Link href="#nl" className="text-[var(--token-text)]/60 hover:text-[var(--token-text)] transition-colors">{tCountries("nl_name")}</Link>
            <Link href="#fr" className="text-[var(--token-text)]/60 hover:text-[var(--token-text)] transition-colors">{tCountries("fr_name")}</Link>
            <Link href="#it" className="text-[var(--token-text)]/60 hover:text-[var(--token-text)] transition-colors">{tCountries("it_name")}</Link>
            <Link href="#es" className="text-[var(--token-text)]/60 hover:text-[var(--token-text)] transition-colors">{tCountries("es_name")}</Link>
            <Link href="#pt" className="text-[var(--token-text)]/60 hover:text-[var(--token-text)] transition-colors">{tCountries("pt_name")}</Link>
            <Link href="#de" className="text-[var(--token-text)]/60 hover:text-[var(--token-text)] transition-colors">{tCountries("de_name")}</Link>
            <Link href="#be" className="text-[var(--token-text)]/60 hover:text-[var(--token-text)] transition-colors">{tCountries("be_name")}</Link>
            <Link href="#gr" className="text-[var(--token-text)]/60 hover:text-[var(--token-text)] transition-colors">{tCountries("gr_name")}</Link>
          </div>

          <div className="col-span-1 flex flex-col gap-5">
            <span className="font-sans text-xs tracking-[0.2em] uppercase opacity-40 mb-2">{t("legal")}</span>
            <Link href="/privacy" className="text-[var(--token-text)]/60 hover:text-[var(--token-text)] transition-colors">{t("privacy")}</Link>
            <Link href="/terms" className="text-[var(--token-text)]/60 hover:text-[var(--token-text)] transition-colors">{t("terms")}</Link>
            <span className="font-sans text-xs tracking-[0.2em] uppercase opacity-40 mt-6 mb-2">{t("agency")}</span>
            <Link href="#contact" className="text-[var(--token-text)]/60 hover:text-[var(--token-text)] transition-colors">{t("consultation")}</Link>
          </div>

        </div>

      </div>

      <div className="layout-grid pt-8 border-t border-[var(--token-text)]/10">
        <div className="col-span-full flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[var(--token-text)]/40 text-xs font-serif italic tracking-wide">
            {t("quote")}
          </span>
          <span className="text-[var(--token-text)]/30 text-[10px] tracking-widest uppercase">
            {t("rights")}
          </span>
        </div>
      </div>
    </footer>
  );
}
