/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/molecules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/atoms/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white:"#fff",
      blue:'#605DEC',
      dark_blue:'#1513A0',
      grey:"#7C8DB0",
      red_light:'#EB5757',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'map':"url('~/public/images/map.svg')"
      },
      fontFamily:{
        nunito: ['Nunito Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
