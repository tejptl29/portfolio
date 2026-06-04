import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdFormatQuote, MdStar } from "react-icons/md";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import SectionHeader from "./SectionHeader";
import { testimonials } from "../data";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl" />
      <div className="container-max">
        <SectionHeader
          tag="Testimonials"
          title="What Clients"
          highlight="Say"
          subtitle="Real feedback from real clients who trusted me with their projects."
        />

        {/* Desktop Grid */}
        <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card p-6 flex flex-col gap-4"
            >
              <MdFormatQuote size={32} className="text-primary-400 opacity-60" />
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1 italic">
                "{t.text}"
              </p>
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <MdStar key={si} size={14} className="text-yellow-400" />
                ))}
              </div>
              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-gray-200/50 dark:border-white/10">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm text-white"
                  style={{ backgroundColor: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-800 dark:text-white">{t.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.35 }}
              className="glass-card p-8"
            >
              <MdFormatQuote size={36} className="text-primary-400 opacity-60 mb-4" />
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic mb-6">
                "{testimonials[current].text}"
              </p>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <MdStar key={i} size={16} className="text-yellow-400" />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-heading font-bold text-white"
                  style={{ backgroundColor: testimonials[current].color }}
                >
                  {testimonials[current].avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">{testimonials[current].name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} className="p-2 glass rounded-xl hover:text-primary-400 transition-colors">
              <MdChevronLeft size={22} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all ${
                    i === current ? "w-6 h-2 bg-primary-500" : "w-2 h-2 bg-gray-400/40"
                  }`}
                />
              ))}
            </div>
            <button onClick={next} className="p-2 glass rounded-xl hover:text-primary-400 transition-colors">
              <MdChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
