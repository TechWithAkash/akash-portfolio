"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Laptop, Monitor, Keyboard, MousePointer, Mic, Headphones, Lightbulb, Terminal, AppWindow, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Gears() {
  const devices = [
    { name: "Apple MacBook Pro 16\" in M4 48GB 512GB", icon: <Laptop size={15} />, url: "https://apple.com/macbook-pro" },
    { name: "Samsung S23 (256 GB)", icon: <Laptop size={15} />, url: "https://samsung.com" },
    { name: "LG Ultragear Monitor 27GS65F (27 inch, 68.5 cm)", icon: <Monitor size={15} />, url: "https://lg.com" },
    { name: "LG Curved Ultra Wide Monitor 34WR50QK (34 inch, 86.36 cm)", icon: <Monitor size={15} />, url: "https://lg.com" },
    { name: "Monitor Stand with Laptop Mount", icon: <Monitor size={15} />, url: "#" },
    { name: "Apple Magic Keyboard", icon: <Keyboard size={15} />, url: "https://apple.com" },
    { name: "Logitech MX Master 3S Mouse", icon: <MousePointer size={15} />, url: "https://logitech.com" },
    { name: "Premium Mouse Pad", icon: <MousePointer size={15} />, url: "#" },
    { name: "FIFINE K688 Podcast Microphone", icon: <Mic size={15} />, url: "https://fifinemic.com" },
    { name: "Crossbeats Roar 2.0 (Special Edition)", icon: <Headphones size={15} />, url: "#" },
    { name: "Smart LED Light Strip (Tapo L900-5)", icon: <Lightbulb size={15} />, url: "https://tp-link.com" },
    { name: "DIGITEK Lite (DCL-150WBC Combo) - Keylight", icon: <Lightbulb size={15} />, url: "#" },
  ];

  const extensions = [
    { name: "Unhook (Distraction-Free Youtube)", url: "https://chrome.google.com/webstore" },
    { name: "uBlock Origin (Ad-Blocker)", url: "https://chrome.google.com/webstore" },
    { name: "React Developer Tools", url: "https://chrome.google.com/webstore" },
    { name: "daily.dev (Developer News)", url: "https://daily.dev" },
    { name: "Grammarly", url: "https://grammarly.com" },
    { name: "Wappalyzer (Tech Stack Finder)", url: "https://wappalyzer.com" },
    { name: "ColorZilla (Color Picker)", url: "https://chrome.google.com/webstore" },
  ];

  const softwares = [
    { name: "Dia Diagram Editor", url: "#" },
    { name: "Notion (Productivity & Notes)", url: "https://notion.so" },
    { name: "TickTick (Task Management & Todo)", url: "https://ticktick.com" },
    { name: "OBS Studio (Screen Recording)", url: "https://obsproject.com" },
    { name: "VLC Media Player", url: "https://videolan.org" },
    { name: "Ghostty (GPU-Accelerated Terminal)", url: "https://ghostty.org" },
  ];

  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] transition-colors duration-300">
      <Navbar />
      
      <main className="max-w-2xl mx-auto px-6 py-12">
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
          Gears
        </h1>
        <p className="text-[14.5px] text-[var(--text-secondary)] mt-2 font-normal leading-relaxed mb-10">
          My gears and tools I use to get my work done.
        </p>

        {/* Devices & Accessories */}
        <div>
          <h2 className="text-[17px] font-bold text-[var(--text-primary)] mb-5 flex items-center gap-2">
            <span className="p-1.5 bg-[var(--bg-secondary)] border border-[var(--border-bright)] rounded-lg text-[var(--accent)]">
              <Laptop size={16} />
            </span>
            <span>Devices & Accessories</span>
          </h2>
          
          <div className="flex flex-col gap-2.5">
            {devices.map((device, idx) => (
              <motion.a
                key={device.name}
                href={device.url}
                target={device.url !== "#" ? "_blank" : undefined}
                rel={device.url !== "#" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="flex items-center justify-between p-4 rounded-xl border border-[var(--border-bright)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-elevated)] transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <span className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors shrink-0">
                    {device.icon}
                  </span>
                  <span className="text-[13.5px] font-medium text-[var(--text-primary)] leading-tight">
                    {device.name}
                  </span>
                </div>
                {device.url !== "#" && (
                  <span className="text-xs text-[var(--text-muted)] font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                    🔗
                  </span>
                )}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Web Extensions */}
        <div className="mt-12">
          <h2 className="text-[17px] font-bold text-[var(--text-primary)] mb-5 flex items-center gap-2">
            <span className="p-1.5 bg-[var(--bg-secondary)] border border-[var(--border-bright)] rounded-lg text-[var(--accent)]">
              <AppWindow size={16} />
            </span>
            <span>Web Extensions</span>
          </h2>
          
          <div className="flex flex-col gap-2.5">
            {extensions.map((ext, idx) => (
              <motion.a
                key={ext.name}
                href={ext.url}
                target={ext.url !== "#" ? "_blank" : undefined}
                rel={ext.url !== "#" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="flex items-center justify-between p-4 rounded-xl border border-[var(--border-bright)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-elevated)] transition-all group"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[var(--border-bright)] bg-[var(--bg-primary)] text-[11px] font-mono text-[var(--text-muted)] font-semibold group-hover:text-[var(--accent)] transition-colors">
                    {idx + 1}
                  </span>
                  <span className="text-[13.5px] font-medium text-[var(--text-primary)] leading-tight">
                    {ext.name}
                  </span>
                </div>
                {ext.url !== "#" && (
                  <span className="text-xs text-[var(--text-muted)] font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                    🔗
                  </span>
                )}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Software */}
        <div className="mt-12">
          <h2 className="text-[17px] font-bold text-[var(--text-primary)] mb-5 flex items-center gap-2">
            <span className="p-1.5 bg-[var(--bg-secondary)] border border-[var(--border-bright)] rounded-lg text-[var(--accent)]">
              <AppWindow size={16} />
            </span>
            <span>Software</span>
          </h2>
          
          <div className="flex flex-col gap-2.5">
            {softwares.map((sw, idx) => (
              <motion.a
                key={sw.name}
                href={sw.url}
                target={sw.url !== "#" ? "_blank" : undefined}
                rel={sw.url !== "#" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="flex items-center justify-between p-4 rounded-xl border border-[var(--border-bright)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-elevated)] transition-all group"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[var(--border-bright)] bg-[var(--bg-primary)] text-[11px] font-mono text-[var(--text-muted)] font-semibold group-hover:text-[var(--accent)] transition-colors">
                    {idx + 1}
                  </span>
                  <span className="text-[13.5px] font-medium text-[var(--text-primary)] leading-tight">
                    {sw.name}
                  </span>
                </div>
                {sw.url !== "#" && (
                  <span className="text-xs text-[var(--text-muted)] font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                    🔗
                  </span>
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
