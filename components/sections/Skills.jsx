"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/constants";

export default function Skills() {
  const groups = Object.entries(SKILLS);

  return (
    <section id="skills" className="w-full max-w-2xl mx-auto px-6 py-2 transition-colors duration-300">
      <div className="border-t border-[var(--border-subtle)] pt-4">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
              Technical Stack
            </h2>
            <p className="text-xs text-[var(--text-muted)] mt-1">
              My engineering capabilities and specialized toolsets.
            </p>
          </div>
          <span className="text-[11px] font-mono text-[var(--text-muted)] hidden md:inline">
            Grouped by Domain · No Subjective Metrics
          </span>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {groups.map(([groupName, { icon, skills }], idx) => (
            <motion.div
              key={groupName}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-5 rounded-xl border border-[var(--border-bright)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-elevated)] transition-colors duration-300 flex flex-col gap-3"
            >
              {/* Group Title */}
              <div className="flex items-center gap-2 pb-2.5 border-b border-[var(--border-subtle)]">
                <span className="text-sm shrink-0">{icon}</span>
                <h3 className="text-[12.5px] font-bold font-mono tracking-wider uppercase text-[var(--text-primary)]">
                  {groupName}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 mt-1">
                {skills.map(skill => (
                  <span
                    key={skill}
                    className="px-2.5 py-0.5 text-[11.5px] font-medium text-[var(--text-secondary)] bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-[4px] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
