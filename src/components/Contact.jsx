import { useState } from "react";
import { motion } from "framer-motion";
import { MdEmail, MdPhone, MdCheckCircle, MdError, MdContentCopy, MdSend } from "react-icons/md";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("tejashpatel2903@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("loading");
    try {
      const res = await fetch("https://formsubmit.co/ajax/tejashpatel2903@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          Name: form.name,
          Email: form.email,
          Message: form.message,
          _subject: `New Portfolio Inquiry from ${form.name}`,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-padding text-left border-t border-white/[0.06]">
      <div className="container-max">
        <SectionHeader
          tag="Contact"
          title="Let's Build"
          highlight="Together"
          subtitle="Open to full-time Flutter engineering opportunities, mobile consultations, and production contracts."
        />

        <div className="grid md:grid-cols-12 gap-6 items-start">
          {/* Left direct contact channels (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5 space-y-4"
          >
            {/* Status card */}
            <div className="modern-card p-5 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
                  Current Status
                </span>
              </div>
              <p className="text-sm sm:text-base font-medium text-white leading-snug">
                Available for full-time Flutter developer roles & mobile projects.
              </p>
              <p className="text-xs sm:text-sm text-gray-400">
                Surat, Gujarat, India · Open to Remote or Hybrid.
              </p>
            </div>

            {/* Email card */}
            <div className="modern-card p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-gray-400 uppercase">Direct Email</span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 text-xs font-mono text-sky-400 hover:text-sky-300 transition-colors cursor-pointer"
                >
                  <MdContentCopy size={14} />
                  <span>{copied ? "Copied!" : "Copy"}</span>
                </button>
              </div>
              <a
                href="mailto:tejashpatel2903@gmail.com"
                className="text-base sm:text-lg font-semibold text-white hover:text-sky-400 transition-colors block break-all"
              >
                tejashpatel2903@gmail.com
              </a>
              <p className="text-xs sm:text-sm text-gray-400">
                Guaranteed response within 24 hours.
              </p>
            </div>

            {/* WhatsApp card */}
            <div className="modern-card p-5 space-y-3">
              <span className="text-xs font-mono text-gray-400 uppercase">Phone & WhatsApp</span>
              <p className="text-base font-semibold text-white">+91 7698865205</p>
              <a
                href="https://wa.me/917698865205"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-xs text-emerald-400 border border-emerald-500/20 font-medium transition-colors"
              >
                <FaWhatsapp size={15} />
                <span>Chat Directly on WhatsApp</span>
              </a>
            </div>

            {/* Social profiles */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://github.com/tejptl29"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-card p-3.5 text-center flex items-center justify-center gap-2 text-xs font-mono text-gray-300 hover:text-white hover:border-sky-500/30 transition-colors"
              >
                <FaGithub size={16} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/tejash-patel"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-card p-3.5 text-center flex items-center justify-center gap-2 text-xs font-mono text-gray-300 hover:text-white hover:border-sky-500/30 transition-colors"
              >
                <FaLinkedin size={16} className="text-sky-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Right form (7 cols) with Scroll Animation */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-7"
          >
            <form onSubmit={handleSubmit} className="modern-card p-6 sm:p-8 space-y-5">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-gray-400">
                  Fill in the details below and I'll get back to you promptly.
                </p>
              </div>

              {status === "success" && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center gap-3 text-xs text-emerald-300">
                  <MdCheckCircle size={18} className="text-emerald-400 flex-shrink-0" />
                  <span>Your message has been sent successfully! I will reply to you shortly.</span>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/25 flex items-center gap-3 text-xs text-red-300">
                  <MdError size={18} className="text-red-400 flex-shrink-0" />
                  <span>Unable to send right now. Please email directly at tejashpatel2903@gmail.com.</span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[#181926] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="e.g. john@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#181926] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase mb-1.5">
                    Message / Project Scope
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your app idea, role requirements, or question..."
                    className="w-full px-4 py-3 rounded-xl bg-[#181926] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3.5 btn-gradient flex items-center justify-center gap-2 text-sm font-semibold cursor-pointer disabled:opacity-50"
                >
                  <MdSend size={16} />
                  <span>{status === "loading" ? "Sending..." : "Send Message"}</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
