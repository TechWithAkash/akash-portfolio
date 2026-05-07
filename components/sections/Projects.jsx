"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowRight, Layers, Box, Cpu } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { PROJECTS } from "@/lib/constants";

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 bg-[var(--color-bg-primary)] z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[1px] w-12 bg-[var(--color-accent-primary)]"></span>
            <span className="text-[12px] font-mono tracking-[0.2em] uppercase text-[var(--color-accent-primary)]">
              Architecture Overview
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-['Syne'] font-bold text-[var(--color-text-primary)] max-w-2xl leading-[1.1]">
            Systems Engineered for Production
          </h2>
        </motion.div>

        <div className="space-y-40">
          {PROJECTS.map((project, i) => (
            <ProjectShowcase key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectShowcase({ project, index }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const isEven = index % 2 === 0;

  return (
    <div ref={containerRef} className="relative group">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[var(--color-accent-primary)] opacity-[0.03] blur-[120px] rounded-full pointer-events-none transition-opacity duration-700 group-hover:opacity-[0.08]" />

      <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-24 items-center`}>
        
        {/* Visual / Image Side */}
        <div className="w-full lg:w-[55%] relative rounded-2xl overflow-hidden border border-[var(--color-border-bright)] bg-[var(--color-bg-secondary)] aspect-[16/10] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
          {/* Top Bar Chrome */}
          <div className="absolute top-0 left-0 w-full h-10 bg-[var(--color-bg-elevated)] border-b border-[var(--color-border-subtle)] flex items-center px-4 gap-2 z-20">
             <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
             <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
             <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
             <div className="ml-4 px-2 py-0.5 rounded text-[10px] font-mono text-[var(--color-text-muted)] bg-[var(--color-bg-primary)]">
               {project.title.toLowerCase().replace(/\s+/g, '-')}.exe
             </div>
          </div>
          
          {/* Main Visual */}
          <motion.div style={{ scale: imageScale }} className="absolute inset-0 w-full h-full mt-10 p-8 flex items-center justify-center bg-[var(--color-bg-primary)] relative">
             <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(var(--color-text-primary) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
             
             {/* Fake abstract visual for now */}
             <div className="relative w-full h-full border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)] rounded-lg flex flex-col p-6 shadow-2xl">
               <div className="w-full h-32 bg-[var(--color-bg-elevated)] rounded border border-[var(--color-border-subtle)] mb-4 flex items-center justify-center">
                  <Layers className="text-[var(--color-text-muted)] opacity-50" size={32} />
               </div>
               <div className="flex gap-4">
                 <div className="w-1/3 h-24 bg-[var(--color-bg-elevated)] rounded border border-[var(--color-border-subtle)] flex items-center justify-center">
                    <Box className="text-[var(--color-text-muted)] opacity-50" size={24} />
                 </div>
                 <div className="w-2/3 h-24 bg-[var(--color-bg-elevated)] rounded border border-[var(--color-border-subtle)] flex items-center justify-center">
                    <Cpu className="text-[var(--color-text-muted)] opacity-50" size={24} />
                 </div>
               </div>
             </div>
          </motion.div>
        </div>

        {/* Content Side */}
        <motion.div style={{ y }} className="w-full lg:w-[45%] flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 text-[11px] font-mono text-[var(--color-accent-primary)] bg-[var(--color-accent-glow)] rounded-full border border-[var(--color-accent-glow)]">
              {project.status || "Production"}
            </span>
          </div>

          <h3 className="text-3xl lg:text-5xl font-['Syne'] font-bold text-[var(--color-text-primary)] mb-6 leading-tight">
            {project.title}
          </h3>

          <p className="text-[16px] leading-relaxed text-[var(--color-text-secondary)] mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {project.stack.map(tag => (
              <span key={tag} className="px-3 py-1.5 text-[12px] font-medium text-[var(--color-text-muted)] bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] rounded-md">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-6">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-[14px] font-medium text-[var(--color-text-primary)] hover:text-[var(--color-accent-primary)] transition-colors">
                Initialize System <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[14px] font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors">
                <GithubIcon size={14} /> Source Code
              </a>
            )}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
