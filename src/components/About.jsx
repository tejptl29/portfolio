import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { techBadges } from "../data";
import { SiFlutter, SiDart, SiFirebase, SiGit } from "react-icons/si";
import { MdCheckCircle } from "react-icons/md";

const highlights = [
  "5+ years building production Flutter apps",
  "30+ apps deployed on Play Store & App Store",
  "Expert in Clean Architecture & State Management",
  "Available for full-time and freelance projects",
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
          title="Crafting Mobile"
          highlight="Experiences"
          subtitle="Passionate Flutter developer turning complex ideas into elegant, high-performance mobile applications."
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
                Hi! I'm <span className="text-primary-500 font-semibold">Tejash Patel</span>, a Flutter Developer with 5+ years of experience building beautiful, performant, and scalable mobile applications for Android and iOS.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I specialize in clean architecture, state management (Bloc, Riverpod, GetX), Firebase integration, and delivering pixel-perfect UI from Figma designs. I've worked with startups and enterprises to ship apps that users love.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, I contribute to open-source Flutter packages and write technical articles to give back to the developer community.
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
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "5+", label: "Years Experience", color: "from-primary-500 to-primary-600" },
                { num: "30+", label: "Apps Deployed", color: "from-accent-500 to-accent-600" },
                { num: "20+", label: "Happy Clients", color: "from-teal-500 to-teal-600" },
                { num: "100%", label: "Client Satisfaction", color: "from-yellow-500 to-orange-500" },
              ].map(({ num, label, color }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.03 }}
                  className="glass-card p-6 text-center"
                >
                  <p className={`font-heading text-3xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                    {num}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{label}</p>
                </motion.div>
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
