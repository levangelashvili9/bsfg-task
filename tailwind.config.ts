import type { Config } from "tailwindcss";

const config: Config = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "640": "640px",
      "768": "768px",
      "1024": "1024px",
      "1200": "1200px",
      "1280": "1280px",
      "1440": "1440px",
      "1536": "1536px",
    },
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
