/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        zinc: {
          850: "#202023"
        }
      },
      screens: {
        'xs': '540px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}