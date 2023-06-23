/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      colors: {
        background: "#F2F2F2",
        foreground: "#FFFFFF",
        primary: "#1992FA",
        text: "#404040",
      },
      fontFamily: {
        inter: ["Inter var", "sans-serif"],
        sans: ["Segoe UI, sans-serif", "Open Sans, sans-serif"],
      },
      animation: {
        "add-item": "add-item .25s ease",
        "pop-up": "pop-up .25s ease",
        "remove-item": "remove-item .25s ease",
        "slide-lists-down": "slide-lists-down .25s ease",
        "slide-lists-up": "slide-lists-up .25s ease",
        "slide-tasks-down": "slide-tasks-down .25s ease",
        "slide-tasks-down--sm": "slide-tasks-down--sm .25s ease",
        "slide-tasks-down--md": "slide-tasks-down--md .25s ease",
        "slide-tasks-up": "slide-tasks-up .25s ease",
        "slide-tasks-up--sm": "slide-tasks-up--sm .25s ease",
        "slide-tasks-up--md": "slide-tasks-up--md .25s ease",
        "slide-welcome-down": "slide-welcome-down .25s ease",
        "slide-welcome-left": "slide-welcome-left .25s ease",
      },
      keyframes: {
        ["add-item"]: {
          "0%": { transform: "scaleY(0%)", opacity: 0, overflow: "hidden" },
          "100%": { transform: "scaleY(100%)", opacity: 1, overflow: "auto" },
        },
        ["pop-up"]: {
          "0%": { transform: "scale(0%)", opacity: 0 },
          "100%": { transform: "scale(100%)", opacity: 1 },
        },
        ["remove-item"]: {
          "0%": { transform: "scaleY(100%)", opacity: 1, overflow: "hidden" },
          "100%": { transform: "scaleY(0%)", opacity: 0, overflow: "hidden" },
        },
        ["slide-lists-down"]: {
          "0%": { transform: "translateY(-56px)" },
          "100%": { transform: "translateY(0px)" },
        },
        ["slide-lists-up"]: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-56px)" },
        },
        ["slide-tasks-down"]: {
          "0%": { transform: "translateY(-68px)" },
          "100%": { transform: "translateY(0px)" },
        },
        ["slide-tasks-down--md"]: {
          "0%": { transform: "translateY(-60px)" },
          "100%": { transform: "translateY(0px)" },
        },
        ["slide-tasks-down--sm"]: {
          "0%": { transform: "translateY(-52px)" },
          "100%": { transform: "translateY(0px)" },
        },
        ["slide-tasks-up"]: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-68px)" },
        },
        ["slide-tasks-up--md"]: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-60px)" },
        },
        ["slide-tasks-up--sm"]: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-52px)" },
        },
        ["slide-welcome-down"]: {
          "0%": { transform: "translateY(-24px)", opacity: 0 },
          "100%": { transform: "translateY(0px)", opacity: 1 },
        },
        ["slide-welcome-left"]: {
          "0%": { transform: "translateX(0px)", opacity: 1 },
          "100%": { transform: "translateX(-24px)", opacity: 0 },
        },
      },
    },
    transitionDuration: {
      DEFAULT: ".25s",
    },
  },
  plugins: [],
};
