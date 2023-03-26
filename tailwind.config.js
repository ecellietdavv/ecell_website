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
      animation: {
        'up-down': 'UpAndDown 8s infinite',
      },
      keyframes: {
        UpAndDown: {
          '0%, 100%': {
            transform: 'translateY(-20%)',
            // animation-timing-function: cubic-bezier(0.8,0,1,1);
          },
          '50%': {
            transform: 'none',
            // animation-timing-function: cubic-bezier(0,0,0.2,1);
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('tailwind-scrollbar')],
};
