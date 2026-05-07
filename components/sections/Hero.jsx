"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Mail, ArrowRight, Activity, Cpu, Database, Network } from "lucide-react";
import dynamic from "next/dynamic";
import { PERSONAL } from "@/lib/constants";

const Terminal = dynamic(() => import("@/components/ui/Terminal"), { ssr: false });

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden w-full pt-20 pb-32"
    >
      {/* Interactive Cursor Light */}
      {mounted && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-0 hidden lg:block"
          animate={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(79, 70, 229, 0.07), transparent 40%)`,
          }}
          transition={{ type: "tween", ease: "linear", duration: 0 }}
        />
      )}

      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none" 
           style={{
             backgroundImage: `linear-gradient(to right, var(--color-border-subtle) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border-subtle) 1px, transparent 1px)`,
             backgroundSize: '40px 40px',
             maskImage: 'radial-gradient(ellipse 60% 80% at 50% 40%, black 10%, transparent 80%)',
             WebkitMaskImage: 'radial-gradient(ellipse 60% 80% at 50% 40%, black 10%, transparent 80%)'
           }} 
      />

      <motion.div 
        style={{ y, opacity }}
        className="w-full max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center"
      >
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 px-4 py-2 rounded-full border border-[var(--color-border-bright)] bg-[var(--color-bg-glass)] backdrop-blur-md mb-8"
        >
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-status-green)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-status-green)]"></span>
          </div>
          <span className="text-[11px] font-mono tracking-widest uppercase text-[var(--color-text-secondary)]">
            System Online · {PERSONAL.availability}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 w-full"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-[800] leading-[1.1] tracking-[-0.03em] font-['Syne'] text-[var(--color-text-primary)] break-words">
            Akash <br className="md:hidden" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[var(--color-accent-primary)] to-[var(--color-text-secondary)] animate-gradient-x bg-[length:200%_auto] inline-block ml-0 md:ml-4">
              Vishwakarma
            </span>
          </h1>
        </motion.div>

        {/* Subheading & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto flex flex-col items-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-6">
            <span className="text-lg lg:text-xl font-medium text-[var(--color-text-primary)]">Full-Stack Engineer</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-border-bright)] hidden md:block"></span>
            <span className="text-lg lg:text-xl font-medium text-[var(--color-text-primary)]">AI Systems Architect</span>
          </div>
          <p className="text-[17px] leading-relaxed text-[var(--color-text-secondary)] mb-10">
            I build production-grade operating systems, intelligent LLM pipelines, and highly scalable web applications. Bridging the gap between beautiful cinematic interfaces and rigorous backend architecture.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center items-center gap-5 w-full mb-20"
        >
          <button 
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative px-6 py-3.5 bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] rounded-lg font-medium text-[15px] overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Initialize Sequence <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </span>
          </button>
          
          <div className="flex items-center gap-3">
            {[
              { href: PERSONAL.githubUrl, icon: <GithubIcon size={18} /> },
              { href: PERSONAL.linkedinUrl, icon: <LinkedinIcon size={18} /> },
              { href: `mailto:${PERSONAL.email}`, icon: <Mail size={18} /> },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-lg border border-[var(--color-border-bright)] bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] transition-all hover:border-[var(--color-text-primary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-elevated)]"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* BOTTOM: Terminal / Dashboard Elements */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative perspective-1000 hidden md:block w-full max-w-3xl mx-auto"
        >
          {/* Main Terminal Window */}
          <div className="relative z-10 shadow-[0_0_80px_rgba(79,70,229,0.15)] rounded-[12px] border border-[var(--color-border-subtle)] bg-[#05050A]">
             <Terminal />
          </div>

          {/* Decorative floating elements */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-64 p-4 rounded-xl border border-[var(--color-border-bright)] bg-[var(--color-bg-glass)] backdrop-blur-xl z-20 shadow-2xl hidden lg:block"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase tracking-wider">Neural Net Status</span>
              <Activity size={14} className="text-[var(--color-accent-primary)]" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs text-[var(--color-text-secondary)]">Latency</span>
                <span className="text-xs font-mono text-[var(--color-status-green)]">24ms</span>
              </div>
              <div className="w-full h-1 bg-[var(--color-bg-primary)] rounded-full overflow-hidden">
                <div className="h-full bg-[var(--color-accent-primary)] w-[85%] rounded-full"></div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -left-10 w-48 p-4 rounded-xl border border-[var(--color-border-bright)] bg-[var(--color-bg-glass)] backdrop-blur-xl z-20 shadow-2xl hidden lg:block"
          >
            <div className="flex items-center gap-3 mb-2">
              <Cpu size={14} className="text-[var(--color-text-secondary)]" />
              <span className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase tracking-wider">Nodes Active</span>
            </div>
            <div className="text-xl font-['Syne'] font-bold text-[var(--color-text-primary)]">1,024</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
