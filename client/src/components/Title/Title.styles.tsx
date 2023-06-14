import styled, { keyframes } from 'styled-components';

const Title = styled.div`
  text-align: center;
`

const Header = styled.h1`
  -webkit-text-stroke: 2px #000000;
  text-shadow: 5px 5px 0 #000000;
  font-family: "Bungee", sans-serif;
  color: #fff;
  font-size: 2.5rem;
  text-transform: uppercase;
  user-select: none;
`

const DesktopTitle = styled(Header)`
  margin: 0;
  padding-left: 25rem;

  @media (max-width: 1366px) {
    display: none;
  }
`

const MobileTitle = styled(Header)`
  line-height: 80%;
  margin-bottom: 0;

  @media (min-width: 1366px) {
    display: none;
  }
`

const Search = styled.input`
  -webkit-text-stroke: 3px #000000;
  text-shadow: 5px 5px 0 #000000;
  text-transform: uppercase;
  user-select: none;
  display: inline-block;
  background: transparent;
  border: 0;
  font-size: 2.5rem;
  font-family: "Bungee", sans-serif;
  color: #fff;
  text-decoration: underline white;
  text-underline-offset: 7px;
  height: 75px;
  cursor: alias;

  &:focus {
    outline: none;
  }

  @media (max-width: 1366px) {
    text-align: center;
  }
`

const MobileSearch = styled(Search)`
  width: 100vw;
`

const Floating = keyframes`
  0% { transform: translate(0,  0px); }
  50%  { transform: translate(0, 15px); }
  100%   { transform: translate(0, -0px); }
`

const FloatingTitle = styled(Title)`
  animation: ${Floating} 3s infinite ease-in-out;
`

export {
    Search,
    MobileSearch,
    DesktopTitle,
    MobileTitle,
    FloatingTitle
}