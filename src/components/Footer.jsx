import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdWhatsapp, MdFavorite, MdArrowUpward } from "react-icons/md";
import { navLinks } from "../data";

const socials = [
  { Icon: FaGithub, href: "https://github.com/tejashpatel", label: "GitHub" },
  { Icon: FaLinkedin, href: "https://linkedin.com/in/tejashpatel", label: "LinkedIn" },
  { Icon: MdEmail, href: "mailto:tejash@gmail.com", label: "Email" },
  { Icon: MdWhatsapp, href: "https://wa.me/919876543210", label: "WhatsApp" },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-gray-50 dark:bg-dark-800 border-t border-gray-200/60 dark:border-white/5">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold">
              <span className="gradient-text">Tejash</span>
              <span className="text-gray-900 dark:text-white">.</span>
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Flutter Developer building high-performance Android & iOS apps. Available for freelance projects worldwide.
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  className="w-9 h-9 glass rounded-xl flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-gray-800 dark:text-gray-200 mb-4 text-sm uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 4 }}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-gray-800 dark:text-gray-200 mb-4 text-sm uppercase tracking-widest">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                "Flutter App Development",
                "Firebase Integration",
                "API Integration",
                "UI from Figma",
                "App Maintenance",
              ].map((s) => (
                <li key={s}>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200/60 dark:border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} Tejash Patel. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1.5">
            Built with <MdFavorite size={12} className="text-red-400" /> using Flutter + React
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        onClick={scrollTop}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 gradient-bg rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary-500/30 z-40"
      >
        <MdArrowUpward size={20} />
      </motion.button>
    </footer>
  );
}
