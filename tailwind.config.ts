import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    screens: {
      //0 => 480px (highest screen for mobile)
      'xsm': '480px',
      // 480px => 768px *

      'sm': '600px',

      'md': '770px',
      // 770px => 1020px...

      'lg': '1020px',
      // 1020px => 1200px

      'xl': '1200px',
      // 1200px => ...

      '2xl': '1300px',
      //1400px => ...

      '3xl': '1500px',
      //1400px => ...

      '4xl': '2500px',
      //1400px => ...
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
