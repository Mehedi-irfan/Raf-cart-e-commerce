/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      colors: {
        primary: "#fd3d57",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
