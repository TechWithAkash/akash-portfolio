"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Calendar, ArrowRight } from "lucide-react";

const RECENT_POSTS = [
  {
    id: "faq",
    title: "The FAQ",
    description: "Covering the most frequently asked question on how I managed a 9.0 CGPA while shipping real-world products.",
    date: "May 28, 2026",
  },
  {
    id: "hustle-culture",
    title: "The Internet Romanticized Exhaustion",
    description: "How hustle culture slowly destroys ambition, health, peace, and your identity.",
    date: "May 28, 2026",
  },
];

export default function BlogSnippet() {
  const router = useRouter();

  return (
    <section id="blog-snippet" className="w-full max-w-2xl mx-auto px-6 py-6 transition-colors duration-300">
      <div className="border-t border-[var(--border-subtle)] pt-6">
        {/* Section Heading */}
        <h2 className="text-xl font-bold tracking-tight text-[var(--text-primary)] mb-8">
          Blog
        </h2>

        {/* Posts stack */}
        <div className="flex flex-col gap-6">
          {RECENT_POSTS.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 rounded-xl border border-[var(--border-bright)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-elevated)] transition-colors duration-300 cursor-pointer"
              onClick={() => router.push("/blog")}
            >
              <div className="flex flex-col gap-1.5">
                <h3 className="text-[14.5px] font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed line-clamp-1 max-w-xl">
                  {post.description}
                </p>
                <span className="text-[11px] text-[var(--text-muted)] font-mono flex items-center gap-1.5">
                  <Calendar size={11} />
                  {post.date}
                </span>
              </div>

              {/* Read more -> */}
              <span className="flex items-center gap-1 text-[12.5px] font-semibold text-[var(--accent)] shrink-0 font-sans group-hover:translate-x-1 duration-200">
                Read more
                <ArrowRight size={12} />
              </span>
            </motion.article>
          ))}
        </div>

        {/* Show all blogs link */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => router.push("/blog")}
            className="group/btn inline-flex items-center justify-center rounded-lg border border-[var(--border-bright)] bg-[var(--bg-secondary)] px-4 py-2 text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-all cursor-pointer shadow-sm"
          >
            Show all blogs
          </button>
        </div>
      </div>
    </section>
  );
}
