import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return (
    <div className="relative bg-[#08090e] bg-tech-grid text-[#e4e4e7] min-h-screen selection:bg-sky-500 selection:text-white">
      {/* Subtle ambient light accents for moderate modern depth */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-sky-500/[0.05] rounded-full blur-[160px]" />
        <div className="absolute top-[35%] -left-40 w-[600px] h-[600px] bg-indigo-500/[0.04] rounded-full blur-[180px]" />
        <div className="absolute top-[70%] -right-40 w-[600px] h-[600px] bg-sky-500/[0.04] rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

