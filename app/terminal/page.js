"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Terminal, Check, Copy, ChevronDown, ChevronUp, ArrowLeft } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import Link from "next/link";

export default function TerminalSetup() {
  const [copiedSection, setCopiedSection] = useState("");
  const [openAccordions, setOpenAccordions] = useState({
    zsh: false,
    fastfetch: false,
  });

  const handleCopyCode = (text, sectionName) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionName);
    setTimeout(() => setCopiedSection(""), 2000);
  };

  const toggleAccordion = (section) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const installOneLiner = `brew install \\
  starship \\
  eza \\
  fzf \\
  zoxide \\
  fd \\
  fastfetch \\
  tree \\
  oven-sh/bun/bun \\
  node@22 \\
  nvm \\
  unzip \\
  unrar \\
  p7zip \\
  gzip \\
  bzip2 \\
  git \\
  net-tools`;

  const backupZsh = `[ -f ~/.zshrc ] && mv ~/.zshrc ~/.zshrc.backup`;
  const createZsh = `nano ~/.zshrc`;
  const createFastfetchDir = `mkdir -p ~/.config/fastfetch`;
  const createFastfetchConfig = `nano ~/.config/fastfetch/config.jsonc`;
  const reloadShell = `source ~/.zshrc`;

  const zshConfigContent = `# .zshrc Config - Starship & Utilities
export LANG=en_US.UTF-8

# Initialize nvm / node
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"

# Starship shell prompt
eval "$(starship init zsh)"

# zoxide (smarter cd command)
eval "$(zoxide init zsh)"

# fzf (fuzzy finder matching)
[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh

# Eza (better ls commands)
alias ls="eza --icons --git"
alias l="eza -lh --icons --git"
alias la="eza -la --icons --git"

# Interactive fastfetch on startup
if [ "$TERM_PROGRAM" != "Apple_Terminal" ]; then
  fastfetch
fi`;

  const fastfetchConfigContent = `{
  "$schema": "https://github.com/fastfetch-cli/fastfetch/raw/dev/doc/json_schema.json",
  "modules": [
    "title",
    "separator",
    "os",
    "host",
    "kernel",
    "uptime",
    "packages",
    "shell",
    "display",
    "de",
    "wm",
    "terminal",
    "cpu",
    "gpu",
    "memory",
    "break",
    "colors"
  ]
}`;

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
          Terminal Setup
        </h1>
        <p className="text-[14.5px] text-[var(--text-secondary)] mt-2 font-normal leading-relaxed">
          Below is my terminal setup configuration.
        </p>

        {/* Prerequisites */}
        <div className="mt-10">
          <h2 className="text-lg font-bold text-[var(--text-primary)] mb-5">Prerequisites</h2>
          <div className="flex flex-col gap-4">
            {/* Step 1 */}
            <div className="flex gap-4 p-4 rounded-xl border border-[var(--border-bright)] bg-[var(--bg-secondary)]">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--accent-glow)] text-[12px] font-bold text-[var(--accent)] font-mono">
                1
              </span>
              <div>
                <h3 className="text-[14.5px] font-bold text-[var(--text-primary)]">Zsh</h3>
                <p className="text-[12.5px] text-[var(--text-secondary)] mt-0.5 leading-relaxed">
                  Modern shell (pre-installed on macOS, install on Linux)
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 p-4 rounded-xl border border-[var(--border-bright)] bg-[var(--bg-secondary)]">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--accent-glow)] text-[12px] font-bold text-[var(--accent)] font-mono">
                2
              </span>
              <div>
                <h3 className="text-[14.5px] font-bold text-[var(--text-primary)]">Git</h3>
                <p className="text-[12.5px] text-[var(--text-secondary)] mt-0.5 leading-relaxed">
                  Version control system
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 p-4 rounded-xl border border-[var(--border-bright)] bg-[var(--bg-secondary)]">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--accent-glow)] text-[12px] font-bold text-[var(--accent)] font-mono">
                3
              </span>
              <div>
                <h3 className="text-[14.5px] font-bold text-[var(--text-primary)]">Homebrew</h3>
                <p className="text-[12.5px] text-[var(--text-secondary)] mt-0.5 leading-relaxed">
                  Package manager for macOS/Linux (
                  <a href="https://brew.sh" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">
                    brew.sh
                  </a>
                  )
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Linux / Mac Installation */}
        <div className="mt-10">
          <h2 className="text-lg font-bold text-[var(--text-primary)] mb-3">Mac/Linux Package Installation</h2>
          <p className="text-[13px] text-[var(--text-secondary)] mb-4">
            Run this one-liner to install all required terminal utilities:
          </p>

          <div className="relative group">
            <pre className="p-4 rounded-xl border border-[var(--border-bright)] bg-[var(--bg-elevated)] text-[12.5px] font-mono text-[var(--text-primary)] overflow-x-auto leading-relaxed max-w-full">
              {installOneLiner}
            </pre>
            <button
              onClick={() => handleCopyCode(installOneLiner, "oneliner")}
              className="absolute top-3 right-3 p-2 rounded-lg border border-[var(--border-bright)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
              title="Copy code"
            >
              {copiedSection === "oneliner" ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
            </button>
          </div>
        </div>

        {/* Configure Zsh */}
        <div className="mt-10">
          <h2 className="text-lg font-bold text-[var(--text-primary)] mb-5">Configure Zsh</h2>
          
          {/* Step 2.1 */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-[13px] font-semibold text-[var(--text-secondary)] mb-2">
                2.1 Backup your existing .zshrc (if any):
              </p>
              <div className="relative group">
                <pre className="p-3.5 rounded-lg border border-[var(--border-bright)] bg-[var(--bg-secondary)] text-[12.5px] font-mono text-[var(--text-primary)] overflow-x-auto">
                  {backupZsh}
                </pre>
                <button
                  onClick={() => handleCopyCode(backupZsh, "backup")}
                  className="absolute top-2.5 right-3 p-1.5 rounded-md border border-[var(--border-bright)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
                >
                  {copiedSection === "backup" ? <Check size={12} className="text-green-500" /> : <Copy size={12} />}
                </button>
              </div>
            </div>

            {/* Step 2.3 */}
            <div>
              <p className="text-[13px] font-semibold text-[var(--text-secondary)] mb-2">
                2.3 Create a new .zshrc file and paste the configuration below:
              </p>
              <div className="relative group">
                <pre className="p-3.5 rounded-lg border border-[var(--border-bright)] bg-[var(--bg-secondary)] text-[12.5px] font-mono text-[var(--text-primary)] overflow-x-auto">
                  {createZsh}
                </pre>
                <button
                  onClick={() => handleCopyCode(createZsh, "createzsh")}
                  className="absolute top-2.5 right-3 p-1.5 rounded-md border border-[var(--border-bright)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
                >
                  {copiedSection === "createzsh" ? <Check size={12} className="text-green-500" /> : <Copy size={12} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Configure Fastfetch */}
        <div className="mt-10">
          <h2 className="text-lg font-bold text-[var(--text-primary)] mb-5">Configure Fastfetch</h2>
          
          <div className="flex flex-col gap-4">
            {/* Step 3.1 */}
            <div>
              <p className="text-[13px] font-semibold text-[var(--text-secondary)] mb-2">
                3.1 Create the fastfetch config directory:
              </p>
              <div className="relative group">
                <pre className="p-3.5 rounded-lg border border-[var(--border-bright)] bg-[var(--bg-secondary)] text-[12.5px] font-mono text-[var(--text-primary)] overflow-x-auto">
                  {createFastfetchDir}
                </pre>
                <button
                  onClick={() => handleCopyCode(createFastfetchDir, "ffdir")}
                  className="absolute top-2.5 right-3 p-1.5 rounded-md border border-[var(--border-bright)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
                >
                  {copiedSection === "ffdir" ? <Check size={12} className="text-green-500" /> : <Copy size={12} />}
                </button>
              </div>
            </div>

            {/* Step 3.3 */}
            <div>
              <p className="text-[13px] font-semibold text-[var(--text-secondary)] mb-2">
                3.3 Create the config file:
              </p>
              <div className="relative group">
                <pre className="p-3.5 rounded-lg border border-[var(--border-bright)] bg-[var(--bg-secondary)] text-[12.5px] font-mono text-[var(--text-primary)] overflow-x-auto">
                  {createFastfetchConfig}
                </pre>
                <button
                  onClick={() => handleCopyCode(createFastfetchConfig, "ffconfig")}
                  className="absolute top-2.5 right-3 p-1.5 rounded-md border border-[var(--border-bright)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
                >
                  {copiedSection === "ffconfig" ? <Check size={12} className="text-green-500" /> : <Copy size={12} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Collapsible Configurations (Accordions) */}
        <div className="mt-12 flex flex-col gap-4">
          {/* Zsh configuration accordion */}
          <div className="border border-[var(--border-bright)] rounded-xl overflow-hidden bg-[var(--bg-secondary)] transition-colors duration-300">
            <button
              onClick={() => toggleAccordion("zsh")}
              className="w-full flex items-center justify-between px-5 py-4 text-left font-sans text-[14.5px] font-bold text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors"
            >
              <span>.zshrc Configuration</span>
              {openAccordions.zsh ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {openAccordions.zsh && (
              <div className="px-5 pb-5 border-t border-[var(--border-subtle)]/30 relative">
                <pre className="text-[12px] font-mono text-[var(--text-secondary)] overflow-x-auto mt-4 p-4 rounded-lg bg-[var(--bg-elevated)] max-w-full leading-relaxed">
                  {zshConfigContent}
                </pre>
                <button
                  onClick={() => handleCopyCode(zshConfigContent, "zshrc_all")}
                  className="absolute top-8 right-8 p-1.5 rounded-md border border-[var(--border-bright)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
                >
                  {copiedSection === "zshrc_all" ? <Check size={12} className="text-green-500" /> : <Copy size={12} />}
                </button>
              </div>
            )}
          </div>

          {/* Fastfetch Configuration Accordion */}
          <div className="border border-[var(--border-bright)] rounded-xl overflow-hidden bg-[var(--bg-secondary)] transition-colors duration-300">
            <button
              onClick={() => toggleAccordion("fastfetch")}
              className="w-full flex items-center justify-between px-5 py-4 text-left font-sans text-[14.5px] font-bold text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors"
            >
              <span>Fastfetch Configuration</span>
              {openAccordions.fastfetch ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {openAccordions.fastfetch && (
              <div className="px-5 pb-5 border-t border-[var(--border-subtle)]/30 relative">
                <pre className="text-[12px] font-mono text-[var(--text-secondary)] overflow-x-auto mt-4 p-4 rounded-lg bg-[var(--bg-elevated)] max-w-full leading-relaxed">
                  {fastfetchConfigContent}
                </pre>
                <button
                  onClick={() => handleCopyCode(fastfetchConfigContent, "ff_all")}
                  className="absolute top-8 right-8 p-1.5 rounded-md border border-[var(--border-bright)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
                >
                  {copiedSection === "ff_all" ? <Check size={12} className="text-green-500" /> : <Copy size={12} />}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Apply Configuration */}
        <div className="mt-12">
          <h2 className="text-lg font-bold text-[var(--text-primary)] mb-5">Apply Configuration</h2>
          <div className="flex flex-col gap-4">
            {/* Step 1 */}
            <div className="flex gap-4 p-4 rounded-xl border border-[var(--border-bright)] bg-[var(--bg-secondary)]">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--accent-glow)] text-[12px] font-bold text-[var(--accent)] font-mono">
                1
              </span>
              <div className="w-full">
                <h3 className="text-[14px] font-bold text-[var(--text-primary)]">Reload your shell configuration:</h3>
                <div className="relative group mt-2">
                  <pre className="p-3 rounded-lg border border-[var(--border-bright)] bg-[var(--bg-primary)] text-[12px] font-mono text-[var(--text-primary)] overflow-x-auto">
                    {reloadShell}
                  </pre>
                  <button
                    onClick={() => handleCopyCode(reloadShell, "reload")}
                    className="absolute top-2 right-2.5 p-1 rounded border border-[var(--border-bright)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
                  >
                    {copiedSection === "reload" ? <Check size={12} className="text-green-500" /> : <Copy size={12} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 p-4 rounded-xl border border-[var(--border-bright)] bg-[var(--bg-secondary)]">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--accent-glow)] text-[12px] font-bold text-[var(--accent)] font-mono">
                2
              </span>
              <div>
                <h3 className="text-[14px] font-bold text-[var(--text-primary)]">Or simply restart your terminal</h3>
                <p className="text-[12.5px] text-[var(--text-secondary)] mt-0.5">
                  Changes will apply automatically on terminal start.
                </p>
              </div>
            </div>
          </div>

          <p className="text-[14.5px] font-medium text-[var(--accent)] mt-6 text-center font-mono animate-pulse">
            ✨ Done! Your terminal is now configured.
          </p>
        </div>

        {/* Source Repository */}
        <div className="mt-12 p-5 rounded-xl border border-[var(--border-bright)] bg-[var(--bg-secondary)] flex items-center justify-between gap-4">
          <div>
            <h3 className="text-[14.5px] font-bold text-[var(--text-primary)] flex items-center gap-1.5">
              <GithubIcon size={15} />
              <span>Source Repository</span>
            </h3>
            <p className="text-[12px] text-[var(--text-muted)] mt-0.5">
              Full configuration files, documentation, and updates
            </p>
          </div>
          <a
            href="https://github.com/TechWithAkash/term-conf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 px-3.5 items-center gap-1.5 rounded-lg border border-[var(--border-bright)] bg-[var(--bg-secondary)] text-[11px] font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors cursor-pointer"
          >
            <span>term-conf</span>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
