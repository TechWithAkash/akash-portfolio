"use client";

import { motion } from "framer-motion";
import { EDUCATION, SKILLS } from "@/lib/constants";
import { Database, Terminal, Code2, Cpu } from "lucide-react";

export default function About() {
  return (
    <section id="education" className="relative py-32 bg-[var(--color-bg-secondary)] z-10 border-t border-[var(--color-border-subtle)]">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[1px] w-12 bg-[var(--color-accent-primary)]"></span>
            <span className="text-[12px] font-mono tracking-[0.2em] uppercase text-[var(--color-accent-primary)]">
              System Logs & Capabilities
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-['Syne'] font-bold text-[var(--color-text-primary)] max-w-2xl leading-[1.1]">
            Qualifications & Skills
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[280px]">
          
          {/* Main About Card (Takes up 2x2 on large screens) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-2 md:row-span-2 lg:col-span-2 rounded-2xl border border-[var(--color-border-bright)] bg-[var(--color-bg-primary)] p-8 relative overflow-hidden flex flex-col justify-end group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <Cpu size={120} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-[var(--color-bg-primary)]/80 to-transparent z-10" />
            <div className="relative z-20 h-full flex flex-col">
              <h3 className="text-2xl font-['Syne'] font-bold text-[var(--color-text-primary)] mb-6">Academic Credentials</h3>
              
              <div className="flex-1 w-full overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[300px]">
                  <thead>
                    <tr className="border-b border-[var(--color-border-subtle)]">
                      <th className="pb-3 text-[11px] font-mono tracking-widest uppercase text-[var(--color-text-muted)] font-medium">Qualification</th>
                      <th className="pb-3 text-[11px] font-mono tracking-widest uppercase text-[var(--color-text-muted)] font-medium hidden sm:table-cell">Institution</th>
                      <th className="pb-3 text-[11px] font-mono tracking-widest uppercase text-[var(--color-text-muted)] font-medium text-right">Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {EDUCATION.map((edu, idx) => (
                      <tr key={idx} className="border-b border-[var(--color-border-subtle)]/50 last:border-0 group hover:bg-[var(--color-bg-elevated)]/30 transition-colors">
                        <td className="py-4 pr-4 align-top w-2/3 sm:w-auto">
                          <div className="text-[14.5px] font-bold text-[var(--color-text-primary)] leading-tight mb-1.5">{edu.degree}</div>
                          <div className="text-[13px] text-[var(--color-text-secondary)] mt-1 sm:hidden mb-2 leading-snug">{edu.institution}</div>
                          <div className="text-[11px] font-mono text-[var(--color-text-muted)] inline-flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-status-green)]"></span>
                            {edu.duration}
                          </div>
                        </td>
                        <td className="py-4 pr-4 hidden sm:table-cell align-top">
                          <div className="text-[13.5px] text-[var(--color-text-secondary)] leading-relaxed">{edu.institution}</div>
                        </td>
                        <td className="py-4 text-right align-top">
                          <span className="inline-block px-2.5 py-1 text-[12px] font-mono font-medium bg-[var(--color-accent-primary)]/10 text-[var(--color-accent-primary)] border border-[var(--color-accent-primary)]/20 rounded-md whitespace-nowrap">
                            {edu.grade}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Skills Grid - Frontend */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="rounded-2xl border border-[var(--color-border-bright)] bg-[var(--color-bg-elevated)] p-6 relative overflow-hidden group hover:border-[var(--color-accent-primary)]/50 transition-colors"
          >
            <div className="flex items-center gap-3 mb-6 text-[var(--color-text-primary)]">
              <Code2 size={20} className="text-[var(--color-accent-primary)]" />
              <h3 className="text-lg font-['Syne'] font-bold">Frontend Matrix</h3>
            </div>
            <div className="flex flex-wrap gap-2">
               {SKILLS.Frontend.skills.map(skill => (
                 <span key={skill} className="text-[13px] font-medium text-[var(--color-text-secondary)] bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] px-2.5 py-1 rounded">
                   {skill}
                 </span>
               ))}
            </div>
          </motion.div>

          {/* Skills Grid - Backend */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="rounded-2xl border border-[var(--color-border-bright)] bg-[var(--color-bg-elevated)] p-6 relative overflow-hidden group hover:border-[var(--color-accent-primary)]/50 transition-colors"
          >
            <div className="flex items-center gap-3 mb-6 text-[var(--color-text-primary)]">
              <Database size={20} className="text-[var(--color-status-green)]" />
              <h3 className="text-lg font-['Syne'] font-bold">Backend Systems</h3>
            </div>
            <div className="flex flex-wrap gap-2">
               {SKILLS.Backend.skills.map(skill => (
                 <span key={skill} className="text-[13px] font-medium text-[var(--color-text-secondary)] bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] px-2.5 py-1 rounded">
                   {skill}
                 </span>
               ))}
            </div>
          </motion.div>

          {/* Skills Grid - AI & Tools (Takes up 2 columns horizontally on wide screens) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="md:col-span-2 lg:col-span-2 rounded-2xl border border-[var(--color-border-bright)] bg-[var(--color-bg-elevated)] p-6 relative overflow-hidden group hover:border-[var(--color-accent-primary)]/50 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 text-[var(--color-text-primary)]">
                <Terminal size={20} className="text-[#F59E0B]" />
                <h3 className="text-lg font-['Syne'] font-bold">AI & Operations</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[...SKILLS["Tools & DevOps"].skills, ...SKILLS["AI / LLM"].skills].map(skill => (
                  <span key={skill} className="text-[13px] font-medium text-[var(--color-text-secondary)] bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] px-2.5 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full h-1 bg-[var(--color-bg-primary)] mt-6 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: "0%" }}
                 whileInView={{ width: "100%" }}
                 viewport={{ once: true }}
                 transition={{ duration: 2, delay: 0.5, ease: "circOut" }}
                 className="h-full bg-gradient-to-r from-transparent via-[var(--color-accent-primary)] to-[#F59E0B]" 
               />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
