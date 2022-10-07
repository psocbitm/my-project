/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Adds a new breakpoint in addition to the default breakpoints
      colors: {
        ink: "#062f4f",
        purple: "#813772",
        embers: "#b82601",
        black: "#000000",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
