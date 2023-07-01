/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('assets/images/hero.jpeg')",
      },
      borderRadius: {
        'xl':'1.5rem',
        '2xl': '3.5rem',
      },
      rotate: {
        '10': '10deg',
      },
      textShadow: {
        '2xl': '-0.5vmin -0.5vmin 0 #0ea5e9',
        '3xl': '0.5vmin 0.5vmin 0 #1f2937',
        '4xl': '0.5vmin 0.5vmin 0 #fb923c',
        '5xl': '0.5vmin 0.5vmin 0 #fff',
     }
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}