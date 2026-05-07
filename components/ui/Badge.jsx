"use client";

export default function Badge({ children, variant = "default", className = "" }) {
  const variantClass = variant === "live" ? "badge-live" : variant === "dev" ? "badge-dev" : "";
  return (
    <span className={`badge ${variantClass} ${className}`}>
      {children}
    </span>
  );
}
