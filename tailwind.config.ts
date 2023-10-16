import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1f2937",

          secondary: "#6366f1",

          accent: "#64e0d8",

          neutral: "#25292d",

          "base-100": "#ececee",

          info: "#83bfdd",

          success: "#0d9488",

          warning: "#f3b549",

          error: "#ef4444",
        },
      },
    ],
  },
};
export default config;
