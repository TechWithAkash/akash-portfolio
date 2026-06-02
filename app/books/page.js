"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BookOpen, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Books() {
  const books = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      concept: "Systems over goals",
      description: "An incredibly practical guide on how to build good habits and break bad ones, focusing on tiny 1% daily improvements."
    },
    {
      title: "Show Your Work!",
      author: "Austin Kleon",
      concept: "Documenting the process",
      description: "A short, brilliant read about why sharing your raw creative process, learnings, and small experiments in public is powerful."
    },
    {
      title: "Deep Work",
      author: "Cal Newport",
      concept: "Uninterrupted focus",
      description: "Explains how valuable focus is in a highly distracted modern world and outlines concrete strategies to cultivate deep work blocks."
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      concept: "Software craftsmanship",
      description: "A classic blueprint detailing what constitutes readable, maintainable, and professionally crafted computer code."
    },
    {
      title: "Zero to One",
      author: "Peter Thiel",
      concept: "Monopolies & Startups",
      description: "Presents notes on startups, product thinking, and how to build completely new future systems rather than copying existing ones."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] transition-colors duration-300">
      <Navbar />
      
      <main className="px-4 sm:px-6 py-12" style={{ maxWidth: "620px", marginLeft: "auto", marginRight: "auto", width: "100%" }}>
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors font-mono"
          >
            <ArrowLeft size={12} />
            <span>Back to home</span>
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl font-sans">
          Books
        </h1>
        <p className="text-[14.5px] text-[var(--text-secondary)] mt-2 font-normal leading-relaxed mb-10">
          Books that have influenced my thinking, design, and growth.
        </p>

        {/* Books List */}
        <div className="flex flex-col gap-4">
          {books.map((book, idx) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="p-5 rounded-xl border border-[var(--border-bright)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-elevated)] transition-all flex gap-4"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-glow)] text-[var(--accent)] mt-0.5">
                <BookOpen size={16} />
              </div>
              
              <div>
                <h2 className="text-[14.5px] font-bold text-[var(--text-primary)] leading-tight">
                  {book.title}
                </h2>
                <div className="flex items-center gap-2 mt-1 text-[11px] font-mono text-[var(--text-muted)]">
                  <span>By {book.author}</span>
                  <span>·</span>
                  <span className="text-[var(--accent)] font-semibold uppercase tracking-wider">{book.concept}</span>
                </div>
                <p className="text-[13px] text-[var(--text-secondary)] mt-2.5 leading-relaxed">
                  {book.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
