"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar, ArrowRight } from "lucide-react";

const BLOG_POSTS = [
  {
    id: "faq",
    title: "The FAQ",
    description: "Covering the most frequently asked question on how I managed a 9.0 CGPA while shipping real-world products.",
    tag: "Personal",
    date: "May 28, 2026",
  },
  {
    id: "hustle-culture",
    title: "The Internet Romanticized Exhaustion",
    description: "How hustle culture slowly destroys ambition, health, peace, and your identity.",
    tag: "Personal",
    date: "May 28, 2026",
  },
  {
    id: "optimize-skills",
    title: "We Stopped Optimizing for Skills.",
    description: "We stopped optimizing for skills and started optimizing for looking skilled in developer portfolios.",
    tag: "Engineering",
    date: "May 25, 2026",
  },
  {
    id: "ai-engineering",
    title: "AI Can't Save Bad Engineering",
    description: "AI tools and prompts can't compensate for poor foundational architecture and db design.",
    tag: "AI",
    date: "May 25, 2026",
  },
  {
    id: "rag-systems",
    title: "Building with RAG & Agentic Systems",
    description: "My honest take on RAG, LangChain, and vector stores long before they became buzzwords.",
    tag: "AI",
    date: "May 20, 2026",
  },
];

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const tags = ["All", "Personal", "AI", "Engineering"];

  const getTagCount = (tag) => {
    if (tag === "All") return BLOG_POSTS.length;
    return BLOG_POSTS.filter(post => post.tag === tag).length;
  };

  const filteredPosts = activeFilter === "All"
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.tag === activeFilter);

  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] transition-colors duration-300">
      <Navbar />
      <main className="max-w-2xl mx-auto px-6 py-16">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 border-b border-[var(--border-subtle)] pb-10"
        >
          <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Blog
          </h1>
          <p className="text-[14.5px] text-[var(--text-secondary)] mt-2 font-normal">
            Thoughts, tutorials, and insights on engineering and programming.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center gap-2 mb-12"
        >
          {tags.map((tag) => {
            const isActive = activeFilter === tag;
            const count = getTagCount(tag);

            return (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[var(--text-primary)] text-[var(--bg-primary)] border-[var(--text-primary)]"
                    : "bg-[var(--bg-secondary)] text-[var(--text-secondary)] border-[var(--border-bright)] hover:border-[var(--text-muted)]"
                }`}
              >
                <span>{tag}</span>
                <span className={`h-4 min-w-[16px] px-1 flex items-center justify-center rounded-full text-[9px] font-mono leading-none ${
                  isActive ? "bg-[var(--bg-primary)] text-[var(--text-primary)]" : "bg-[var(--bg-primary)] text-[var(--text-muted)] border border-[var(--border-subtle)]"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Articles List */}
        <div className="flex flex-col gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-5 rounded-xl border border-[var(--border-bright)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-elevated)] transition-all duration-300"
              >
                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 text-[10px] font-bold font-mono uppercase tracking-wider text-[var(--accent)] bg-[var(--accent-glow)] rounded-[4px]">
                      {post.tag}
                    </span>
                    <span className="text-[12.5px] text-[var(--text-muted)] font-mono flex items-center gap-1">
                      <Calendar size={11} />
                      {post.date}
                    </span>
                  </div>

                  <h2 className="text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-[13.5px] text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                    {post.description}
                  </p>
                </div>

                {/* Read More Trigger */}
                <span className="flex items-center gap-1 text-[13px] font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors shrink-0 font-sans cursor-pointer group-hover:translate-x-1 duration-200">
                  Read more
                  <ArrowRight size={13} />
                </span>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </div>
  );
}
