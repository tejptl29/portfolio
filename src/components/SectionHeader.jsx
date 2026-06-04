import { motion } from "framer-motion";

export default function SectionHeader({ tag, title, highlight, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center space-y-4 mb-16"
    >
      <span className="inline-block px-4 py-1.5 rounded-full glass border border-primary-500/30 font-mono text-xs text-primary-400 tracking-widest uppercase">
        {tag}
      </span>
      <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
