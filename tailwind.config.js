/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        zinc: {
          850: "#202023"
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}