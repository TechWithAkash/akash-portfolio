"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-2 transition-colors duration-300">
      <div className="border-t border-[var(--border-subtle)] pt-4">
        {/* Section Heading */}
        <h2 className="text-xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
          Featured Projects
        </h2>

        {/* Projects Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group flex flex-col justify-between p-5 rounded-xl border border-[var(--border-bright)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-elevated)] transition-colors duration-300 relative"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className="px-2 py-0.5 text-[10.5px] font-bold font-mono uppercase tracking-wider text-[var(--accent)] bg-[var(--accent-glow)] rounded-[4px]">
                      {project.status === "live" ? "🟢 Live" : "🔧 Build"}
                    </span>
                    {project.award && (
                      <span className="text-[11px] text-[#F59E0B] font-medium truncate max-w-[200px]">
                        🏆 Winner
                      </span>
                    )}
                  </div>
                  
                  {/* Source / Live Links */}
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--text-muted)] hover:text-[var(--text-primary)] p-1 rounded transition-colors"
                        aria-label="View source code"
                      >
                        <GithubIcon size={14} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--text-muted)] hover:text-[var(--text-primary)] p-1 rounded transition-colors"
                        aria-label="View live demo"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Title & Tagline */}
                <h3 className="text-base font-bold text-[var(--text-primary)] leading-tight flex items-center gap-1 group-hover:text-[var(--accent)] transition-colors">
                  {project.title}
                  <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-[12px] font-mono text-[var(--text-muted)] mt-0.5 mb-3.5">
                  {project.tagline}
                </p>

                {/* Project Description */}
                <p className="text-[13.5px] text-[var(--text-secondary)] leading-relaxed mb-5">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 border-t border-[var(--border-subtle)] pt-4">
                  {project.stack.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] font-mono text-[var(--text-muted)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-[4px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
