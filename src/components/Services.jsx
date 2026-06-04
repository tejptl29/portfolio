import { motion } from "framer-motion";
import {
  SiFlutter, SiAndroid, SiApple, SiFirebase, SiFigma, SiPostman,
} from "react-icons/si";
import { MdBugReport } from "react-icons/md";
import SectionHeader from "./SectionHeader";
import { services } from "../data";

const iconMap = {
  SiFlutter, SiAndroid, SiApple, SiFirebase, SiFigma, SiPostman, MdBugReport,
};

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute left-0 top-1/2 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="container-max">
        <SectionHeader
          tag="What I Do"
          title="Services I"
          highlight="Offer"
          subtitle="End-to-end mobile development services — from ideation and design to deployment and maintenance."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative glass-card p-6 overflow-hidden cursor-default"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${service.color}15 0%, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${service.color}18`, border: `1px solid ${service.color}30` }}
                >
                  {Icon && <Icon size={22} style={{ color: service.color }} />}
                </div>

                <h3 className="font-heading font-semibold text-gray-800 dark:text-gray-100 mb-2 text-sm leading-snug group-hover:text-primary-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                  style={{ backgroundColor: service.color }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
