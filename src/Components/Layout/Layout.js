import React from "react";
import PropTypes from "prop-types";
import withThemeContext from "../../hoc/withThemeContext";

import styles from "./layout.module.css";

const Layout = ({ children, config }) => (
  <div
    className={styles.Layout}
    style={{ background: config.bodybg, color: config.fontColor }}
  >
    {children}
  </div>
);

Layout.propTypes = {
  config: PropTypes.shape({
    bodybg: PropTypes.string.isRequired,
    fontColor: PropTypes.string.isRequired
  })
};

export default withThemeContext(Layout);
