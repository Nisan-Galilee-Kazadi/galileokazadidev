const config = {
  content: ["./src/**/*.html"],
  theme: {
    screens: {
      as: "1px",
      xs: "480px",
      sm: "640px",
      md: "875px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      backgroundImage: {
        "nav-logo": "url('/images/logos.png') ",
      },
    },
  },
  plugins: [],
};

export default config;
