/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-color": "#58286F",
        "overlay-color": "rgba(0, 0, 0, 0.4)",
      },
      backgroundImage: theme => ({
        "banner-img": "url('/assets/img/bg3.jpg')",
        "newletter-img": "url('/assets/img/bg2.jpg')",
      }),
    },
  },
  plugins: [],
}
