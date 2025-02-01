/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust this to match your file structure
    "node_modules/rombo-tailwind/**/*.{js,ts,jsx,tsx}", // Make sure to include Rombo Tailwind
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("rombo-tailwind"), // Add this line to enable Rombo's utilities
  ],
};
