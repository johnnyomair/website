import { Box, IconButton, Typography } from "@material-ui/core";
import { Github, Gmail, Twitter } from "mdi-material-ui";
import React from "react";
import { Layout } from "../components/Layout";
import { ProfilePicture } from "../components/ProfilePicture";
import { Projects } from "../components/Projects";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProfilePicture />
    <Box>
      <Typography variant="h4" align="center" gutterBottom>
        Johannes Obermair
      </Typography>
      <Typography align="center">
        Software developer from Salzburg, Austria.
      </Typography>
    </Box>
    <Projects />
    <Box display="flex" justifyContent="center">
      <IconButton
        component="a"
        href="mailto:johannes.obermair@gmail.com"
        title="Send me an email"
        color="primary"
      >
        <Gmail />
      </IconButton>
      <IconButton
        component="a"
        href="https://www.twitter.com/johnnyomair"
        title="Link to my Twitter profile"
        color="primary"
      >
        <Twitter />
      </IconButton>
      <IconButton
        component="a"
        href="https://www.github.com/johnnyomair"
        title="Link to my GitHub profile"
        color="primary"
      >
        <Github />
      </IconButton>
    </Box>
  </Layout>
);

export default IndexPage;
