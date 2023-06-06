/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        myPrimary: "#4F80FF",
        mySecondary: "#C8D4FF",
        myAccent: "#F1EBFF",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
