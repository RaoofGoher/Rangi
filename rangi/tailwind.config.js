/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'customer-color':"#D71100",
        'pro-color':'#003359',
        'entjGreen':'#1d4428',
        'entjGolden':'#d4bf1e',  
      }
    },
  },
  plugins: [],
}