import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: `'Poppins', sans-serif;`,
  },

   breakpoints : {
    sm: '570px',
    md: '1300px',
    lg: '1400px',
    xl: '1877px',
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
