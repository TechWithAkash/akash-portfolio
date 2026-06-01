"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
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
    <section id="contact" className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-2 transition-colors duration-300">
      <div className="border-t border-[var(--border-subtle)] pt-4">
        {/* Section Title */}
        <h2 className="text-xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
          Let&apos;s Build Something
        </h2>

        <div className="flex flex-col gap-6">
          {/* Left Column: Coordinates */}
          <div className="flex flex-col gap-4">
            <p className="text-[13.5px] leading-relaxed text-[var(--text-secondary)]">
              I am actively seeking software engineering internships and junior SDE roles. If you&apos;re building high-quality product applications and need a detail-oriented full-stack developer, I would love to hear from you.
            </p>

            <div className="flex flex-col gap-3 text-xs font-mono text-[var(--text-secondary)]">
              <div className="flex items-center gap-3">
                <Mail size={13} className="text-[var(--text-muted)] shrink-0" />
                <a href={`mailto:${PERSONAL.email}`} className="hover:text-[var(--accent)] hover:underline break-all">
                  {PERSONAL.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={13} className="text-[var(--text-muted)] shrink-0" />
                <span>{PERSONAL.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[var(--color-status-green)] animate-pulse shrink-0"></span>
                <span className="text-[11px] uppercase tracking-wider text-[var(--color-status-green)] font-bold">
                  {PERSONAL.availability}
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-4 sm:p-6 rounded-xl border border-[var(--border-bright)] bg-[var(--bg-secondary)] shadow-sm">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-mono tracking-wider uppercase text-[var(--text-muted)]">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === "loading" || status === "success"}
                  placeholder="John Doe"
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-lg px-4 py-2.5 text-[var(--text-primary)] text-[14px] focus:outline-none focus:border-[var(--accent)] transition-all disabled:opacity-50"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-mono tracking-wider uppercase text-[var(--text-muted)]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === "loading" || status === "success"}
                  placeholder="john@example.com"
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-lg px-4 py-2.5 text-[var(--text-primary)] text-[14px] focus:outline-none focus:border-[var(--accent)] transition-all disabled:opacity-50"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-mono tracking-wider uppercase text-[var(--text-muted)]">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status === "loading" || status === "success"}
                  rows={4}
                  placeholder="Message content..."
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-lg px-4 py-2.5 text-[var(--text-primary)] text-[14px] focus:outline-none focus:border-[var(--accent)] transition-all resize-none disabled:opacity-50"
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-500 text-xs bg-red-500/5 p-3 rounded-lg border border-red-500/10">
                  <AlertCircle size={14} className="shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {status === "success" && (
                <div className="flex items-center gap-2 text-[var(--color-status-green)] text-xs bg-[var(--color-status-green-glow)] p-3 rounded-lg border border-[var(--color-status-green-glow)]">
                  <CheckCircle2 size={14} className="shrink-0" />
                  <span>Message delivered successfully! I will reply shortly.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="w-full group px-5 py-3 bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-lg font-bold text-[13px] tracking-wider uppercase transition-transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-75 disabled:pointer-events-none"
              >
                {status === "idle" && (
                  <>Transmit Payload <Send size={13} /></>
                )}
                {status === "loading" && (
                  <><Loader2 size={13} className="animate-spin" /> Uploading...</>
                )}
                {status === "success" && (
                  <>Delivered</>
                )}
                {status === "error" && (
                  <>Retry</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
