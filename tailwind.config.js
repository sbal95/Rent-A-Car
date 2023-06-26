/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: "Moon Dance",
        relaway: "Raleway Sans-Serif",
      },
      boxShadow: {
        'shadow-orange': '5px_10px_10px_10px_#dd6b20',
      }
    }
  },
  plugins: [],
};
