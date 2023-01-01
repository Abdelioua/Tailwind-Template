/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  screens: {
    sm: "1rem",
    md: "2rem",
    lg: "4rem",
    xl: "6rem",
    "2xl": "8rem",
  },
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
