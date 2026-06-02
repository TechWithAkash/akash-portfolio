"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Download, CheckSquare, Settings, Command, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Setup() {
  const downloadSteps = [
    {
      type: "file",
      filename: "Fira-code.zip",
      description: "Unzip the font's file and copy it into your fonts system.",
      url: "https://github.com/tonsky/FiraCode/releases"
    },
    {
      type: "text",
      step: "1.2",
      description: "Select all the font files (.ttf), right-click, and click 'Install' to install them globally."
    },
    {
      type: "file",
      filename: "vsc-extensions.txt",
      description: "Place this extensions list file in your downloads directory.",
      url: "#"
    },
    {
      type: "text",
      step: "1.4",
      description: "Open VSCode or Cursor in your downloads directory."
    },
    {
      type: "text",
      step: "1.5",
      description: "Install the 'VSC Export & Import' extension from the Extensions Marketplace in your editor."
    }
  ];

  const installSteps = [
    {
      step: "2.1",
      title: "Open Command Palette",
      description: "Open the Command Palette by pressing your editor's keyboard shortcut:",
      shortcut: "⌘ + ⇧ + P"
    },
    {
      step: "2.3",
      title: "Run Import Extensions",
      description: "Enter 'Import Extensions' in the prompt, press Enter ↵, select your 'vsc-extensions.txt' file, and watch them install automatically."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] transition-colors duration-300">
      <Navbar />
      
      <main className="px-4 sm:px-6 py-12" style={{ maxWidth: "620px", marginLeft: "auto", marginRight: "auto", width: "100%" }}>
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors font-mono"
          >
            <ArrowLeft size={12} />
            <span>Back to home</span>
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl font-sans">
          Setup
        </h1>
        <p className="text-[14.5px] text-[var(--text-secondary)] mt-2 font-normal leading-relaxed mb-10">
          Complete guide to setting up VSCode / Cursor with my settings.
        </p>

        {/* Download Section */}
        <div>
          <h2 className="text-[17px] font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
            <span className="p-1.5 bg-[var(--bg-secondary)] border border-[var(--border-bright)] rounded-lg text-[var(--accent)]">
              <Download size={16} />
            </span>
            <span>Download necessary files</span>
          </h2>
          
          <div className="flex flex-col gap-4">
            {downloadSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="p-5 rounded-xl border border-[var(--border-bright)] bg-[var(--bg-secondary)] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  {step.type === "file" ? (
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-glow)] text-[12px] font-bold text-[var(--accent)]">
                      📁
                    </span>
                  ) : (
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-bright)] text-[10.5px] font-mono text-[var(--text-secondary)] font-bold">
                      {step.step}
                    </span>
                  )}
                  
                  <div>
                    {step.filename && (
                      <h3 className="text-[14px] font-bold text-[var(--text-primary)] font-mono">
                        {step.filename}
                      </h3>
                    )}
                    <p className="text-[13px] text-[var(--text-secondary)] mt-0.5 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {step.url && step.url !== "#" && (
                  <a
                    href={step.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 px-3.5 items-center gap-1.5 rounded-lg border border-[var(--border-bright)] bg-[var(--bg-secondary)] text-[11px] font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors cursor-pointer shrink-0 self-start sm:self-auto"
                  >
                    <span>Download</span>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Installation Section */}
        <div className="mt-12">
          <h2 className="text-[17px] font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
            <span className="p-1.5 bg-[var(--bg-secondary)] border border-[var(--border-bright)] rounded-lg text-[var(--accent)]">
              <Settings size={16} />
            </span>
            <span>Installing all the extensions</span>
          </h2>
          
          <div className="flex flex-col gap-4">
            {installSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="p-5 rounded-xl border border-[var(--border-bright)] bg-[var(--bg-secondary)]"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-glow)] text-[11px] font-bold text-[var(--accent)] font-mono">
                    {step.step}
                  </span>
                  
                  <div className="w-full">
                    <h3 className="text-[14px] font-bold text-[var(--text-primary)]">
                      {step.title}
                    </h3>
                    <p className="text-[13px] text-[var(--text-secondary)] mt-1 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {step.shortcut && (
                      <div className="mt-3 flex items-center gap-2 p-3 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-bright)] max-w-xs justify-center">
                        <Command size={14} className="text-[var(--accent)]" />
                        <span className="text-[12px] font-mono text-[var(--text-secondary)] font-bold tracking-wider">
                          {step.shortcut}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
