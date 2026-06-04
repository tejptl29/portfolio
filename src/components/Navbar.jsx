import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { navLinks } from "../data";
import { useScrollSpy } from "../hooks/useScrollSpy";

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useScrollSpy(sectionIds);

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
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg shadow-primary-500/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-max px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNav("#home"); }}
          whileHover={{ scale: 1.05 }}
          className="font-heading font-bold text-xl"
        >
          <span className="gradient-text">Tejash</span>
          <span className="text-gray-900 dark:text-white">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <motion.button
                key={link.href}
                onClick={() => handleNav(link.href)}
                whileHover={{ y: -2 }}
                className={`relative px-4 py-2 rounded-lg font-body text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-primary-500 dark:text-primary-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-primary-500/10 dark:bg-primary-500/15 rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2.5 rounded-xl glass text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            {theme === "dark" ? <MdLightMode size={18} /> : <MdDarkMode size={18} />}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNav("#contact")}
            className="hidden md:block px-5 py-2 gradient-bg text-white rounded-xl text-sm font-semibold shadow-lg shadow-primary-500/25"
          >
            Hire Me
          </motion.button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2.5 rounded-xl glass text-gray-700 dark:text-gray-300"
          >
            {mobileOpen ? <HiX size={20} /> : <HiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-white/10 mt-2 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`text-left px-4 py-3 rounded-xl font-body font-medium transition-colors ${
                    activeSection === link.href.replace("#", "")
                      ? "text-primary-500 bg-primary-500/10"
                      : "text-gray-700 dark:text-gray-300 hover:text-primary-500 hover:bg-primary-500/5"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNav("#contact")}
                className="mt-2 px-4 py-3 gradient-bg text-white rounded-xl font-semibold"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
