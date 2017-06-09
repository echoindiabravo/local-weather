import sunnyDay from '../icons/sunny-day.png'
import darkNight from '../icons/dark-night.png'
import night from '../icons/night.png'
import rainyDay from '../icons/rainy-day.png'
import cold from '../icons/cold.png'
import sleet from '../icons/sleet.png'
import wind from '../icons/windy-day.png'
import fog from '../icons/foggy.png'
import cloudy from '../icons/overcast-day.png'
import partlyCloudyDay from '../icons/cloudy-day.png'
import poweredBy from '../icons/poweredby.png'

export const icons = {
  'clear-day': {src: sunnyDay, alt: 'Clear day icon', color: 'gold'},
  'clear-night': {src: night, alt: 'Clear night icon', color: 'lightyellow'},
  rain: {src: rainyDay, alt: 'Rainy day icon', color: 'lightsteelblue'},
  snow: {src: cold, alt: 'Snowflake icon', color: 'ghostwhite'},
  sleet: {src: sleet, alt: 'Sleet icon', color: 'whitesmoke'},
  wind: {src: wind, alt: 'Windy day icon', color: 'mediumspringgreen'},
  fog: {src: fog, alt: 'Foggy icon', color: 'darkseagreen'},
  cloudy: {src: cloudy, alt: 'Overcast day icon', color: 'silver'},
  'partly-cloudy-day': {src: partlyCloudyDay, alt: 'Partly cloudy icon', color: 'gainsboro'},
  'partly-cloudy-night': {src: darkNight, alt: 'Cloudy night icon', color: 'gainsboro'}
}

export const defaultLat = '40.814859299999995'
export const defaultLon = '-74.21031889999999'
export const defaultSearch = 'Search Local Weather'
export const darkSkyBase = 'https://cors.now.sh/https://api.darksky.net/forecast/d6428f72d9533b707f126e459e240b82/'
export const darkSkyExclude = '?exclude=minutely'
export const mqReverse = 'https://open.mapquestapi.com/nominatim/v1/reverse.php?'
export const mqSearch = 'https://open.mapquestapi.com/nominatim/v1/search.php?'
export const mqLat = '&lat='
export const mqLon = '&lon='
export const mqQuery = '&q='
export const mqParams = '&addressdetails=1&limit=1'
export const mqKey = 'key=83pwMd5tyzMLmG1fQ66U0K09odWQdTrA&format=json'
export const logo = poweredBy