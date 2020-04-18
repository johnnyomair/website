import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  content: {
    display: "grid",
    maxWidth: 400,
    margin: "0 auto",
    padding: theme.spacing(6, 2),
    gridRowGap: theme.spacing(6),
  },
}));

export const Layout = ({ children }) => {
  const classes = useStyles();

  return <main className={classes.content}>{children}</main>;
};
