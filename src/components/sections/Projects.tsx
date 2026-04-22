"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, GitFork } from "lucide-react";
import { projects } from "@/data/projects";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" as const }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="rounded-2xl p-6 relative overflow-hidden cursor-default"
      style={{
        background: "var(--card)",
        border: `1px solid ${hovered ? project.color + "40" : "var(--border)"}`,
        transition: "border-color 0.3s ease",
      }}
    >
      {/* glow on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: `radial-gradient(ellipse at top left, ${project.color}12 0%, transparent 60%)`,
        }}
      />

      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: project.color }}
              />
              <span className="text-xs text-[var(--muted)] font-mono">
                {project.status === "live" ? "LIVE" : "WIP"}
              </span>
            </div>
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-sm text-[var(--muted)] mt-0.5">{project.subtitle}</p>
          </div>
          <div className="flex gap-2">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                style={{ background: "rgba(255,255,255,0.04)" }}
                title={link.label}
              >
                {link.label === "GitHub" ? (
                  <GitFork size={16} />
                ) : (
                  <ExternalLink size={16} />
                )}
              </a>
            ))}
          </div>
        </div>

        <p className="text-sm text-[var(--muted)] leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="space-y-3 mb-5">
          {project.highlights.map((h) => (
            <div key={h.label} className="flex gap-3">
              <span
                className="text-xs font-mono font-semibold mt-0.5 shrink-0"
                style={{ color: project.color }}
              >
                {h.label}
              </span>
              <span className="text-xs text-[var(--muted)] leading-relaxed">
                {h.detail}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-md font-mono"
              style={{
                background: "rgba(255,255,255,0.05)",
                color: "var(--muted)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-mono text-[var(--accent)] tracking-widest uppercase mb-3">
            Projects
          </p>
          <h2 className="text-4xl font-bold">만든 것들</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
