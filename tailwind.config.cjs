/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "nav-inactive": "#8E989C",
      },
      fontFamily: {
        body: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
