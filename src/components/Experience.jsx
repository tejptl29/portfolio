import { motion } from "framer-motion";
import { MdWork, MdCalendarToday, MdCheckCircle } from "react-icons/md";
import SectionHeader from "./SectionHeader";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute left-1/2 top-1/4 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="container-max">
        <SectionHeader
          tag="Career"
          title="Work"
          highlight="Experience"
          subtitle="My professional journey building real-world Flutter applications."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/60 via-accent-500/40 to-transparent" />

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 border-2 border-dark-800 transform -translate-x-1/2 mt-6 z-10 shadow-[0_0_12px_rgba(59,130,246,0.6)]" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-6"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="font-heading font-bold text-gray-800 dark:text-white text-lg">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <MdWork size={14} className="text-primary-400" />
                          <span className="font-semibold text-primary-400 text-sm">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1 flex-shrink-0">
                        <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-primary-500/10 text-primary-400 border border-primary-500/20 whitespace-nowrap">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <MdCalendarToday size={12} className="text-gray-400" />
                      <span className="text-xs font-mono text-gray-400">{exp.duration}</span>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-2">
                      {exp.responsibilities.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <MdCheckCircle size={14} className="text-neon mt-0.5 flex-shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
