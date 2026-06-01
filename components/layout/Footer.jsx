"use client";

import { useEffect, useState } from "react";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { PERSONAL } from "@/lib/constants";

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState(33364);

  useEffect(() => {
    // Generate a random stable-looking count based on storage or standard offset
    const savedCount = localStorage.getItem("portfolio-visitors");
    if (savedCount) {
      Promise.resolve().then(() => setVisitorCount(parseInt(savedCount, 10)));
    } else {
      const randomStart = Math.floor(Math.random() * 50) + 33364;
      Promise.resolve().then(() => setVisitorCount(randomStart));
      localStorage.setItem("portfolio-visitors", String(randomStart));
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full max-w-2xl mx-auto px-4 sm:px-6 pt-8 pb-10 border-t border-[var(--border-subtle)] transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Left Column: Inspiring Quote */}
        <div className="md:col-span-6 flex flex-col gap-4">
          <p className="font-mono text-[14.5px] font-medium italic text-[var(--text-secondary)] text-pretty leading-relaxed">
            &ldquo;Arise, awake, and stop not till the goal is reached.&rdquo;
          </p>
          <p className="font-mono text-xs italic text-[var(--text-muted)] pl-2">
            — Katha Upanishad
          </p>
        </div>

        {/* Right Column: Navigation & Connect */}
        <div className="md:col-span-6 grid grid-cols-2 gap-8">
          {/* Navigate Section */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-[var(--text-muted)]">
              Navigate
            </span>
            <nav className="flex flex-col gap-2.5 text-[13px] font-medium text-[var(--text-secondary)]">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-[var(--text-primary)] transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => document.getElementById("education")?.scrollIntoView({ behavior: "smooth" })}
                className="hover:text-[var(--text-primary)] transition-colors text-left"
              >
                Logs
              </button>
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="hover:text-[var(--text-primary)] transition-colors text-left"
              >
                Projects
              </button>
              <button
                onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
                className="hover:text-[var(--text-primary)] transition-colors text-left"
              >
                Work
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="hover:text-[var(--text-primary)] transition-colors text-left"
              >
                Connect
              </button>
            </nav>
          </div>

          {/* Connect Section */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-[var(--text-muted)]">
              Connect
            </span>
            <div className="flex flex-wrap gap-2">
              <a
                href={PERSONAL.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-bright)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"
                title="GitHub"
              >
                <GithubIcon size={14} />
              </a>
              <a
                href={PERSONAL.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-bright)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"
                title="LinkedIn"
              >
                <LinkedinIcon size={14} />
              </a>
              <a
                href={`mailto:${PERSONAL.email}`}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-bright)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"
                title="Email"
              >
                <Mail size={14} />
              </a>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="mt-2 flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors font-medium text-left"
            >
              <ArrowUp size={12} />
              <span>Back to top</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-[var(--text-muted)] font-mono">
        <span>&copy; {new Date().getFullYear()} Akash Vishwakarma. All rights reserved.</span>
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-status-green)] animate-ping" />
          <span>You&apos;re the {visitorCount.toLocaleString()}th visitor</span>
        </span>
      </div>
    </footer>
  );
}
