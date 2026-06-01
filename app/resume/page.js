"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Download, ExternalLink, ZoomIn, ZoomOut, FileText } from "lucide-react";

export default function ResumePage() {
  const resumeUrl = "/AKASH_VISHWAKARMA_UPDATED_RESUME.pdf";

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] transition-colors duration-300">
      <Navbar />
      <main className="max-w-2xl mx-auto px-6 py-16">
        {/* Title Block */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 border-b border-[var(--border-subtle)] pb-10"
        >
          <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Resume
          </h1>
          <p className="text-[14.5px] text-[var(--text-secondary)] mt-2 font-normal">
            View and download my professional resume.
          </p>
        </motion.div>

        {/* Beautiful Interactive PDF Viewer Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-xl border border-[var(--border-bright)] bg-[var(--bg-secondary)] shadow-lg overflow-hidden relative flex flex-col"
        >
          {/* Top toolbar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[var(--bg-elevated)] border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)] font-mono">
              <FileText size={14} className="text-[var(--accent)]" />
              <span>akash-resume.pdf</span>
            </div>

            <div className="flex items-center gap-3">
              {/* External Pop-out link */}
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-7 px-2.5 items-center gap-1.5 rounded-[4px] border border-[var(--border-bright)] bg-[var(--bg-secondary)] text-[11px] font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors"
                title="Open in new tab"
              >
                <ExternalLink size={12} />
                <span>Pop-out</span>
              </a>

              {/* Download Action button */}
              <a
                href={resumeUrl}
                download="Akash_Vishwakarma_Resume.pdf"
                className="flex h-7 px-2.5 items-center gap-1.5 rounded-[4px] border border-[var(--border-bright)] bg-[var(--bg-secondary)] text-[11px] font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors"
                title="Download PDF"
              >
                <Download size={12} />
                <span>Download</span>
              </a>
            </div>
          </div>

          {/* Styled PDF Viewport Frame */}
          <div className="w-full aspect-[1/1.414] bg-[var(--bg-primary)] p-4 sm:p-6 flex justify-center items-center">
            <iframe
              src={`${resumeUrl}#toolbar=0`}
              className="w-full h-full rounded border border-[var(--border-subtle)] shadow-sm bg-white"
              title="Akash Vishwakarma Resume Document"
            />
          </div>

          {/* Bottom Control Bar */}
          <div className="flex items-center justify-between px-6 py-3.5 bg-[var(--bg-elevated)] border-t border-[var(--border-subtle)] text-xs text-[var(--text-muted)] font-mono">
            <span>Page 1 of 1</span>
            
            <div className="flex items-center gap-3">
              <button 
                className="flex h-6 w-6 items-center justify-center rounded border border-[var(--border-bright)] bg-[var(--bg-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut size={12} />
              </button>
              <span className="text-[11px]">100%</span>
              <button 
                className="flex h-6 w-6 items-center justify-center rounded border border-[var(--border-bright)] bg-[var(--bg-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn size={12} />
              </button>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
