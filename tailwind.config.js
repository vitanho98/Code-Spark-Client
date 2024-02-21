/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.vue', './src/*.vue'],
  theme: {
    colors: {
      'white': '#FFFFFF',

      gray: {
        100: '#E1E1E6',
        200: '#C4C4CC',
        300: '#8D8D99',
        400: '#7C7C8A',
        500: '#323238',
        800: '#1A1A1E',
        900: '#121214',
      },

      green: {
        200: '#98FF98',
        500: '#03BB85',
      },

      red: {
        500: '#F75A68'
      }
    },

    fontFamily: {
      'roboto': ['Roboto'],
      'righteous': ['Righteous'],
    },

    fontSize: {
      sm: '0.875rem', // 14px
      md: '1rem', // 16px
      lg: '1.25rem', // 20px
      xl: '1.5rem', // 24px
      '2xl': '1.875rem', // 30px
      '3xl': '2.5rem', // 40px
    },

    extend: {
      borderRadius: {
        DEFAULT: '5px',
      },
      spacing: {
        180: '43.75rem',
        250: '62.5rem'
      }
    },
  },
  plugins: [],
}

