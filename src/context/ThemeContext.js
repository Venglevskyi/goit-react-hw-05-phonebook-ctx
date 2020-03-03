import React, { Component } from "react";

const themeConfig = {
  light: {
    fontColor: "black",
    bodybg: "#fff"
  },
  dark: {
    fontColor: "white",
    bodybg: "#333333"
  }
};

const Context = React.createContext();

export default class ThemeContext extends Component {
  static Consumer = Context.Consumer;

  state = { theme: "light" };

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === "dark" ? "light" : "dark"
    }));
  };

  render() {
    return (
      <Context.Provider
        value={{
          type: this.state.theme,
          toggleTheme: this.toggleTheme,
          config: themeConfig[this.state.theme]
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
