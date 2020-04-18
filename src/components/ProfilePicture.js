import { Box, makeStyles } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";

const useStyles = makeStyles({
  image: {
    position: "relative",
    display: "block",
    width: "150px",
    height: "150px",
    margin: "0 auto",
    borderRadius: "50%",
    overflow: "hidden",
    userSelect: "none",

    "&::before": {
      content: "''",
      display: "block",
      position: "absolute",
      top: "0",
      left: "0",
      zIndex: "1",
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      boxShadow: "inset 0px 0px 2px 0px rgba(0, 0, 0, 0.2)",
    },
  },
});

export const ProfilePicture = () => {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile-picture.jpg" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Box className={classes.image}>
      <Img fixed={data.placeholderImage.childImageSharp.fixed} />
    </Box>
  );
};
