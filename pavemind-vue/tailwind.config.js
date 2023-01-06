/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    
    extend: {
      colors: {
        'sea': {
          900: '#4D6491',
          800: '#5F749C',
          700: '#7183A7',
          600: '#8293B2',
          500: '#94A2BD',
          400: '#A6B2C8',
          300: '#B8C1D3',
          200: '#CAD1DE',
          100: '#DBE0E9',
          50: '#EDF0F4',
        },
        'wave': {
          900: '#035388',
          800: '#0B69A3',
          700: '#127FBF',
          600: '#1992D4',
          500: '#2BB0ED',
          400: '#40C3F7',
          300: '#5ED0FA',
          200: '#81DEFD',
          100: '#B3ECFF',
          50: '#E3F8FF',
        },
        'scarlet': {
          900: '#610316',
          800: '#8A041A',
          700: '#AB091E',
          600: '#CF1124',
          500: '#E12D39',
          400: '#EF4E4E',
          300: '#F86A6A',
          200: '#FF9B9B',
          100: '#FFBDBD',
          50: '#FFE3E3',
        },
        'topaz': {
          900: '#8D2B0B',
          800: '#B44D12',
          700: '#CB6E17',
          600: '#DE911D',
          500: '#F0B429',
          400: '#F7C948',
          300: '#FADB5F',
          200: '#FCE588',
          100: '#FFF3C4',
          50: '#FFFBEA',
        },
        'emerald': {
          900: '#014D40',
          800: '#0C6B58',
          700: '#147D64',
          600: '#199473',
          500: '#27AB83',
          400: '#3EBD93',
          300: '#65D6AD',
          200: '#8EEDC7',
          100: '#C6F7E2',
          50: '#EFFCF6',
        }
      },
      fontFamily: {
        merriweather: ['Merriweather'],
        roboto: ['Roboto'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
