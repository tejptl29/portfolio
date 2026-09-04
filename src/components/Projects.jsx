import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { MdSpeed } from "react-icons/md";
import SectionHeader from "./SectionHeader";
import CaseStudyModal from "./CaseStudyModal";
import { projects } from "../data";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenCaseStudy = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <section id="projects" className="section-padding text-left border-t border-white/[0.06]">
      <div className="container-max">
        <SectionHeader
          tag="Work"
          title="Selected"
          highlight="Flutter Projects"
          subtitle="Production mobile applications engineered with clean architecture, offline-first sync, and smooth 60fps responsiveness."
        />

        {/* 1. Featured Large Showcase: Kitchen Hive */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="modern-card overflow-hidden group mb-8 border border-white/10 hover:border-sky-500/40"
          >
            {/* App Screenshot Hero Banner */}
            <div className="relative w-full h-64 sm:h-80 md:h-96 bg-[#08090f] overflow-hidden border-b border-white/10">
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="w-full h-full object-cover object-center group-hover:scale-[1.015] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12131f] via-transparent to-transparent opacity-80" />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#0b0c14]/90 text-emerald-400 border border-emerald-500/30 backdrop-blur-md shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Featured Production App
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {featuredProject.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 mt-1">
                    {featuredProject.subtitle}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-[#181926] text-gray-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Structured Problem -> Solution -> Impact */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
                  <p className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400">
                    The Problem
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {featuredProject.problemSummary}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
                  <p className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
                    The Solution
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {featuredProject.solutionSummary}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
                  <p className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                    Business Impact
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {featuredProject.impactSummary}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => handleOpenCaseStudy(featuredProject)}
                  className="flex items-center gap-2 px-5 py-2.5 btn-gradient text-sm font-semibold cursor-pointer group/btn"
                >
                  <span>View Case Study</span>
                  <HiArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>

                {featuredProject.github && (
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#171826] hover:bg-[#1f2033] border border-white/10 hover:border-sky-500/30 text-sm font-medium text-gray-300 hover:text-white transition-all"
                  >
                    <FaGithub size={16} />
                    <span>Source Repository</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* 2. Remaining Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {otherProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="modern-card overflow-hidden flex flex-col justify-between group hover:border-sky-500/30 transition-all duration-300"
            >
              <div>
                {/* Optional Screenshot for other project if available */}
                {project.image && (
                  <div className="relative w-full h-44 bg-[#08090f] overflow-hidden border-b border-white/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12131f] via-transparent to-transparent opacity-80" />
                  </div>
                )}

                <div className="p-5 sm:p-6 space-y-4">
                  {/* Badge & Meta */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      {project.badge}
                    </span>
                    <span className="text-xs font-mono text-gray-400">Flutter 3.x</span>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5">{project.subtitle}</p>
                  </div>

                  {/* Concise Structured Highlights */}
                  <div className="space-y-2.5 pt-1 text-xs">
                    <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] space-y-1">
                      <span className="font-mono font-semibold text-sky-400 uppercase tracking-wider block text-[11px]">
                        Solution
                      </span>
                      <p className="text-gray-300 leading-relaxed">{project.solutionSummary}</p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-emerald-500/[0.06] border border-emerald-500/20 flex items-start gap-2 text-gray-200">
                      <MdSpeed size={15} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <p className="text-[11px] leading-snug">
                        <strong className="text-white">Impact: </strong>
                        {project.impactSummary}
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-[#181926] text-gray-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 sm:p-6 pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs sm:text-sm">
                <button
                  onClick={() => handleOpenCaseStudy(project)}
                  className="flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-medium transition-colors cursor-pointer group/btn"
                >
                  <span>Case Study</span>
                  <HiArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                </button>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
                  >
                    <FaGithub size={14} />
                    <span className="font-mono text-xs">Source</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
