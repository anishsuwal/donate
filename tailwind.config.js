/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     fontFamily: {
      Montserrat: ["Montserrat"],
     },
    extend: {
      backgroundImage: {
        'partners': "url('../imgage/pregnant-1.jpg')"    
      }
    },
  },
  plugins: [],
}
