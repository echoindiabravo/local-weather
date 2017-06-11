import * as React from 'react';
import * as moment from 'moment';
import {icons} from '../constants';
import {toCelsius} from '../utilities';
import {Button, ToggleIcon} from '../Buttons';
import {HourlyForecastProps} from '../types';

const HourlyForecast = ({weather, units, seeHourly, hourlyMsg, onClick}: HourlyForecastProps) => {
  const hours: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="hourly">
      <div className="hourly-toggle">
        <Button onClick={onClick}>
          {hourlyMsg} <ToggleIcon seeHourly={seeHourly} />
        </Button>
      </div>
      <div className="hourly-forecast" style={{display: seeHourly ? 'block' : 'none'}}>
        {hours.map(hour =>
          <div 
            className={`pod${hour}`}
            key={hour.toString()}
            style={{'backgroundColor': icons[weather.hourly.data[hour].icon].color}}
          >
            <h5>{moment.unix(weather.hourly.data[hour].time).format('h a')}</h5>
            <p>
              <img 
                src={icons[weather.hourly.data[hour].icon].src}
                alt={icons[weather.hourly.data[hour].icon].alt}
                style={{width: '25px', height: '25px'}} 
              />
              <span className="forecast">
                <strong> 
                  {units === 'F' ? Math.round(weather.hourly.data[hour].temperature) :
                   Math.round(toCelsius(weather.hourly.data[hour].temperature))}&#176;
                </strong> - {weather.hourly.data[hour].summary}.
                <span 
                  style={{opacity: 0.4}}
                > {units === 'F' ? Math.round(weather.hourly.data[hour].apparentTemperature) :
                 Math.round(toCelsius(weather.hourly.data[hour].apparentTemperature))}&#176; | Precip {
                   Math.round(weather.hourly.data[hour].precipProbability)}%
                </span>
              </span>
            </p>
          </div>
        )}
        <hr />
      </div>
    </div>
  );
};

export default HourlyForecast;
