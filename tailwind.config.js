/** @type {import('tailwindcss').Config} */

const colors = require("./src/assets/colors/custom-colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: { ...colors },
    extend: {},
  },
  plugins: [],
};
