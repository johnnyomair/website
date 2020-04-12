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
    <>
      <h2>Recent projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.title} className={Styles.listItem}>
            <span className={Styles.date}>{project.date}</span>
            <h3 className={Styles.title}>{project.title}</h3>
            <p className={Styles.description}>{project.description}</p>
            {project.links.map((link) => (
              <span key={link.url} className={Styles.linkContainer}>
                <a href={link.url} title={link.text}>
                  {link.text}
                </a>
              </span>
            ))}
          </li>
        ))}
      </ul>
    </>
  );
};
