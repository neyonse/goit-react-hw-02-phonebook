import React from 'react';
import css from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <div className={css.filter}>
      <label className={css.label} htmlFor="search">
        Search
      </label>
      <input
        className={css.input}
        id="search"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search by name"
      />
    </div>
  );
};
