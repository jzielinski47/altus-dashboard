/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        border: "background ease infinite",
      },
      keyframes: {
        background: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
    colors: {
      transparent: "transparent",
      primary: "#a78bfa",
      primary_dark: "#2673DD",
      primary_dark_hov: "#517BE7",
      secondary: "#fc7262",
      pure: { black: "#0d0d0d", white: "#f5f5f7" },
      level: {
        0: "#121212",
        1: "#1e1e1e",
        2: "#242424",
        3: "#222222",
        4: "#2c2c2c",
        5: "#323232",
      },
      text: {
        "white-87": "rgba(255, 255, 255, 0.87)",
        "white-60": "rgba(255, 255, 255, 0.6)",
        "white-38": "rgba(255, 255, 255, 0.38)",
      },
      border: {
        black: "rgba(255, 255, 255, 0.09)",
      },
    },
  },
  plugins: [],
};
