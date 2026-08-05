import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Extracted from the Figma design
        brand: "#0707C8",   // Primary blue
        ink: "#111111",     // Near-black text
        muted: "#4F4F4F",   // Gray text
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-inria)", "Georgia", "serif"],
      },
      maxWidth: {
        site: "1440px",
      },
      boxShadow: {
        nav: "0px 4px 4px 0px rgba(22,37,76,0.38)",
      },
    },
  },
  plugins: [],
};

export default config;
