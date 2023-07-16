/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
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
