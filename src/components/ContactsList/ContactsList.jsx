import React, { Component } from 'react';
import css from './ContactsList.module.css';
import { ContactCard } from 'components/ContactCard/ContactCard';

export class ContactsList extends Component {
  onDelete = id => {
    this.props.onDeleteContact(id);
  };

  render() {
    const { contacts } = this.props;

    return (
      <ul className={css.list}>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactCard
              key={id}
              id={id}
              name={name}
              number={number}
              onDelete={this.onDelete}
            />
          );
        })}
      </ul>
    );
  }
}
