/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        150: "150px",
        190: "190px",
        225: "225px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        375: "375px",
        400: "400px",
        460: "460px",
        456: "656px",
        880: "880px",
        508: "508px",
      },
      height: {
        80: "80px",
        150: "150px",
        190: "190px",
        225: "225px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        375: "375px",
        400: "400px",
        460: "460px",
        600: "600px",
        650: "650px",
        700: "700px",
        880: "880px",
        "90vh": "90vh",
      },
      minWidth: {
        210: "210px",
        350: "350px",
        620: "620px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px"
      },
      colors: {
        headingColor: "#2e2e2e",
        textColor: "#515151",
        cartNumbg: "#e80013",
        primary: "#f5f3f3",
        lighttextGray: '#9ca0ab',
        cardOverlay: "rgba(256, 256, 256, 0.4)",
        bgCard: "rgba(256, 256, 256, 0.8)",
        cartBg: "#282a2c",
        cartItem: "#2e3033",
        cartTotal: "#343739"
      }
    }
  },
  
  plugins: [
    require('tailwind-scrollbar')
  ],
}
