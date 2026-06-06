import { motion } from "framer-motion";
import { MdSchool, MdCalendarToday } from "react-icons/md";
import SectionHeader from "./SectionHeader";
import { education } from "../data";

const typeColors = {
  Postgraduate: { bg: "#8b5cf6", label: "PG" },
  Undergraduate: { bg: "#3b82f6", label: "UG" },
  Secondary: { bg: "#10b981", label: "12th" },
};

export default function Education() {
  return (
    <section id="education" className="section-padding relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl" />
      <div className="container-max">
        <SectionHeader
          tag="Academic Background"
          title="My"
          highlight="Education"
          subtitle="Academic qualifications that form the foundation of my technical knowledge."
        />

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, i) => {
            const typeInfo = typeColors[edu.type] || { bg: "#3b82f6", label: edu.type };
            return (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="glass-card p-6 flex items-start gap-5"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${typeInfo.bg}18`, border: `1px solid ${typeInfo.bg}30` }}
                >
                  <MdSchool size={22} style={{ color: typeInfo.bg }} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="font-heading font-bold text-gray-800 dark:text-white text-base leading-snug">
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-medium mt-0.5" style={{ color: typeInfo.bg }}>
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                      <span
                        className="px-2.5 py-1 rounded-lg text-xs font-mono border"
                        style={{
                          backgroundColor: `${typeInfo.bg}15`,
                          borderColor: `${typeInfo.bg}30`,
                          color: typeInfo.bg,
                        }}
                      >
                        {typeInfo.label}
                      </span>
                      {edu.grade && (
                        <span className="text-xs font-mono text-gray-500 dark:text-gray-400 font-semibold">
                          {edu.grade}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <MdCalendarToday size={12} className="text-gray-400" />
                    <span className="text-xs font-mono text-gray-400">{edu.year}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
