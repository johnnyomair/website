import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: { fontFamily: ["'Manrope'", "sans-serif"] },
  palette: {
    primary: {
      main: "#212121",
      light: "#484848",
      dark: "#000000",
      contrastText: "#ffffff",
    },
    background: "#ffffff",
  },
});
