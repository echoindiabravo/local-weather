import * as React from 'react';

interface SearchBar {
  value: string;
  onChange: any;
  onSubmit: any;
}

const SearchBar = ({value, onChange, onSubmit}: SearchBar) => (
  <form onSubmit={onSubmit} className="u-pull-right">
    <input type="text" value={value} onChange={onChange} />
    <input type="submit" value="Go!" />
  </form>
);

export default SearchBar;
