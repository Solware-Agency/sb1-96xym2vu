/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '600': '600ms',
      },
      scale: {
        '98': '.98',
      },
    },
  },
  plugins: [],
};