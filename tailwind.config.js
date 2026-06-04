/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Clash Display'", "sans-serif"],
        body: ["'Satoshi'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
        accent: {
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
        },
        neon: "#00f5d4",
        dark: {
          900: "#060611",
          800: "#0d0d1f",
          700: "#141428",
          600: "#1a1a35",
          500: "#252545",
        },
      },
      animation: {
        "gradient-x": "gradient-x 8s ease infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px #3b82f680" },
          "100%": { boxShadow: "0 0 40px #8b5cf680, 0 0 80px #3b82f640" },
        },
      },
      backgroundSize: { "200%": "200%" },
    },
  },
  plugins: [],
};
