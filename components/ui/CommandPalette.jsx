"use client";

import { useState, useEffect, useRef } from "react";
import { Search, Home, Briefcase, FileText, BookOpen, Terminal, Folder, Code, Trophy, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CommandPalette({ isOpen, onClose }) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  const navigationItems = [
    { id: "home", label: "Go to Home", description: "Navigate to the homepage", shortcut: "H", path: "/", icon: <Home size={16} /> },
    { id: "work", label: "Go to Work", description: "View work experience details", shortcut: "W", path: "/work", icon: <Briefcase size={16} /> },
    { id: "blog", label: "Go to Blog", description: "Browse all blog posts", shortcut: "B", path: "/blog", icon: <BookOpen size={16} /> },
    { id: "resume", label: "Go to Resume", description: "View and download resume", shortcut: "R", path: "/resume", icon: <FileText size={16} /> },
  ];

  const sectionItems = [
    { id: "sec-experience", label: "Jump to Experience", description: "Scroll to work experience timeline", shortcut: "E", elementId: "experience", icon: <Briefcase size={16} /> },
    { id: "sec-blog", label: "Jump to Blog", description: "Scroll to latest blog posts", shortcut: "L", elementId: "blog", icon: <BookOpen size={16} /> },
    { id: "sec-devpersonal", label: "Jump to Development & Personal", description: "Scroll to gears, setup, books & movies", shortcut: "D", elementId: "dev-personal", icon: <Terminal size={16} /> },
    { id: "sec-projects", label: "Jump to Projects", description: "Scroll to featured projects grid", shortcut: "P", elementId: "projects", icon: <Folder size={16} /> },
    { id: "sec-skills", label: "Jump to Skills", description: "Scroll to core technical capabilities", shortcut: "S", elementId: "skills", icon: <Code size={16} /> },
    { id: "sec-achievements", label: "Jump to Achievements", description: "Scroll to hackathon wins and credentials", shortcut: "A", elementId: "achievements", icon: <Trophy size={16} /> },
    { id: "sec-contact", label: "Jump to Contact", description: "Scroll to get in touch form", shortcut: "C", elementId: "contact", icon: <Mail size={16} /> },
  ];

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleItemClick = (item) => {
    onClose();
    if (item.path) {
      router.push(item.path);
    } else if (item.elementId) {
      if (window.location.pathname === "/") {
        const el = document.getElementById(item.elementId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        router.push(`/#${item.elementId}`);
        // Give router a slight delay to mount home page before scrolling
        setTimeout(() => {
          document.getElementById(item.elementId)?.scrollIntoView({ behavior: "smooth" });
        }, 120);
      }
    }
  };

  // Handle shortcuts while the command palette is open or closed
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Toggle Command Palette on Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onClose();
      }

      // Close on Escape
      if (e.key === "Escape" && isOpen) {
        onClose();
      }

      // If Command Palette is OPEN, listen to key shortcuts
      if (isOpen && !e.metaKey && !e.ctrlKey) {
        const activeEl = document.activeElement;
        // Only run shortcut if user isn't typing a search query
        if (activeEl === inputRef.current && inputRef.current.value.length > 0) {
          return;
        }

        const char = e.key.toUpperCase();
        const matchedNav = navigationItems.find(item => item.shortcut === char);
        const matchedSec = sectionItems.find(item => item.shortcut === char);
        const matched = matchedNav || matchedSec;

        if (matched) {
          e.preventDefault();
          handleItemClick(matched);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, onClose, router]);

  if (!isOpen) return null;

  const filteredNav = navigationItems.filter(item =>
    item.label.toLowerCase().includes(search.toLowerCase()) ||
    item.description.toLowerCase().includes(search.toLowerCase())
  );

  const filteredSec = sectionItems.filter(item =>
    item.label.toLowerCase().includes(search.toLowerCase()) ||
    item.description.toLowerCase().includes(search.toLowerCase())
  );

  const hasResults = filteredNav.length > 0 || filteredSec.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center px-4 bg-black/50 backdrop-blur-[2px]" style={{ paddingTop: "18vh" }}>
      <div 
        ref={containerRef}
        className="overflow-hidden rounded-xl border border-[var(--border-bright)] bg-[var(--bg-secondary)] shadow-2xl"
        style={{ width: "100%", maxWidth: "480px" }}
      >
        {/* Search Input Box */}
        <div className="flex items-center gap-3 border-b border-[var(--border-subtle)] px-4 py-3">
          <Search size={16} className="text-[var(--text-muted)] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent text-[14px] text-[var(--text-primary)] focus:outline-none placeholder-[var(--text-muted)] font-sans"
          />
          <button 
            onClick={onClose}
            className="px-1.5 py-0.5 text-[10px] font-mono border border-[var(--border-bright)] rounded text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Content List */}
        <div className="max-h-[480px] overflow-y-auto p-2 custom-scrollbar flex flex-col gap-3">
          {!hasResults ? (
            <div className="p-4 text-center text-sm text-[var(--text-muted)] font-mono">
              No results found.
            </div>
          ) : (
            <>
              {/* Navigation Items Group */}
              {filteredNav.length > 0 && (
                <div className="flex flex-col gap-0.5">
                  <span className="text-[9.5px] font-bold font-mono uppercase tracking-widest text-[var(--text-muted)] px-3 py-1 block">
                    Navigation
                  </span>
                  
                  {filteredNav.map(item => (
                    <button
                      key={item.id}
                      onClick={() => handleItemClick(item)}
                      className="w-full flex items-center justify-between p-2.5 rounded-lg text-left hover:bg-[var(--bg-elevated)] transition-colors group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors shrink-0">
                          {item.icon}
                        </span>
                        <div className="flex flex-col">
                          <span className="text-[13.5px] font-semibold text-[var(--text-primary)] leading-tight">
                            {item.label}
                          </span>
                          <span className="text-[11.5px] text-[var(--text-muted)] mt-0.5 leading-none">
                            {item.description}
                          </span>
                        </div>
                      </div>

                      {/* Keyboard Shortcut Tag */}
                      <span className="flex h-5 w-5 items-center justify-center rounded border border-[var(--border-bright)] bg-[var(--bg-primary)] text-[10px] font-mono text-[var(--text-muted)] group-hover:border-[var(--text-muted)] transition-colors">
                        {item.shortcut}
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {/* Home Page Sections Group */}
              {filteredSec.length > 0 && (
                <div className="flex flex-col gap-0.5">
                  <span className="text-[9.5px] font-bold font-mono uppercase tracking-widest text-[var(--text-muted)] px-3 py-1.5 block border-t border-[var(--border-subtle)]/30 mt-1">
                    Home Sections
                  </span>
                  
                  {filteredSec.map(item => (
                    <button
                      key={item.id}
                      onClick={() => handleItemClick(item)}
                      className="w-full flex items-center justify-between p-2.5 rounded-lg text-left hover:bg-[var(--bg-elevated)] transition-colors group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors shrink-0">
                          {item.icon}
                        </span>
                        <div className="flex flex-col">
                          <span className="text-[13.5px] font-semibold text-[var(--text-primary)] leading-tight">
                            {item.label}
                          </span>
                          <span className="text-[11.5px] text-[var(--text-muted)] mt-0.5 leading-none">
                            {item.description}
                          </span>
                        </div>
                      </div>

                      {/* Keyboard Shortcut Tag */}
                      <span className="flex h-5 w-5 items-center justify-center rounded border border-[var(--border-bright)] bg-[var(--bg-primary)] text-[10px] font-mono text-[var(--text-muted)] group-hover:border-[var(--text-muted)] transition-colors">
                        {item.shortcut}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
      
      {/* Click outside backdrop triggers close */}
      <div 
        className="fixed inset-0 -z-10" 
        onClick={onClose}
      />
    </div>
  );
}
