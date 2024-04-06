/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        grey: '#f2f2f2',
        beige: '#f5f5dc',
        softPink: '#f9c4d2',
        softBlue: '#c4d8e2',
        softGreen: '#d6e9d4',
        blueGrey: '#a8b8c8'
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}