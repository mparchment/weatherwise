import styled from "styled-components";
import useReturnColor from "../../hooks/useReturnColor";

const DayContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 1rem 1rem 1.25rem;

    & > div {
        display: flex;
        align-items: center;
        flex-grow: 1;
    }
`;

const DayName = styled.div`
    & > h3 {
        margin: 0;
    }
`;

const DayIcon = styled.span`
    margin-left: .625rem;
    margin-right: .625rem;
    margin-top: .5rem;
`;

const DayForecast = styled.div`

`;

const DayTemp = styled.div<{ temp: number }>`
    margin-left: .625rem;
    margin-bottom: 0;
    margin-top: 0;
    margin-right: 0;
    color: ${props => useReturnColor(props.temp)};
`;

export {
    DayContainer,
    DayForecast,
    DayName,
    DayIcon,
    DayTemp
}