import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B1D3A",
        primary: "#1455D0",
        accent: "#EAF2FF",
      },
      boxShadow: {
        soft: "0 20px 45px rgba(11, 29, 58, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
