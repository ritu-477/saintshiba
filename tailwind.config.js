/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': "'poppins',sans serif"
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
 
