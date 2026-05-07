"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { EXPERIENCE, EDUCATION } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <ScrollReveal>
          <p className="section-eyebrow">Experience</p>
          <h2 className="section-heading" style={{ marginBottom: "48px" }}>Work History</h2>
        </ScrollReveal>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }}>

          {/* Work */}
          <div>
            <ScrollReveal delay={60}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
                {EXPERIENCE.map((item, i) => (
                  <div key={item.id} style={{ position: "relative", paddingLeft: "24px", paddingBottom: i < EXPERIENCE.length - 1 ? "36px" : 0 }}>
                    {/* Timeline */}
                    <div style={{
                      position: "absolute",
                      left: 0,
                      top: "6px",
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      background: "var(--accent)",
                      zIndex: 1,
                    }} />
                    {i < EXPERIENCE.length - 1 && (
                      <div style={{
                        position: "absolute",
                        left: "3px",
                        top: "16px",
                        width: "1px",
                        height: "calc(100% - 16px)",
                        background: "var(--border)",
                      }} />
                    )}

                    {/* Content */}
                    <div>
                      <div style={{ marginBottom: "10px" }}>
                        <h3 style={{
                          fontFamily: "var(--font-syne), 'Syne', sans-serif",
                          fontSize: "var(--text-base)",
                          fontWeight: 700,
                          color: "var(--text-primary)",
                          marginBottom: "3px",
                        }}>{item.role}</h3>
                        <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
                          <span style={{ color: "var(--accent)", fontSize: "var(--text-sm)", fontWeight: 500 }}>{item.company}</span>
                          <span style={{ color: "var(--text-muted)", fontSize: "var(--text-xs)" }}>·</span>
                          <span style={{ color: "var(--text-muted)", fontSize: "var(--text-xs)" }}>{item.location}</span>
                          <span style={{ color: "var(--text-muted)", fontSize: "var(--text-xs)" }}>·</span>
                          <span style={{
                            fontSize: "var(--text-xs)",
                            color: "var(--text-muted)",
                            fontFamily: "var(--font-jetbrains-mono), monospace",
                          }}>
                            {item.duration}
                          </span>
                        </div>
                      </div>
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "7px" }}>
                        {item.bullets.map((b, bi) => (
                          <li key={bi} style={{ display: "flex", gap: "9px", alignItems: "flex-start" }}>
                            <ArrowRight size={12} style={{ color: "var(--accent)", flexShrink: 0, marginTop: "3px" }} />
                            <span style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)", lineHeight: 1.65 }}>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Education */}
          <div>
            <ScrollReveal delay={100}>
              <p style={{
                fontSize: "var(--text-xs)",
                color: "var(--text-muted)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "var(--font-jetbrains-mono), monospace",
                marginBottom: "24px",
              }}>
                Education
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)", border: "1px solid var(--border)", borderRadius: "10px", overflow: "hidden" }}>
                {EDUCATION.map((edu, i) => (
                  <div key={i} style={{
                    background: "var(--bg-secondary)",
                    padding: "20px 22px",
                    transition: "background var(--t-fast)",
                  }}
                    onMouseEnter={e => e.currentTarget.style.background = "var(--bg-elevated)"}
                    onMouseLeave={e => e.currentTarget.style.background = "var(--bg-secondary)"}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6px" }}>
                      <h3 style={{
                        fontFamily: "var(--font-syne), 'Syne', sans-serif",
                        fontSize: "var(--text-sm)",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                      }}>{edu.degree}</h3>
                      <span style={{
                        fontSize: "var(--text-xs)",
                        color: "var(--accent)",
                        fontFamily: "var(--font-jetbrains-mono), monospace",
                        fontWeight: 600,
                        background: "rgba(16,185,129,0.08)",
                        padding: "2px 8px",
                        borderRadius: "4px",
                        border: "1px solid rgba(16,185,129,0.2)",
                      }}>
                        {edu.grade}
                      </span>
                    </div>
                    <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)", marginBottom: "4px" }}>{edu.institution}</p>
                    <p style={{ color: "var(--text-muted)", fontSize: "var(--text-xs)", fontFamily: "var(--font-jetbrains-mono), monospace" }}>
                      {edu.duration}{edu.expected ? ` · ${edu.expected}` : ""}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #experience .container > div:last-child { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
