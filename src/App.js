import React, { Component } from "react";

import uuid from "uuid";
import styles from "./base.module.css";

import Layout from "./Components/Layout/Layout";
import ContactForm from "./Components/ContactForm/ContactForm";
import Filter from "./Components/Filter/Filter";
import ContactList from "./Components/ContactList/ContactList";
import Toggler from "./Components/Toggler/Toggler";
import ThemeContext from "./context/ThemeContext";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
    ],
    filter: ""
  };

  componentDidMount() {
    const savedСontacts = localStorage.getItem("contacts");

    if (savedСontacts) {
      this.setState({
        contacts: JSON.parse(savedСontacts)
      });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    const newContact = {
      id: uuid(),
      name,
      number
    };
    const findContact = this.state.contacts.find(
      contact => contact.name === name
    );
    if (findContact) {
      alert(`${findContact.name} is already consist`);
      return;
    }
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });
  };

  removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId)
      };
    });
  };

  formFilter = filter => {
    this.setState({ filter });
  };

  getVisibleContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContact();
    return (
      <ThemeContext>
        <Layout>
          <Toggler />
          <h1 className={styles.title}>Phone book</h1>
          <ContactForm onAddContact={this.addContact} />
          <h2 className={styles.title}>Contacts</h2>
          <Filter
            value={filter}
            onChange={this.formFilter}
            visibleSearchContacts={visibleContacts}
            contacts={contacts}
            onRemoveContact={this.removeContact}
          />
          <ContactList
            contacts={contacts}
            onRemoveContact={this.removeContact}
          />
        </Layout>
      </ThemeContext>
    );
  }
}
