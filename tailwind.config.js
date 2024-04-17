/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A7D0D8",
      },
      fontFamily: {
        denim: ["Denim", "ui-sans-serif", "system-ui"],
        recklessNeue: [
          "Reckless Neue",
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
        ],
      },
    },
  },
  plugins: [],
};
