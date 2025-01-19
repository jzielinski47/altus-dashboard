/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",

      primary: "#a78bfa",
      primary: {
        a0: "#a78bfa",
        a10: "#b297fb",
        a20: "#bca4fc",
        a30: "#c6b1fd",
        a40: "#d0befd",
        a50: "#dacafe",
      },
      secondary: "#0071E3",
      black: "#0d0d0d",
      white: "#f5f5f7",
      success: "#80F242",
      error: "#F24242",
      errorHover: "#a1000b",

      level: {
        0: "#121212",
        1: "#1e1e1e",
        2: "#242424",
        3: "#222222",
        4: "#2c2c2c",
        5: "#323232",
      },
      border: {
        black: "rgba(255, 255, 255, 0.09)",
      },
    },
  },
  plugins: [],
};
