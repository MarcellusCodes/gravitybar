/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ffffff",
          100: "#efefef",
          200: "#dcdcdc",
          300: "#bdbdbd",
          400: "#989898",
          500: "#7c7c7c",
          600: "#656565",
          700: "#525252",
          800: "#464646",
          900: "#3d3d3d",
        },
        secondary: {
          50: "#f6f6f7",
          100: "#e1e4e6",
          200: "#c3c8cc",
          300: "#9da4ab",
          400: "#788089",
          500: "#5e656e",
          600: "#4a4f57",
          700: "#3d4248",
          800: "#34363b",
          900: "#26282b",
        },
        tertiary: {
          50: "#f4f6f7",
          100: "#e3e7ea",
          200: "#cad1d7",
          300: "#a4b0bc",
          400: "#788798",
          500: "#5d6c7d",
          600: "#4f5a6b",
          700: "#454d59",
          800: "#3d434d",
          900: "#353941",
        },
      },
    },
    fontFamily: {
      primary: ["Crimson Text", "serif"],
      secondary: ["Work Sans", "sans-serif"],
    },
  },
  plugins: [],
};
