import { Box, Link, Typography } from "@material-ui/core";
import { Link as GatsbyLink } from "gatsby";
import React from "react";
import { Layout } from "../components/Layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Typography variant="h4" align="center" gutterBottom>
      Not found
    </Typography>
    <Typography align="center" gutterBottom>
      There's nothing here to find.
    </Typography>
    <Box display="flex" justifyContent="center">
      <Link component={GatsbyLink} to="/" variant="overline">
        Take me back
      </Link>
    </Box>
  </Layout>
);

export default NotFoundPage;
