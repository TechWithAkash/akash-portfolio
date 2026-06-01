"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AppWindow, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Movies() {
  const media = [
    {
      title: "Silicon Valley",
      type: "TV Show",
      genre: "Tech / Comedy",
      description: "The funniest, most accurate, and deeply insightful representation of startup culture, engineering struggles, and venture capital ever made."
    },
    {
      title: "Mr. Robot",
      type: "TV Show",
      genre: "Cybersecurity / Drama",
      description: "A brilliant psychological thriller featuring highly accurate hacking techniques, command line terminal sequences, and anti-establishment struggles."
    },
    {
      title: "Interstellar",
      type: "Movie",
      genre: "Sci-Fi / Space",
      description: "A visually and emotionally breathtaking space-exploration masterpiece exploring concepts of time-dilation, gravity, and the limits of human love."
    },
    {
      title: "The Social Network",
      type: "Movie",
      genre: "Drama / Biography",
      description: "A fast-paced, sharp biographical look at how Facebook was founded, capturing the intense engineering speed, ambition, and product focus."
    },
    {
      title: "Death Note",
      type: "Anime Series",
      genre: "Psychological / Mystery",
      description: "A brilliant intellectual battle of wits and strategies between Light Yagami and L. The origin of the famous Yagami potato chip line."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] transition-colors duration-300">
      <Navbar />
      
      <main className="max-w-2xl mx-auto px-6 py-12">
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
          Movies & Shows
        </h1>
        <p className="text-[14.5px] text-[var(--text-secondary)] mt-2 font-normal leading-relaxed mb-10">
          Films and shows that have inspired and entertained me.
        </p>

        {/* Media List */}
        <div className="flex flex-col gap-4">
          {media.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="p-5 rounded-xl border border-[var(--border-bright)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-elevated)] transition-all flex gap-4"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-glow)] text-[var(--accent)] mt-0.5">
                <AppWindow size={16} />
              </div>
              
              <div>
                <h2 className="text-[14.5px] font-bold text-[var(--text-primary)] leading-tight">
                  {item.title}
                </h2>
                <div className="flex items-center gap-2 mt-1 text-[11px] font-mono text-[var(--text-muted)]">
                  <span className="text-[var(--accent)] font-semibold uppercase tracking-wider">{item.type}</span>
                  <span>·</span>
                  <span>{item.genre}</span>
                </div>
                <p className="text-[13px] text-[var(--text-secondary)] mt-2.5 leading-relaxed">
                  {item.description}
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
