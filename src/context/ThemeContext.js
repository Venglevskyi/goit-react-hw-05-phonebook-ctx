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

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === "dark" ? "light" : "dark"
    }));
  };

  state = { theme: "light", toggleTheme: this.toggleTheme };

  componentDidMount() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      this.setState({
        theme: JSON.parse(savedTheme)
      });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.theme !== this.state.theme) {
      localStorage.setItem("theme", JSON.stringify(this.state.theme));
    }
  }

  render() {
    return (
      <Context.Provider
        value={{
          type: this.state,
          config: themeConfig[this.state.theme]
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
