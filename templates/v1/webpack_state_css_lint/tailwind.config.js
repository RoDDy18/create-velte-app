/** @type {import('tailwindcss').Config} */

const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons');

module.exports = {
	mode: "jit",
    content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
    extend: {
      colors:{
        primary:"#7446CE",
        primary_light:"#784CE5",
        secondary: "#2D3441"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'source': ['Source Code Pro', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(['uil']),
    }),
  ],
};
