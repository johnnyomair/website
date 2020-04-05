import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import Styles from "./404.module.css";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 className={Styles.title}>Not found</h1>
    <p className={Styles.info}>There's nothing here to find.</p>
    <div className={Styles.linkContainer}>
      <Link to="/" className={Styles.link}>
        Take me back
      </Link>
    </div>
  </Layout>
);

export default NotFoundPage;
