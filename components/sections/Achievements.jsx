"use client";

import { motion } from "framer-motion";
import { ACHIEVEMENTS } from "@/lib/constants";
import { Trophy, Award, Sparkles, Star } from "lucide-react";

export default function Achievements() {
  const highlighted = ACHIEVEMENTS.filter(a => a.highlight);
  const rest = ACHIEVEMENTS.filter(a => !a.highlight);

  return (
    <section id="achievements" className="w-full px-4 sm:px-6 py-2 transition-colors duration-300">
      <div className="border-t border-[var(--border-subtle)] pt-4">
         {/* Section Heading */}
        <h2 className="text-xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
          Recognition & Achievements
        </h2>

        {/* Highlighted items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
          {highlighted.map((ach, idx) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-5 rounded-xl border border-[var(--border-bright)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-elevated)] transition-colors duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="text-2xl mb-3">{ach.icon}</div>
                <h3 className="text-[14px] font-bold text-[var(--text-primary)] leading-tight mb-1">
                  {ach.title}
                </h3>
                <p className="text-[11.5px] font-mono text-[var(--accent)] mb-2">
                  {ach.event}
                </p>
                <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed">
                  {ach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other achievements in a simple clean list */}
        <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/50 divide-y divide-[var(--border-subtle)] overflow-hidden">
          {rest.map((ach, idx) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex items-start gap-4 p-4 hover:bg-[var(--bg-elevated)] transition-colors duration-200"
            >
              <span className="text-lg shrink-0 mt-0.5">{ach.icon}</span>
              <div className="flex-1 flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                <div>
                  <h4 className="text-[13.5px] font-bold text-[var(--text-primary)]">
                    {ach.title}
                  </h4>
                  <p className="text-[13px] text-[var(--text-secondary)] mt-0.5">
                    {ach.description}
                  </p>
                </div>
                <span className="text-[11px] font-mono text-[var(--text-muted)] shrink-0">
                  {ach.event}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
