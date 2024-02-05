/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '5xxl': '1px 2px 4px #333',
      },
      boxShadow: {
        '8xxl': '3px 3px 4px #111',
      },
      boxShadow: {
        '6xxl': '0px 0px 4px #333',
      },
      width: {
        '10xl' : '1100px',
      },
      margin: {
        '10tl' : '75px 55px 0px 610px',
        '11tl' : '150px 0px 0px 700px',
      },
      dropShadow: {
        'dx10' : '1px 1px 1px #000',
      },
    },
    fontFamily: {
        'Iran': ['IranYekanX']
    },
  },
  plugins: [],
}