"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Heart, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-[var(--border)] py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-display text-lg font-bold text-[var(--warm)]">
              <span className="text-[var(--accent)]">D</span>ominic
              <span className="text-[var(--accent)]">.</span>
            </span>
            <p className="text-xs text-[var(--warm-muted)] flex items-center gap-1">
              Crafted with <Heart size={10} className="text-red-400 fill-red-400" /> and{" "}
              <span className="font-mono text-[var(--accent)]">Next.js</span>
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-6" role="list">
              {["About", "Projects", "Skills", "Experience", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() =>
                      document
                        .getElementById(item.toLowerCase())
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-xs font-medium text-[var(--warm-muted)] hover:text-[var(--accent)] transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social + back to top */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/dominic-ajiton-a-173b61236", label: "LinkedIn" },
              { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg text-[var(--warm-muted)] hover:text-[var(--accent)] transition-colors duration-200"
              >
                <Icon size={16} />
              </a>
            ))}

            <div className="w-px h-4 bg-[var(--border)] mx-1" aria-hidden="true" />

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Back to top"
              className="p-2 rounded-lg border border-[var(--border)] text-[var(--warm-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-200"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--border)] text-center">
          <p className="text-xs text-[var(--warm-muted)]">
            © {new Date().getFullYear()} Dominic Ajiton. All rights reserved. · Built with{" "}
            <span className="font-mono text-[var(--accent)]">Next.js 15</span>,{" "}
            <span className="font-mono text-[var(--accent)]">Tailwind CSS</span>, and{" "}
            <span className="font-mono text-[var(--accent)]">Framer Motion</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
