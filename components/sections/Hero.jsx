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
  CheckIcon
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
    <section id="hero" className="w-full max-w-2xl mx-auto px-6 pt-0 pb-0 transition-colors duration-300">
      <div className="flex flex-col gap-6 text-left">
        {/* Profile Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-7"
        >
          {/* Avatar Container */}
          <div className="shrink-0">
            <img
              src="/professional_avatar.png"
              alt="Akash Vishwakarma"
              className="w-24 h-24 rounded-full border-[3px] border-amber-400 object-cover shadow-sm bg-[var(--bg-secondary)]"
            />
          </div>
          
          {/* Name & Title Block */}
          <div className="flex flex-col gap-1.5">
            <h1 className="text-2.5xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-3xl font-sans">
              {PERSONAL.name}
            </h1>
            <p className="text-[13.5px] text-[var(--text-secondary)] font-medium flex flex-wrap items-center gap-x-2 gap-y-1.5">
              <span>Full-Stack Engineer</span>
              <span className="text-[var(--text-muted)] font-normal">·</span>
              <span>AI Specialist</span>
              <span className="text-[var(--text-muted)] font-normal">·</span>
              <span 
                className="inline-flex items-center gap-1.5 group/email cursor-pointer text-[var(--text-secondary)] hover:text-[var(--text-primary)] select-all"
                onClick={handleCopyEmail}
                title="Click to copy email address"
              >
                <span className="underline decoration-dotted decoration-[var(--text-muted)] underline-offset-4 font-normal">
                  {PERSONAL.email}
                </span>
                {copied ? (
                  <CheckIcon size={12} className="text-green-500" />
                ) : (
                  <CopyIcon size={12} className="text-[var(--text-muted)] group-hover/email:text-[var(--text-primary)] transition-colors shrink-0" />
                )}
                {copied && (
                  <span className="text-[10px] text-green-500 font-mono ml-0.5">
                    Copied!
                  </span>
                )}
              </span>
            </p>
          </div>
        </motion.div>

        {/* Short Tagline / Bio */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-[14.5px] text-[var(--text-secondary)] max-w-2xl leading-relaxed font-normal"
        >
          {PERSONAL.tagline}
        </motion.p>

        {/* Currently Shipping / Status Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex items-center gap-2 text-[12.5px] text-[var(--text-muted)] font-mono"
        >
          <Disc size={13} className="animate-spin text-[var(--accent)]" />
          <span>Currently shipping</span>
          <span>—</span>
          <span className="text-[var(--text-secondary)] font-medium">WealthWise AI Dashboard</span>
        </motion.div>

        {/* Social Icons Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col gap-3.5 mt-1.5 border-t border-[var(--border-subtle)] pt-3.5"
        >
          <div className="flex items-center gap-1.5 flex-wrap">
            {SOCIALS.map((social) => {
              const Icon = social.icon;
              return (
                <div key={social.label} className="relative group/social">
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-8.5 h-8.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-bright)] hover:bg-[var(--bg-elevated)] transition-all duration-150 shadow-sm"
                    aria-label={social.label}
                  >
                    <Icon size={15} />
                  </a>
                  {/* Custom micro-tooltip */}
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-0.5 bg-[var(--text-primary)] text-[var(--bg-primary)] text-[10px] font-mono rounded opacity-0 pointer-events-none group-hover/social:opacity-100 transition-opacity duration-150 whitespace-nowrap shadow-md z-20">
                    {social.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Pixel Companion Widget */}
          <div className="flex items-center gap-1.5 pl-0.5">
            <span className="animate-bounce inline-block text-xs">🐱</span>
            <a
              href="https://github.com/TechWithAkash"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono text-[var(--text-muted)] hover:underline hover:text-[var(--text-primary)] flex items-center gap-1.5 transition-colors"
            >
              <span>companion.js</span>
              <span className="px-1 py-0.2 bg-[var(--color-status-green-glow)] border border-[var(--color-status-green)]/20 rounded-[4px] text-[8px] text-[var(--color-status-green)] font-bold uppercase tracking-wider">
                Online
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
