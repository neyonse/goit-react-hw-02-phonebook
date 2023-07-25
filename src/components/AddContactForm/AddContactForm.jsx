import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './AddContactForm.module.css';

export class AddContactForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (name.trim() !== '' && number.trim() !== '') {
      const newContact = {
        id: nanoid(),
        name: name.trim(),
        number: number.trim(),
      };

      this.props.onAddContact(newContact);
    }

    form.reset();
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <div className={css.inputWrap}>
          <label className={css.label} htmlFor="userName">
            Name
          </label>
          <input
            className={css.input}
            id="userName"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div className={css.inputWrap}>
          <label className={css.label} htmlFor="userNumber">
            Number
          </label>
          <input
            className={css.input}
            id="userNumber"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <button className={css.submitBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
