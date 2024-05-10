import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryBG': '#FBFBFB',
        'secondaryBG': '#FFFFFF'
      },
      fontFamily: {
        "IBM": ["IBM Plex Sans Thai", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
