import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import {
  MdPhoneIphone, MdStorage, MdApi,
  MdLocationOn, MdWork, MdSchool, MdTranslate,
} from "react-icons/md";

const corePillars = [
  {
    icon: MdPhoneIphone,
    title: "Cross-Platform Flutter & Dart",
    desc: "Developing fast, responsive applications for Android and iOS with clean architecture and Provider state management.",
    color: "#38bdf8",
  },
  {
    icon: MdStorage,
    title: "Offline-First with Hive DB",
    desc: "Structuring local persistence layers that guarantee zero order loss during unstable Wi-Fi or offline usage.",
    color: "#34d399",
  },
  {
    icon: MdApi,
    title: "REST APIs & Cloud Services",
    desc: "Integrating backend RESTful APIs, token refresh lifecycle, and targeted Firebase Cloud Messaging (FCM) push alerts.",
    color: "#fb923c",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding text-left border-t border-white/[0.06]">
      <div className="container-max">
        <SectionHeader
          tag="About Me"
          title="Building Flutter Apps For"
          highlight="Real-World Business"
          subtitle="Turning complex workflows into responsive, high-performance mobile user experiences."
        />

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Narrative Column (7 cols) with Scroll Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4 text-base sm:text-lg text-gray-300 leading-relaxed">
              <p>
                Hi! I'm <strong className="text-white font-semibold">Tejash Patel</strong>, a Flutter Developer based in Surat, India. I specialize in building <span className="text-white">production mobile applications</span> that solve real commercial problems — including high-throughput restaurant POS systems, cloud kitchen food ordering apps, and offline-first mobile tools.
              </p>
              <p className="text-base text-gray-400 leading-relaxed">
                Currently working at <span className="text-white font-semibold">Tenacious Techies</span>, I focus on clean architecture, predictable state with Provider, and offline resilience using Hive database. I care deeply about writing maintainable code that delivers sub-second page transitions and zero UI jank.
              </p>
            </div>

            {/* 3 Core Focus Rows */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
                Core Engineering Pillars
              </h4>
              <div className="space-y-2.5">
                {corePillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className="p-4 rounded-2xl bg-[#11121a] border border-white/10 hover:border-sky-500/30 transition-colors flex items-start gap-4"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: `${pillar.color}15`, border: `1px solid ${pillar.color}30` }}
                      >
                        <Icon size={20} style={{ color: pillar.color }} />
                      </div>
                      <div>
                        <h5 className="text-sm sm:text-base font-semibold text-white">
                          {pillar.title}
                        </h5>
                        <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Snapshot Column (5 cols) with Scroll Animation */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="modern-card p-6 sm:p-7 space-y-5">
              {/* Profile Card Header with Photo */}
              <div className="flex items-center gap-3.5 pb-4 border-b border-white/10">
                <div className="relative flex-shrink-0">
                  <img
                    src="/profile.jpg"
                    alt="Tejash Patel"
                    className="w-14 h-14 rounded-2xl object-cover object-top border-2 border-sky-400/70 shadow-md shadow-sky-500/20"
                  />
                  <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#0b0c14]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-heading font-bold text-lg text-white">
                      Tejash Patel
                    </h4>
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                      Active
                    </span>
                  </div>
                  <p className="text-xs text-sky-400 font-mono mt-0.5">
                    Flutter Developer · Tenacious Techies
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: MdWork,
                    label: "Current Role",
                    val: "Flutter Developer @ Tenacious Techies",
                  },
                  {
                    icon: MdPhoneIphone,
                    label: "Core Stack",
                    val: "Flutter, Dart, Hive DB, Provider, REST APIs",
                  },
                  {
                    icon: MdSchool,
                    label: "Education",
                    val: "MSC-CA (SDJ College · 9.28 CGPA) & BCA",
                  },
                  {
                    icon: MdLocationOn,
                    label: "Location",
                    val: "Surat, Gujarat, India (Open to Remote)",
                  },
                  {
                    icon: MdTranslate,
                    label: "Languages",
                    val: "English · Hindi · Gujarati",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-[#181924] border border-white/10 flex items-center justify-center flex-shrink-0 text-sky-400 mt-0.5">
                        <Icon size={17} />
                      </div>
                      <div>
                        <p className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                          {item.label}
                        </p>
                        <p className="text-sm sm:text-base font-semibold text-white mt-0.5">
                          {item.val}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 font-mono">Availability:</p>
                  <p className="text-sm font-semibold text-white">Open to Opportunities</p>
                </div>
                <a
                  href="#contact"
                  className="px-4 py-2 rounded-xl btn-gradient text-white text-xs font-semibold"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
