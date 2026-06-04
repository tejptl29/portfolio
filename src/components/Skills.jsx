import { motion } from "framer-motion";
import {
  SiFlutter, SiDart, SiFirebase, SiGit, SiRedux, SiPostman,
} from "react-icons/si";
import SectionHeader from "./SectionHeader";
import { skills, techBadges } from "../data";

const iconMap = { SiFlutter, SiDart, SiFirebase, SiGit, SiRedux, SiPostman };

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute right-0 top-0 w-80 h-80 bg-neon/5 rounded-full blur-3xl" />
      <div className="container-max">
        <SectionHeader
          tag="Expertise"
          title="Technical"
          highlight="Skills"
          subtitle="Core competencies developed over 5+ years of building production Flutter applications."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Progress bars */}
          <div className="space-y-6">
            <h3 className="font-heading font-semibold text-gray-800 dark:text-gray-200 uppercase text-sm tracking-widest mb-6">
              Proficiency Levels
            </h3>
            {skills.map((skill, i) => {
              const Icon = iconMap[skill.icon];
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {Icon && <Icon size={16} style={{ color: skill.color }} />}
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                    </div>
                    <span className="font-mono text-sm font-bold" style={{ color: skill.color }}>
                      {skill.level}%
                    </span>
                  </div>

                  <div className="h-2 bg-gray-200 dark:bg-dark-600 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full relative"
                      style={{
                        background: `linear-gradient(90deg, ${skill.color}aa, ${skill.color})`,
                        boxShadow: `0 0 12px ${skill.color}40`,
                      }}
                    >
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-dark-800"
                        style={{ backgroundColor: skill.color }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Tech categories */}
          <div className="space-y-6">
            <h3 className="font-heading font-semibold text-gray-800 dark:text-gray-200 uppercase text-sm tracking-widest mb-6">
              State Management
            </h3>

            {[
              {
                label: "State Management",
                items: ["Bloc", "Riverpod", "GetX", "Provider"],
                color: "#8b5cf6",
              },
              {
                label: "Backend & APIs",
                items: ["Firebase", "REST API", "Node.js (Basic)"],
                color: "#FFCA28",
              },
              {
                label: "Dev Tools",
                items: ["Git", "GitHub", "Postman", "VS Code", "Xcode"],
                color: "#F05032",
              },
              {
                label: "Platforms",
                items: ["Android", "iOS", "Play Store", "App Store"],
                color: "#3DDC84",
              },
            ].map(({ label, items, color }, gi) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.1 }}
                className="glass-card p-5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                  <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400">
                    {label}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono border transition-all"
                      style={{
                        backgroundColor: `${color}12`,
                        borderColor: `${color}30`,
                        color: color,
                      }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
