/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import PropTypes from "prop-types";
import "./layout.css";

const Layout = ({ children }) => {
  return children;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
