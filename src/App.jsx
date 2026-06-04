import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useTheme } from "./hooks/useTheme";

import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import WhyHireMe from "./components/WhyHireMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <main>
            <Hero />
            <About />
            <Services />
            <Projects />
            <Experience />
            <Skills />
            <Testimonials />
            <WhyHireMe />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
