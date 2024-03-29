/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      content: {
        'link': 'url("./src/images/arrow.png")',
      },
      boxShadow: {
        '5xxl': '1px 2px 4px #333',
      },
      boxShadow: {
        '8xxl': '3px 3px 4px #111',
      },
      boxShadow: {
        '6xxl': '0px 0px 4px #333',
      },
      boxShadow: {
        '11xxxl' : '0px 0px 3px #999',
      },
      width: {
        '10xl' : '1100px',
        '550xl' : '550px',
        '350xl' : '400px',
      },
      height: {
        '426xl' : '426px',
      },
      margin: {
        '10tl' : '75px 55px 0px 610px',
        '11tl' : '150px 0px 0px 700px',
        '310pxl': '332px 0px 0px 0px',
      },
      dropShadow: {
        'dx10' : '1px 1px 1px #000',
      },
      fontSize: {
        '12pxl' : '12px',
      },
      listStyleType: {
        'lists' : 'url("./src/images/arrow1.png")',
      }
    },
    fontFamily: {
        'Iran': ['IranYekanX']
    },
  },
  plugins: [],
}