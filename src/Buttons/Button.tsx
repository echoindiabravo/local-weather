import * as React from 'react';
import {ButtonProps} from '../types';

const Button = ({onClick, className = '', children}: ButtonProps) => (
  <button
    onClick={onClick}
    className={className}
    type="button"
  >
    {children}
  </button>
);

export default Button;