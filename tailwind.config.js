/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mediumHeight: { raw: "(min-height: 600px)" },
        tallHeight: { raw: "(min-height: 900px)" },
      },
      colors: {
        primary: "#A7D0D8",
        "black-primary": "#140A24",
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
      backgroundImage: {
        "close-icon": "url('/icon-close.svg')",
      },
    },
  },
  plugins: [],
};
