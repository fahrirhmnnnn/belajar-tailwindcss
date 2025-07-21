/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        19: "4.75rem", // 19 * 0.25rem = 4.75rem
      },
      fontFamily: {
        Bitcount: ["Bitcount Prop Single", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        cuy: "#d9f99d",
      },
      animation: {
        bounce: "bounce 2s infinite",
        goyang: "goyang 1s ease-in-out infinite",
      },
      keyframes: {
        goyang: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};
