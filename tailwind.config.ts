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
      //0 => 480px (highest screen for mobile)
      xsm: "480px",
      // 480px => 768px *

      sm: "600px",

      md: "770px",
      // 770px => 1020px...

      lg: "1020px",
      // 1020px => 1200px

      xl: "1200px",
      // 1200px => ...

      "2xl": "1300px",
      //1400px => ...

      "3xl": "1500px",
      //1400px => ...

      "4xl": "2500px",
      //1400px => ...
    },

    extend: {
      colors: {
        mainBgColor: "#FFFFFF",
        darkShade: "#0A0A0A",
        lightShade: "#2A2C2C",
        mediumShade: "#ECF0F1",
        logoBlue: "#345EE2",
        opeqblue: "#1F2936"
      },

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

// background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1048%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%26quot%3b%23SvgjsLinearGradient1049%26quot%3b)'%3e%3c/rect%3e%3cpath d='M0 0L691.08 0L0 574.35z' filter='url(%23SvgjsFilter1050)' fill='rgba(82%2c 99%2c 100%2c 1)'%3e%3c/path%3e%3cpath d='M0 560L691.08 560L0 -14.350000000000023z' filter='url(%23SvgjsFilter1050)' fill='rgba(82%2c 99%2c 100%2c 1)'%3e%3c/path%3e%3cpath d='M1440 560L748.92 560L1440 -14.350000000000023z' filter='url(%23SvgjsFilter1050)' fill='rgba(82%2c 99%2c 100%2c 1)'%3e%3c/path%3e%3cpath d='M1440 0L748.92 0L1440 574.35z' filter='url(%23SvgjsFilter1050)' fill='rgba(82%2c 99%2c 100%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1048'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0%25' y1='50%25' x2='100%25' y2='50%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1049'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(236%2c 240%2c 241%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3cfilter height='130%25' id='SvgjsFilter1050'%3e%3cfeGaussianBlur in='SourceAlpha' stdDeviation='5' result='TopLeftG'%3e%3c/feGaussianBlur%3e%3cfeOffset dx='-5' dy='-5' in='TopLeftG' result='TopLeftO'%3e%3c/feOffset%3e%3cfeComponentTransfer in='TopLeftO' result='TopLeftC'%3e%3cfeFuncA type='linear' slope='0.7'%3e%3c/feFuncA%3e%3c/feComponentTransfer%3e%3cfeGaussianBlur in='SourceAlpha' stdDeviation='5' result='TopRightG'%3e%3c/feGaussianBlur%3e%3cfeOffset dx='5' dy='-5' in='TopRightG' result='TopRightO'%3e%3c/feOffset%3e%3cfeComponentTransfer in='TopRightO' result='TopRightC'%3e%3cfeFuncA type='linear' slope='0.7'%3e%3c/feFuncA%3e%3c/feComponentTransfer%3e%3cfeGaussianBlur in='SourceAlpha' stdDeviation='5' result='BottomLeftG'%3e%3c/feGaussianBlur%3e%3cfeOffset dx='-5' dy='5' in='BottomLeftG' result='BottomLeftO'%3e%3c/feOffset%3e%3cfeComponentTransfer in='BottomLeftO' result='BottomLeftC'%3e%3cfeFuncA type='linear' slope='0.7'%3e%3c/feFuncA%3e%3c/feComponentTransfer%3e%3cfeGaussianBlur in='SourceAlpha' stdDeviation='5' result='BottomRightG'%3e%3c/feGaussianBlur%3e%3cfeOffset dx='5' dy='5' in='BottomRightG' result='BottomRightO'%3e%3c/feOffset%3e%3cfeComponentTransfer in='BottomRightO' result='BottomRightC'%3e%3cfeFuncA type='linear' slope='0.7'%3e%3c/feFuncA%3e%3c/feComponentTransfer%3e%3cfeMerge%3e%3cfeMergeNode in='TopLeftC'%3e%3c/feMergeNode%3e%3cfeMergeNode in='TopRightC'%3e%3c/feMergeNode%3e%3cfeMergeNode in='BottomLeftC'%3e%3c/feMergeNode%3e%3cfeMergeNode in='BottomRightC'%3e%3c/feMergeNode%3e%3cfeMergeNode in='SourceGraphic'%3e%3c/feMergeNode%3e%3c/feMerge%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e");
