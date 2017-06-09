import * as React from 'react';
import * as moment from 'moment';
import {icons} from '../constants';
import {toCelsius} from '../utilities';

interface SevenDayProps {
  weather: any;
  units: 'F' | 'C';
}

const SevenDayForecast = ({weather, units}: SevenDayProps) => {
  const days = [0, 1, 2, 3, 4, 5, 6];
  return (
    <div className="sevenDay">
      {days.map(day =>
        <div className={`pod${day}`} key={day.toString()} style={{backgroundColor: icons[weather.daily.data[day].icon].color}}>
          <h5>{moment().add(day, 'd').format('dddd, MMMM Do')}</h5>
          <p>
            <img src={icons[weather.daily.data[day].icon].src} alt={icons[weather.daily.data[day].icon].alt} style={{width: '25px', height: '25px'}} />
            <span className="forecast">
              <strong> {units === 'F' ? Math.round(weather.daily.data[day].temperatureMax) : Math.round(toCelsius(weather.daily.data[day].temperatureMax))}&#176;</strong>
              <span style={{opacity: 0.4}}> | {units === 'F' ? Math.round(weather.daily.data[day].temperatureMin) : Math.round(toCelsius(weather.daily.data[day].temperatureMin))}&#176;</span> - {weather.daily.data[day].summary}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default SevenDayForecast;
