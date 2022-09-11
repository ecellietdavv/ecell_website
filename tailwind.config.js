/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand:
        {
          100: "#e8fbfd",
          200: "#baf4f8",
          300: "#8cecf3",
          400: "#35dee9",
          500: "#16c0cb",
          600: "#1198a1",
          700: "#0c6d73"
        }, 
        darker:"#14143d",
        dark: "#27272A",
        mid: "#52525B",
        light: "#F5F5F5",
      },
    },
  },
};
