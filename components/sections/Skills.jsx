"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { SKILLS } from "@/lib/constants";

export default function Skills() {
  const groups = Object.entries(SKILLS);

  return (
    <section id="skills" className="section" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <ScrollReveal>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "48px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <p className="section-eyebrow">Skills</p>
              <h2 className="section-heading">Technical Stack</h2>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "var(--text-sm)", maxWidth: "280px", textAlign: "right" }}>
              Grouped by domain. No skill bars. No percentages.
            </p>
          </div>
        </ScrollReveal>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1px",
          background: "var(--border)",
          border: "1px solid var(--border)",
          borderRadius: "10px",
          overflow: "hidden",
        }}>
          {groups.map(([groupName, { icon, skills }], i) => (
            <ScrollReveal key={groupName} delay={i * 40}>
              <div
                style={{
                  background: "var(--bg-secondary)",
                  padding: "24px",
                  height: "100%",
                  transition: "background var(--t-fast)",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "var(--bg-elevated)"}
                onMouseLeave={e => e.currentTarget.style.background = "var(--bg-secondary)"}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                  <span style={{ fontSize: "1rem" }}>{icon}</span>
                  <span style={{
                    fontSize: "var(--text-xs)",
                    fontWeight: 600,
                    color: "var(--text-secondary)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                  }}>
                    {groupName}
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {skills.map(skill => (
                    <span key={skill} className="chip">{skill}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #skills .container > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          #skills .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
