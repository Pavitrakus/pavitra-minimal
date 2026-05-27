export function Hero() {
  return (
    <section className="min-h-[100dvh] flex flex-col justify-center max-w-3xl mx-auto px-5 pt-20 pb-16">
      {/* Eyebrow */}
      <p className="fade-up fade-up-1 text-xs font-mono text-[var(--muted)] tracking-widest uppercase mb-6">
        New Delhi, India · 2026
      </p>

      {/* Name */}
      <h1 className="fade-up fade-up-2 text-5xl sm:text-7xl font-bold tracking-tight text-[var(--text)] leading-[1.05] mb-6">
        Pavitra<br />
        <span className="font-playfair italic font-normal text-[var(--muted)]">
          Kushwaha
        </span>
      </h1>

      {/* Tagline */}
      <p className="fade-up fade-up-3 text-lg sm:text-xl text-[var(--muted)] max-w-xl leading-relaxed mb-10">
        Builder, researcher, and teenage founder obsessed with intelligence —
        how to build it, accelerate it, and eventually, define it.
      </p>

      {/* CTAs */}
      <div className="fade-up fade-up-4 flex items-center gap-6">
        <a
          href="#highlights"
          className="text-sm text-[var(--text)] border border-[var(--border)] px-5 py-2.5 rounded-sm hover:border-[var(--muted)] hover:bg-[var(--surface)] transition-all duration-200"
        >
          What I&apos;ve done →
        </a>
        <a
          href="mailto:pavitra@byteforge.space"
          className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors duration-200 link-hover"
        >
          say hello
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1 opacity-20">
        <span className="text-xs font-mono text-[var(--muted)] tracking-widest">scroll</span>
        <span className="text-[var(--muted)]">↓</span>
      </div>
    </section>
  );
}
