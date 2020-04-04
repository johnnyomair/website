import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Styles from "./Projects.module.css";

export const Projects = () => {
  const data = useStaticQuery(graphql`
    query Projects {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        nodes {
          frontmatter {
            title
            description
            link
            date(formatString: "MMM YYYY")
          }
        }
      }
    }
  `);

  const projects = data.allMarkdownRemark.nodes.map(node => node.frontmatter);

  return (
    <>
      <h2>Recent projects</h2>
      <ul className={Styles.list}>
        {projects.map(project => (
          <li key={project.title} className={Styles.listItem}>
            <span>{project.date}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>Learn more</a>
          </li>
        ))}
      </ul>
    </>
  );
};
