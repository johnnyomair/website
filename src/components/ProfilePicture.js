import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import Styles from "./ProfilePicture.module.css";

export const ProfilePicture = () => {
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
    <div className={Styles.image}>
      <Img fixed={data.placeholderImage.childImageSharp.fixed} />
    </div>
  );
};
