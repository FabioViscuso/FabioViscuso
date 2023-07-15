/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        indieFlower: ['Indie Flower', 'sans-serif'],
        sacramento: ['Sacramento', 'sans-serif'],
        poiret: ['Poiret One', 'sans-serif']
      },
      height: {
        dynHeight: '100dvh' 
      }
    },
  },
  plugins: [],
}
