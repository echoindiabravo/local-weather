export interface WeatherA {
  currently: WeatherA1;
  hourly: WeatherA2;
  daily: WeatherA3;
}

export interface WeatherA1 {
  time: number;
  icon: string;
  temperature: number;
  summary: string;
  windSpeed: number;
  precipProbability: number;
  apparentTemperature: number;
  temperatureMax: number;
  temperatureMin: number;
  humidity: number;
}

export interface WeatherA2 {
  summary: string;
  data: Array<WeatherA1>;
}

export interface WeatherA3 {
  summary: string;
  data: Array<WeatherA4>;
}

export interface WeatherA4 {
  time: number;
  icon: string;
  temperature: number;
  summary: string;
  windSpeed: number;
  precipProbability: number;
  apparentTemperature: number;
  temperatureMax: number;
  temperatureMin: number;
  humidity: number;
  sunriseTime: number;
  sunsetTime: number;
  moonPhase: number;
}

export interface LocationA {
  address: LocationB;
}

export interface LocationB {
  city: string;
  state: string;
  country: string;
}

export interface SearchProps {
    value: string;
}

export interface FormProps {
  value: string;
  onChange?: React.FormEventHandler<SearchProps>;
  onSubmit: React.FormEventHandler<any>;
}

export interface HeaderProps {
  value: string;
  onChange: React.FormEventHandler<SearchProps>;
  onSubmit: React.FormEventHandler<any>;
  units?: 'F' | 'C';
}

export interface CurrentProps {
  weather: WeatherA;
  location: LocationA;
  units: 'F' | 'C';
}

export interface HourlyForecastProps {
  weather: WeatherA;
  units: 'F' | 'C';
  seeHourly: boolean;
  hourlyMsg: 'Show Hourly Forecast' | 'Hide Hourly Forecast';
  onClick: () => void;
}

export interface SevenDayProps {
  weather: WeatherA;
  units: 'F' | 'C';
}

export interface FooterProps {
  onClick: () => void;
  units: 'F' | 'C';
}

export interface ButtonProps {
  onClick: () => void;
  className?: string;
  children: React.ReactNode[];
}

export interface ToggleProps {
  seeHourly: boolean;
}
