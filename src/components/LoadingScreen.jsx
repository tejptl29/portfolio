import { motion } from "framer-motion";
import { SiFlutter } from "react-icons/si";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed inset-0 z-[100] bg-dark-900 flex flex-col items-center justify-center gap-6"
    >
      {/* Animated logo */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        className="relative"
      >
        <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center">
          <SiFlutter size={30} className="text-white" />
        </div>
      </motion.div>

      <div className="text-center space-y-2">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-heading text-xl font-bold"
        >
          <span className="gradient-text">Tejash Patel</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-mono text-xs text-gray-400 tracking-widest"
        >
          FLUTTER DEVELOPER
        </motion.p>
      </div>

      {/* Loading bar */}
      <div className="w-48 h-1 bg-dark-600 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="h-full gradient-bg rounded-full"
        />
      </div>
    </motion.div>
  );
}
