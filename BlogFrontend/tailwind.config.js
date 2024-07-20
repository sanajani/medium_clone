/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        graybg: '#F2F2F2',
        secondOne: "#F0E19E",
        thirdOne: "#FC4442",
        forthone: "#8E333F",
      }
    },
  },
  plugins: [],
}