/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary:{
          DEFAULT: '#09000A',
          100: '#CC00CC',
          200: '#372E38'
        }
      },
    },
  },
  plugins: [],
};
