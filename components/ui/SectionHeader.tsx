"use client";

import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal delay={0}>
          <span className="inline-flex items-center gap-2 text-xs font-mono font-medium tracking-[0.2em] uppercase text-[var(--accent)] mb-4">
            <span className="w-8 h-px bg-[var(--accent)]" aria-hidden="true" />
            {eyebrow}
            <span className="w-8 h-px bg-[var(--accent)]" aria-hidden="true" />
          </span>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--warm)] leading-[1.05]">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className="mt-4 text-lg text-[var(--warm-muted)] max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
