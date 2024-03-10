/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const customColors = require("./src/assets/colors/custom-colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...colors,
      ...customColors,
    },
    extend: {},
  },
  plugins: [],
};
