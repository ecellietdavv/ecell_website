/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand:
        {
          300: "#71e8f0",
          400: "#35dee9",
          500: "#16c0cb",
          600: "#1299a2"
        }, 
        darker:"#14143d",
        dark: "#27272A",
        mid: "#52525B",
        light: "#F5F5F5"
      },
    },
  },
  plugins: [],
}