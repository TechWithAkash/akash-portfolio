"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { EXPERIENCE } from "@/lib/constants";
import { Calendar, MapPin, Code2 } from "lucide-react";

export default function WorkPage() {
  // Custom tech icons to render on work page
  const techIcons = {
    "Next.js": (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1.25 15.25l-4.5-6.5V17H7.25V9.5h1.5l4.5 6.5V9.5h1.5V17.25h-1.5z" />
      </svg>
    ),
    "React.js": (
      <svg className="w-5 h-5 text-[#61DAFB]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 9.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0-7.5c-4.8 0-9 1.5-11.2 3.8a.75.75 0 000 1c2.2 2.3 6.4 3.8 11.2 3.8s9-1.5 11.2-3.8a.75.75 0 000-1C21 3.5 16.8 2 12 2zm0 15c-4.8 0-9 1.5-11.2 3.8a.75.75 0 000 1c2.2 2.3 6.4 3.8 11.2 3.8s9-1.5 11.2-3.8a.75.75 0 000-1c-2.2-2.3-6.4-3.8-11.2-3.8z" />
      </svg>
    ),
    "TypeScript": (
      <svg className="w-5 h-5 text-[#3178C6]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 2H2v20h20V2zM12.35 15.55c0 1.25-.95 2.25-2.25 2.25s-2.25-1-2.25-2.25.95-2.25 2.25-2.25 2.25 1 2.25 2.25zM18.8 15c0 2.2-1.8 3-3.8 3-1.8 0-3-.6-3-1.8 0-1 1-1.6 2.2-1.6.8 0 1.5.3 1.8.6.2.2.4.6.4 1 0 .6.4.8 1 .8.6 0 1-.4 1-1 0-1.6-1.4-2.2-3-2.2-2.2 0-3.6 1.4-3.6 3.6s1.4 3.6 3.6 3.6c2.2 0 3.6-1.4 3.6-3.6V15z" />
      </svg>
    ),
    "Tailwind CSS": (
      <svg className="w-5 h-5 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 6.5c-2.4 0-4 1.2-4.8 3.6.8-2.4 2.4-3.2 4.8-2.4 1.4.5 2.4 1.5 3.5 2.6 1.8 1.8 3.9 3.9 7.7 3.9 2.4 0 4-1.2 4.8-3.6-.8 2.4-2.4 3.2-4.8 2.4-1.4-.5-2.4-1.5-3.5-2.6-1.8-1.8-3.9-3.9-7.7-3.9zM4.8 13.7c-2.4 0-4 1.2-4.8 3.6.8-2.4 2.4-3.2 4.8-2.4 1.4.5 2.4 1.5 3.5 2.6 1.8 1.8 3.9 3.9 7.7 3.9 2.4 0 4-1.2 4.8-3.6-.8 2.4-2.4 3.2-4.8 2.4-1.4-.5-2.4-1.5-3.5-2.6-1.8-1.8-3.9-3.9-7.7-3.9z" />
      </svg>
    ),
    "MongoDB": (
      <svg className="w-5 h-5 text-[#47A248]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C9.5 5.5 8 9 8 12c0 3 2.5 6.5 4 10 1.5-3.5 4-7 4-10 0-3-1.5-6.5-4-10zm-1 15c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
      </svg>
    ),
    "Node.js": (
      <svg className="w-5 h-5 text-[#339933]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L4 6.5v9L12 20l8-4.5v-9L12 2zm-1 12.5h-1.5V11H9.5v3.5H8V9.5h1.5v1.5h1.5V9.5H11v5z" />
      </svg>
    ),
  };

  const getJobTags = (company) => {
    if (company.includes("AIBI")) {
      return ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"];
    }
    return ["React.js", "TypeScript", "Tailwind CSS"];
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] transition-colors duration-300">
      <Navbar />
      <main className="max-w-2xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 border-b border-[var(--border-subtle)] pb-10"
        >
          <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Work Experience
          </h1>
          <p className="text-[14.5px] text-[var(--text-secondary)] mt-2 font-normal">
            My work experiences across different companies and roles.
          </p>
        </motion.div>

        {/* Detailed Experience Items */}
        <div className="flex flex-col gap-12">
          {EXPERIENCE.map((exp, idx) => {
            const isWorking = idx === 0; // Highlight the first/current job
            const tags = getJobTags(exp.company);

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group flex flex-col gap-6 pb-12 border-b border-[var(--border-subtle)] last:border-0"
              >
                {/* Header detail */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h2 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                        {exp.company}
                      </h2>
                      {isWorking && (
                        <span className="flex items-center gap-1.5 px-2.5 py-0.5 text-[10.5px] font-bold font-mono uppercase tracking-wider text-[var(--color-status-green)] bg-[var(--color-status-green-glow)] rounded-full">
                          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-status-green)] animate-pulse"></span>
                          Working
                        </span>
                      )}
                    </div>
                    <span className="text-[14px] font-medium text-[var(--text-secondary)] font-sans mt-0.5">
                      {exp.role}
                    </span>
                  </div>

                  {/* Date / Location */}
                  <div className="flex flex-col md:items-end gap-1 text-[12.5px] text-[var(--text-muted)] font-mono shrink-0">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Technologies and Tools Subsection */}
                <div className="flex flex-col gap-2.5">
                  <span className="text-[11px] font-bold font-mono uppercase tracking-widest text-[var(--text-muted)]">
                    Technologies & Tools
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <div
                        key={tag}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-bright)] bg-[var(--bg-secondary)] hover:border-[var(--text-muted)] transition-colors duration-200"
                        title={tag}
                      >
                        {techIcons[tag] || <Code2 size={16} className="text-[var(--text-muted)]" />}
                      </div>
                    ))}
                  </div>
                </div>

                {/* What I've Done Subsection */}
                <div className="flex flex-col gap-2.5 mt-2">
                  <span className="text-[11px] font-bold font-mono uppercase tracking-widest text-[var(--text-muted)]">
                    What I&apos;ve done
                  </span>
                  <ul className="flex flex-col gap-2 list-none">
                    {exp.bullets.map((bullet, bi) => (
                      <li
                        key={bi}
                        className="text-[14px] text-[var(--text-secondary)] leading-relaxed flex items-start gap-2.5"
                      >
                        <span className="text-[var(--accent)] shrink-0 mt-2 font-mono text-[10px]">▪</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
