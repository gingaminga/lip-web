/* eslint-disable global-require */
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "350px",
      ...defaultTheme.screens,
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar-hide")],
  daisyui: {
    styled: true,
    // themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    themes: ["light", "dark"],
  },
};
