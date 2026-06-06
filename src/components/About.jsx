import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { techBadges } from "../data";
import { MdCheckCircle } from "react-icons/md";

const highlights = [
  "Flutter Developer at Tenacious Techies (Current)",
  "Built production apps: Customer App & FoodChow POS",
  "Experienced with Hive offline storage & REST APIs",
  "Available for freelance projects",
];

const badgeColors = [
  "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "bg-teal-500/10 text-teal-400 border-teal-500/20",
  "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "bg-green-500/10 text-green-400 border-green-500/20",
  "bg-pink-500/10 text-pink-400 border-pink-500/20",
  "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "bg-red-500/10 text-red-400 border-red-500/20",
  "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute right-0 top-1/4 w-72 h-72 bg-accent-500/5 rounded-full blur-3xl" />
      <div className="container-max">
        <SectionHeader
          tag="About Me"
          title="Building Flutter Apps"
          highlight="For Real Business"
          subtitle="Mobile Application Developer focused on creating reliable, user-friendly Flutter apps for real-world business use."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 space-y-5">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Hi! I'm <span className="text-primary-500 font-semibold">Tejash Patel</span>, a Flutter Developer based in Surat, India. I'm currently working at <span className="text-accent-500 font-semibold">Tenacious Techies</span>, building production mobile applications.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I've worked on customer apps, POS systems, and food ordering platforms, gaining hands-on experience with Flutter, Dart, Hive for offline storage, and REST API integration using Provider for state management.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I hold a BCA degree and am currently pursuing MSC-CA. I have a strong drive to improve performance, UI quality, and code structure in everything I build.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <MdCheckCircle className="text-neon flex-shrink-0" size={20} />
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Quick info */}
            <div className="glass-card p-6 space-y-0 divide-y divide-gray-200/50 dark:divide-white/5">
              <h3 className="font-heading font-semibold text-gray-800 dark:text-gray-200 mb-4 text-sm uppercase tracking-widest">
                Quick Info
              </h3>
              {[
                { label: "Location", value: "Olpad, Surat, Gujarat" },
                { label: "Company", value: "Tenacious Techies" },
                { label: "Role", value: "Software Developer (Flutter)" },
                { label: "Degree", value: "BCA · MSC-CA (CGPA 9.28)" },
                { label: "Languages", value: "English · Hindi · Gujarati" },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-4 py-3">
                  <span className="font-mono text-xs text-gray-400 dark:text-gray-500 w-24 flex-shrink-0 pt-0.5 uppercase tracking-wider">
                    {label}
                  </span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{value}</span>
                </div>
              ))}
            </div>

            {/* Tech badges */}
            <div className="glass-card p-6">
              <h3 className="font-heading font-semibold text-gray-800 dark:text-gray-200 mb-4 text-sm uppercase tracking-widest">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {techBadges.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    whileHover={{ scale: 1.1 }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono border ${
                      badgeColors[i % badgeColors.length]
                    }`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
