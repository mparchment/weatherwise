import { createGlobalStyle } from 'styled-components';
import Bungee from '../fonts/Bungee-Regular.ttf';
 
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Bungee';
    src: local('Bungee'), url(${Bungee}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  html, body {
    margin: 0;
    height: 100%;
    overflow: hidden;
    font-family: 'Bungee', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #1e272e;
  }
  
  @media (max-width: 1366px) {
    body {
      overflow: scroll;
    }
  }
  
  ::selection {
    background: #000;
  }
  
  form, table {
    display:inline;
    margin:0px;
    padding:0px;
  }
`;
 
export default GlobalStyle;