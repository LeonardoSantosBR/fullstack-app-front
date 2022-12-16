import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: `'Poppins', sans-serif;`,
  },

  breakpoints: {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "1400px",
    "2xl": "96em",
  },

  colors: {
    gray: {
      "900": "#181823",
      "800": "#1f2029",
      "700": "#353646",
      "600": "#4b4d63",
      "500": "#616488",
      "400": "#797d9a",
      "300": "#9699b8",
      "200": "#b3b5c6",
      "100": "#d1d2dc",
      "50": "#eeeef2",
    },
  },
});
