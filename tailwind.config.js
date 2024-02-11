module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        "bg-light": "#fafafa",
        "bg-dark": "#222222e0",
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(9rem, 11rem))",
      },
    },
  },
  plugins: [],
}
