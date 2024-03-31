/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        'main': '#5B0B9B',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      keyframes: {
        scale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        }
      },
      animation: {
        scale: 'scale 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

