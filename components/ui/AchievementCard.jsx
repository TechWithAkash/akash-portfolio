"use client";

export default function AchievementCard({ achievement }) {
  const { icon, title, event, description, highlight } = achievement;

  return (
    <div
      style={{
        background: highlight ? "var(--bg-elevated)" : "var(--bg-secondary)",
        border: `1px solid ${highlight ? "var(--border-bright)" : "var(--border)"}`,
        borderRadius: "var(--card-radius)",
        padding: "24px",
        transition: "all 300ms ease-out",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "perspective(600px) rotateX(2deg) rotateY(-2deg) translateY(-4px)";
        e.currentTarget.style.borderColor = "var(--accent)";
        e.currentTarget.style.boxShadow = "0 12px 40px var(--accent-glow)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "perspective(600px) rotateX(0) rotateY(0) translateY(0)";
        e.currentTarget.style.borderColor = highlight ? "var(--border-bright)" : "var(--border)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {highlight && (
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: "2px",
          background: "var(--gradient-hero)",
        }} />
      )}

      <div style={{ fontSize: "2rem", marginBottom: "12px" }}>{icon}</div>
      <h3 style={{
        fontFamily: "var(--font-sans), 'Hanken Grotesk', sans-serif",
        fontSize: "var(--text-base)",
        fontWeight: 700,
        color: "var(--text-primary)",
        marginBottom: "6px",
        lineHeight: 1.3,
      }}>{title}</h3>
      <p style={{
        fontSize: "var(--text-xs)",
        color: "var(--accent)",
        fontFamily: "var(--font-jetbrains-mono), monospace",
        marginBottom: "8px",
        fontWeight: 500,
      }}>{event}</p>
      <p style={{
        fontSize: "var(--text-sm)",
        color: "var(--text-muted)",
        lineHeight: 1.6,
      }}>{description}</p>
    </div>
  );
}
