import * as React from 'react';
import './index.css';
import {Current, HourlyForecast, SevenDayForecast} from '../Presentational';
import {Header, Footer} from '../Template';
import {Loading} from '../utilities';
import {WeatherA, LocationA, SearchProps} from '../types';
import {defaultLat,
        defaultLon,
        defaultSearch,
        darkSkyBase,
        darkSkyExclude,
        mqReverse,
        mqSearch,
        mqLat,
        mqLon,
        mqQuery,
        mqParams,
        mqKey} from '../constants';

interface WeatherAppState {
  weather: null | WeatherA;
  location: null | LocationA;
  units: 'F' | 'C';
  lat: string | number;
  lon: string | number;
  value: string;
  geocode: null | JSON;
  isLoading: boolean;
  seeHourly: boolean;
  hourlyMsg: 'Show Hourly Forecast' | 'Hide Hourly Forecast';
}

class WeatherApp extends React.Component<{}, WeatherAppState> {
  constructor (props: {}) {
    super(props);
    this.state = { 
      weather: null,
      location: null,
      units: 'F',
      lat: defaultLat,
      lon: defaultLon,
      value: defaultSearch,
      geocode: null,
      isLoading: false,
      seeHourly: false,
      hourlyMsg: 'Show Hourly Forecast'
    };

    this.getCoords = this.getCoords.bind(this);
    this.setWeather = this.setWeather.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.fetchWeather = this.fetchWeather.bind(this);
    this.fetchLocation = this.fetchLocation.bind(this);
    this.fetchUserInput = this.fetchUserInput.bind(this);
    this.toggleScale = this.toggleScale.bind(this);
    this.toggleHourly = this.toggleHourly.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getCoords () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position =>
        this.setState({lat: position.coords.latitude, lon: position.coords.longitude})
      );
    }
  }

  componentDidMount () {
    this.getCoords();
    const {lat, lon} = this.state;
    this.fetchWeather(lat, lon);
    this.fetchLocation(lat, lon);
  }

  setWeather (weather: WeatherA) {
    this.setState({weather, isLoading: false});
  }

  setLocation (location: LocationA) {
    this.setState({location});
  }

  fetchWeather (lat: string | number, lon: string | number) {
    this.setState({isLoading: true});
    fetch(`${darkSkyBase}${lat},${lon}${darkSkyExclude}`)
      .then(response => response.json())
      .then(weather => this.setWeather(weather));
  }

  fetchLocation (lat: string | number, lon: string | number) {
    fetch(`${mqReverse}${mqKey}${mqLat}${lat}${mqLon}${lon}`)
      .then(response => response.json())
      .then(location => this.setLocation(location));
  }

  fetchUserInput (value: string) {
    fetch(`${mqSearch}${mqKey}${mqQuery}${value}${mqParams}`)
      .then(response => response.json())
      .then(geocode => this.setState({geocode, lat: geocode[0].lat, lon: geocode[0].lon}));
  }

  toggleScale () {
    const {units} = this.state;
    if (units === 'F') {
      this.setState({units: 'C'});
    } else if (units === 'C') {
      this.setState({units: 'F'});
    }
  }

  toggleHourly () {
    const {seeHourly} = this.state;
    if (!seeHourly) {
      this.setState({seeHourly: true, hourlyMsg: 'Hide Hourly Forecast'});
    } else {
      this.setState({seeHourly: false, hourlyMsg: 'Show Hourly Forecast'});
    }
  }

  handleChange<T extends SearchProps> (e: React.ChangeEvent<T>): void {
    this.setState({value: e.currentTarget.value});
    this.fetchUserInput(e.currentTarget.value);
  }

  handleSubmit (e: React.FormEvent<void>): void {
    e.preventDefault();
    const {lat, lon} = this.state;
    this.fetchWeather(lat, lon);
    this.fetchLocation(lat, lon);
  }

  render () {
    const {weather, location, value, units, seeHourly, hourlyMsg, isLoading} = this.state;
    if (!weather || !location) { return null; }

    return (
      <div className="site-wrapper">
        {isLoading ? <Loading /> : null}
        <div className="header">
          <Header
            units={units}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            value={value} 
          />
        </div>
        <div className="container">
          <Current
            units={units}
            weather={weather}
            location={location} 
          />
          <HourlyForecast
            onClick={this.toggleHourly}
            hourlyMsg={hourlyMsg}
            seeHourly={seeHourly}
            units={units}
            weather={weather} 
          />
          <SevenDayForecast
            units={units}
            weather={weather} 
          />
          <Footer
            onClick={this.toggleScale}
            units={units} 
          />
        </div>
      </div>
    );
  }
}

export default WeatherApp;
