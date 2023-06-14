import styled from 'styled-components';
import useReturnColor from "../../hooks/useReturnColor";

const WeatherContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 1.25rem;
  padding: 20px;
  height: 85%;
  user-select: none;

  @media (max-width: 1366px) {
    display: flex;
    flex-direction: column;
  }
`

const WeatherInfoDiv = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  font-family: "Bungee", sans-serif;
  color: #fff;
  padding: 15px;
`

const TemperatureBox = styled(WeatherInfoDiv)`
  grid-area: 1 / 1 / 3 / 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > p {
    margin-top: .625rem;
    margin-bottom: .625rem;
    line-height: 100%;
  }

  & > h1 {
    margin-top: .625rem;
    line-height: 100%;
    font-size: 1.5rem;
  }

  @media (max-width: 1366px) { order: 2; }
`

const FeelsLikeTemperature = styled.p`
    font-size: 20px;
`

const ActualTemperature = styled.p<{ convertedTemp: number }>`
  font-size: 6rem;
  font-weight: bold;
  color: ${props => useReturnColor(props.convertedTemp)};

  &::before {
    content: '${props => props.convertedTemp}°';
  }
`;

const SunBox = styled(WeatherInfoDiv)`
  grid-area: 1 / 2 / 3 / 5;
  @media (max-width: 1366px) { order: 3; }
`

const ForecastBox = styled(WeatherInfoDiv)`
  grid-area: 1 / 5 / 7 / 7;
  padding: 0;
  @media (max-width: 1366px) { order: 4; }
`

const WindBox = styled(WeatherInfoDiv)`
  grid-area: 1 / 7 / 3 / 8;
  @media (max-width: 1366px) { order: 5; }
`

const CoverageBox = styled(WeatherInfoDiv)`
  grid-area: 3 / 7 / 5 / 8;
  @media (max-width: 1366px) { order: 6; }
`

const HumidityBox = styled(WeatherInfoDiv)`
  grid-area: 5 / 7 / 7 / 8;
  @media (max-width: 1366px) { order: 7; }
`

const AnimationBox = styled(WeatherInfoDiv)`
  grid-area: 3 / 1 / 7 / 5;
  @media (max-width: 1366px) { order: 1; }
`

export {
    WeatherContainer,
    TemperatureBox,
    ActualTemperature,
    FeelsLikeTemperature,
    SunBox,
    ForecastBox,
    WindBox,
    CoverageBox,
    HumidityBox,
    AnimationBox
}