import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-syne)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
        display: ["var(--font-syne)", "sans-serif"],
      },
      colors: {
        teal: {
          50:  "#e0f2ef",
          100: "#b3e0d8",
          200: "#7fccc0",
          300: "#4ab8a8",
          400: "#1ea998",
          500: "#0a7c6e",
          600: "#096b5e",
          700: "#075749",
          800: "#054336",
          900: "#032e24",
        },
      },
      animation: {
        "fade-up":    "fadeUp 0.6s ease forwards",
        "fade-in":    "fadeIn 0.4s ease forwards",
        "slide-left": "slideLeft 0.5s ease forwards",
        "blink":      "blink 1s step-end infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideLeft: {
          "0%":   { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0" },
        },
      },
      typography: (theme: (path: string) => string) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),
            a: { color: theme("colors.teal.600"), textDecoration: "none" },
            "h1,h2,h3,h4": { color: theme("colors.gray.900"), fontFamily: "var(--font-syne)" },
            code: { color: theme("colors.teal.700"), background: theme("colors.teal.50"), padding: "2px 6px", borderRadius: "4px" },
            "code::before": { content: '""' },
            "code::after":  { content: '""' },
          },
        },
        invert: {
          css: {
            color: theme("colors.gray.300"),
            a: { color: theme("colors.teal.400") },
            "h1,h2,h3,h4": { color: theme("colors.white") },
            code: { color: theme("colors.teal.300"), background: "rgba(10,124,110,0.15)" },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
