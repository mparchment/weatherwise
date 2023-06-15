import { useState, useEffect } from 'react';

const useConvertTimestamp = (timestamp: number | null): string => {
  const [convertedTimestamp, setConvertedTimestamp] = useState('');

  useEffect(() => {
    if (timestamp === null) {
      setConvertedTimestamp('');
      return;
    }

    const date = new Date(timestamp * 1000);
    const hour = date.getHours();
    const minutes = date.getMinutes();
    let converted = '';

    if (hour > 12) {
      converted = `${(hour % 12)}:${minutes} PM`;
    } else {
      converted = `${hour}:${minutes} AM`;
    }

    setConvertedTimestamp(converted);
  }, [timestamp]);

  return convertedTimestamp;
};

export default useConvertTimestamp;