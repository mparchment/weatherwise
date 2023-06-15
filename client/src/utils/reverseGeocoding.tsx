import axios from 'axios';

const reverseGeocoding = async (latitude: number, longitude: number) => {
  const apiKey = 'f0fffc0f17824cba801c2057398d6e76';
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (response.data.results && response.data.results.length > 0) {
      const { town } = response.data.results[0].components;
      return town;
    } else {
      throw new Error('No location found');
    }
  } catch (error) {
    console.error('Failed to get location name:', error);
    return null;
  }
};

export default reverseGeocoding;
