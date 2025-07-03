/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(36,100%,65%)"
      },
      fontFamily: {
        sans: ['Alegreya', 'sans-serif'],
        heading: ['Belleza', 'sans-serif']
      }
    }
  },
  darkMode: 'class',
  plugins: [
    require('tailwindcss-rtl'),
    require('@tailwindcss/forms')
  ]
}