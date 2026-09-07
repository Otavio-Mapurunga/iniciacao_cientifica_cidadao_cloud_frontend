/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#F26522",
          darkOrange: "#D94F14",
          blue: "#0072BC",
          yellow: "#FFB800",
          grayBg: "#F9F9F9",
        }
      }
    },
  },
  plugins: [],
}
