import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { navLinks } from "../data";
import { useScrollSpy } from "../hooks/useScrollSpy";

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useScrollSpy(sectionIds, 140);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0c14]/90 backdrop-blur-md border-b border-white/[0.08] py-3 shadow-lg shadow-black/30"
          : "bg-transparent py-4.5"
      }`}
    >
      <div className="container-max px-5 sm:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#home");
          }}
          className="font-semibold text-base text-white hover:text-sky-300 transition-colors flex items-center gap-2.5 group"
        >
          <img
            src="/profile.jpg"
            alt="Tejash Patel"
            className="w-7 h-7 rounded-full object-cover object-top border border-sky-400/80 group-hover:scale-110 transition-transform"
          />
          <span>Tejash Patel</span>
        </a>

        {/* Desktop Nav Links inside an Elegant Segmented Container */}
        <div className="hidden md:flex items-center gap-1 p-1.5 rounded-2xl bg-[#11121d]/90 backdrop-blur-md border border-white/[0.08] shadow-lg shadow-black/40">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap cursor-pointer transition-all duration-200 ${
                  isActive
                    ? "bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-sm shadow-sky-500/10 font-semibold"
                    : "text-gray-400 hover:text-white hover:bg-white/[0.05] border border-transparent"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNav("#contact")}
            className="px-4 py-2 rounded-xl btn-gradient text-xs sm:text-sm font-semibold cursor-pointer"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-neutral-400 hover:text-white"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <HiX size={20} /> : <HiMenu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0e0f19] border-b border-white/[0.08] px-5 py-4 space-y-2">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`block w-full text-left px-3.5 py-2.5 rounded-xl text-sm transition-all ${
                  isActive
                    ? "bg-sky-500/20 text-sky-300 border border-sky-500/35 font-semibold"
                    : "text-gray-300 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <button
            onClick={() => handleNav("#contact")}
            className="w-full py-2.5 rounded-xl btn-gradient font-medium text-sm text-center mt-2"
          >
            Get In Touch
          </button>
        </div>
      )}
    </nav>
  );
}
