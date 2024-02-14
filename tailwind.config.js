/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js,tsx}"];
export const theme = {
  extend: {
    colors: {
      accent: "#179957",
      accentDark: "#184D47",
    },
    container: {
      center: true,
      padding: "15px",
    },
  },
};
export const plugins = [];
