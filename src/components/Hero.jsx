import { motion } from "framer-motion";
import { MdArrowForward, MdEmail, MdKeyboardArrowDown } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { stats } from "../data";

export default function Hero() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative pt-24 pb-8 sm:pt-28 sm:pb-12 overflow-hidden text-left">
      {/* Subtle modern ambient background glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sky-500/[0.07] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-indigo-500/[0.06] rounded-full blur-[140px] pointer-events-none" />

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column (7 cols): Strong, clear, outcome-focused with entrance animation */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Pill */}
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Opportunities · Surat, India
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-sky-400">
                Tejash Patel · Flutter Developer
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.14] text-white tracking-tight">
                I Build Flutter Apps That Turn Ideas Into{" "}
                <span className="gradient-text">Real Products.</span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="space-y-2 max-w-xl">
              <p className="text-white text-lg sm:text-xl font-medium leading-snug">
                Flutter Developer building production-ready mobile applications for real-world businesses.
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Software Developer at <span className="text-white font-semibold">Tenacious Techies</span> with 1+ year of production experience building cross-platform Android & iOS apps using Flutter, Firebase, REST APIs, and AI-powered workflows.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                onClick={() => scrollTo("#projects")}
                className="flex items-center gap-2 px-6 py-3 btn-gradient cursor-pointer text-sm"
              >
                <span>View My Work</span>
                <MdArrowForward size={16} />
              </button>

              <button
                onClick={() => scrollTo("#contact")}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#14151f] text-gray-200 hover:text-white border border-white/10 hover:border-sky-500/40 font-medium text-sm transition-all cursor-pointer"
              >
                <span>Contact Me</span>
              </button>

              <div className="flex items-center gap-2.5 pl-2 text-gray-400">
                <a
                  href="https://github.com/tejptl29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#14151f] border border-white/10 hover:text-white hover:border-sky-500/40 transition-colors"
                  title="GitHub"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href="https://linkedin.com/in/tejash-patel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#14151f] border border-white/10 hover:text-white hover:border-sky-500/40 transition-colors"
                  title="LinkedIn"
                >
                  <FaLinkedin size={16} className="text-sky-400" />
                </a>
                <a
                  href="mailto:tejashpatel2903@gmail.com"
                  className="p-2 rounded-lg bg-[#14151f] border border-white/10 hover:text-white hover:border-sky-500/40 transition-colors"
                  title="Email"
                >
                  <MdEmail size={16} className="text-amber-400" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column (5 cols): Clean Professional Developer Portrait with Entrance Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[350px]">
              {/* Subtle ambient glow behind portrait */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-sky-500/20 via-blue-500/10 to-indigo-500/20 rounded-3xl blur-2xl opacity-75 pointer-events-none" />

              {/* Pure Clean Photo Card */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#12131f] shadow-2xl shadow-black/80 group">
                <img
                  src="/profile.jpg"
                  alt="Tejash Patel - Flutter Developer"
                  className="w-full h-[400px] sm:h-[440px] object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Minimal Stats Row with Proper Breathing Room */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 pt-6 border-t border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-heading text-3xl font-bold gradient-text">{s.num}</p>
                <p className="text-sm font-semibold text-white mt-0.5">{s.label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Animated Scroll Down Indicator */}
        <div className="flex justify-center pt-8">
          <button
            onClick={() => scrollTo("#about")}
            className="group inline-flex flex-col items-center gap-2 text-gray-400 hover:text-sky-400 transition-colors cursor-pointer"
            aria-label="Scroll to About section"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 group-hover:text-sky-300 transition-colors">
              Scroll Down
            </span>
            <div className="w-5 h-8 rounded-full border border-white/20 group-hover:border-sky-400/50 flex items-start justify-center p-1 transition-colors">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-2 rounded-full bg-sky-400"
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
