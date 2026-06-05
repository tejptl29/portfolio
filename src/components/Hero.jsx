import { motion } from "framer-motion";
import { SiFlutter, SiDart, SiFirebase } from "react-icons/si";
import { MdArrowForward, MdCode, MdPhone } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const floatingTech = [
  { icon: SiFlutter, color: "#54C5F8", label: "Flutter", pos: "top-10 right-16", delay: 0 },
  { icon: SiDart, color: "#00B4AB", label: "Dart", pos: "top-1/3 right-4", delay: 0.5 },
  { icon: SiFirebase, color: "#FFCA28", label: "Firebase", pos: "bottom-1/3 right-10", delay: 1 },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute inset-0 dark:bg-dark-900/60" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.8) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl" />

      <div className="container-max w-full px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-500/30 text-sm font-mono text-primary-400">
                <span className="w-2 h-2 bg-neon rounded-full animate-pulse" />
                Available for Freelance Projects
              </span>
            </motion.div>

            {/* Name + Title */}
            <motion.div variants={fadeUp} className="space-y-2">
              <p className="font-mono text-primary-400 text-sm tracking-widest uppercase">
                Hello, I'm
              </p>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-900 dark:text-white">Tejash</span>
                <br />
                <span className="gradient-text">Patel</span>
              </h1>
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-primary-500" />
                <p className="font-heading text-xl text-gray-600 dark:text-gray-300 font-medium tracking-wide">
                  Flutter Developer
                </p>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-xl"
            >
              I build{" "}
              <span className="text-primary-500 font-semibold">high-performance</span>{" "}
              Android and iOS applications using Flutter. Helping businesses and
              startups transform ideas into{" "}
              <span className="text-accent-500 font-semibold">scalable mobile applications</span>.
            </motion.p>

            {/* Stats */}
            {/* <motion.div variants={fadeUp} className="flex gap-8">
              {[
                { num: "5+", label: "Years Exp." },
                { num: "30+", label: "Apps Built" },
                { num: "20+", label: "Happy Clients" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-heading text-3xl font-bold gradient-text">{s.num}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{s.label}</p>
                </div>
              ))}
            </motion.div> */}

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo("#contact")}
                className="flex items-center gap-2 px-7 py-3.5 gradient-bg text-white rounded-2xl font-semibold shadow-xl shadow-primary-500/25 text-sm"
              >
                <MdPhone size={18} />
                Hire Me
                <MdArrowForward size={16} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo("#projects")}
                className="flex items-center gap-2 px-7 py-3.5 glass border border-primary-500/30 text-gray-700 dark:text-white rounded-2xl font-semibold text-sm hover:border-primary-500/60 transition-all"
              >
                <MdCode size={18} />
                View Projects
              </motion.button>
            </motion.div>

            {/* Social */}
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">Follow me:</span>
              {[
                { Icon: FaGithub, href: "https://github.com/tejashpatel", label: "GitHub" },
                { Icon: FaLinkedin, href: "https://linkedin.com/in/tejashpatel", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="p-2.5 glass rounded-xl text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center items-center"
          >
            {/* Glow ring */}
            <div className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-neon/20 blur-2xl animate-pulse-slow" />

            {/* Hexagon avatar */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-gradient-to-br from-primary-500 via-accent-500 to-neon animate-float p-1">
                <div className="w-full h-full rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-dark-700 flex items-center justify-center overflow-hidden">
                  {/* Profile placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-dark-600 to-dark-800 flex flex-col items-center justify-center gap-3">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-500/30 to-accent-500/30 border-2 border-primary-500/40 flex items-center justify-center">
                      <span className="font-heading text-4xl font-bold gradient-text">TP</span>
                    </div>
                    <p className="font-mono text-xs text-primary-400 tracking-widest">FLUTTER DEV</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating tech badges */}
            {floatingTech.map(({ icon: Icon, color, label, pos, delay }) => (
              <motion.div
                key={label}
                className={`absolute ${pos} glass rounded-2xl px-3 py-2 flex items-center gap-2`}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay, ease: "easeInOut" }}
              >
                <Icon size={16} color={color} />
                <span className="text-xs font-mono text-gray-700 dark:text-gray-300">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => scrollTo("#about")}
          >
            <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">Scroll</span>
            <div className="w-5 h-8 border border-gray-400/40 rounded-full flex justify-center pt-1.5">
              <div className="w-1 h-2 bg-primary-400 rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
