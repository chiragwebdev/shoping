/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgtheme:'#12151c',
        theme:'#09B850',
        themehover:'#058f3d',
      }
    },
    container: {
      center: true,
      padding: '1rem'
    },
  },
  plugins: [],
}

