"use client";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export default function ProjectCard({ project, featured = false }) {
  const { title, tagline, description, metrics, stack, liveUrl, githubUrl, status, award, note, contributions } = project;

  if (featured) {
    return (
      <div style={{
        background: "var(--bg-secondary)",
        border: "1px solid var(--border)",
        borderRadius: "var(--card-radius)",
        padding: "var(--card-padding)",
        transition: "border-color var(--transition-base), box-shadow var(--transition-base)",
        position: "relative",
        overflow: "hidden",
      }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--accent)";
          e.currentTarget.style.boxShadow = "0 8px 40px var(--accent-glow-strong)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--border)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {/* Accent gradient top bar */}
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: "2px",
          background: "var(--gradient-hero)",
        }} />

        {/* Header row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <Badge variant={status === "live" ? "live" : "dev"}>
              {status === "live" ? "🟢 Live" : "🔧 In Dev"}
            </Badge>
            <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", fontFamily: "var(--font-jetbrains-mono), monospace" }}>
              Featured Project
            </span>
          </div>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {stack.slice(0, 4).map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>

        {/* Two-column layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
          {/* Left */}
          <div>
            <h3 style={{
              fontFamily: "var(--font-syne), 'Syne', sans-serif",
              fontSize: "var(--text-2xl)",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "4px",
            }}>{title}</h3>
            <p style={{ color: "var(--accent)", fontSize: "var(--text-sm)", marginBottom: "16px", fontWeight: 500 }}>{tagline}</p>
            <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)", lineHeight: "1.7", marginBottom: "20px" }}>{description}</p>

            {/* Metrics strip */}
            <div style={{
              display: "flex",
              gap: "16px",
              padding: "12px 16px",
              background: "var(--bg-elevated)",
              borderRadius: "8px",
              flexWrap: "wrap",
              marginBottom: "20px",
            }}>
              {metrics.map((m, i) => (
                <span key={i} style={{ color: "var(--green)", fontSize: "var(--text-xs)", fontFamily: "var(--font-jetbrains-mono), monospace", fontWeight: 500 }}>
                  {m}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {liveUrl && (
                <Button variant="primary" href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={14} /> Live Demo
                </Button>
              )}
              <Button variant="secondary" href={githubUrl} target="_blank" rel="noopener noreferrer">
                              <GithubIcon size={14} /> GitHub
              </Button>
            </div>
          </div>

          {/* Right — contributions */}
          <div>
            <p style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px", fontFamily: "var(--font-jetbrains-mono), monospace" }}>
              Key Contributions
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {contributions.map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <ArrowRight size={14} style={{ color: "var(--accent)", flexShrink: 0, marginTop: "3px" }} />
                  <span style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)", lineHeight: "1.6" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // Standard card
  return (
    <div
      className="card"
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <Badge variant={status === "live" ? "live" : "dev"}>
          {status === "live" ? "🟢 Live" : "🔧 In Dev"}
        </Badge>
        {award && (
          <span style={{ fontSize: "var(--text-xs)", color: "var(--yellow)", fontFamily: "var(--font-jetbrains-mono), monospace" }}>
            {award.split("·")[0]}
          </span>
        )}
      </div>

      <h3 style={{
        fontFamily: "var(--font-syne), 'Syne', sans-serif",
        fontSize: "var(--text-xl)",
        fontWeight: 700,
        color: "var(--text-primary)",
        marginBottom: "4px",
      }}>{title}</h3>
      <p style={{ color: "var(--text-muted)", fontSize: "var(--text-sm)", marginBottom: "12px" }}>{tagline}</p>
      <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)", lineHeight: "1.7", marginBottom: "16px", flex: 1 }}>{description}</p>

      {/* Divider + metrics */}
      <div style={{ borderTop: "1px solid var(--border)", paddingTop: "12px", marginBottom: "16px" }}>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {metrics.map((m, i) => (
            <span key={i} style={{ color: "var(--accent)", fontSize: "var(--text-xs)", fontFamily: "var(--font-jetbrains-mono), monospace" }}>
              {m}
            </span>
          ))}
        </div>
      </div>

      {/* Stack chips */}
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "16px" }}>
        {stack.slice(0, 4).map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      {/* CTAs */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {liveUrl && (
          <Button variant="primary" href={liveUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: "var(--text-xs)", padding: "8px 14px" }}>
            <ExternalLink size={12} /> Demo
          </Button>
        )}
        <Button variant="secondary" href={githubUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: "var(--text-xs)", padding: "8px 14px" }}>
                        <GithubIcon size={12} /> Code
        </Button>
      </div>

      {note && (
        <p style={{ marginTop: "12px", fontSize: "var(--text-xs)", color: "var(--text-muted)", fontStyle: "italic" }}>{note}</p>
      )}
    </div>
  );
}
