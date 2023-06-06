/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        myPrimary: "#4F80FF",
        mySecondary: "#C8D4FF",
        myAccent: "#F1EBFF",
      },
      dropShadow: {
        "3xl-primary": "0 0 25px #4F80FF",
        "3xl-secondary": "0 0px 35px #C8D4FF",
        "3xl-accent": "0 35px 35px #F1EBFF",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
