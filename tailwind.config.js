/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sub: ['13px', '16px'],
      },
      colors: {
        textGrayLight: '#999999',
        textGrayDark: '#666666',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'cardShadow': '0px 8px 16px 0px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}