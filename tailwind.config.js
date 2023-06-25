/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cinza-claro": "#F9F9FB",
        "cinza-escuro": "#2D2D36",
        "amarelo-sidebar": "#E5AD52",
      },
    },
  },
  plugins: [],
};
