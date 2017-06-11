import * as React from 'react';
import {Button} from '../Buttons';
import {logo} from '../constants';
import {FooterProps} from '../types';

const Footer = ({onClick, units}: FooterProps) => (
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

export default Footer;