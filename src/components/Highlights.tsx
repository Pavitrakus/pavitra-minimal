"use client";

import { useState } from "react";
import Image from "next/image";

type HighlightItem = {
  icon: React.ReactNode;
  text: React.ReactNode;
};

export function Highlights() {
  const [showAIBounty, setShowAIBounty] = useState(false);
  const [showPriceBounty, setShowPriceBounty] = useState(false);

  const items: HighlightItem[] = [
    {
      icon: "🎓",
      text: (
        <span>
          Research Fellow at IIT Kanpur under{" "}
          <a
            href="https://scholar.google.com/citations?user=jeOME6wAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text)] font-semibold link-hover"
          >
            Prof. Adithya Vadapalli
          </a>{" "}
          (CSE Dept.)
        </span>
      ),
    },
    {
      icon: "🍊",
      text: (
        <span>
          Selected for{" "}
          <a
            href="https://www.ycombinator.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--orange)] font-bold link-hover"
          >
            Y Combinator
          </a>{" "}
          Startup School India —{" "}
          <span className="text-[var(--muted)]">6% acceptance rate</span>
        </span>
      ),
    },
    {
      icon: (
        <span className="inline-flex items-center">
          <Image
            src="/vibecon-logo.png"
            alt="VibeCon"
            width={24}
            height={24}
            className="object-contain rounded-sm"
          />
        </span>
      ),
      text: (
        <span>
          Top 20 builders across India out of 20,000+ applicants at{" "}
          <a
            href="https://vibecon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--sky)] font-bold link-hover"
          >
            VIBECON
          </a>
        </span>
      ),
    },
    {
      icon: "🎙️",
      text: (
        <span>
          Interviewed{" "}
          <a
            href="https://x.com/mukundjha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text)] font-bold link-hover"
          >
            Mukund Jha
          </a>{" "}
          (Co-founder,{" "}
          <a
            href="https://emergent.sh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] font-semibold link-hover"
          >
            Emergent Labs
          </a>
          ) and{" "}
          <a
            href="https://www.ycombinator.com/people/jared-friedman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text)] font-bold link-hover"
          >
            Jared Friedman
          </a>{" "}
          (Partner, YC) @ VIBECON
        </span>
      ),
    },
    {
      icon: "🔒",
      text: (
        <span>
          Independently identified a significant security vuln in a major AI
          platform{" "}
          <button
            onClick={() => setShowAIBounty(!showAIBounty)}
            className="text-green-500 font-bold hover:text-green-400 transition-colors focus:outline-none cursor-pointer"
            title="Click to reveal"
          >
            $
          </button>
          {showAIBounty && (
            <span className="text-[var(--muted)] font-normal ml-1.5 text-base">
              (5-figure bounty)
            </span>
          )}
        </span>
      ),
    },
    {
      icon: "🐛",
      text: (
        <span>
          Discovered a pricing logic vuln in a major quick-commerce platform&apos;s API{" "}
          <button
            onClick={() => setShowPriceBounty(!showPriceBounty)}
            className="text-green-500 font-bold hover:text-green-400 transition-colors focus:outline-none cursor-pointer"
            title="Click to reveal"
          >
            $
          </button>
          {showPriceBounty && (
            <span className="text-[var(--muted)] font-normal ml-1.5 text-base">
              (6-figure bounty, via{" "}
              <a
                href="https://emergent.sh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted)] hover:text-[var(--text)] transition-colors link-hover"
              >
                Emergent Labs
              </a>
              )
            </span>
          )}
        </span>
      ),
    },
    {
      icon: "🏆",
      text: <span>Won 15+ hackathons in the last 2 months</span>,
    },
    {
      icon: "🚀",
      text: (
        <span>
          Founder of{" "}
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
          — North India&apos;s largest student tech community (4,500+ members)
        </span>
      ),
    },
    {
      icon: "📄",
      text: <span>Published a research paper on Synthetic Intelligence at 16</span>,
    },
    {
      icon: "📺",
      text: <span>Former Content Analyst at KuKu TV</span>,
    },
  ];

  return (
    <section id="highlights" className="max-w-3xl mx-auto px-5 py-20">
      <div className="divider mb-12" />

      <p className="text-xs font-mono text-[var(--muted)] tracking-widest uppercase mb-8">
        Highlights
      </p>

      <p className="text-[var(--muted)] text-sm mb-8">
        Here are the coolest things I&apos;ve done:
      </p>

      <ul className="space-y-5">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-4 group"
          >
            {/* Icon */}
            <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center text-base mt-0.5">
              {item.icon}
            </span>

            {/* Text */}
            <span className="text-[var(--text)] text-base leading-relaxed">
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
