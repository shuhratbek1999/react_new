/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tt: ['"TT Norms Pro"', "sans-serif"],
        ttexp: ['"TT Norms Pro Expanded"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
