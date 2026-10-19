"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Mail,
  MapPin,
  Clock,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Reveal, StaggerReveal, staggerChild } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(4, "Subject must be at least 4 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type FormData = z.infer<typeof schema>;

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "dominicajiton@gmail.com",
    href: "mailto:dominicajiton@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nagercoil, Tamil Nadu, India",
    href: null,
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Open to new projects",
    href: null,
  },
];

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/dominic-ajiton-a-173b61236", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-32" aria-label="Contact">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(0,245,212,0.06), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Let's Build Something"
          subtitle="Have a project in mind? I'd love to hear about it. Send me a message and let's create something great together."
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Info column */}
          <div className="lg:col-span-2 space-y-8">
            <Reveal>
              <div className="card p-8 rounded-2xl space-y-6">
                <h3 className="font-display text-lg font-bold text-[var(--warm)]">
                  Get In Touch
                </h3>
                <div className="space-y-5">
                  {contactInfo.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[var(--accent-glow)] flex items-center justify-center text-[var(--accent)] shrink-0">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-[var(--warm-muted)]">{label}</p>
                        {href ? (
                          <a
                            href={href}
                            className="text-sm font-medium text-[var(--warm)] hover:text-[var(--accent)] transition-colors duration-200"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-[var(--warm)]">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="card p-6 rounded-2xl">
                <p className="text-xs font-mono text-[var(--warm-muted)] uppercase tracking-widest mb-4">
                  Follow Me
                </p>
                <div className="flex gap-3">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex-1 flex items-center justify-center py-3 rounded-xl border border-[var(--border)] text-[var(--warm-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:bg-[var(--accent-glow)] transition-all duration-300"
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="card p-6 rounded-2xl">
                <div className="flex items-center gap-2 mb-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
                  </span>
                  <span className="text-xs font-mono text-[var(--accent)]">
                    Available for work
                  </span>
                </div>
                <p className="text-xs text-[var(--warm-muted)] leading-relaxed">
                  Currently accepting freelance projects and full-time opportunities.
                  Response time: typically within 24 hours.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3">
            <Reveal>
              <div className="card p-8 md:p-10 rounded-2xl relative overflow-hidden">
                {/* Decorative gradient */}
                <div
                  className="absolute top-0 right-0 w-48 h-48 opacity-5 pointer-events-none"
                  aria-hidden="true"
                  style={{
                    background: "radial-gradient(circle, var(--accent), transparent)",
                  }}
                />

                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex flex-col items-center justify-center py-16 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                        className="w-20 h-20 rounded-full bg-[var(--accent-glow)] flex items-center justify-center mb-6"
                      >
                        <CheckCircle size={40} className="text-[var(--accent)]" />
                      </motion.div>
                      <h3 className="font-display text-2xl font-bold text-[var(--warm)] mb-3">
                        Message Sent!
                      </h3>
                      <p className="text-[var(--warm-muted)] max-w-xs">
                        Thanks for reaching out! I&apos;ll get back to you within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-6"
                      noValidate
                    >
                      <div className="grid sm:grid-cols-2 gap-5">
                        {/* Name */}
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-xs font-mono font-medium text-[var(--warm-muted)] mb-2 uppercase tracking-wider"
                          >
                            Name *
                          </label>
                          <input
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            autoComplete="name"
                            {...register("name")}
                            className={cn(
                              "form-input w-full px-4 py-3 rounded-xl text-sm",
                              errors.name && "border-red-500/50 focus:border-red-500 focus:shadow-red-500/20"
                            )}
                          />
                          {errors.name && (
                            <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                              <AlertCircle size={11} /> {errors.name.message}
                            </p>
                          )}
                        </div>

                        {/* Email */}
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-xs font-mono font-medium text-[var(--warm-muted)] mb-2 uppercase tracking-wider"
                          >
                            Email *
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            autoComplete="email"
                            {...register("email")}
                            className={cn(
                              "form-input w-full px-4 py-3 rounded-xl text-sm",
                              errors.email && "border-red-500/50"
                            )}
                          />
                          {errors.email && (
                            <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                              <AlertCircle size={11} /> {errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-xs font-mono font-medium text-[var(--warm-muted)] mb-2 uppercase tracking-wider"
                        >
                          Subject *
                        </label>
                        <input
                          id="subject"
                          type="text"
                          placeholder="Project inquiry, collaboration, etc."
                          {...register("subject")}
                          className={cn(
                            "form-input w-full px-4 py-3 rounded-xl text-sm",
                            errors.subject && "border-red-500/50"
                          )}
                        />
                        {errors.subject && (
                          <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                            <AlertCircle size={11} /> {errors.subject.message}
                          </p>
                        )}
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-xs font-mono font-medium text-[var(--warm-muted)] mb-2 uppercase tracking-wider"
                        >
                          Message *
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          placeholder="Tell me about your project, timeline, and budget..."
                          {...register("message")}
                          className={cn(
                            "form-input w-full px-4 py-3 rounded-xl text-sm resize-none",
                            errors.message && "border-red-500/50"
                          )}
                        />
                        {errors.message && (
                          <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                            <AlertCircle size={11} /> {errors.message.message}
                          </p>
                        )}
                      </div>

                      {/* Error state */}
                      {status === "error" && (
                        <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                          <AlertCircle size={16} />
                          Something went wrong. Please try again or email me directly.
                        </div>
                      )}

                      {/* Submit */}
                      <motion.button
                        type="submit"
                        disabled={status === "loading"}
                        whileHover={{ scale: status === "loading" ? 1 : 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        className={cn(
                          "group relative w-full py-4 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden",
                          status === "loading"
                            ? "bg-[var(--accent)]/60 cursor-not-allowed"
                            : "bg-[var(--accent)] hover:shadow-lg hover:shadow-[var(--accent-glow)]",
                          "text-[var(--surface)]"
                        )}
                      >
                        {status === "loading" ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-4 h-4 border-2 border-[var(--surface)] border-t-transparent rounded-full"
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <motion.span
                              animate={{ x: [0, 3, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <Send size={16} />
                            </motion.span>
                          </>
                        )}
                        <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
