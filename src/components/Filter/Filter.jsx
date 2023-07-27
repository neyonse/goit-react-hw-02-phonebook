import React, { Component } from 'react';
import css from './Filter.module.css';
import { LuSearch } from 'react-icons/lu';

export class Filter extends Component {
  onChange = e => {
    const { value } = e.currentTarget;

    this.props.onFilterChange(value);
  };

  render() {
    return (
      <div className={css.filter}>
        <i className={css.searchIcon} aria-hidden="true">
          <LuSearch />
        </i>
        <input
          className={css.input}
          id="search"
          type="search"
          placeholder="Search by name"
          value={this.props.value}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
