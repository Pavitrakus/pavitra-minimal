"use client";

import { useState } from "react";

export function About() {
  const [showPaxus, setShowPaxus] = useState(false);

  return (
    <section id="about" className="max-w-3xl mx-auto px-5 py-20">
      <p className="text-xs font-mono text-[var(--muted)] tracking-widest uppercase mb-8">
        About
      </p>

      <div className="space-y-5 text-[var(--text)] text-lg leading-relaxed">
        <p>
          I&apos;m{" "}
          <span className="font-playfair font-semibold italic">
            Pavitra Kushwaha
          </span>
          , a builder and{" "}
          <a
            href="https://www.stanford.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--red)] font-semibold link-hover"
          >
            wannabe Stanford
          </a>{" "}
          guy. Currently at{" "}
          <a
            href="https://dpskalyanpur.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 font-semibold link-hover"
          >
            DPS
          </a>
          .
        </p>

        <p>
          I&apos;m obsessed with understanding intelligence — how to build it,
          accelerate it, and eventually, define it. I&apos;m the founder of{" "}
          <button
            onClick={() => setShowPaxus(!showPaxus)}
            className="font-semibold text-[var(--text)] hover:text-[var(--green)] transition-colors focus:outline-none cursor-pointer"
          >
            PaXus
          </button>
          {showPaxus && (
            <span className="text-[var(--muted)] text-base font-normal">
              {" "}
              (a multi-venture technology company across AI, software, and
              intelligent systems)
            </span>
          )}{" "}
          and{" "}
          <a
            href="https://byteforge.space"
            target="_blank"
            rel="noopener noreferrer"
            className="font-playfair font-bold text-[var(--text)] hover:text-[var(--green)] transition-colors"
          >
            byteforge
          </a>
          <span className="text-[var(--green)] font-black font-serif select-none">
            .
          </span>{" "}
          My goal is to build something massive and make a dent in Silicon
          Valley.
        </p>

        <p>
          For fun, I break APIs, win hackathons, write about 2045, research the{" "}
          <a
            href="https://www.simulation-argument.com/simulation.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 hover:text-amber-400 transition-colors link-hover"
          >
            Simulation Hypothesis
          </a>
          , and go on long bike rides.
        </p>
      </div>

      {/* Now / Did timeline */}
      <div className="mt-12 border-l border-[var(--border)] pl-6 space-y-6">
        <div className="relative">
          <span className="absolute -left-[25px] top-1.5 w-2 h-2 rounded-full bg-[var(--green)]" />
          <p className="text-xs font-mono text-[var(--green)] tracking-widest uppercase mb-1">
            Now
          </p>
          <p className="text-[var(--text)] text-sm">
            Building ORCA — agentic AI for Android via WhatsApp & Telegram
          </p>
          <p className="text-[var(--muted)] text-sm mt-0.5">
            Researching MPC/Cryptography with{" "}
            <a
              href="https://scholar.google.com/citations?user=jeOME6wAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text)] hover:text-[var(--green)] transition-colors link-hover"
            >
              Prof. Adithya Vadapalli
            </a>{" "}
            @ IIT Kanpur
          </p>
        </div>

        <div className="relative">
          <span className="absolute -left-[25px] top-1.5 w-2 h-2 rounded-full bg-[var(--border)]" />
          <p className="text-xs font-mono text-[var(--muted)] tracking-widest uppercase mb-1">
            Did
          </p>
          <p className="text-[var(--muted)] text-sm">
            <span className="font-playfair font-bold text-[var(--text)]">
              byteforge
            </span>
            <span className="text-[var(--green)] font-black font-serif select-none">
              .
            </span>{" "}
            · PaXus · Execron · ORBIS
          </p>
        </div>
      </div>
    </section>
  );
}
