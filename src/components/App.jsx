import React, { Component } from 'react';
import { Section } from './Section/Section';
import { AddContactForm } from './AddContactForm/AddContactForm';
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
      <div>
        <Section title="Phonebook">
          <AddContactForm onAddContact={this.onAddContact} />
        </Section>
        {this.state.contacts.length !== 0 && (
          <Section title="Contacts">
            <ContactsList contacts={this.state.contacts} />
          </Section>
        )}
      </div>
    );
  }
}
