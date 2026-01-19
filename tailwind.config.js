/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#D4AF37",
          secondary: "#3FB4A5",
        },
        neutral: {
          default: "#EDEDED",
          muted: "#A5A5A5",
        },
        background: "#0F1419",
        muted: "#F1F1F1",
        surface: {
          dim: "#2B2F36",
          muted: "#1C1F26",
        },
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        generalsans: ["General Sans", "sans-serif"],
      },
      fontSize: {
        h1: ["48px", { fontWeight: "700", lineHeight: "1.2" }], 
        h2: ["32px", { fontWeight: "700", lineHeight: "1.3" }],
        h3: ["24px", { fontWeight: "500", lineHeight: "1.4" }],
        bodyLg: ["18px", { fontWeight: "400", lineHeight: "1.6" }],
        body: ["16px", { fontWeight: "400", lineHeight: "1.6" }],
        bodySm: ["14px", { fontWeight: "300", lineHeight: "1.6" }],
        btn: ["16px", { fontWeight: "600", lineHeight: "1.4" }]
      },
      screens: {
        'md-lg': '992px',
        // include default screens so they’re not overridden
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};