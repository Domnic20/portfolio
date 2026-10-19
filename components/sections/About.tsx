"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Code2, Palette, Zap, Heart } from "lucide-react";
import { Reveal, StaggerReveal, staggerChild } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { stats } from "@/lib/data";

const values = [
  {
    icon: Code2,
    title: "Clean Architecture",
    desc: "Writing maintainable, scalable code that teams love to work with.",
  },
  {
    icon: Palette,
    title: "Design Sensibility",
    desc: "Bridging the gap between stunning design and flawless engineering.",
  },
  {
    icon: Zap,
    title: "Performance-First",
    desc: "Obsessed with speed, accessibility, and delightful user experiences.",
  },
  {
    icon: Heart,
    title: "User Empathy",
    desc: "Every decision made with real humans and their needs in mind.",
  },
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      aria-label="About me"
    >
      {/* Background accent */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[40%] h-[70%] opacity-5 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse, var(--accent), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="About Me"
          title="Crafting Digital Experiences"
          subtitle="with purpose and precision"
          align="left"
        />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image column */}
          <div className="relative order-2 lg:order-1">
            <motion.div
              style={{ y: imageY, scale: imageScale }}
              className="relative mx-auto max-w-sm lg:max-w-none"
            >
              {/* Decorative frame */}
              <div
                className="absolute -inset-4 rounded-3xl border border-[var(--accent)] opacity-20"
                aria-hidden="true"
              />
              <div
                className="absolute -inset-8 rounded-3xl border border-[var(--border)] opacity-50"
                aria-hidden="true"
              />

              {/* Floating accent dot */}
              <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 z-20 w-16 h-16 rounded-2xl bg-[var(--accent)] flex items-center justify-center shadow-lg shadow-[var(--accent-glow)]"
                aria-hidden="true"
              >
                <Code2 className="text-[var(--surface)]" size={24} />
              </motion.div>

              {/* Experience badge */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 z-20 px-4 py-3 rounded-2xl bg-[var(--surface-card)] border border-[var(--border)] shadow-xl"
                aria-hidden="true"
              >
                <p className="text-xs text-[var(--warm-muted)] font-mono">Experience</p>
                <p className="text-xl font-display font-bold text-[var(--warm)]">4+ Years</p>
              </motion.div>

              {/* Profile image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-[var(--surface-card)]">
                <Image
                  // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                  src='/images/profile.jfif'
                  alt="Dominic Ajiton - Full Stack Developer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-transparent opacity-40" />
              </div>
            </motion.div>
          </div>

          {/* Content column */}
          <div className="order-1 lg:order-2 space-y-8">
            <Reveal>
              <div className="space-y-4">
                <p className="text-lg text-[var(--warm)] leading-relaxed">
                  I&apos;m a{" "}
                  <span className="text-[var(--accent)]">full-stack developer</span>{" "}
                  based in Nagercoil, Tamil Nadu, bringing a strong blend of technical expertise
                  and a collaborative mindset to every project.
                </p>
                <p className="text-base text-[var(--warm-muted)] leading-relaxed">
                  With 4+ years at Global Software Solutions, I work across the stack with React,
                  Next.js, NestJS and Node.js, plus SQL and NoSQL databases — developing responsive
                  web applications, optimizing performance, and implementing RESTful APIs.
                </p>
                <p className="text-base text-[var(--warm-muted)] leading-relaxed">
                  I thrive in team environments, value clear communication, and am passionate
                  about clean, maintainable code. My goal is to create seamless user experiences
                  while delivering robust, scalable solutions.
                </p>
              </div>
            </Reveal>

            {/* Stats */}
            <StaggerReveal className="grid grid-cols-2 gap-4" staggerDelay={0.08}>
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={staggerChild}
                  className="card p-5 rounded-2xl"
                >
                  <p className="font-display text-3xl font-bold text-[var(--accent)]">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[var(--warm-muted)] mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </StaggerReveal>

            {/* Values */}
            <StaggerReveal className="grid sm:grid-cols-2 gap-3" staggerDelay={0.08} delay={0.1}>
              {values.map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={staggerChild}
                  className="group flex items-start gap-3 p-4 rounded-xl border border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-[var(--surface-card)] transition-all duration-300"
                >
                  <div className="mt-0.5 p-2 rounded-lg bg-[var(--accent-glow)] text-[var(--accent)] group-hover:scale-110 transition-transform duration-300">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--warm)]">{title}</p>
                    <p className="text-xs text-[var(--warm-muted)] mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
