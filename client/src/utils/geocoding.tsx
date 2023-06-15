import axios from 'axios';

interface Coordinates {
  latitude: number;
  longitude: number;
}

const geocoding = async (locationName: string): Promise<Coordinates | null> => {
  const apiKey = 'f0fffc0f17824cba801c2057398d6e76';

  try {
    const response = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
        locationName
      )}&key=${apiKey}`
    );

    if (response.data.results.length > 0) {
      const { lat, lng } = response.data.results[0].geometry;
      return { latitude: lat, longitude: lng };
    } else {
      console.error('Geocoding API request failed.');
      return null;
    }
  } catch (error) {
    console.error('Error while geocoding:', error);
    return null;
  }
};

export default geocoding;
