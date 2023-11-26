/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0779E4",
        darkBlue: "#768EA0"
      },
      backgroundImage: {
        plug: "url('/plug.svg')"
      }
    },
  },
  plugins: [],
}
