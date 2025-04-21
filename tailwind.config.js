/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "350px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        Brown: "#53423e",
        LightBrown: "#645550",
        DarkBrown: "#2c2523",
        Black: "#1e1917",
        White: "#f1e1d9",
        Cyan: "#15e1e9",
        LightCyan: "#88e5f0",
        DarkCyan: "#009fb3",
        Orange: "#fb9718",
        LightOrange: "#fac27b",
        DarkOrange: "#d28422",
        Grey: "#626965",
        LightGrey: "#978580",
        DarkGrey: "#3f4441",
      },
      boxShadow: {
        cyanShadow: "0px 0px 20px 0px rgba(94, 206, 220, 0.5)",
        cyanMediumShadow: "10px 10px 200px 150px rgba(94, 206, 220, 0.5)",
        orangeMediumShadow: "10px 10px 200px 150px rgba(240, 169, 79, 0.5)",
      },
      animation: {
        "slow-spin": "spin 20s linear infinite",
      },
      fontFamily: {
        body: ["Josefin Sans", "sans-serif"],
        special: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
