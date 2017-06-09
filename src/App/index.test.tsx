import * as React from 'react';
import * as ReactDOM from 'react-dom';
//import * as enzyme from 'enzyme'
import WeatherApp from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WeatherApp />, div);
});
