import React from "react";
import withThemeContext from "../../hoc/withThemeContext";

import styles from "./toggler.module.css";

const Toggler = ({ theme, toggleTheme }) => (
  <div className={styles.themeSelector}>
    <label className={styles.switch}>
      <input
        type="checkbox"
        checked={theme.type === "light"}
        onChange={event => toggleTheme(event.target.value)}
      />
      <span className={styles.slider}></span>
    </label>
  </div>
);

export default withThemeContext(Toggler);
