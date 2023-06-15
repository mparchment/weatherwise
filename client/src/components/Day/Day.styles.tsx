import styled from "styled-components";
import useReturnColor from "../../hooks/useReturnColor";

const DayContainer = styled.div`

`;

const DayName = styled.p`

`;

const DayIcon = styled.img`

`;

const DayTemp = styled.p<{ temp: number }>`
    color: ${props => useReturnColor(props.temp)};
`;

export {
    DayContainer,
    DayName,
    DayIcon,
    DayTemp
}