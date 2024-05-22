/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [  require('tailwindcss-animated')],
  
}
  // tailwind.config.js
// module.exports = {
//   // ...
//   plugins: [
//     require('tailwindcss-animated')
//   ],
// }
