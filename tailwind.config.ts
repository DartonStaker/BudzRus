import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Budz R Us Logo Colors (Toys R Us inspired)
        budz: {
          green: "#22c55e",      // Primary green (cannabis leaves, B and d letters)
          orange: "#f97316",     // Orange (u, z, U letters)
          blue: "#3b82f6",       // Blue (backward R, outline)
          red: "#ef4444",        // Red (s letter)
          yellow: "#eab308",     // Yellow (star inside R)
          darkBlue: "#1e3a8a",   // Dark blue (outline border)
        },
      },
    },
  },
  plugins: [],
};
export default config;

