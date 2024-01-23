/** @type {import('tailwindcss').Config} */
import scrollbarPlugin from 'tailwind-scrollbar'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgblue: '#1A4ADA',
        bglightblue: '#E2E7F6'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    scrollbarPlugin({ nocompatible: true }),
  ],
}