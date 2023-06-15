import { WeatherContainer, Animation, DesktopLottie, MobileLottie, TemperatureBox, ActualTemperature, FeelsLikeTemperature, SunBox, SunTitle, SmallSunTitle, SunInfo, ForecastBox, ForecastTitle, WindBox, SideImage, CoverageBox, HumidityBox, AnimationBox } from './Info.styles.tsx'
import { useContext } from "react";
import { LocationContext } from "../../contexts/LocationContext";
import useConvertTemp from "../../hooks/useConvertTemp";

import WindPNG from '../../assets/icons8-wind-64.png'
import SunrisePNG from '../../assets/icons8-sunrise-64.png'
import SunsetPNG from '../../assets/icons8-sunset-64.png'
import HumidityPNG from '../../assets/icons8-hygrometer-512.png'
import CloudPNG from '../../assets/icons8-clouds-512.png'
import UVPNG from  '../../assets/icons8-summer-64.png'

import stormAnimation from '../../assets/icons8-storm.json';
import clearAnimation from '../../assets/icons8-sun.json';
import rainAnimation from '../../assets/icons8-rain.json';
import cloudAnimation from '../../assets/icons8-partly-cloudy-day.json';

import useConvertTimestamp from '../../hooks/useConvertTimestamp.tsx';

import { Day } from '.././Day/Day.tsx'

import Lottie from 'react-lottie';

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

  const firstDay = locationData?.daily[1] || null;
  const secondDay = locationData?.daily[2] || null;
  const thirdDay = locationData?.daily[3] || null;
  const fourthDay = locationData?.daily[4] || null;
  const fifthDay = locationData?.daily[5] || null;
  const sixthDay = locationData?.daily[6] || null;
  const seventhDay = locationData?.daily[7] || null;

  const windSpeed: number = locationData?.current.wind_speed || 0;
  const windDirection: number = locationData?.current.wind_deg || 0;
  const rotateDegree = `rotate(${windDirection}deg)`;

  const humidity: number = locationData?.current.humidity || 0;
  const cloudCoverage: number = locationData?.current.clouds || 0;


  const weatherDescription = locationData?.current.weather[0].main || "";

  let jsonData;
  let weatherBlurb;
  let currentWeather;
  

  if(weatherDescription === "Thunderstorm") {
    jsonData = stormAnimation;
    weatherBlurb = "Right now, there is a ...";
    currentWeather = "Storm"
  }

  else if(weatherDescription === "Clouds" || weatherDescription === "Haze") {
      jsonData = cloudAnimation;
      weatherBlurb = "Right now, it is ...";
      currentWeather = "Cloudy"
  }

  else if(weatherDescription === "Drizzle" || weatherDescription === "Rain") {
      jsonData = rainAnimation
      weatherBlurb = "Right now, there is ...";
      currentWeather = "Rain"
  }

  else {
      jsonData = clearAnimation;
      weatherBlurb = "Right now, it is ..."
      currentWeather = "Clear"
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: jsonData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
  };

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
        <Day forecastData={firstDay}/>
        <Day forecastData={secondDay}/>
        <Day forecastData={thirdDay}/>
        <Day forecastData={fourthDay}/>
        <Day forecastData={fifthDay}/>
        <Day forecastData={sixthDay}/>
        <Day forecastData={seventhDay}/>
      </ForecastBox>
      <WindBox>
        <h1>Wind</h1>
        <SideImage><img style={{ transform: rotateDegree }} src={WindPNG}/></SideImage>
        <p>{windSpeed} MPH</p>
      </WindBox>
      <CoverageBox>
        <h1>Coverage</h1>
        <SideImage><img src={CloudPNG}/></SideImage>
        <p>{cloudCoverage}%</p>
      </CoverageBox>
      <HumidityBox>
        <h1>Humidity</h1>
        <SideImage><img src={HumidityPNG}/></SideImage>
        <p>{humidity}%</p>
      </HumidityBox>
      <AnimationBox>
        <h1>{weatherBlurb}</h1>
        <Animation>
          <div><h2>{currentWeather}</h2></div>
          <DesktopLottie>
            <Lottie options={defaultOptions} style={{ height: "15.625rem", width: "15.625rem" }}/>
          </DesktopLottie>
          <MobileLottie>
            <Lottie options={defaultOptions} style={{ height: "7.5rem", width: "7.5rem" }}/>
          </MobileLottie>
        </Animation>
      </AnimationBox>
    </WeatherContainer>
  );
}

export default Info;
