import RainIcon from "@mui/icons-material/Thunderstorm";
import SunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import SnowIcon from "@mui/icons-material/AcUnit";
import { Daily } from "../../types";
import useConvertToDay from "../../hooks/useConvertToDay";
import { DayContainer, DayForecast, DayName, DayTemp, DayIcon } from "./Day.styles.tsx";
import useConvertTemp from "../../hooks/useConvertTemp.tsx";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface DayProps {
  forecastData: Daily | null;
}

type IconType = OverridableComponent<SvgIconTypeMap<object, "svg">> & { muiName: string; };

export const Day: React.FC<DayProps> = ({ forecastData }) => {
  const forecastDescription = forecastData?.weather[0].main || "";
  const forecastDay = useConvertToDay(forecastData?.dt) || "";
  const forecastTemperature = useConvertTemp(forecastData?.temp.day) || 0;

  let Icon: IconType | undefined;

  if (forecastDescription === "Clear") {
    Icon = SunnyIcon;
  } else if (forecastDescription === "Clouds") {
    Icon = CloudIcon;
  } else if (forecastDescription === "Snow") {
    Icon = SnowIcon;
  } else if (forecastDescription === "Rain" || forecastDescription === "Thunderstorm" || forecastDescription === "Drizzle") {
    Icon = RainIcon;
  }

  return (
    <DayContainer>
      <DayName><h3>{forecastDay} ...</h3></DayName>
      <DayForecast>
        {forecastDescription}
        <DayIcon>{Icon && <Icon fontSize={"small"}/>}</DayIcon> /
        <DayTemp temp={forecastTemperature}>{forecastTemperature}°</DayTemp>
      </DayForecast>
    </DayContainer>
  );
};