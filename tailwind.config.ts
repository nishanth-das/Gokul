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
        emerald: {
          950: "#04130f",
          900: "#071f18",
          850: "#0b3127",
          800: "#103d31",
          700: "#165242",
        },
        gold: {
          light: "#f7ebd1",
          champagne: "#e5c98d",
          primary: "#c9a35e",
          dark: "#9a7536",
        },
        ivory: "#faf7f0",
        cream: "#f5f0e4",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        cormorant: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      boxShadow: {
        gold: "0 8px 24px rgba(201, 163, 94, 0.25)",
        "gold-lg": "0 14px 40px rgba(201, 163, 94, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
