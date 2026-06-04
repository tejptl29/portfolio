import { motion } from "framer-motion";
import {
  MdArchitecture, MdCode, MdRocketLaunch, MdChat, MdStorefront, MdSupportAgent,
} from "react-icons/md";
import SectionHeader from "./SectionHeader";
import { whyHireMe } from "../data";

const iconMap = { MdArchitecture, MdCode, MdRocketLaunch, MdChat, MdStorefront, MdSupportAgent };

export default function WhyHireMe() {
  return (
    <section id="why-hire" className="section-padding relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl" />
      <div className="container-max">
        <SectionHeader
          tag="Why Choose Me"
          title="Reasons to"
          highlight="Hire Me"
          subtitle="What sets me apart from other Flutter developers in the market."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyHireMe.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group glass-card p-7 relative overflow-hidden"
              >
                {/* Number badge */}
                <div className="absolute top-4 right-4 font-heading text-5xl font-bold text-gray-200/30 dark:text-white/5 select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    backgroundColor: `${item.color}18`,
                    border: `1px solid ${item.color}30`,
                  }}
                >
                  {Icon && <Icon size={22} style={{ color: item.color }} />}
                </div>

                <h3 className="font-heading font-bold text-gray-800 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>

                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: item.color }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
