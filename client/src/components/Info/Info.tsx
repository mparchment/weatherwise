import { WeatherContainer, TemperatureBox, ActualTemperature, FeelsLikeTemperature, SunBox, ForecastBox, WindBox, CoverageBox, HumidityBox, AnimationBox } from './Info.styles.tsx'
import { LocationContext } from "../../contexts/LocationContext";
import useConvertTemp from "../../hooks/useConvertTemp";
import { useContext } from "react";

const Info: React.FC = () => {
    const { temp, feelsLike } = useContext(LocationContext);
    const convertedTemp: number = useConvertTemp(temp);
    const convertedFeelsLike: number = useConvertTemp(feelsLike);

    return (
      <WeatherContainer>
        <TemperatureBox>
            <h1>Temperature</h1>
                <ActualTemperature convertedTemp={convertedTemp} />
                <FeelsLikeTemperature>Feels like: {convertedFeelsLike}°</FeelsLikeTemperature>
        </TemperatureBox>
        <SunBox />
        <ForecastBox />
        <WindBox />
        <CoverageBox />
        <HumidityBox />
        <AnimationBox />
      </WeatherContainer>
    );
  }
  
  export default Info;