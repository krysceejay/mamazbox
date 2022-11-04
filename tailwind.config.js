/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "overlay-color": "rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: theme => ({
        "banner-img": "url('/assets/img/bg1.jpg')",
        "newletter-img": "url('/assets/img/bg2.jpg')",
      }),
    },
  },
  plugins: [],
}
