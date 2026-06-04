import { useState } from "react";
import { motion } from "framer-motion";
import {
  MdEmail, MdPhone, MdSend, MdCheckCircle, MdError,
  MdWhatsapp, MdLocationOn,
} from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

const contactInfo = [
  {
    icon: MdEmail,
    label: "Email",
    value: "tejash@gmail.com",
    href: "mailto:tejash@gmail.com",
    color: "#3b82f6",
  },
  {
    icon: MdPhone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
    color: "#8b5cf6",
  },
  {
    icon: MdWhatsapp,
    label: "WhatsApp",
    value: "+91 98765 43210",
    href: "https://wa.me/919876543210",
    color: "#25D366",
  },
  {
    icon: MdLocationOn,
    label: "Location",
    value: "Ahmedabad, India",
    href: null,
    color: "#ef4444",
  },
];

const budgets = ["< ₹50K", "₹50K–₹1L", "₹1L–₹3L", "₹3L+", "Let's discuss"];

const initialForm = { name: "", email: "", mobile: "", requirement: "", budget: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.mobile.trim()) e.mobile = "Mobile is required";
    else if (!/^[0-9]{10}$/.test(form.mobile.replace(/\s/g, ""))) e.mobile = "Enter 10-digit number";
    if (!form.requirement.trim()) e.requirement = "Describe your project";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setForm(initialForm);
    }, 1800);
  };

  const handleChange = (field, val) => {
    setForm((f) => ({ ...f, [field]: val }));
    if (errors[field]) setErrors((e) => { const n = { ...e }; delete n[field]; return n; });
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl text-sm font-body bg-gray-50 dark:bg-dark-700 border transition-all outline-none focus:ring-2 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 ${
      errors[field]
        ? "border-red-400 focus:ring-red-400/20"
        : "border-gray-200 dark:border-white/10 focus:border-primary-500 focus:ring-primary-500/20"
    }`;

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="container-max">
        <SectionHeader
          tag="Get In Touch"
          title="Start Your"
          highlight="Project"
          subtitle="Have an idea? Let's turn it into a high-performing mobile app. Reach out and I'll respond within 24 hours."
        />

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-5"
          >
            {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
              <motion.div
                key={label}
                whileHover={{ x: 4 }}
                className="glass-card p-5 flex items-center gap-4"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${color}18`, border: `1px solid ${color}30` }}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-400 uppercase tracking-widest">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-primary-500 transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social */}
            <div className="glass-card p-5">
              <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">Social</p>
              <div className="flex gap-3">
                {[
                  { Icon: FaGithub, href: "https://github.com/tejashpatel", label: "GitHub" },
                  { Icon: FaLinkedin, href: "https://linkedin.com/in/tejashpatel", label: "LinkedIn" },
                  { Icon: MdWhatsapp, href: "https://wa.me/919876543210", label: "WhatsApp" },
                ].map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    className="w-11 h-11 glass rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-widest">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={inputClass("name")}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <MdError size={12} /> {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-mono text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-widest">
                    Email *
                  </label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={inputClass("email")}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <MdError size={12} /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-widest">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  placeholder="9876543210"
                  value={form.mobile}
                  onChange={(e) => handleChange("mobile", e.target.value)}
                  className={inputClass("mobile")}
                />
                {errors.mobile && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <MdError size={12} /> {errors.mobile}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-widest">
                  Project Requirement *
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your app idea, features, timeline..."
                  value={form.requirement}
                  onChange={(e) => handleChange("requirement", e.target.value)}
                  className={`${inputClass("requirement")} resize-none`}
                />
                {errors.requirement && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <MdError size={12} /> {errors.requirement}
                  </p>
                )}
              </div>

              {/* Budget */}
              <div>
                <label className="block text-xs font-mono text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-widest">
                  Budget Range
                </label>
                <div className="flex flex-wrap gap-2">
                  {budgets.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => handleChange("budget", b)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-mono border transition-all ${
                        form.budget === b
                          ? "bg-primary-500/20 border-primary-500/60 text-primary-400"
                          : "bg-gray-50 dark:bg-dark-700 border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:border-primary-400/40"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === "sending" || status === "success"}
                className="w-full py-4 gradient-bg text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-primary-500/25 disabled:opacity-70"
              >
                {status === "sending" ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <MdCheckCircle size={18} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <MdSend size={18} />
                    Send Message
                  </>
                )}
              </motion.button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-neon font-medium"
                >
                  ✓ Thanks! I'll get back to you within 24 hours.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
