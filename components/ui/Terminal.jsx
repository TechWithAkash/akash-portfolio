"use client";

import { useEffect, useState } from "react";
import { TERMINAL_LINES } from "@/lib/constants";

export default function Terminal() {
  const [lines, setLines] = useState([]);
  const [typing, setTyping] = useState({ lineIdx: 0, charIdx: 0 });
  const [done, setDone] = useState(false);
  const [cursor, setCursor] = useState(true);

  const allLines = TERMINAL_LINES;

  useEffect(() => {
    const interval = setInterval(() => setCursor(c => !c), 520);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (done) return;
    const { lineIdx, charIdx } = typing;
    if (lineIdx >= allLines.length) { setDone(true); return; }

    const line = allLines[lineIdx];
    const fullText = line.text;

    if (charIdx < fullText.length) {
      const t = setTimeout(() => setTyping(p => ({ ...p, charIdx: p.charIdx + 1 })), 28);
      return () => clearTimeout(t);
    } else {
      const delay = line.type === "blank" ? 80 : 50;
      const t = setTimeout(() => {
        setLines(prev => [...prev, line]);
        setTyping({ lineIdx: lineIdx + 1, charIdx: 0 });
      }, delay);
      return () => clearTimeout(t);
    }
  }, [typing, done, allLines]);

  const color = (type) => {
    switch (type) {
      case "comment": return "#52525b";
      case "keyword": return "#10b981";
      default: return "#a1a1aa";
    }
  };

  const currentLine = allLines[typing.lineIdx];
  const currentText = currentLine ? currentLine.text.slice(0, typing.charIdx) : "";

  return (
    <div
      style={{
        background: "#0d0d0f",
        border: "1px solid var(--border)",
        borderRadius: "10px",
        overflow: "hidden",
        fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', monospace",
        fontSize: "0.78rem",
        lineHeight: "1.75",
        animation: "float 7s ease-in-out infinite",
        boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
      }}
    >
      {/* Window chrome */}
      <div style={{
        display: "flex",
        alignItems: "center",
        padding: "11px 14px",
        background: "#111113",
        borderBottom: "1px solid var(--border)",
        gap: "6px",
      }}>
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444", opacity: 0.8 }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b", opacity: 0.8 }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e", opacity: 0.8 }} />
        <span style={{
          marginLeft: "10px",
          color: "#52525b",
          fontSize: "0.72rem",
          letterSpacing: "0.02em",
        }}>
          akash-os · core/boot.ts
        </span>
      </div>

      {/* Code body */}
      <div style={{ padding: "18px 20px", minHeight: "210px", overflowX: "auto", whiteSpace: "pre" }}>
        {/* Line numbers + code */}
        {lines.map((line, i) => (
          <div key={i} style={{ display: "flex", gap: "16px" }}>
            <span style={{ color: "#3f3f46", userSelect: "none", minWidth: "14px", textAlign: "right", fontSize: "0.72rem" }}>
              {line.type === "blank" ? "" : i + 1}
            </span>
            <span style={{ color: color(line.type), whiteSpace: "pre" }}>
              {line.type === "blank" ? "\u00A0" : line.text}
            </span>
          </div>
        ))}

        {/* Currently typing */}
        {!done && currentLine && (
          <div style={{ display: "flex", gap: "16px" }}>
            <span style={{ color: "#3f3f46", userSelect: "none", minWidth: "14px", textAlign: "right", fontSize: "0.72rem" }}>
              {typing.lineIdx + 1}
            </span>
            <span style={{ color: color(currentLine.type), whiteSpace: "pre" }}>
              {currentText}
              <span style={{
                display: "inline-block",
                width: "1.5px",
                height: "0.85em",
                background: "var(--accent)",
                verticalAlign: "text-bottom",
                marginLeft: "1px",
                opacity: cursor ? 1 : 0,
              }} />
            </span>
          </div>
        )}

        {/* Done state — shell prompt */}
        {done && (
          <div style={{ marginTop: "6px", display: "flex", gap: "16px" }}>
            <span style={{ color: "#3f3f46", userSelect: "none", minWidth: "14px", textAlign: "right", fontSize: "0.72rem" }}>
              {allLines.length + 2}
            </span>
            <span style={{ color: "#52525b" }}>
              $ <span style={{ color: "var(--accent)" }}>node</span>
              <span style={{ color: "#a1a1aa" }}> server.js</span>
              <span style={{
                display: "inline-block",
                width: "1.5px",
                height: "0.85em",
                background: "var(--green)",
                verticalAlign: "text-bottom",
                marginLeft: "2px",
                opacity: cursor ? 1 : 0,
              }} />
            </span>
          </div>
        )}
      </div>

      {/* Status bar */}
      <div style={{
        padding: "7px 20px",
        background: "#111113",
        borderTop: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <span style={{ fontSize: "0.68rem", color: "#3f3f46" }}>JavaScript</span>
        <span style={{
          fontSize: "0.68rem",
          color: "var(--accent)",
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}>
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--green)" }} />
          System Optimal
        </span>
      </div>
    </div>
  );
}
