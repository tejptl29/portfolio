import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiExternalLink, HiArrowDown } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { MdCheckCircle, MdSpeed, MdLayers, MdAssignment, MdLightbulbOutline } from "react-icons/md";
import { SiFlutter } from "react-icons/si";

export default function CaseStudyModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-4xl bg-[#0e0f19] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between p-6 sm:p-7 border-b border-white/10 bg-[#090a12]">
              <div className="space-y-2 text-left max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-sky-500/10 text-sky-400 border border-sky-500/25">
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-gray-400">
                    Production Case Study
                  </span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {project.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-400">
                  {project.subtitle}
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-[#171826] text-gray-400 hover:text-white border border-white/10 hover:border-white/25 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <HiX size={20} />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-left text-sm sm:text-base leading-relaxed">
              {/* Project Screenshot Banner if available */}
              {project.image && (
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#08090f] shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full max-h-80 sm:max-h-96 object-cover object-top"
                  />
                  <div className="p-3 bg-[#11121d] border-t border-white/5 flex items-center justify-between text-xs text-gray-400 font-mono">
                    <span>Mobile Interface & Architecture Screenshot</span>
                    <span className="text-emerald-400">Flutter 3.x Native</span>
                  </div>
                </div>
              )}

              {/* 1. Overview */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
                  <MdAssignment size={16} /> Overview
                </h3>
                <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>
                {project.results && (
                  <div className="p-4 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/25 flex items-start gap-3">
                    <MdSpeed className="text-emerald-400 mt-0.5 flex-shrink-0" size={20} />
                    <p className="text-sm text-gray-200">
                      <strong className="text-white font-semibold">Primary Business Outcome: </strong>
                      {project.results}
                    </p>
                  </div>
                )}
              </div>

              {/* 2. The Problem & The Solution */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-2">
                  <p className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider">
                    The Problem
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {project.theProblem || project.challenge}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-2">
                  <p className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                    The Solution
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {project.theSolution || project.solution}
                  </p>
                </div>
              </div>

              {/* 3. Architecture Pipeline */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
                  <MdLayers size={16} /> Architecture & Data Flow
                </h3>

                {project.architectureSteps ? (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {project.architectureSteps.map((step, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-[#141524] border border-white/10 space-y-1.5 relative text-left"
                      >
                        <span className="text-[11px] font-mono font-bold text-sky-400">
                          Step 0{idx + 1}
                        </span>
                        <h4 className="text-sm font-semibold text-white">
                          {step.label}
                        </h4>
                        <p className="text-xs text-gray-400 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-[#141524] border border-white/10 font-mono text-xs sm:text-sm text-gray-300 flex flex-wrap items-center gap-2">
                    {project.architecture.split("➔").map((step, idx, arr) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="px-3 py-1.5 rounded-lg bg-black/40 text-gray-200 border border-white/10">
                          {step.trim()}
                        </span>
                        {idx < arr.length - 1 && (
                          <span className="text-sky-400 font-bold">➔</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 4. Key Features */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
                  Key Production Features
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.keyFeatures.map((f, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-start gap-2.5 text-xs sm:text-sm text-gray-300"
                    >
                      <MdCheckCircle className="text-sky-400 flex-shrink-0 mt-0.5" size={17} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Challenges & My Contribution */}
              <div className="grid md:grid-cols-2 gap-5">
                {project.challenges && (
                  <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-2">
                    <p className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <MdLightbulbOutline size={15} /> Technical Challenges
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-300 leading-relaxed list-disc list-inside">
                      {project.challenges.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.myContribution && (
                  <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-2">
                    <p className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
                      My Contribution
                    </p>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {project.myContribution}
                    </p>
                  </div>
                )}
              </div>

              {/* 6. Tech Stack */}
              <div className="space-y-2.5">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#181926] text-gray-200 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-5 sm:p-6 border-t border-white/10 bg-[#090a12] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#171826] hover:bg-[#202133] text-white text-sm font-medium border border-white/10 transition-colors"
                  >
                    <FaGithub size={16} />
                    <span>View Repository</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl btn-gradient text-white text-sm font-semibold transition-colors"
                  >
                    <HiExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-sm font-medium border border-white/10 transition-colors cursor-pointer"
              >
                Close Case Study
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
