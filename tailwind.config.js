/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#11c1fc",

          secondary: "#ed80ca",

          accent: "#db18a7",

          neutral: "#141424",

          "base-100": "#313545",

          info: "#77A0DA",

          success: "#6EDED3",

          warning: "#F6B23C",

          error: "#F23E31",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
