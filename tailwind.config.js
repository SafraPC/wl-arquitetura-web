/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#f8f4ef",
        lightGrey: "#58637d",
        lightBrown: "#eae2dc",
        darkBrown: "#ebe3dc",
        offWhite: "#fcf6f0",
        brown: "#eae3dc",
        grey: "#A9A9A9",
        black: "#000000",
        darkYellow: "#866947",
        darkerYellow: "#70583d",
        lightYellow: "#E6D8B2",
      },
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
