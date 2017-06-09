import * as React from 'react';

export const toCelsius = (fahrenheit: number) => (fahrenheit - 32) * 5 / 9;

export function getMoonPhase (num: number) {
  let moonPhase = '';
  if (num === 0) {
    moonPhase = 'New Moon';
  } else if (num > 0 && num < 0.25) {
    moonPhase = 'Waxing Crescent';
  } else if (num === 0.25) {
    moonPhase = 'First Quarter';
  } else if (num > 0.25 && num < 0.5) {
    moonPhase = 'Waxing Gibbous';
  } else if (num === 0.5) {
    moonPhase = 'Full Moon';
  } else if (num > 0.5 && num < 0.75) {
    moonPhase = 'Waning Gibbous';
  } else if (num === 0.75) {
    moonPhase = 'Last Quarter';
  } else if (num > 0.75 && num < 1) {
    moonPhase = 'Waning Crescent';
  }
  return moonPhase;
}

export const Loading = () => (
  <div className="loading">
    <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
    <span className="sr-only">Loading...</span>
  </div>
);
