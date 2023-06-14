import { useState, useEffect } from 'react';

const useReturnColor = (temperature: number): string => {
  const [color, setColor] = useState('');

  useEffect(() => {
    let tempColor = '#d35400';

    if (temperature < 20) {
      tempColor = '#686de0';
    } else if (temperature < 30) {
      tempColor = '#2980b9';
    } else if (temperature < 40) {
      tempColor = '#3498db';
    } else if (temperature < 50) {
      tempColor = '#7ed6df';
    } else if (temperature < 60) {
      tempColor = '#f6e58d';
    } else if (temperature < 70) {
      tempColor = '#f1c40f';
    } else if (temperature < 80) {
      tempColor = '#f39c12';
    } else if (temperature < 90) {
      tempColor = '#ff7979';
    }

    setColor(tempColor);
  }, [temperature]);

  return color;
};

export default useReturnColor;
