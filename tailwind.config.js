/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        marineBlue: "hsl(213, 96%, 18%)",
        purplishBlue: "hsl(243, 100%, 62%)",
        pastelBlue: "hsl(228, 100%, 84%)",
        lightBlue: "hsl(206, 94%, 87%)",
        strawberryRed: "hsl(354, 84%, 57%)",
        coolGray: "hsl(231, 11%, 63%)",
        lightGray: "hsl(229, 24%, 87%)",
        magnolia: "hsl(217, 100%, 97%)",
        alabaster: "hsl(231, 100%, 99%)",
        white: "hsl(0, 0%, 100%)",
        buttonHover: "#164a8a",
        inputActive: "#887fd6",
      },
      minWidth: {
        17: "17rem",
      },
      maxWidth: {
        60: "60rem",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".stepActive": {
          backgroundColor: "hsl(206, 94%, 87%)",
          color: "black",
          transition: "all 0.4s",
        },
        ".labelInput": {
          display: "flex",
          flexDirection: "column",
          fontWeight: "500",
        },
        ".input": {
          border: "1px solid hsl(229, 24%, 87%)",
          borderRadius: "0.5rem",
          padding: "0.75rem",
          marginTop: "7px",
        },
        ".label": {
          color: "hsl(213, 96%, 18%)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
