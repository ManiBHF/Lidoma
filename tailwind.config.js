/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '9rem',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../images/bg-body.webp')",
        'hero-mobile': "url('../images/Rectangle 713.png')",

      }
    },
  },
  plugins: [],
}

