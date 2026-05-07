"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, MapPin, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { PERSONAL } from "@/lib/constants";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please try again later.");
    }
  };
  return (
    <section id="contact" className="relative py-32 bg-[var(--color-bg-primary)] z-10 border-t border-[var(--color-border-subtle)] overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-[var(--color-accent-primary)] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-[var(--color-status-green)]"></span>
              <span className="text-[12px] font-mono tracking-[0.2em] uppercase text-[var(--color-status-green)]">
                Secure Channel Open
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-['Syne'] font-bold text-[var(--color-text-primary)] mb-6 leading-tight">
              Initialize <br />
              <span className="text-[var(--color-text-secondary)]">Communication</span>
            </h2>

            <p className="text-lg text-[var(--color-text-secondary)] mb-10 max-w-md leading-relaxed">
              Actively seeking internships and SDE roles. If you're building intelligent systems and need a rigorous engineer, let's connect.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors group cursor-pointer w-max">
                <div className="w-12 h-12 rounded-xl border border-[var(--color-border-bright)] bg-[var(--color-bg-elevated)] flex items-center justify-center group-hover:border-[var(--color-accent-primary)] transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-[11px] font-mono tracking-widest uppercase text-[var(--color-text-muted)] mb-1">Email Endpoint</div>
                  <a href={`mailto:${PERSONAL.email}`} className="text-lg font-medium">{PERSONAL.email}</a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[var(--color-text-secondary)] group w-max">
                <div className="w-12 h-12 rounded-xl border border-[var(--color-border-bright)] bg-[var(--color-bg-elevated)] flex items-center justify-center group-hover:border-[var(--color-accent-primary)] transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-[11px] font-mono tracking-widest uppercase text-[var(--color-text-muted)] mb-1">Current Coordinates</div>
                  <div className="text-lg font-medium">{PERSONAL.location}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Interface Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl border border-[var(--color-border-bright)] bg-[var(--color-bg-secondary)]/50 backdrop-blur-xl p-8 lg:p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] relative"
          >
            <div className="absolute top-0 right-0 p-6 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-[var(--color-border-bright)]" />
              <div className="w-2 h-2 rounded-full bg-[var(--color-border-bright)]" />
              <div className="w-2 h-2 rounded-full bg-[var(--color-accent-primary)]" />
            </div>

            <form className="space-y-6 mt-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-[11px] font-mono tracking-widest uppercase text-[var(--color-text-muted)]">Origin Identifier</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === "loading" || status === "success"}
                  placeholder="John Doe"
                  className="w-full bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] rounded-lg px-4 py-3.5 text-[var(--color-text-primary)] text-[15px] focus:outline-none focus:border-[var(--color-accent-primary)] focus:ring-1 focus:ring-[var(--color-accent-primary)] transition-all disabled:opacity-50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-mono tracking-widest uppercase text-[var(--color-text-muted)]">Return Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === "loading" || status === "success"}
                  placeholder="john@example.com"
                  className="w-full bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] rounded-lg px-4 py-3.5 text-[var(--color-text-primary)] text-[15px] focus:outline-none focus:border-[var(--color-accent-primary)] focus:ring-1 focus:ring-[var(--color-accent-primary)] transition-all disabled:opacity-50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-mono tracking-widest uppercase text-[var(--color-text-muted)]">Payload</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status === "loading" || status === "success"}
                  rows={4}
                  placeholder="Message content..."
                  className="w-full bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] rounded-lg px-4 py-3.5 text-[var(--color-text-primary)] text-[15px] focus:outline-none focus:border-[var(--color-accent-primary)] focus:ring-1 focus:ring-[var(--color-accent-primary)] transition-all resize-none disabled:opacity-50"
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                  <AlertCircle size={16} />
                  <span>{errorMessage}</span>
                </div>
              )}

              {status === "success" && (
                <div className="flex items-center gap-2 text-[var(--color-status-green)] text-sm bg-[var(--color-status-green)]/10 p-3 rounded-lg border border-[var(--color-status-green)]/20">
                  <CheckCircle2 size={16} />
                  <span>Transmission successful. I'll get back to you soon.</span>
                </div>
              )}

              <button 
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="w-full group relative px-6 py-4 bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] rounded-lg font-medium text-[15px] overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-80 disabled:pointer-events-none"
              >
                {status === "idle" && (
                  <>Transmit Payload <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></>
                )}
                {status === "loading" && (
                  <><Loader2 size={16} className="animate-spin" /> Establishing Connection...</>
                )}
                {status === "success" && (
                  <>Payload Delivered</>
                )}
                {status === "error" && (
                  <>Retry Transmission</>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
