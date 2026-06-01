"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const router = useRouter();

  return (
    <section id="experience" className="w-full max-w-2xl mx-auto px-6 py-12 transition-colors duration-300">
      <div className="border-t border-[var(--border-subtle)] pt-12">
        {/* Section Heading */}
        <h2 className="text-xl font-bold tracking-tight text-[var(--text-primary)] mb-8">
          Experience
        </h2>

        {/* Experience Compact List */}
        <div className="flex flex-col gap-6">
          {EXPERIENCE.map((exp, idx) => {
            const isWorking = idx === 0;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2"
              >
                {/* Left Side: Company & Role */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-[15px] font-bold text-[var(--text-primary)] leading-tight group-hover:text-[var(--accent)] transition-colors">
                      {exp.company}
                    </h3>
                    {isWorking && (
                      <span className="flex items-center gap-1 px-2 py-0.2 text-[9px] font-bold font-mono uppercase tracking-wider text-[var(--color-status-green)] bg-[var(--color-status-green-glow)] rounded-full">
                        <span className="h-1 w-1 rounded-full bg-[var(--color-status-green)] animate-pulse"></span>
                        Working
                      </span>
                    )}
                  </div>
                  <span className="text-[13px] text-[var(--text-secondary)] mt-0.5">
                    {exp.role}
                  </span>
                </div>

                {/* Right Side: Duration & Location */}
                <div className="flex flex-col sm:items-end gap-0.5 text-xs text-[var(--text-muted)] font-mono shrink-0">
                  <span>{exp.duration}</span>
                  <span>{exp.location}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Show all experiences button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => router.push("/work")}
            className="group/btn inline-flex items-center justify-center rounded-lg border border-[var(--border-bright)] bg-[var(--bg-secondary)] px-4 py-2 text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-all cursor-pointer shadow-sm"
          >
            Show all work experiences
          </button>
        </div>
      </div>
    </section>
  );
}
