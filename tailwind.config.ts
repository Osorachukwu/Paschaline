import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      screens: {
        DEFAULT: "1500px",
      },
    },
    screens: {
      xsm: "480px",
      sm: "600px",
      md: "770px",
      lg: "1020px",
      xl: "1200px",
      "2xl": "1300px",
      "3xl": "1500px",
      "4xl": "2500px",
    },
    extend: {
      colors: {
        // Logo Brand Colors
        brand: {
          black: "#09090B",     // Deep Onyx Black (from geometric logo emblem)
          blue: "#2563EB",      // Royal Cobalt Blue (from logo bars & tagline)
          blueHover: "#1D4ED8", // Darker blue for hover states
          accentBlue: "#3B82F6",// Bright Royal Blue highlight
          charcoal: "#18181B",  // Slate Charcoal for dark cards/sections
          slate: "#71717A",     // Muted gray for body prose
          lightBg: "#F8FAFC",   // Crisp surface background
        },
        // Existing Color Palette Overrides / Alignments
        mainBgColor: "#FFFFFF",
        darkShade: "#09090B",
        lightShade: "#18181B",
        mediumShade: "#F8FAFC",
        logoBlue: "#2563EB",
        opeqblue: "#1F2936",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        light: "0 2px 8px rgba(0, 0, 0, 0.08)",
        line: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        moderate: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        glass: "0 20px 40px -15px rgba(9, 9, 11, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;