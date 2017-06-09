import * as React from 'react';
import * as ReactDOM from 'react-dom';
import WeatherApp from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <WeatherApp />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

declare let module: {
  hot: {
    accept(): void;
  };
};

if (module.hot) {
  module.hot.accept();
}
