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
        "footer-bg": "#8E989C",
        "footer-blue": "#81A2EF",
        "footer-orange": "#EEB27B",
        "footer-black": "#20282d",
        "footer-twitter": "#91c7eb",
        "footer-telegram": "#0088cc",
        "footer-discord": "#7289da",
        "footer-linkedin": "#0077b5",
        "event-card": "#38474e",
        "event-time-bg": "#f5f7f7",
      },
      fontFamily: {
        body: ["Nunito Sans", "sans-serif"],
        map: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
