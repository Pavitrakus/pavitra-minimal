const projects = [
  {
    name: "ORCA",
    description:
      "Agentic AI for Android — control your phone via WhatsApp & Telegram. No app needed.",
    stack: ["TypeScript", "Node.js", "Gemini", "Android ADB"],
    status: "Building",
    href: null,
  },
  {
    name: "PaXus",
    description:
      "Multi-venture technology company driving innovation across AI, software, digital commerce, and intelligent systems.",
    stack: ["Next.js", "Python", "AI/ML"],
    status: "Live",
    href: null,
  },
  {
    name: "byteforge",
    description:
      "North India's largest independent student tech community. 4,500+ builders, hackers, and founders.",
    stack: ["Community", "Events", "Hacking"],
    status: "Live",
    href: "https://byteforge.space",
  },
];

export function Work() {
  return (
    <section id="work" className="max-w-3xl mx-auto px-5 py-20">
      <div className="divider mb-12" />

      <p className="text-xs font-mono text-[var(--muted)] tracking-widest uppercase mb-8">
        Selected Work
      </p>

      <div className="space-y-10">
        {projects.map((p, i) => (
          <div key={i} className="group">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  {/* Status dot */}
                  <span
                    className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      p.status === "Building"
                        ? "bg-[var(--green)] animate-pulse"
                        : "bg-[var(--muted)]"
                    }`}
                  />
                  <h3 className="text-[var(--text)] font-semibold text-lg leading-none">
                    {p.href ? (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--green)] transition-colors link-hover"
                      >
                        {p.name}
                      </a>
                    ) : (
                      p.name
                    )}
                  </h3>
                  <span className="text-xs font-mono text-[var(--muted)] border border-[var(--border)] px-1.5 py-0.5 rounded-sm">
                    {p.status}
                  </span>
                </div>

                <p className="text-[var(--muted)] text-sm leading-relaxed mb-3 ml-5">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-1.5 ml-5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-mono text-[var(--muted)] border border-[var(--border)] px-1.5 py-0.5 rounded-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {i < projects.length - 1 && (
              <div className="mt-10 h-px bg-[var(--border)]" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
