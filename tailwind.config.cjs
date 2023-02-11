/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "nav-inactive": "#8E989C",
        "button-active": "#3770FF",
        border: "#273339",
        "button-inactive": "#F0F4FF",
        "bg-body": "#B4BEC0",
        "search-bg": "#e4eaeb",
        "search-text": "#273339",
        "search-border": "rgb(142, 152, 156)",
      },
      fontFamily: {
        body: ["Nunito Sans", "sans-serif"],
        map: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
