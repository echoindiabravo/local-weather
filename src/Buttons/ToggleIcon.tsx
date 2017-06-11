import * as React from 'react';
import {ToggleProps} from '../types';

const ToggleIcon = ({seeHourly}: ToggleProps) => (
  seeHourly ? <i className="fa fa-minus-circle" /> : <i className="fa fa-plus-circle" />
);

export default ToggleIcon;