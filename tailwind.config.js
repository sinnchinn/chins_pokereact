/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      'mainColor': 'rgba(255, 255, 255, 0.8)',
      'randomBtn': 'rgba(53, 91, 108, 1)',
      'randomBtnHover': 'rgba(40, 71, 85, 1)',
      'favBtn': 'rgba(145, 44, 76, 1)',
      'favBtnHover': 'rgba(100, 32, 53, 1)',
      'searchBtn': 'rgba(40, 106, 87, 1)',
      'searchBtnHover': 'rgba(27, 72, 59, 1)',
      'origBtn': 'rgba(145, 212, 240, 1)',
      'origBtnHover': 'rgba(73, 165, 203, 1)',
      'favMenu': 'rgba(60, 89, 75, 1)',
      'shinyBtn': 'rgba(255, 219, 62, 1)',
      'shinyBtnHover': 'rgba(252, 176, 18, 1)'
    },
    extend: {
      backgroundImage: {
        'bgHome': 'url(./assets/pokemonbg3.jpg)'
      },
      fontFamily: {
        mainFont: ['mainFont']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
})

