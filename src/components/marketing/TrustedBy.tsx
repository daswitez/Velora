export function TrustedBy() {
  return (
    <section className="w-full bg-[var(--token-bg)] border-b border-[var(--token-text)]/10">
      <div className="grid grid-cols-2 lg:grid-cols-6 divide-x divide-y lg:divide-y-0 divide-[var(--token-text)]/10 border-t border-[var(--token-text)]/10">
        
        {/* Publication 1 */}
        <div className="flex items-center justify-center py-10 px-6 opacity-40 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0 cursor-default">
          <span className="font-serif text-lg tracking-widest uppercase">Vogue Living</span>
        </div>

        {/* Publication 2 */}
        <div className="flex items-center justify-center py-10 px-6 opacity-40 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0 cursor-default">
          <span className="font-sans text-xs tracking-[0.3em] uppercase font-bold text-center">Architectural<br/>Digest</span>
        </div>

        {/* Publication 3 */}
        <div className="flex items-center justify-center py-10 px-6 opacity-40 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0 cursor-default">
          <span className="font-serif text-2xl tracking-tighter">Monocle</span>
        </div>

        {/* Publication 4 */}
        <div className="flex items-center justify-center py-10 px-6 opacity-40 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0 cursor-default">
          <span className="font-serif italic text-xl tracking-wider">Kinfolk</span>
        </div>

        {/* Publication 5 */}
        <div className="flex items-center justify-center py-10 px-6 opacity-40 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0 cursor-default">
           <span className="font-sans text-[10px] tracking-widest uppercase border border-[var(--token-text)] px-3 py-1.5">Financial Times</span>
        </div>

        {/* Publication 6 */}
        <div className="flex items-center justify-center py-10 px-6 opacity-40 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0 cursor-default">
          <span className="font-serif text-2xl tracking-widest uppercase text-center leading-none">WSJ.</span>
        </div>

      </div>
    </section>
  );
}
