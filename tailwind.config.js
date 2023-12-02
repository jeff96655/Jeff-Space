/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "rgba(0, 0, 0, 0.1)",
        black: "#000",
        white: "#fff",
      },
      spacing: {},
      fontFamily: {
        inika: "Inika",
        "inknut-antiqua": "'Inknut Antiqua'",
        inter: "Inter",
      },
      borderRadius: {
        "8xs": "5px",
        xl: "20px",
        "3xs": "10px",
        "31xl": "50px",
      },
    },
    fontSize: {
      lg: "18px",
      xl: "20px",
      "21xl": "40px",
      smi: "13px",
      "6xl": "25px",
      mini: "15px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
