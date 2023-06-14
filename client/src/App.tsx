import { useState, useEffect } from 'react';
import axios from 'axios';
import Title from './components/Title/Title';
import Info from './components/Info/Info';
import { LocationContext } from "./contexts/LocationContext";
import { LocationType } from './types';

function App() {
  const [location, setLocation] = useState<LocationType | null>(null);

  const api_key = "7336de3bafdfe94a226fa9f29cf6ae52";

  const reqLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const coords_url = `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${api_key}`
      axios.get(coords_url)
        .then((response) => {
          setLocation(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    })
  }
  
  useEffect(() => {
      reqLocation();
  }, [])


  return (
    <LocationContext.Provider value={{ 
      location, 
      setLocation, 
      lon: location?.coord?.lon || null,
      lat: location?.coord?.lat || null,
      weather: location?.weather?.[0]?.main || null,
      weatherDescription: location?.weather?.[0]?.description || null,
      weatherIcon: location?.weather?.[0]?.icon || null,
      temp: location?.main?.temp || null,
      feelsLike: location?.main?.feels_like || null,
      temp_min: location?.main?.temp_min || null,
      temp_max: location?.main?.temp_max || null,
      pressure: location?.main?.pressure || null,
      humidity: location?.main?.humidity || null,
      visibility: location?.visibility || null,
      windSpeed: location?.wind?.speed || null,
      windDeg: location?.wind?.deg || null,
      clouds: location?.clouds?.all || null,
      dt: location?.dt || null,
      sysType: location?.sys?.type || null,
      sysId: location?.sys?.id || null,
      country: location?.sys?.country || null,
      sunrise: location?.sys?.sunrise || null,
      sunset: location?.sys?.sunset || null,
      timezone: location?.timezone || null,
      id: location?.id || null,
      locationName: location?.name || null,
      cod: location?.cod || null
    }}>
      <Title />
      <Info />
    </LocationContext.Provider>
  );
}

export default App;
