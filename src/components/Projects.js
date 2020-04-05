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
            linkText
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
      <ul>
        {projects.map(project => (
          <li key={project.title} className={Styles.listItem}>
            <span className={Styles.date}>{project.date}</span>
            <h3 className={Styles.title}>{project.title}</h3>
            <p className={Styles.description}>{project.description}</p>
            <a
              href={project.link}
              title={project.linkText}
              className={Styles.link}
            >
              {project.linkText}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
