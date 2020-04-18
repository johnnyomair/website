import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import { theme } from "../../src/theme";

export const TopLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
