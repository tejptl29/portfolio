import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { projects } from "../data";

const filters = ["All", "Flutter", "Firebase", "API"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.category.includes(active));

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
      <div className="container-max">
        <SectionHeader
          tag="Portfolio"
          title="Featured"
          highlight="Projects"
          subtitle="A collection of real-world applications I've built for clients and personal exploration."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <motion.button
              key={f}
              onClick={() => setActive(f)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200 ${
                active === f
                  ? "text-white"
                  : "glass text-gray-600 dark:text-gray-300 hover:text-primary-500"
              }`}
            >
              {active === f && (
                <motion.div
                  layoutId="filterBg"
                  className="absolute inset-0 gradient-bg rounded-full"
                  transition={{ type: "spring", bounce: 0.2 }}
                />
              )}
              <span className="relative z-10">{f}</span>
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="group glass-card overflow-hidden"
              >
                {/* Image / Placeholder */}
                <div
                  className="relative h-48 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}25 0%, ${project.color}08 100%)`,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div
                        className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center text-2xl font-heading font-bold"
                        style={{ backgroundColor: `${project.color}25`, color: project.color }}
                      >
                        {project.title.charAt(0)}
                      </div>
                      <p className="font-mono text-xs text-gray-400">Mobile App</p>
                    </div>
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-dark-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-3 bg-white/10 rounded-xl text-white border border-white/20 hover:bg-primary-500/30 transition-colors"
                    >
                      <FaGithub size={18} />
                    </motion.a>
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="p-3 bg-white/10 rounded-xl text-white border border-white/20 hover:bg-accent-500/30 transition-colors"
                      >
                        <FaExternalLinkAlt size={16} />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading font-bold text-gray-800 dark:text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-primary-500/10 text-primary-400 border border-primary-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
