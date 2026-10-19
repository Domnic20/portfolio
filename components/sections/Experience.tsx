"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Clock, Sparkles } from "lucide-react";
import { Reveal, StaggerReveal, staggerChild } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { experiences } from "@/lib/data";
import { cn } from "@/lib/utils";

const typeColors = {
  "full-time": { bg: "var(--accent-glow)", text: "var(--accent)", label: "Full-time" },
  "freelance": { bg: "rgba(155, 127, 255, 0.12)", text: "#9B7FFF", label: "Freelance" },
  "contract": { bg: "rgba(255, 196, 0, 0.12)", text: "#FFC400", label: "Contract" },
};

function TimelineItem({
  experience,
  index,
  isLast,
}: {
  experience: (typeof experiences)[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const type = typeColors[experience.type];

  return (
    <div ref={ref} className="relative flex gap-6 md:gap-10">
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.15, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative z-10 w-10 h-10 rounded-full border-2 flex items-center justify-center shrink-0"
          style={{
            borderColor: type.text,
            background: type.bg,
            boxShadow: inView ? `0 0 20px ${type.bg}` : "none",
          }}
        >
          <Briefcase size={16} style={{ color: type.text }} />
        </motion.div>

        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.15 + 0.3, ease: "easeOut" }}
            className="w-px flex-1 mt-2 origin-top"
            style={{
              background: `linear-gradient(to bottom, ${type.text}40, var(--border))`,
            }}
          />
        )}
      </div>

      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: index * 0.15 + 0.1, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "card group flex-1 p-6 md:p-8 rounded-2xl mb-10",
          "hover:shadow-xl"
        )}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-display text-lg font-bold text-[var(--warm)] group-hover:text-[var(--accent)] transition-colors duration-300">
                {experience.role}
              </h3>
              <span
                className="px-2 py-0.5 rounded-full text-xs font-mono font-medium"
                style={{ color: type.text, background: type.bg }}
              >
                {type.label}
              </span>
            </div>
            <p className="text-base font-semibold" style={{ color: type.text }}>
              {experience.company}
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--warm-muted)] shrink-0">
            <Clock size={12} />
            {experience.period}
          </div>
        </div>

        <p className="text-sm text-[var(--warm-muted)] leading-relaxed mb-5">
          {experience.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-2" aria-label="Key highlights">
          {experience.highlights.map((highlight, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.15 + 0.4 + i * 0.06, duration: 0.4 }}
              className="flex items-start gap-2.5 text-sm text-[var(--warm-muted)]"
            >
              <span
                className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: type.text }}
                aria-hidden="true"
              />
              {highlight}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="relative py-32"
      aria-label="Work experience"
    >
      {/* Background */}
      <div
        className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse at right, var(--accent), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've Built"
          subtitle="A journey through the companies and projects that shaped my expertise and perspective."
        />

        {/* Timeline layout */}
        <div className="max-w-3xl mx-auto">
          {/* Current status banner */}
          <Reveal>
            <div className="flex items-center gap-3 mb-12 px-5 py-4 rounded-2xl border border-[var(--accent)]/30 bg-[var(--accent-glow)]">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-[var(--accent)]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--accent)]">
                  Currently at Global Software Solutions
                </p>
                <p className="text-xs text-[var(--warm-muted)]">
                  Full Stack Developer · Building scalable web applications
                </p>
              </div>
              <Sparkles size={16} className="text-[var(--accent)] ml-auto" />
            </div>
          </Reveal>

          {/* Timeline items */}
          {experiences.map((exp, i) => (
            <TimelineItem
              key={exp.id}
              experience={exp}
              index={i}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>

        {/* Education / Certifications */}
        <Reveal delay={0.2}>
          <div className="mt-8 max-w-3xl mx-auto">
            <h3 className="font-display text-xl font-bold text-[var(--warm)] mb-6 text-center">
              Education & Certifications
            </h3>
            <StaggerReveal className="grid sm:grid-cols-2 gap-4" staggerDelay={0.08}>
              {[
                {
                  title: "B.E. Computer Science",
                  org: "St. Xavier's Catholic College of Engineering",
                  year: "2015 – 2022",
                  desc: "Bachelor of Engineering in Computer Science",
                },
                {
                  title: "AWS Academy Graduate",
                  org: "AWS Academy",
                  year: "",
                  desc: "AWS Academy Cloud Architecting",
                },
              ].map((edu) => (
                <motion.div
                  key={edu.title}
                  variants={staggerChild}
                  className="card p-5 rounded-2xl"
                >
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-sm font-semibold text-[var(--warm)]">{edu.title}</p>
                    <span className="text-xs font-mono text-[var(--accent)]">{edu.year}</span>
                  </div>
                  <p className="text-xs font-medium text-[var(--accent)] mb-1">{edu.org}</p>
                  <p className="text-xs text-[var(--warm-muted)]">{edu.desc}</p>
                </motion.div>
              ))}
            </StaggerReveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
