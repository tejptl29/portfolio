import { motion } from "framer-motion";
import { MdWork, MdLocationOn, MdCalendarToday, MdCheckCircleOutline, MdSpeed } from "react-icons/md";
import { SiFlutter } from "react-icons/si";
import SectionHeader from "./SectionHeader";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="section-padding text-left border-t border-white/[0.06]">
      <div className="container-max">
        <SectionHeader
          tag="Career"
          title="Professional"
          highlight="Experience"
          subtitle="Real-world software engineering delivering production mobile applications at scale."
        />

        <div className="relative pl-6 sm:pl-8 border-l-2 border-sky-500/30 space-y-10 ml-2 sm:ml-4">
          {experience.map((exp) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55 }}
              className="relative"
            >
              {/* Glowing Timeline Marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full bg-sky-400 ring-4 ring-sky-500/20 shadow-md shadow-sky-500/50" />

              <div className="modern-card p-6 sm:p-8 space-y-6">
                {/* Header: Role, Company, Location, Duration */}
                <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-white/[0.08]">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20">
                        Active
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base text-gray-400">
                      <span className="text-sky-400 font-semibold">{exp.company}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <MdLocationOn size={15} className="text-gray-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <MdCalendarToday size={13} />
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono text-gray-400">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                {/* Impact Highlight Box */}
                {exp.impactStatement && (
                  <div className="p-4 rounded-xl bg-gradient-to-r from-sky-500/[0.08] to-indigo-500/[0.04] border border-sky-500/20 flex items-start gap-3">
                    <MdSpeed className="text-sky-400 flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
                        Primary Impact
                      </p>
                      <p className="text-sm sm:text-base text-gray-200 mt-1 leading-relaxed">
                        {exp.impactStatement}
                      </p>
                    </div>
                  </div>
                )}

                {/* Metrics Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { label: "Tenure", val: "1 Year", sub: "Production Experience" },
                    { label: "Data Safety", val: "100%", sub: "Offline Retention" },
                    { label: "App Latency", val: "-25%", sub: "Cold-Start Optimization" },
                    { label: "UI Rendering", val: "60 FPS", sub: "Zero Jank Standard" },
                  ].map((metric) => (
                    <div
                      key={metric.label}
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-left"
                    >
                      <p className="font-mono text-base sm:text-xl font-bold gradient-text">
                        {metric.val}
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                        {metric.label}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {metric.sub}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Responsibilities */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-400">
                    Key Engineering Responsibilities
                  </h4>
                  <ul className="space-y-2.5 text-sm sm:text-base text-gray-300 leading-relaxed">
                    {exp.responsibilities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies used */}
                <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-gray-400 mr-1">Stack:</span>
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#181926] text-gray-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
