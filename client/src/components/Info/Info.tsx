import { WeatherContainer, TemperatureBox, ActualTemperature, FeelsLikeTemperature, SunBox, SunTitle, SmallSunTitle, SunInfo, ForecastBox, ForecastTitle, WindBox, CoverageBox, HumidityBox, AnimationBox } from './Info.styles.tsx'
import { useContext } from "react";
import { LocationContext } from "../../contexts/LocationContext";
import useConvertTemp from "../../hooks/useConvertTemp";

import SunrisePNG from '../../assets/icons8-sunrise-64.png'
import SunsetPNG from '../../assets/icons8-sunset-64.png'
import UVPNG from  '../../assets/icons8-summer-64.png'
import useConvertTimestamp from '../../hooks/useConvertTimestamp.tsx';

import { Day } from '.././Day/Day.tsx'

const Info: React.FC = () => {
  const { locationData } = useContext(LocationContext);

  const temp: number = locationData?.current.temp || 0;
  const feelsLike: number = locationData?.current.feels_like || 0;
  const sunrise: number = locationData?.current.sunrise || 0;
  const sunset: number = locationData?.current.sunset || 0;
  const uvIndex: number = locationData?.current.uvi || 0;

  const convertedTemp: number = useConvertTemp(temp);
  const convertedFeelsLike: number = useConvertTemp(feelsLike);
  const convertedSunrise: string = useConvertTimestamp(sunrise);
  const convertedSunset: string = useConvertTimestamp(sunset);

  return (
    <WeatherContainer>
      <TemperatureBox>
        <h1>Temperature</h1>
        <ActualTemperature convertedTemp={convertedTemp} />
        <FeelsLikeTemperature>Feels like: {convertedFeelsLike}°</FeelsLikeTemperature>
      </TemperatureBox>
      <SunBox>
        <SunTitle>Sun Info</SunTitle>
        <SunInfo>
          <div>
            <SmallSunTitle>Sunrise</SmallSunTitle>
            <img src={SunrisePNG} alt='' />
            <SmallSunTitle>{convertedSunrise}</SmallSunTitle>
          </div>
          <div>
            <SmallSunTitle>UV Index</SmallSunTitle>
            <img src={UVPNG} alt='' />
            <SmallSunTitle>{uvIndex}</SmallSunTitle>
          </div>
          <div>
            <SmallSunTitle>Sunset</SmallSunTitle>
            <img src={SunsetPNG} alt='' />
            <SmallSunTitle>{convertedSunset}</SmallSunTitle>
          </div>
        </SunInfo>
      </SunBox>
      <ForecastBox>
        <ForecastTitle>7-Day Forecast</ForecastTitle>
      </ForecastBox>
      <WindBox />
      <CoverageBox />
      <HumidityBox />
      <AnimationBox />
    </WeatherContainer>
  );
}

export default Info;
