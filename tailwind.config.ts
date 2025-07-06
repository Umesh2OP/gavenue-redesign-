// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2DD4BF", 
        },
      },
      fontFamily: {
        display: ["'General Sans'", "sans-serif"],
        body: ["'Satoshi'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
