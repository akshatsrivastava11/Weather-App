/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: { boxShadow: {
      'right-lg': '35px 0 15px rgba(0, 0, 0, 0.15)', // Customize the values as needed
    }
  },
  colors: {
    'custom-dark': 'rgb(2, 0, 36)',
    'custom-light1': 'rgba(197, 224, 226, 1)',
    'custom-light2': 'rgba(170, 222, 230, 1)',
    'custom-light3': 'rgba(158, 221, 232, 1)',
    'custom-light4': 'rgba(143, 220, 234, 1)',
    'custom-bright': 'rgba(0, 212, 255, 1)',
  },
  fontFamily: {
    sans: [ "Varela", 'sans-serif'],
    serif:["Itim", "cursive"],
    new:["Bebas Neue", 'sans-serif'],
  },
  },
  plugins: [],
}

