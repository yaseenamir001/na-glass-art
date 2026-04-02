import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9", // sky-500
        darkBg: "#0a0a0a",
        lightBg: "#ffffff",
      },
    },
  },
  plugins: [],
};

export default config;
