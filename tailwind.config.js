/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: "#16C0CB",
        dark: "#27272A",
        mid: "#52525B",
        light: "#F5F5F5",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
