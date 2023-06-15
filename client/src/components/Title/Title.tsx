import { useState, useContext, useEffect } from "react";
import axios from 'axios';
import { FloatingTitle, Search, MobileSearch, DesktopTitle, MobileTitle } from './Title.styles.tsx'
import { LocationContext } from "../../contexts/LocationContext";
import geocoding from '../../utils/geocoding.tsx'; // Import the function
import reverseGeocoding from '../../utils/reverseGeocoding.tsx'; // Import the function

const TitleComponent = () => {
  const { setLocationData } = useContext(LocationContext);
  const [searchValue, setSearchValue] = useState<string>(''); 

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const locationName = await reverseGeocoding(position.coords.latitude, position.coords.longitude);
        if (locationName) {
          setSearchValue(locationName);
        }
      }, () => {
        console.log('Permission denied.');
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  }

  const handleKeyPress = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const coordinates = await geocoding(searchValue);
      if (coordinates) {
        const api_key = "7336de3bafdfe94a226fa9f29cf6ae52";
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.latitude}&lon=${coordinates.longitude}&exclude=minutely,hourly&appid=${api_key}`
        axios.get(url)
          .then((response) => {
            setLocationData(response.data);
          })
          .catch((error) => {
            console.error("Error fetching data: ", error);
          });
      }
    }
  }

  return (
    <FloatingTitle>
      <DesktopTitle>WeatherWise — <Search type="text" value={searchValue} onChange={handleSearchChange} onKeyPress={handleKeyPress}/></DesktopTitle>
      <MobileTitle>The Weather<MobileSearch type="text" value={searchValue} onChange={handleSearchChange} onKeyPress={handleKeyPress}/></MobileTitle>
    </FloatingTitle>
  );
}

export default TitleComponent;
