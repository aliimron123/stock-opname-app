/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xs: ["12px", { fontWeight: "500" }], // normal
        sm: ["14px", { fontWeight: "500" }], // medium
        md: ["16px", { fontWeight: "600" }],
      },
    },
  },
  plugins: [],
};
