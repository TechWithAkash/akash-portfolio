"use client";

export default function GradientText({ children, className = "", shimmer = false }) {
  return (
    <span className={shimmer ? `shimmer-text ${className}` : `gradient-text ${className}`}>
      {children}
    </span>
  );
}
