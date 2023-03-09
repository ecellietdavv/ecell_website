/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  important: true,
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#e8fbfd',
          200: '#baf4f8',
          300: '#8cecf3',
          400: '#35dee9',
          500: '#16c0cb',
          600: '#14adb7',
          700: '#129aa2',
          800: '#0f868e',
          900: '#0d737a',
        },
        dark: '#27272A',
        mid: '#52525B',
        light: '#F5F5F5',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('tailwind-scrollbar')],
};
