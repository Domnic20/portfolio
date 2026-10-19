import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body: ["'Outfit'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        surface: {
          DEFAULT: "#0A0A0F",
          50: "#f8f8fc",
          100: "#f0f0f8",
          200: "#e0e0f0",
          300: "#c0c0e0",
          400: "#9090c0",
          500: "#6060a0",
          600: "#404080",
          700: "#202060",
          800: "#10103a",
          900: "#080820",
          950: "#0A0A0F",
        },
        accent: {
          DEFAULT: "#00F5D4",
          50: "#e0fff9",
          100: "#b3fff2",
          200: "#66ffe6",
          300: "#1affd9",
          400: "#00F5D4",
          500: "#00c4aa",
          600: "#009380",
          700: "#006255",
          800: "#00312b",
          900: "#001815",
        },
        warm: {
          DEFAULT: "#F5F0E8",
          muted: "#A8A49C",
        },
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "gradient": "gradient 8s ease infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
    },
  },
  plugins: [],
};

export default config;
