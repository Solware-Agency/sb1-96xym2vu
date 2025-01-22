/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      transitionDuration: {
        '600': '600ms',
      },
      scale: {
        '98': '.98',
      },
      colors: {
        brand: {
          DEFAULT: '#1d4ed8', // Azul principal
          secondary: '#1e40af',
          light: '#3b82f6',
          lighter: '#60a5fa',
          gray: '#94a3b8',
        },
        dark: {
          DEFAULT: '#0f172a', // Fondo oscuro principal
          secondary: '#1e293b',
          light: '#334155',
          lighter: '#475569',
          gray: '#94a3b8',
        },
      },
    },
  },
  plugins: [],
};