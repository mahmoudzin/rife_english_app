/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
      },
    },
    fontSize: {
      sm: "var(--font-size-small)",
      base: ["16px", "24px"],
      lg: "var(--font-size-lg)",
      xl: "var(--font-size-xl)",
    },
  },
};
