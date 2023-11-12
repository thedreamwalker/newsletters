/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        sub: ['13px', '16px'],
        mainTitle: ['3.5rem', '1']
      },
      colors: {
        textGrayLight: '#999999',
        textGrayDark: '#666666',
        active: '#316FEE',
        inactive: '#EEEEEE',
        backgroundSecond: '#F5F5F8',
        accentLight: '#5A8CF1',
        accentRed: '#EF3124'
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        '2lg': '0px 8px 16px 0px rgba(0, 0, 0, 0.08)'
      }
    }
  },
  plugins: []
}
