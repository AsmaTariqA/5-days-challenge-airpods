/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    fontFamily: {
      lora: ['Lora', ...defaultTheme.fontFamily.sans],
      rubik: ['Rubik', ...defaultTheme.fontFamily.serif],
    },
  },
  plugins: [],
}