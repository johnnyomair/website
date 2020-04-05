import { mdiGithub, mdiGmail, mdiTwitter } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import Layout from "../components/layout";
import { ProfilePicture } from "../components/ProfilePicture";
import { Projects } from "../components/Projects";
import SEO from "../components/seo";
import Styles from "./index.module.css";
import { Divider } from "../components/Divider";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProfilePicture />
    <h1 className={Styles.title}>Johannes Obermair</h1>
    <p className={Styles.info}>Software developer from Salzburg, Austria.</p>
    <Divider />
    <Projects />
    <Divider />
    <div className={Styles.linksContainer}>
      <a
        href="mailto:johannes.obermair@gmail.com"
        title="Send me an email"
        className={Styles.link}
      >
        <Icon path={mdiGmail} size={1} />
      </a>
      <a
        href="https://www.twitter.com/johnnyomair"
        title="Link to my Twitter profile"
        className={Styles.link}
      >
        <Icon path={mdiTwitter} size={1} />
      </a>
      <a
        href="https://www.github.com/johnnyomair"
        title="Link to my GitHub profile"
        className={Styles.link}
      >
        <Icon path={mdiGithub} size={1} />
      </a>
    </div>
  </Layout>
);

export default IndexPage;
