"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { PERSONAL } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 bg-[var(--color-bg-primary)] border-t border-[var(--color-border-subtle)] py-10">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-3 text-[var(--color-text-muted)] text-[12px] font-mono">
          <div className="w-2 h-2 rounded-full bg-[var(--color-status-green)] animate-pulse" />
          <span>SYSTEM ONLINE · {year} Akash Vishwakarma</span>
        </div>

        <div className="flex gap-4">
          {[
            { href: PERSONAL.githubUrl, icon: <GithubIcon size={16} />, label: "GitHub" },
            { href: PERSONAL.linkedinUrl, icon: <LinkedinIcon size={16} />, label: "LinkedIn" },
            { href: `mailto:${PERSONAL.email}`, icon: <Mail size={16} />, label: "Email" },
          ].map((link, i) => (
            <a
              key={i}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
              aria-label={link.label}
              title={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
