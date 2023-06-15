import RainIcon from "@mui/icons-material/Thunderstorm";
import SunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import SnowIcon from "@mui/icons-material/AcUnit";

import { DayContainer, DayIcon, DayName, DayTemp } from "./Day.styles.tsx";

interface DayProps {
    dayName: string;
    weatherForecast: string;
    tempForecast: number;
}

export function Day({
    dayName,
    weatherForecast,
    tempForecast,
  }: DayProps) {

    let Icon;
    if (weatherForecast === "Sunny") {
      Icon = SunnyIcon;
    } else if (weatherForecast === "Cloudy") {
      Icon = CloudIcon;
    } else if (weatherForecast === "Snowy") {
      Icon = SnowIcon;
    } else if (weatherForecast === "Rainy") {
      Icon = RainIcon;
    }

    return (
        <DayContainer>
            <DayName>{dayName} ...</DayName>
            <DayTemp temp={tempForecast}>{tempForecast}°</DayTemp>
        </DayContainer>
    );
}