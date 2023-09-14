/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainTextColor: "#00c3f5",
        lightBlackTextColor: "black",
        darkTextColor: "#4e4d4e",
        whiteColor: "white",
      },
      fontFamily: {
        Roboto: ["Roboto Mono", "monospace"],
        Adlam: ["ADLaM Display", "cursive"],
        Montessrat: ["Montserrat", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Phuda: ["Phudu", "cursive"],
      },
      letterSpacing: {
        toWide: "8px",
      },
    },
  },
  plugins: [],
};
