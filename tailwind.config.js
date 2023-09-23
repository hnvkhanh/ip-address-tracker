/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{tsx, html}"],
  theme: {
    extend: {
      colors: {
        veryDarkGray: "hsl(var(--color-very-dark-gray))",
        darkGray: "hsl(var(--color-dark-gray))",
      },
      fontFamily: {
        rubik: ["Rubik"],
      },
      fontSize: {
        input: "18px",
      },
      backgroundImage: {
        'mobile': "url('./src/assets/bg/pattern-bg-mobile.png')",
        'desktop': "url('./src/assets/bg/pattern-bg-desktop.png')",
      }
    },
  },
  plugins: [],
};
