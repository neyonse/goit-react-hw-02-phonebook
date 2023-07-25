import React, { Component } from 'react';
import { Section } from './Section/Section';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  onAddContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <AddContactForm onAddContact={this.onAddContact} />
        </Section>
        {this.state.contacts.length !== 0 && (
          <Section title="Contacts">
            <Filter />
            <ContactsList contacts={this.state.contacts} />
          </Section>
        )}
      </>
    );
  }
}
