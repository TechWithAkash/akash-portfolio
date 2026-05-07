"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { ACHIEVEMENTS } from "@/lib/constants";

export default function Achievements() {
  const highlight = ACHIEVEMENTS.filter(a => a.highlight);
  const rest = ACHIEVEMENTS.filter(a => !a.highlight);

  return (
    <section id="achievements" className="section" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <ScrollReveal>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <p className="section-eyebrow">Recognition</p>
              <h2 className="section-heading">Competing at the national level</h2>
            </div>
          </div>
        </ScrollReveal>

        {/* Top 3 highlighted */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "12px" }}>
          {highlight.map((a, i) => (
            <ScrollReveal key={a.id} delay={i * 60}>
              <div
                style={{
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border)",
                  borderRadius: "10px",
                  padding: "22px",
                  transition: "all var(--t-base)",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(16,185,129,0.35)";
                  e.currentTarget.style.background = "var(--bg-elevated)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.background = "var(--bg-secondary)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ height: "2px", background: "linear-gradient(90deg, var(--accent), #34d399)", position: "absolute", top: 0, left: 0, right: 0 }} />
                <div style={{ fontSize: "1.5rem", marginBottom: "10px" }}>{a.icon}</div>
                <h3 style={{
                  fontFamily: "var(--font-syne), 'Syne', sans-serif",
                  fontSize: "var(--text-sm)",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "4px",
                  lineHeight: 1.35,
                }}>{a.title}</h3>
                <p style={{ fontSize: "var(--text-xs)", color: "var(--accent)", fontFamily: "var(--font-jetbrains-mono), monospace", marginBottom: "8px" }}>
                  {a.event}
                </p>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {a.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Rest as a table-style list */}
        <ScrollReveal delay={200}>
          <div style={{
            border: "1px solid var(--border)",
            borderRadius: "10px",
            overflow: "hidden",
            background: "var(--bg-secondary)",
          }}>
            {rest.map((a, i) => (
              <div
                key={a.id}
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                  padding: "16px 20px",
                  borderTop: i > 0 ? "1px solid var(--border)" : "none",
                  transition: "background var(--t-fast)",
                  cursor: "default",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "var(--bg-elevated)"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>{a.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "6px" }}>
                    <h3 style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--text-primary)" }}>{a.title}</h3>
                    <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", fontFamily: "var(--font-jetbrains-mono), monospace" }}>
                      {a.event}
                    </span>
                  </div>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", marginTop: "2px" }}>{a.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #achievements .container > div:nth-child(2) { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          #achievements .container > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
