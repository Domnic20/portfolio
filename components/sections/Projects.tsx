"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, X, ArrowUpRight, Star } from "lucide-react";
import { Reveal, StaggerReveal, staggerChild } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      variants={staggerChild}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      aria-label={`View ${project.title} project details`}
      className="card group relative rounded-2xl overflow-hidden cursor-pointer"
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      {project.featured && (
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--accent)] text-[var(--surface)] text-xs font-semibold">
          <Star size={10} fill="currentColor" />
          Featured
        </div>
      )}

      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-[var(--surface)]/70 backdrop-blur-sm flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--accent)] text-[var(--surface)] text-sm font-semibold"
              >
                View Details
                <ArrowUpRight size={16} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-card)] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <h3 className="font-display text-lg font-bold text-[var(--warm)] group-hover:text-[var(--accent)] transition-colors duration-300">
              {project.title}
            </h3>
            <span className="text-xs font-mono text-[var(--warm-muted)]">{project.year}</span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source code"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-lg text-[var(--warm-muted)] hover:text-[var(--warm)] hover:bg-[var(--surface)] transition-colors duration-200"
              >
                <Github size={15} />
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View live project"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-lg text-[var(--warm-muted)] hover:text-[var(--accent)] hover:bg-[var(--accent-glow)] transition-colors duration-200"
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm text-[var(--warm-muted)] leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-xs font-mono font-medium text-[var(--accent)] bg-[var(--accent-glow)] border border-[var(--accent)]/20"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2.5 py-1 rounded-full text-xs font-mono text-[var(--warm-muted)]">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[var(--surface-card)] border border-[var(--border)]"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-[var(--warm-muted)] hover:text-[var(--warm)] transition-colors"
          >
            <X size={18} />
          </button>

          {/* Image */}
          <div className="relative aspect-video">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover rounded-t-2xl"
              sizes="(max-width: 768px) 100vw, 700px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-card)] via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h2
                  id="modal-title"
                  className="font-display text-2xl font-bold text-[var(--warm)]"
                >
                  {project.title}
                </h2>
                <span className="text-sm font-mono text-[var(--warm-muted)]">{project.year}</span>
              </div>
              <div className="flex gap-2">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[var(--border)] text-sm text-[var(--warm-muted)] hover:text-[var(--warm)] hover:border-[var(--border-hover)] transition-all duration-300"
                  >
                    <Github size={15} /> Code
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--accent)] text-[var(--surface)] text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink size={15} /> Live
                  </a>
                )}
              </div>
            </div>

            <p className="text-[var(--warm-muted)] leading-relaxed mb-6">
              {project.longDescription}
            </p>

            <div>
              <p className="text-xs font-mono font-medium text-[var(--accent)] uppercase tracking-widest mb-3">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-xl text-sm font-mono text-[var(--accent)] bg-[var(--accent-glow)] border border-[var(--accent)]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<"all" | "featured">("all");

  const filtered = filter === "featured"
    ? projects.filter((p) => p.featured)
    : projects;

  return (
    <section id="projects" className="relative py-32" aria-label="Projects">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Projects"
          title="Selected Work"
          subtitle="A curated collection of projects that showcase my approach to solving complex problems with clean, performant solutions."
        />

        {/* Filter */}
        <Reveal>
          <div className="flex items-center justify-center gap-2 mb-12">
            {(["all", "featured"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300",
                  filter === f
                    ? "bg-[var(--accent)] text-[var(--surface)]"
                    : "border border-[var(--border)] text-[var(--warm-muted)] hover:text-[var(--warm)] hover:border-[var(--border-hover)]"
                )}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <StaggerReveal
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </StaggerReveal>

        {/* CTA */}
        <Reveal>
          <div className="text-center mt-14">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] text-sm font-medium text-[var(--warm-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:bg-[var(--accent-glow)] transition-all duration-300"
            >
              <Github size={16} />
              More on GitHub
              <ArrowUpRight size={14} />
            </a>
          </div>
        </Reveal>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
