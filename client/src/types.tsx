export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Current {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: Weather[];
  wind_deg: number;
  wind_speed: number;
}

export interface Temperature {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

export interface WeatherDetails {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Daily {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: Temperature;
  pressure: number;
  humidity: number;
  weather: WeatherDetails[];
  speed: number;
  deg: number;
  clouds: number;
}

export interface WeatherAPIResponse {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: Current;
  daily: Daily[];
}
