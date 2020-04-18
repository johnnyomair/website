import { Box, Grid, Link, makeStyles, Typography } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const useStyles = makeStyles((theme) => ({
  list: {
    display: "grid",
    gridRowGap: theme.spacing(4),
    margin: 0,
    padding: 0,
    listStyleType: "none",
  },
}));

export const Projects = () => {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query Projects {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        nodes {
          frontmatter {
            title
            description
            date(formatString: "MMM YYYY")
            links {
              url
              text
            }
          }
        }
      }
    }
  `);

  const projects = data.allMarkdownRemark.nodes.map((node) => node.frontmatter);

  return (
    <Box component="section">
      <Typography component="h2" variant="h5" gutterBottom>
        Recent projects
      </Typography>
      <ul className={classes.list}>
        {projects.map((project) => (
          <li key={project.title}>
            <Typography variant="overline">{project.date}</Typography>
            <Typography component="h3" variant="h6" gutterBottom>
              {project.title}
            </Typography>
            <Typography gutterBottom>{project.description}</Typography>
            <Grid container spacing={2}>
              {project.links.map((link) => (
                <Grid key={link.url} item>
                  <Link href={link.url} title={link.text} variant="button">
                    {link.text}
                  </Link>
                </Grid>
              ))}
            </Grid>
          </li>
        ))}
      </ul>
    </Box>
  );
};
