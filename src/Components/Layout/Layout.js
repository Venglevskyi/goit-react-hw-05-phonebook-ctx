import React from "react";
import "./layout.css";
import withThemeContext from "../../hoc/withThemeContext";

const Layout = ({ children, config }) => <div className="Layout" style={{background: config.bodybg, color: config.fontColor}}>{children}</div>;

export default withThemeContext(Layout);
