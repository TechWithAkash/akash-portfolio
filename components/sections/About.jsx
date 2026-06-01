"use client";

import { motion } from "framer-motion";
import { EDUCATION, ABOUT } from "@/lib/constants";
import { Award, BookOpen, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="education" className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-2 transition-colors duration-300">
      <div className="border-t border-[var(--border-subtle)] pt-4">
        {/* Section Title */}
        <h2 className="text-xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
          Academic Credentials
        </h2>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group flex flex-col justify-between p-5 rounded-xl border border-[var(--border-bright)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-elevated)] transition-colors duration-300"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-[var(--accent)]">
                    <GraduationCap size={18} />
                  </div>
                  <span className="px-2.5 py-0.5 text-xs font-mono font-semibold bg-[var(--color-status-green-glow)] text-[var(--color-status-green)] border border-[var(--color-status-green-glow)] rounded-[4px]">
                    {edu.grade}
                  </span>
                </div>

                <h3 className="text-[15px] font-bold text-[var(--text-primary)] leading-tight group-hover:text-[var(--accent)] transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-[13px] text-[var(--text-secondary)] mt-1.5 leading-snug">
                  {edu.institution}
                </p>
              </div>

              <div className="mt-4 border-t border-[var(--border-subtle)] pt-3 flex items-center justify-between text-xs text-[var(--text-muted)] font-mono">
                <span>{edu.duration}</span>
                {edu.expected && <span>{edu.expected}</span>}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Personal Bio Narrative */}
        <div className="mt-6 p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/50">
          <p className="text-[13.5px] leading-relaxed text-[var(--text-secondary)]">
            {ABOUT.paragraphs.join(" ")}
          </p>
        </div>
      </div>
    </section>
  );
}
