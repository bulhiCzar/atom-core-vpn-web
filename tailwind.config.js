const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js',
  ],
  theme: {
    fontFamily: {
      'cloick': ['сloick', 'Montserrat'],
      'montserrat': ['Montserrat'],
    },
    extend: {},
    colors: {
      ...colors,
      'g-blue': 'linear-gradient(90deg, #6043E5 0%, #B16BF6 100%)',
      'g-gray': 'linear-gradient(90deg, #8E8E8E 0%, #FFF 51%, #8E8E8E 100%)',
      'g-gray-lite': 'linear-gradient(161deg, #282828 0%, #000 100%)',
      'purple': '#8A74F3'
    },
    container: {
      center: true,
      screens: {
        sm: '690px',
        md: '690px',
        lg: '690px',
        xl: '690px',
        '2xl': '690px',
      },
    },
  },
  darkMode: "class",
  plugins: []
};
