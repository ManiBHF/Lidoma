/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1603px',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../images/bg-body.webp')",
      }
    },
  },
  plugins: [],
}

