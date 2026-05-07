"use client";

export default function ExperienceItem({ item, isLast = false }) {
  const { role, company, location, duration, period, bullets } = item;

  return (
    <div style={{ display: "flex", gap: "24px", position: "relative" }}>
      {/* Timeline line + dot */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
        <div style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: "var(--accent)",
          border: "2px solid var(--bg-primary)",
          boxShadow: "0 0 0 3px var(--accent-glow)",
          flexShrink: 0,
          marginTop: "4px",
        }} />
        {!isLast && (
          <div style={{
            width: "1px",
            flex: 1,
            background: "linear-gradient(to bottom, var(--accent), var(--border))",
            marginTop: "8px",
            minHeight: "40px",
          }} />
        )}
      </div>

      {/* Content */}
      <div style={{ flex: 1, paddingBottom: isLast ? 0 : "40px" }}>
        <div style={{ marginBottom: "12px" }}>
          <h3 style={{
            fontFamily: "var(--font-syne), 'Syne', sans-serif",
            fontSize: "var(--text-lg)",
            fontWeight: 700,
            color: "var(--text-primary)",
            marginBottom: "4px",
          }}>{role}</h3>
          <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
            <span style={{ color: "var(--accent)", fontSize: "var(--text-sm)", fontWeight: 500 }}>{company}</span>
            <span style={{ color: "var(--text-muted)", fontSize: "var(--text-xs)" }}>·</span>
            <span style={{ color: "var(--text-muted)", fontSize: "var(--text-xs)" }}>{location}</span>
            <span style={{ color: "var(--text-muted)", fontSize: "var(--text-xs)" }}>·</span>
            <span style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "var(--text-xs)",
              color: "var(--text-secondary)",
            }}>{duration} · {period}</span>
          </div>
        </div>

        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
          {bullets.map((bullet, i) => (
            <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
              <span style={{ color: "var(--accent)", fontWeight: 700, flexShrink: 0, marginTop: "2px" }}>→</span>
              <span style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)", lineHeight: 1.7 }}>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
