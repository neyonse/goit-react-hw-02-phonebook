import React from 'react';
import css from './ContactsList.module.css';

export const ContactsList = ({ contacts }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            {name}: {number}
          </li>
        );
      })}
    </ul>
  );
};
