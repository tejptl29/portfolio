import { motion } from "framer-motion";
import { MdSchool, MdCheckCircle, MdCalendarToday } from "react-icons/md";
import SectionHeader from "./SectionHeader";
import { education } from "../data";

export default function Education() {
  return (
    <section id="education" className="section-padding text-left border-t border-white/[0.06]">
      <div className="container-max">
        <SectionHeader
          tag="Academics"
          title="Educational"
          highlight="Background"
          subtitle="Formal academic qualifications in computer applications and software engineering."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="modern-card p-6 sm:p-7 flex flex-col justify-between space-y-5 hover:border-sky-500/30 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Header with Type & Year */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    {edu.type}
                  </span>
                  <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
                    <MdCalendarToday size={13} />
                    {edu.year}
                  </span>
                </div>

                {/* Degree & College */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-sm sm:text-base text-sky-400 font-medium mt-1 flex items-center gap-1.5">
                    <MdSchool size={17} className="text-gray-400" />
                    {edu.institution}
                  </p>
                </div>

                {/* Highlights */}
                {edu.highlights && (
                  <p className="text-sm text-gray-300 leading-relaxed pt-1">
                    {edu.highlights}
                  </p>
                )}
              </div>

              {/* Grade Highlight Footer */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-xs sm:text-sm font-mono text-gray-400">Academic Score:</span>
                <span className="px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {edu.grade}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
