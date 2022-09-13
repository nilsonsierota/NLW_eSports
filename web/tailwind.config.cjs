/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {},
      backgroundImage: {
        galaxy: "url('/BackGroundGalaxy.png')",
        "nlw-gradient":
          "linear-gradient(89.86deg, #9572FC 27.08%, #43E7AD 40.94%, #E1D55D 33.57%)",
        "game-gradient":
          "linear-gradient(188deg, rgb(0,0,0,0) 8% , rgb(0,0,0,8.9) 67,88%)",
      },
    },
  },
  plugins: [],
};
