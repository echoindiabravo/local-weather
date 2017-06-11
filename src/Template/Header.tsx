import * as React from 'react';
import SearchBar from '../Forms';
import {HeaderProps} from '../types';

const Header = ({units, value, onChange, onSubmit}: HeaderProps) => (
  <div className="navbar">
    <h2>Local<i className="fa fa-umbrella fa-rotate-45" />Weather</h2>
    <SearchBar
      value={value}
      onChange={onChange}
      onSubmit={onSubmit} 
    />
  </div>
);

export default Header;