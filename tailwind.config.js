/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "navy-blue": "#01000B",
        "dark-blue": "#32C7F1",
        "light-blue": "#3b28f6",
        "dark-sky": "#0c0838"
      },
      backgroundImage: {
        "hero-bg": "url('./assets/images/hero-bg.webp')",
      },
      screens: {
        xlg: '1050px',
        lg: '1025px',
        md: '770px'
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
}