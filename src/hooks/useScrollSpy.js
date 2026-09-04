import { useState, useEffect } from "react";

export function useScrollSpy(sections, offset = 140) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // If scrolled to the bottom of the page, activate the last section
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        if (sections.length > 0) {
          setActiveSection(sections[sections.length - 1]);
        }
        return;
      }

      // If at top of page before first section
      if (window.scrollY < 120) {
        setActiveSection("");
        return;
      }

      // Find current section in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset) {
            setActiveSection(id);
            return;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, offset]);

  return activeSection;
}
