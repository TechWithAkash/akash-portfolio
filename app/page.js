import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import BlogSnippet from "@/components/sections/BlogSnippet";
import DevPersonal from "@/components/sections/DevPersonal";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] transition-colors duration-300">
      <Navbar />
      <main
        className="relative z-10 pt-4 pb-6"
        style={{ maxWidth: "620px", marginLeft: "auto", marginRight: "auto", width: "100%" }}
      >
        <Hero />
        <Experience />
        <BlogSnippet />
        <DevPersonal />
        <Projects />
        <About />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
