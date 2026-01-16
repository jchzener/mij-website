/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        stone: {
          50: "#faf9f6",
          100: "#f5f4f0",
          200: "#e7e5e0",
          300: "#d6d3cd",
          400: "#a8a59f",
          500: "#7a7772",
          600: "#5d5a56",
          700: "#4a4845",
          800: "#2d2b29",
          900: "#1c1b1a",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
      },
    },
  },
  plugins: [],
};
