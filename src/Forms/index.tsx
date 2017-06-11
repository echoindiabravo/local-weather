import * as React from 'react';
import {FormProps} from '../types';

const SearchBar = ({value, onChange, onSubmit}: FormProps) => (
  <form onSubmit={onSubmit} className="u-pull-right">
    <input type="text" value={value} onChange={onChange} />
    <input type="submit" value="Go!" />
  </form>
);

export default SearchBar;
