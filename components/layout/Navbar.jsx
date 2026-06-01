"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Search } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import CommandPalette from "@/components/ui/CommandPalette";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [theme, setTheme] = useState("light");
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem("portfolio-theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      Promise.resolve().then(() => setTheme("dark"));
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      Promise.resolve().then(() => setTheme("light"));
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Listen to Cmd+K to toggle command palette
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsPaletteOpen(prev => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("portfolio-theme", "light");
    }
  };

  const navigateTo = (path, elementId) => {
    if (pathname === "/") {
      if (elementId === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/#${elementId}`);
      setTimeout(() => {
        document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  };

  // Listen to global single-key shortcuts when not typing in form inputs
  useEffect(() => {
    const handleGlobalShortcuts = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;

      const activeEl = document.activeElement;
      if (
        activeEl && 
        (activeEl.tagName === "INPUT" || 
         activeEl.tagName === "TEXTAREA" || 
         activeEl.isContentEditable)
      ) {
        return;
      }

      const key = e.key.toLowerCase();
      
      switch (key) {
        case "h":
          e.preventDefault();
          navigateTo("/", "hero");
          break;
        case "w":
          e.preventDefault();
          router.push("/work");
          break;
        case "b":
          e.preventDefault();
          router.push("/blog");
          break;
        case "r":
          e.preventDefault();
          router.push("/resume");
          break;
        case "e":
          e.preventDefault();
          navigateTo("/", "experience");
          break;
        case "d":
          e.preventDefault();
          navigateTo("/", "dev-personal");
          break;
        case "p":
          e.preventDefault();
          navigateTo("/", "projects");
          break;
        case "s":
          e.preventDefault();
          navigateTo("/", "skills");
          break;
        case "a":
          e.preventDefault();
          navigateTo("/", "achievements");
          break;
        case "c":
          e.preventDefault();
          navigateTo("/", "contact");
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleGlobalShortcuts);
    return () => window.removeEventListener("keydown", handleGlobalShortcuts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, pathname]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-[var(--border-subtle)] bg-[var(--bg-glass)] backdrop-blur-md transition-colors duration-300">
        <div className="mx-auto flex h-14 max-w-2xl items-center justify-between px-6">
          {/* Left Side: Navigation Links */}
          <nav className="flex items-center gap-4 sm:gap-5 text-sm font-medium">
            <button
              onClick={() => navigateTo("/", "hero")}
              className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] text-[13px] font-medium cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => router.push("/work")}
              className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] text-[13px] font-medium cursor-pointer"
            >
              Work
            </button>
            <button
              onClick={() => router.push("/blog")}
              className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] text-[13px] font-medium cursor-pointer"
            >
              Blog
            </button>
            <button
              onClick={() => router.push("/resume")}
              className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] text-[13px] font-medium cursor-pointer"
            >
              Resume
            </button>
          </nav>

          {/* Right Side: Tools (Search & Theme Toggle) */}
          <div className="flex items-center gap-2">
            {/* Command Palette Button */}
            <button
              onClick={() => setIsPaletteOpen(true)}
              className="flex h-8 items-center gap-1.5 px-2.5 rounded-lg border border-[var(--border-bright)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-all font-mono cursor-pointer"
              title="Open Search"
            >
              <Search size={13} />
              <span className="hidden sm:inline text-[10px] opacity-70">⌘ K</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border-bright)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] transition-all hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)] cursor-pointer"
            >
              {theme === "light" ? <Moon size={14} /> : <Sun size={14} />}
            </button>
          </div>
        </div>
      </header>

      {/* Command Palette Overlay */}
      <CommandPalette 
        isOpen={isPaletteOpen} 
        onClose={() => setIsPaletteOpen(false)} 
      />
    </>
  );
}
