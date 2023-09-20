/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '6rem',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../images/bg-body.webp')",

      }
    },
  },
  plugins: [],
}

