import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./contactForm.module.css";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: ""
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onAddContact(name, number);
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.Form} onSubmit={this.handleSubmit}>
        <label className={styles.FormLabel}>
          Name
          <input
            className={styles.FormInput}
            type="name"
            value={name}
            onChange={this.handleChange}
            name="name"
          />
        </label>
        <label className={styles.FormLabel}>
          Number
          <input
            className={styles.FormInput}
            type="name"
            value={number}
            onChange={this.handleChange}
            name="number"
          />
        </label>
        <button className={styles.FormButton} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired
};
