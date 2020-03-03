import React from "react";
import ThemeContext from "../context/ThemeContext";

const withThemeContext = WrappedComponent => {
  return function withThemeContext(props) {
    return (
      <ThemeContext.Consumer>
        {ctx => <WrappedComponent {...props} theme={ctx.type} config={ctx.config} toggleTheme={ctx.toggleTheme}/>}
      </ThemeContext.Consumer>
    );
  };
};

export default withThemeContext;
