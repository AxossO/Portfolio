/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "523px" },
      },
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
      boxShadow: {
        inset: "inset 0 0 6px 2px #00c3f5",
      },
    },
  },
  plugins: [],
};
