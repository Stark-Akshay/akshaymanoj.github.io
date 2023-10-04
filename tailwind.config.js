/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation:{
          comein: 'comein ease-in-out 5s',
          blurr: 'blurr ease-out 5s',
      },
      keyframes:{
        blurr:{
          '0%':{'-webkit-filter':'blur(50px)'},
          '70%':{'-webkit-filter':'blur(0px)'},
        },
        comein:{
          '0%': {top: '-20rem'},
          '20%': {top: '0rem'},
        }
      }
    },
    colors: {
      'text': '#e9dff1',
      'background': '#0f041a',
      'primary': '#9c77c0',
      'second': '#1c1226',
      'ascent': '#8254b0',
     },
     
    fontFamily:{
      sans:['Helvetica Neue', 'sans-serif']
    },
  },
  plugins: [require('daisyui')],
}
