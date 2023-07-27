import React, { Component } from 'react';
import css from './ContactCard.module.css';

export class ContactCard extends Component {
  onPressDelete = () => {
    // this.props.onDelete(e.currentTarget.parentNode.id);

    this.props.onDelete(this.props.id);
  };

  render() {
    const { id, name, number } = this.props;

    return (
      <li className={css.contactCard} id={id}>
        <p className={css.contactDetails}>
          {name}: <span className={css.contactNumber}>{number}</span>
        </p>
        <button className={css.deleteBtn} onClick={this.onPressDelete}>
          Delete
        </button>
      </li>
    );
  }
}
