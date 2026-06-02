"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Disc } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
  InstagramIcon,
  YoutubeIcon,
  ProductHuntIcon,
  MediumIcon,
  MailIcon,
  CopyIcon,
  CheckIcon,
} from "@/components/ui/Icons";
import { PERSONAL } from "@/lib/constants";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const SOCIALS = [
    { icon: XIcon, href: "https://x.com/TechWithAkash", label: "Twitter / 𝕏" },
    { icon: LinkedinIcon, href: PERSONAL.linkedinUrl, label: "LinkedIn" },
    { icon: GithubIcon, href: PERSONAL.githubUrl, label: "GitHub" },
    { icon: YoutubeIcon, href: "https://youtube.com/@TechWithAkash", label: "YouTube" },
    { icon: InstagramIcon, href: "https://instagram.com/TechWithAkash", label: "Instagram" },
    { icon: ProductHuntIcon, href: "https://www.producthunt.com/@techwithakash", label: "Product Hunt" },
    { icon: MediumIcon, href: "https://medium.com/@techwithakash", label: "Medium" },
    { icon: MailIcon, href: `mailto:${PERSONAL.email}`, label: "Email" },
  ];

  return (
    <section id="hero" className="w-full px-4 sm:px-6 pt-4 pb-2 transition-colors duration-300">
      <div className="flex flex-col gap-3">

        {/* ── Avatar + Name row ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-4 sm:gap-5"
        >
          {/* Avatar */}
          <div className="shrink-0">
            <img
              src="/professional_avatar.png"
              alt="Akash Vishwakarma"
              className="w-[72px] h-[72px] sm:w-20 sm:h-20 rounded-full border-[2.5px] border-amber-400 object-cover bg-[var(--bg-secondary)]"
            />
          </div>

          {/* Name + subtitle inline */}
          <div className="flex flex-col gap-0.5 min-w-0">
            <h1 className="text-[1.45rem] sm:text-[1.6rem] font-bold tracking-tight text-[var(--text-primary)] font-sans leading-tight">
              {PERSONAL.name}
            </h1>
            <p className="text-[13px] sm:text-[13.5px] text-[var(--text-secondary)] flex flex-wrap items-center gap-x-1.5 gap-y-0.5 font-medium leading-snug">
              <span>Full-Stack Engineer</span>
              <span className="text-[var(--text-muted)]">·</span>
              <span>AI Specialist</span>
              <span className="text-[var(--text-muted)]">·</span>
              <span
                className="inline-flex items-center gap-1 cursor-pointer group/email"
                onClick={handleCopyEmail}
                title="Click to copy"
              >
                <span className="underline decoration-dotted decoration-[var(--text-muted)] underline-offset-3 font-normal">
                  {PERSONAL.email}
                </span>
                {copied ? (
                  <CheckIcon size={11} className="text-green-500 shrink-0" />
                ) : (
                  <CopyIcon size={11} className="text-[var(--text-muted)] group-hover/email:text-[var(--text-primary)] transition-colors shrink-0" />
                )}
                {copied && (
                  <span className="text-[10px] text-green-500 font-mono">Copied!</span>
                )}
              </span>
            </p>
          </div>
        </motion.div>

        {/* ── Bio ─────────────────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-[14px] sm:text-[14.5px] text-[var(--text-secondary)] leading-relaxed font-normal"
        >
          {PERSONAL.tagline}
        </motion.p>

        {/* ── Currently Shipping ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.18 }}
          className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[12.5px] text-[var(--text-muted)] font-mono"
        >
          <Disc size={12} className="animate-spin text-[var(--accent)] shrink-0" />
          <span>Currently shipping</span>
          <span>—</span>
          <span className="text-[var(--text-secondary)] font-medium">WealthWise AI Dashboard</span>
        </motion.div>

        {/* ── Social Icons ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.26 }}
          className="flex flex-col gap-2"
        >
          <div className="flex items-center gap-1 flex-wrap">
            {SOCIALS.map((social) => {
              const Icon = social.icon;
              return (
                <div key={social.label} className="relative group/social">
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-bright)] hover:bg-[var(--bg-elevated)] transition-all duration-150"
                    aria-label={social.label}
                  >
                    <Icon size={14} />
                  </a>
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-0.5 bg-[var(--text-primary)] text-[var(--bg-primary)] text-[10px] font-mono rounded opacity-0 pointer-events-none group-hover/social:opacity-100 transition-opacity duration-150 whitespace-nowrap shadow-md z-20">
                    {social.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* companion.js */}
          <div className="flex items-center gap-1.5">
            <span className="animate-bounce inline-block text-xs">🐱</span>
            <a
              href="https://github.com/TechWithAkash"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono text-[var(--text-muted)] hover:underline hover:text-[var(--text-primary)] flex items-center gap-1.5 transition-colors"
            >
              <span>companion.js</span>
              <span className="px-1 py-0.5 bg-[var(--color-status-green-glow)] border border-[var(--color-status-green)]/20 rounded-[4px] text-[8px] text-[var(--color-status-green)] font-bold uppercase tracking-wider">
                Online
              </span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
