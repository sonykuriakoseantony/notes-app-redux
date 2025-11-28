module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern: /(bg|text)-(orange|pink|purple|blue|yellow|gray)-(200|900)/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
