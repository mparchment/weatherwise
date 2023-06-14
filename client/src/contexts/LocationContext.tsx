import { createContext } from 'react';
import { LocationType } from '../types';

export type LocationContextType = {
  location: LocationType | null;
  setLocation: (location: LocationType | null) => void;
  lon: number | null;
  lat: number | null;
  weather: string | null;
  weatherDescription: string | null;
  weatherIcon: string | null;
  temp: number | null;
  feelsLike: number | null;
  temp_min: number | null;
  temp_max: number | null;
  pressure: number | null;
  humidity: number | null;
  visibility: number | null;
  windSpeed: number | null;
  windDeg: number | null;
  clouds: number | null;
  dt: number | null;
  sysType: number | null;
  sysId: number | null;
  country: string | null;
  sunrise: number | null;
  sunset: number | null;
  timezone: number | null;
  id: number | null;
  locationName: string | null;
  cod: number | null;
};

export const LocationContext = createContext<LocationContextType>({
  location: null,
  setLocation: () => { console.log('setLocation function not yet available') },
  lon: null,
  lat: null,
  weather: null,
  weatherDescription: null,
  weatherIcon: null,
  temp: null,
  feelsLike: null,
  temp_min: null,
  temp_max: null,
  pressure: null,
  humidity: null,
  visibility: null,
  windSpeed: null,
  windDeg: null,
  clouds: null,
  dt: null,
  sysType: null,
  sysId: null,
  country: null,
  sunrise: null,
  sunset: null,
  timezone: null,
  id: null,
  locationName: null,
  cod: null
});
