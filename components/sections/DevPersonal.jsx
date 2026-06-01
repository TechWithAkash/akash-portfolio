"use client";

import { motion } from "framer-motion";

export default function DevPersonal() {
  const devItems = [
    {
      title: "Gears",
      description: "Tools, devices, and software I use to get work done.",
      link: "#"
    },
    {
      title: "Setup",
      description: "VSCode / Cursor configuration and extensions guide.",
      link: "#"
    },
    {
      title: "Terminal",
      description: "Zsh, Starship, Fastfetch, and shell configuration.",
      link: "#"
    }
  ];

  const personalItems = [
    {
      title: "Books",
      description: "Books that have influenced my thinking and growth.",
      link: "#"
    },
    {
      title: "Movies",
      description: "Films and shows that have inspired and entertained me.",
      link: "#"
    }
  ];

  return (
    <section id="dev-personal" className="w-full max-w-2xl mx-auto px-6 py-12 transition-colors duration-300">
      <div className="border-t border-[var(--border-subtle)] pt-12">
        {/* Development Section */}
        <h2 className="text-xl font-bold tracking-tight text-[var(--text-primary)] mb-6">
          Development
        </h2>
        <div className="flex flex-col gap-4">
          {devItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group p-5 rounded-xl border border-[var(--border-bright)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-elevated)] hover:border-[var(--text-muted)]/20 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-[14.5px] font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                {item.title}
              </h3>
              <p className="text-[13px] text-[var(--text-secondary)] mt-1 font-normal leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Personal Section */}
        <h2 className="text-xl font-bold tracking-tight text-[var(--text-primary)] mt-12 mb-6">
          Personal
        </h2>
        <div className="flex flex-col gap-4">
          {personalItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group p-5 rounded-xl border border-[var(--border-bright)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-elevated)] hover:border-[var(--text-muted)]/20 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-[14.5px] font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                {item.title}
              </h3>
              <p className="text-[13px] text-[var(--text-secondary)] mt-1 font-normal leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Death Note Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="relative overflow-hidden mt-12 p-8 rounded-xl border border-[var(--border-bright)] bg-[var(--bg-secondary)] flex items-center justify-center min-h-[120px] transition-colors duration-300 shadow-sm"
        >
          {/* Big Elegant Quote Marks in Background */}
          <div className="absolute top-[-10px] left-4 text-[120px] font-serif font-black text-[var(--text-muted)] opacity-[0.06] select-none pointer-events-none leading-none">
            “
          </div>
          
          <p className="relative z-10 text-[14.5px] font-mono italic text-[var(--text-secondary)] tracking-wide text-center leading-relaxed max-w-md">
            "I'll take a potato chip... AND EAT IT!"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
