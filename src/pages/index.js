import { mdiGithubCircle, mdiGmail, mdiTwitter } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import Image from "../components/image";
import Layout from "../components/layout";
import { OfflineIndicator } from "../components/OfflineIndicator";
import SEO from "../components/seo";
import { useNetwork } from "../utils/useNetwork";
import Styles from "./index.module.css";

const IndexPage = () => {
  const isOnline = useNetwork();

  return (
    <Layout>
      <SEO title="Home" />
      <Image />
      <h1>Johannes Obermair</h1>
      <p>Software developer from Salzburg, Austria.</p>
      <div className={Styles.social}>
        <a
          href="mailto:johannes.obermair@gmail.com"
          title="Send me an email"
          className={`${Styles.link} ${Styles.gmail}`}
        >
          <Icon path={mdiGmail} size={1.5} />
        </a>
        <a
          href="https://www.twitter.com/johnnyomair"
          title="Link to my Twitter profile"
          className={`${Styles.link} ${Styles.twitter}`}
        >
          <Icon path={mdiTwitter} size={1.5} />
        </a>
        <a
          href="https://www.github.com/johnnyomair"
          title="Link to my GitHub profile"
          className={`${Styles.link} ${Styles.github}`}
        >
          <Icon path={mdiGithubCircle} size={1.5} />
        </a>
      </div>
      {!isOnline && <OfflineIndicator />}
    </Layout>
  );
};

export default IndexPage;
