/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-500': '#292929',
        'dark-300': '#353535',
        'dark-700': '#171717'
      }
    },
  },
  plugins: [],
}