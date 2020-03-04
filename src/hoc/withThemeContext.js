import React from "react";
import PropTypes from "prop-types";
import ThemeContext from "../context/ThemeContext";

const withThemeContext = WrappedComponent => {
  return function withThemeContext(props) {
    return (
      <ThemeContext.Consumer>
        {({ type, config }) => (
          <WrappedComponent
            {...props}
            theme={type.theme}
            config={config}
            toggleTheme={type.toggleTheme}
          />
        )}
      </ThemeContext.Consumer>
    );
  };
};

withThemeContext.propTypes = {
  type: PropTypes.shape({
    theme: PropTypes.string.isRequired,
    toggleTheme: PropTypes.func.isRequired
  }),
  config: PropTypes.shape({
    bodybg: PropTypes.string.isRequired,
    fontColor: PropTypes.string.isRequired
  })
};

export default withThemeContext;
