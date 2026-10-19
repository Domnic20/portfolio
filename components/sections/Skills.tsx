"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Reveal, StaggerReveal, staggerChild } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skills, type Skill } from "@/lib/data";
import { cn } from "@/lib/utils";

const categories = [
  { key: "all", label: "All Skills" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "tools", label: "DevOps & Tools" },
  { key: "design", label: "Design" },
] as const;

const categoryColors: Record<Skill["category"], string> = {
  frontend: "#00F5D4",
  backend: "#00C4FF",
  tools: "#9B7FFF",
  design: "#FF7F9B",
};

function SkillBar({ skill, animate }: { skill: Skill; animate: boolean }) {
  const color = categoryColors[skill.category];

  return (
    <motion.div variants={staggerChild} className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: color }}
            aria-hidden="true"
          />
          <span className="text-sm font-medium text-[var(--warm)] group-hover:text-[var(--accent)] transition-colors duration-300">
            {skill.name}
          </span>
        </div>
        <motion.span
          className="text-xs font-mono text-[var(--warm-muted)]"
          initial={{ opacity: 0 }}
          animate={animate ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          {skill.level}%
        </motion.span>
      </div>

      {/* Track */}
      <div
        className="relative h-1.5 rounded-full overflow-hidden"
        style={{ background: "var(--surface-card)" }}
        role="progressbar"
        aria-valuenow={skill.level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${skill.name} proficiency`}
      >
        {/* Fill */}
        <motion.div
          className="h-full rounded-full relative overflow-hidden"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
          }}
          initial={{ width: "0%" }}
          animate={animate ? { width: `${skill.level}%` } : { width: "0%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          {/* Shimmer */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
              backgroundSize: "200%",
            }}
            animate={{ backgroundPosition: ["200% center", "-200% center"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Glow dot */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full -translate-x-1/2"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 8px ${color}`,
          }}
          initial={{ left: "0%" }}
          animate={animate ? { left: `${skill.level}%` } : { left: "0%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        />
      </div>
    </motion.div>
  );
}

function CategoryBadge({ category }: { category: Skill["category"] }) {
  const color = categoryColors[category];
  const labels: Record<Skill["category"], string> = {
    frontend: "FE",
    backend: "BE",
    tools: "Tools",
    design: "Design",
  };

  return (
    <span
      className="px-2 py-0.5 rounded text-[10px] font-mono font-medium"
      style={{ color, background: `${color}18` }}
    >
      {labels[category]}
    </span>
  );
}

function SkillChip({ skill }: { skill: Skill }) {
  const color = categoryColors[skill.category];

  return (
    <motion.div
      variants={staggerChild}
      whileHover={{ scale: 1.05, y: -2 }}
      className="group relative flex flex-col items-center gap-3 p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] cursor-default transition-colors duration-300 hover:border-[var(--border-hover)]"
      style={{ "--skill-color": color } as React.CSSProperties}
    >
      {/* Progress ring */}
      <div className="relative w-16 h-16">
        <svg viewBox="0 0 64 64" className="w-full h-full -rotate-90">
          <circle
            cx="32"
            cy="32"
            r="26"
            fill="none"
            stroke="var(--surface)"
            strokeWidth="4"
          />
          <motion.circle
            cx="32"
            cy="32"
            r="26"
            fill="none"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 26}`}
            initial={{ strokeDashoffset: 2 * Math.PI * 26 }}
            whileInView={{
              strokeDashoffset: 2 * Math.PI * 26 * (1 - skill.level / 100),
            }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-mono font-bold" style={{ color }}>
            {skill.level}
          </span>
        </div>
      </div>

      <CategoryBadge category={skill.category} />

      <p className="text-xs font-medium text-center text-[var(--warm)] leading-tight">
        {skill.name}
      </p>
    </motion.div>
  );
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [view, setView] = useState<"bars" | "grid">("bars");
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  const filtered =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-32" aria-label="Skills">
      {/* Background accent */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[30%] h-[60%] opacity-5 pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse, var(--accent), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Skills"
          title="Technical Arsenal"
          subtitle="Technologies and tools I use to bring ideas to life — from pixel-perfect UIs to scalable backend systems."
        />

        {/* Controls */}
        <Reveal>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
            {/* Category filter */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={cn(
                    "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300",
                    activeCategory === key
                      ? "bg-[var(--accent)] text-[var(--surface)]"
                      : "border border-[var(--border)] text-[var(--warm-muted)] hover:text-[var(--warm)] hover:border-[var(--border-hover)]"
                  )}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* View toggle */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-[var(--surface-card)] border border-[var(--border)]">
              {(["bars", "grid"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200",
                    view === v
                      ? "bg-[var(--accent)] text-[var(--surface)]"
                      : "text-[var(--warm-muted)] hover:text-[var(--warm)]"
                  )}
                >
                  {v === "bars" ? "Bars" : "Grid"}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Skills display */}
        <div ref={sectionRef}>
          {view === "bars" ? (
            <StaggerReveal
              className="grid md:grid-cols-2 gap-x-16 gap-y-6"
              staggerDelay={0.06}
            >
              {filtered.map((skill) => (
                <SkillBar key={skill.name} skill={skill} animate={inView} />
              ))}
            </StaggerReveal>
          ) : (
            <StaggerReveal
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
              staggerDelay={0.05}
            >
              {filtered.map((skill) => (
                <SkillChip key={skill.name} skill={skill} />
              ))}
            </StaggerReveal>
          )}
        </div>

        {/* Tech logos strip */}
        <Reveal delay={0.3}>
          <div className="mt-20 pt-12 border-t border-[var(--border)]">
            <p className="text-center text-xs font-mono text-[var(--warm-muted)] tracking-widest uppercase mb-8">
              Also experienced with
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {[
                "Webpack", "Vite", "Jest", "Playwright", "Prisma",
                "tRPC", "Zod", "Zustand", "React Query", "MDX",
              ].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.1, color: "var(--accent)" }}
                  className="text-sm font-mono text-[var(--warm-muted)] cursor-default transition-colors duration-200"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
