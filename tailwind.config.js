module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  media: false, // or 'darkMode' (legacy) or 'class'
  theme: {
    fontSize: {
      xl: "1.2rem; line-height: 1.5rem;",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
