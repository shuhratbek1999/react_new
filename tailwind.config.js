// tailwind.config.js
import { defineConfig } from "tailwindcss";

export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "577px",
      md: "768px",
      lx: "992px",
      xl: "1280px",
      xxl: "1440px",
      "3xl": "1600px",
    },
    extend: {
      fontFamily: {
        tt: ['"TTNormsPro"', "sans-serif"],
        ttItalic: ['"TTNormsProItalic"', "sans-serif"],
      },
    },
  },
  plugins: [],
});
