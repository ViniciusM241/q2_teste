import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, html {
    width: 100vh;
    min-height: 100vh;
    font-weight: 600;
    font-size: 1rem;
    font-family: 'IBM Plex Sans', sans-serif;
  }
`;

export default GlobalStyle;
