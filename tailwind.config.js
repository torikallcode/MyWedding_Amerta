/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily:{
        'utama':['Mulish', 'sans-serif'],
        'sacramento':['Sacramento', 'cursive'],
        'angka':['Bodoni Moda', 'serif']
      }
    },
    backgroundPosition:{
      top:'top',
      "top-5": "center top -25rem",
    }
  },
  plugins: [],
}

