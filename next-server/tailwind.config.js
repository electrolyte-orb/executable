/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--sans-font)", "system-ui"],
      secondary: ["var(--sec-font)", "system-ui"],
    },
    extend: {
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: {
            opacity: 0,
            transform: "translate(-50%, -40%) scale(0.9)",
          },
          to: {
            opacity: 1,
            transform: "translate(-50%, -50%) scale(1)",
          },
        },
        navContentShow: {
          from: {
            opacity: 0,
            transform: "translate(0%, -10%) scale(0.9)",
          },
          to: {
            opacity: 1,
            transform: "translate(0%, 0%) scale(1)",
          },
        },
        contentHide: {
          from: {
            opacity: 1,
            transform: "translate(-50%, -50%) scale(1)",
          },
          to: {
            opacity: 0,
            transform: "translate(-50%, -40%) scale(0.9)",
          },
        },
      },
      animation: {
        overlayShow: "overlayShow 200ms ease-out",
        contentShow: "contentShow 200ms ease-out-expo forwards",
        navContentShow: "navContentShow 200ms ease-out-expo forwards",
        contentHide: "contentHide 200ms ease-out forwards",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
