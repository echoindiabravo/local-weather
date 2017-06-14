import * as React from 'react';
import * as moment from 'moment';
import {icons} from '../constants';
import {getMoonPhase, toCelsius} from '../utilities';
import {CurrentProps} from '../types';

const Current = ({weather, location, units}: CurrentProps) => (
  <div className="current">
    <div className="top-row">
      <div className="three-columns location">
        <h5>
          {location.address.city ? location.address.city.toUpperCase() :
           'UNDETERMINED'}, {location.address.state ? location.address.state.toUpperCase() :
           location.address.country.toUpperCase()}
        </h5>
      </div>
    </div>
    <div className="six-columns forecast-main">
      <span className="icon">
        <img 
          src={icons[weather.currently.icon].src} 
          alt={icons[weather.currently.icon].alt} 
          style={{width: '50px', height: '50px'}} 
        />
      </span>
      <span className="temp"> {units === 'F' ? Math.round(weather.currently.temperature) :
         Math.round(toCelsius(weather.currently.temperature))}&#176; 
      </span>
      <span className="detailsNow">{weather.currently.summary}</span>
    </div>
    <div className="six-columns forecast-sub">
      <span className="detailsHourly">{weather.hourly.summary}</span>
    </div>
    <br />
    <div className="six-columns earthwindfire">
      <span className="wind">Wind: {Math.round(weather.currently.windSpeed)} mph | </span>
      <span className="chanceRain">Precip: {Math.floor(weather.currently.precipProbability * 100)}% | </span>
      <span className="feelsLike">Feels Like: {units === 'F' ? Math.round(weather.currently.apparentTemperature) :
         Math.round(toCelsius(weather.currently.apparentTemperature))}&#176;</span>
      <br />
      <span className="sunrise">Sunrise: {moment.unix(weather.daily.data[0].sunriseTime).format('h:mm a')} | </span>
      <span className="sunset">Sunset: {moment.unix(weather.daily.data[0].sunsetTime).format('h:mm a')}</span>
      <br />
      <span className="moon">Moon: {getMoonPhase(weather.daily.data[0].moonPhase)} | </span>
      <span className="humidity">Humidity: {Math.floor(weather.currently.humidity * 100)}%</span>
    </div>
  </div>
);

export default Current;
