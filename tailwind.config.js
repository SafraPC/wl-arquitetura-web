/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cinza: "#A9A9A9",
        preto: "#010101",
        dourado: "#866947",
      },
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
