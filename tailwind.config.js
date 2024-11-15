/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
<<<<<<< HEAD
      screens: {
        'custom-880': '880px',
=======
      fontFamily: {
        poppins: ['Poppins', 'Arial', 'sans-serif'],
>>>>>>> 12edabf934bafd21386601e21e47f31e3822d196
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
