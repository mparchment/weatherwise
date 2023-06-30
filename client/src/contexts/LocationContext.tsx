import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { WeatherAPIResponse } from '../types';

interface LocationContextInterface {
  locationData: WeatherAPIResponse | null;
  setLocationData: React.Dispatch<React.SetStateAction<WeatherAPIResponse | null>>;
}

const defaultLocationContext: LocationContextInterface = {
  locationData: null,
  setLocationData: () => { console.warn('No location context provider') }, 
};

export const LocationContext = createContext<LocationContextInterface>(defaultLocationContext);

export const LocationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locationData, setLocationData] = useState<WeatherAPIResponse | null>(null);

  const api_key = import.meta.env.VITE_API_KEY;

  const reqLocation = async () => {
    try {
      const pos = await new Promise((resolve, reject) => 
        navigator.geolocation.getCurrentPosition(resolve, reject)
      ) as GeolocationPosition;

      const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&exclude=minutely,hourly&appid=${api_key}`
      const response = await axios.get(url);
      setLocationData(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  useEffect(() => {
      reqLocation();
  }, []);

  return (
    <LocationContext.Provider value={{ locationData, setLocationData }}>
      {children}
    </LocationContext.Provider>
  );
};
