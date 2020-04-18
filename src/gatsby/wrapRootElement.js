import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import { theme } from "../theme";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {element}
  </ThemeProvider>
);
