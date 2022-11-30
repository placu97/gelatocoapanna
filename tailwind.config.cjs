/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'poppins': ['Poppins', 'sans-serif'],
      'adelia': ['ADELIA', 'sans-serif']
    },
    
    extend: {},

  },
  plugins: [],
}