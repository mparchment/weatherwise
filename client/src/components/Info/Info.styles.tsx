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
  color: ${props => useReturnColor(props.convertedTemp)};

  &::before {
    content: '${props => props.convertedTemp}°';
  }
`;

const SunBox = styled(WeatherInfoDiv)`
  grid-area: 1 / 2 / 3 / 5;
  @media (max-width: 1366px) { order: 3; }
  display: flex;
  flex-direction: row;

  & > div {
    display: flex;
    align-items: center;
  }
`

const SunTitle = styled.h1`
  text-align: center;
  transform: rotate(180deg);
  writing-mode: vertical-lr;
  line-height: 100%;
  font-size: 2rem;
  margin-right: .625rem;

  @media (max-width: 1366px) {
    display: none;
  }
`

const SunInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > img {
      margin: 1rem;
    }
  }
`

const SmallSunTitle = styled.h2`
  margin: 0;

  @media (max-width: 1366px) {
    font-size: 1.1rem;
  }
`

const ForecastBox = styled(WeatherInfoDiv)`
  grid-area: 1 / 5 / 7 / 7;
  padding: 0;

  @media (max-width: 1366px) { order: 4; }

  display: flex;
  flex-direction: column;

  & > div:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.25);
  }

  & > div {
    flex-grow: 1;
  }
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

const ForecastTitle = styled.h1`
  font-size: 1.5rem;
  margin: 0 0 0 1rem;
`

export {
  WeatherContainer,
  TemperatureBox,
  ActualTemperature,
  FeelsLikeTemperature,
  SunBox,
  SunTitle,
  SunInfo,
  SmallSunTitle, 
  ForecastBox,
  ForecastTitle,
  WindBox,
  CoverageBox,
  HumidityBox,
  AnimationBox
}