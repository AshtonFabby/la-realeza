/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'hotpizza':['hotpizza']
      },
      container: {
        padding: {
          DEFAULT: '20px',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      colors:{
        'mustard-red': '#F92D0D'
      }
    },
    
  },
  plugins: [],
}
