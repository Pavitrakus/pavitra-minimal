"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Highlights", href: "#highlights" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "nav-blur border-b border-[var(--border)] bg-[var(--bg)]/80"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-3xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Left: name */}
        <a
          href="#"
          className="text-sm font-mono text-[var(--text)] tracking-tight hover:text-[var(--green)] transition-colors duration-200"
        >
          pavitra.
        </a>

        {/* Center: availability badge */}
        <span className="hidden sm:flex items-center gap-1.5 text-xs text-[var(--muted)]">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-pulse" />
          available for work
        </span>

        {/* Right: nav links */}
        <div className="flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs text-[var(--muted)] hover:text-[var(--text)] transition-colors duration-200 tracking-wide uppercase"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
