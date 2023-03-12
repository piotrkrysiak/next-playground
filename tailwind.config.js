/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      ...require('tailwindcss/defaultTheme').screens,
      xxs: '375px',
      xs: '480px',
      fhd: '1920px',
      '2k': '2200px',
      '4k': '3840px',
    },
    extend: {
      spacing: {},
      fontFamily: {
        sans: ['var(--font-dm-sans)'],
      },
    },
  },
  plugins: [],
};
