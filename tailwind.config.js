/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/Deep_Space_72_Without_A_Logo.webp')",

      }
    },
  },
  plugins: [],
}

