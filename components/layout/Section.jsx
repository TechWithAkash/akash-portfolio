"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Section({ id, children, className = "", style }) {
  return (
    <section id={id} className={`section ${className}`} style={style}>
      <div className="container">
        <ScrollReveal>
          {children}
        </ScrollReveal>
      </div>
    </section>
  );
}
