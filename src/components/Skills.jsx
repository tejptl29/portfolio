import { motion } from "framer-motion";
import {
  MdPhoneIphone,
  MdStorage,
  MdApi,
  MdCloudQueue,
  MdCode,
  MdCheckCircle,
} from "react-icons/md";
import { SiFlutter, SiFirebase, SiDart } from "react-icons/si";
import SectionHeader from "./SectionHeader";
import { skillsCategories } from "../data";

const categoryIcons = {
  "Mobile Development": { icon: SiFlutter, color: "#38bdf8" },
  "Storage & Offline Sync": { icon: MdStorage, color: "#34d399" },
  "APIs & Networking": { icon: MdApi, color: "#fbbf24" },
  "Firebase & Cloud": { icon: SiFirebase, color: "#fb923c" },
  "Developer Tools": { icon: MdCode, color: "#a78bfa" },
  "Core Practices": { icon: MdCheckCircle, color: "#2dd4bf" },
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding text-left border-t border-white/[0.06]">
      <div className="container-max">
        <SectionHeader
          tag="Skills"
          title="Technical"
          highlight="Proficiency"
          subtitle="A battle-tested stack for building reliable, high-performance cross-platform mobile products."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsCategories.map((cat, idx) => {
            const conf = categoryIcons[cat.category] || {
              icon: MdCode,
              color: "#38bdf8",
            };
            const Icon = conf.icon;

            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                className="modern-card p-6 flex flex-col justify-between space-y-4 hover:border-sky-500/30 transition-all duration-300"
              >
                <div>
                  {/* Category Header with Icon */}
                  <div className="flex items-center gap-3 pb-3 border-b border-white/[0.08]">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: `${conf.color}15`,
                        border: `1px solid ${conf.color}30`,
                      }}
                    >
                      <Icon size={20} style={{ color: conf.color }} />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {cat.category}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-mono bg-[#181926] text-gray-200 border border-white/10 hover:border-sky-500/40 hover:text-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
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
