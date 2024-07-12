/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,liquid}"],
  theme: {
    extend: {
      screens: {
        clg: "1125px",
      },
      spacing: {
        default: "1100px",
      },
    },
  },
  plugins: [],
};
