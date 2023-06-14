import { useState, useEffect } from 'react';

const useConvertTemp = (tempKelvin: number | null): number => {
  const [convertedTemp, setConvertedTemp] = useState(0);

  useEffect(() => {
    if (tempKelvin === null) {
      setConvertedTemp(0);
    } else {
      const converted = Math.round((((tempKelvin - 273.15) * 9) / 5) + 32);
      setConvertedTemp(converted);
    }
  }, [tempKelvin]);

  return convertedTemp;
};

export default useConvertTemp;