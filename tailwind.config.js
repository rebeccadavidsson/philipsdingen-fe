const { colors } = require(`tailwindcss/defaultTheme`);
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato']
      },
      screens: {
        'xs': '340px',
        ...defaultTheme.screens,
      },
      colors: {
        primary: colors.indigo,
        blue: colors.blue,
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          md: "2rem",
        },
      },
    },
  },
};
