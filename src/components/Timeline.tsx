const timeline = [
  {
    org: "IIT Kanpur",
    role: "Research Fellow",
    period: "2025 — Present",
    note: "MPC & Cryptography under Prof. Adithya Vadapalli, CSE Dept.",
    link: "https://www.iitk.ac.in/",
    accent: "text-[var(--text)]",
  },
  {
    org: "Y Combinator",
    role: "Startup School India",
    period: "2025",
    note: "Selected out of thousands — 6% acceptance rate.",
    link: "https://www.ycombinator.com",
    accent: "text-[var(--orange)]",
  },
  {
    org: "VIBECON",
    role: "Top 20 Builder",
    period: "2025",
    note: "Top 20 across India out of 20,000+ applicants.",
    link: "https://vibecon.com",
    accent: "text-[var(--sky)]",
  },
  {
    org: "byteforge",
    role: "Founder",
    period: "2024 — Present",
    note: "North India's largest student tech community. 4,500+ members.",
    link: "https://byteforge.space",
    accent: "text-[var(--text)] font-playfair italic",
  },
  {
    org: "KuKu TV",
    role: "Content Analyst",
    period: "2023 — 2024",
    note: null,
    link: null,
    accent: "text-[var(--text)]",
  },
  {
    org: "DPS Kalyanpur",
    role: "High School",
    period: "Current",
    note: null,
    link: "https://dpskalyanpur.com/",
    accent: "text-green-500",
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="max-w-3xl mx-auto px-5 py-20">
      <div className="divider mb-12" />

      <p className="text-xs font-mono text-[var(--muted)] tracking-widest uppercase mb-8">
        Experience
      </p>

      <div className="space-y-8">
        {timeline.map((item, i) => (
          <div key={i} className="grid grid-cols-[1fr_auto] gap-4 items-start">
            {/* Left */}
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-semibold text-sm ${item.accent} hover:opacity-70 transition-opacity link-hover`}
                  >
                    {item.org}
                  </a>
                ) : (
                  <span className={`font-semibold text-sm ${item.accent}`}>
                    {item.org}
                  </span>
                )}
                <span className="text-[var(--border)] text-xs">·</span>
                <span className="text-[var(--muted)] text-sm">{item.role}</span>
              </div>
              {item.note && (
                <p className="text-[var(--muted)] text-xs leading-relaxed">
                  {item.note}
                </p>
              )}
            </div>

            {/* Right: period */}
            <span className="text-xs font-mono text-[var(--muted)] whitespace-nowrap mt-0.5">
              {item.period}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
