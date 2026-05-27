const socials = [
  { label: "Twitter / X", href: "https://twitter.com/pavitrakushwaha" },
  { label: "GitHub", href: "https://github.com/pavitrakushwaha" },
  { label: "LinkedIn", href: "https://linkedin.com/in/pavitrakushwaha" },
  { label: "byteforge", href: "https://byteforge.space" },
];

export function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-5 py-20">
      <div className="divider mb-12" />

      <p className="text-xs font-mono text-[var(--muted)] tracking-widest uppercase mb-8">
        Contact
      </p>

      <div className="space-y-6">
        <div>
          <p className="text-[var(--text)] text-2xl font-semibold leading-snug">
            Got something interesting?
            <br />
            <a
              href="mailto:pavitra@byteforge.space"
              className="text-[var(--green)] link-hover"
            >
              pavitra@byteforge.space
            </a>
          </p>
        </div>

        <p className="text-[var(--muted)] text-sm max-w-md">
          Open to research collaborations, startup ideas, interesting
          conversations, and anything that sounds fun or ridiculous enough to
          actually try.
        </p>

        <div className="flex flex-wrap gap-5 pt-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors duration-200 link-hover"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
