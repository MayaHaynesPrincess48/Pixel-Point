/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primaryBlue: '#243BB9',
        secondaryBlue: '#3F57DA',
        'grey-100': '#D9D9D9',
        'grey-200': '#BDC4D1',
        greyWhite: 'rgba(255, 255, 255, 0.9)',
        darkWhite: 'rgba(255, 255, 255, 0.4)',
        border: '#2E4276',
        primary: '#050816',
        secondary: '#aaa6c3',
        tertiary: '#151030',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #1f1f1f',
        cardLight: '0px 19px 38px #eaeaec, 0px 15px 12px #eaeaec',
      },
      screens: {
        xs: '450px',
        sm: '640px',
        md: '768px',
        xmd: '900px',
        lg: '1025px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1800px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        aeonik: 'Aeonik',
      },
    },
  },
  plugins: [],
}
