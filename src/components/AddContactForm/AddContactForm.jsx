import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './AddContactForm.module.css';

export class AddContactForm extends Component {
  state = {
    name: '',
    number: '',
    nameInputRef: createRef(),
    numberInputRef: createRef(),
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number, nameInputRef, numberInputRef } = this.state;

    if (name.trim() === '' || number.trim() === '') {
      if (name.trim() === '') {
        this.showAlertAndFocusInput('Name', nameInputRef);
      } else {
        this.showAlertAndFocusInput('Number', numberInputRef);
      }
      return;
    }

    const newContact = this.createNewContact(name, number);
    this.props.onAddContact(newContact);
    this.resetForm();
  };

  showAlertAndFocusInput = (fieldName, ref) => {
    alert(`${fieldName} field can not be empty!`);
    ref.current.focus();
    ref.current.value = '';
  };

  createNewContact(name, number) {
    return { id: nanoid(), name: name.trim(), number: number.trim() };
  }

  resetForm() {
    this.setState({ name: '', number: '' });
  }

  render() {
    const { name, number, nameInputRef, numberInputRef } = this.state;
    const nameProperties = {
      pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
      title:
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
    };
    const numberProperties = {
      pattern: '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
      title:
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
    };

    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <div className={css.inputWrap}>
          <label className={css.label} htmlFor="userName">
            Name
          </label>
          <input
            className={css.input}
            value={name}
            id="userName"
            type="text"
            name="name"
            pattern={nameProperties.pattern}
            title={nameProperties.title}
            required
            ref={nameInputRef}
            onChange={this.handleChange}
          />
        </div>
        <div className={css.inputWrap}>
          <label className={css.label} htmlFor="userNumber">
            Number
          </label>
          <input
            className={css.input}
            value={number}
            id="userNumber"
            type="tel"
            name="number"
            pattern={numberProperties.pattern}
            title={numberProperties.title}
            required
            ref={numberInputRef}
            onChange={this.handleChange}
          />
        </div>
        <button className={css.submitBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

AddContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
