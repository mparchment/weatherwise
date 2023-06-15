import { useState, useEffect } from 'react';

const useConvertToDay = (timestamp: number | undefined): string => {
  const [day, setDay] = useState('');

  useEffect(() => {
    if (timestamp !== undefined) {
      const date = new Date(timestamp * 1000);
      const dayOfWeek = dayOfWeekAsInteger(date.getDay());
      setDay(dayOfWeek);
    }
  }, [timestamp]);

  return day;
};

const dayOfWeekAsInteger = (day: number): string => {
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  return days[day];
};

export default useConvertToDay;