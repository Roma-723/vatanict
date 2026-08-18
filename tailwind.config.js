/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ← Барои фаъол кардани Light / Dark mode
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}" // jsx ва tsx илова карда шуданд
  ],
  theme: {
    extend: {
      screens: {
        lgMUI: '1200px',
        mdMUI: '900px',
        smMUI: '600px',
        xsMUI: '0px',
        modal: '900px',
        min1700: '1700px',
        min1550: '1550px',
        min1524: '1524px',
        min1500: '1500px',
        min1464: '1464px',
        min1475: '1475px',
        min1415: '1415px',
        min1110: '1110px',
        min1036: '1036px',
        min985: '985px',  
        min385: '385px',
      },
    },
    fontFamily: {}
  },
  plugins: [],
}