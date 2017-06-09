import * as React from 'react';

const Button = ({onClick, className = '', children}: any) => (
  <button
    onClick={onClick}
    className={className}
    type="button"
  >
    {children}
  </button>
);

export const ToggleIcon = ({seeHourly}: any) => (
  seeHourly ? <i className="fa fa-minus-circle" /> : <i className="fa fa-plus-circle" />
);

export default Button;
