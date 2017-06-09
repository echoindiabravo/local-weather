import * as React from 'react';
import SearchBar from '../Forms';
import Button from '../Buttons';
import {logo} from '../constants';

interface HeaderProps {
  value: string;
  onChange: any;
  onSubmit: any;
  units: 'F' | 'C';
}

export const Header = ({units, value, onChange, onSubmit}: HeaderProps) => (
  <div className="navbar">
    <h2>Local<i className="fa fa-umbrella fa-rotate-45" />Weather</h2>
    <SearchBar
      value={value}
      onChange={onChange}
      onSubmit={onSubmit} 
    />
  </div>
);

interface FooterProps {
  onClick: () => void;
  units: 'F' | 'C';
}

export const Footer = ({onClick, units}: FooterProps) => (
  <footer className="footer">
    <Button onClick={onClick}>
      Toggle Scale ({units}&#176;)
    </Button>
    <p><a href="https://darksky.net/poweredby/"><img src={logo} alt="Powered by Dark Sky" /></a></p>
    <p>Icons by <a href="http://www.freepik.com/">Freepik</a> from 
    <a href="http://www.flaticon.com/">www.flaticon.com</a>.</p>
    <p><small><a href="https://codepen.io/echoindiabravo">EIB</a>, &#169; 2017.  All rights reserved.</small></p>
  </footer>
);
