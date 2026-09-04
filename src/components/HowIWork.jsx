import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { MdCode, MdRocketLaunch, MdStorage } from "react-icons/md";

const principles = [
  {
    number: "01",
    title: "Clean Architecture",
    description:
      "I structure Flutter code with strict separation between UI presentation, Provider state management, and repository data sources. This ensures the codebase remains maintainable, testable, and effortless to scale.",
    icon: MdCode,
    color: "#3b82f6",
    highlight: "Maintainable & Modular",
  },
  {
    number: "02",
    title: "Problem-First Mindset",
    description:
      "I focus on understanding the commercial bottleneck, user journey, and edge cases before writing a single line of code. Every feature is engineered to solve a specific business problem efficiently.",
    icon: MdRocketLaunch,
    color: "#00f5d4",
    highlight: "Business Impact Driven",
  },
  {
    number: "03",
    title: "Production Resilience",
    description:
      "I design mobile apps with real-world failure states in mind: spotty networks, offline Hive caching, battery efficiency, and zero UI stutter (60fps). Built to withstand peak customer traffic with zero downtime.",
    icon: MdStorage,
    color: "#8b5cf6",
    highlight: "Offline-First & Fast",
  },
];

export default function HowIWork() {
  return (
    <section id="how-i-work" className="section-padding relative overflow-hidden">
      <div className="container-max">
        <SectionHeader
          tag="Engineering Philosophy"
          title="How I"
          highlight="Work"
          subtitle="Core standards and disciplined engineering principles you can expect on every Flutter build."
        />

        {/* 3 Spacious, High-Impact Cards */}
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {principles.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-8 sm:p-9 border border-white/10 hover:border-primary-500/40 transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="font-heading text-4xl font-bold gradient-text">
                      {item.number}
                    </span>
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center"
                      style={{
                        backgroundColor: `${item.color}15`,
                        border: `1px solid ${item.color}35`,
                      }}
                    >
                      <Icon size={22} style={{ color: item.color }} />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-xs font-mono font-medium text-primary-400">
                    ✓ {item.highlight}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
